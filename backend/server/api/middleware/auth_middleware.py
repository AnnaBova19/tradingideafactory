import json

import requests

from django.http import JsonResponse, HttpResponseForbidden, HttpResponse

from backend import settings
from server.models import User


class AuthMiddleware(object):
    """
    Obtains the Access Token from the Authorization Header and validates it.

    Clients should authenticate by passing the token key in the 'Authorization'
    HTTP header, prepended with the string 'Bearer '. For example:

    authorization: Bearer 401f7ac837da42b97f613d789819ff93537bee6a
    """

    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):

        # GET TOKEN
        auth = request.META.get('HTTP_AUTHORIZATION')
        if not auth:
            return JsonResponse(data={"code": "authorization_header_missing",
                                      "description": "Authorization header is expected"}, status=401)
        parts = auth.split()
        if parts[0].lower() != "bearer":
            return JsonResponse(data={"code": "invalid_header",
                                      "description": "Authorization header must start with"
                                                     "Bearer"}, status=401)
        elif len(parts) == 1:
            return JsonResponse(data={"code": "invalid_header",
                                      "description": "Token not found"}, status=401)
        elif len(parts) > 2:
            return JsonResponse(data={"code": "invalid_header",
                                      "description": "Authorization header must be"
                                                     "Bearer token"}, status=401)
        token = parts[1]
        try:
            # searching for token in db to prevent constant requests to auth0
            user = User.objects.get(token=token)
            request.session['user'] = {'user_id': user.user_id,
                                       'username': user.username,
                                       'picture': user.picture}
            request.session['user_id'] = user.id
            response = self.get_response(request)
            return response
        except User.DoesNotExist:
            # if token does'n exist in db - validate it
            url = 'https://' + settings.AUTH0_DOMAIN + '/userinfo'
            headers = {'authorization': 'Bearer ' + token}

            # VALIDATE
            resp = requests.get(url, headers=headers)
            if resp.status_code != 200:
                return HttpResponseForbidden()
            else:
                userinfo = resp.json()
                try:
                    # if exists - user was already logged in before
                    user = User.objects.get(user_id=userinfo['sub'])
                    # updating his token because it differs from the one we took from the headers
                    user.token = token
                    user.save()
                except User.DoesNotExist:
                    # else - user is new
                    # adding to the db table
                    user = User.objects.create(user_id=userinfo['sub'],
                                               username=userinfo['name'],
                                               picture=userinfo['picture'],
                                               token=token)
                request.session['user'] = userinfo
                request.session['user_id'] = user.id
                response = self.get_response(request)
                return response

