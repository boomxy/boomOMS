from django.shortcuts import render
from rest_framework.viewsets import generics, ReadOnlyModelViewSet
from rest_framework import filters
import django_filters.rest_framework

from .models import Department, Contact
from .serializers import AllDepartmentSerializer, AllContactSerializer
from .filters import DepartmentFilter, ContactFilter


# ReadOnlyModelViewSet  use

# Create your views here.
class AllDepartmentViewSet(ReadOnlyModelViewSet):
    queryset = Department.objects.all()
    serializer_class = AllDepartmentSerializer
    filter_fields = ('name', )
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend, ]
    filterset_class = DepartmentFilter

    # def get_queryset(self):
    #     queryset = Department.objects.all()
    #     level = self.request.query_params.get('level', None)
    #     if level is not None:
    #         queryset = Department.objects.filter(level=level).all()
    #     return queryset


class AllContactViewSet(ReadOnlyModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = AllContactSerializer
    filter_fields = ('name', 'telephone')
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend, ]
    filterset_class = ContactFilter
