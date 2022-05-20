from api.models import Vacancy

from api.serializers import VacancySerializer, VacancySerializer2

from django.views.decorators.csrf import csrf_exempt

from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['GET', 'POST'])
def vacancies_list(request):

    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer2(vacancies, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = VacancySerializer2(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)


@api_view(['GET', 'PUT', 'DELETE'])
def vacancy_detail(request, vacancy_id):

    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
    except:
        return Response({'message': 'this vacancy does not exist'})
    
    if request.method == 'GET':
        serializer = VacancySerializer2(vacancy)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = VacancySerializer2(instance=vacancy, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    elif request.method == 'DELETE':
        vacancy.delete()
        return Response({'message': 'deleted successfully'})


@csrf_exempt
def top_ten_vacancies(request):

    if request.method == 'GET':
        vacancies = Vacancy.objects.order_by('-salary')
        vacancies = vacancies[:10]
        serializer = VacancySerializer2(vacancies, many=True)
        return Response(serializer.data)
