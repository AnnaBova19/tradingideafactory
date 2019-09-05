webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/_services/asset.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loader_service__ = __webpack_require__("../../../../../src/app/_services/loader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var baseUrl = 'http://ec2-18-218-156-253.us-east-2.compute.amazonaws.com:8000';
var AssetService = (function () {
    function AssetService(load, http, router) {
        this.load = load;
        this.http = http;
        this.router = router;
        this.assetUrl = '/api/assets/';
    }
    AssetService.prototype.getHeaders = function () {
        var accessToken = localStorage.getItem('access_token');
        return {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json', 'authorization': 'Bearer ' + accessToken })
        };
    };
    AssetService.prototype.getAssets = function () {
        return this.http.get("" + baseUrl + this.assetUrl, this.getHeaders())
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError('getAssets', [])));
    };
    AssetService.prototype.getAsset = function (id) {
        return this.http.get("" + baseUrl + this.assetUrl + "/" + id, this.getHeaders())
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError("getTAsset id=" + id)));
    };
    AssetService.prototype.updateAsset = function (asset) {
        return this.http.put("" + baseUrl + this.assetUrl, asset, this.getHeaders())
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError('updateAsset', asset)));
    };
    AssetService.prototype.createAsset = function (asset) {
        return this.http.post("" + baseUrl + this.assetUrl, asset, this.getHeaders())
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError('createAsset')));
    };
    AssetService.prototype.deleteAsset = function (id) {
        return this.http.delete("" + baseUrl + this.assetUrl + "/" + id, this.getHeaders())
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError('deleteAsset')));
    };
    AssetService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            _this.load.error('Something went wrong');
            console.error(error);
            if (error.status <= 0) {
                _this.router.navigate(['/error_500']);
            }
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error);
        };
    };
    AssetService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__loader_service__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], AssetService);
    return AssetService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_auth0_js__ = __webpack_require__("../../../../auth0-js/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_auth0_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_auth0_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_q__ = __webpack_require__("../../../../q/q.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_q___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_q__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(router) {
        this.router = router;
        this.auth0 = new __WEBPACK_IMPORTED_MODULE_2_auth0_js__["WebAuth"]({
            clientID: 'F1EwbdwIyN1NXDUPopKSPmsKuY2kK1dk',
            domain: 'vtlstsff.auth0.com',
            responseType: 'token id_token',
            audience: 'https://vtlstsff.auth0.com/userinfo',
            redirectUri: window.location.href.split('/').slice(0, 3).join('/') + '/index',
            scope: 'openid profile'
        });
    }
    AuthService.prototype.login = function () {
        this.auth0.authorize();
    };
    AuthService.prototype.handleAuthentication = function () {
        var _this = this;
        return Object(__WEBPACK_IMPORTED_MODULE_3_q__["Promise"])(function (resolve) {
            _this.auth0.parseHash(function (err, authResult) {
                if (authResult && authResult.accessToken && authResult.idToken) {
                    window.location.hash = '';
                    _this.setSession(authResult);
                    _this.router.navigate(['/']);
                }
                else if (err) {
                    _this.router.navigate(['/']);
                    console.log(err);
                }
                resolve(true);
            });
        });
    };
    AuthService.prototype.setSession = function (authResult) {
        // Set the time that the access token will expire at
        var expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
    };
    AuthService.prototype.logout = function () {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // Go back to the home route
        this.login();
    };
    AuthService.prototype.isAuthenticated = function () {
        // Check whether the current time is past the
        // access token's expiry time
        var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    };
    AuthService.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.handleAuthentication()
            .then(function () {
            var isAuthenticated = _this.isAuthenticated();
            if (!isAuthenticated) {
                _this.login();
            }
            return isAuthenticated;
        });
    };
    AuthService.prototype.getProfile = function (cb) {
        var accessToken = localStorage.getItem('access_token');
        if (!accessToken) {
            throw new Error('Access token must exist to fetch profile');
        }
        var self = this;
        this.auth0.client.userInfo(accessToken, function (err, profile) {
            if (profile) {
                self.userProfile = profile;
            }
            cb(err, profile);
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/existing-portfolio-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExistingPortfolioGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__portfolio_service__ = __webpack_require__("../../../../../src/app/_services/portfolio.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExistingPortfolioGuard = (function () {
    function ExistingPortfolioGuard(portfolioService, router) {
        this.portfolioService = portfolioService;
        this.router = router;
        this.portfolios = [];
    }
    ExistingPortfolioGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.portfolioService.getPortfolios()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* map */])(function (portfolios) {
            _this.portfolios = portfolios;
            if (_this.portfolios.length < 0) {
                _this.router.navigate(['/']);
                return false;
            }
            else {
                return true;
            }
        }));
    };
    ExistingPortfolioGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__portfolio_service__["a" /* PortfolioService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], ExistingPortfolioGuard);
    return ExistingPortfolioGuard;
}());



/***/ }),

/***/ "../../../../../src/app/_services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loader_service__ = __webpack_require__("../../../../../src/app/_services/loader.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__loader_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__asset_service__ = __webpack_require__("../../../../../src/app/_services/asset.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__asset_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__auth_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__existing_portfolio_guard_service__ = __webpack_require__("../../../../../src/app/_services/existing-portfolio-guard.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__existing_portfolio_guard_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__new_portfolio_guard_service__ = __webpack_require__("../../../../../src/app/_services/new-portfolio-guard.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__new_portfolio_guard_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__portfolio_service__ = __webpack_require__("../../../../../src/app/_services/portfolio.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__portfolio_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__script_loader_service__ = __webpack_require__("../../../../../src/app/_services/script-loader.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__script_loader_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__spread_trade_service__ = __webpack_require__("../../../../../src/app/_services/spread-trade.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_7__spread_trade_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__stock_service__ = __webpack_require__("../../../../../src/app/_services/stock.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_8__stock_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__trade_service__ = __webpack_require__("../../../../../src/app/_services/trade.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_9__trade_service__["a"]; });












/***/ }),

/***/ "../../../../../src/app/_services/loader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers__ = __webpack_require__("../../../../../src/app/helpers.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoaderService = (function () {
    function LoaderService() {
    }
    LoaderService.prototype.confirm = function (message, okCallback) {
        alertify.confirm(function (message, e) {
            if (e) {
                okCallback();
            }
        });
    };
    LoaderService.prototype.start = function () {
        __WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* Helpers */].setLoading(true);
    };
    LoaderService.prototype.end = function () {
        __WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* Helpers */].setLoading(false);
    };
    LoaderService.prototype.success = function (message) {
        __WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* Helpers */].setLoading(false);
        alertify.success(message);
    };
    LoaderService.prototype.error = function (message) {
        __WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* Helpers */].setLoading(false);
        alertify.error(message);
    };
    LoaderService.prototype.warning = function (message) {
        __WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* Helpers */].setLoading(false);
        alertify.warning(message);
    };
    LoaderService.prototype.message = function (message) {
        __WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* Helpers */].setLoading(false);
        alertify.message(message);
    };
    LoaderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LoaderService);
    return LoaderService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/new-portfolio-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewPortfolioGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__portfolio_service__ = __webpack_require__("../../../../../src/app/_services/portfolio.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewPortfolioGuard = (function () {
    function NewPortfolioGuard(portfolioService, router) {
        this.portfolioService = portfolioService;
        this.router = router;
        this.portfolios = [];
    }
    NewPortfolioGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.portfolioService.getPortfolios()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* map */])(function (portfolios) {
            _this.portfolios = portfolios;
            if (_this.portfolios.length > 0) {
                _this.router.navigate(['/portfolio']);
                return false;
            }
            else {
                return true;
            }
        }));
    };
    NewPortfolioGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__portfolio_service__["a" /* PortfolioService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], NewPortfolioGuard);
    return NewPortfolioGuard;
}());



/***/ }),

/***/ "../../../../../src/app/_services/portfolio.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__loader_service__ = __webpack_require__("../../../../../src/app/_services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var baseUrl = 'http://ec2-18-218-156-253.us-east-2.compute.amazonaws.com:8000';
// const baseUrl = 'http://192.168.88.73:8000';
var PortfolioService = (function () {
    function PortfolioService(load, auth, http, router) {
        this.load = load;
        this.auth = auth;
        this.http = http;
        this.router = router;
        this.portfolioUrl = '/api/portfolios/';
    }
    PortfolioService.prototype.getHeaders = function () {
        var accessToken = localStorage.getItem('access_token');
        return {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json', 'authorization': 'Bearer ' + accessToken })
        };
    };
    PortfolioService.prototype.getPortfolios = function () {
        return this.http.get("" + baseUrl + this.portfolioUrl, this.getHeaders())
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError('getPortfolios', [])));
    };
    PortfolioService.prototype.getPortfolio = function (id) {
        return this.http.get("" + baseUrl + this.portfolioUrl + id, this.getHeaders())
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError("getPortfolio id=" + id)));
    };
    PortfolioService.prototype.updatePortfolio = function (id, portfolio) {
        return this.http.patch("" + baseUrl + this.portfolioUrl + id + "/", portfolio, this.getHeaders())
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError('updatePortfolio', portfolio)));
    };
    PortfolioService.prototype.createPortfolio = function (portfolio) {
        return this.http.post("" + baseUrl + this.portfolioUrl, portfolio, this.getHeaders())
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError('createPortfolio')));
    };
    PortfolioService.prototype.deletePortfolio = function (id) {
        return this.http.delete("" + baseUrl + this.portfolioUrl + id, this.getHeaders())
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(this.handleError('deletePortfolio')));
    };
    PortfolioService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            _this.load.error('Something went wrong');
            console.error(error);
            if (error.status <= 0) {
                _this.router.navigate(['/error_500']);
            }
            if (error.status == 403) {
                _this.auth.logout();
            }
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error);
        };
    };
    PortfolioService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__loader_service__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_7__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], PortfolioService);
    return PortfolioService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/script-loader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScriptLoaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ScriptLoaderService = (function () {
    function ScriptLoaderService() {
        this._scripts = [];
    }
    ScriptLoaderService.prototype.load = function () {
        var _this = this;
        var scripts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            scripts[_i] = arguments[_i];
        }
        scripts.forEach(function (script) { return _this._scripts[script] = { src: script, loaded: false }; });
        var promises = [];
        scripts.forEach(function (script) { return promises.push(_this.loadScript(script)); });
        return Promise.all(promises);
    };
    ScriptLoaderService.prototype.loadScript = function (src) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //resolve if already loaded
            if (_this._scripts[src].loaded) {
                resolve({ script: src, loaded: true, status: 'Already Loaded' });
            }
            else {
                //load script
                var script = __WEBPACK_IMPORTED_MODULE_1_jquery__('<script/>')
                    .attr('type', 'text/javascript')
                    .attr('src', _this._scripts[src].src);
                __WEBPACK_IMPORTED_MODULE_1_jquery__('head').append(script);
                resolve({ script: src, loaded: true, status: 'Loaded' });
            }
        });
    };
    ScriptLoaderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], ScriptLoaderService);
    return ScriptLoaderService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/spread-trade.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpreadTradeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__loader_service__ = __webpack_require__("../../../../../src/app/_services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var baseUrl = 'http://ec2-18-218-156-253.us-east-2.compute.amazonaws.com:8000';
// const baseUrl = 'http://192.168.88.73:8000';
var SpreadTradeService = (function () {
    function SpreadTradeService(load, auth, http, router) {
        this.load = load;
        this.auth = auth;
        this.http = http;
        this.router = router;
        this.spreadTrades = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.spreadTradeUrl = '/api/spreadTrades/';
    }
    SpreadTradeService.prototype.getHeaders = function () {
        var accessToken = localStorage.getItem('access_token');
        return {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json', 'authorization': 'Bearer ' + accessToken })
        };
    };
    SpreadTradeService.prototype.getSpreadTrades = function () {
        var _this = this;
        this.http.get("" + baseUrl + this.spreadTradeUrl, this.getHeaders())
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["c" /* tap */])(function (spreadTrades) { return _this.spreadTrades.next(spreadTrades); }), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["a" /* catchError */])(this.handleError('getSpreadTrades', [])))
            .subscribe();
        return this.spreadTrades;
    };
    SpreadTradeService.prototype.getSpreadTrade = function (id) {
        return this.http.get("" + baseUrl + this.spreadTradeUrl + id, this.getHeaders())
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["a" /* catchError */])(this.handleError("getSpreadTrade id=" + id)));
    };
    SpreadTradeService.prototype.updateSpreadTrade = function (id, spreadTrade) {
        return this.http.patch("" + baseUrl + this.spreadTradeUrl + id + "/", spreadTrade, this.getHeaders())
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["a" /* catchError */])(this.handleError('updateSpreadTrade', spreadTrade)));
    };
    SpreadTradeService.prototype.createSpreadTrade = function (spreadTrade) {
        return this.http.post("" + baseUrl + this.spreadTradeUrl, spreadTrade, this.getHeaders())
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["a" /* catchError */])(this.handleError('createSpreadTrade')));
    };
    SpreadTradeService.prototype.deleteSpreadTrade = function (id) {
        return this.http.delete("" + baseUrl + this.spreadTradeUrl + id, this.getHeaders())
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["a" /* catchError */])(this.handleError('deleteSpreadTrade')));
    };
    SpreadTradeService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            _this.load.error('Something went wrong');
            console.error(error);
            if (error.status <= 0) {
                _this.router.navigate(['/error_500']);
            }
            if (error.status == 403) {
                _this.auth.logout();
            }
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].throw(error);
        };
    };
    SpreadTradeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__loader_service__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_8__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], SpreadTradeService);
    return SpreadTradeService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/stock.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__loader_service__ = __webpack_require__("../../../../../src/app/_services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var baseUrl = 'http://ec2-18-218-156-253.us-east-2.compute.amazonaws.com:8000';
// const baseUrl = 'http://192.168.88.73:8000';
var StockService = (function () {
    function StockService(load, auth, http, router) {
        this.load = load;
        this.auth = auth;
        this.http = http;
        this.router = router;
        this.stockUrl = '/api/stocks/';
        this.stocks = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.isLoaded = false;
    }
    StockService.prototype.getHeaders = function () {
        var accessToken = localStorage.getItem('access_token');
        return {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json', 'authorization': 'Bearer ' + accessToken })
        };
    };
    StockService.prototype.getStocks = function () {
        var _this = this;
        if (!this.isLoaded) {
            this.http.get("" + baseUrl + this.stockUrl, this.getHeaders())
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["c" /* tap */])(function (stocks) { return _this.stocks.next(stocks); }), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["a" /* catchError */])(this.handleError('getStocks', [])))
                .subscribe();
            this.isLoaded = true;
        }
        return this.stocks;
    };
    StockService.prototype.getStock = function (id) {
        return this.http.get("" + baseUrl + this.stockUrl + id, this.getHeaders())
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["a" /* catchError */])(this.handleError("getStock id=" + id)));
    };
    StockService.prototype.updateStock = function (id, stock) {
        return this.http.patch("" + baseUrl + this.stockUrl + id + "/", stock, this.getHeaders())
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["a" /* catchError */])(this.handleError('updateStock', stock)));
    };
    StockService.prototype.createStock = function (stock) {
        return this.http.post("" + baseUrl + this.stockUrl, stock, this.getHeaders())
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["a" /* catchError */])(this.handleError('createStock')));
    };
    StockService.prototype.deleteStock = function (id) {
        return this.http.delete("" + baseUrl + this.stockUrl + id, this.getHeaders())
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["a" /* catchError */])(this.handleError('deleteStock')));
    };
    StockService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            _this.load.error('Something went wrong');
            console.error(error);
            if (error.status <= 0) {
                _this.router.navigate(['/error_500']);
            }
            if (error.status == 403) {
                _this.auth.logout();
            }
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].throw(error);
        };
    };
    StockService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__loader_service__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_8__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], StockService);
    return StockService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/trade.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TradeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__loader_service__ = __webpack_require__("../../../../../src/app/_services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_service__ = __webpack_require__("../../../../../src/app/_services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var baseUrl = 'http://ec2-18-218-156-253.us-east-2.compute.amazonaws.com:8000';
// const baseUrl = 'http://192.168.88.73:8000';
var TradeService = (function () {
    function TradeService(load, auth, http, router) {
        this.load = load;
        this.auth = auth;
        this.http = http;
        this.router = router;
        this.trades = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.tradeUrl = '/api/trades/';
    }
    TradeService.prototype.getHeaders = function () {
        var accessToken = localStorage.getItem('access_token');
        return {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json', 'authorization': 'Bearer ' + accessToken })
        };
    };
    TradeService.prototype.getTrades = function () {
        var _this = this;
        this.http.get("" + baseUrl + this.tradeUrl, this.getHeaders())
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["c" /* tap */])(function (trades) { return _this.trades.next(trades); }), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["a" /* catchError */])(this.handleError('getTrades', [])))
            .subscribe();
        return this.trades;
    };
    TradeService.prototype.getTrade = function (id) {
        return this.http.get("" + baseUrl + this.tradeUrl + id, this.getHeaders())
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["a" /* catchError */])(this.handleError("getTrade id=" + id)));
    };
    TradeService.prototype.updateTrade = function (id, trade) {
        return this.http.patch("" + baseUrl + this.tradeUrl + id + "/", trade, this.getHeaders())
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["a" /* catchError */])(this.handleError('updateTrade', trade)));
    };
    TradeService.prototype.createTrade = function (trade) {
        return this.http.post("" + baseUrl + this.tradeUrl, trade, this.getHeaders())
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["a" /* catchError */])(this.handleError('createTrade')));
    };
    TradeService.prototype.deleteTrade = function (id) {
        return this.http.delete("" + baseUrl + this.tradeUrl + id, this.getHeaders())
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["a" /* catchError */])(this.handleError('deleteTrade')));
    };
    TradeService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            _this.load.error('Something went wrong');
            console.error(error);
            if (error.status <= 0) {
                _this.router.navigate(['/error_500']);
            }
            if (error.status == 403) {
                _this.auth.logout();
            }
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].throw(error);
        };
    };
    TradeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__loader_service__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_8__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], TradeService);
    return TradeService;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layouts_layout_component__ = __webpack_require__("../../../../../src/app/layouts/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home_component__ = __webpack_require__("../../../../../src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_portfolio_portfolio_component__ = __webpack_require__("../../../../../src/app/pages/portfolio/portfolio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_search_search_component__ = __webpack_require__("../../../../../src/app/pages/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_lockscreen_lockscreen_component__ = __webpack_require__("../../../../../src/app/pages/lockscreen/lockscreen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_forgot_password_forgot_password_component__ = __webpack_require__("../../../../../src/app/pages/forgot-password/forgot-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_error_404_error_404_component__ = __webpack_require__("../../../../../src/app/pages/error-404/error-404.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_error_404_2_error_404_2_component__ = __webpack_require__("../../../../../src/app/pages/error-404-2/error-404-2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_error_403_error_403_component__ = __webpack_require__("../../../../../src/app/pages/error-403/error-403.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_error_500_error_500_component__ = __webpack_require__("../../../../../src/app/pages/error-500/error-500.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_maintenance_maintenance_component__ = __webpack_require__("../../../../../src/app/pages/maintenance/maintenance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_profile_profile_component__ = __webpack_require__("../../../../../src/app/pages/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_trading_journal_trading_journal_component__ = __webpack_require__("../../../../../src/app/pages/trading-journal/trading-journal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_idea_generation_bond_views_bond_views_component__ = __webpack_require__("../../../../../src/app/pages/idea-generation/bond-views/bond-views.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_idea_generation_currency_views_currency_views_component__ = __webpack_require__("../../../../../src/app/pages/idea-generation/currency-views/currency-views.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_idea_generation_commodities_views_commodities_views_component__ = __webpack_require__("../../../../../src/app/pages/idea-generation/commodities-views/commodities-views.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_idea_generation_stock_views_cn_stocks_cn_stocks_component__ = __webpack_require__("../../../../../src/app/pages/idea-generation/stock-views/cn-stocks/cn-stocks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_idea_generation_stock_views_eu_stocks_eu_stocks_component__ = __webpack_require__("../../../../../src/app/pages/idea-generation/stock-views/eu-stocks/eu-stocks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_idea_generation_stock_views_us_stocks_us_stocks_component__ = __webpack_require__("../../../../../src/app/pages/idea-generation/stock-views/us-stocks/us-stocks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_idea_generation_industry_views_cn_industries_cn_industries_component__ = __webpack_require__("../../../../../src/app/pages/idea-generation/industry-views/cn-industries/cn-industries.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_idea_generation_industry_views_eu_industries_eu_industries_component__ = __webpack_require__("../../../../../src/app/pages/idea-generation/industry-views/eu-industries/eu-industries.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_idea_generation_industry_views_us_industries_us_industries_component__ = __webpack_require__("../../../../../src/app/pages/idea-generation/industry-views/us-industries/us-industries.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_idea_generation_world_views_building_permits_housing_building_permits_housing_component__ = __webpack_require__("../../../../../src/app/pages/idea-generation/world-views/building-permits-housing/building-permits-housing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_idea_generation_world_views_consumers_consumers_component__ = __webpack_require__("../../../../../src/app/pages/idea-generation/world-views/consumers/consumers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_idea_generation_world_views_durable_goods_durable_goods_component__ = __webpack_require__("../../../../../src/app/pages/idea-generation/world-views/durable-goods/durable-goods.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_idea_generation_world_views_gdp_prediction_gdp_prediction_component__ = __webpack_require__("../../../../../src/app/pages/idea-generation/world-views/gdp-prediction/gdp-prediction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_idea_generation_world_views_goods_produced_goods_produced_component__ = __webpack_require__("../../../../../src/app/pages/idea-generation/world-views/goods-produced/goods-produced.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_idea_generation_world_views_major_industry_groups_major_industry_groups_component__ = __webpack_require__("../../../../../src/app/pages/idea-generation/world-views/major-industry-groups/major-industry-groups.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_idea_generation_world_views_major_market_groups_major_market_groups_component__ = __webpack_require__("../../../../../src/app/pages/idea-generation/world-views/major-market-groups/major-market-groups.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_idea_generation_world_views_manufactoring_manufactoring_component__ = __webpack_require__("../../../../../src/app/pages/idea-generation/world-views/manufactoring/manufactoring.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_idea_generation_world_views_non_farm_payrolls_non_farm_payrolls_component__ = __webpack_require__("../../../../../src/app/pages/idea-generation/world-views/non-farm-payrolls/non-farm-payrolls.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_idea_generation_world_views_services_services_component__ = __webpack_require__("../../../../../src/app/pages/idea-generation/world-views/services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_idea_generation_world_views_services_produced_services_produced_component__ = __webpack_require__("../../../../../src/app/pages/idea-generation/world-views/services-produced/services-produced.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_idea_generation_world_views_total_private_total_private_component__ = __webpack_require__("../../../../../src/app/pages/idea-generation/world-views/total-private/total-private.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_idea_generation_world_views_unemployment_claims_unemployment_claims_component__ = __webpack_require__("../../../../../src/app/pages/idea-generation/world-views/unemployment-claims/unemployment-claims.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_watchlist_watchlist_component__ = __webpack_require__("../../../../../src/app/pages/watchlist/watchlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_manual_data_manual_data_component__ = __webpack_require__("../../../../../src/app/pages/manual-data/manual-data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_gate_keeping_technical_analysis_technical_analysis_component__ = __webpack_require__("../../../../../src/app/pages/gate-keeping/technical-analysis/technical-analysis.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_gate_keeping_price_action_price_action_component__ = __webpack_require__("../../../../../src/app/pages/gate-keeping/price-action/price-action.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_risk_management_atr_atr_component__ = __webpack_require__("../../../../../src/app/pages/risk-management/atr/atr.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_risk_management_distribution_odds_calculation_distribution_odds_calculation_component__ = __webpack_require__("../../../../../src/app/pages/risk-management/distribution-odds-calculation/distribution-odds-calculation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_risk_management_implied_volatility_assessment_implied_volatility_assessment_component__ = __webpack_require__("../../../../../src/app/pages/risk-management/implied-volatility-assessment/implied-volatility-assessment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__components_index__ = __webpack_require__("../../../../../src/app/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__declarations__ = __webpack_require__("../../../../../src/app/declarations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__directives_index__ = __webpack_require__("../../../../../src/app/directives/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















































var routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    {
        path: "",
        component: __WEBPACK_IMPORTED_MODULE_5__layouts_layout_component__["a" /* LayoutComponent */],
        "children": [
            {
                path: "index",
                component: __WEBPACK_IMPORTED_MODULE_6__pages_home_home_component__["a" /* HomeComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_50__services_index__["e" /* NewPortfolioGuard */]]
            },
            {
                path: "portfolio",
                component: __WEBPACK_IMPORTED_MODULE_7__pages_portfolio_portfolio_component__["a" /* PortfolioComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_50__services_index__["c" /* ExistingPortfolioGuard */]]
            },
            {
                path: "search",
                component: __WEBPACK_IMPORTED_MODULE_8__pages_search_search_component__["a" /* SearchComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_50__services_index__["c" /* ExistingPortfolioGuard */]]
            },
            {
                path: "profile",
                component: __WEBPACK_IMPORTED_MODULE_16__pages_profile_profile_component__["a" /* ProfileComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_50__services_index__["c" /* ExistingPortfolioGuard */]]
            },
            {
                path: "watchlist",
                component: __WEBPACK_IMPORTED_MODULE_40__pages_watchlist_watchlist_component__["a" /* WatchlistComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_50__services_index__["c" /* ExistingPortfolioGuard */]]
            },
            {
                path: "trading-journal",
                component: __WEBPACK_IMPORTED_MODULE_17__pages_trading_journal_trading_journal_component__["a" /* TradingJournalComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_50__services_index__["c" /* ExistingPortfolioGuard */]]
            },
            {
                path: "idea-generation/bond-views",
                component: __WEBPACK_IMPORTED_MODULE_18__pages_idea_generation_bond_views_bond_views_component__["a" /* BondViewsComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_50__services_index__["c" /* ExistingPortfolioGuard */]]
            },
            {
                path: "idea-generation/currency-views",
                component: __WEBPACK_IMPORTED_MODULE_19__pages_idea_generation_currency_views_currency_views_component__["a" /* CurrencyViewsComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_50__services_index__["c" /* ExistingPortfolioGuard */]]
            },
            {
                path: "idea-generation/commodities-views",
                component: __WEBPACK_IMPORTED_MODULE_20__pages_idea_generation_commodities_views_commodities_views_component__["a" /* CommoditiesViewsComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_50__services_index__["c" /* ExistingPortfolioGuard */]]
            },
            {
                path: "idea-generation/stock-views/cn-stocks",
                component: __WEBPACK_IMPORTED_MODULE_21__pages_idea_generation_stock_views_cn_stocks_cn_stocks_component__["a" /* CnStocksComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_50__services_index__["c" /* ExistingPortfolioGuard */]]
            },
            {
                path: "idea-generation/stock-views/eu-stocks",
                component: __WEBPACK_IMPORTED_MODULE_22__pages_idea_generation_stock_views_eu_stocks_eu_stocks_component__["a" /* EuStocksComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_50__services_index__["c" /* ExistingPortfolioGuard */]]
            },
            {
                path: "idea-generation/stock-views/us-stocks",
                component: __WEBPACK_IMPORTED_MODULE_23__pages_idea_generation_stock_views_us_stocks_us_stocks_component__["a" /* UsStocksComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_50__services_index__["c" /* ExistingPortfolioGuard */]]
            },
            {
                path: "idea-generation/industry-views/cn-undustries",
                component: __WEBPACK_IMPORTED_MODULE_24__pages_idea_generation_industry_views_cn_industries_cn_industries_component__["a" /* CnIndustriesComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_50__services_index__["c" /* ExistingPortfolioGuard */]]
            },
            {
                path: "idea-generation/industry-views/eu-undustries",
                component: __WEBPACK_IMPORTED_MODULE_25__pages_idea_generation_industry_views_eu_industries_eu_industries_component__["a" /* EuIndustriesComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_50__services_index__["c" /* ExistingPortfolioGuard */]]
            },
            {
                path: "idea-generation/industry-views/us-undustries",
                component: __WEBPACK_IMPORTED_MODULE_26__pages_idea_generation_industry_views_us_industries_us_industries_component__["a" /* UsIndustriesComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_50__services_index__["c" /* ExistingPortfolioGuard */]]
            },
            {
                path: "idea-generation/world-views/building-permits-housing",
                component: __WEBPACK_IMPORTED_MODULE_27__pages_idea_generation_world_views_building_permits_housing_building_permits_housing_component__["a" /* BuildingPermitsHousingComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_50__services_index__["c" /* ExistingPortfolioGuard */]]
            },
            {
                path: "idea-generation/world-views/consumers",
                component: __WEBPACK_IMPORTED_MODULE_28__pages_idea_generation_world_views_consumers_consumers_component__["a" /* ConsumersComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_50__services_index__["c" /* ExistingPortfolioGuard */]]
            },
            {
                path: "idea-generation/world-views/durable-goods",
                component: __WEBPACK_IMPORTED_MODULE_29__pages_idea_generation_world_views_durable_goods_durable_goods_component__["a" /* DurableGoodsComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_50__services_index__["c" /* ExistingPortfolioGuard */]]
            },
            {
                path: "idea-generation/world-views/gdp-prediction",
                component: __WEBPACK_IMPORTED_MODULE_30__pages_idea_generation_world_views_gdp_prediction_gdp_prediction_component__["a" /* GdpPredictionComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_50__services_index__["c" /* ExistingPortfolioGuard */]]
            },
            {
                path: "idea-generation/world-views/goods-produced",
                component: __WEBPACK_IMPORTED_MODULE_31__pages_idea_generation_world_views_goods_produced_goods_produced_component__["a" /* GoodsProducedComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_50__services_index__["c" /* ExistingPortfolioGuard */]]
            },
            {
                path: "idea-generation/world-views/major-industry-groups",
                component: __WEBPACK_IMPORTED_MODULE_32__pages_idea_generation_world_views_major_industry_groups_major_industry_groups_component__["a" /* MajorIndustryGroupsComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_50__services_index__["c" /* ExistingPortfolioGuard */]]
            },
            {
                path: "idea-generation/world-views/major-market-groups",
                component: __WEBPACK_IMPORTED_MODULE_33__pages_idea_generation_world_views_major_market_groups_major_market_groups_component__["a" /* MajorMarketGroupsComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_50__services_index__["c" /* ExistingPortfolioGuard */]]
            },
            {
                path: "idea-generation/world-views/manufactoring",
                component: __WEBPACK_IMPORTED_MODULE_34__pages_idea_generation_world_views_manufactoring_manufactoring_component__["a" /* ManufactoringComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_50__services_index__["c" /* ExistingPortfolioGuard */]]
            },
            {
                path: "idea-generation/world-views/non-farm-payrolls",
                component: __WEBPACK_IMPORTED_MODULE_35__pages_idea_generation_world_views_non_farm_payrolls_non_farm_payrolls_component__["a" /* NonFarmPayrollsComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_50__services_index__["c" /* ExistingPortfolioGuard */]]
            },
            {
                path: "idea-generation/world-views/services",
                component: __WEBPACK_IMPORTED_MODULE_36__pages_idea_generation_world_views_services_services_component__["a" /* ServicesComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_50__services_index__["c" /* ExistingPortfolioGuard */]]
            },
            {
                path: "idea-generation/world-views/services-produced",
                component: __WEBPACK_IMPORTED_MODULE_37__pages_idea_generation_world_views_services_produced_services_produced_component__["a" /* ServicesProducedComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_50__services_index__["c" /* ExistingPortfolioGuard */]]
            },
            {
                path: "idea-generation/world-views/total-private",
                component: __WEBPACK_IMPORTED_MODULE_38__pages_idea_generation_world_views_total_private_total_private_component__["a" /* TotalPrivateComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_50__services_index__["c" /* ExistingPortfolioGuard */]]
            },
            {
                path: "idea-generation/world-views/unemployment-claims",
                component: __WEBPACK_IMPORTED_MODULE_39__pages_idea_generation_world_views_unemployment_claims_unemployment_claims_component__["a" /* UnemploymentClaimsComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_50__services_index__["c" /* ExistingPortfolioGuard */]]
            },
            {
                path: "risk-management/atr",
                component: __WEBPACK_IMPORTED_MODULE_39__pages_idea_generation_world_views_unemployment_claims_unemployment_claims_component__["a" /* UnemploymentClaimsComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_50__services_index__["c" /* ExistingPortfolioGuard */]]
            },
            {
                path: "risk-management/distribution-odds-calculation",
                component: __WEBPACK_IMPORTED_MODULE_44__pages_risk_management_atr_atr_component__["a" /* ATRComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_50__services_index__["c" /* ExistingPortfolioGuard */]]
            },
            {
                path: "risk-management/implied-volatility-assessment",
                component: __WEBPACK_IMPORTED_MODULE_46__pages_risk_management_implied_volatility_assessment_implied_volatility_assessment_component__["a" /* ImpliedVolatilityAssessmentComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_50__services_index__["c" /* ExistingPortfolioGuard */]]
            },
            {
                path: "gate-keeping/technical-analysis",
                component: __WEBPACK_IMPORTED_MODULE_42__pages_gate_keeping_technical_analysis_technical_analysis_component__["a" /* TechnicalAnalysisComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_50__services_index__["c" /* ExistingPortfolioGuard */]]
            },
            {
                path: "gate-keeping/price-action",
                component: __WEBPACK_IMPORTED_MODULE_43__pages_gate_keeping_price_action_price_action_component__["a" /* PriceActionComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_50__services_index__["c" /* ExistingPortfolioGuard */]]
            },
            {
                path: "manual-data",
                component: __WEBPACK_IMPORTED_MODULE_41__pages_manual_data_manual_data_component__["a" /* ManualDataComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_50__services_index__["c" /* ExistingPortfolioGuard */]]
            }
        ],
        canActivate: [__WEBPACK_IMPORTED_MODULE_50__services_index__["b" /* AuthService */]]
    },
    {
        "path": "lockscreen",
        "component": __WEBPACK_IMPORTED_MODULE_9__pages_lockscreen_lockscreen_component__["a" /* LockscreenComponent */]
    },
    {
        "path": "forgot_password",
        "component": __WEBPACK_IMPORTED_MODULE_10__pages_forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */]
    },
    {
        "path": "error_404",
        "component": __WEBPACK_IMPORTED_MODULE_11__pages_error_404_error_404_component__["a" /* Error404Component */]
    },
    {
        "path": "error_404-2",
        "component": __WEBPACK_IMPORTED_MODULE_12__pages_error_404_2_error_404_2_component__["a" /* Error4042Component */]
    },
    {
        "path": "error_403",
        "component": __WEBPACK_IMPORTED_MODULE_13__pages_error_403_error_403_component__["a" /* Error403Component */]
    },
    {
        "path": "error_500",
        "component": __WEBPACK_IMPORTED_MODULE_14__pages_error_500_error_500_component__["a" /* Error500Component */]
    },
    {
        "path": "maintenance",
        "component": __WEBPACK_IMPORTED_MODULE_15__pages_maintenance_maintenance_component__["a" /* MaintenanceComponent */]
    },
    {
        "path": "**",
        "redirectTo": "error_404",
        "pathMatch": "full"
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_48__declarations__["a" /* AppDeclarations */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pages_portfolio_portfolio_component__["a" /* PortfolioComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pages_search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_9__pages_lockscreen_lockscreen_component__["a" /* LockscreenComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pages_forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pages_error_404_error_404_component__["a" /* Error404Component */],
                __WEBPACK_IMPORTED_MODULE_12__pages_error_404_2_error_404_2_component__["a" /* Error4042Component */],
                __WEBPACK_IMPORTED_MODULE_13__pages_error_403_error_403_component__["a" /* Error403Component */],
                __WEBPACK_IMPORTED_MODULE_14__pages_error_500_error_500_component__["a" /* Error500Component */],
                __WEBPACK_IMPORTED_MODULE_15__pages_maintenance_maintenance_component__["a" /* MaintenanceComponent */],
                __WEBPACK_IMPORTED_MODULE_16__pages_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_17__pages_trading_journal_trading_journal_component__["a" /* TradingJournalComponent */],
                __WEBPACK_IMPORTED_MODULE_18__pages_idea_generation_bond_views_bond_views_component__["a" /* BondViewsComponent */],
                __WEBPACK_IMPORTED_MODULE_19__pages_idea_generation_currency_views_currency_views_component__["a" /* CurrencyViewsComponent */],
                __WEBPACK_IMPORTED_MODULE_20__pages_idea_generation_commodities_views_commodities_views_component__["a" /* CommoditiesViewsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__pages_idea_generation_stock_views_cn_stocks_cn_stocks_component__["a" /* CnStocksComponent */],
                __WEBPACK_IMPORTED_MODULE_22__pages_idea_generation_stock_views_eu_stocks_eu_stocks_component__["a" /* EuStocksComponent */],
                __WEBPACK_IMPORTED_MODULE_23__pages_idea_generation_stock_views_us_stocks_us_stocks_component__["a" /* UsStocksComponent */],
                __WEBPACK_IMPORTED_MODULE_24__pages_idea_generation_industry_views_cn_industries_cn_industries_component__["a" /* CnIndustriesComponent */],
                __WEBPACK_IMPORTED_MODULE_25__pages_idea_generation_industry_views_eu_industries_eu_industries_component__["a" /* EuIndustriesComponent */],
                __WEBPACK_IMPORTED_MODULE_26__pages_idea_generation_industry_views_us_industries_us_industries_component__["a" /* UsIndustriesComponent */],
                __WEBPACK_IMPORTED_MODULE_27__pages_idea_generation_world_views_building_permits_housing_building_permits_housing_component__["a" /* BuildingPermitsHousingComponent */],
                __WEBPACK_IMPORTED_MODULE_28__pages_idea_generation_world_views_consumers_consumers_component__["a" /* ConsumersComponent */],
                __WEBPACK_IMPORTED_MODULE_29__pages_idea_generation_world_views_durable_goods_durable_goods_component__["a" /* DurableGoodsComponent */],
                __WEBPACK_IMPORTED_MODULE_30__pages_idea_generation_world_views_gdp_prediction_gdp_prediction_component__["a" /* GdpPredictionComponent */],
                __WEBPACK_IMPORTED_MODULE_31__pages_idea_generation_world_views_goods_produced_goods_produced_component__["a" /* GoodsProducedComponent */],
                __WEBPACK_IMPORTED_MODULE_32__pages_idea_generation_world_views_major_industry_groups_major_industry_groups_component__["a" /* MajorIndustryGroupsComponent */],
                __WEBPACK_IMPORTED_MODULE_33__pages_idea_generation_world_views_major_market_groups_major_market_groups_component__["a" /* MajorMarketGroupsComponent */],
                __WEBPACK_IMPORTED_MODULE_34__pages_idea_generation_world_views_manufactoring_manufactoring_component__["a" /* ManufactoringComponent */],
                __WEBPACK_IMPORTED_MODULE_35__pages_idea_generation_world_views_non_farm_payrolls_non_farm_payrolls_component__["a" /* NonFarmPayrollsComponent */],
                __WEBPACK_IMPORTED_MODULE_36__pages_idea_generation_world_views_services_services_component__["a" /* ServicesComponent */],
                __WEBPACK_IMPORTED_MODULE_37__pages_idea_generation_world_views_services_produced_services_produced_component__["a" /* ServicesProducedComponent */],
                __WEBPACK_IMPORTED_MODULE_38__pages_idea_generation_world_views_total_private_total_private_component__["a" /* TotalPrivateComponent */],
                __WEBPACK_IMPORTED_MODULE_39__pages_idea_generation_world_views_unemployment_claims_unemployment_claims_component__["a" /* UnemploymentClaimsComponent */],
                __WEBPACK_IMPORTED_MODULE_40__pages_watchlist_watchlist_component__["a" /* WatchlistComponent */],
                __WEBPACK_IMPORTED_MODULE_44__pages_risk_management_atr_atr_component__["a" /* ATRComponent */],
                __WEBPACK_IMPORTED_MODULE_45__pages_risk_management_distribution_odds_calculation_distribution_odds_calculation_component__["a" /* DistributionOddsCalculationComponent */],
                __WEBPACK_IMPORTED_MODULE_46__pages_risk_management_implied_volatility_assessment_implied_volatility_assessment_component__["a" /* ImpliedVolatilityAssessmentComponent */],
                __WEBPACK_IMPORTED_MODULE_42__pages_gate_keeping_technical_analysis_technical_analysis_component__["a" /* TechnicalAnalysisComponent */],
                __WEBPACK_IMPORTED_MODULE_43__pages_gate_keeping_price_action_price_action_component__["a" /* PriceActionComponent */],
                __WEBPACK_IMPORTED_MODULE_41__pages_manual_data_manual_data_component__["a" /* ManualDataComponent */],
                __WEBPACK_IMPORTED_MODULE_47__components_index__["a" /* DialogClosePriceComponent */],
                __WEBPACK_IMPORTED_MODULE_47__components_index__["b" /* DialogNewPortfolioComponent */],
                __WEBPACK_IMPORTED_MODULE_47__components_index__["d" /* DialogNewTradeComponent */],
                __WEBPACK_IMPORTED_MODULE_47__components_index__["c" /* DialogNewSpreadTradeComponent */],
                __WEBPACK_IMPORTED_MODULE_51__directives_index__["a" /* DataTableDirective */],
                __WEBPACK_IMPORTED_MODULE_51__directives_index__["c" /* MorrisLineChartDirective */],
                __WEBPACK_IMPORTED_MODULE_51__directives_index__["b" /* EasypieDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */].forRoot(routes),
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_49__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* ReactiveFormsModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */],
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_47__components_index__["a" /* DialogClosePriceComponent */],
                __WEBPACK_IMPORTED_MODULE_47__components_index__["b" /* DialogNewPortfolioComponent */],
                __WEBPACK_IMPORTED_MODULE_47__components_index__["d" /* DialogNewTradeComponent */],
                __WEBPACK_IMPORTED_MODULE_47__components_index__["c" /* DialogNewSpreadTradeComponent */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN PAGE LOADER  -->\n<div class=\"preloader-backdrop\">\n  <div class=\"preloader-inner\">\n    <div class=\"line\"></div>\n    <div class=\"line\"></div>\n    <div class=\"line\"></div>\n  </div>\n</div>\n<!-- END PAGE LOADER  -->\n\n<!-- BEGIN PAGE  -->\n<router-outlet></router-outlet>\n<!-- END PAGE  -->\n\n<!-- START SEARCH PANEL-->\n<form class=\"search-top-bar\" action=\"javascript:;\" method=\"POST\">\n  <input class=\"form-control search-input\" type=\"text\" placeholder=\"Search...\">\n  <button class=\"reset input-search-icon\"><i class=\"ti-search\"></i></button>\n  <button class=\"reset input-search-close\" type=\"button\"><i class=\"ti-close\"></i></button>\n</form>\n<!-- END SEARCH PANEL -->\n\n<!-- BEGIN THEME CONFIG PANEL -->\n<div class=\"theme-config\">\n  <div class=\"theme-config-toggle\"><i class=\"ti-settings theme-config-show\"></i><i class=\"ti-close theme-config-close\"></i></div>\n  <div class=\"theme-config-box\">\n    <h5 class=\"text-center mb-4 mt-3\">SETTINGS</h5>\n    <div class=\"font-strong mb-3\">LAYOUT OPTIONS</div>\n    <div class=\"check-list mb-4\">\n      <label class=\"checkbox checkbox-grey checkbox-primary\">\n        <input id=\"_fixedNavbar\" type=\"checkbox\" checked><span class=\"input-span\"></span>Fixed navbar\n      </label>\n      <label class=\"checkbox checkbox-grey checkbox-primary mt-3\">\n        <input id=\"_fixedlayout\" type=\"checkbox\"><span class=\"input-span\"></span>Fixed layout\n      </label>\n      <label class=\"checkbox checkbox-grey checkbox-primary mt-3\">\n        <input class=\"js-sidebar-toggler\" type=\"checkbox\"><span class=\"input-span\"></span>Collapse sidebar\n      </label>\n      <label class=\"checkbox checkbox-grey checkbox-primary mt-3\">\n        <input id=\"_drawerSidebar\" type=\"checkbox\"><span class=\"input-span\"></span>Drawer sidebar\n      </label>\n    </div>\n    <div class=\"font-strong mb-3\">LAYOUT STYLE</div>\n    <div class=\"check-list mb-4\">\n      <label class=\"radio radio-grey radio-primary\">\n        <input type=\"radio\" name=\"layout-style\" value=\"\" checked=\"\"><span class=\"input-span\"></span>Fluid\n      </label>\n      <label class=\"radio radio-grey radio-primary mt-3\">\n        <input type=\"radio\" name=\"layout-style\" value=\"1\"><span class=\"input-span\"></span>Boxed\n      </label>\n    </div>\n  </div>\n</div>\n<!-- END THEME CONFIG PANEL -->\n\n<!-- BEGIN PAGA BACKDROP -->\n<div class=\"sidenav-backdrop backdrop\"></div>\n<!-- END PAGA BACKDROP -->\n\n<!-- SCROLL TOP -->\n<div class=\"to-top\"><i class=\"fa fa-angle-double-up\"></i></div>\n<!-- END SCROLL TOP -->\n\n<!-- SESSION TIMEOUT MODAL -->\n<div class=\"modal fade\" id=\"session-dialog\">\n  <div class=\"modal-dialog\" style=\"width:400px;\" role=\"document\">\n    <div class=\"modal-content timeout-modal\">\n      <div class=\"modal-body\">\n        <button class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"></button>\n        <div class=\"text-center mt-3 mb-4\"><i class=\"ti-lock timeout-icon\"></i></div>\n        <div class=\"text-center h4 mb-3\">Set Auto Logout</div>\n        <p class=\"text-center mb-4\">You are about to be signed out due to inactivity.<br>Select after how many minutes of inactivity you log out of the system.</p>\n        <div id=\"timeout-reset-box\" style=\"display:none;\">\n          <div class=\"form-group text-center\">\n            <button class=\"btn btn-danger btn-fix btn-air\" id=\"timeout-reset\">Deactivate</button>\n          </div>\n        </div>\n        <div id=\"timeout-activate-box\">\n          <form id=\"timeout-form\" action=\"javascript:;\">\n            <div class=\"form-group pl-3 pr-3 mb-5\">\n              <input class=\"form-control form-control-line\" type=\"text\" name=\"timeout_count\" placeholder=\"Minutes\" id=\"timeout-count\">\n            </div>\n            <div class=\"form-group text-center\">\n              <button class=\"btn btn-primary btn-fix btn-air\" id=\"timeout-activate\">Activate</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- END SESSION TIMEOUT MODAL -->\n    \n<!-- QUICK SIDEBAR-->\n<div class=\"quick-sidebar\">\n  <ul class=\"nav nav-tabs tabs-line\">\n    <li class=\"nav-item\"><a class=\"nav-link active\" href=\"#tab-1\" data-toggle=\"tab\"><i class=\"ti-comment\"></i>\n        <div>Messages</div></a></li>\n    <li class=\"nav-item\"><a class=\"nav-link\" href=\"#tab-2\" data-toggle=\"tab\"><i class=\"ti-settings\"></i>\n        <div>Settings</div></a></li>\n    <li class=\"nav-item\"><a class=\"nav-link\" href=\"#tab-3\" data-toggle=\"tab\"><i class=\"ti-notepad\"></i>\n        <div>Logs</div></a></li>\n  </ul>\n  <div class=\"tab-content\">\n    <div class=\"tab-pane chat-panel active\" id=\"tab-1\">\n      <div class=\"chat-list\">\n        <div class=\"scroller\">\n        </div>\n      </div>\n      <div class=\"messenger\">\n      </div>\n    </div>\n    <div class=\"tab-pane\" id=\"tab-2\">\n      <div class=\"scroller\">\n        <div class=\"font-bold mb-4 mt-2\">APP SETTINGS</div>\n        <div class=\"settings-item\">Show notifications\n          <label class=\"ui-switch switch-icon\">\n            <input type=\"checkbox\"><span></span>\n          </label>\n        </div>\n        <div class=\"settings-item\">Enable autologout\n          <label class=\"ui-switch switch-icon\">\n            <input type=\"checkbox\" checked><span></span>\n          </label>\n        </div>\n        <div class=\"settings-item\">Show recent activity\n          <label class=\"ui-switch switch-icon\">\n            <input type=\"checkbox\"><span></span>\n          </label>\n        </div>\n        <div class=\"settings-item\">Chat history\n          <label class=\"ui-switch switch-icon\">\n            <input type=\"checkbox\"><span></span>\n          </label>\n        </div>\n        <div class=\"settings-item\">Users activity\n          <label class=\"ui-switch switch-icon\">\n            <input type=\"checkbox\" checked><span></span>\n          </label>\n        </div>\n        <div class=\"settings-item\">Orders history\n          <label class=\"ui-switch switch-icon\">\n            <input type=\"checkbox\"><span></span>\n          </label>\n        </div>\n        <div class=\"settings-item\">SMS Alerts\n          <label class=\"ui-switch switch-icon\">\n            <input type=\"checkbox\"><span></span>\n          </label>\n        </div>\n        <div class=\"font-bold mb-4\">SYSTEM SETTINGS</div>\n        <div class=\"settings-item\">Error Reporting\n          <label class=\"ui-switch switch-icon\">\n            <input type=\"checkbox\" checked><span></span>\n          </label>\n        </div>\n        <div class=\"settings-item\">Server logs\n          <label class=\"ui-switch switch-icon\">\n            <input type=\"checkbox\"><span></span>\n          </label>\n        </div>\n        <div class=\"settings-item\">Global search\n          <label class=\"ui-switch switch-icon\">\n            <input type=\"checkbox\"><span></span>\n          </label>\n        </div>\n      </div>\n    </div>\n    <div class=\"tab-pane\" id=\"tab-3\">\n      <div class=\"log-tabs\"><a class=\"active\" href=\"javascript:;\" data-type=\"all\" data-toggle=\"tooltip\" data-original-title=\"All logs\"><i class=\"ti-view-grid\"></i></a><a href=\"javascript:;\" data-type=\"server\" data-toggle=\"tooltip\" data-original-title=\"Server logs\"><i class=\"ti-harddrives\"></i></a><a href=\"javascript:;\" data-type=\"app\" data-toggle=\"tooltip\" data-original-title=\"App logs\"><i class=\"ti-pulse\"></i></a></div>\n      <div class=\"logs\">\n        <div class=\"scroller\">\n          <ul class=\"logs-list\">\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- END QUICK SIDEBAR-->\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.mat-elevation-z0 {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z1 {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z2 {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z3 {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z4 {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z5 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z6 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z7 {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z8 {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z9 {\n  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z10 {\n  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z11 {\n  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z12 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z13 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z14 {\n  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z15 {\n  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z16 {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z17 {\n  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z18 {\n  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z19 {\n  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z20 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z21 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z22 {\n  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z23 {\n  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z24 {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12); }\n\n.mat-h1, .mat-headline, .mat-typography h1 {\n  font: 400 24px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n\n.mat-h2, .mat-title, .mat-typography h2 {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n\n.mat-h3, .mat-subheading-2, .mat-typography h3 {\n  font: 400 16px/28px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n\n.mat-h4, .mat-subheading-1, .mat-typography h4 {\n  font: 400 15px/24px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n\n.mat-h5, .mat-typography h5 {\n  font-size: 11.62px;\n  font-weight: 400;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  line-height: 20px;\n  margin: 0 0 12px; }\n\n.mat-h6, .mat-typography h6 {\n  font-size: 9.38px;\n  font-weight: 400;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  line-height: 20px;\n  margin: 0 0 12px; }\n\n.mat-body-strong, .mat-body-2 {\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-body, .mat-body-1, .mat-typography {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n  .mat-body p, .mat-body-1 p, .mat-typography p {\n    margin: 0 0 12px; }\n\n.mat-small, .mat-caption {\n  font: 400 12px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-display-4, .mat-typography .mat-display-4 {\n  font: 300 112px/112px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 56px;\n  letter-spacing: -0.05em; }\n\n.mat-display-3, .mat-typography .mat-display-3 {\n  font: 400 56px/56px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px;\n  letter-spacing: -0.02em; }\n\n.mat-display-2, .mat-typography .mat-display-2 {\n  font: 400 45px/48px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px;\n  letter-spacing: -0.005em; }\n\n.mat-display-1, .mat-typography .mat-display-1 {\n  font: 400 34px/40px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px; }\n\n.mat-button, .mat-raised-button, .mat-icon-button, .mat-fab, .mat-mini-fab {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n\n.mat-button-toggle {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-card {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-card-title {\n  font-size: 24px;\n  font-weight: 400; }\n\n.mat-card-subtitle,\n.mat-card-content,\n.mat-card-header .mat-card-title {\n  font-size: 14px; }\n\n.mat-checkbox {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-checkbox-layout .mat-checkbox-label {\n  line-height: 24px; }\n\n.mat-chip {\n  font-size: 13px;\n  line-height: 18px; }\n  .mat-chip .mat-chip-remove.mat-icon {\n    font-size: 18px; }\n\n.mat-table {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-header-cell {\n  font-size: 12px;\n  font-weight: 500; }\n\n.mat-cell {\n  font-size: 14px; }\n\n.mat-calendar {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-calendar-body {\n  font-size: 13px; }\n\n.mat-calendar-body-label,\n.mat-calendar-period-button {\n  font-size: 14px;\n  font-weight: 500; }\n\n.mat-calendar-table-header th {\n  font-size: 11px;\n  font-weight: 400; }\n\n.mat-dialog-title {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-expansion-panel-header {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 15px;\n  font-weight: 400; }\n\n.mat-expansion-panel-content {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-form-field {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: inherit;\n  font-weight: 400;\n  line-height: 1.125; }\n\n.mat-form-field-wrapper {\n  padding-bottom: 1.25em; }\n\n.mat-form-field-prefix .mat-icon,\n.mat-form-field-suffix .mat-icon {\n  font-size: 150%;\n  line-height: 1.125; }\n\n.mat-form-field-prefix .mat-icon-button,\n.mat-form-field-suffix .mat-icon-button {\n  height: 1.5em;\n  width: 1.5em; }\n  .mat-form-field-prefix .mat-icon-button .mat-icon,\n  .mat-form-field-suffix .mat-icon-button .mat-icon {\n    height: 1.125em;\n    line-height: 1.125; }\n\n.mat-form-field-infix {\n  padding: 0.4375em 0;\n  border-top: 0.84375em solid transparent; }\n\n.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,\n.mat-form-field-can-float .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label {\n  -webkit-transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n          transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n  -ms-transform: translateY(-1.28125em) scale(0.75);\n  width: 133.33333333%; }\n\n.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill + .mat-form-field-label-wrapper\n.mat-form-field-label {\n  -webkit-transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00101px);\n          transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00101px);\n  -ms-transform: translateY(-1.28124em) scale(0.75);\n  width: 133.33334333%; }\n\n.mat-form-field-can-float .mat-input-server[label]:not(:label-shown) + .mat-form-field-label-wrapper\n.mat-form-field-label {\n  -webkit-transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00102px);\n          transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00102px);\n  -ms-transform: translateY(-1.28123em) scale(0.75);\n  width: 133.33335333%; }\n\n.mat-form-field-label-wrapper {\n  top: -0.84375em;\n  padding-top: 0.84375em; }\n\n.mat-form-field-label {\n  top: 1.28125em; }\n\n.mat-form-field-underline {\n  bottom: 1.25em; }\n\n.mat-form-field-subscript-wrapper {\n  font-size: 75%;\n  margin-top: 0.54166667em;\n  top: calc(100% - 1.66666667em); }\n\n.mat-grid-tile-header,\n.mat-grid-tile-footer {\n  font-size: 14px; }\n  .mat-grid-tile-header .mat-line,\n  .mat-grid-tile-footer .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n    .mat-grid-tile-header .mat-line:nth-child(n+2),\n    .mat-grid-tile-footer .mat-line:nth-child(n+2) {\n      font-size: 12px; }\n\ninput.mat-input-element {\n  margin-top: -0.0625em; }\n\n.mat-menu-item {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 16px;\n  font-weight: 400; }\n\n.mat-paginator,\n.mat-paginator-page-size .mat-select-trigger {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px; }\n\n.mat-radio-button {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-select {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-select-trigger {\n  height: 1.125em; }\n\n.mat-slide-toggle-content {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-slider-thumb-label-text {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 500; }\n\n.mat-stepper-vertical, .mat-stepper-horizontal {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-step-label {\n  font-size: 14px;\n  font-weight: 400; }\n\n.mat-step-label-selected {\n  font-size: 14px;\n  font-weight: 500; }\n\n.mat-tab-group {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-tab-label, .mat-tab-link {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n\n.mat-toolbar,\n.mat-toolbar h1,\n.mat-toolbar h2,\n.mat-toolbar h3,\n.mat-toolbar h4,\n.mat-toolbar h5,\n.mat-toolbar h6 {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0; }\n\n.mat-tooltip {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 10px;\n  padding-top: 6px;\n  padding-bottom: 6px; }\n\n.mat-list-item {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-list-option {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-list .mat-list-item, .mat-nav-list .mat-list-item, .mat-selection-list .mat-list-item {\n  font-size: 16px; }\n  .mat-list .mat-list-item .mat-line, .mat-nav-list .mat-list-item .mat-line, .mat-selection-list .mat-list-item .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n    .mat-list .mat-list-item .mat-line:nth-child(n+2), .mat-nav-list .mat-list-item .mat-line:nth-child(n+2), .mat-selection-list .mat-list-item .mat-line:nth-child(n+2) {\n      font-size: 14px; }\n\n.mat-list .mat-list-option, .mat-nav-list .mat-list-option, .mat-selection-list .mat-list-option {\n  font-size: 16px; }\n  .mat-list .mat-list-option .mat-line, .mat-nav-list .mat-list-option .mat-line, .mat-selection-list .mat-list-option .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n    .mat-list .mat-list-option .mat-line:nth-child(n+2), .mat-nav-list .mat-list-option .mat-line:nth-child(n+2), .mat-selection-list .mat-list-option .mat-line:nth-child(n+2) {\n      font-size: 14px; }\n\n.mat-list .mat-subheader, .mat-nav-list .mat-subheader, .mat-selection-list .mat-subheader {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n\n.mat-list[dense] .mat-list-item, .mat-nav-list[dense] .mat-list-item, .mat-selection-list[dense] .mat-list-item {\n  font-size: 12px; }\n  .mat-list[dense] .mat-list-item .mat-line, .mat-nav-list[dense] .mat-list-item .mat-line, .mat-selection-list[dense] .mat-list-item .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n    .mat-list[dense] .mat-list-item .mat-line:nth-child(n+2), .mat-nav-list[dense] .mat-list-item .mat-line:nth-child(n+2), .mat-selection-list[dense] .mat-list-item .mat-line:nth-child(n+2) {\n      font-size: 12px; }\n\n.mat-list[dense] .mat-list-option, .mat-nav-list[dense] .mat-list-option, .mat-selection-list[dense] .mat-list-option {\n  font-size: 12px; }\n  .mat-list[dense] .mat-list-option .mat-line, .mat-nav-list[dense] .mat-list-option .mat-line, .mat-selection-list[dense] .mat-list-option .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n    .mat-list[dense] .mat-list-option .mat-line:nth-child(n+2), .mat-nav-list[dense] .mat-list-option .mat-line:nth-child(n+2), .mat-selection-list[dense] .mat-list-option .mat-line:nth-child(n+2) {\n      font-size: 12px; }\n\n.mat-list[dense] .mat-subheader, .mat-nav-list[dense] .mat-subheader, .mat-selection-list[dense] .mat-subheader {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 500; }\n\n.mat-option {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 16px; }\n\n.mat-optgroup-label {\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-simple-snackbar {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px; }\n\n.mat-simple-snackbar-action {\n  line-height: 1;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: 500; }\n\n.mat-ripple {\n  overflow: hidden; }\n  @media screen and (-ms-high-contrast: active) {\n    .mat-ripple {\n      display: none; } }\n\n.mat-ripple.mat-ripple-unbounded {\n  overflow: visible; }\n\n.mat-ripple-element {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  transition: opacity, -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  -webkit-transform: scale(0);\n          transform: scale(0); }\n\n.cdk-visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n  outline: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none; }\n\n.cdk-overlay-container, .cdk-global-overlay-wrapper {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%; }\n\n.cdk-overlay-container {\n  position: fixed;\n  z-index: 1000; }\n\n.cdk-global-overlay-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  z-index: 1000; }\n\n.cdk-overlay-pane {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000; }\n\n.cdk-overlay-backdrop {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0; }\n  .cdk-overlay-backdrop.cdk-overlay-backdrop-showing {\n    opacity: 1; }\n\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.288); }\n\n.cdk-overlay-transparent-backdrop, .cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing {\n  opacity: 0; }\n\n.cdk-global-scrollblock {\n  position: fixed;\n  width: 100%;\n  overflow-y: scroll; }\n\n.mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.1); }\n\n.mat-option {\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-option:hover:not(.mat-option-disabled), .mat-option:focus:not(.mat-option-disabled) {\n    background: rgba(0, 0, 0, 0.04); }\n  .mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {\n    color: #7e57c2; }\n  .mat-accent .mat-option.mat-selected:not(.mat-option-disabled) {\n    color: #424242; }\n  .mat-warn .mat-option.mat-selected:not(.mat-option-disabled) {\n    color: #e53935; }\n  .mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled) {\n    background: rgba(0, 0, 0, 0.04); }\n  .mat-option.mat-active {\n    background: rgba(0, 0, 0, 0.04);\n    color: rgba(0, 0, 0, 0.87); }\n  .mat-option.mat-option-disabled {\n    color: rgba(0, 0, 0, 0.38); }\n\n.mat-optgroup-label {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-optgroup-disabled .mat-optgroup-label {\n  color: rgba(0, 0, 0, 0.38); }\n\n.mat-pseudo-checkbox {\n  color: rgba(0, 0, 0, 0.54); }\n  .mat-pseudo-checkbox::after {\n    color: #fafafa; }\n\n.mat-pseudo-checkbox-checked,\n.mat-pseudo-checkbox-indeterminate,\n.mat-accent .mat-pseudo-checkbox-checked,\n.mat-accent .mat-pseudo-checkbox-indeterminate {\n  background: #424242; }\n\n.mat-primary .mat-pseudo-checkbox-checked,\n.mat-primary .mat-pseudo-checkbox-indeterminate {\n  background: #7e57c2; }\n\n.mat-warn .mat-pseudo-checkbox-checked,\n.mat-warn .mat-pseudo-checkbox-indeterminate {\n  background: #e53935; }\n\n.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,\n.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {\n  background: #b0b0b0; }\n\n.mat-app-background {\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-theme-loaded-marker {\n  display: none; }\n\n.mat-autocomplete-panel {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover) {\n    background: white; }\n    .mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled) {\n      color: rgba(0, 0, 0, 0.87); }\n\n.mat-button, .mat-icon-button {\n  background: transparent; }\n  .mat-button.mat-primary .mat-button-focus-overlay, .mat-icon-button.mat-primary .mat-button-focus-overlay {\n    background-color: rgba(126, 87, 194, 0.12); }\n  .mat-button.mat-accent .mat-button-focus-overlay, .mat-icon-button.mat-accent .mat-button-focus-overlay {\n    background-color: rgba(66, 66, 66, 0.12); }\n  .mat-button.mat-warn .mat-button-focus-overlay, .mat-icon-button.mat-warn .mat-button-focus-overlay {\n    background-color: rgba(229, 57, 53, 0.12); }\n  .mat-button[disabled] .mat-button-focus-overlay, .mat-icon-button[disabled] .mat-button-focus-overlay {\n    background-color: transparent; }\n  .mat-button.mat-primary, .mat-icon-button.mat-primary {\n    color: #7e57c2; }\n  .mat-button.mat-accent, .mat-icon-button.mat-accent {\n    color: #424242; }\n  .mat-button.mat-warn, .mat-icon-button.mat-warn {\n    color: #e53935; }\n  .mat-button.mat-primary[disabled], .mat-button.mat-accent[disabled], .mat-button.mat-warn[disabled], .mat-button[disabled][disabled], .mat-icon-button.mat-primary[disabled], .mat-icon-button.mat-accent[disabled], .mat-icon-button.mat-warn[disabled], .mat-icon-button[disabled][disabled] {\n    color: rgba(0, 0, 0, 0.26); }\n\n.mat-raised-button, .mat-fab, .mat-mini-fab {\n  color: rgba(0, 0, 0, 0.87);\n  background-color: white; }\n  .mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n    color: white; }\n  .mat-raised-button.mat-accent, .mat-fab.mat-accent, .mat-mini-fab.mat-accent {\n    color: white; }\n  .mat-raised-button.mat-warn, .mat-fab.mat-warn, .mat-mini-fab.mat-warn {\n    color: white; }\n  .mat-raised-button.mat-primary[disabled], .mat-raised-button.mat-accent[disabled], .mat-raised-button.mat-warn[disabled], .mat-raised-button[disabled][disabled], .mat-fab.mat-primary[disabled], .mat-fab.mat-accent[disabled], .mat-fab.mat-warn[disabled], .mat-fab[disabled][disabled], .mat-mini-fab.mat-primary[disabled], .mat-mini-fab.mat-accent[disabled], .mat-mini-fab.mat-warn[disabled], .mat-mini-fab[disabled][disabled] {\n    color: rgba(0, 0, 0, 0.26); }\n  .mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n    background-color: #7e57c2; }\n  .mat-raised-button.mat-accent, .mat-fab.mat-accent, .mat-mini-fab.mat-accent {\n    background-color: #424242; }\n  .mat-raised-button.mat-warn, .mat-fab.mat-warn, .mat-mini-fab.mat-warn {\n    background-color: #e53935; }\n  .mat-raised-button.mat-primary[disabled], .mat-raised-button.mat-accent[disabled], .mat-raised-button.mat-warn[disabled], .mat-raised-button[disabled][disabled], .mat-fab.mat-primary[disabled], .mat-fab.mat-accent[disabled], .mat-fab.mat-warn[disabled], .mat-fab[disabled][disabled], .mat-mini-fab.mat-primary[disabled], .mat-mini-fab.mat-accent[disabled], .mat-mini-fab.mat-warn[disabled], .mat-mini-fab[disabled][disabled] {\n    background-color: rgba(0, 0, 0, 0.12); }\n  .mat-raised-button.mat-primary .mat-ripple-element, .mat-fab.mat-primary .mat-ripple-element, .mat-mini-fab.mat-primary .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.2); }\n  .mat-raised-button.mat-accent .mat-ripple-element, .mat-fab.mat-accent .mat-ripple-element, .mat-mini-fab.mat-accent .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.2); }\n  .mat-raised-button.mat-warn .mat-ripple-element, .mat-fab.mat-warn .mat-ripple-element, .mat-mini-fab.mat-warn .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.2); }\n\n.mat-button.mat-primary .mat-ripple-element {\n  background-color: rgba(126, 87, 194, 0.1); }\n\n.mat-button.mat-accent .mat-ripple-element {\n  background-color: rgba(66, 66, 66, 0.1); }\n\n.mat-button.mat-warn .mat-ripple-element {\n  background-color: rgba(229, 57, 53, 0.1); }\n\n.mat-icon-button.mat-primary .mat-ripple-element {\n  background-color: rgba(126, 87, 194, 0.2); }\n\n.mat-icon-button.mat-accent .mat-ripple-element {\n  background-color: rgba(66, 66, 66, 0.2); }\n\n.mat-icon-button.mat-warn .mat-ripple-element {\n  background-color: rgba(229, 57, 53, 0.2); }\n\n.mat-button-toggle {\n  color: rgba(0, 0, 0, 0.38); }\n  .mat-button-toggle.cdk-focused .mat-button-toggle-focus-overlay {\n    background-color: rgba(0, 0, 0, 0.12); }\n\n.mat-button-toggle-checked {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-button-toggle-disabled {\n  background-color: #eeeeee;\n  color: rgba(0, 0, 0, 0.26); }\n  .mat-button-toggle-disabled.mat-button-toggle-checked {\n    background-color: #bdbdbd; }\n\n.mat-card {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-card-subtitle {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-checkbox-frame {\n  border-color: rgba(0, 0, 0, 0.54); }\n\n.mat-checkbox-checkmark {\n  fill: #fafafa; }\n\n.mat-checkbox-checkmark-path {\n  stroke: #fafafa !important; }\n\n.mat-checkbox-mixedmark {\n  background-color: #fafafa; }\n\n.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background, .mat-checkbox-checked.mat-primary .mat-checkbox-background {\n  background-color: #7e57c2; }\n\n.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background, .mat-checkbox-checked.mat-accent .mat-checkbox-background {\n  background-color: #424242; }\n\n.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background, .mat-checkbox-checked.mat-warn .mat-checkbox-background {\n  background-color: #e53935; }\n\n.mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background, .mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background {\n  background-color: #b0b0b0; }\n\n.mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame {\n  border-color: #b0b0b0; }\n\n.mat-checkbox-disabled .mat-checkbox-label {\n  color: #b0b0b0; }\n\n.mat-checkbox:not(.mat-checkbox-disabled).mat-primary .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(126, 87, 194, 0.26); }\n\n.mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(66, 66, 66, 0.26); }\n\n.mat-checkbox:not(.mat-checkbox-disabled).mat-warn .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(229, 57, 53, 0.26); }\n\n.mat-chip:not(.mat-basic-chip) {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-chip:not(.mat-basic-chip) .mat-chip-remove {\n    color: rgba(0, 0, 0, 0.87);\n    opacity: 0.4; }\n  .mat-chip:not(.mat-basic-chip) .mat-chip-remove:hover {\n    opacity: 0.54; }\n\n.mat-chip.mat-chip-selected.mat-primary {\n  background-color: #7e57c2;\n  color: white; }\n  .mat-chip.mat-chip-selected.mat-primary .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n  .mat-chip.mat-chip-selected.mat-primary .mat-chip-remove:hover {\n    opacity: 0.54; }\n\n.mat-chip.mat-chip-selected.mat-warn {\n  background-color: #e53935;\n  color: white; }\n  .mat-chip.mat-chip-selected.mat-warn .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n  .mat-chip.mat-chip-selected.mat-warn .mat-chip-remove:hover {\n    opacity: 0.54; }\n\n.mat-chip.mat-chip-selected.mat-accent {\n  background-color: #424242;\n  color: white; }\n  .mat-chip.mat-chip-selected.mat-accent .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n  .mat-chip.mat-chip-selected.mat-accent .mat-chip-remove:hover {\n    opacity: 0.54; }\n\n.mat-table {\n  background: white; }\n\n.mat-row, .mat-header-row {\n  border-bottom-color: rgba(0, 0, 0, 0.12); }\n\n.mat-header-cell {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-cell {\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-datepicker-content {\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-calendar-arrow {\n  border-top-color: rgba(0, 0, 0, 0.54); }\n\n.mat-calendar-next-button,\n.mat-calendar-previous-button {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-calendar-table-header {\n  color: rgba(0, 0, 0, 0.38); }\n\n.mat-calendar-table-header-divider::after {\n  background: rgba(0, 0, 0, 0.12); }\n\n.mat-calendar-body-label {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-calendar-body-cell-content {\n  color: rgba(0, 0, 0, 0.87);\n  border-color: transparent; }\n  .mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected) {\n    color: rgba(0, 0, 0, 0.38); }\n\n:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected),\n.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected),\n.cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected) {\n  background-color: rgba(0, 0, 0, 0.04); }\n\n.mat-calendar-body-selected {\n  background-color: #7e57c2;\n  color: white; }\n\n.mat-calendar-body-disabled > .mat-calendar-body-selected {\n  background-color: rgba(126, 87, 194, 0.4); }\n\n.mat-calendar-body-today:not(.mat-calendar-body-selected) {\n  border-color: rgba(0, 0, 0, 0.38); }\n\n.mat-calendar-body-today.mat-calendar-body-selected {\n  box-shadow: inset 0 0 0 1px white; }\n\n.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected) {\n  border-color: rgba(0, 0, 0, 0.18); }\n\n.mat-datepicker-toggle-active {\n  color: #7e57c2; }\n\n.mat-dialog-container {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-divider {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n\n.mat-divider-vertical {\n  border-right-color: rgba(0, 0, 0, 0.12); }\n\n.mat-expansion-panel {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-action-row {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n\n.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']).cdk-keyboard-focused, .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']).cdk-program-focused, .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']):hover {\n  background: rgba(0, 0, 0, 0.04); }\n\n.mat-expansion-panel-header-title {\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-expansion-panel-header-description,\n.mat-expansion-indicator::after {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-expansion-panel-header[aria-disabled='true'] {\n  color: rgba(0, 0, 0, 0.26); }\n  .mat-expansion-panel-header[aria-disabled='true'] .mat-expansion-panel-header-title,\n  .mat-expansion-panel-header[aria-disabled='true'] .mat-expansion-panel-header-description {\n    color: inherit; }\n\n.mat-form-field-label {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-hint {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-focused .mat-form-field-label {\n  color: #7e57c2; }\n  .mat-focused .mat-form-field-label.mat-accent {\n    color: #424242; }\n  .mat-focused .mat-form-field-label.mat-warn {\n    color: #e53935; }\n\n.mat-focused .mat-form-field-required-marker {\n  color: #424242; }\n\n.mat-form-field-underline {\n  background-color: rgba(0, 0, 0, 0.42); }\n\n.mat-form-field-disabled .mat-form-field-underline {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.42) 33%, transparent 0%);\n  background-size: 4px 1px;\n  background-repeat: repeat-x; }\n\n.mat-form-field-ripple {\n  background-color: #7e57c2; }\n  .mat-form-field-ripple.mat-accent {\n    background-color: #424242; }\n  .mat-form-field-ripple.mat-warn {\n    background-color: #e53935; }\n\n.mat-form-field-invalid .mat-form-field-label {\n  color: #e53935; }\n  .mat-form-field-invalid .mat-form-field-label.mat-accent,\n  .mat-form-field-invalid .mat-form-field-label .mat-form-field-required-marker {\n    color: #e53935; }\n\n.mat-form-field-invalid .mat-form-field-ripple {\n  background-color: #e53935; }\n\n.mat-error {\n  color: #e53935; }\n\n.mat-icon.mat-primary {\n  color: #7e57c2; }\n\n.mat-icon.mat-accent {\n  color: #424242; }\n\n.mat-icon.mat-warn {\n  color: #e53935; }\n\n.mat-input-element:disabled {\n  color: rgba(0, 0, 0, 0.38); }\n\n.mat-input-element {\n  caret-color: #7e57c2; }\n  .mat-input-element::-webkit-input-placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n  .mat-input-element:-ms-input-placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n  .mat-input-element::placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n  .mat-input-element::-moz-placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n  .mat-input-element::-webkit-input-placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n  .mat-input-element:-ms-input-placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n\n.mat-accent .mat-input-element {\n  caret-color: #424242; }\n\n.mat-warn .mat-input-element,\n.mat-form-field-invalid .mat-input-element {\n  caret-color: #e53935; }\n\n.mat-list .mat-list-item, .mat-nav-list .mat-list-item, .mat-selection-list .mat-list-item {\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-list .mat-list-option, .mat-nav-list .mat-list-option, .mat-selection-list .mat-list-option {\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-list .mat-subheader, .mat-nav-list .mat-subheader, .mat-selection-list .mat-subheader {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-list-item-disabled {\n  background-color: #eeeeee; }\n\n.mat-nav-list .mat-list-item {\n  outline: none; }\n  .mat-nav-list .mat-list-item:hover, .mat-nav-list .mat-list-item.mat-list-item-focus {\n    background: rgba(0, 0, 0, 0.04); }\n\n.mat-list-option {\n  outline: none; }\n  .mat-list-option:hover, .mat-list-option.mat-list-item-focus {\n    background: rgba(0, 0, 0, 0.04); }\n\n.mat-menu-panel {\n  background: white; }\n\n.mat-menu-item {\n  background: transparent;\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-menu-item[disabled] {\n    color: rgba(0, 0, 0, 0.38); }\n\n.mat-menu-item .mat-icon:not([color]),\n.mat-menu-item-submenu-trigger::after {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-menu-item:hover:not([disabled]),\n.mat-menu-item:focus:not([disabled]),\n.mat-menu-item-highlighted:not([disabled]) {\n  background: rgba(0, 0, 0, 0.04); }\n\n.mat-paginator {\n  background: white; }\n\n.mat-paginator,\n.mat-paginator-page-size .mat-select-trigger {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-paginator-increment,\n.mat-paginator-decrement {\n  border-top: 2px solid rgba(0, 0, 0, 0.54);\n  border-right: 2px solid rgba(0, 0, 0, 0.54); }\n\n.mat-icon-button[disabled] .mat-paginator-increment,\n.mat-icon-button[disabled] .mat-paginator-decrement {\n  border-color: rgba(0, 0, 0, 0.38); }\n\n.mat-progress-bar-background {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27%23d1c4e9%27%2F%3E%3C%2Fsvg%3E\"); }\n\n.mat-progress-bar-buffer {\n  background-color: #d1c4e9; }\n\n.mat-progress-bar-fill::after {\n  background-color: #7e57c2; }\n\n.mat-progress-bar.mat-accent .mat-progress-bar-background {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27%23212121%27%2F%3E%3C%2Fsvg%3E\"); }\n\n.mat-progress-bar.mat-accent .mat-progress-bar-buffer {\n  background-color: #212121; }\n\n.mat-progress-bar.mat-accent .mat-progress-bar-fill::after {\n  background-color: #424242; }\n\n.mat-progress-bar.mat-warn .mat-progress-bar-background {\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27%23ffcdd2%27%2F%3E%3C%2Fsvg%3E\"); }\n\n.mat-progress-bar.mat-warn .mat-progress-bar-buffer {\n  background-color: #ffcdd2; }\n\n.mat-progress-bar.mat-warn .mat-progress-bar-fill::after {\n  background-color: #e53935; }\n\n.mat-progress-spinner circle, .mat-spinner circle {\n  stroke: #7e57c2; }\n\n.mat-progress-spinner.mat-accent circle, .mat-spinner.mat-accent circle {\n  stroke: #424242; }\n\n.mat-progress-spinner.mat-warn circle, .mat-spinner.mat-warn circle {\n  stroke: #e53935; }\n\n.mat-radio-outer-circle {\n  border-color: rgba(0, 0, 0, 0.54); }\n\n.mat-radio-disabled .mat-radio-outer-circle {\n  border-color: rgba(0, 0, 0, 0.38); }\n\n.mat-radio-disabled .mat-radio-ripple .mat-ripple-element, .mat-radio-disabled .mat-radio-inner-circle {\n  background-color: rgba(0, 0, 0, 0.38); }\n\n.mat-radio-disabled .mat-radio-label-content {\n  color: rgba(0, 0, 0, 0.38); }\n\n.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #7e57c2; }\n\n.mat-radio-button.mat-primary .mat-radio-inner-circle {\n  background-color: #7e57c2; }\n\n.mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(126, 87, 194, 0.26); }\n\n.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #424242; }\n\n.mat-radio-button.mat-accent .mat-radio-inner-circle {\n  background-color: #424242; }\n\n.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(66, 66, 66, 0.26); }\n\n.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #e53935; }\n\n.mat-radio-button.mat-warn .mat-radio-inner-circle {\n  background-color: #e53935; }\n\n.mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(229, 57, 53, 0.26); }\n\n.mat-select-content, .mat-select-panel-done-animating {\n  background: white; }\n\n.mat-select-value {\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-select-placeholder {\n  color: rgba(0, 0, 0, 0.42); }\n\n.mat-select-disabled .mat-select-value {\n  color: rgba(0, 0, 0, 0.38); }\n\n.mat-select-arrow {\n  color: rgba(0, 0, 0, 0.54); }\n\n.mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple) {\n  background: rgba(0, 0, 0, 0.12); }\n\n.mat-form-field.mat-focused.mat-primary .mat-select-arrow {\n  color: #7e57c2; }\n\n.mat-form-field.mat-focused.mat-accent .mat-select-arrow {\n  color: #424242; }\n\n.mat-form-field.mat-focused.mat-warn .mat-select-arrow {\n  color: #e53935; }\n\n.mat-form-field .mat-select.mat-select-invalid .mat-select-arrow {\n  color: #e53935; }\n\n.mat-form-field .mat-select.mat-select-disabled .mat-select-arrow {\n  color: rgba(0, 0, 0, 0.38); }\n\n.mat-drawer-container {\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-drawer {\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-drawer.mat-drawer-push {\n    background-color: white; }\n\n.mat-drawer-backdrop.mat-drawer-shown {\n  background-color: rgba(0, 0, 0, 0.6); }\n\n.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #9e9e9e; }\n\n.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(158, 158, 158, 0.5); }\n\n.mat-slide-toggle:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.06); }\n\n.mat-slide-toggle .mat-ripple-element {\n  background-color: rgba(158, 158, 158, 0.12); }\n\n.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #673ab7; }\n\n.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(103, 58, 183, 0.5); }\n\n.mat-slide-toggle.mat-primary:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.06); }\n\n.mat-slide-toggle.mat-primary .mat-ripple-element {\n  background-color: rgba(103, 58, 183, 0.12); }\n\n.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #f44336; }\n\n.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(244, 67, 54, 0.5); }\n\n.mat-slide-toggle.mat-warn:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.06); }\n\n.mat-slide-toggle.mat-warn .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.12); }\n\n.mat-disabled .mat-slide-toggle-thumb {\n  background-color: #bdbdbd; }\n\n.mat-disabled .mat-slide-toggle-bar {\n  background-color: rgba(0, 0, 0, 0.1); }\n\n.mat-slide-toggle-thumb {\n  background-color: #fafafa; }\n\n.mat-slide-toggle-bar {\n  background-color: rgba(0, 0, 0, 0.38); }\n\n.mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.26); }\n\n.mat-primary .mat-slider-track-fill,\n.mat-primary .mat-slider-thumb,\n.mat-primary .mat-slider-thumb-label {\n  background-color: #7e57c2; }\n\n.mat-primary .mat-slider-thumb-label-text {\n  color: white; }\n\n.mat-accent .mat-slider-track-fill,\n.mat-accent .mat-slider-thumb,\n.mat-accent .mat-slider-thumb-label {\n  background-color: #424242; }\n\n.mat-accent .mat-slider-thumb-label-text {\n  color: white; }\n\n.mat-warn .mat-slider-track-fill,\n.mat-warn .mat-slider-thumb,\n.mat-warn .mat-slider-thumb-label {\n  background-color: #e53935; }\n\n.mat-warn .mat-slider-thumb-label-text {\n  color: white; }\n\n.mat-slider-focus-ring {\n  background-color: rgba(66, 66, 66, 0.2); }\n\n.mat-slider:hover .mat-slider-track-background,\n.cdk-focused .mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.38); }\n\n.mat-slider-disabled .mat-slider-track-background,\n.mat-slider-disabled .mat-slider-track-fill,\n.mat-slider-disabled .mat-slider-thumb {\n  background-color: rgba(0, 0, 0, 0.26); }\n\n.mat-slider-disabled:hover .mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.26); }\n\n.mat-slider-min-value .mat-slider-focus-ring {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,\n.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label {\n  background-color: rgba(0, 0, 0, 0.87); }\n\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label {\n  background-color: rgba(0, 0, 0, 0.26); }\n\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.26);\n  background-color: transparent; }\n\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb, .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.38); }\n\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb, .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.26); }\n\n.mat-slider-has-ticks .mat-slider-wrapper::after {\n  border-color: rgba(0, 0, 0, 0.7); }\n\n.mat-slider-horizontal .mat-slider-ticks {\n  background-image: repeating-linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent);\n  background-image: -moz-repeating-linear-gradient(0.0001deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent); }\n\n.mat-slider-vertical .mat-slider-ticks {\n  background-image: repeating-linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent); }\n\n.mat-step-header.cdk-keyboard-focused, .mat-step-header.cdk-program-focused, .mat-step-header:hover {\n  background-color: rgba(0, 0, 0, 0.04); }\n\n.mat-step-header .mat-step-label,\n.mat-step-header .mat-step-optional {\n  color: rgba(0, 0, 0, 0.38); }\n\n.mat-step-header .mat-step-icon {\n  background-color: #7e57c2;\n  color: white; }\n\n.mat-step-header .mat-step-icon-not-touched {\n  background-color: rgba(0, 0, 0, 0.38);\n  color: white; }\n\n.mat-step-header .mat-step-label.mat-step-label-active {\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-stepper-horizontal, .mat-stepper-vertical {\n  background-color: white; }\n\n.mat-stepper-vertical-line::before {\n  border-left-color: rgba(0, 0, 0, 0.12); }\n\n.mat-stepper-horizontal-line {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n\n.mat-tab-nav-bar,\n.mat-tab-header {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n\n.mat-tab-group-inverted-header .mat-tab-nav-bar,\n.mat-tab-group-inverted-header .mat-tab-header {\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  border-bottom: none; }\n\n.mat-tab-label, .mat-tab-link {\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-tab-label.mat-tab-disabled, .mat-tab-link.mat-tab-disabled {\n    color: rgba(0, 0, 0, 0.38); }\n\n.mat-tab-header-pagination-chevron {\n  border-color: rgba(0, 0, 0, 0.87); }\n\n.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(0, 0, 0, 0.38); }\n\n.mat-tab-group[class*='mat-background-'] .mat-tab-header,\n.mat-tab-nav-bar[class*='mat-background-'] {\n  border-bottom: none;\n  border-top: none; }\n\n.mat-tab-group.mat-primary .mat-tab-label:not(.mat-tab-disabled):focus,\n.mat-tab-group.mat-primary .mat-tab-link:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-primary .mat-tab-label:not(.mat-tab-disabled):focus,\n.mat-tab-nav-bar.mat-primary .mat-tab-link:not(.mat-tab-disabled):focus {\n  background-color: rgba(209, 196, 233, 0.3); }\n\n.mat-tab-group.mat-primary .mat-ink-bar, .mat-tab-nav-bar.mat-primary .mat-ink-bar {\n  background-color: #7e57c2; }\n\n.mat-tab-group.mat-primary.mat-background-primary .mat-ink-bar, .mat-tab-nav-bar.mat-primary.mat-background-primary .mat-ink-bar {\n  background-color: white; }\n\n.mat-tab-group.mat-accent .mat-tab-label:not(.mat-tab-disabled):focus,\n.mat-tab-group.mat-accent .mat-tab-link:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-accent .mat-tab-label:not(.mat-tab-disabled):focus,\n.mat-tab-nav-bar.mat-accent .mat-tab-link:not(.mat-tab-disabled):focus {\n  background-color: rgba(33, 33, 33, 0.3); }\n\n.mat-tab-group.mat-accent .mat-ink-bar, .mat-tab-nav-bar.mat-accent .mat-ink-bar {\n  background-color: #424242; }\n\n.mat-tab-group.mat-accent.mat-background-accent .mat-ink-bar, .mat-tab-nav-bar.mat-accent.mat-background-accent .mat-ink-bar {\n  background-color: white; }\n\n.mat-tab-group.mat-warn .mat-tab-label:not(.mat-tab-disabled):focus,\n.mat-tab-group.mat-warn .mat-tab-link:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-warn .mat-tab-label:not(.mat-tab-disabled):focus,\n.mat-tab-nav-bar.mat-warn .mat-tab-link:not(.mat-tab-disabled):focus {\n  background-color: rgba(255, 205, 210, 0.3); }\n\n.mat-tab-group.mat-warn .mat-ink-bar, .mat-tab-nav-bar.mat-warn .mat-ink-bar {\n  background-color: #e53935; }\n\n.mat-tab-group.mat-warn.mat-background-warn .mat-ink-bar, .mat-tab-nav-bar.mat-warn.mat-background-warn .mat-ink-bar {\n  background-color: white; }\n\n.mat-tab-group.mat-background-primary .mat-tab-label:not(.mat-tab-disabled):focus,\n.mat-tab-group.mat-background-primary .mat-tab-link:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-background-primary .mat-tab-label:not(.mat-tab-disabled):focus,\n.mat-tab-nav-bar.mat-background-primary .mat-tab-link:not(.mat-tab-disabled):focus {\n  background-color: rgba(209, 196, 233, 0.3); }\n\n.mat-tab-group.mat-background-primary .mat-tab-header, .mat-tab-group.mat-background-primary .mat-tab-links, .mat-tab-nav-bar.mat-background-primary .mat-tab-header, .mat-tab-nav-bar.mat-background-primary .mat-tab-links {\n  background-color: #7e57c2; }\n\n.mat-tab-group.mat-background-primary .mat-tab-label, .mat-tab-group.mat-background-primary .mat-tab-link, .mat-tab-nav-bar.mat-background-primary .mat-tab-label, .mat-tab-nav-bar.mat-background-primary .mat-tab-link {\n  color: white; }\n  .mat-tab-group.mat-background-primary .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-primary .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-primary .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-primary .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n\n.mat-tab-group.mat-background-primary .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-chevron {\n  border-color: white; }\n\n.mat-tab-group.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n\n.mat-tab-group.mat-background-primary .mat-ripple-element, .mat-tab-nav-bar.mat-background-primary .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n\n.mat-tab-group.mat-background-accent .mat-tab-label:not(.mat-tab-disabled):focus,\n.mat-tab-group.mat-background-accent .mat-tab-link:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-background-accent .mat-tab-label:not(.mat-tab-disabled):focus,\n.mat-tab-nav-bar.mat-background-accent .mat-tab-link:not(.mat-tab-disabled):focus {\n  background-color: rgba(33, 33, 33, 0.3); }\n\n.mat-tab-group.mat-background-accent .mat-tab-header, .mat-tab-group.mat-background-accent .mat-tab-links, .mat-tab-nav-bar.mat-background-accent .mat-tab-header, .mat-tab-nav-bar.mat-background-accent .mat-tab-links {\n  background-color: #424242; }\n\n.mat-tab-group.mat-background-accent .mat-tab-label, .mat-tab-group.mat-background-accent .mat-tab-link, .mat-tab-nav-bar.mat-background-accent .mat-tab-label, .mat-tab-nav-bar.mat-background-accent .mat-tab-link {\n  color: white; }\n  .mat-tab-group.mat-background-accent .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-accent .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-accent .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-accent .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n\n.mat-tab-group.mat-background-accent .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-chevron {\n  border-color: white; }\n\n.mat-tab-group.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n\n.mat-tab-group.mat-background-accent .mat-ripple-element, .mat-tab-nav-bar.mat-background-accent .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n\n.mat-tab-group.mat-background-warn .mat-tab-label:not(.mat-tab-disabled):focus,\n.mat-tab-group.mat-background-warn .mat-tab-link:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-background-warn .mat-tab-label:not(.mat-tab-disabled):focus,\n.mat-tab-nav-bar.mat-background-warn .mat-tab-link:not(.mat-tab-disabled):focus {\n  background-color: rgba(255, 205, 210, 0.3); }\n\n.mat-tab-group.mat-background-warn .mat-tab-header, .mat-tab-group.mat-background-warn .mat-tab-links, .mat-tab-nav-bar.mat-background-warn .mat-tab-header, .mat-tab-nav-bar.mat-background-warn .mat-tab-links {\n  background-color: #e53935; }\n\n.mat-tab-group.mat-background-warn .mat-tab-label, .mat-tab-group.mat-background-warn .mat-tab-link, .mat-tab-nav-bar.mat-background-warn .mat-tab-label, .mat-tab-nav-bar.mat-background-warn .mat-tab-link {\n  color: white; }\n  .mat-tab-group.mat-background-warn .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-warn .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-warn .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-warn .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n\n.mat-tab-group.mat-background-warn .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-chevron {\n  border-color: white; }\n\n.mat-tab-group.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n\n.mat-tab-group.mat-background-warn .mat-ripple-element, .mat-tab-nav-bar.mat-background-warn .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n\n.mat-toolbar {\n  background: whitesmoke;\n  color: rgba(0, 0, 0, 0.87); }\n  .mat-toolbar.mat-primary {\n    background: #7e57c2;\n    color: white; }\n  .mat-toolbar.mat-accent {\n    background: #424242;\n    color: white; }\n  .mat-toolbar.mat-warn {\n    background: #e53935;\n    color: white; }\n\n.mat-tooltip {\n  background: rgba(97, 97, 97, 0.9); }\n\n.mat-snack-bar-container {\n  background: #323232;\n  color: white; }\n\n.mat-simple-snackbar-action {\n  color: #424242; }\n\n.cdk-overlay-container {\n  z-index: 1010; }\n\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.7); }\n\n.mat-form-field {\n  display: block !important;\n  margin-left: 0 !important; }\n\n.mat-form-field.mat-focused .mat-form-field-flex {\n  background-color: #e4e6f0 !important; }\n\n.mat-form-field-wrapper {\n  padding-bottom: 0; }\n\n.mat-form-field-infix {\n  border-top: 0;\n  padding: 0.65rem 1.25rem;\n  line-height: 1.25; }\n\n.mat-form-field-flex {\n  background-color: #f4f5f9;\n  border-color: #f4f5f9;\n  border-radius: 2px; }\n\n.mat-form-field-underline {\n  height: 0 !important; }\n  .mat-form-field-underline .mat-form-field-ripple {\n    height: 0 !important; }\n\n.mat-option {\n  line-height: 25px !important;\n  height: 25px !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers__ = __webpack_require__("../../../../../src/app/helpers.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(_router) {
        this._router = _router;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        this._router.events.subscribe(function (route) {
            if (route instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationStart */]) {
                __WEBPACK_IMPORTED_MODULE_2__helpers__["a" /* Helpers */].setLoading(true);
                __WEBPACK_IMPORTED_MODULE_2__helpers__["a" /* Helpers */].bodyClass('fixed-navbar');
            }
            if (route instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationEnd */]) {
                window.scrollTo(0, 0);
                __WEBPACK_IMPORTED_MODULE_2__helpers__["a" /* Helpers */].setLoading(false);
                // Initialize page: handlers ...
                __WEBPACK_IMPORTED_MODULE_2__helpers__["a" /* Helpers */].initPage();
            }
        });
    };
    AppComponent.prototype.ngAfterViewInit = function () { };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'body',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layouts_layout_module__ = __webpack_require__("../../../../../src/app/layouts/layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__layouts_layout_module__["a" /* LayoutModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__services_index__["d" /* LoaderService */],
                __WEBPACK_IMPORTED_MODULE_6__services_index__["a" /* AssetService */],
                __WEBPACK_IMPORTED_MODULE_6__services_index__["b" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_6__services_index__["c" /* ExistingPortfolioGuard */],
                __WEBPACK_IMPORTED_MODULE_6__services_index__["e" /* NewPortfolioGuard */],
                __WEBPACK_IMPORTED_MODULE_6__services_index__["f" /* PortfolioService */],
                __WEBPACK_IMPORTED_MODULE_6__services_index__["g" /* ScriptLoaderService */],
                __WEBPACK_IMPORTED_MODULE_6__services_index__["h" /* SpreadTradeService */],
                __WEBPACK_IMPORTED_MODULE_6__services_index__["i" /* StockService */],
                __WEBPACK_IMPORTED_MODULE_6__services_index__["j" /* TradeService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/dialog-close-price/dialog-close-price.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-dialog-actions  class=\"text-right\">\n  <button mat-dialog-close class=\"btn close-button\"><i class=\"la la-close la-lg\" aria-hidden=\"true\"></i></button>\n</mat-dialog-actions>\n<mat-dialog-content>\n  <div class=\"ibox\">\n    <div class=\"ibox-head\">\n        <div class=\"ibox-title\">Close Trade</div>\n    </div> \n    <div class=\"ibox-body\"> \n      <h6 class=\"font-strong mb-4\">Please enter the details below:</h6>\n      <form [formGroup]=\"closeTradeForm\" (ngSubmit)=\"closeTrade(closeTradeForm.value)\" novalidate>\n        <div class=\"form-group mb-4\">\n          <label>Closed Price</label>\n          <div class=\"input-group\">\n            <input  type=\"text\" formControlName=\"close_price\" class=\"form-control form-control-solid\" placeholder=\"Enter closed price\">\n            <div class=\"input-group-btn\">\n              <select formControlName=\"currency\" class=\"form-control form-control-solid\">\n                <option [value]=\"undefined\" disabled selected></option>\n                <option *ngFor=\"let item of currencies\" [value]=\"item\">{{item}}</option>\n              </select>    \n            </div>\n          </div>\n          <div class=\"alert alert-danger alert-bordered\" *ngIf=\"!closeTradeForm.controls['close_price'].valid && closeTradeForm.controls['close_price'].touched\">\n            Close price is required and should be a number\n          </div>\n          <div class=\"alert alert-danger alert-bordered\" *ngIf=\"!closeTradeForm.controls['currency'].valid && closeTradeForm.controls['currency'].touched\">\n            Choose a currency\n          </div>\n        </div>  \n      </form>\n    </div>       \n  </div>\n</mat-dialog-content>\n<mat-dialog-actions class=\"text-center footer-dialog-button\">\n  <button mat-dialog-close class=\"btn btn-secondary btn-air\">Close</button>\n  <button class=\"btn btn-success btn-air\" (click)=\"closeTrade(closeTradeForm.value)\" [disabled]=\"!closeTradeForm.valid\">Save Changes</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "../../../../../src/app/components/dialog-close-price/dialog-close-price.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-dialog-actions {\n  display: block; }\n  .mat-dialog-actions:last-child {\n    margin-bottom: 0; }\n  .mat-dialog-actions button {\n    margin: 0 10px; }\n    .mat-dialog-actions button.close-button {\n      padding: 0;\n      background: 0 0;\n      border: 0;\n      -webkit-appearance: none; }\n\n.mat-dialog-content {\n  max-height: 75vh; }\n\n.mat-form-field {\n  margin-left: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dialog-close-price/dialog-close-price.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogClosePriceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_index__ = __webpack_require__("../../../../../src/app/models/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DialogClosePriceComponent = (function () {
    function DialogClosePriceComponent(load, tradeService, dialogRef, fb) {
        this.load = load;
        this.tradeService = tradeService;
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.currencies = __WEBPACK_IMPORTED_MODULE_4__models_index__["a" /* CURRENCY */];
        this.closeTradeForm = fb.group({
            'close_price': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].pattern("[0-9]+")])],
            'currency': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            'status': 'Closed'
        });
    }
    DialogClosePriceComponent.prototype.ngOnInit = function () {
    };
    DialogClosePriceComponent.prototype.closeTrade = function (trade) {
        var _this = this;
        this.load.start();
        this.tradeService.updateTrade(this.trade.id, trade)
            .subscribe(function (trade) {
            _this.tradeService.getTrades();
            _this.dialogRef.close();
            _this.load.success('The close price was successfully added');
        }, function (error) {
            _this.load.end();
            _this.dialogRef.close();
        });
    };
    DialogClosePriceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dialog-close-price',
            template: __webpack_require__("../../../../../src/app/components/dialog-close-price/dialog-close-price.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dialog-close-price/dialog-close-price.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_index__["d" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_3__services_index__["j" /* TradeService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], DialogClosePriceComponent);
    return DialogClosePriceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dialog-new-portfolio/dialog-new-portfolio.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-dialog-actions  class=\"text-right\">\n  <button mat-dialog-close class=\"btn close-button\"><i class=\"la la-close la-lg\" aria-hidden=\"true\"></i></button>\n</mat-dialog-actions>\n<mat-dialog-content>\n  <div class=\"ibox\">\n    <div class=\"ibox-head\">\n        <div class=\"ibox-title\">Create New Portfolio</div>\n    </div> \n    <div class=\"ibox-body\">\n      <h6 class=\"font-strong mb-4\">Please enter the details below:</h6>\n      <form [formGroup]=\"createPortfolioForm\" (ngSubmit)=\"createNewPortfolio(createPortfolioForm.value)\" novalidate>\n        <div class=\"form-group mb-4\">\n          <label>Portfolio Name</label>\n          <input type=\"text\" formControlName=\"name\" class=\"form-control form-control-solid\" placeholder=\"Enter the name\">\n          <div class=\"alert alert-danger alert-bordered\" *ngIf=\"!createPortfolioForm.controls['name'].valid && createPortfolioForm.controls['name'].touched\">\n            The name is required and should contain at least five characters\n          </div>\n        </div>   \n        <div class=\"form-group mb-4\">\n          <label>Account Balance</label>\n          <div class=\"input-group\">\n            <input type=\"text\" formControlName=\"account_balance\" class=\"form-control form-control-solid\" placeholder=\"Enter an account balance\">\n            <div class=\"input-group-btn\">\n              <select formControlName=\"currency\" class=\"form-control form-control-solid\">\n                <option [value]=\"undefined\" disabled selected></option>\n                <option *ngFor=\"let item of currencies\" [value]=\"item\">{{item}}</option>\n              </select>    \n            </div>\n          </div>\n          <div class=\"alert alert-danger alert-bordered\" *ngIf=\"!createPortfolioForm.controls['account_balance'].valid && createPortfolioForm.controls['account_balance'].touched\">\n            An account balance is required and should be a number\n          </div>\n          <div class=\"alert alert-danger alert-bordered\" *ngIf=\"!createPortfolioForm.controls['currency'].valid && createPortfolioForm.controls['currency'].touched\">\n            Choose a currency\n          </div>\n        </div>  \n      </form>\n    </div>       \n  </div>\n</mat-dialog-content>\n<mat-dialog-actions class=\"text-center footer-dialog-button\">\n  <button mat-dialog-close class=\"btn btn-secondary btn-air\">Close</button>\n  <button class=\"btn btn-success btn-air\" (click)=\"createNewPortfolio(createPortfolioForm.value)\" [disabled]=\"!createPortfolioForm.valid\">Save Changes</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "../../../../../src/app/components/dialog-new-portfolio/dialog-new-portfolio.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-dialog-actions {\n  display: block; }\n  .mat-dialog-actions:last-child {\n    margin-bottom: 0; }\n  .mat-dialog-actions button {\n    margin: 0 10px; }\n    .mat-dialog-actions button.close-button {\n      padding: 0;\n      background: 0 0;\n      border: 0;\n      -webkit-appearance: none; }\n\n.mat-dialog-content {\n  max-height: 75vh; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dialog-new-portfolio/dialog-new-portfolio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogNewPortfolioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_index__ = __webpack_require__("../../../../../src/app/models/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DialogNewPortfolioComponent = (function () {
    function DialogNewPortfolioComponent(load, dialogRef, portfolioService, router, fb) {
        this.load = load;
        this.dialogRef = dialogRef;
        this.portfolioService = portfolioService;
        this.router = router;
        this.fb = fb;
        this.currencies = __WEBPACK_IMPORTED_MODULE_5__models_index__["a" /* CURRENCY */];
        this.createPortfolioForm = fb.group({
            'name': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].minLength(5)])],
            'account_balance': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].pattern("[0-9]+")])],
            'currency': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]
        });
    }
    DialogNewPortfolioComponent.prototype.ngOnInit = function () {
    };
    DialogNewPortfolioComponent.prototype.createNewPortfolio = function (portfolio) {
        var _this = this;
        this.load.start();
        var self = this;
        this.portfolioService.createPortfolio(portfolio)
            .subscribe(function (portfolio) {
            _this.dialogRef.close();
            _this.load.success('The portfolio was successfully created');
            _this.router.navigate(['/portfolio']);
        }, function (error) {
            _this.load.start();
            _this.dialogRef.close();
        });
    };
    DialogNewPortfolioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dialog-new-portfolio',
            template: __webpack_require__("../../../../../src/app/components/dialog-new-portfolio/dialog-new-portfolio.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dialog-new-portfolio/dialog-new-portfolio.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_index__["d" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_4__services_index__["f" /* PortfolioService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], DialogNewPortfolioComponent);
    return DialogNewPortfolioComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dialog-new-spread-trade/dialog-new-spread-trade.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-dialog-actions  class=\"text-right\">\n    <button mat-dialog-close class=\"btn close-button\"><i class=\"la la-close la-lg\" aria-hidden=\"true\"></i></button>\n  </mat-dialog-actions>\n  <mat-dialog-content>\n    <div class=\"ibox\">\n      <div class=\"ibox-head\">\n          <div class=\"ibox-title\">Create New Spread Trade</div>\n      </div> \n      <div class=\"ibox-body\">\n        <h6 class=\"font-strong mb-4\">Please enter the details below:</h6>\n        <form [formGroup]=\"createSpreadTradeForm\" (ngSubmit)=\"createNewSpreadTrade(createSpreadTradeForm.value)\" novalidate>\n          <div class=\"form-group mb-4\">\n            <label>Longs</label>\n            <mat-form-field class=\"example-full-width\">\n              <input type=\"text\" aria-label=\"Number\" matInput formControlName=\"longs\" [matAutocomplete]=\"longsAuto\">\n              <mat-autocomplete #longsAuto=\"matAutocomplete\">\n                <mat-option *ngFor=\"let stock of filteredLongs | async\" [value]=\"stock.symbol\">\n                    {{stock.symbol}} &ndash; {{stock.name}}\n                </mat-option>\n              </mat-autocomplete>\n            </mat-form-field>           \n            <div class=\"alert alert-danger alert-bordered\" *ngIf=\"!createSpreadTradeForm.controls['longs'].valid && createSpreadTradeForm.controls['longs'].touched\">\n              Choose the stock\n            </div>\n          </div>   \n          <div class=\"form-group mb-4\">\n            <label>Shorts</label>\n            <mat-form-field class=\"example-full-width\">\n              <input type=\"text\" aria-label=\"Number\" matInput formControlName=\"shorts\" [matAutocomplete]=\"shortsAuto\">\n              <mat-autocomplete #shortsAuto=\"matAutocomplete\">\n                <mat-option *ngFor=\"let stock of filteredShorts | async\" [value]=\"stock.symbol\">\n                    {{stock.symbol}} &ndash; {{stock.name}}\n                </mat-option>\n              </mat-autocomplete>\n            </mat-form-field>           \n            <div class=\"alert alert-danger alert-bordered\" *ngIf=\"!createSpreadTradeForm.controls['shorts'].valid && createSpreadTradeForm.controls['shorts'].touched\">\n              Choose the stock\n            </div>\n          </div> \n          <div class=\"form-group mb-4\">\n            <label>Long entry</label>\n            <input type=\"text\" formControlName=\"long_entry\" class=\"form-control form-control-solid\">\n            <div class=\"alert alert-danger alert-bordered\" *ngIf=\"!createSpreadTradeForm.controls['long_entry'].valid && createSpreadTradeForm.controls['long_entry'].touched\">\n              Enter long entry\n            </div>\n          </div>  \n          <div class=\"form-group mb-4\">\n            <label>Short entry</label>\n            <input type=\"text\" formControlName=\"short_entry\" class=\"form-control form-control-solid\">\n            <div class=\"alert alert-danger alert-bordered\" *ngIf=\"!createSpreadTradeForm.controls['short_entry'].valid && createSpreadTradeForm.controls['short_entry'].touched\">\n              Enter short entry\n            </div>\n          </div>   \n        </form>\n      </div>       \n    </div>\n  </mat-dialog-content>\n  <mat-dialog-actions class=\"text-center footer-dialog-button\">\n    <button mat-dialog-close class=\"btn btn-secondary btn-air\">Close</button>\n    <button class=\"btn btn-success btn-air\" (click)=\"createNewSpreadTrade(createSpreadTradeForm.value)\" [disabled]=\"!createSpreadTradeForm.valid\">Save Changes</button>\n  </mat-dialog-actions>"

/***/ }),

/***/ "../../../../../src/app/components/dialog-new-spread-trade/dialog-new-spread-trade.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-dialog-actions {\n  display: block; }\n  .mat-dialog-actions:last-child {\n    margin-bottom: 0; }\n  .mat-dialog-actions button {\n    margin: 0 10px; }\n    .mat-dialog-actions button.close-button {\n      padding: 0;\n      background: 0 0;\n      border: 0;\n      -webkit-appearance: none; }\n\n.mat-dialog-content {\n  max-height: 75vh; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dialog-new-spread-trade/dialog-new-spread-trade.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogNewSpreadTradeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators_startWith__ = __webpack_require__("../../../../rxjs/_esm5/operators/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__ = __webpack_require__("../../../../rxjs/_esm5/operators/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DialogNewSpreadTradeComponent = (function () {
    function DialogNewSpreadTradeComponent(load, dialogRef, spreadTradeService, stockService, fb) {
        this.load = load;
        this.dialogRef = dialogRef;
        this.spreadTradeService = spreadTradeService;
        this.stockService = stockService;
        this.fb = fb;
        this.spreadTrades = [];
        this.stocks = [];
        this.createSpreadTradeForm = fb.group({
            'longs': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            'shorts': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            'long_entry': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            'short_entry': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]
        });
    }
    DialogNewSpreadTradeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getListOfStocks();
        this.filteredLongs = this.createSpreadTradeForm.controls.longs.valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_startWith__["a" /* startWith */])(''), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__["a" /* map */])(function (value) { return _this.filterStocks(value); }));
        this.filteredShorts = this.createSpreadTradeForm.controls.shorts.valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators_startWith__["a" /* startWith */])(''), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators_map__["a" /* map */])(function (value) { return _this.filterStocks(value); }));
    };
    DialogNewSpreadTradeComponent.prototype.getListOfStocks = function () {
        var _this = this;
        this.stockService.getStocks()
            .subscribe(function (stocks) { return _this.stocks = stocks; });
    };
    DialogNewSpreadTradeComponent.prototype.filterStocks = function (value) {
        return this.stocks.filter(function (stock) {
            return stock.name.toLowerCase().indexOf(value.toLowerCase()) === 0 || stock.symbol.toLowerCase().indexOf(value.toLowerCase()) === 0;
        })
            .slice(0, 30);
    };
    DialogNewSpreadTradeComponent.prototype.createNewSpreadTrade = function (spreadTrade) {
        var _this = this;
        this.load.start();
        spreadTrade.longs = this.stocks.find(function (stock) { return stock.symbol == spreadTrade.longs; }).id.toString();
        spreadTrade.shorts = this.stocks.find(function (stock) { return stock.symbol == spreadTrade.shorts; }).id.toString();
        this.spreadTradeService.createSpreadTrade(spreadTrade)
            .subscribe(function (spreadTrade) {
            _this.spreadTrades.push(spreadTrade);
            _this.spreadTradeService.getSpreadTrades();
            _this.dialogRef.close();
            _this.load.success('The spread trade was successfully created');
        }, function (error) {
            _this.load.end();
            _this.dialogRef.close();
        });
    };
    DialogNewSpreadTradeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dialog-new-spread-trade',
            template: __webpack_require__("../../../../../src/app/components/dialog-new-spread-trade/dialog-new-spread-trade.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dialog-new-spread-trade/dialog-new-spread-trade.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_index__["d" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_5__services_index__["h" /* SpreadTradeService */],
            __WEBPACK_IMPORTED_MODULE_5__services_index__["i" /* StockService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], DialogNewSpreadTradeComponent);
    return DialogNewSpreadTradeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dialog-new-trade/dialog-new-trade.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-dialog-actions  class=\"text-right\">\n    <button mat-dialog-close class=\"btn close-button\"><i class=\"la la-close la-lg\" aria-hidden=\"true\"></i></button>\n  </mat-dialog-actions>\n  <mat-dialog-content>\n    <div class=\"ibox\">\n      <div class=\"ibox-head\">\n          <div class=\"ibox-title\">Create New Trade</div>\n      </div> \n      <div class=\"ibox-body\">\n        <h6 class=\"font-strong mb-4\">Please enter the details below:</h6>\n        <form [formGroup]=\"createTradeForm\" (ngSubmit)=\"createNewTrade(createTradeForm.value)\" novalidate>\n          <div class=\"form-group mb-4\">\n            <label>Date</label>\n            <mat-form-field>\n              <input matInput [matDatepicker]=\"picker1\" formControlName=\"date\">\n              <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n              <mat-datepicker #picker1></mat-datepicker>\n            </mat-form-field>\n            <div class=\"alert alert-danger alert-bordered\" *ngIf=\"!createTradeForm.controls['date'].valid && createTradeForm.controls['date'].touched\">\n              Choose the date\n            </div>\n          </div>   \n          <div class=\"form-group mb-4\">\n            <label>Asset</label>\n            <select *ngIf=\"assets && assets.length>0\" formControlName=\"asset_name\" class=\"form-control form-control-solid\">\n                <option value=\"1\">1</option>\n                <option value=\"2\">2</option>\n                <option value=\"3\">3</option>\n            </select>\n            <div class=\"alert alert-danger alert-bordered\" *ngIf=\"(assets && assets.length>0) && !createTradeForm.controls['asset_name'].valid && createTradeForm.controls['asset_name'].touched\">\n              Choose an asset name\n            </div>\n            <input *ngIf=\"!assets.length\" type=\"text\" formControlName=\"asset_name\" class=\"form-control form-control-solid\">\n            <div class=\"alert alert-danger alert-bordered\" *ngIf=\"!assets.length && !createTradeForm.controls['asset_name'].valid && createTradeForm.controls['asset_name'].touched\">\n              Enter an asset name\n            </div>            \n          </div>  \n          <div class=\"form-group mb-4\">\n            <label>Direction</label>\n            <select formControlName=\"direction\" class=\"form-control form-control-solid\">\n              <option [value]=\"undefined\" disabled selected></option>\n              <option *ngFor=\"let item of directions\" [value]=\"item\">{{item}}</option>\n            </select>\n            <div class=\"alert alert-danger alert-bordered\" *ngIf=\"!createTradeForm.controls['direction'].valid && createTradeForm.controls['direction'].touched\">\n              Choose direction\n            </div>\n          </div>  \n          <div class=\"form-group mb-4\">\n            <label>Position size</label>\n            <input type=\"number\" formControlName=\"position_size\" class=\"form-control form-control-solid\">\n            <div class=\"alert alert-danger alert-bordered\" *ngIf=\"!createTradeForm.controls['position_size'].valid && createTradeForm.controls['position_size'].touched\">\n              Enter position size\n            </div>\n          </div>  \n          <div class=\"form-group mb-4\">\n            <label>Current price</label>\n            <input type=\"text\" formControlName=\"current_price\" class=\"form-control form-control-solid\">\n            <div class=\"alert alert-danger alert-bordered\" *ngIf=\"!createTradeForm.controls['current_price'].valid && createTradeForm.controls['current_price'].touched\">\n              Enter current price. It should be a number\n            </div>\n          </div> \n          <div class=\"form-group mb-4\">\n            <label>Open price</label>\n            <input type=\"text\" formControlName=\"open_price\" class=\"form-control form-control-solid\">\n            <div class=\"alert alert-danger alert-bordered\" *ngIf=\"!createTradeForm.controls['open_price'].valid && createTradeForm.controls['open_price'].touched\">\n              Enter open price. It should be a number\n            </div>\n          </div> \n          <div class=\"form-group mb-4\">\n            <label>Stop target</label>\n            <select formControlName=\"stop_target\" class=\"form-control form-control-solid\">\n              <option [value]=\"undefined\" disabled selected></option>\n              <option value=\"1\">1</option>\n            </select>\n          </div> \n          <div class=\"form-group mb-4\">\n            <label>Soft profit target</label>\n            <input type=\"text\" formControlName=\"soft_profit_target\" class=\"form-control form-control-solid\">\n          </div> \n          <div class=\"form-group mb-4\">\n            <label>Exposure</label>\n            <input type=\"text\" formControlName=\"exposure\" class=\"form-control form-control-solid\">\n          </div> \n          <div class=\"form-group mb-4\">\n            <label>Profit</label>\n            <input type=\"text\" formControlName=\"profit\" class=\"form-control form-control-solid\">\n          </div>  \n          <div class=\"form-group mb-4\">\n            <label>Status</label>\n            <select formControlName=\"status\" class=\"form-control form-control-solid\">\n              <option [value]=\"undefined\" disabled selected></option>\n              <option *ngFor=\"let item of status\" [value]=\"item\">{{item}}</option>\n            </select>\n            <div class=\"alert alert-danger alert-bordered\" *ngIf=\"!createTradeForm.controls['status'].valid && createTradeForm.controls['status'].touched\">\n              Choose status\n            </div>\n          </div> \n          <div class=\"form-group mb-4\">\n            <label>Trading</label>\n            <select formControlName=\"trading\" class=\"form-control form-control-solid\">\n              <option [value]=\"undefined\" disabled selected></option>\n              <option *ngFor=\"let item of tradings\" [value]=\"item\">{{item}}</option>\n            </select>\n            <div class=\"alert alert-danger alert-bordered\" *ngIf=\"!createTradeForm.controls['trading'].valid && createTradeForm.controls['trading'].touched\">\n              Choose trading\n            </div>\n          </div>  \n        </form>\n      </div>       \n    </div>\n  </mat-dialog-content>\n  <mat-dialog-actions class=\"text-center footer-dialog-button\">\n    <button mat-dialog-close class=\"btn btn-secondary btn-air\">Close</button>\n    <button class=\"btn btn-success btn-air\" (click)=\"createNewTrade(createTradeForm.value)\" [disabled]=\"!createTradeForm.valid\">Save changes</button>\n  </mat-dialog-actions>"

/***/ }),

/***/ "../../../../../src/app/components/dialog-new-trade/dialog-new-trade.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-dialog-actions {\n  display: block; }\n  .mat-dialog-actions:last-child {\n    margin-bottom: 0; }\n  .mat-dialog-actions button {\n    margin: 0 10px; }\n    .mat-dialog-actions button.close-button {\n      padding: 0;\n      background: 0 0;\n      border: 0;\n      -webkit-appearance: none; }\n\n.mat-dialog-content {\n  max-height: 75vh; }\n\n.mat-form-field {\n  margin-left: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dialog-new-trade/dialog-new-trade.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogNewTradeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_selects__ = __webpack_require__("../../../../../src/app/models/selects.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DialogNewTradeComponent = (function () {
    function DialogNewTradeComponent(load, assetService, dialogRef, tradeService, fb) {
        this.load = load;
        this.assetService = assetService;
        this.dialogRef = dialogRef;
        this.tradeService = tradeService;
        this.fb = fb;
        this.signals = __WEBPACK_IMPORTED_MODULE_4__models_selects__["c" /* SIGNAL */];
        this.directions = __WEBPACK_IMPORTED_MODULE_4__models_selects__["b" /* DIRECTION */];
        this.status = __WEBPACK_IMPORTED_MODULE_4__models_selects__["d" /* STATUS */];
        this.tradings = __WEBPACK_IMPORTED_MODULE_4__models_selects__["e" /* TRADING */];
        this.assets = [];
        this.trades = [];
        this.createTradeForm = fb.group({
            'date': [new Date(), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            'asset_name': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            'direction': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            'position_size': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].pattern("[0-9]+")])],
            'current_price': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].pattern("[0-9]+")])],
            'open_price': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].pattern("[0-9]+")])],
            'stop_target': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            'soft_profit_target': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            'exposure': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            'profit': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            'status': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            'trading': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]
        });
    }
    DialogNewTradeComponent.prototype.ngOnInit = function () {
        // this.assetService.getAssets()
        // .subscribe(assets => {
        //   this.assets = assets;
        // })
    };
    DialogNewTradeComponent.prototype.createNewTrade = function (trade) {
        var _this = this;
        this.load.start();
        trade.date = moment(trade.date).format('YYYY-MM-DD');
        this.tradeService.createTrade(trade)
            .subscribe(function (trade) {
            _this.trades.push(trade);
            _this.tradeService.getTrades();
            _this.dialogRef.close();
            _this.load.success('The trade was successfully created');
        }, function (error) {
            _this.load.end();
            _this.dialogRef.close();
        });
    };
    DialogNewTradeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dialog-new-trade',
            template: __webpack_require__("../../../../../src/app/components/dialog-new-trade/dialog-new-trade.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dialog-new-trade/dialog-new-trade.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_index__["d" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_3__services_index__["a" /* AssetService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_3__services_index__["j" /* TradeService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], DialogNewTradeComponent);
    return DialogNewTradeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/forex-table/forex-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ibox-body\">\n  <div class=\"table-responsive row\">\n\n  </div>\n</div>\n  \n"

/***/ }),

/***/ "../../../../../src/app/components/forex-table/forex-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForexTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ForexTableComponent = (function () {
    function ForexTableComponent() {
    }
    ForexTableComponent.prototype.ngOnInit = function () {
    };
    ForexTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-forex-table',
            template: __webpack_require__("../../../../../src/app/components/forex-table/forex-table.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], ForexTableComponent);
    return ForexTableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dialog_close_price_dialog_close_price_component__ = __webpack_require__("../../../../../src/app/components/dialog-close-price/dialog-close-price.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__dialog_close_price_dialog_close_price_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dialog_new_portfolio_dialog_new_portfolio_component__ = __webpack_require__("../../../../../src/app/components/dialog-new-portfolio/dialog-new-portfolio.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__dialog_new_portfolio_dialog_new_portfolio_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialog_new_spread_trade_dialog_new_spread_trade_component__ = __webpack_require__("../../../../../src/app/components/dialog-new-spread-trade/dialog-new-spread-trade.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__dialog_new_spread_trade_dialog_new_spread_trade_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dialog_new_trade_dialog_new_trade_component__ = __webpack_require__("../../../../../src/app/components/dialog-new-trade/dialog-new-trade.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__dialog_new_trade_dialog_new_trade_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forex_table_forex_table_component__ = __webpack_require__("../../../../../src/app/components/forex-table/forex-table.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__forex_table_forex_table_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__open_trades_table_open_trades_table_component__ = __webpack_require__("../../../../../src/app/components/open-trades-table/open-trades-table.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__open_trades_table_open_trades_table_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__spread_trade_table_spread_trade_table_component__ = __webpack_require__("../../../../../src/app/components/spread-trade-table/spread-trade-table.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__spread_trade_table_spread_trade_table_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__trade_history_table_trade_history_table_component__ = __webpack_require__("../../../../../src/app/components/trade-history-table/trade-history-table.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_7__trade_history_table_trade_history_table_component__["a"]; });










/***/ }),

/***/ "../../../../../src/app/components/open-trades-table/open-trades-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ibox-body\">\n    <div class=\"table-responsive row\">\n        <table dataTable [tableData]=\"trades\" class=\"table table-bordered table-hover text-center\" id=\"openTradeTable\">\n            <thead class=\"thead-default thead-lg\">\n                <tr>\n                  <th>#</th>\n                  <th>Asset</th>\n                  <th>Symbol</th>\n                  <th>Signal</th>\n                  <th>Size</th>\n                  <th>Current Price</th>\n                  <th>Open Price</th>\n                  <th>Close Price</th>\n                  <th>Stoploss</th>\n                  <th>Take Profit</th>\n                  <th>Risk</th>\n                  <th>Profit</th>\n                  <th>Gain</th>\n                  <th>Analysis</th>\n                  <th>Action</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let trade of trades | tradeStatus: status; let i = index\">\n                  <td>{{i+1}}</td>\n                  <td>{{trade.asset_name}}</td>\n                  <td>{{trade.asset_symbol}}</td>\n                  <td>{{trade.signal}}</td>\n                  <td>{{trade.position_size}}</td>\n                  <td>{{trade.current_price | currency:'USD':'symbol-narrow'}}</td>\n                  <td>{{trade.open_price | currency:'USD':'symbol-narrow'}}</td>\n                  <td>{{trade.close_price | currency:'USD':'symbol-narrow'}}</td>\n                  <td>{{trade.stop_loss | currency:'USD':'symbol-narrow'}}</td>\n                  <td>{{trade.take_profit | currency:'USD':'symbol-narrow'}}</td>\n                  <td>{{trade.risk | currency:'USD':'symbol-narrow'}}</td>\n                  <td>{{trade.profit | currency:'USD':'symbol-narrow'}}</td>\n                  <td>{{trade.gain}}%</td>\n                  <td><a class=\"pdf-link\" href=\"#\">PDF</a></td>\n                  <td><button class=\"btn btn-secondary\" (click)=\"openCloseTradeDialog(trade)\">Close</button></td>\n                </tr>                                                         \n            </tbody>\n        </table>\n    </div>\n  </div>\n  \n"

/***/ }),

/***/ "../../../../../src/app/components/open-trades-table/open-trades-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "td button {\n  padding: 0 13px;\n  line-height: 21px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/open-trades-table/open-trades-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenTradesTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_dialog_close_price_dialog_close_price_component__ = __webpack_require__("../../../../../src/app/components/dialog-close-price/dialog-close-price.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OpenTradesTableComponent = (function () {
    function OpenTradesTableComponent(dialog) {
        this.dialog = dialog;
        this.trades = [];
        this.status = 'Open';
    }
    OpenTradesTableComponent.prototype.ngOnInit = function () {
    };
    OpenTradesTableComponent.prototype.openCloseTradeDialog = function (trade) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__components_dialog_close_price_dialog_close_price_component__["a" /* DialogClosePriceComponent */], {
            height: 'auto'
        });
        dialogRef.componentInstance.trade = trade;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], OpenTradesTableComponent.prototype, "trades", void 0);
    OpenTradesTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-open-trades-table',
            template: __webpack_require__("../../../../../src/app/components/open-trades-table/open-trades-table.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/open-trades-table/open-trades-table.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatDialog */]])
    ], OpenTradesTableComponent);
    return OpenTradesTableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/spread-trade-table/spread-trade-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ibox-body\">\n    <div class=\"table-responsive row\">\n        <table dataTable [tableData]=\"spreadTrades\" [scrollX]=\"true\" [responsive]=\"false\" class=\"table table-bordered table-hover text-center\" id=\"spreadTradeTable\">\n            <thead class=\"thead-default thead-lg\">\n                <tr>\n                  <th>#</th>\n                  <th>Longs</th>\n                  <th>Shorts</th>\n                  <th>Long&nbsp;Entry</th>\n                  <th>Short&nbsp;Entry</th>\n                  <th>Spread</th>\n                  <th>Current&nbsp;Price <br> Long</th>\n                  <th>Current&nbsp;Price <br> Short</th>\n                  <th>Current&nbsp;S</th>\n                  <th>Percentage</th>\n                  <th>Weeks</th>\n                  <th *ngFor=\"let column of getWeeksColumn(weeksNumber); let i = index\">\n                    Week&nbsp;{{i+1}}\n                  </th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let spreadTrade of spreadTrades; let i = index\">\n                  <td>{{i+1}}</td>\n                  <td>{{spreadTrade.longs}}</td>\n                  <td>{{spreadTrade.shorts}}</td>\n                  <td>{{spreadTrade.long_entry}}</td>\n                  <td>{{spreadTrade.short_entry}}</td>\n                  <td>{{spreadTrade.spread}}</td>\n                  <td>{{spreadTrade.long}}</td>\n                  <td>{{spreadTrade.short}}</td>\n                  <td>{{spreadTrade.current_spread}}</td>\n                  <td [ngClass]=\"getColorClass(spreadTrade.percentage)\">{{spreadTrade.percentage}}%</td>\n                  <td>{{spreadTrade.history.length}}</td>\n                  <td [ngClass]=\"getColorClass(getWeekPercentage(spreadTrade, j).end_week_percentage)\" \n                      *ngFor=\"let column of getWeeksColumn(weeksNumber); let j = index\">\n                      {{getWeekPercentage(spreadTrade, j).end_week_percentage}}%\n                  </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n  </div>\n  \n"

/***/ }),

/***/ "../../../../../src/app/components/spread-trade-table/spread-trade-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "td.positive {\n  font-weight: bold;\n  color: #18c5a9; }\n\ntd.negative {\n  font-weight: bold;\n  color: #ff4081; }\n\ntd.null {\n  font-weight: bold;\n  color: #5c6bc0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/spread-trade-table/spread-trade-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpreadTradeTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpreadTradeTableComponent = (function () {
    function SpreadTradeTableComponent() {
        this.spreadTrades = [];
    }
    SpreadTradeTableComponent.prototype.ngOnInit = function () { };
    SpreadTradeTableComponent.prototype.getWeeksColumn = function (num) {
        return new Array(num);
    };
    SpreadTradeTableComponent.prototype.getWeekPercentage = function (spreadTrade, index) {
        return spreadTrade.history[index] || { end_week_percentage: '0.00' };
    };
    SpreadTradeTableComponent.prototype.getColorClass = function (value) {
        if (value > 0) {
            return 'positive';
        }
        else if (value < 0) {
            return 'negative';
        }
        else {
            return 'null';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], SpreadTradeTableComponent.prototype, "spreadTrades", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], SpreadTradeTableComponent.prototype, "weeksNumber", void 0);
    SpreadTradeTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-spread-trade-table',
            template: __webpack_require__("../../../../../src/app/components/spread-trade-table/spread-trade-table.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/spread-trade-table/spread-trade-table.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SpreadTradeTableComponent);
    return SpreadTradeTableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/trade-history-table/trade-history-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ibox-body\">\n  <div class=\"table-responsive row\">\n      <table dataTable [tableData]=\"trades\" class=\"table table-bordered table-hover text-center\" id=\"tradeHistoryTable\">\n          <thead class=\"thead-default thead-lg\">\n              <tr>\n                <th>#</th>\n                <th>Asset</th>\n                <th>Symbol</th>\n                <th>Signal</th>\n                <th>Size</th>\n                <th>Current Price</th>\n                <th>Open Price</th>\n                <th>Close Price</th>\n                <th>Stoploss</th>\n                <th>Take Profit</th>\n                <th>Risk</th>\n                <th>Profit</th>\n                <th>Gain</th>\n                <th>Analysis</th>          \n              </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let trade of trades | tradeStatus: status; let i = index\">\n              <td>{{i+1}}</td>\n              <td>{{trade.asset_name}}</td>\n              <td>{{trade.asset_symbol}}</td>\n              <td>{{trade.signal}}</td>\n              <td>{{trade.position_size}}</td>\n              <td>{{trade.current_price | currency:'USD':'symbol-narrow'}}</td>\n              <td>{{trade.open_price | currency:'USD':'symbol-narrow'}}</td>\n              <td>{{trade.close_price | currency:'USD':'symbol-narrow'}}</td>\n              <td>{{trade.stop_loss | currency:'USD':'symbol-narrow'}}</td>\n              <td>{{trade.take_profit | currency:'USD':'symbol-narrow'}}</td>\n              <td>{{trade.risk | currency:'USD':'symbol-narrow'}}</td>\n              <td>{{trade.profit | currency:'USD':'symbol-narrow'}}</td>\n              <td>{{trade.gain}}%</td>\n              <td><a class=\"pdf-link\" href=\"#\">PDF</a></td>\n            </tr>                                                             \n        </tbody>\n      </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/trade-history-table/trade-history-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TradeHistoryTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TradeHistoryTableComponent = (function () {
    function TradeHistoryTableComponent() {
        this.trades = [];
        this.status = 'Closed';
    }
    TradeHistoryTableComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], TradeHistoryTableComponent.prototype, "trades", void 0);
    TradeHistoryTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-trade-history-table',
            template: __webpack_require__("../../../../../src/app/components/trade-history-table/trade-history-table.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], TradeHistoryTableComponent);
    return TradeHistoryTableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/declarations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppDeclarations; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_index__ = __webpack_require__("../../../../../src/app/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipes_index__ = __webpack_require__("../../../../../src/app/pipes/index.ts");


var AppDeclarations = [
    __WEBPACK_IMPORTED_MODULE_0__components_index__["e" /* ForexTableComponent */],
    __WEBPACK_IMPORTED_MODULE_0__components_index__["f" /* OpenTradesTableComponent */],
    __WEBPACK_IMPORTED_MODULE_0__components_index__["g" /* SpreadTradeTableComponent */],
    __WEBPACK_IMPORTED_MODULE_0__components_index__["h" /* TradeHistoryTableComponent */],
    __WEBPACK_IMPORTED_MODULE_1__pipes_index__["a" /* TradeStatusPipe */]
];


/***/ }),

/***/ "../../../../../src/app/directives/data-table.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTableDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataTableDirective = (function () {
    function DataTableDirective(el) {
        this.el = el;
        this.responsive = true;
        this.scrollX = false;
    }
    DataTableDirective.prototype.ngOnDestroy = function () {
        if (this.table) {
            this.table.destroy();
        }
    };
    DataTableDirective.prototype.ngOnChanges = function (changes) {
        if ($.fn.dataTable.isDataTable(this.el.nativeElement)) {
            var table = $(this.el.nativeElement).DataTable();
            if (table) {
                table.destroy();
            }
        }
        this.ngAfterViewInit();
    };
    DataTableDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            if (!$.fn.dataTable.isDataTable(_this.el.nativeElement)) {
                _this.table = $(_this.el.nativeElement).DataTable({
                    pageLength: 10,
                    fixedHeader: true,
                    responsive: _this.responsive,
                    scrollX: _this.scrollX,
                    "sDom": 'rtip',
                    columnDefs: [{
                            targets: 'no-sort',
                            orderable: false
                        }]
                });
            }
        }, 1000);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], DataTableDirective.prototype, "tableData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], DataTableDirective.prototype, "responsive", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], DataTableDirective.prototype, "scrollX", void 0);
    DataTableDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: "[dataTable]"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], DataTableDirective);
    return DataTableDirective;
}());



/***/ }),

/***/ "../../../../../src/app/directives/easypie.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EasypieDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EasypieDirective = (function () {
    function EasypieDirective(el) {
        this.el = el;
        setTimeout(function () {
            $('.easypie').each(function () {
                $(this).easyPieChart({
                    trackColor: $(this).attr('data-trackColor') || '#f2f2f2',
                    scaleColor: false,
                });
            });
        }, 0);
    }
    EasypieDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: "[easypie]"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], EasypieDirective);
    return EasypieDirective;
}());



/***/ }),

/***/ "../../../../../src/app/directives/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_table_directive__ = __webpack_require__("../../../../../src/app/directives/data-table.directive.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__data_table_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__morris_line_chart_directive__ = __webpack_require__("../../../../../src/app/directives/morris-line-chart.directive.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__morris_line_chart_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__easypie_directive__ = __webpack_require__("../../../../../src/app/directives/easypie.directive.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__easypie_directive__["a"]; });





/***/ }),

/***/ "../../../../../src/app/directives/morris-line-chart.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MorrisLineChartDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MorrisLineChartDirective = (function () {
    function MorrisLineChartDirective(el) {
        this.el = el;
        this.morrisData = [];
        setTimeout(function () {
            Morris.Line({
                element: el.nativeElement,
                // data: this.morrisData,
                data: [
                    { month: '2017-01', value: 25 },
                    { month: '2017-02', value: 40 },
                    { month: '2017-03', value: 30 },
                    { month: '2017-04', value: 55 },
                    { month: '2017-05', value: 100 },
                    { month: '2017-06', value: 120 },
                    { month: '2017-07', value: 70 },
                    { month: '2017-08', value: 90 },
                    { month: '2017-09', value: 145 },
                    { month: '2017-10', value: 150 },
                    { month: '2017-11', value: 130 },
                    { month: '2017-12', value: 80 },
                    { month: '2018-01', value: 65 },
                    { month: '2018-02', value: 100 },
                    { month: '2018-03', value: 110 },
                    { month: '2018-04', value: 100 },
                    { month: '2018-05', value: 140 }
                ],
                xkey: 'month',
                xLabelFormat: function (date) {
                    return moment(date).format('MMM YYYY');
                },
                xLabelAngle: 45,
                ykeys: ['value'],
                yLabelFormat: function (value) {
                    return value + '%';
                },
                resize: true,
                lineWidth: 4,
                labels: ['Value'],
                lineColors: ['#18C5A9'],
                pointSize: 5
            });
        }, 0);
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MorrisLineChartDirective.prototype, "morrisData", void 0);
    MorrisLineChartDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: "[morrisLineChart]"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], MorrisLineChartDirective);
    return MorrisLineChartDirective;
}());



/***/ }),

/***/ "../../../../../src/app/helpers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Helpers; });
var Helpers = (function () {
    function Helpers() {
    }
    Helpers.setLoading = function (loading) {
        var body = $('body');
        if (loading) {
            $('.preloader-backdrop').fadeIn(200);
        }
        else {
            $('.preloader-backdrop').fadeOut(200);
        }
    };
    Helpers.bodyClass = function (Class) {
        $('body').attr('class', Class);
    };
    Helpers.initLayout = function () {
        // SIDEBAR ACTIVATE METISMENU
        $(".metismenu").metisMenu();
        // SIDEBAR TOGGLE ACTION
        $('.js-sidebar-toggler').click(function () {
            if ($('body').hasClass('drawer-sidebar')) {
                $('#sidebar').backdrop();
            }
            else {
                $('body').toggleClass('sidebar-mini');
                if (!$('body').hasClass('sidebar-mini')) {
                    $('#sidebar-collapse').hide();
                    setTimeout(function () {
                        $('#sidebar-collapse').fadeIn(300);
                    }, 200);
                }
            }
        });
        // QUICK SIDEBAR TOGGLE ACTION
        $('.quick-sidebar-toggler').click(function () {
            $('.quick-sidebar').backdrop();
        });
        // SEARCH BAR ACTION
        $('.js-search-toggler').click(function () {
            $('.search-top-bar').backdrop().find('.search-input').focus();
        });
        // Session timeout
        var idle_timer;
        (function () {
            $('#timeout-activate').click(function () {
                if (+$('#timeout-count').val()) {
                    activate(+$('#timeout-count').val());
                }
            });
            $('#timeout-reset').click(function () {
                reset();
            });
            function reset() {
                $(document).idleTimer("destroy");
                if (idle_timer)
                    clearTimeout(idle_timer);
                $('#session-dialog').modal('hide');
                $('.timeout-toggler').removeClass('active');
                $('#timeout-reset-box').hide();
                $('#timeout-activate-box').show();
            }
            function activate(count) {
                $('#session-dialog').modal('hide');
                $('#timeout-reset-box').show();
                $('#timeout-activate-box').hide();
                $(document).idleTimer(count * 60000);
                setTimeout(function () {
                    $('.timeout-toggler').addClass('active');
                }, (count - 1) * 60000);
                $(document).on("idle.idleTimer", function (event, elem, obj) {
                    // function you want to fire when the user goes idle
                    toastr.warning('Your session is about to expire. The page will redirect after 15 seconds with no activity.', 'Session Timeout Notification', {
                        "progressBar": true,
                        "timeOut": 5000,
                    });
                    idle_timer = setTimeout(timeOutHandler, 5000);
                });
                $(document).on("active.idleTimer", function (event, elem, obj, triggerevent) {
                    // function you want to fire when the user becomes active again
                    clearTimeout(idle_timer);
                    $(document).idleTimer("reset");
                    toastr.clear();
                    toastr.success('You returned to the active mode.', 'You are back.');
                });
                function timeOutHandler() {
                    reset();
                    alert('Your session has expired. You can redirect this page or logout.');
                }
            }
        })();
    };
    Helpers.initPage = function () {
        // Activate bootstrap select
        if ($(".selectpicker").length > 0) {
            $('.selectpicker').selectpicker();
        }
        // Activate Tooltips
        $('[data-toggle="tooltip"]').tooltip();
        // Activate Popovers
        $('[data-toggle="popover"]').popover();
        // Activate slimscroll
        $('.scroller').each(function () {
            $(this).slimScroll({
                height: $(this).attr('data-height') || '100%',
                color: $(this).attr('data-color') || '#71808f',
                railOpacity: '0.9',
                size: '4px',
            });
        });
        $('.slimScrollBar').hide();
        // Pre Copy to clipboard
        if ($(".clipboard-copy").length > 0) {
            new Clipboard('.clipboard-copy', {
                target: function (t) {
                    return t.nextElementSibling;
                }
            }).on('success', function (e) {
                e.clearSelection();
                e.trigger.textContent = 'Copied';
                window.setTimeout(function () {
                    e.trigger.textContent = 'Copy';
                }, 2000);
            });
        }
        // PANEL ACTIONS
        // ======================
        $('.ibox-collapse').click(function () {
            var ibox = $(this).closest('div.ibox');
            ibox.toggleClass('collapsed-mode').children('.ibox-body').slideToggle(200);
        });
        $('.ibox-remove').click(function () {
            $(this).closest('div.ibox').remove();
        });
        $('.fullscreen-link').click(function () {
            if ($('body').hasClass('fullscreen-mode')) {
                $('body').removeClass('fullscreen-mode');
                $(this).closest('div.ibox').removeClass('ibox-fullscreen');
                $(window).off('keydown', toggleFullscreen);
            }
            else {
                $('body').addClass('fullscreen-mode');
                $(this).closest('div.ibox').addClass('ibox-fullscreen');
                $(window).on('keydown', toggleFullscreen);
            }
        });
        function toggleFullscreen(e) {
            // pressing the ESC key - KEY_ESC = 27 
            if (e.which == 27) {
                $('body').removeClass('fullscreen-mode');
                $('.ibox-fullscreen').removeClass('ibox-fullscreen');
                $(window).off('keydown', toggleFullscreen);
            }
        }
    };
    return Helpers;
}());



/***/ }),

/***/ "../../../../../src/app/layouts/app-footer/app-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"font-13\">2018 © <b>Trading Idea Factory</b></div>"

/***/ }),

/***/ "../../../../../src/app/layouts/app-footer/app-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppFooter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppFooter = (function () {
    function AppFooter() {
    }
    AppFooter = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[app-footer]',
            template: __webpack_require__("../../../../../src/app/layouts/app-footer/app-footer.component.html")
        })
    ], AppFooter);
    return AppFooter;
}());



/***/ }),

/***/ "../../../../../src/app/layouts/app-header/app-header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-brand\">\r\n    <a routerLink=\"/portfolio\">\r\n        <span class=\"brand\">Trading Idea Factory</span>\r\n        <span class=\"brand-mini\">TIF</span>\r\n    </a>\r\n</div>\r\n<div class=\"flexbox flex-1\">\r\n    <!-- START TOP-LEFT TOOLBAR-->\r\n    <ul class=\"nav navbar-toolbar\">\r\n        <li>\r\n            <a class=\"nav-link sidebar-toggler js-sidebar-toggler\" href=\"javascript:;\">\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </a>\r\n        </li>\r\n        <li>\r\n            <a class=\"nav-link search-toggler js-search-toggler\"><i class=\"ti-search\"></i>\r\n                <span>Search here...</span>\r\n            </a>\r\n        </li>\r\n    </ul>\r\n    <!-- END TOP-LEFT TOOLBAR-->\r\n    <!-- START TOP-RIGHT TOOLBAR-->\r\n    <ul class=\"nav navbar-toolbar\">\r\n        <li class=\"timeout-toggler\">\r\n          <a class=\"nav-link toolbar-icon\" data-toggle=\"modal\" data-target=\"#session-dialog\" href=\"javascript:;\"><i class=\"ti-alarm-clock timeout-toggler-icon rel\"><span class=\"notify-signal\"></span></i></a>\r\n        </li>\r\n        <li class=\"dropdown dropdown-notification\">\r\n            <a class=\"nav-link dropdown-toggle toolbar-icon\" data-toggle=\"dropdown\" href=\"javascript:;\"><i class=\"ti-bell rel\"><span class=\"notify-signal\"></span></i></a>\r\n            <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-media\">\r\n                <div class=\"dropdown-arrow\"></div>\r\n                <div class=\"dropdown-header text-center\">\r\n                    <div>\r\n                        <span class=\"font-18\"><strong>14 New</strong> Notifications</span>\r\n                    </div>\r\n                    <a class=\"text-muted font-13\" href=\"javascript:;\">view all</a>\r\n                </div>\r\n                <div class=\"p-3\">\r\n                    <ul class=\"scroller\" data-height=\"320px\">\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </li>\r\n        <li *ngIf=\"profile.nickname\" class=\"dropdown dropdown-user\">\r\n            <a class=\"nav-link dropdown-toggle link\" data-toggle=\"dropdown\">\r\n                <span>{{profile.nickname}}</span>\r\n                <div class=\"user-image\" [ngStyle]=\"{'background-image': 'url(' + profile.picture + ')'}\"></div>\r\n            </a>\r\n            <div class=\"dropdown-menu dropdown-arrow dropdown-menu-right admin-dropdown-menu\">\r\n                <div class=\"dropdown-arrow\"></div>\r\n                <div class=\"dropdown-header\">\r\n                    <div class=\"admin-avatar\">\r\n                        <img [src]=\"profile.picture\" alt=\"image\" />\r\n                    </div>\r\n                    <div>\r\n                        <h5 class=\"font-strong text-white\">{{profile.nickname}}</h5>\r\n                        <div>\r\n                            <span class=\"admin-badge mr-3\"><i class=\"ti-alarm-clock mr-2\"></i>30m.</span>\r\n                            <span class=\"admin-badge\"><i class=\"ti-lock mr-2\"></i>Safe Mode</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"admin-menu-features\">\r\n                    <a class=\"admin-features-item\" href=\"javascript:;\"><i class=\"ti-user\"></i>\r\n                        <span>PROFILE</span>\r\n                    </a>\r\n                    <a class=\"admin-features-item\" href=\"javascript:;\"><i class=\"ti-support\"></i>\r\n                        <span>SUPPORT</span>\r\n                    </a>\r\n                    <a class=\"admin-features-item\" href=\"javascript:;\"><i class=\"ti-settings\"></i>\r\n                        <span>SETTINGS</span>\r\n                    </a>\r\n                </div>\r\n                <div class=\"admin-menu-content\">\r\n                    <div class=\"text-muted mb-2\">Your Wallet</div>\r\n                    <div><i class=\"ti-wallet h1 mr-3 text-light\"></i>\r\n                        <span class=\"h1 text-success\"><sup>$</sup>12.7k</span>\r\n                    </div>\r\n                    <div class=\"d-flex justify-content-between mt-2\">\r\n                        <a class=\"text-muted\" href=\"javascript:;\">Earnings history</a>\r\n                        <a class=\"d-flex align-items-center\" href=\"javascript:;\" (click)=\"logout()\">Logout<i class=\"ti-shift-right ml-2 font-20\"></i></a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </li>\r\n        <li>\r\n            <a class=\"nav-link quick-sidebar-toggler\">\r\n                <span class=\"ti-align-right\"></span>\r\n            </a>\r\n        </li>\r\n    </ul>\r\n    <!-- END TOP-RIGHT TOOLBAR-->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layouts/app-header/app-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppHeader = (function () {
    function AppHeader(auth) {
        this.auth = auth;
        this.profile = {};
    }
    AppHeader.prototype.ngAfterViewInit = function () { };
    AppHeader.prototype.logout = function () {
        this.auth.logout();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], AppHeader.prototype, "profile", void 0);
    AppHeader = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[app-header]',
            template: __webpack_require__("../../../../../src/app/layouts/app-header/app-header.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_index__["b" /* AuthService */]])
    ], AppHeader);
    return AppHeader;
}());



/***/ }),

/***/ "../../../../../src/app/layouts/app-sidebar/app-sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"sidebar-collapse\">\n  <ul class=\"side-menu metismenu\">\n    <li routerLinkActive=\"active\">\n      <a routerLink=\"/portfolio\"><i class=\"sidebar-item-icon fa fa-user\"></i><span class=\"nav-label\">My Portfolio</span></a>\n    </li>\n    <!-- <li routerLinkActive=\"active\"><a href=\"href=&quot;javascript:;&quot;\"><i class=\"sidebar-item-icon fa fa-user\"></i><span class=\"nav-label\">My portfolio</span><i class=\"fa fa-angle-left arrow\"></i></a>\n      <ul class=\"nav-2-level collapse\" routerLinkActive=\"in\">\n        <li><a mat-button class=\"button\" (click)=\"addNewPortfolio()\">New Portfolio</a></li>\n      </ul>    \n    </li> -->\n    <li routerLinkActive=\"active\">\n      <a routerLink=\"/watchlist\"><i class=\"sidebar-item-icon fa fa-eye\"></i><span class=\"nav-label\">Watchlist</span></a>\n    </li>\n    <li routerLinkActive=\"active\">\n      <a routerLink=\"/trading-journal\"><i class=\"sidebar-item-icon fa fa-star\"></i><span class=\"nav-label\">Trading Journal</span></a>\n    </li>\n    <li routerLinkActive=\"active\"><a href=\"href=&quot;javascript:;&quot;\"><i class=\"sidebar-item-icon fa fa-lightbulb-o\"></i><span class=\"nav-label\">Idea Generation</span><i class=\"fa fa-angle-left arrow\"></i></a>\n      <ul class=\"nav-2-level collapse\" routerLinkActive=\"in\">\n        <li routerLinkActive=\"active\"><a href=\"href=&quot;javascript:;&quot;\"><span class=\"nav-label\">World views</span><i class=\"fa fa-angle-left arrow\"></i></a>\n          <ul class=\"nav-3-level collapse\" routerLinkActive=\"in\">\n            <li><a routerLink=\"/idea-generation/world-views/gdp-prediction\" routerLinkActive=\"active\">GDP Prediction</a></li>\n            <li routerLinkActive=\"active\"><a href=\"href=&quot;javascript:;&quot;\"><span class=\"nav-label\">Leading Indicators</span><i class=\"fa fa-angle-left arrow\"></i></a>\n              <ul class=\"nav-4-level collapse\" routerLinkActive=\"in\">\n                <li routerLinkActive=\"active\"><a href=\"href=&quot;javascript:;&quot;\"><span class=\"nav-label\">Business</span><i class=\"fa fa-angle-left arrow\"></i></a>\n                  <ul class=\"nav-5-level collapse\" routerLinkActive=\"in\">\n                    <li><a routerLink=\"/idea-generation/world-views/manufactoring\" routerLinkActive=\"active\">Manufacturing</a></li>\n                    <li><a routerLink=\"/idea-generation/world-views/services\" routerLinkActive=\"active\">Services</a></li>\n                  </ul>                  \n                </li>\n                <li><a routerLink=\"/idea-generation/world-views/consumers\" routerLinkActive=\"active\">Consumers</a></li>\n                <li><a routerLink=\"/idea-generation/world-views/building-permits-housing\" routerLinkActive=\"active\">Building Permits/Housing</a></li>\n              </ul>              \n            </li>\n            <li routerLinkActive=\"active\"><a href=\"href=&quot;javascript:;&quot;\"><span class=\"nav-label\">Co-incident Indicators</span><i class=\"fa fa-angle-left arrow\"></i></a>\n              <ul class=\"nav-4-level collapse\" routerLinkActive=\"in\">\n                <li><a routerLink=\"/idea-generation/world-views/durable-goods\" routerLinkActive=\"active\">Durable Goods</a></li>\n                <li><a routerLink=\"/idea-generation/world-views/non-farm-payrolls\" routerLinkActive=\"active\">Non Farm Payrolls</a></li>\n                <li><a routerLink=\"/idea-generation/world-views/goods-produced\" routerLinkActive=\"active\">Goods Produced</a></li>\n                <li><a routerLink=\"/idea-generation/world-views/total-private\" routerLinkActive=\"active\">Total Private</a></li>\n                <li><a routerLink=\"/idea-generation/world-views/services-produced\" routerLinkActive=\"active\">Services Produced</a></li>\n                <li><a routerLink=\"/idea-generation/world-views/major-industry-groups\" routerLinkActive=\"active\">Major Industry Groups</a></li>\n                <li><a routerLink=\"/idea-generation/world-views/major-market-groups\" routerLinkActive=\"active\">Major Market Groups</a></li>\n                <li><a routerLink=\"/idea-generation/world-views/unemployment-claims\" routerLinkActive=\"active\">Unemployment Claims</a></li>\n              </ul>              \n            </li>\n          </ul>\n        </li>\n        <li routerLinkActive=\"active\"><a href=\"href=&quot;javascript:;&quot;\"><span class=\"nav-label\">Industry views</span><i class=\"fa fa-angle-left arrow\"></i></a>\n          <ul class=\"nav-3-level collapse\" routerLinkActive=\"in\">\n            <li><a routerLink=\"/idea-generation/industry-views/us-undustries\" routerLinkActive=\"active\">US Industries</a></li>\n            <li><a routerLink=\"/idea-generation/industry-views/eu-undustries\" routerLinkActive=\"active\">EU Industries</a></li>\n            <li><a routerLink=\"/idea-generation/industry-views/cn-undustries\" routerLinkActive=\"active\">CN Industries</a></li>\n          </ul>\n        <li routerLinkActive=\"active\"><a href=\"href=&quot;javascript:;&quot;\"><span class=\"nav-label\">Stock views</span><i class=\"fa fa-angle-left arrow\"></i></a>\n          <ul class=\"nav-3-level collapse\" routerLinkActive=\"in\">\n            <li><a routerLink=\"/idea-generation/stock-views/us-stocks\" routerLinkActive=\"active\">US Stocks</a></li>\n            <li><a routerLink=\"/idea-generation/stock-views/eu-stocks\" routerLinkActive=\"active\">EU Stocks</a></li>\n            <li><a routerLink=\"/idea-generation/stock-views/cn-stocks\" routerLinkActive=\"active\">CN Stocks</a></li>\n          </ul>\n        </li>\n        <li><a routerLink=\"/idea-generation/currency-views\" routerLinkActive=\"active\">Currency views</a>\n        </li>\n        <li><a routerLink=\"/idea-generation/commodities-views\" routerLinkActive=\"active\">Commodities views</a>\n        </li>\n        <li><a routerLink=\"/idea-generation/bond-views\" routerLinkActive=\"active\">Bond views</a>\n        </li>\n      </ul>\n    </li>\n    <li routerLinkActive=\"active\"><a href=\"href=&quot;javascript:;&quot;\"><i class=\"sidebar-item-icon fa fa-fire\"></i><span class=\"nav-label\">Risk Management</span><i class=\"fa fa-angle-left arrow\"></i></a>\n      <ul class=\"nav-2-level collapse\" routerLinkActive=\"in\">\n        <li><a routerLink=\"/risk-management/distribution-odds-calculation\" routerLinkActive=\"active\">Distribution &amp; Odds</a></li>\n        <li><a routerLink=\"/risk-management/implied-volatility-assessment\" routerLinkActive=\"active\">Implied Volatility</a></li>\n        <li><a routerLink=\"/risk-management/atr\" routerLinkActive=\"active\">ATR</a></li>\n      </ul>\n    </li>\n    <li routerLinkActive=\"active\"><a href=\"href=&quot;javascript:;&quot;\"><i class=\"sidebar-item-icon fa fa-shield\"></i><span class=\"nav-label\">Gate Keeping</span><i class=\"fa fa-angle-left arrow\"></i></a>\n      <ul class=\"nav-2-level collapse\" routerLinkActive=\"in\">\n        <li><a routerLink=\"/gate-keeping/technical-analysis\" routerLinkActive=\"active\">Technical Analysis</a></li>\n        <li><a routerLink=\"/gate-keeping/price-action\" routerLinkActive=\"active\">Price Action</a></li>\n      </ul>\n    </li>\n    <li routerLinkActive=\"active\">\n      <a routerLink=\"/manual-data\"><i class=\"sidebar-item-icon fa fa-database\"></i><span class=\"nav-label\">Manual Data</span></a>\n    </li>\n  </ul>\n  <!-- <div class=\"sidebar-footer\">\n    <a href=\"javascript:;\"><i class=\"ti-announcement\"></i></a>\n    <a routerLink=\"/calendar\"><i class=\"ti-calendar\"></i></a>\n    <a routerLink=\"/mailbox\"><i class=\"ti-comments\"></i></a>\n    <a href=\"login.html\"><i class=\"ti-power-off\"></i></a>\n  </div> -->\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/layouts/app-sidebar/app-sidebar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a.button {\n  color: #b4bcc8; }\n  a.button:hover {\n    color: #fff;\n    background-color: #425c78; }\n\n.overlay {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layouts/app-sidebar/app-sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSidebar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppSidebar = (function () {
    function AppSidebar() {
    }
    AppSidebar.prototype.ngOnInit = function () { };
    AppSidebar = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[app-sidebar]',
            template: __webpack_require__("../../../../../src/app/layouts/app-sidebar/app-sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layouts/app-sidebar/app-sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppSidebar);
    return AppSidebar;
}());



/***/ }),

/***/ "../../../../../src/app/layouts/layout.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- START HEADER-->\r\n<header class=\"header\" app-header [profile]='profile'></header>\r\n<!-- END HEADER-->\r\n<!-- START SIDEBAR-->\r\n<nav class=\"page-sidebar\" id=\"sidebar\" app-sidebar></nav>\r\n<!-- END SIDEBAR-->\r\n\r\n<!-- START PAGE CONTENT-->\r\n<div class=\"content-wrapper\">\r\n    <router-outlet></router-outlet>\r\n    <footer class=\"page-footer\" app-footer></footer>\r\n</div>\r\n<!-- END PAGE CONTENT-->\r\n"

/***/ }),

/***/ "../../../../../src/app/layouts/layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers__ = __webpack_require__("../../../../../src/app/helpers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LayoutComponent = (function () {
    function LayoutComponent(auth) {
        this.auth = auth;
        this.profile = {};
    }
    LayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.auth.userProfile) {
            this.profile = this.auth.userProfile;
        }
        else {
            this.auth.getProfile(function (err, profile) {
                _this.profile = profile;
            });
        }
    };
    LayoutComponent.prototype.ngAfterViewInit = function () {
        // initialize layout: handlers, menu ...
        __WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* Helpers */].initLayout();
    };
    LayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '.page-wrapper',
            template: __webpack_require__("../../../../../src/app/layouts/layout.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewEncapsulation */].None,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* AuthService */]])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layouts/layout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layout_component__ = __webpack_require__("../../../../../src/app/layouts/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_header_app_header_component__ = __webpack_require__("../../../../../src/app/layouts/app-header/app-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_sidebar_app_sidebar_component__ = __webpack_require__("../../../../../src/app/layouts/app-sidebar/app-sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_footer_app_footer_component__ = __webpack_require__("../../../../../src/app/layouts/app-footer/app-footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var LayoutModule = (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__layout_component__["a" /* LayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_4__app_header_app_header_component__["a" /* AppHeader */],
                __WEBPACK_IMPORTED_MODULE_5__app_sidebar_app_sidebar_component__["a" /* AppSidebar */],
                __WEBPACK_IMPORTED_MODULE_6__app_footer_app_footer_component__["a" /* AppFooter */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__layout_component__["a" /* LayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_4__app_header_app_header_component__["a" /* AppHeader */],
                __WEBPACK_IMPORTED_MODULE_5__app_sidebar_app_sidebar_component__["a" /* AppSidebar */],
                __WEBPACK_IMPORTED_MODULE_6__app_footer_app_footer_component__["a" /* AppFooter */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]
            ]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "../../../../../src/app/models/asset.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Asset */
var Asset = (function () {
    function Asset() {
    }
    return Asset;
}());



/***/ }),

/***/ "../../../../../src/app/models/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__asset__ = __webpack_require__("../../../../../src/app/models/asset.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__portfolio__ = __webpack_require__("../../../../../src/app/models/portfolio.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selects__ = __webpack_require__("../../../../../src/app/models/selects.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__selects__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__spread_trade__ = __webpack_require__("../../../../../src/app/models/spread-trade.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stock__ = __webpack_require__("../../../../../src/app/models/stock.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__trade__ = __webpack_require__("../../../../../src/app/models/trade.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__weeks_history__ = __webpack_require__("../../../../../src/app/models/weeks-history.ts");
/* unused harmony namespace reexport */









/***/ }),

/***/ "../../../../../src/app/models/portfolio.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Portfolio */
var Portfolio = (function () {
    function Portfolio() {
    }
    return Portfolio;
}());



/***/ }),

/***/ "../../../../../src/app/models/selects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CURRENCY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SIGNAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DIRECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return TRADING; });
var CURRENCY = [
    "USD",
    "EUR",
    "GBP"
];
var SIGNAL = [
    "BUY",
    "SHORT"
];
var DIRECTION = [
    "Long",
    "Short"
];
var STATUS = [
    "Open",
    "Closed"
];
var TRADING = [
    "Long-Term",
    "Short-Term"
];


/***/ }),

/***/ "../../../../../src/app/models/spread-trade.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SpreadTrade */
var SpreadTrade = (function () {
    function SpreadTrade() {
    }
    return SpreadTrade;
}());



/***/ }),

/***/ "../../../../../src/app/models/stock.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Stock */
var Stock = (function () {
    function Stock() {
    }
    return Stock;
}());



/***/ }),

/***/ "../../../../../src/app/models/trade.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Trade */
var Trade = (function () {
    function Trade() {
    }
    return Trade;
}());



/***/ }),

/***/ "../../../../../src/app/models/weeks-history.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export WeeksHistory */
var WeeksHistory = (function () {
    function WeeksHistory() {
    }
    return WeeksHistory;
}());



/***/ }),

/***/ "../../../../../src/app/pages/error-403/error-403.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"overlay\"></div>\n<div class=\"error-content flexbox\">\n    <span class=\"error-icon\"></span>\n    <div class=\"flex-1\">\n        <h1 class=\"error-code\">403</h1>\n        <h3 class=\"font-strong\">FORBIDDEN</h3>\n        <p class=\"mb-4\">You don't have permission to access.</p>\n        <div>\n            <a class=\"text-primary\" routerLink=\"/index\">Go Homepage</a>\n        </div>\n    </div>\n</div>\n\n<style>\n    .overlay {\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        background-color: #fff;\n        background-repeat: no-repeat;\n        background-image: url(./assets/img/icons/user-lock-2.svg);\n        background-position: 80% 10px;\n    }\n    .error-content {\n        position: relative;\n        max-width: 620px;\n        margin: 200px auto 0;\n    }\n\n    .error-icon {\n        height: 160px;\n        width: 160px;\n        background-image: url(./assets/img/icons/user-lock.svg);\n        background-size: cover;\n        background-repeat: no-repeat;\n        margin-right: 80px;\n    }\n\n    .error-code {\n        font-size: 120px;\n        color: #5c6bc0;\n    }\n    body.empty-layout .theme-config, body.empty-layout .to-top{\n        display: none !important;\n    }\n</style>\n"

/***/ }),

/***/ "../../../../../src/app/pages/error-403/error-403.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Error403Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Error403Component = (function () {
    function Error403Component() {
    }
    Error403Component.prototype.ngOnInit = function () {
        $('body').addClass('empty-layout');
    };
    Error403Component.prototype.ngAfterViewInit = function () { };
    Error403Component.prototype.ngOnDestroy = function () {
        $('body').removeClass('empty-layout');
    };
    Error403Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-error-403',
            template: __webpack_require__("../../../../../src/app/pages/error-403/error-403.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], Error403Component);
    return Error403Component;
}());



/***/ }),

/***/ "../../../../../src/app/pages/error-404-2/error-404-2.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"overlay\"></div>\n<div class=\"error-content\">\n    <h1 class=\"error-code\">404</h1>\n    <h3 class=\"font-strong\">NOT FOUND</h3>\n    <p class=\"mb-4\">Sorry, the page you were looking for could not found.</p>\n    <div>\n        <a class=\"btn btn-primary btn-rounded btn-fix btn-air\" routerLink=\"/index\">HOME</a>\n    </div>\n</div>\n\n<style>\n    .overlay {\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        background-color: #fff;\n        background-repeat: no-repeat;\n        background-image: url(./assets/img/icons/search-document-2.svg);\n        background-position: 85% 10px;\n    }\n    .error-content {\n        position: relative;\n        max-width: 400px;\n        margin-top: 100px;\n        margin-left: 80px;\n    }\n\n    .error-code {\n        font-size: 120px;\n        color: #5c6bc0;\n    }\n    body.empty-layout .theme-config, body.empty-layout .to-top{\n        display: none !important;\n    }\n</style>\n"

/***/ }),

/***/ "../../../../../src/app/pages/error-404-2/error-404-2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Error4042Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Error4042Component = (function () {
    function Error4042Component() {
    }
    Error4042Component.prototype.ngOnInit = function () {
        $('body').addClass('empty-layout');
    };
    Error4042Component.prototype.ngAfterViewInit = function () { };
    Error4042Component.prototype.ngOnDestroy = function () {
        $('body').removeClass('empty-layout');
    };
    Error4042Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-error-404-2',
            template: __webpack_require__("../../../../../src/app/pages/error-404-2/error-404-2.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], Error4042Component);
    return Error4042Component;
}());



/***/ }),

/***/ "../../../../../src/app/pages/error-404/error-404.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"overlay\"></div>\n<div class=\"error-content\">\n    <div class=\"flexbox\">\n        <span class=\"error-icon\"></span>\n        <div class=\"flex-1\">\n            <h1 class=\"error-code\">404</h1>\n            <h3 class=\"font-strong\">NOT FOUND</h3>\n            <p>Sorry, the page you were looking for could not found.</p>\n        </div>\n    </div>\n    <div class=\"text-center mb-3 mt-5\">\n        <a class=\"text-primary\" routerLink=\"/index\">Go Homepage</a> or search</div>\n    <form class=\"input-group-icon input-group-icon-left mb-4\" action=\"javascript:;\" method=\"POST\">\n        <span class=\"input-icon font-16\"><i class=\"ti-search\"></i></span>\n        <input class=\"form-control form-control-rounded form-control-solid\" id=\"key-search\" type=\"text\" placeholder=\"Search ...\">\n    </form>\n</div>\n\n<style>\n    .overlay {\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        background-color: #fff;\n        background-repeat: no-repeat;\n        background-image: url(./assets/img/icons/search-document-3.svg);\n        background-position: 80% 0;\n    }\n    .error-content {\n        position: relative;\n        max-width: 620px;\n        margin: 200px auto 0;\n    }\n\n    .error-icon {\n        height: 160px;\n        width: 160px;\n        background-image: url(./assets/img/icons/search-document.svg);\n        background-size: cover;\n        background-repeat: no-repeat;\n        margin-right: 80px;\n    }\n\n    .error-code {\n        font-size: 120px;\n        color: #5c6bc0;\n    }\n    body.empty-layout .theme-config, body.empty-layout .to-top{\n        display: none !important;\n    }\n</style>\n"

/***/ }),

/***/ "../../../../../src/app/pages/error-404/error-404.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Error404Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Error404Component = (function () {
    function Error404Component() {
    }
    Error404Component.prototype.ngOnInit = function () {
        $('body').addClass('empty-layout');
    };
    Error404Component.prototype.ngAfterViewInit = function () { };
    Error404Component.prototype.ngOnDestroy = function () {
        $('body').removeClass('empty-layout');
    };
    Error404Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-error-404',
            template: __webpack_require__("../../../../../src/app/pages/error-404/error-404.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], Error404Component);
    return Error404Component;
}());



/***/ }),

/***/ "../../../../../src/app/pages/error-500/error-500.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"overlay\"></div>\n<div class=\"error-content flexbox\">\n    <span class=\"error-icon\"></span>\n    <div class=\"flex-1\">\n        <h1 class=\"error-code\">500</h1>\n        <h3 class=\"font-strong\">Internal Server Error</h3>\n        <p class=\"mb-4\">There is a problem with server.</p>\n        <div>\n            <a class=\"text-primary\" routerLink=\"/index\">Go Homepage</a>\n        </div>\n    </div>\n</div>\n\n<style>\n    .overlay {\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        background-color: #fff;\n        background-repeat: no-repeat;\n        background-image: url(./assets/img/icons/server-error-2.svg);\n        background-position: 80% 10px;\n    }\n    .error-content {\n        position: relative;\n        max-width: 620px;\n        margin: 200px auto 0;\n    }\n\n    .error-icon {\n        height: 160px;\n        width: 160px;\n        background-image: url(./assets/img/icons/server-error.svg);\n        background-size: cover;\n        background-repeat: no-repeat;\n        margin-right: 80px;\n    }\n\n    .error-code {\n        font-size: 120px;\n        color: #5c6bc0;\n    }\n    body.empty-layout .theme-config, body.empty-layout .to-top{\n        display: none !important;\n    }\n</style>\n"

/***/ }),

/***/ "../../../../../src/app/pages/error-500/error-500.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Error500Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Error500Component = (function () {
    function Error500Component() {
    }
    Error500Component.prototype.ngOnInit = function () {
        $('body').addClass('empty-layout');
    };
    Error500Component.prototype.ngAfterViewInit = function () { };
    Error500Component.prototype.ngOnDestroy = function () {
        $('body').removeClass('empty-layout');
    };
    Error500Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-error-500',
            template: __webpack_require__("../../../../../src/app/pages/error-500/error-500.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], Error500Component);
    return Error500Component;
}());



/***/ }),

/***/ "../../../../../src/app/pages/forgot-password/forgot-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"overlay\"></div>\n<div class=\"cover\"></div>\n<div class=\"ibox login-content\">\n    <div class=\"text-center\">\n        <span class=\"auth-head-icon\"><i class=\"la la-key\"></i></span>\n    </div>\n    <form class=\"ibox-body pt-0\" id=\"forgot-form\" action=\"javascript:;\" method=\"POST\">\n        <h4 class=\"font-strong text-center mb-4\">FORGOT PASSWORD</h4>\n        <p class=\"mb-4\">Enter your email address below and we'll send you password reset instructions.</p>\n        <div class=\"form-group mb-5\">\n            <input class=\"form-control form-control-line\" type=\"text\" name=\"email\" placeholder=\"Email\">\n        </div>\n        <div class=\"text-center\">\n            <button class=\"btn btn-primary btn-block btn-air\">SUBMIT</button>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/forgot-password/forgot-password.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".overlay {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-image: url(\"/assets/img/bg/login_bg.jpeg\"); }\n\n.cover {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(117, 54, 230, 0.1); }\n\n.login-content {\n  max-width: 400px;\n  margin: 100px auto 50px; }\n\n.auth-head-icon {\n  position: relative;\n  height: 60px;\n  width: 60px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  font-size: 30px;\n  background-color: #fff;\n  color: #5c6bc0;\n  box-shadow: 0 5px 20px #d6dee4;\n  border-radius: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  z-index: 2; }\n\nbody.empty-layout .theme-config, body.empty-layout .to-top {\n  display: none !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/forgot-password/forgot-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ForgotPasswordComponent = (function () {
    function ForgotPasswordComponent() {
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        $('body').addClass('empty-layout');
    };
    ForgotPasswordComponent.prototype.ngAfterViewInit = function () {
        $('#forgot-form').validate({
            errorClass: "help-block",
            rules: {
                email: {
                    required: true,
                    email: true
                },
            },
            highlight: function (e) {
                $(e).closest(".form-group").addClass("has-error");
            },
            unhighlight: function (e) {
                $(e).closest(".form-group").removeClass("has-error");
            },
        });
    };
    ForgotPasswordComponent.prototype.ngOnDestroy = function () {
        $('body').removeClass('empty-layout');
    };
    ForgotPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-forgot-password',
            template: __webpack_require__("../../../../../src/app/pages/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/forgot-password/forgot-password.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/gate-keeping/price-action/price-action.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/pages/gate-keeping/price-action/price-action.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PriceActionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PriceActionComponent = (function () {
    function PriceActionComponent() {
    }
    PriceActionComponent.prototype.ngOnInit = function () {
    };
    PriceActionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-price-action',
            template: __webpack_require__("../../../../../src/app/pages/gate-keeping/price-action/price-action.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], PriceActionComponent);
    return PriceActionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/gate-keeping/technical-analysis/technical-analysis.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/pages/gate-keeping/technical-analysis/technical-analysis.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TechnicalAnalysisComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TechnicalAnalysisComponent = (function () {
    function TechnicalAnalysisComponent() {
    }
    TechnicalAnalysisComponent.prototype.ngOnInit = function () {
    };
    TechnicalAnalysisComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-technical-analysis',
            template: __webpack_require__("../../../../../src/app/pages/gate-keeping/technical-analysis/technical-analysis.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], TechnicalAnalysisComponent);
    return TechnicalAnalysisComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-content\">\n  <div class=\"ibox mt-5 ibox-home\">\n    <div class=\"ibox-body text-center\">\n      <h2 class=\"my-5\">\n        Looks like you don't have a portfolio yet. <br>\n        Please create a new portfolio by clicking the button below.\n      </h2>\n      <button class=\"btn btn-primary btn-labeled btn-labeled-left btn-icon btn-lg btn-air my-5\" (click)=\"openNewPortfolioDialog()\">\n        <span class=\"btn-label\"><i class=\"la la-plus-circle\"></i></span>\n        Create Portfolio\n      </button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ibox-home {\n  box-shadow: none;\n  background-color: #f2f3fa; }\n\nh2.my-5 {\n  line-height: 2.3; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_script_loader_service__ = __webpack_require__("../../../../../src/app/_services/script-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_index__ = __webpack_require__("../../../../../src/app/components/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = (function () {
    function HomeComponent(_script, auth, dialog) {
        this._script = _script;
        this.auth = auth;
        this.dialog = dialog;
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent.prototype.ngAfterViewInit = function () { };
    HomeComponent.prototype.isAuth = function () {
        return this.auth.isAuthenticated();
    };
    HomeComponent.prototype.openNewPortfolioDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__components_index__["b" /* DialogNewPortfolioComponent */], {
            height: 'auto'
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/pages/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_script_loader_service__["a" /* ScriptLoaderService */],
            __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatDialog */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/idea-generation/bond-views/bond-views.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/pages/idea-generation/bond-views/bond-views.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BondViewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BondViewsComponent = (function () {
    function BondViewsComponent() {
    }
    BondViewsComponent.prototype.ngOnInit = function () {
    };
    BondViewsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-bond-views',
            template: __webpack_require__("../../../../../src/app/pages/idea-generation/bond-views/bond-views.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], BondViewsComponent);
    return BondViewsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/idea-generation/commodities-views/commodities-views.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/pages/idea-generation/commodities-views/commodities-views.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommoditiesViewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommoditiesViewsComponent = (function () {
    function CommoditiesViewsComponent() {
    }
    CommoditiesViewsComponent.prototype.ngOnInit = function () {
    };
    CommoditiesViewsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-commodities-views',
            template: __webpack_require__("../../../../../src/app/pages/idea-generation/commodities-views/commodities-views.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], CommoditiesViewsComponent);
    return CommoditiesViewsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/idea-generation/currency-views/currency-views.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/pages/idea-generation/currency-views/currency-views.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyViewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CurrencyViewsComponent = (function () {
    function CurrencyViewsComponent() {
    }
    CurrencyViewsComponent.prototype.ngOnInit = function () {
    };
    CurrencyViewsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-currency-views',
            template: __webpack_require__("../../../../../src/app/pages/idea-generation/currency-views/currency-views.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], CurrencyViewsComponent);
    return CurrencyViewsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/idea-generation/industry-views/cn-industries/cn-industries.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/pages/idea-generation/industry-views/cn-industries/cn-industries.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CnIndustriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CnIndustriesComponent = (function () {
    function CnIndustriesComponent() {
    }
    CnIndustriesComponent.prototype.ngOnInit = function () {
    };
    CnIndustriesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cn-industries',
            template: __webpack_require__("../../../../../src/app/pages/idea-generation/industry-views/cn-industries/cn-industries.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], CnIndustriesComponent);
    return CnIndustriesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/idea-generation/industry-views/eu-industries/eu-industries.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/pages/idea-generation/industry-views/eu-industries/eu-industries.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EuIndustriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EuIndustriesComponent = (function () {
    function EuIndustriesComponent() {
    }
    EuIndustriesComponent.prototype.ngOnInit = function () {
    };
    EuIndustriesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-eu-industries',
            template: __webpack_require__("../../../../../src/app/pages/idea-generation/industry-views/eu-industries/eu-industries.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], EuIndustriesComponent);
    return EuIndustriesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/idea-generation/industry-views/us-industries/us-industries.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/pages/idea-generation/industry-views/us-industries/us-industries.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsIndustriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UsIndustriesComponent = (function () {
    function UsIndustriesComponent() {
    }
    UsIndustriesComponent.prototype.ngOnInit = function () {
    };
    UsIndustriesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-us-industries',
            template: __webpack_require__("../../../../../src/app/pages/idea-generation/industry-views/us-industries/us-industries.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], UsIndustriesComponent);
    return UsIndustriesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/idea-generation/stock-views/cn-stocks/cn-stocks.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/pages/idea-generation/stock-views/cn-stocks/cn-stocks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CnStocksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CnStocksComponent = (function () {
    function CnStocksComponent() {
    }
    CnStocksComponent.prototype.ngOnInit = function () {
    };
    CnStocksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cn-stocks',
            template: __webpack_require__("../../../../../src/app/pages/idea-generation/stock-views/cn-stocks/cn-stocks.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], CnStocksComponent);
    return CnStocksComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/idea-generation/stock-views/eu-stocks/eu-stocks.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/pages/idea-generation/stock-views/eu-stocks/eu-stocks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EuStocksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EuStocksComponent = (function () {
    function EuStocksComponent() {
    }
    EuStocksComponent.prototype.ngOnInit = function () {
    };
    EuStocksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-eu-stocks',
            template: __webpack_require__("../../../../../src/app/pages/idea-generation/stock-views/eu-stocks/eu-stocks.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], EuStocksComponent);
    return EuStocksComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/idea-generation/stock-views/us-stocks/us-stocks.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/pages/idea-generation/stock-views/us-stocks/us-stocks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsStocksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UsStocksComponent = (function () {
    function UsStocksComponent() {
    }
    UsStocksComponent.prototype.ngOnInit = function () {
    };
    UsStocksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-us-stocks',
            template: __webpack_require__("../../../../../src/app/pages/idea-generation/stock-views/us-stocks/us-stocks.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], UsStocksComponent);
    return UsStocksComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/idea-generation/world-views/building-permits-housing/building-permits-housing.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/pages/idea-generation/world-views/building-permits-housing/building-permits-housing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuildingPermitsHousingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BuildingPermitsHousingComponent = (function () {
    function BuildingPermitsHousingComponent() {
    }
    BuildingPermitsHousingComponent.prototype.ngOnInit = function () {
    };
    BuildingPermitsHousingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-building-permits-housing',
            template: __webpack_require__("../../../../../src/app/pages/idea-generation/world-views/building-permits-housing/building-permits-housing.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], BuildingPermitsHousingComponent);
    return BuildingPermitsHousingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/idea-generation/world-views/consumers/consumers.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/pages/idea-generation/world-views/consumers/consumers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsumersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConsumersComponent = (function () {
    function ConsumersComponent() {
    }
    ConsumersComponent.prototype.ngOnInit = function () {
    };
    ConsumersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-consumers',
            template: __webpack_require__("../../../../../src/app/pages/idea-generation/world-views/consumers/consumers.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ConsumersComponent);
    return ConsumersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/idea-generation/world-views/durable-goods/durable-goods.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/pages/idea-generation/world-views/durable-goods/durable-goods.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DurableGoodsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DurableGoodsComponent = (function () {
    function DurableGoodsComponent() {
    }
    DurableGoodsComponent.prototype.ngOnInit = function () {
    };
    DurableGoodsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-durable-goods',
            template: __webpack_require__("../../../../../src/app/pages/idea-generation/world-views/durable-goods/durable-goods.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], DurableGoodsComponent);
    return DurableGoodsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/idea-generation/world-views/gdp-prediction/gdp-prediction.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/pages/idea-generation/world-views/gdp-prediction/gdp-prediction.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GdpPredictionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GdpPredictionComponent = (function () {
    function GdpPredictionComponent() {
    }
    GdpPredictionComponent.prototype.ngOnInit = function () {
    };
    GdpPredictionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-gdp-prediction',
            template: __webpack_require__("../../../../../src/app/pages/idea-generation/world-views/gdp-prediction/gdp-prediction.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], GdpPredictionComponent);
    return GdpPredictionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/idea-generation/world-views/goods-produced/goods-produced.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/pages/idea-generation/world-views/goods-produced/goods-produced.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoodsProducedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GoodsProducedComponent = (function () {
    function GoodsProducedComponent() {
    }
    GoodsProducedComponent.prototype.ngOnInit = function () {
    };
    GoodsProducedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-goods-produced',
            template: __webpack_require__("../../../../../src/app/pages/idea-generation/world-views/goods-produced/goods-produced.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], GoodsProducedComponent);
    return GoodsProducedComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/idea-generation/world-views/major-industry-groups/major-industry-groups.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/pages/idea-generation/world-views/major-industry-groups/major-industry-groups.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MajorIndustryGroupsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MajorIndustryGroupsComponent = (function () {
    function MajorIndustryGroupsComponent() {
    }
    MajorIndustryGroupsComponent.prototype.ngOnInit = function () {
    };
    MajorIndustryGroupsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-major-industry-groups',
            template: __webpack_require__("../../../../../src/app/pages/idea-generation/world-views/major-industry-groups/major-industry-groups.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], MajorIndustryGroupsComponent);
    return MajorIndustryGroupsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/idea-generation/world-views/major-market-groups/major-market-groups.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/pages/idea-generation/world-views/major-market-groups/major-market-groups.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MajorMarketGroupsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MajorMarketGroupsComponent = (function () {
    function MajorMarketGroupsComponent() {
    }
    MajorMarketGroupsComponent.prototype.ngOnInit = function () {
    };
    MajorMarketGroupsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-major-market-groups',
            template: __webpack_require__("../../../../../src/app/pages/idea-generation/world-views/major-market-groups/major-market-groups.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], MajorMarketGroupsComponent);
    return MajorMarketGroupsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/idea-generation/world-views/manufactoring/manufactoring.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/pages/idea-generation/world-views/manufactoring/manufactoring.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManufactoringComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ManufactoringComponent = (function () {
    function ManufactoringComponent() {
    }
    ManufactoringComponent.prototype.ngOnInit = function () {
    };
    ManufactoringComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-manufactoring',
            template: __webpack_require__("../../../../../src/app/pages/idea-generation/world-views/manufactoring/manufactoring.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ManufactoringComponent);
    return ManufactoringComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/idea-generation/world-views/non-farm-payrolls/non-farm-payrolls.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/pages/idea-generation/world-views/non-farm-payrolls/non-farm-payrolls.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NonFarmPayrollsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NonFarmPayrollsComponent = (function () {
    function NonFarmPayrollsComponent() {
    }
    NonFarmPayrollsComponent.prototype.ngOnInit = function () {
    };
    NonFarmPayrollsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-non-farm-payrolls',
            template: __webpack_require__("../../../../../src/app/pages/idea-generation/world-views/non-farm-payrolls/non-farm-payrolls.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], NonFarmPayrollsComponent);
    return NonFarmPayrollsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/idea-generation/world-views/services-produced/services-produced.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/pages/idea-generation/world-views/services-produced/services-produced.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesProducedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicesProducedComponent = (function () {
    function ServicesProducedComponent() {
    }
    ServicesProducedComponent.prototype.ngOnInit = function () {
    };
    ServicesProducedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-services-produced',
            template: __webpack_require__("../../../../../src/app/pages/idea-generation/world-views/services-produced/services-produced.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ServicesProducedComponent);
    return ServicesProducedComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/idea-generation/world-views/services/services.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/pages/idea-generation/world-views/services/services.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicesComponent = (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-services',
            template: __webpack_require__("../../../../../src/app/pages/idea-generation/world-views/services/services.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/idea-generation/world-views/total-private/total-private.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/pages/idea-generation/world-views/total-private/total-private.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TotalPrivateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TotalPrivateComponent = (function () {
    function TotalPrivateComponent() {
    }
    TotalPrivateComponent.prototype.ngOnInit = function () {
    };
    TotalPrivateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-total-private',
            template: __webpack_require__("../../../../../src/app/pages/idea-generation/world-views/total-private/total-private.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], TotalPrivateComponent);
    return TotalPrivateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/idea-generation/world-views/unemployment-claims/unemployment-claims.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/pages/idea-generation/world-views/unemployment-claims/unemployment-claims.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnemploymentClaimsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UnemploymentClaimsComponent = (function () {
    function UnemploymentClaimsComponent() {
    }
    UnemploymentClaimsComponent.prototype.ngOnInit = function () {
    };
    UnemploymentClaimsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-unemployment-claims',
            template: __webpack_require__("../../../../../src/app/pages/idea-generation/world-views/unemployment-claims/unemployment-claims.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], UnemploymentClaimsComponent);
    return UnemploymentClaimsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/lockscreen/lockscreen.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"overlay\"></div>\n<div class=\"cover\"></div>\n<div class=\"ibox login-content\">\n    <div class=\"text-center\">\n        <span class=\"auth-head-icon\"><i class=\"ti-lock\"></i></span>\n    </div>\n    <form class=\"ibox-body pt-0\" id=\"lock-form\" action=\"javascript:;\" method=\"POST\">\n        <h4 class=\"font-strong text-center mb-4\">USER</h4>\n        <div class=\"row pt-3\">\n            <div class=\"col-4\">\n                <img class=\"img-circle\" src=\"./assets/img/users/admin-image.png\" alt=\"image\" width=\"110\" />\n            </div>\n            <div class=\"col-8\">\n                <p class=\"font-13\">Your are in lock screen. Enter your password to retrieve your session</p>\n                <div class=\"form-group mb-5\">\n                    <input class=\"form-control\" type=\"password\" name=\"password\" placeholder=\"******\">\n                </div>\n                <div class=\"form-group\">\n                    <button class=\"btn btn-primary btn-block\" type=\"submit\">\n                        <span class=\"btn-icon\"><i class=\"ti-lock\"></i>UNLOCK</span>\n                    </button>\n                </div>\n            </div>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/lockscreen/lockscreen.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".overlay {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-image: url(\"/assets/img/bg/login_bg.jpeg\"); }\n\n.cover {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(117, 54, 230, 0.1); }\n\n.login-content {\n  max-width: 450px;\n  margin: 100px auto 50px; }\n\n.auth-head-icon {\n  position: relative;\n  height: 60px;\n  width: 60px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  font-size: 26px;\n  background-color: #fff;\n  color: #5c6bc0;\n  box-shadow: 0 5px 20px #d6dee4;\n  border-radius: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  z-index: 2; }\n\nbody.empty-layout .theme-config, body.empty-layout .to-top {\n  display: none !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/lockscreen/lockscreen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LockscreenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LockscreenComponent = (function () {
    function LockscreenComponent() {
    }
    LockscreenComponent.prototype.ngOnInit = function () {
        $('body').addClass('empty-layout');
    };
    LockscreenComponent.prototype.ngAfterViewInit = function () {
        $('#lock-form').validate({
            errorClass: "help-block",
            rules: {
                password: {
                    required: true
                }
            },
            highlight: function (e) {
                $(e).closest(".form-group").addClass("has-error");
            },
            unhighlight: function (e) {
                $(e).closest(".form-group").removeClass("has-error");
            },
            errorPlacement: function (e, r) {
                var i = $(r).parents(".input-group, .check-list");
                i.length ? i.after(e) : r.after(e);
            },
        });
    };
    LockscreenComponent.prototype.ngOnDestroy = function () {
        $('body').removeClass('empty-layout');
    };
    LockscreenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-lockscreen',
            template: __webpack_require__("../../../../../src/app/pages/lockscreen/lockscreen.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/lockscreen/lockscreen.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LockscreenComponent);
    return LockscreenComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/maintenance/maintenance.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"overlay\"></div>\n<div class=\"error-content flexbox\">\n    <span class=\"error-icon\"></span>\n    <div class=\"flex-1\">\n        <h3 class=\"font-strong mb-3 text-primary\">MAINTENANCE MODE</h3>\n        <h5 class=\"font-strong mb-4\">We'll be back in a few minutes.</h5>\n        <p class=\"mb-4\">Please wait for a few minutes. Sorry for the inconvenience but we're performing some maintenance at the moment.</p>\n    </div>\n</div>\n\n<style>\n    .overlay {\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        background-color: #fff;\n        background-repeat: no-repeat;\n        background-image: url(./assets/img/icons/tools-2.svg);\n        background-position: 80% 10px;\n    }\n    .error-content {\n        position: relative;\n        max-width: 620px;\n        margin: 200px auto 0;\n    }\n\n    .error-icon {\n        height: 160px;\n        width: 160px;\n        background-image: url(./assets/img/icons/tools.svg);\n        background-size: cover;\n        background-repeat: no-repeat;\n        margin-right: 80px;\n    }\n    body.empty-layout .theme-config, body.empty-layout .to-top{\n        display: none !important;\n    }\n</style>\n"

/***/ }),

/***/ "../../../../../src/app/pages/maintenance/maintenance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaintenanceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MaintenanceComponent = (function () {
    function MaintenanceComponent() {
    }
    MaintenanceComponent.prototype.ngOnInit = function () {
        $('body').addClass('empty-layout');
    };
    MaintenanceComponent.prototype.ngAfterViewInit = function () { };
    MaintenanceComponent.prototype.ngOnDestroy = function () {
        $('body').removeClass('empty-layout');
    };
    MaintenanceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-maintenance',
            template: __webpack_require__("../../../../../src/app/pages/maintenance/maintenance.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], MaintenanceComponent);
    return MaintenanceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/manual-data/manual-data.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/pages/manual-data/manual-data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManualDataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ManualDataComponent = (function () {
    function ManualDataComponent() {
    }
    ManualDataComponent.prototype.ngOnInit = function () {
    };
    ManualDataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-manual-data',
            template: __webpack_require__("../../../../../src/app/pages/manual-data/manual-data.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ManualDataComponent);
    return ManualDataComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/portfolio/portfolio.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-content fade-in-up\">   \n  <div class=\"row mb-4\">\n    <div class=\"col-lg-3 col-md-6\">\n        <div class=\"card\">\n            <div class=\"card-body flexbox-b\">\n                <div easypie class=\"easypie mr-4\" data-percent=\"42\" data-bar-color=\"#5c6bc0\" data-size=\"80\" data-line-width=\"8\">\n                    <span class=\"easypie-data font-26 text-primary\"><i class=\"la la-money\"></i></span>\n                </div>\n                <div>\n                    <h3 class=\"font-strong text-primary\">48.987 $</h3>\n                    <div class=\"text-muted\">AUM</div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-lg-3 col-md-6\">\n        <div class=\"card\">\n            <div class=\"card-body flexbox-b\">\n                <div easypie class=\"easypie mr-4\" data-percent=\"42\" data-bar-color=\"#ff4081\" data-size=\"80\" data-line-width=\"8\">\n                    <span class=\"easypie-data font-26 text-pink\"><i class=\"la la-area-chart\"></i></span>\n                </div>\n                <div>\n                    <h3 class=\"font-strong text-pink\">{{140.71 | number:'1.2-2'}} %</h3>\n                    <div class=\"text-muted\">GAIN</div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-lg-3 col-md-6\">\n        <div class=\"card\">\n            <div class=\"card-body flexbox-b\">\n                <div easypie class=\"easypie mr-4\" data-percent=\"42\" data-bar-color=\"#18c5a9\" data-size=\"80\" data-line-width=\"8\">\n                    <span class=\"easypie-data font-26 text-success\"><i class=\"la la-bar-chart\"></i></span>\n                </div>\n                <div>\n                    <h3 class=\"font-strong text-success\">{{23.321 | number:'1.2-2'}} $</h3>\n                    <div class=\"text-muted\">PROFIT</div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-lg-3 col-md-6\">\n        <div class=\"card\">\n            <div class=\"card-body flexbox-b\">\n                <div easypie class=\"easypie mr-4\" data-percent=\"42\" data-bar-color=\"#5c6bc0\" data-size=\"80\" data-line-width=\"8\">\n                    <span class=\"easypie-data font-26 text-primary\"><i class=\"la la-table\"></i></span>\n                </div>\n                <div>\n                    <h3 class=\"font-strong text-primary\">2.31 %</h3>\n                    <div class=\"text-muted\">DRAWDOWN</div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-lg-4\">\n    <div class=\"ibox\">\n      <div class=\"ibox-head\">\n        <div class=\"ibox-title\">INFO</div>\n      </div>\n      <div class=\"ibox-body\">\n        <ul class=\"list-group list-group-full list-group-divider\">\n          <li class=\"list-group-item flexbox text-success\">\n            <strong>Gain:</strong>\n            <span class=\"float-right ml-2 nowrap\"><strong>140.71%</strong></span>\n          </li>\n          <li class=\"list-group-item flexbox\">\n            <ul class=\"info-list\">\n              <li>\n                Monthly:\n                <span class=\"float-right ml-2 nowrap\">7.55%</span>\n              </li>\n              <li>\n                Quarterly:\n                <span class=\"float-right ml-2 nowrap\">34.13%</span>\n              </li>\n              <li>\n                Yearly:\n                <span class=\"float-right ml-2 nowrap\">125.40%</span>\n              </li>\n              <li>\n                Drawdown:\n                <span class=\"float-right ml-2 nowrap\">2.31%</span>\n              </li>                \n            </ul>\n          </li>\n          <li class=\"list-group-item flexbox\">\n            <ul class=\"info-list\">\n              <li>\n                Deposits:\n                <span class=\"float-right ml-2 nowrap\">25.000$</span>\n              </li>\n              <li>\n                Withdrawals:\n                <span class=\"float-right ml-2 nowrap\">0$</span>\n              </li>\n            </ul>\n          </li>\n          <li class=\"list-group-item flexbox\">\n            Updated: \n            <small class=\"float-right text-muted ml-2 nowrap\">1h 30min ago</small>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xl-8\">\n    <div class=\"ibox ibox-fullheight\">\n      <div class=\"ibox-head\">\n          <div class=\"ibox-title\">MY PORTFOLIO</div>\n          <ul class=\"nav nav-pills nav-pills-air\">\n            <li class=\"nav-item ml-1\">\n              <a class=\"nav-link active\" (click)=\"setPortfolioTab('growth')\" [class.active]=\"activePortfolioTab == 'growth'\">Growth</a>\n            </li>\n            <li class=\"nav-item ml-1\">\n              <a class=\"nav-link active\" (click)=\"setPortfolioTab('balance')\" [class.active]=\"activePortfolioTab == 'balance'\">Balance</a>\n            </li>\n            <li class=\"nav-item ml-1\">\n              <a class=\"nav-link active\" (click)=\"setPortfolioTab('profit')\" [class.active]=\"activePortfolioTab == 'profit'\">Profit</a>\n            </li>\n            <li class=\"nav-item ml-1\">\n              <a class=\"nav-link active\" (click)=\"setPortfolioTab('drawdown')\" [class.active]=\"activePortfolioTab == 'drawdown'\">Drawdown</a>\n            </li>                  \n          </ul>\n      </div>\n      <div class=\"ibox-body\">  \n          <div class=\"tab-content\">\n            <div *ngIf=\"activePortfolioTab == 'growth'\">\n              <div morrisLineChart style=\"width:100%;height:280px;\"></div>\n            </div>\n            <div *ngIf=\"activePortfolioTab == 'balance'\">\n              Balance Graph\n            </div> \n            <div *ngIf=\"activePortfolioTab == 'profit'\">\n              Profit Graph\n            </div>\n            <div *ngIf=\"activePortfolioTab == 'drawdown'\">\n              Drawdown Graph\n            </div>                            \n          </div>\n      </div>\n    </div>\n  </div>  \n</div>\n<div class=\"ibox\">\n    <div class=\"ibox-head\">\n      <div class=\"ibox-title\">ADVANCED STATISTICS</div>\n    </div>\n    <div class=\"ibox-body\">\n        <div class=\"tab-content\">\n          <div class=\"row mb-4\">\n            <div class=\"col-lg-4 col-md-4\">\n                <table class=\"table table-striped\">\n                    <tbody>\n                        <tr>\n                          <td>Trades:</td>\n                          <td><span class=\"float-right ml-2 nowrap\">4237</span></td>\n                        </tr>\n                        <tr>\n                          <td>Profitability:</td>\n                          <td><span class=\"float-right ml-2 nowrap\">74.35%</span></td>\n                        </tr>\n                        <tr>\n                          <td>Average Win:</td>\n                          <td><span class=\"float-right ml-2 nowrap\">1.235$</span></td>\n                        </tr>\n                        <tr>\n                          <td>Average Lost:</td>\n                          <td><span class=\"float-right ml-2 nowrap\">308$</span></td>\n                        </tr>    \n                        <tr>\n                          <td>Exposure:</td>\n                          <td><span class=\"float-right ml-2 nowrap\">4.37</span></td>\n                        </tr>                                                   \n                    </tbody>\n                </table>\n            </div>\n            <div class=\"col-lg-4 col-md-4\">\n                <table class=\"table table-striped\">\n                    <tbody>\n                        <tr>\n                          <td>Longs Won:</td>\n                          <td><span class=\"float-right ml-2 nowrap\">95.21%</span></td>\n                        </tr>\n                        <tr>\n                          <td>Shorts Won:</td>\n                          <td><span class=\"float-right ml-2 nowrap\">87.21%</span></td>\n                        </tr>\n                        <tr>\n                          <td>Best Trade:</td>\n                          <td><span class=\"float-right ml-2 nowrap\">2867$</span></td>\n                        </tr>\n                        <tr>\n                          <td>Worst Trade:</td>\n                          <td><span class=\"float-right ml-2 nowrap\">546$</span></td>\n                        </tr>    \n                        <tr>\n                          <td>Avg. Trade Length:</td>\n                          <td><span class=\"float-right ml-2 nowrap\">28.3 Days</span></td>\n                        </tr>                                                   \n                    </tbody>\n                </table>                \n            </div>\n            <div class=\"col-lg-4 col-md-4\">\n                <table class=\"table table-striped\">\n                    <tbody>\n                        <tr>\n                          <td>Profit Factor:</td>\n                          <td><span class=\"float-right ml-2 nowrap\">3.88</span></td>\n                        </tr>\n                        <tr>\n                          <td>Standard Deviation:</td>\n                          <td><span class=\"float-right ml-2 nowrap\">347.77$</span></td>\n                        </tr>\n                        <tr>\n                          <td>Sharpe Ratio:</td>\n                          <td><span class=\"float-right ml-2 nowrap\">2.12</span></td>\n                        </tr>\n                        <tr>\n                          <td>Sortino Ratio:</td>\n                          <td><span class=\"float-right ml-2 nowrap\">3.23</span></td>\n                        </tr>    \n                        <tr>\n                          <td>Calmar Ratio:</td>\n                          <td><span class=\"float-right ml-2 nowrap\">5.41</span></td>\n                        </tr>                                                   \n                    </tbody>\n                </table>                      \n            </div>              \n          </div>\n        </div>        \n    </div>\n</div>\n<div class=\"ibox\">\n    <div class=\"ibox-head\">\n        <ul class=\"nav nav-pills nav-pills-air\">\n            <li class=\"nav-item\">\n                <a class=\"nav-link active\" (click)=\"setTradeTab('openTrades')\" [class.active]=\"activeTradeTab == 'openTrades'\">Open Trades</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" (click)=\"setTradeTab('tradeHistory')\" [class.active]=\"activeTradeTab == 'tradeHistory'\">Trade History</a>\n            </li>\n        </ul>\n        <button class=\"btn btn-success btn-air\" (click)=\"openNewTradeDialog()\">New Trade</button>\n    </div>\n    <div class=\"tab-content\">\n      <div *ngIf=\"activeTradeTab == 'openTrades'\">\n        <app-open-trades-table [trades]=\"trades\"></app-open-trades-table>\n      </div>\n      <div *ngIf=\"activeTradeTab == 'tradeHistory'\">\n        <app-trade-history-table [trades]=\"trades\"></app-trade-history-table>\n      </div>\n    </div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/portfolio/portfolio.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a.nav-link.active:hover {\n  color: #fff; }\n\n.info-list {\n  width: 100%;\n  list-style: none;\n  padding: 0; }\n  .info-list li {\n    padding: 2px 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/portfolio/portfolio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_script_loader_service__ = __webpack_require__("../../../../../src/app/_services/script-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_index__ = __webpack_require__("../../../../../src/app/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PortfolioComponent = (function () {
    function PortfolioComponent(_script, auth, dialog, tradeService) {
        this._script = _script;
        this.auth = auth;
        this.dialog = dialog;
        this.tradeService = tradeService;
        this.activePortfolioTab = 'growth';
        this.activeTradeTab = 'openTrades';
        this.trades = [];
    }
    PortfolioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tradeService.getTrades()
            .subscribe(function (trades) { return _this.trades = trades; });
    };
    PortfolioComponent.prototype.ngAfterViewInit = function () { };
    PortfolioComponent.prototype.setPortfolioTab = function (value) {
        this.activePortfolioTab = value;
    };
    PortfolioComponent.prototype.setTradeTab = function (value) {
        this.activeTradeTab = value;
    };
    PortfolioComponent.prototype.isAuth = function () {
        return this.auth.isAuthenticated();
    };
    PortfolioComponent.prototype.openNewTradeDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__components_index__["d" /* DialogNewTradeComponent */], {
            height: 'auto'
        });
    };
    PortfolioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-portfolio',
            template: __webpack_require__("../../../../../src/app/pages/portfolio/portfolio.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/portfolio/portfolio.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_script_loader_service__["a" /* ScriptLoaderService */],
            __WEBPACK_IMPORTED_MODULE_4__services_index__["b" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_4__services_index__["j" /* TradeService */]])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/pages/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent.prototype.ngAfterViewInit = function () { };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/pages/profile/profile.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/risk-management/atr/atr.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/pages/risk-management/atr/atr.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ATRComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ATRComponent = (function () {
    function ATRComponent() {
    }
    ATRComponent.prototype.ngOnInit = function () {
    };
    ATRComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-atr',
            template: __webpack_require__("../../../../../src/app/pages/risk-management/atr/atr.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ATRComponent);
    return ATRComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/risk-management/distribution-odds-calculation/distribution-odds-calculation.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/pages/risk-management/distribution-odds-calculation/distribution-odds-calculation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DistributionOddsCalculationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DistributionOddsCalculationComponent = (function () {
    function DistributionOddsCalculationComponent() {
    }
    DistributionOddsCalculationComponent.prototype.ngOnInit = function () {
    };
    DistributionOddsCalculationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-distribution-odds-calculation',
            template: __webpack_require__("../../../../../src/app/pages/risk-management/distribution-odds-calculation/distribution-odds-calculation.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], DistributionOddsCalculationComponent);
    return DistributionOddsCalculationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/risk-management/implied-volatility-assessment/implied-volatility-assessment.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/pages/risk-management/implied-volatility-assessment/implied-volatility-assessment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImpliedVolatilityAssessmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImpliedVolatilityAssessmentComponent = (function () {
    function ImpliedVolatilityAssessmentComponent() {
    }
    ImpliedVolatilityAssessmentComponent.prototype.ngOnInit = function () {
    };
    ImpliedVolatilityAssessmentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-implied-volatility-assessment',
            template: __webpack_require__("../../../../../src/app/pages/risk-management/implied-volatility-assessment/implied-volatility-assessment.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ImpliedVolatilityAssessmentComponent);
    return ImpliedVolatilityAssessmentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-content fade-in-up\">\n    <div class=\"flexbox-b mb-5\">\n        <span class=\"mr-4 static-badge badge-pink\"><i class=\"ti-search\"></i></span>\n        <div>\n            <h5 class=\"font-strong\">Search Results</h5>\n            <div class=\"text-light\">Found 420 results in 3 categories</div>\n        </div>\n    </div>\n    <div class=\"input-group-icon input-group-icon-left input-group-lg mb-4\">\n        <span class=\"input-icon input-icon-right\"><i class=\"ti-search\"></i></span>\n        <input class=\"form-control form-control-air font-light font-poppins border-0\" type=\"text\" placeholder=\"Search ...\" style=\"box-shadow:0 3px 6px rgba(10,16,20,.15);\">\n    </div>\n    <div class=\"ibox\">\n        <div class=\"ibox-body\">\n            <div class=\"mb-4\">\n                <h3 class=\"mt-1\">420 results found for:\n                    <span class=\"text-primary\">“AdminCa Theme”</span>\n                </h3><small class=\"text-muted\">About 1,370 result ( 0.13 seconds)</small></div>\n            <ul class=\"list-group list-group-full list-group-divider\">\n                <li class=\"list-group-item py-3\">\n                    <h5 class=\"font-strong\">\n                        <a class=\"link-blue\">AdminCa: Perfect Design + Perfect Code</a>\n                    </h5>\n                    <p class=\"text-light\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>\n                    <div class=\"text-muted font-13\">\n                        <span class=\"badge badge-primary\">DESIGN</span>\n                        <span class=\"mx-2\">•</span>\n                        <span>Feb 25, 2018</span>\n                    </div>\n                </li>\n                <li class=\"list-group-item py-3\">\n                    <h5 class=\"font-strong\">\n                        <a class=\"link-blue\">AdminCa: Web Design Trends</a>\n                    </h5>\n                    <p class=\"text-light\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an typesetting industry. Lorem Ipsum has been the industry's\n                        standard dummy.</p>\n                    <div class=\"text-muted font-13\">\n                        <span class=\"badge badge-danger\">TRENDS</span>\n                        <span class=\"mx-2\">•</span>\n                        <span>May 20, 2018</span>\n                    </div>\n                </li>\n                <li class=\"list-group-item py-3\">\n                    <h5 class=\"font-strong\">\n                        <a class=\"link-blue\">Easy Programing with Adminca</a>\n                    </h5>\n                    <p class=\"text-light\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an...</p>\n                    <div class=\"text-muted font-13\">\n                        <span class=\"badge badge-success\">Programing</span>\n                        <span class=\"mx-2\">•</span>\n                        <span>Apr 14, 2018</span>\n                    </div>\n                </li>\n                <li class=\"list-group-item py-3\">\n                    <h5 class=\"font-strong\">\n                        <a class=\"link-blue\">Adminca and Angular</a>\n                    </h5>\n                    <p class=\"text-light\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>\n                    <div class=\"text-muted font-13\">\n                        <span class=\"badge badge-pink\">ANGULAR</span>\n                        <span class=\"mx-2\">•</span>\n                        <span>Sep 22, 2018</span>\n                    </div>\n                </li>\n                <li class=\"list-group-item py-3\">\n                    <h5 class=\"font-strong\">\n                        <a class=\"link-blue\">AdminCa: Bootstrap Premium Admin Theme</a>\n                    </h5>\n                    <p class=\"text-light\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an.</p>\n                    <div class=\"text-muted font-13\">\n                        <span class=\"badge badge-primary\">BOOTSTRAP</span>\n                        <span class=\"mx-2\">•</span>\n                        <span>Oct 18, 2018</span>\n                    </div>\n                </li>\n            </ul>\n            <ul class=\"pagination justify-content-center mt-4\">\n                <li class=\"page-item\">\n                    <a class=\"page-link page-link-solid\" href=\"javascript:;\" aria-label=\"First\">\n                        <span aria-hidden=\"true\"><i class=\"la la-angle-double-left\"></i></span>\n                    </a>\n                </li>\n                <li class=\"page-item\">\n                    <a class=\"page-link page-link-solid\" href=\"javascript:;\" aria-label=\"Previous\">\n                        <span aria-hidden=\"true\"><i class=\"la la-angle-left\"></i></span>\n                    </a>\n                </li>\n                <li class=\"page-item active\">\n                    <a class=\"page-link\" href=\"javascript:;\">1</a>\n                </li>\n                <li class=\"page-item\">\n                    <a class=\"page-link\" href=\"javascript:;\">2</a>\n                </li>\n                <li class=\"page-item\">\n                    <a class=\"page-link\" href=\"javascript:;\">3</a>\n                </li>\n                <li class=\"page-item\">\n                    <a class=\"page-link\" href=\"javascript:;\">4</a>\n                </li>\n                <li class=\"page-item\">\n                    <a class=\"page-link\" href=\"javascript:;\"><i class=\"la la-ellipsis-h\"></i></a>\n                </li>\n                <li class=\"page-item\">\n                    <a class=\"page-link page-link-solid\" href=\"javascript:;\" aria-label=\"Next\"><i class=\"la la-angle-right\"></i></a>\n                </li>\n                <li class=\"page-item\">\n                    <a class=\"page-link page-link-solid\" href=\"javascript:;\" aria-label=\"Last\"><i class=\"la la-angle-double-right\"></i></a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchComponent = (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__("../../../../../src/app/pages/search/search.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/trading-journal/trading-journal.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/pages/trading-journal/trading-journal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TradingJournalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TradingJournalComponent = (function () {
    function TradingJournalComponent() {
    }
    TradingJournalComponent.prototype.ngOnInit = function () {
    };
    TradingJournalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-trading-journal',
            template: __webpack_require__("../../../../../src/app/pages/trading-journal/trading-journal.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], TradingJournalComponent);
    return TradingJournalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/watchlist/watchlist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-content fade-in-up\">  \n  <div class=\"ibox\">\n    <div class=\"ibox-head\">\n      <div class=\"ibox-title\">STOCKS</div>\n      <button class=\"btn btn-success btn-air mr-4\" (click)=\"openNewSpreadTradeDialog()\">Add to watch list</button>\n    </div>\n    <div class=\"tab-content\">\n      <app-spread-trade-table [spreadTrades]=\"spreadTrades\" [weeksNumber]=\"weeksNumber\"></app-spread-trade-table>\n    </div>\n  </div> \n  <div class=\"ibox\">\n    <div class=\"ibox-head\">\n      <div class=\"ibox-title\">FOREX</div>\n    </div>\n    <div class=\"tab-content\">\n      <app-forex-table></app-forex-table>\n    </div>\n  </div> \n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/watchlist/watchlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WatchlistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_script_loader_service__ = __webpack_require__("../../../../../src/app/_services/script-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_index__ = __webpack_require__("../../../../../src/app/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WatchlistComponent = (function () {
    function WatchlistComponent(_script, dialog, spreadTradeService, stockService) {
        this._script = _script;
        this.dialog = dialog;
        this.spreadTradeService = spreadTradeService;
        this.stockService = stockService;
        this.spreadTrades = [];
        this.stocks = [];
        this.weeksNumber = 0;
    }
    WatchlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.stockService.getStocks()
            .subscribe(function (stocks) {
            _this.stocks = stocks;
            _this.spreadTradeService.getSpreadTrades()
                .subscribe(function (spreadTrades) {
                _this.spreadTrades = spreadTrades;
                return _this.spreadTrades.forEach(function (el) {
                    var longs = _this.stocks.find(function (stock) { return stock.id.toString() == el.longs; });
                    el.longs = (longs) ? longs.symbol : el.longs;
                    var shorts = _this.stocks.find(function (stock) { return stock.id.toString() == el.shorts; });
                    el.shorts = (shorts) ? shorts.symbol : el.shorts;
                    if (el.history.length > _this.weeksNumber) {
                        _this.weeksNumber = el.history.length;
                    }
                });
            });
        });
    };
    WatchlistComponent.prototype.openNewSpreadTradeDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__components_index__["c" /* DialogNewSpreadTradeComponent */], {
            height: 'auto'
        });
    };
    WatchlistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-watchlist',
            template: __webpack_require__("../../../../../src/app/pages/watchlist/watchlist.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_script_loader_service__["a" /* ScriptLoaderService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_4__services_index__["h" /* SpreadTradeService */],
            __WEBPACK_IMPORTED_MODULE_4__services_index__["i" /* StockService */]])
    ], WatchlistComponent);
    return WatchlistComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__trade_status_pipe__ = __webpack_require__("../../../../../src/app/pipes/trade-status.pipe.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__trade_status_pipe__["a"]; });



/***/ }),

/***/ "../../../../../src/app/pipes/trade-status.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TradeStatusPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TradeStatusPipe = (function () {
    function TradeStatusPipe() {
    }
    TradeStatusPipe.prototype.transform = function (items, status) {
        if (!items) {
            return [];
        }
        if (!status) {
            return items;
        }
        return items.filter(function (item) { return item.status === status; });
    };
    TradeStatusPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({ name: 'tradeStatus' })
    ], TradeStatusPipe);
    return TradeStatusPipe;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map