# Generated by Django 4.0.4 on 2022-04-16 12:29

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Company',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('description', models.TextField(default='')),
                ('city', models.CharField(max_length=100)),
                ('address', models.TextField(default='')),
            ],
        ),
        migrations.CreateModel(
            name='Vacancy',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('description', models.TextField(default='')),
                ('salary', models.FloatField(default=0)),
                ('company', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.company')),
            ],
        ),
    ]
