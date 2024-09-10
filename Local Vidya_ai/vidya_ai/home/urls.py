from django.urls import path
from django.http import HttpResponse
from . import views

app_name = "home"
urlpatterns = [
     path('', views.index, name='index'),
]
