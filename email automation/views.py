from django.core.mail import EmailMessage
from django.conf import settings
from django.template.loader import render_to_string

def success(request,uid):
    template = render_to_string('email_template.html',{'name:request.user.profile.name'})
    email = EmailMessage(
    template,
    settings.EMAIL_HOST-USER,
    [request.user.profile.email],
)