from rest_framework.response import Response
from rest_framework.views import APIView

from api.serializers import CompanySerializer2
from api.models import Company
from api.models import Vacancy
from api.serializers import VacancySerializer2


class VacancyListAPIView(APIView):

    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer2(vacancies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = VacancySerializer2(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)


class VacancyDetailAPIView(APIView):

    def get_object(self, pk):
        try:
            return Vacancy.objects.get(id=pk)
        except Exception:
            return Response({'message': 'an error occurred'})

    def get(self, request, pk=None):
        vacancy = self.get_object(pk)
        serializer = VacancySerializer2(vacancy)
        return Response(serializer.data)

    def put(self, request, pk=None):
        vacancy = self.get_object(pk)
        serializer = VacancySerializer2(instance=vacancy, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    
    def delete(self, request, pk=None):
        vacancy = self.get_object(pk)
        vacancy.delete()
        return Response({'message': 'deleted'})


class TopTenVacanciesAPIView(APIView):

    def get(self, request):
        vacancies = Vacancy.objects.order_by('-salary')
        vacancies = vacancies[:10]
        serializer = VacancySerializer2(vacancies, many=True)
        return Response(serializer.data)
