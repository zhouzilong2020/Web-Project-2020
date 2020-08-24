from django.db import models

# Create your models here.


class User(models.Model):
    nickname = models.CharField(max_length = 32)
    account = models.CharField(max_length = 32, primary_key = True)
    password = models.CharField(max_length = 32)
    # 上次登录时间
    lastLogDate = models.DateField(auto_now_add=True)
    def __str__(self):
        return self.nickname 


class History(models.Model):
    user = models.ForeignKey("User", on_delete=models.CASCADE, null=False)
    newsID = models.CharField(max_length = 64)
    data = models.DateField(auto_now_add=True)
    def __str__(self):
        return self.data 

class Favorite(models.Model):
    user = models.ForeignKey("User", on_delete=models.CASCADE, null=False)
    newsID = models.CharField(max_length = 64)
    data = models.DateField(auto_now_add=True)
    def __str__(self):
        return self.data 
