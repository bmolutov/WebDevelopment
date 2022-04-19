from django.http import JsonResponse

from api.models import Vacancy

from api.serializers import VacancySerializer

from django.views.decorators.csrf import csrf_exempt

import json


@csrf_exempt
def vacancies_list(request):

    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = json.loads(request.body)
        serializer = VacancySerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors)


@csrf_exempt
def vacancy_detail(request, vacancy_id):

    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
    except:
        return JsonResponse({'message': 'this vacancy does not exist'})
    
    if request.method == 'GET':
        serializer = VacancySerializer(vacancy)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        data = json.loads(request.body)
        serializer = VacancySerializer(instance=vacancy, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors)

    elif request.method == 'DELETE':
        vacancy.delete()
        return JsonResponse({'message': 'deleted successfully'})


@csrf_exempt
def top_ten_vacancies(request):

    if request.method == 'GET':
        vacancies = Vacancy.objects.order_by('-salary')
        vacancies = vacancies[:10]
        serializer = VacancySerializer(vacancies, many=True)
        return JsonResponse(serializer.data, safe=False)
