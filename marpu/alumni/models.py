from django.db import models

# Create your models here.
class Alumni(models.Model):
    name=models.CharField(max_length=100)
    funds_raised=models.DecimalField(max_digits=10 ,decimal_places=2)

    def __str__(self):
        return self.name
        