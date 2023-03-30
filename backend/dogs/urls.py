from dogs import views
from django.urls import path, include


urlpatters = [
    path('<int:id>/', views.dog_id),
    path('', views.dog_id),
]