from django.db import models
from authentication.models import User

# Create your models here.
class PlayDate(models.Model):
    street =  models.CharField(max_length=100)
    city =  models.CharField(max_length=100)
    state =  models.CharField(max_length=100)
    # street =  models.CharField(max_length=100)
    zipcode =  models.BigIntegerField()
    # time = models.
    date = models.DateField(input_type: 'date')
    time = models.TimeField(input_type = 'time')
    subscribers = models.ManyToManyField(User, related_name="playdate_users")





