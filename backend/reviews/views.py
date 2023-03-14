from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .models import Reviews
from .serializers import ReviewSearializer
from rest_framework import status
from django.shortcuts import render, get_object_or_404
# Create your views here.

@api_view(['POST'])
def write_review(request):
    if request.method == 'POST':
        serializer = ReviewSearializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
