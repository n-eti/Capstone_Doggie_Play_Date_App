from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import PlayDate
from .serializers import PlayDateSearializer


# Create your views here.

@api_view(['GET', 'POST']) 
def getdate(request):

    if request.method == 'GET':
        dates= PlayDate.objects.all()
        serializer = PlayDateSearializer(dates, many=True)
        return Response (serializer.data)
    elif request.method == 'POST':
        serializer = PlayDateSearializer(data=request.data)
        if serializer.is_valid() == True:
            serializer.save()
            return Response(serializer.data, status=201)
        else:
            return Response(serializer.errors, status=400
                            )
        