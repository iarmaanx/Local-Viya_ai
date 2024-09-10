from django.urls import path
from django.http import HttpResponse
from . import views

app_name = "home"
urlpatterns = [
     path('', views.index, name='index'),
    path('register', views.register, name='register'),
    path('login', views.login, name="login"),
    path('aboutUs/', views.aboutUs, name='about_us'),
    path('roadmap', views.roadmap, name='roadmap'),
]