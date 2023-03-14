from django.urls import path, include
from . import views


urlpatterns = [
    path('', views.write_review),
]