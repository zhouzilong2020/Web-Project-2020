from django.db import models

# Create your models here.


class User(models.Model):
    nickname = models.CharField(max_length = 32)
    account = models.CharField(max_length = 32, primary_key = True)
    passward = models.CharField(max_length = 32)
