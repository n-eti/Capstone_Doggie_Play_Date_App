from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .models import PlayDate
from .serializers import PlayDateSearializer
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny

# Create your views here.


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def getdate(request):
    if request.method == 'GET':

        zipcode = request.query_params.get('zipcode')

        dates = PlayDate.objects.all()

        if zipcode:
            dates.filter(zipcode=zipcode)

        serializer = PlayDateSearializer(dates, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = PlayDateSearializer(data=request.data)
        if serializer.is_valid() == True:
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        PlayDate.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET'])
def playdate_zipcode(request, zipcode):

    playdates = PlayDate.objects.filter(zipcode=zipcode)
    serializer = PlayDateSearializer(playdates, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def surrounding_playdates(request, pk):

    try:
        playdate = PlayDate.objects.get(pk=pk, )
        serializer = PlayDateSearializer(playdate)
        return Response(serializer.data)
    except PlayDate.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
