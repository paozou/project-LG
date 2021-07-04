from .settings import *

DEBUG = True

ALLOWED_HOSTS = ['*']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'launch_games_db',
        'USER': 'root',
        'PASSWORD': 'root',
        'HOST': 'db',
        'PORT': '5432',
    }
}
