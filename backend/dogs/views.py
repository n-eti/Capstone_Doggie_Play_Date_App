from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .models import Dogs
from .serializers import DogSerializer
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

# Create your views here.

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def dogs_id(request, id):

    if request.method == 'GET':

        dogs_id = Dogs.objects.get(id=id)
        serializer = DogSerializer(dogs_id)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    elif request.method == 'POST':
        serializer= DogSerializer(data=request.data)
        if serializer.is_valid() == True:
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

