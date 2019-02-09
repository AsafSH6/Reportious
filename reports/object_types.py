from graphene.types import generic
from graphene_django.types import DjangoObjectType
from django.contrib.auth.models import User

from reports.models import WorkingHoursReport


class UserType(DjangoObjectType):
    class Meta:
        model = User
        exclude_fields = ('password', )


class WorkingHoursReportType(DjangoObjectType):
    days = generic.GenericScalar()

    class Meta:
        model = WorkingHoursReport

