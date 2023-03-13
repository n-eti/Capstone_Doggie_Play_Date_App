from rest_framework import serializers
from .models import Reviews

class ReviewSearializer(serializers.ModelSerializer):
    class meta:
        model = Reviews 
        fields = ['dog-rating', 'owner-rating', 'play_date_rating', 'review']