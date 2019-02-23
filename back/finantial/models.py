from django.db import models


class FinantialReport(models.Model):
    finantial_date = models.DateField()
    finantial_report = models.FileField(
        upload_to='finantial-report'
    )

    def __str__(self):
        return f'Report {self.finantial_date.month} {self.finantial_date.year}'
