from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .models import Dogs
from .serializers import DogSearializer
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

# Create your views here.

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def dog_id(request, id):

    dogs_id = Dogs.objects.get(id=id)
    serializer = DogSearializer(dogs_id)
    return Response(serializer.data, status=status.HTTP_201_CREATED)


