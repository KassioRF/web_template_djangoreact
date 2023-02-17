from django.shortcuts import render
from django.http import JsonResponse
from datetime import datetime

from rest_framework import viewsets
from rest_framework import permissions

from api.serializers import ContactSerializer
from api.models import Contact


# Create your views here.

"""----------------------------------------------------------------------------
 Views definidas com Serializers para os modelos
-----------------------------------------------------------------------------"""
class ContacstList(viewsets.ModelViewSet):
  """
  API endpoint that allows users to be viewed.
  """ 
  queryset = Contact.objects.all()
  serializer_class = ContactSerializer

