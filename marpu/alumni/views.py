from django.shortcuts import redirect, render, HttpResponse
from .models import Alumni
from django.contrib.auth import authenticate, login, logout
from django.contrib.messages import constants as messages
from django.db import IntegrityError
import json
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
def alumni(request):
    # new_dict={}
    alum=Alumni.objects.all()
    # for i in alum:
        
    #     temp_dict={'name': i.name,
    #                'funds_raised': i.funds_raised }
    #     print(temp_dict)
    #     new_dict.update(temp_dict)
    # print(new_dict)
    context = {
        'alums': alum,
    }
    return render(request, 'alumnitable.html' ,context)
    # return HttpResponse(json.dumps(new_dict), content_type="application/json")


    
