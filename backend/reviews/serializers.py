from rest_framework import serializers
from .models import Reviews

class ReviewSearializer(serializers.ModelSerializer):
    class Meta:
        model = Reviews 
        fields = ['id', 'dog_rating', 'owner_rating', 'play_date_rating', 'review']