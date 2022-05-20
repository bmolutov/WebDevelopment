from django.http import JsonResponse
from django.shortcuts import render

from api.models import Company, Vacancy

def companies_list(request):
    companies = Company.objects.all()
    companies_json = [company.to_json() for company in companies]
    return JsonResponse(companies_json, safe=False)

def company_detail(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except:
        return JsonResponse({'message': 'this company does not exist'})
    return JsonResponse(company.to_json())

def company_vacancies_list(request, company_id):
    vacancies = Vacancy.objects.all()
    vacancies = [vacancy for vacancy in vacancies if vacancy.company.id == company_id]
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)


def vacancies_list(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)

def vacancy_detail(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
    except:
        return JsonResponse({'message': 'this vacancy does not exist'})
    return JsonResponse(vacancy.to_json())

def top_ten_vacancies(request):
    vacancies = Vacancy.objects.order_by('-salary')
    vacancies = vacancies[:10]
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)
