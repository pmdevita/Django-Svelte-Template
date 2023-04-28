from django.urls import path
from .views import *

urlpatterns = [
    path("", example_view, name="example"),
]

