from django.urls import path, include
from rest_framework import routers

from . import views

#------------------------------------------------
# Define os endpoints da api
#------------------------------------------------
router = routers.DefaultRouter()
router.register(r'contacts', views.ContacstList)

urlpatterns = [
  path('', include(router.urls)),
  # path('', views.index, name='index'),
]