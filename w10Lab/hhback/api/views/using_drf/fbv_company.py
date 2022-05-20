from api.models import Company, Vacancy

from api.serializers import CompanySerializer, CompanySerializer2

from django.views.decorators.csrf import csrf_exempt

from api.serializers import VacancySerializer, VacancySerializer2

from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['GET', 'POST'])
def companies_list(request):
    
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer2(companies, many=True) 
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = CompanySerializer2(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)


@api_view(['GET', 'PUT', 'DELETE'])
def company_detail(request, company_id):

    try:
        company = Company.objects.get(id=company_id)
    except:
        return Response({'message': 'this company does not exist'})

    if request.method == 'GET':
        serializer = CompanySerializer2(company)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = CompanySerializer2(instance=company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    elif request.method == 'DELETE':
        company.delete()
        return Response({'message': 'deleted successfully'})


@api_view(['GET'])
def company_vacancies_list(request, company_id):

    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        vacancies = [vacancy for vacancy in vacancies if vacancy.company.id == company_id]
        serializer = VacancySerializer2(vacancies, many=True)
        return Response(serializer.data)
