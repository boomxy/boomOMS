from django.core.exceptions import PermissionDenied
from django.http import Http404
from app_knowledge_base.models import SysSetting


def superuser_only(func):
    # 限制 超级管理员访问
    def _inner(request, *args, **kwargs):
        if request.user.is_authenticated:
            if not request.user.is_superuser:
                raise PermissionDenied
        else:
            raise PermissionDenied
        return func(request, *args, **kwargs)

    return _inner


def open_register(func):
    # 开放注册
    def _inner(request, *args, **kwargs):
        close_register = SysSetting.objects.filter(name='close_register')
        if not close_register:
            return func(request, *args, **kwargs)
        elif close_register[0].value == 'on':
            raise Http404
        return func(request, *args, **kwargs)

    return _inner


def check_headers(func):
    # 请求头检查
    def _inner(request, *args, **kwargs):
        metas = request.META
        if 'HTTP_USER_AGENT' not in metas:
            raise Http404
        return func(request, *args, **kwargs)

    return _inner


def allow_report_file(func):
    # 允许前台文集导出
    def _inner(request, *args, **kwargs):
        enable_project_report = SysSetting.objects.filter(name='enable_project_report')
        if not enable_project_report:
            return func(request, *args, **kwargs)
        elif enable_project_report[0].value == 'on':
            raise Http404
        return func(request, *args, **kwargs)

    return _inner