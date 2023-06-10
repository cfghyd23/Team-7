from django.shortcuts import redirect, render, HttpResponse
from interns.models import Intern, User
from django.contrib.auth import authenticate, login, logout
from django.contrib.messages import constants as messages
from django.db import IntegrityError



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


def login_view(request):
    if request.method == "POST":

        # Attempt to sign user in
        username = request.POST["username"]
        password = request.POST["password"]
        user=User.objects.filter(username=username, password = password).get()
        print(user)
        print(password)
        # Check if authentication successful
        


        if user is not None:
            login(request, user)
            return HttpResponse("User Logged in")
        else:
            return HttpResponse("Invalid email or password")
    else:
        return render(request, "login.html")
