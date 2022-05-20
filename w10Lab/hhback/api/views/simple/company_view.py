from django.http import JsonResponse

from api.models import Company, Vacancy

from django.views.decorators.csrf import csrf_exempt

import json


@csrf_exempt
def companies_list(request):

    if request.method == 'GET':
        companies = Company.objects.all()
        companies_json = [company.to_json() for company in companies]
        return JsonResponse(companies_json, safe=False)

    elif request.method == 'POST':
        data = json.loads(request.body)
        try:
            company = Company.objects.create(
                name=data['name'],
                description=data['description'],
                city=data['city'],
                address=data['address']
            )
        except Exception as e:
            return JsonResponse({'message': str(e)})
        return JsonResponse(company.to_json())


@csrf_exempt
def company_detail(request, company_id):

    try:
        company = Company.objects.get(id=company_id)
    except:
        return JsonResponse({'message': 'this company does not exist'})
        
    if request.method == 'GET':
        return JsonResponse(company.to_json())

    elif request.method == 'PUT':
        data = json.loads(request.body)
        company.name = data['name']
        company.description = data['description']
        company.city = data['city']
        company.address = data['address']
        company.save()
        return JsonResponse(company.to_json())


def company_vacancies_list(request, company_id):

    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        vacancies = [vacancy for vacancy in vacancies if vacancy.company.id == company_id]
        vacancies_json = [vacancy.to_json() for vacancy in vacancies]
        return JsonResponse(vacancies_json, safe=False)
