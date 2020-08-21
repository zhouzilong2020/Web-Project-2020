from rest_framework import serializers
from app.models import User
from rest_framework.response import Response
from rest_framework.views import APIView


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'