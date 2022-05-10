import django_filters.rest_framework
from django.db.models import Q

from .models import Department, Contact


class DepartmentFilter(django_filters.rest_framework.FilterSet):
    name = django_filters.rest_framework.CharFilter(method='filter_department_name')

    def filter_department_name(self, queryset, name, value):
        # len(value) >= 2 减少判断, 提升性能
        print(len(value))
        if value.isascii():
            return queryset.filter(Q(pinyin__icontains=value) | Q(short_pinyin__icontains=value))
        return queryset.filter(name__icontains=value)

    class Meta:
        model = Department
        fields = ['name']


class ContactFilter(django_filters.rest_framework.FilterSet):
    name = django_filters.rest_framework.CharFilter(method='filter_contact_name')

    # telephone = django_filters.rest_framework.CharFilter(method='filter_contact_telephone')

    def filter_contact_name(self, queryset, name, value):
        print(len(value))
        # len(value) >= 2 减少判断, 提升性能
        if value.isdigit():
            return queryset.filter(telephone__icontains=value)
        if value.isascii():
            return queryset.filter(Q(pinyin__icontains=value) | Q(short_pinyin__icontains=value))
        return queryset.filter(name__icontains=value)

    # def filter_contact_telephone(self, queryset, name, value):
    #     # len(value) >= 4 减少判断， 提升性能
    #     if not value.isdigit():
    #         return queryset.none()
    #     return queryset.filter(telephone__icontains=value)

    class Meta:
        model = Contact
        # fields = ['name', 'telephone']
        fields = ['name', ]
