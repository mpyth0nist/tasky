from django.shortcuts import render
from .models import Tasks
# Create your views here.

def index(request):
    return render(request, 'tasky/index.html', {
        "tasks":Tasks.objects.all()})