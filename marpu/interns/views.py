from django.shortcuts import redirect, render, HttpResponse
from interns.models import Intern, User
from django.contrib.auth import authenticate, login, logout
from django.contrib.messages import constants as messages
from django.db import IntegrityError
import json
from django.views.decorators.csrf import csrf_exempt

def home(request):
    return HttpResponse('hello')


# marpu foundation
def register(request):
    if request.method == "POST":
        name=request.POST['name']
        mobile = request.POST["mobile_no"]
        email = request.POST["email"]
        # Ensure password matches confirmation
        password = request.POST["password"]
        confirmation = request.POST["confirmation"]
        if password != confirmation:
            messages.error(request, 'Password not matched. Try again')
            
            return redirect('register')

        # Attempt to create new user
        try:
            user=User.objects.create(email=email, password=password, username=name)
            user.save()
            intern=Intern.objects.create(name=name, user=user, email=email, password=password, company='marpu', mobile_no=mobile)
            
        except IntegrityError as e:
            print(e)
            return HttpResponse("email already taken")
            
        login(request, user)
        return HttpResponse('LOGED IN')
    else:
        return render(request, "register.html")


@csrf_exempt
def login_view(request):
    # if request.method == "POST":
        print(request.body)
        # Attempt to sign user in
        diction=json.loads(request.body)
        username = diction['username']
        password = diction["password"]
        print(request.POST)
        user=User.objects.filter(username=username, password = password).get()
        print(user)
        print(password)
        response_data={}

        # Check if authentication successful
        print(username)
        print(password)


        if user is not None:
            # login(request, user)
            # return HttpResponse("User Logged in")
            response_data['flag']=1
            response_data['user']=user.username
            return HttpResponse(json.dumps(response_data), content_type="application/json")
        else:
            # return HttpResponse("Invalid email or password")
            response_data['flag']=0
            response_data['user']=None
            return HttpResponse(json.dumps(response_data), content_type="application/json")
    # else:
        # return render(request, "login.html")
