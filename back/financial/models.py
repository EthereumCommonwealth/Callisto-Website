from django.db import models


class FinancialReport(models.Model):
    financial_date = models.DateField()
    financial_report = models.FileField(
        upload_to='financial-report'
    )

    def __str__(self):
        return f'Report {self.financial_date.month} {self.financial_date.year}'

    def get_url(self):
        if self.financial_report:
            return self.financial_report.url
        return ''
