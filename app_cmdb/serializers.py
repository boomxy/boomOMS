from django.db.models import Max

from rest_framework.serializers import HyperlinkedModelSerializer
from .models import Department, Contact


class RecursiveSerializer(HyperlinkedModelSerializer):
    def to_representation(self, value):
        # self.parent.__class__  # ListSerializer 因为 many=True 选项
        # self.parent.parent.__class__ # AllDepartmentSerializer 反向查找到 parent
        serializer = AllDepartmentSerializer(value, context=self.context)
        return serializer.data


class AllDepartmentSerializer(HyperlinkedModelSerializer):
    sub = RecursiveSerializer(many=True)

    class Meta:
        model = Department
        # fields = '__all__'
        fields = ['id', 'url', 'name', 'pinyin', 'short_pinyin', 'level', 'superior_department', 'sub', 'position']


class AllContactSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Contact
        fields = ['id', 'url', 'name', 'pinyin', 'short_pinyin', 'department', 'telephone', 'email', 'etc']
