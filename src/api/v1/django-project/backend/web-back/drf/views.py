from django.shortcuts import render
from rest_framework import generics
from .models import Drf
from .serializers import DrfSerializer


class List(generics.ListAPIView):
    queryset = Drf.objects.all()
    serializer_class = DrfSerializer


class Detail(generics.RetrieveAPIView):
    queryset = Drf.objects.all()
    serializer_class = DrfSerializer
