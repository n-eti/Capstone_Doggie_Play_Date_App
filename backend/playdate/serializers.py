from rest_framework import serializers
from .models import PlayDate

class PlayDateSearializer(serializers.ModelSerializer):
    class Meta: 
        model = PlayDate
        fields = ['street', 'city', 'state', 'zipcode','date', 'time', 'subscribers_id']
        depth = 1 

        # subscribers_id = serializers.IntegerField(write_only = True)