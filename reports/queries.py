import graphene

from reports.models import WorkingHoursReport
from reports.object_types import UserType, WorkingHoursReportType


class UserQuery(object):
    me = graphene.Field(UserType)

    def resolve_me(self, info):
        user = info.context.user

        if user.is_anonymous:
            raise Exception('Not logged in.')

        return user


class WorkingHoursReportQuery(object):
    working_hours_reports = graphene.List(WorkingHoursReportType)

    def resolve_working_hours_reports(self, info):
        user = info.context.user

        if not user or user.is_anonymous:
            raise Exception('Not logged in.')

        return WorkingHoursReport.objects.filter(user=user)


class Query(UserQuery, WorkingHoursReportQuery):
    pass
