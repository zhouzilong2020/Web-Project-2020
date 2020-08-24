from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
import json
# Create your views here.

# django as back end
from rest_framework import viewsets 
from rest_framework.response import Response
from rest_framework.decorators import action


from app.models import User, Favorite, History
from app.serializer import UserSerializer, FavoriteSerializer, HistorySerializer

# 获取当前时间
import datetime


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
            user.lastLogDate = datetime.datetime.now()
            user.save()
            print(datetime.datetime.now())
            return JsonResponse({
                "status":0,
                "mes" : "success",
                "data" : {
                    "userInfo":{
                        "nickname" : user.nickname,
                        "account" : user.account,
                        "lastLogDate" :  user.lastLogDate
                    }
                }
            })
        else:
            return JsonResponse({
                "status":1,
                "mes" : "fail"
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
                    "mes" : "success",
                    "data" : {
                        "userInfo" : {
                            "nickname" : user.nickname,
                            "account" : user.account,
                            "lastLogDate" :  user.lastLogDate
                        }
                    }
                })
            else:
                return JsonResponse({
                    "status":1,
                    "mes" : "user account exists"
                })
        except:
            # 注册失败
            return JsonResponse({
                "status":1,
                "mes" : "fail"
            })
    
    # 接口为 http://127.0.0.1:8000/api/user/changeNickname/
    @action(methods = ['post'], detail = False)
    def changeNickname(self,request, pk = None):
        account = request.data["params"]["account"]
        nickname = request.data["params"]["nickname"]
        try:
            User.objects.filter(account = account).update(nickname = nickname)
            # 系统总没有该用户，则注册成功
            return JsonResponse({
                "status" : 0,
                "mes" : "success",
                "data" : {
                    "userInfo" : {
                        "account" : account,
                        "nickname" : nickname,
                    }
                }
            })
        except:
            # 注册失败
            return JsonResponse({
                "status":1,
                "mes" : "fail"
            })

    # 接口为 http://127.0.0.1:8000/api/user/changePassword/
    @action(methods = ['post'], detail = False)
    def changePassword(self,request, pk = None):
        account = request.data["params"]["account"]
        password = request.data["params"]["password"]
        try:
            User.objects.filter(account = account).update(password = password)
            # 系统总没有该用户，则注册成功
            return JsonResponse({
                "status" : 0,
                "mes" : "success",
            })
        except:
            # 注册失败
            return JsonResponse({
                "status":1,
                "mes" : "fail"
            })
    

# 用户收藏视图集
class FavoriteViewSet(viewsets.ModelViewSet):
    queryset = Favorite.objects.all()
    serializer_class = FavoriteSerializer

    # 用户收藏了一条新闻
    def create(self, request, *args, **kwargs):
        print('create')
        try:
            account = request.query_params.dict()["account"]
            newsID = request.query_params.dict()["newsID"]
            # 由于收藏新闻数据外码依赖与user 故需要先获取user
            print("1")
            user = User.objects.get(account = account)
            newRecord = Favorite.objects.create(
                user = user,
                newsID = newsID,
            )
            print("1")
            newRecord.save()
            print("1")
            return JsonResponse({
                "status":0,
                "mes" : "success",
                "data" : {
                    "id": newRecord.id,
                    "newsID" : newRecord.newsID,
                }
            })
        except:
            return JsonResponse({
                "status":1,
                "mes" : "fail",
            })

    # 用户删除了一条新闻
    def delete(self, request, *args, **kwargs):
        print("delete")
        try:
            print(request.query_params.dict())
            id = request.query_params.dict()["id"]
            Favorite.objects.filter(id = id).delete()
            return JsonResponse({
                "status":0,
                "mes" : "success",
            })
        except:
            return JsonResponse({
                "status":1,
                "mes" : "fail",
            })

    # 传入用户account，返回所有的收藏新闻的数据
    def list(self, request, pk=None):
        print("list")
        try:
            account = request.query_params.dict()["account"]
            # 由于存在外码依赖 需要先获取依赖的user,
            user = User.objects.filter(account = account).first()
            favorite = Favorite.objects.filter(user = user)
            favorite_s = FavoriteSerializer(favorite, many=True)

            # print(favorite_s.data)
            return JsonResponse({
                "status":0,
                "mes" : "success",
                "data" : {
                    "newsList" : favorite_s.data
                }
            })
        except:
            return JsonResponse({
                "status":1,
                "mes" : "fail",
            })
       


# 用户浏览历史记录视图集
class HistoryViewSet(viewsets.ModelViewSet):
    queryset = History.objects.all()
    serializer_class = HistorySerializer

        # 用户浏览了一条新闻
    def create(self, request, *args, **kwargs):
        account = request.data["params"]["account"]
        newsID = request.data["params"]["newsID"]
        try:
            newRecord = History(
                account= account,
                newsID = newsID,
            )
            newRecord.save()
            return JsonResponse({
                "status":0,
                "mes" : "success",
                "data" : {
                    "id": newRecord.id
                }
            })
        except:
            return JsonResponse({
                    "status":1,
                    "mes" : "fail",
                })

    # 用户删除了一条历史记录
    def delete(self, request, *args, **kwargs):
        ids = request.data["params"]["id"]
        try:
            for id in ids:
                History.objects.get(id = id).delete()
            return JsonResponse({
                "status":0,
                "mes" : "success",
            })
        except:
            return JsonResponse({
                    "status":1,
                    "mes" : "fail",
                })
       
    # 传入用户account，返回所有的历史浏览新闻数据
    def list(self, request, pk=None):
        try:
            # account = request.data["params"]["account"]
            account = 11
            history = History.objects.filter(account = account).all()
            history_s = HistorySerializer(history, many=True)
            return JsonResponse({
                "status":0,
                "mes" : "success",
                "data" : history_s.data
            })
        except:
            return JsonResponse({
                    "status":1,
                    "mes" : "fail",
                })