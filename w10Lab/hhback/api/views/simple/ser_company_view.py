from django.http import JsonResponse

from api.models import Company, Vacancy

from api.serializers import CompanySerializer

from django.views.decorators.csrf import csrf_exempt

import json

from api.serializers import VacancySerializer


@csrf_exempt
def companies_list(request):
    
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True) 
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = json.loads(request.body)
        serializer = CompanySerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors)


@csrf_exempt
def company_detail(request, company_id):

    try:
        company = Company.objects.get(id=company_id)
    except:
        return JsonResponse({'message': 'this company does not exist'})

    if request.method == 'GET':
        serializer = CompanySerializer(company)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        data = json.loads(request.body)
        serializer = CompanySerializer(instance=company, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors)

    elif request.method == 'DELETE':
        company.delete()
        return JsonResponse({'message': 'deleted successfully'})


@csrf_exempt
def company_vacancies_list(request, company_id):

    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        vacancies = [vacancy for vacancy in vacancies if vacancy.company.id == company_id]
        serializer = VacancySerializer(vacancies, many=True)
        return JsonResponse(serializer.data, safe=False)
