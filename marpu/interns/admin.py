from django.contrib import admin
from .models import Intern
# Register your models here.

class InternAdmin(admin.ModelAdmin):
    list_display=('name', 'email')

admin.site.register(Intern)
