from django.urls import path, include
# 引入当前目录下的views
from . import views
# 引入rest framework
from rest_framework.routers import DefaultRouter


# DRF官方文档！！！
# 注册url
router = DefaultRouter()
router.register('user', views.UserViewSet)

# 应用独立的url配置
urlpatterns = [
    # # views ==> views.py 将会执行index这个函数
    # path("", views.index, name="index"),
    # # name一个占位符
    # path("<str:name>", views.greet, name="greet"),
    path('', include(router.urls))
]