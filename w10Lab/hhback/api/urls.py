from django.urls import path
from api.views.using_drf.cbv_company import CompanyDetailAPIView, CompanyListAPIView, CompanyVacanciesListAPIView
from api.views.using_drf.cbv_vacancy import TopTenVacanciesAPIView, VacancyDetailAPIView, VacancyListAPIView

from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('login/', obtain_jwt_token),

    path('companies/', CompanyListAPIView.as_view()),
    path('companies/<int:pk>/', CompanyDetailAPIView.as_view()),
    path('companies/<int:pk>/vacancies/', CompanyVacanciesListAPIView.as_view()),
    
    path('vacancies/', VacancyListAPIView.as_view()),
    path('vacancies/<int:pk>/', VacancyDetailAPIView.as_view()),
    path('vacancies/top_ten/', TopTenVacanciesAPIView.as_view()),
]