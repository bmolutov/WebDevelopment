from rest_framework.response import Response
from rest_framework.views import APIView

from api.serializers import CompanySerializer2
from api.models import Company
from api.models import Vacancy
from api.serializers import VacancySerializer2

from rest_framework.permissions import IsAuthenticated


class CompanyListAPIView(APIView):

    def get(self, request):
        companies = Company.objects.all()
        serializer = CompanySerializer2(companies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CompanySerializer2(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    permission_classes = (IsAuthenticated,)


class CompanyDetailAPIView(APIView):

    def get_object(self, pk):
        try:
            return Company.objects.get(id=pk)
        except Exception:
            return Response({'message': 'an error occurred'})

    def get(self, request, pk=None):
        company = self.get_object(pk)
        serializer = CompanySerializer2(company)
        return Response(serializer.data)

    def put(self, request, pk=None):
        company = self.get_object(pk)
        serializer = CompanySerializer2(instance=company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def delete(self, request, pk=None):
        company = self.get_object(pk)
        company.delete()
        return Response({'message': 'deleted'})

    permission_classes = (IsAuthenticated,)


class CompanyVacanciesListAPIView(APIView):

    def get(self, request, pk=None):
        vacancies = Vacancy.objects.all()
        vacancies = [vacancy for vacancy in vacancies if vacancy.company.id == pk]
        serializer = VacancySerializer2(vacancies, many=True)
        return Response(serializer.data)

    permission_classes = (IsAuthenticated,)