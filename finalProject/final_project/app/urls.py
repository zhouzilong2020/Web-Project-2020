from django.urls import path
from . import views

# 应用独立的url配置
urlpatterns = [
    # views ==> views.py 将会执行index这个函数
    path("", views.index, name="index"),
    # name一个占位符
    path("<str:name>", views.greet, name="greet"),
]