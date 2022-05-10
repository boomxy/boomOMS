from django.db import models
from django.contrib.auth import get_user_model
from django.urls import reverse

User = get_user_model()


class SysSetting(models.Model):
    # 系统设置
    name = models.CharField(verbose_name="设置名称", max_length=50)
    value = models.TextField(verbose_name="设置内容", null=True, blank=True)
    types = models.CharField(verbose_name="设置类型", max_length=10, default="basic")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "系统设置"
        verbose_name_plural = verbose_name


class UserOptions(models.Model):
    # 用户选项
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    editor_mode = models.IntegerField(default=1, choices=((1, "Editormd"), (2, "Vditor")))

    def __str__(self):
        return f"user {self.user} use editor mode {self.editor_mode}"

    class Meta:
        verbose_name = "用户选项"
        verbose_name_plural = verbose_name


class EmailVerificationCode(models.Model):
    # 邮箱验证码
    email_address = models.EmailField(verbose_name="电子邮箱")
    verification_type = models.CharField(verbose_name="验证码类型", max_length=50)
    verification_code = models.CharField(verbose_name="验证码", max_length=6)
    create_time = models.DateTimeField(verbose_name="创建时间", auto_now_add=True)
    expire_time = models.DateTimeField(verbose_name="过期时间")

    def __str__(self):
        return f"{self.verification_type}: {self.email_address}"

    class Meta:
        verbose_name = "邮箱验证码"
        verbose_name_plural = verbose_name


class RegisterCode(models.Model):
    # 用户注册邀请码
    code = models.CharField(verbose_name="注册邀请码", max_length=10, unique=True)
    usage = models.IntegerField(verbose_name="有效次数", default=1)
    # user = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name="使用用户")
    create_user = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name="创建用户")
    create_time = models.DateTimeField(verbose_name="创建时间", auto_now_add=True)

    def __str__(self):
        return self.code

    class Meta:
        verbose_name = "用户注册邀请码"
        verbose_name_plural = verbose_name


# ######   api 使用  #####
class UserToken(models.Model):
    # 用户 Token
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    token = models.CharField(verbose_name="token", max_length=250, unique=True)

    def __str__(self):
        return self.user

    class Meta:
        verbose_name = '用户 Token'
        verbose_name_plural = verbose_name


#  AppUserToken 和 UserToken 一样


# #### knowledge_base  ###
class Project(models.Model):
    # 文集
    name = models.CharField("文集名称", max_length=50)
    icon = models.URLField(verbose_name="文集图标", blank=True, null=True, default=None)
    intro = models.TextField(verbose_name="介绍")  # description
    role = models.IntegerField(choices=((0, "公开"), (1, "私密"), (2, "指定用户可见"), (3, "密码访问")),
                               verbose_name="文集权限", default=0)
    role_value = models.TextField(verbose_name="文集权限值", null=True, blank=True)
    watermark = models.BooleanField(verbose_name="水印", default=False)
    watermark_type = models.IntegerField(verbose_name="水印类型", choices=((1, "文字水印"), (2, "图片水印")), default=1)
    watermark_val = models.CharField(verbose_name="水印内容", null=True, blank=True, max_length=250, default="")
    top = models.BooleanField(verbose_name="置顶", default=False)
    create_user = models.ForeignKey(User, on_delete=models.CASCADE)
    create_time = models.DateTimeField(auto_now_add=True)
    modify_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "文集"
        verbose_name_plural = verbose_name

    def get_absolute_url(self):
        return reverse("pro_index", kwargs={"pro_id": self.pk})


class ProjectCollaborator(models.Model):
    # 文集协作
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    # 协作权限
    role = models.IntegerField(choices=((0, "新建，修改(self)，删除(self)"), (1, "新建、修改(all), 删除(self)")), default=0)
    create_time = models.DateTimeField(auto_now_add=True, verbose_name="创建时间")
    modify_time = models.DateTimeField(auto_now=True, verbose_name="修改时间")

    def __str__(self):
        return f"{self.user} have {self.role} to {self.project}"

    class Meta:
        verbose_name = "文集协作"
        verbose_name_plural = verbose_name


class ProjectToc(models.Model):
    # 文集目录
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    val = models.TextField(verbose_name="文集文档层级目录")  # content

    def __str__(self):
        return f"Toc of {self.project}"

    class Meta:
        verbose_name = '文集目录'
        verbose_name_plural = verbose_name


class Doc(models.Model):
    # 文档
    name = models.CharField(verbose_name="文档标题", max_length=255)  # title
    pre_content = models.TextField(verbose_name="编辑内容", null=True, blank=True)
    content = models.TextField(verbose_name="文档内容", null=True, blank=True)
    parent_doc = models.IntegerField(default=0, verbose_name="上级文档")
    top_doc = models.IntegerField(default=0, verbose_name="所属项目")
    sort = models.IntegerField(verbose_name="排序", default=9999)
    creat_user = models.ForeignKey(User, on_delete=models.CASCADE)
    create_time = models.DateTimeField(auto_now_add=True, verbose_name="创建时间")
    modify_time = models.DateTimeField(auto_now=True)
    status = models.IntegerField(choices=((0, "草稿"), (1, "发布"), (2, "回收站"), (3, "删除")), verbose_name="文档状态")
    editor_mode = models.IntegerField(default=1, choices=((1, "Editormd"), (2, "Vditor")), verbose_name='编辑器模式')
    open_children = models.BooleanField(default=False, verbose_name="展开下级目录")
    show_children = models.BooleanField(default=False, verbose_name="显示下级文档")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = '文档'
        verbose_name_plural = verbose_name
        indexes = [
            models.Index(fields=['top_doc', 'parent_doc', 'status']),
            models.Index(fields=['sort']),
        ]

    def get_absolute_url(self):
        return reverse("doc", kwargs={"pro_id": self.top_doc, "doc_id": self.pk})


class DocHistory(models.Model):
    # 文档历史
    doc = models.ForeignKey(Doc, on_delete=models.CASCADE)
    pro_content = models.TextField(verbose_name="历史编辑内容", null=True, blank=True)
    create_user = models.ForeignKey(User, on_delete=models.CASCADE)
    create_time = models.DateTimeField(auto_now_add=True, verbose_name="创建时间")

    def __str__(self):
        return self.doc

    class Meta:
        verbose_name = '文档历史'
        verbose_name_plural = verbose_name


class DocTemp(models.Model):
    # 文档模板
    name = models.CharField(verbose_name="模板名称", max_length=50)
    content = models.TextField(verbose_name="模板内容")
    create_user = models.ForeignKey(User, on_delete=models.CASCADE)
    create_time = models.DateTimeField(auto_now_add=True)
    modify_time = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = '文档模板'
        verbose_name_plural = verbose_name


class DocShare(models.Model):
    # 文档分享
    token = models.CharField(verbose_name="token", max_length=100, blank=True, null=True)
    doc = models.ForeignKey(Doc, on_delete=models.CASCADE)
    share_type = models.IntegerField(choices=((0, "公开"), (1, "私密")), default=0)
    share_value = models.CharField(max_length=10, verbose_name="分享码", null=True, blank=True)  # share code
    enable = models.BooleanField(default=True, verbose_name="启用")
    create_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.doc.name}: {self.token}"

    class Meta:
        verbose_name = "文档分享"
        verbose_name_plural = verbose_name


class Tag(models.Model):
    # 标签 tag
    name = models.CharField(verbose_name="标签名", max_length=30)
    create_user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "标签"
        verbose_name_plural = verbose_name


class DocTag(models.Model):
    # 文档标签
    tag = models.ForeignKey(Tag, on_delete=models.CASCADE)
    doc = models.ForeignKey(Doc, on_delete=models.CASCADE)
    create_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.doc.name} with {self.tag.name}"

    class Meta:
        verbose_name = "文档标签"
        verbose_name_plural = verbose_name


class ProjectReport(models.Model):
    # 文集导出  导出目标可以可以自定义，
    project = models.OneToOneField(Project, unique=True, on_delete=models.CASCADE)
    epub = models.IntegerField(choices=((0, "不允许导出"), (1, "允许导出")), default=0, verbose_name="前台导出EPUB")
    pdf = models.IntegerField(choices=((0, "不允许导出"), (1, "允许导出")), default=0, verbose_name="前台导出PDF")

    def __str__(self):
        return self.project.name

    class Meta:
        verbose_name = "文集导出"
        verbose_name_plural = verbose_name


class ProjectReportFile(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    file_type = models.CharField(choices=(('epub', 'epub'), ('pdf', 'pdf'), ('docx', 'docx')), verbose_name='文件类型',
                                 max_length=10)  # filetype
    file_name = models.CharField(max_length=100, verbose_name="文件名称")  # filename
    file_path = models.CharField(max_length=250, verbose_name="文件路径")
    create_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.file_path

    class Meta:
        verbose_name = '文集导出'
        verbose_name_plural = verbose_name


class ImageGroup(models.Model):
    # 图片分组
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    group_name = models.CharField(verbose_name="图片分组", max_length=100, default="default")

    def __str__(self):
        return self.group_name

    class Meta:
        verbose_name = '图片分组'
        verbose_name_plural = verbose_name


class Image(models.Model):
    # 图片。 Image 冲突，后期需要改名字
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    file_path = models.CharField(verbose_name="图片路径", max_length=250)
    file_name = models.CharField(verbose_name="图片名称", max_length=250, null=True, blank=True)
    group = models.ForeignKey(ImageGroup, on_delete=models.SET_NULL, null=True, verbose_name="图片分组")  # 不需要外键关联
    remark = models.CharField(verbose_name="图片标注", null=True, blank=True, max_length=250, default="图片描述")
    create_time = models.DateTimeField(verbose_name="创建时间", auto_now_add=True)
    modify_time = models.DateTimeField(verbose_name="修改时间", auto_now=True)

    def __str__(self):
        return self.file_path + self.file_name


class Attachment(models.Model):
    # 附件
    file_name = models.CharField(max_length=200, verbose_name="附件名", default="default.zip")
    file_size = models.CharField(max_length=100, verbose_name="附件大小", blank=True, null=True)
    file_path = models.FileField(upload_to='accachment/%Y/%m/', verbose_name="附件")
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    create_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.file_name

    class Meta:
        verbose_name = "附件"
        verbose_name_plural = verbose_name


class MyCollect(models.Model):
    # 收藏
    collect_type = models.IntegerField(verbose_name="收藏类型")
    collect_id = models.IntegerField(verbose_name="收藏对象ID")
    create_user = models.ForeignKey(User, on_delete=models.CASCADE)
    create_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.collect_type

    class Meta:
        verbose_name = '收藏'
        verbose_name_plural = verbose_name
