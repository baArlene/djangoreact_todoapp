from django.shortcuts import render
from rest_framework import viewsets, permissions

from .serializers import *
from .models import *

# Create your views here.
class TodoViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer


