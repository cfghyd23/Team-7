from django.shortcuts import redirect, render, HttpResponse
from interns.models import Intern, User
from django.contrib.auth import authenticate, login, logout
from django.contrib.messages import constants as messages
from django.db import IntegrityError
import json
from django.views.decorators.csrf import csrf_exempt
from django.template.loader import render_to_string
from django.core.mail import EmailMessage

def home(request):
    return HttpResponse('hello')


# marpu foundation
@csrf_exempt
def register(request):
    #if request.method == "POST":
        diction=json.loads(request.body)
        name = diction['name']
        print(name)
        password = diction['password']
        print(password)
        mobile_no = diction['mobile']
        email = diction['email']
        # Ensure password matches confirmation
        # confirmation = request.POST["confirmation"]
        # if password != confirmation:
        #     messages.error(request, 'Password not matched. Try again')
            
        #     return redirect('register')

        # Attempt to create new user
        try:
            user=User.objects.create(email=email, password=password, username=name)
            user.save()
            intern=Intern.objects.create(name=name, user=user, email=email, password=password, company='marpu', mobile_no=mobile_no)\
            
            mail_subject='Successfully Registered !!'
            message= render_to_string('success.html',{
                'name':name,
            })
            to_email=email
            send_email=EmailMessage(mail_subject, message, to=[to_email])
            send_email.send()
            print("email sent")

        except IntegrityError as e:
            print(e)
            return HttpResponse("email already taken")
            
        login(request, user)
        return HttpResponse('LOGED IN')
    # else:
    #     return render(request, "register.html")


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
        # user1 = {}
        # user1["funds"] = 100
        # user1["name"] = 'kdsjchne'

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
            # filteredUsers = []
            # filteredUsers.append(user1)
            # response_data['filteredUsers'] = filteredUsers

            return HttpResponse(json.dumps(response_data), content_type="application/json")
        else:
            # return HttpResponse("Invalid email or password")
            response_data['flag']=0
            response_data['user']=None
            return HttpResponse(json.dumps(response_data), content_type="application/json")
    # else:
        # return render(request, "login.html")

def interndata(request):
     diction=json.loads(request.body)
     username = diction['username']
     intern_obj=Intern.objects.get(name='khushi')
     money=intern_obj.funds_raised
     joining=intern_obj.join_date
     dic_send={
          'money':money,
          'joining':joining
     }
     print(money)
     print(joining)
     return HttpResponse(json.dumps(dic_send), content_type="application/json")
     


