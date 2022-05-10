from django.shortcuts import render


# Create your views here.

def index(request):
    return render(request, 'blank.html')


def write(request):
    return render(request, 'write.html')


def write2(request):
    return render(request, 'write2.html')


def jsmindpage(request):
    return render(request, 'jsmindpage.html')
