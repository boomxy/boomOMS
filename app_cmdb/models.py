from django.db import models
from django.contrib.auth import get_user_model
from text_unidecode import unidecode

from app_knowledge_base.models import Doc

User = get_user_model()


def _trans_pinyin(string):
    """
    :param string:
    :return: string
    """
    ustring = unidecode(string)
    words = ustring.strip().split(' ')

    pinyin = ''.join(words).lower()

    short_pinyin = ''.join(i[0] for i in words).lower()
    return pinyin, short_pinyin


class Supplier(models.Model):
    name = models.CharField(max_length=50, verbose_name="供应商", help_text="供应商")
    pinyin = models.CharField(max_length=100, verbose_name="供应商拼音字母", help_text="供应商拼音字母")
    short_pinyin = models.CharField(max_length=30, verbose_name="供应商拼音字母简写", help_text="供应商拼音字母简写")
    rating = models.IntegerField(default=75, verbose_name="供应商评级", help_text="供应商评级")
    introduction = models.CharField(max_length=300, verbose_name="供应商简介", help_text="供应商简介", null=True, blank=True)
    contact = models.CharField(max_length=50, verbose_name="供应商联系人", help_text="供应商联系人")
    phone = models.CharField(max_length=30, verbose_name="供应商联系电话", help_text="供应商联系电话")
    email = models.EmailField(verbose_name="供应商 Email", help_text="供应商 Email")

    def save(self, force_insert=False, force_update=False, using=None,
             update_fields=None, force=False):
        if force:
            self.pinyin, self.short_pinyin = _trans_pinyin(self.name)  # 转换成拼音
        super(Supplier, self).save(force_insert=False, force_update=False, using=None,
                                   update_fields=None)

    class Meta:
        verbose_name = '部门'
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.name


class Department(models.Model):
    """
        部门
        """
    LEVEL_CHOICE = ((1, "一级部门"), (2, "二级部门"), (3, "三级部门"), (4, "四级部门"), (126, '供应商'), (127, '其它'), (0, "总部"))

    name = models.CharField(max_length=50, verbose_name="部门", help_text="部门")
    pinyin = models.CharField(max_length=100, verbose_name="部门拼音字母", help_text="部门拼音字母")
    short_pinyin = models.CharField(max_length=30, verbose_name="部门拼音字母简写", help_text="部门拼音字母简写")
    level = models.SmallIntegerField(choices=LEVEL_CHOICE, verbose_name="部门级别", help_text="部门级别", null=True, blank=True)
    superior_department = models.ForeignKey('self', on_delete=models.SET_NULL, verbose_name="上级部门", help_text="上级部门",
                                            null=True, blank=True, related_name='sub')  # 关联上级部门 id
    introduction = models.CharField(max_length=500, verbose_name="部门简介", help_text="部门简介", null=True, blank=True)
    info = models.CharField(max_length=100, verbose_name="部门信息", help_text="部门信息", default="")  # 位置 负责人 联系信息
    create_time = models.DateField(verbose_name="创建时间", help_text="创建时间")

    def save(self, force_insert=False, force_update=False, using=None,
             update_fields=None, force=False):
        if force:
            self.pinyin, self.short_pinyin = _trans_pinyin(self.name)  # 转换成拼音
        super(Department, self).save(force_insert=False, force_update=False, using=None,
                                     update_fields=None)

    class Meta:
        verbose_name = '部门'
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.name


class Contact(models.Model):
    """ 联系方式
        name:  姓名
        department: 所属部门
        telephone: 电话
        email: 公司邮箱
        etc: 其它联系方式
        # # 使用 unidecode 库  或者 slugify(text-unidecode)
        """
    name = models.CharField(max_length=100, verbose_name="姓名", help_text="姓名")
    pinyin = models.CharField(max_length=200, verbose_name="姓名拼音字母", help_text="姓名拼音字母")
    short_pinyin = models.CharField(max_length=30, verbose_name="姓名拼音字母简写", help_text="姓名拼音字母简写")
    department = models.ForeignKey(Department, null=True, blank=True, on_delete=models.SET_NULL, verbose_name="所属部门",
                                   help_text="所属部门")
    phone = models.CharField(max_length=20, verbose_name="电话", help_text="电话", null=True, blank=True)
    email = models.EmailField(verbose_name="电子邮箱", help_text="电子邮箱")
    introduction = models.CharField(max_length=300, verbose_name="个人简介", help_text="个人简介", null=True, blank=True)

    def save(self, force_insert=False, force_update=False, using=None,
             update_fields=None, trans_pinyin=False):
        """
        使用 输入的值 trans_pinyin True
        如果 输入过来的 拼音为空 则 需要自动添加拼音 trans_pinyin True
        """
        if trans_pinyin:
            self.pinyin, self.short_pinyin = _trans_pinyin(self.name)  # 转换成拼音
        super(Contact, self).save(force_insert=force_insert, force_update=force_update, using=using,
                                  update_fields=update_fields)

    class Meta:
        verbose_name = '联系人'
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.name


# Create your models here.
class IDC(models.Model):
    """
    IDC 机房信息
    """
    name = models.CharField(max_length=70, verbose_name="机房名称", default="总部机房")
    address = models.CharField(max_length=150, verbose_name="机房地址", default="总部机房")
    responsible = models.ForeignKey(to=User, on_delete=models.SET_NULL, verbose_name="负责人", help_text="负责人",
                                    null=True, blank=True)
    create_time = models.DateField(verbose_name="机房建成时间", help_text="机房建成时间")
    remark = models.CharField(max_length=150, verbose_name="备注", help_text="备注")

    class Meta:
        verbose_name = "机房"
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.name


class Cabinet(models.Model):
    """
    机柜 信息
    """
    name = models.CharField(max_length=50, verbose_name="机柜名称", help_text="机柜名称")
    idc = models.ForeignKey(to=IDC, on_delete=models.SET_NULL, verbose_name="所属机房", help_text="所属机房",
                            null=True, blank=True)
    address = models.CharField(max_length=150, verbose_name="位置", help_text="位置")
    rack_num = models.SmallIntegerField(verbose_name="机架数量", help_text="机架数量")  # 剩余可用数量, 上架机器后 机架数量-1
    create_time = models.DateField(verbose_name="启用时间", help_text="启用时间")

    class Meta:
        verbose_name = "机柜"
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.name


class Logon(models.Model):
    """
    登录信息
    info 加密后的用户名、密码链接等信息
    """
    name = models.CharField(max_length=50, verbose_name="登录名称", help_text="登录名称")
    username = models.CharField(max_length=20, verbose_name="用户名", help_text="用户名")  # 使用 json 的方式最外层 dict
    password = models.CharField(max_length=50, verbose_name="密码", help_text="密码")  # 使用 json 的方式最外层 dict
    encryption_type = models.CharField(max_length=10, verbose_name="加密方式", help_text="加密方式", null=True, blank=True)
    # 控制加密方式
    create_time = models.DateTimeField(auto_now=True, verbose_name="创建时间", help_text="创建时间")

    class Meta:
        verbose_name = "登录"
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.name


class Machine(models.Model):
    """
    name: 机器名 命名规则 V(虚拟)/R(实体)_系统名称_用途_编号
    """
    OS_CHOICES = (
        ('Linux', 'Linux'),
        ('Unix', 'Unix'),
        ('MacOS', 'MacOS'),
        ('BSD', 'BSD'),
        ('Windows', 'Windows'),
        ('Other', 'Other'),
    )
    brand = models.CharField(max_length=30, verbose_name="品牌", help_text="品牌")
    version = models.CharField(max_length=50, verbose_name="型号", help_text="型号", null=True, blank=True)
    name = models.CharField(max_length=100, verbose_name="设备名", help_text="设备名")
    core = models.IntegerField(null=True, blank=True, verbose_name="cpu 核心数", help_text="cpu 核心数")
    memory = models.CharField(max_length=64, null=True, blank=True, verbose_name="内存", help_text="内存")
    disk = models.CharField(max_length=64, null=True, blank=True, verbose_name="硬盘", help_text="硬盘")
    ost = models.CharField(max_length=20, choices=OS_CHOICES, default='Windows', verbose_name='操作系统类型',
                           help_text='操作系统类型')  # os type 操作系统类型 可做下拉框 windows linux rel ...
    osv = models.CharField(max_length=50, null=True, blank=True, verbose_name="操作系统版本", help_text="操作系统版本")
    virtual = models.BooleanField(default=False, verbose_name="是否虚拟机", help_text="是否虚拟机")
    parent = models.ForeignKey('self', null=True, blank=True, related_name='child',
                               on_delete=models.SET_NULL, verbose_name="宿主机", help_text="宿主机")
    create_time = models.DateField(auto_now_add=True, verbose_name="添加时间", help_text="添加时间")
    ip = models.CharField(max_length=128, verbose_name="ip地址", help_text="ip地址")
    logon = models.ManyToManyField(Logon, verbose_name="登陆信息", help_text="登陆信息")

    class Meta:
        verbose_name = "机器"
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.name


class System(models.Model):
    ENV_CHOICES = (
        (1, "生产环境"),
        (2, "生产环境"),
        (3, "灾备环境"),
        (4, "生产测试环境"),
        (99, "其它"),
    )
    STATUS_CHOICES = (
        (1, "在线"),
        (2, "下线"),
        (3, "待上线"),
        (4, "其它")
    )
    name = models.CharField(max_length=50, verbose_name="系统名称", help_text="系统名称")
    short_name = models.CharField(max_length=30, verbose_name="系统简称", help_text="系统简称")
    department = models.ManyToManyField(to=Department, verbose_name="关联部门", help_text="关联部门")
    supplier = models.ForeignKey(to=Supplier, on_delete=models.SET_NULL, verbose_name="供应商", help_text="供应商",
                                 null=True, blank=True)
    status = models.PositiveSmallIntegerField(choices=STATUS_CHOICES, default=1,
                                              verbose_name="系统在线状态", help_text="系统在线状态")
    env = models.PositiveSmallIntegerField(choices=ENV_CHOICES, default=1, verbose_name="系统环境", help_text="系统环境")
    manager = models.ManyToManyField(to=User, verbose_name='关联系统负责人', help_text='关联系统负责人')
    address = models.CharField(max_length=150, verbose_name="系统访问地址", help_text="系统访问地址")
    update_time = models.DateTimeField(auto_now=True, verbose_name="系统更新时间", help_text="系统更新时间")
    create_time = models.DateField(auto_now_add=True, verbose_name="系统上线时间", help_text="系统上线时间")

    class Meta:
        verbose_name = "系统"
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.name


class License(models.Model):
    """
    License
    license_file 文件型 license
    license 文本型 license
    """
    name = models.CharField(max_length=50, verbose_name="License 名称", help_text="License 名称")
    expire = models.DateField(verbose_name='授权过期时间', help_text='产品授权')
    supplier = models.ForeignKey(to=Supplier, on_delete=models.SET_NULL, verbose_name="授权机构", help_text="授权机构",
                                 null=True, blank=True)
    license = models.CharField(max_length=200, verbose_name='license 内容', help_text='license 内容', default="")
    license_file = models.FileField(upload_to='uploads/license/%Y/%m/%d/', verbose_name="license 文件",
                                    help_text="license 文件", null=True, blank=True)
    version = models.CharField(max_length=30, verbose_name="版本", help_text="版本", default="")
    num = models.IntegerField(verbose_name="授权数量", help_text="授权数量", default=1)
    remark = models.CharField(max_length=200, verbose_name='license 补充信息', help_text='license 补充信息', null=True,
                              blank=True)
    create_time = models.DateField(auto_now=True, verbose_name='授权/更新日期', help_text='授权/更新日期')

    class Meta:
        verbose_name = "License"
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.name


class Application(models.Model):
    """
    应用： 包括服务、数据库以及一些其他的程序
    """
    TYPE_CHOICES = (
        (1, "应用"),
        (2, "web 服务器"),
        (3, "数据库"),
        (99, "其它")
    )
    ENV_CHOICE = (
        (1, "生产环境"),
        (2, "测试环境"),
        (3, "灾备环境"),
        (4, "生产测试环境"),
        (99, "其它")
    )
    # http://www.bubuko.com/infodetail-2842622.html choice 字段渲染参考 get_ 字段 _display
    name = models.CharField(max_length=50, verbose_name="应用名称", help_text="应用名称")
    env = models.PositiveSmallIntegerField(choices=ENV_CHOICE, verbose_name="系统环境", help_text="系统环境", default=1)
    port = models.CharField(max_length=6, verbose_name="端口号", help_text="端口号", null=True, blank=True)
    location = models.CharField(max_length=150, verbose_name="安装位置", help_text="安装位置")
    conf = models.CharField(max_length=100, verbose_name="配置文件路径", help_text="配置文件路径", default='./conf')
    log = models.CharField(max_length=100, verbose_name="日志文件路径", help_text="日志文件路径", default='./logs')
    execution = models.CharField(max_length=100, verbose_name="程序文件路径", help_text="程序文件路径", default='./bin')
    app_type = models.PositiveSmallIntegerField(choices=TYPE_CHOICES, verbose_name="应用类型", default=1)
    system = models.ForeignKey(System, on_delete=models.CASCADE, verbose_name="所属系统", null=True, blank=True)
    license = models.OneToOneField(License, on_delete=models.CASCADE, verbose_name="License", help_text="License",
                                   null=True, blank=True)
    update_time = models.DateTimeField(auto_now=True, verbose_name="更新时间", help_text="更新时间")
    create_time = models.DateField(auto_now_add=True, verbose_name="创建日期", help_text="创建日期")

    class Meta:
        verbose_name = "应用"
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.name


class Appendix(models.Model):
    """
    附件: 管理
    """