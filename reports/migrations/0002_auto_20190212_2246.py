# Generated by Django 2.1.7 on 2019-02-12 20:46

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reports', '0001_working_hours_report'),
    ]

    operations = [
        migrations.AlterField(
            model_name='workinghoursreport',
            name='date',
            field=models.DateField(default=datetime.date.today),
        ),
    ]
