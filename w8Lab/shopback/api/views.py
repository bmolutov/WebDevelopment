from django.shortcuts import render
from django.http.response import HttpResponse, JsonResponse

products = [
    {
        'id': i,
        'name': f'XT {i}',
        'price': i * 100,
        'description': f'XT info {i}',
        'count': 10,
        'is_active': True,
    }
    for i in range(1, 10)
]

categories = [
    {
        'id': i,
        'name': f'XS category TH {i}',
    }
    for i in range(1, 10)
]

def product_list(request):
    return JsonResponse(products, safe=False)

def product_detail(request, product_id):
    for product in products:
        if product['id'] == product_id:
            return JsonResponse(product)
    return JsonResponse({'error message': 'It does not exist!'})


def category_list(request):
    return JsonResponse(categories, safe=False)

def category_detail(reques, category_id):
    for category in categories:
        if category['id'] == category_id:
            return JsonResponse(category)
    return JsonResponse({'error message': 'It does not exist!'})

def home(request):
    return HttpResponse('This is home page!')