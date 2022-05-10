from django.conf import settings

from app_knowledge_base.models import SysSetting


def sys_setting(request):
    setting_dict = {'version': settings.VERSIONS,
                    'debug': settings.DEBUG}
    data = SysSetting.objects.filter(types__in=['basic', "doc"])
    setting_dict.update(dict(((i.name, i.value) for i in data)))
    return setting_dict
