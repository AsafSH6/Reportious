import datetime as dt
from io import BytesIO

import pandas as pd
from StyleFrame import StyleFrame, Styler

from django.db import models
from django.contrib.auth.models import User
from django.contrib.postgres.fields import JSONField

from reportious.validators import validate_report_working_days


SECONDS_IN_HOUR = 60 * 60


class WorkingHoursReport(models.Model):
    user = models.ForeignKey(User,
                             related_name='working_hours_reports',
                             on_delete=models.CASCADE)
    date = models.DateField(default=dt.date.today)
    days = JSONField(validators=[validate_report_working_days])
    driving_in_km = models.PositiveIntegerField()

    @staticmethod
    def _working_day_hour_format_to_time_object(day_hour):
        return dt.datetime.strptime(day_hour, '%H:%M')

    @classmethod
    def _total_working_hours_in_day(cls, day):
        start_hour = cls._working_day_hour_format_to_time_object(day['start_hour'])
        end_hour = cls._working_day_hour_format_to_time_object(day['end_hour'])

        return end_hour - start_hour

    @staticmethod
    def _is_working_day(day):
        return all(bool(day[field]) for field in ['start_hour', 'end_hour', 'amount'])

    def only_working_days(self):
        return (day for day in self.days if self._is_working_day(day))

    def total_working_days(self):
        return len(list(self.only_working_days()))

    def total_working_hours(self):
        working_days = self.only_working_days()

        return sum(self._total_working_hours_in_day(working_day).total_seconds()
                   for working_day in working_days) / SECONDS_IN_HOUR

    def as_xlsx_file(self):
        df = pd.DataFrame(data=self.days,
                          columns=['number', 'start_hour', 'end_hour', 'amount'])
        df.loc[len(df)] = [''] * 4  # Empty row.

        total_working_days = self.total_working_days()
        total_working_days_row = ['סה"כ ימים', total_working_days, '', '']
        df.loc[len(df)] = total_working_days_row

        total_working_hours = self.total_working_hours()
        total_working_hours_row = ['סה"כ שעות', total_working_hours, '', '']
        df.loc[len(df)] = total_working_hours_row

        total_driving_km_row = ['נסיעות', self.driving_in_km, 'ק"מ', '']
        df.loc[len(df)] = total_driving_km_row

        df.columns = ['יום', 'שעת התחלה', 'שעת סיום', 'מספר גנים']
        sf = StyleFrame(df)
        sf.set_column_width_dict({
            ('שעת התחלה', 'שעת סיום'): 16,
        })
        sf.apply_style_by_indexes(indexes_to_style=sf.index[-3:],
                                  styler_obj=Styler(bold=True),
                                  cols_to_style='יום')
        output = BytesIO()
        ew = StyleFrame.ExcelWriter(output)
        sf.to_excel(ew,
                    right_to_left=True,
                    row_to_add_filters=0,
                    ).save()

        return output

