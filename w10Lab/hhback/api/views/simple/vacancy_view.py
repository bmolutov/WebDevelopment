from django.http import JsonResponse

from api.models import Company, Vacancy

from django.views.decorators.csrf import csrf_exempt

import json


@csrf_exempt
def vacancies_list(request):

    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        vacancies_json = [vacancy.to_json() for vacancy in vacancies]
        return JsonResponse(vacancies_json, safe=False)

    elif request.method == 'POST':
        data = json.loads(request.body)
        try:
            vacancy = Vacancy.objects.create(
                name=data['name'],
                description=data['description'],
                salary=data['salary']
            )
        except Exception as e:
            return JsonResponse({'message': str(e)})
        return JsonResponse(vacancy.to_json())


@csrf_exempt
def vacancy_detail(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
    except:
        return JsonResponse({'message': 'this vacancy does not exist'})

    if request.method == 'GET':
        return JsonResponse(vacancy.to_json())

    elif request.method == 'PUT':
        data = json.loads(request.body)
        vacancy.name = data['name']
        vacancy.description = data['description']
        vacancy.salary = data['salary']
        vacancy.save() 
        return JsonResponse(vacancy.to_json())


def top_ten_vacancies(request):

    if request.method == 'GET':
        vacancies = Vacancy.objects.order_by('-salary')
        vacancies = vacancies[:10]
        vacancies_json = [vacancy.to_json() for vacancy in vacancies]
        return JsonResponse(vacancies_json, safe=False)
