from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.getdate),
    path('<int:zipcode>/', views.playdate_zipcode),
    # path('<int:id>/', views.surrounding_playdates), 
]