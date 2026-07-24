from django.urls import path
from .views import api_placeholder, health

urlpatterns = [
    path("health/", health, name="health"),
    path("", api_placeholder, name="api-placeholder"),
]
