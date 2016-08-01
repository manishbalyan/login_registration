from django.shortcuts import render
from models import  User
from rest_framework import viewsets
from rest_framework.response import Response
from serializers import UserSerializer
from django.contrib.auth import authenticate, login
from rest_framework import status
from rest_framework.decorators import api_view
from django.http import HttpResponse
import json
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import  JSONRenderer
# Create your views here.


@api_view(['GET', 'POST'])
def UserViewSet(request, format=None):
    """
        List all user, or create a new user.
    """
    if request.method == 'GET':
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def LoginViewSet(request):
    data = (request.data)

    email = data.get('email')
    password = data.get('password')

    user = authenticate(email=email, password=password)
    print user
    return Response(user)







