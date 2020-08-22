from rest_framework import serializers
from app.models import User

from rest_framework.response import Response
from rest_framework.views import APIView

# 序列化就是把我们需要查找的实体模型，
# 从数据库中取出，并通过序列化的功能转换成通用的资源格式，
# -->JSON。
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        # 指定查询的字段
        fields = '__all__'

# new_item = serializers(data = data)
# new_item.initial_data()