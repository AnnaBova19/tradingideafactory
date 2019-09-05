from __future__ import absolute_import, unicode_literals

import os

from celery import Celery
from celery.schedules import crontab


os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings.local')

app = Celery('backend')
app.config_from_object('django.conf:settings', namespace='CELERY')

# Load task modules from all registered Django app configs.
app.autodiscover_tasks()

app.conf.beat_schedule = {
    'sync-values-every-15-minutes': {
        'task': 'server.tasks.sync_values',
        'schedule': crontab(minute='*/15', day_of_week='mon,tue,wed,thu,fri'),  # execute every 15 mins of working days
    },
    'change-history-every-friday': {
        'task': 'server.tasks.change_history',
        'schedule': crontab(minute=50, hour=23, day_of_week='fri'),
    },
}


@app.task(bind=True)
def debug_task(self):
    print('Request: {0!r}'.format(self.request))


