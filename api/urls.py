from django.urls import path
from .views import pdf_reader_view

urlpatterns = [
    path('pdf-reader/',  pdf_reader_view, name='index'),
]
