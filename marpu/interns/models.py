from django.db import models

# Create your models here.
from django.contrib.auth.models import User

# Create your models here.


class Intern(models.Model):
    name=models.CharField(max_length=100, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    email=models.EmailField(max_length=100, unique=True)
    password=models.CharField(max_length=100)
    
    company = models.CharField(max_length=100)
    mobile_no = models.CharField(max_length=20)
    funds_raised=models.IntegerField(blank=True, null=True)
    join_date = models.DateTimeField(auto_now_add = True)
    leave_date= models.DateTimeField(auto_now=True)
    
    
    def __str__(self):
        return self.name
    
    