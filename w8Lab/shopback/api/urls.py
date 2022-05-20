from django import views
from django.urls import path
from . import views
# from api.views import category_detail, category_list, product_detail, product_list

urlpatterns = [
    path('', views.home),
    path('products/', views.product_list),
    path('products/<int:product_id>/', views.product_detail),
    path('categories/', views.category_list),
    path('categories/<int:category_id>/', views.category_detail),
]