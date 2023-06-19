from rest_framework import serializers
from .models import Dogs

class DogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dogs
        fields = ['id', 'name', 'breed', 'gender', 'weight', 'age','spayedOrNeutered', 'image_url']