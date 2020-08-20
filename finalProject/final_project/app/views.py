from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

# request 请求！
def index(request):
    # httpresponse 返回
    return render(request, "index.html")

def greet(request, name):
    # httpresponse 返回
    return render(request, "greet.html",{
        "name": name
    })