from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

# django as back end
from rest_framework import viewsets
from app.models import User
from app.serializer import UserSerializer

# 将返回所有的用户信息
# 建立一个用户的视图集合
# 实质上会通过不同的http请求做出不同的数据库操作
class UserViewSet(viewsets.ModelViewSet):
    # 所有的用户信息结果
    queryset = User.objects.all()
    # serializer的对象
    serializer_class = UserSerializer