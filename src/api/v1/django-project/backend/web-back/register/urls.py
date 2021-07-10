from django.urls import path, include
from .models import User
from .views import UserRegister
from .serializers import UserSerializer
from rest_framework import generics

urlpatterns = [
    path('', generics.ListCreateAPIView.as_view(queryset=User.objects.all(), serializer_class=UserSerializer)),
]
