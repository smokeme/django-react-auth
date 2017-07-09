# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib.auth.models import User
from models import Articale
from rest_framework import viewsets, response, permissions

from .serializers import UserSerializer, ArticaleSerializer

class IsReadyOnlyRequest(permissions.BasePermission):

    def has_permission(self, request, view):
        return ((request.method == "GET" and request.user.is_authenticated()) or request.method == "POST")


class IsPostRequest(permissions.BasePermission):

    def has_permission(self, request, view):
        return request.method == "POST"

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsReadyOnlyRequest]
    def list(self, request):
        return response.Response(UserSerializer(request.user,
                context={'request':request}).data)
    def retrieve(self, request, pk=None):
        return response.Response(UserSerializer(request.user,
            context={'request':request}).data)


class ArticaleViewSet(viewsets.ModelViewSet):
    queryset = Articale.objects.all()
    serializer_class = ArticaleSerializer
    permission_classes = (permissions.IsAuthenticated  ,)

    def retrieve(self, request, pk=None):
        return super(ArticaleViewSet, self).retrieve(request, pk)
