import graphene
from graphql_jwt.decorators import login_required

from reports.models import WorkingHoursReport
from reports.object_types import WorkingHoursReportType


class CreateWorkingHoursReport(graphene.Mutation):
    class Arguments:
        token = graphene.String(required=True)
        date = graphene.DateTime()
        days = graphene.JSONString()
        driving_in_km = graphene.Int()

    created_working_hours_report = graphene.Field(WorkingHoursReportType)

    @login_required
    def mutate(self, info, token, date, days, driving_in_km):
        user = info.context.user
        if not user or user.is_anonymous:
            raise Exception('Not logged in.')

        report = WorkingHoursReport(user=user,
                                    date=date,
                                    days=days,
                                    driving_in_km=driving_in_km)
        report.full_clean()
        report.save()
        return CreateWorkingHoursReport(created_working_hours_report=report)


class SaveWorkingHoursReport(graphene.Mutation):
    class Arguments:
        token = graphene.String(required=True)
        id = graphene.Int()
        days = graphene.JSONString()
        driving_in_km = graphene.Int()

    saved_working_hours_report = graphene.Field(WorkingHoursReportType)

    @login_required
    def mutate(self, info, token, id, days, driving_in_km):
        working_hour_report = WorkingHoursReport.objects.get(pk=id)
        working_hour_report.days = days
        working_hour_report.driving_in_km = driving_in_km

        working_hour_report.full_clean()
        working_hour_report.save()
        return SaveWorkingHoursReport(saved_working_hours_report=working_hour_report)


class Mutation(object):
    create_working_hours_report = CreateWorkingHoursReport.Field()
    save_working_hours_report = SaveWorkingHoursReport.Field()
