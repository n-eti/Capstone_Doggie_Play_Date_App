from django.db import models

# Create your models here.

class PrimaryUser(models.Model):
    firstName = models.CharField(max_length=60)
    lastName = models.CharField(max_length=60)
    street = models.CharField(max_length=60)
    city = models.CharField(max_length=60)
    zipcode = models.IntegerField()
    memberSince = models.DateField()
    username = models.CharField(max_length=60)
    password = models.CharField(max_length=60)

class Dogs(models.Model):
    breed = models.CharField(max_length=60)
    gender = models.CharField(max_length=60)
    weight = models.IntegerField()
    age = models.IntegerField()
    neutered = models.CharField(max_length=60)
    breed = models.CharField(max_length=60)
    spayedOrNeutered = bool
    primaryUserId = models.ForeignKey(PrimaryUserId, on_delete=models.CASCADE)

class PlayDates(models.Model):
    street =  models.CharField(max_length=100)
    city =  models.CharField(max_length=100)
    state =  models.CharField(max_length=100)
    zipcode =  models.BigIntegerField()
    street =  models.CharField(max_length=100)
    PrimaryUserId1 = models.ForeignKey(PrimaryUserId1, on_delete=models.CASCADE)
    PrimaryUserId2 = models.ForeignKey(PrimaryUserId2, on_delete=models.CASCADE)

class Reviews(models.Model):
    question1 = models.BigIntegerField()
    question2 = models.BigIntegerField()
    question3 = models.BigIntegerField()
    review = models.CharField(max_length=600)




