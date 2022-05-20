from django.db import models
from django.forms import IntegerField


class Product(models.Model):
    name = models.CharField()
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField()


class Category(models.Model):
    name = models.CharField()
    