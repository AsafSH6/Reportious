import base64

import graphene
from graphene.types import generic
from graphene_django.types import DjangoObjectType

from reports.models import WorkingHoursReport


class WorkingHoursReportType(DjangoObjectType):
    days = generic.GenericScalar()
    report_file = graphene.String()

    class Meta:
        model = WorkingHoursReport

    def resolve_report_file(self, info):
        report_file_base64 = base64.b64encode(self.as_xlsx_file().getvalue())

        return report_file_base64

