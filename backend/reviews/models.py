from django.db import models

# Create your models here.
class Reviews(models.Model):
    dog_rating = models.BigIntegerField()
    owner_rating = models.BigIntegerField()
    play_date_rating = models.BigIntegerField()
    review = models.CharField(max_length=600)
