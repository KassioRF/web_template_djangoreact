from django.db import models


"""-----------------------------------------------------------------------------
  Define a estrutuda dos modelos para o banco de dados
-----------------------------------------------------------------------------"""
# Create your models here.
class Contact(models.Model):
  name = models.CharField(max_length=200)
  phone = models.CharField(max_length=12)