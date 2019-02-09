import graphene
from django.contrib.auth.models import User

from reports.models import WorkingHoursReport
from reports.object_types import UserType, WorkingHoursReportType


class CreateUser(graphene.Mutation):
    class Arguments:
        username = graphene.String()
        password = graphene.String()

    user = graphene.Field(UserType)
    created = graphene.Boolean()

    def mutate(self, info, username, password):
        user = User.objects.create_user(username=username, password=password)
        return CreateUser(user=user, created=True)


class CreateWorkingHoursReport(graphene.Mutation):
    class Arguments:
        days = graphene.JSONString()
        driving_in_km = graphene.Int()

    working_hours_report = graphene.Field(WorkingHoursReportType)

    def mutate(self, info, days, driving_in_km):
        user = info.context.user
        if not user or user.is_anonymous:
            raise Exception('Not logged in.')

        report = WorkingHoursReport(user=user,
                                    days=days,
                                    driving_in_km=driving_in_km)
        report.full_clean()
        report.save()
        return CreateWorkingHoursReport(working_hours_report=report)


class Mutation(object):
    create_user = CreateUser.Field()
    create_working_hours_report = CreateWorkingHoursReport.Field()
