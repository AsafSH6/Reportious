from graphene.types import generic
from graphene_django.types import DjangoObjectType

from reports.models import WorkingHoursReport


class WorkingHoursReportType(DjangoObjectType):
    days = generic.GenericScalar()

    class Meta:
        model = WorkingHoursReport

