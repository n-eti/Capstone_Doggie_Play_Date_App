from dogs import views
from django.urls import path, include


urlpatterns = [
    path('', views.dogs_id),
    path('<int:id>/', views.dogs_id),
]