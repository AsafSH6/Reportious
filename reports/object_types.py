from graphene_django.types import DjangoObjectType
from django.contrib.auth.models import User

from reports.models import WorkingHoursReport


class UserType(DjangoObjectType):
    class Meta:
        model = User
        exclude_fields = ('password', )


class WorkingHoursReportType(DjangoObjectType):
    class Meta:
        model = WorkingHoursReport
