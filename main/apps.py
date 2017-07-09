from django.apps import AppConfig

class ApiConfig(AppConfig):
    name = 'user'

    def ready(self):
        from . import signals

class ArticaleConfig(AppConfig):
    name = 'Articale'
