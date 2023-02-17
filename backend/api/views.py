from django.shortcuts import render
from django.http import JsonResponse
from datetime import datetime

# Create your views here.

def index(request):
  current_time = datetime.now().strftime("%-I:%S %p")
  current_date = datetime.now().strftime("%A %m %-Y")

  data = {
    'time': current_time,
    'date': current_date,
  }

  return JsonResponse(data)