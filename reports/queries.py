import graphene
from graphql_jwt.decorators import login_required

from reports.models import WorkingHoursReport
from reports.object_types import WorkingHoursReportType


class WorkingHoursReportQuery(object):
    working_hours_reports = graphene.List(WorkingHoursReportType, token=graphene.String(required=True))

    @login_required
    def resolve_working_hours_reports(self, info, **kwargs):
        user = info.context.user

        if not user or user.is_anonymous:
            raise Exception('Not logged in.')

        return WorkingHoursReport.objects.filter(user=user)


class Query(WorkingHoursReportQuery):
    pass
