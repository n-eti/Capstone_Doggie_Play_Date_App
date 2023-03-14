from django.db import models

# Create your models here.
class Dogs(models.Model):
    breed = models.CharField(max_length=60)
    gender = models.CharField(max_length=60)
    weight = models.IntegerField()
    age = models.IntegerField()
    spayedOrNeutered = models.BooleanField(default=False)
    image_url = models.CharField(max_length=255, blank=True, default="")
