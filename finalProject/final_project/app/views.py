from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
# Create your views here.

# django as back end
from rest_framework import viewsets 
from rest_framework.response import Response
from rest_framework.decorators import action


from app.models import User
from app.serializer import UserSerializer


# 将返回所有的用户信息
# 建立一个用户的视图集合
# 实质上会通过不同的http请求做出不同的数据库操作
class UserViewSet(viewsets.ModelViewSet):
    # 所有的用户信息结果
    # order_by('-account')表示desc，不加默认表示asc
    queryset = User.objects.all().order_by('account')
    # serializer的对象
    serializer_class = UserSerializer

    # 接口为 http://127.0.0.1:8000/api/user/login/
    @action(methods = ['post'], detail = False)
    def login(self,request, pk = None):
        account = request.data["params"]["account"]
        password = request.data["params"]["password"]
        user = User.objects.filter(
                                    account = account, 
                                    password = password
                                ).first()
        if(user):
            return JsonResponse({
                "status":0,
                "meg" : "success",
                "data" : {
                    "userInfo":{
                        "nickname" : user.nickname,
                        "account" : account,
                    }
                }
            })
        else:
            return JsonResponse({
                "status":1,
                "meg" : "fail"
            })

    # 接口为 http://127.0.0.1:8000/api/user/register/
    @action(methods = ['post'], detail = False)
    def register(self,request, pk = None):
        account = request.data["params"]["account"]
        nickname = request.data["params"]["nickname"]
        password = request.data["params"]["password"]
        
        user = User.objects.filter(account = account).first()

        print(user == None)
        try:
            # 系统总没有该用户，则注册成功
            if(user == None):
                User.objects.create(
                    account = account,
                    nickname = nickname,
                    password = password
                )
                return JsonResponse({
                    "status" : 0,
                    "meg" : "success",
                    "data" : {
                        "userInfo" : {
                            "account" : account,
                            "nickname" : nickname,
                        }
                    }
                })
            else:
                return JsonResponse({
                    "status":1,
                    "meg" : "user account exists"
                })
        except:
            # 注册失败
            return JsonResponse({
                    "status":1,
                    "meg" : "fail"
                })
    
     # 接口为 http://127.0.0.1:8000/api/user/changeNickname/
    @action(methods = ['post'], detail = False)
    def login(self, request, pk = None):
        account = request.data["params"]["account"]
        user = User.objects.filter(
                                    account = account,
                                ).first()
        if(user):
            

            return JsonResponse({
                "status":0,
                "meg" : "success",
                "data" : {
                    "userInfo":{
                        "nickname" : user.nickname,
                        "account" : account,
                    }
                }
            })
        else:
            return JsonResponse({
                "status":1,
                "meg" : "fail"
            })


    
    # 传入id
    def retrieve(self, request, pk=None):
        pass
        
    def create(self, request, *args, **kwargs):
       pass

    def update(self, request, *args, **kwargs):
        pass

    def destroy(self, request, *args, **kwargs):
        pass

    # def list(self, request, *args, **kwargs):
    #     pass