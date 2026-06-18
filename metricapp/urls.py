from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('about/', views.about, name='about'),
    path('services/', views.services, name='services'),
    path('services/single/', views.single_service, name='single_service'),
    path('privacy-policy/', views.privacy, name='privacy'),
    path('team/', views.team, name='team'),
    path('portfolio/', views.portfolio, name='portfolio'),
    path('alignment/', views.alignment, name='alignment'),
    path('construction/', views.construction, name='construction'),
    path('contact/', views.contact, name='contact'),
]
