from django.db import models

# Create your models here.


class User(models.Model):
    nickname = models.CharField(max_length = 32)
    account = models.CharField(max_length = 32, primary_key = True)
    password = models.CharField(max_length = 32)
    def __str__(self):
        return account



class Comment(models.Model):
    content = models.CharField(max_length = 256)
    belong_account = models.ForeignKey(User, on_delete = models.CASCADE)