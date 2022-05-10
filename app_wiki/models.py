from django.db import models
from django.contrib.auth import get_user_model

from app_cmdb.models import System
from app_knowledge_base.models import Doc

User = get_user_model()

# TODO 问卷 答案
# Create your models here.


class APICenter(models.Model):
    """
    接口
    使用固定 doc 模板
    """
    name = models.CharField(max_length=100, verbose_name="接口名称", help_text="接口名称")
    system = models.ForeignKey(to=System, on_delete=models.CASCADE, verbose_name='关联系统', help_text='关联系统')
    doc = models.ForeignKey(to=Doc, null=True, blank=True, on_delete=models.SET_NULL, verbose_name="接口文档",
                            help_text="接口文档")
    pressure = models.BigIntegerField(verbose_name="压力数据", help_text="压力数据")
    update_time = models.DateTimeField(auto_now=True, verbose_name='接口更新时间', help_text='接口更新时间')

    class Meta:
        verbose_name = "API"
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.name

    def get_template(self):
        tmp = f'''
        this is template{self.name}
        '''
        return tmp


class Script(models.Model):
    """
    脚本
    使用固定 doc 模板
    """
    name = models.CharField(max_length=100, help_text="脚本名称", verbose_name="脚本名称")
    description = models.CharField(max_length=250, help_text="脚本描述", verbose_name="脚本描述")
    user = models.ForeignKey(to=User, on_delete=models.DO_NOTHING, help_text="创建用户", verbose_name="创建用户")
    system = models.ForeignKey(to=System, on_delete=models.DO_NOTHING, help_text="所属系统", verbose_name="所属系统")
    doc = models.OneToOneField(to=Doc, on_delete=models.DO_NOTHING, verbose_name="脚本内容", help_text="脚本内容")
    update_time = models.DateTimeField(auto_now=True, verbose_name='更新时间', help_text='更新时间')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "脚本"
        verbose_name_plural = verbose_name

    def get_template(self):
        tmp = f'''
        this is template{self.name}
        '''
        return tmp


class Problem(models.Model):
    """
    事件问题
    使用固定 doc 模板
    """
    name = models.CharField(max_length=100, help_text="事件问题", verbose_name="事件问题")
    description = models.CharField(max_length=250, help_text="事件问题概述", verbose_name="事件问题概述")
    mode = models.IntegerField(choices=((1, "事件"), (2, "问题"), (3, "其它")), verbose_name="类型", help_text="类型")
    solve = models.BooleanField(default=False, verbose_name="是否结束", help_text="是否结束")
    user = models.ForeignKey(to=User, on_delete=models.DO_NOTHING, help_text="创建用户", verbose_name="创建用户")
    person = models.ManyToManyField(to=User, help_text="创建用户", verbose_name="创建用户")
    system = models.ManyToManyField(to=System, on_delete=models.DO_NOTHING, help_text="关联系统", verbose_name="关联系统")
    doc = models.OneToOneField(to=Doc, on_delete=models.DO_NOTHING, verbose_name="事件问题内容", help_text="事件问题内容")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "事件问题"
        verbose_name_plural = verbose_name

    def get_template(self):
        tmp = f'''
        this is template{self.name}
        '''
        return tmp


class Meeting(models.Model):
    """
    会议
    使用固定 doc 模板
    """
    name = models.CharField(max_length=100, help_text="会议名称", verbose_name="事件会议名称")
    description = models.CharField(max_length=250, help_text="会议概述", verbose_name="会议概述")
    address = models.CharField(max_length=100, help_text="会议地点", verbose_name="会议地点")
    start_time = models.DateTimeField(auto_now_add=True, verbose_name="开始时间", help_text="开始时间")
    user = models.ForeignKey(to=User, on_delete=models.DO_NOTHING, help_text="创建用户", verbose_name="创建用户")
    person = models.ManyToManyField(to=User, help_text="参与用户", verbose_name="参与用户")
    doc = models.OneToOneField(to=Doc, on_delete=models.DO_NOTHING, verbose_name="会议内容", help_text="会议内容")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "事件问题"
        verbose_name_plural = verbose_name

    def get_template(self):
        tmp = f'''
        this is template{self.name}
        '''
        return tmp


class Operation(models.Model):
    """
    关联文档某一项
    """
    pass


class Case(models.Model):
    """
    项目
    """