from django.contrib.auth.models import AbstractUser
from django.db import models
# https://docs.djangoproject.com/en/2.1/topics/i18n/translation/#lazy-translation
# https://stackoverflow.com/questions/22516017/what-is-ugettext-and-ugettext-lazy-and-why-to-use-them-in-django
from django.utils.translation import ugettext_lazy as _

# Create your models here.
class User(AbstractUser):
    username = models.CharField(max_length=100, unique=False)
    email = models.EmailField(_('email address'), unique=True)

    USERNAME_FIELD = 'email'

    # https://docs.djangoproject.com/en/2.2/topics/auth/customizing/#django.contrib.auth.models.CustomUser.REQUIRED_FIELDS
    REQUIRED_FIELDS = ['username']
