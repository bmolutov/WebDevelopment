from rest_framework import serializers

from api.models import Company, Vacancy


class CompanySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    description = serializers.CharField()
    city = serializers.CharField()
    address = serializers.CharField()

    def create(self, validated_data):
        company = Company.objects.create(
            name=validated_data.get('name'),
            description=validated_data.get('description'),
            city=validated_data.get('city'),
            address=validated_data.get('address')
        )
        return company

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name')
        instance.description = validated_data.get('description')
        instance.city = validated_data.get('city')
        instance.address = validated_data.get('address')
        instance.save()
        return instance


class CompanySerializer2(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ('id', 'name', 'description', 'city', 'address')


class VacancySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    description = serializers.CharField()
    salary = serializers.FloatField()
    company = CompanySerializer()

    def create(self, validated_data):
        vacancy = Vacancy.objects.create(
            name=validated_data.get('name'),
            description=validated_data.get('description'),
            salary=validated_data.get('salary'),
            company=validated_data.get('company')
        )
        return vacancy

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name')
        instance.description = validated_data.get('description')
        instance.salary = validated_data.get('salary')
        instance.company = validated_data.get('company')
        instance.save()
        return instance


class VacancySerializer2(serializers.ModelSerializer):
    company = CompanySerializer2()
    class Meta:
        model = Vacancy
        fields = ('id', 'name', 'description', 'salary', 'company')
