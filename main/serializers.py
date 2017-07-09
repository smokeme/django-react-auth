from rest_framework import serializers
from models import Articale
from django.contrib.auth.models import User
from rest_framework.fields import CurrentUserDefault
from rest_framework import viewsets, response, permissions
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'username', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User(
            email=validated_data['email'],
            username=validated_data['username']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

class ArticaleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Articale
        fields = ('title','id','url', 'owner')
        extra_kwargs = {'owner': {'default': serializers.CurrentUserDefault()}}
        read_only_fields = ('owner',)

    def create(self, validated_data):
        owner = self.context['request'].user
        title = self.validated_data['title']
        listing = Articale(owner=owner,title=title)
        listing.save()
        return listing
