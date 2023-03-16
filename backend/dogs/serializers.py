from rest_framework import serializers
from .models import Dogs

class DogSearializer(serializers.ModelSerializer):
    class meta:
        model = Dogs
        fields = ['id', 'name', 'breed', 'gender', 'weight', 'age','spayedOrNeutered', 'image_url']