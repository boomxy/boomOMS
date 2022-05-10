from django.db import models
from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType
from django.contrib.auth import get_user_model

from taggit.managers import TaggableManager

User = get_user_model()


class UserToken(models.Model):
    # 用户 Token
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    token = models.CharField(verbose_name="token", max_length=250, unique=True)

    def __str__(self):
        return self.user

    class Meta:
        verbose_name = '用户 Token'
        verbose_name_plural = verbose_name


class WaterMark(models.Model):
    types = models.IntegerField(verbose_name="水印类型", choices=((1, "文字水印"), (2, "图片水印")), default=1)
    content = models.CharField(verbose_name="文字水印内容", max_length=250, default="")
    image = models.ImageField(upload_to='media/images/%Y/%m', verbose_name="图片水印", null=True, blank=True)


class Collection(models.Model):
    name = models.CharField("文集名称", max_length=50)
    icon = models.ImageField(upload_to='media/images/%Y/%m', verbose_name="文集图标", blank=True, null=True, default=None)
    description = models.TextField(verbose_name="介绍")
    toc = models.TextField(verbose_name="文集文档层级目录", null=True, blank=True)
    # role = models.IntegerField(choices=((0, "公开"), (1, "私密"), (2, "指定用户可见"), (3, "密码访问")),
    #                            verbose_name="文集权限", default=0)
    # role_value = models.TextField(verbose_name="文集权限值", null=True, blank=True)
    watermark = models.ForeignKey(WaterMark, on_delete=models.SET_NULL, null=True, blank=True)
    top = models.BooleanField(verbose_name="置顶", default=False)
    create_user = models.ForeignKey(User, on_delete=models.CASCADE)
    create_time = models.DateTimeField(auto_now_add=True)
    modify_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "文集"
        verbose_name_plural = verbose_name


class Doc(models.Model):
    name = models.CharField(verbose_name="文档标题", max_length=100)
    content = models.TextField(verbose_name="文档内容", null=True, blank=True)
    collection = models.ForeignKey(Collection, on_delete=models.CASCADE, null=True, blank=True)
    status = models.IntegerField(choices=((0, "草稿"), (1, "发布"), (2, "回收站"), (3, "删除")), verbose_name="文档状态")
    creat_user = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name="作者", help_text="作者")
    create_time = models.DateTimeField(auto_now_add=True, verbose_name="创建时间")
    modify_time = models.DateTimeField(auto_now=True, verbose_name="修改时间", help_text="修改时间")
    tags = TaggableManager()

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = '文档'
        verbose_name_plural = verbose_name


class DocHistory(models.Model):
    # 文档历史
    doc = models.ForeignKey(Doc, on_delete=models.CASCADE, verbose_name="关联文档")
    his_content = models.TextField(null=True, blank=True, verbose_name="历史编辑内容")
    create_user = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name="作者")
    create_time = models.DateTimeField(auto_now_add=True, verbose_name="创建时间")

    def __str__(self):
        return self.doc

    class Meta:
        verbose_name = '文档历史'
        verbose_name_plural = verbose_name


class DocTemplate(models.Model):
    # 文档模板
    name = models.CharField(max_length=50, verbose_name="模板名称")
    content = models.TextField(verbose_name="模板内容")
    create_user = models.ForeignKey(User, on_delete=models.CASCADE)
    create_time = models.DateTimeField(auto_now_add=True)
    modify_time = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = '文档模板'
        verbose_name_plural = verbose_name


class DocAttachment(models.Model):
    # 附件
    doc = models.ForeignKey(Doc, on_delete=models.DO_NOTHING)
    filename = models.CharField(max_length=200, verbose_name="附件名", default="default.zip")
    file_path = models.FileField(upload_to='attachment/%Y/%m/', verbose_name="附件")
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    create_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.filename

    class Meta:
        verbose_name = "附件"
        verbose_name_plural = verbose_name


class Star(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE)
    object_id = models.PositiveIntegerField(verbose_name="object_id")
    content_object = GenericForeignKey('content_type', 'object_id')

    def __str__(self):
        return self.user

    class Meta:
        verbose_name = "收藏"
        verbose_name_plural = verbose_name
