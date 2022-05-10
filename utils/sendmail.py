import smtplib
import random
import string

from email.mime.text import MIMEText

from django.utils.translation import gettext_lazy as _
from django.conf import settings

from app_knowledge_base.models import SysSetting


def encryption(s):
    # 加密字符 = 字符的Unicode码 + 秘钥的Unicode码
    k = settings.SECRET_KEY
    encry_str = ""
    for i, j in zip(s, k):
        # i为字符，j为秘钥字符
        temp = str(ord(i) + ord(j)) + '_'  # 加密字符 = 字符的Unicode码 + 秘钥的Unicode码
        encry_str = encry_str + temp
    return encry_str


def decryption(p):
    # 解密字符 = (加密Unicode码字符 - 秘钥字符的Unicode码)的单字节字符
    k = settings.SECRET_KEY
    dec_str = ""
    for i, j in zip(p.split("_")[:-1], k):
        # i 为加密字符，j为秘钥字符
        temp = chr(int(i) - ord(j))  # 解密字符 = (加密Unicode码字符 - 秘钥字符的Unicode码)的单字节字符
        dec_str = dec_str + temp
    return dec_str


def generate_vcode(n=6):
    # 生成数字验证码
    vcode_str = ''.join(random.sample(string.digits, n))
    return vcode_str


def send_mail(to_mail, vcode_str):
    email_enable = SysSetting.objects.get(types='basic', name='enable_email')
    if email_enable.value == 'on':
        smtp_host = SysSetting.objects.get(types='email', name='smtp_host').value
        send_emailer = SysSetting.objects.get(types='email', name='send_emailer').value
        smtp_port = SysSetting.objects.get(types='email', name='smtp_port').value
        username = SysSetting.objects.get(types='email', name='username').value
        pwd = SysSetting.objects.get(types='email', name='pwd').value
        ssl = SysSetting.objects.get(types='email', name='smtp_ssl').value

        msg_from = send_emailer  # 发件人
        passwd = dectry(pwd)  # 发件人密码
        msg_to = to_mail  # 收件人
        subject = "*** - 重置密码"
        content = f"你的 验证码 {vcode_str}, 30分钟内有效！"
        msg = MIMEText(content, _subtype='html', _charset='utf-8')
        msg["Subject"] = subject
        msg["From"] = f"*** 助手[{msg_from}]"
        msg["To"] = msg_to
        if ssl:
            s = smtplib.SMTP_SSL(smtp_host, int(smtp_port))  # 发件箱服务及端口
        else:
            s = smtplib.SMTP(smtp_host, int(smtp_port))
        try:
            s.login(username, passwd)
            s.sendmail(from_addr=msg_from, to_addrs=msg_to, msg=msg.as_string())
            return True
        except smtplib.SMTPException as e:
            print(e)
            return False
        finally:
            s.quit()
    else:
        return False
