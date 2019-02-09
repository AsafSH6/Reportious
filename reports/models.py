from django.db import models
from django.contrib.auth.models import User
from django.contrib.postgres.fields import JSONField

from reportious.validators import validate_report_working_days


class WorkingHoursReport(models.Model):
    user = models.ForeignKey(User,
                             related_name='working_hours_reports',
                             on_delete=models.CASCADE)
    date = models.DateField(auto_now_add=True)
    days = JSONField(validators=[validate_report_working_days])
    driving_in_km = models.PositiveIntegerField()

    def as_xlsx_file(self):
        pass
