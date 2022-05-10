# Generated by Django 3.2 on 2022-04-30 02:05

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('contenttypes', '0002_remove_content_type_name'),
        ('app_knowledge_base', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Collection',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, verbose_name='文集名称')),
                ('icon', models.ImageField(blank=True, default=None, null=True, upload_to='media/images/%Y/%m', verbose_name='文集图标')),
                ('description', models.TextField(verbose_name='介绍')),
                ('toc', models.TextField(blank=True, null=True, verbose_name='文集文档层级目录')),
                ('top', models.BooleanField(default=False, verbose_name='置顶')),
                ('create_time', models.DateTimeField(auto_now_add=True)),
                ('modify_time', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'verbose_name': '文集',
                'verbose_name_plural': '文集',
            },
        ),
        migrations.CreateModel(
            name='DocAttachment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('filename', models.CharField(default='default.zip', max_length=200, verbose_name='附件名')),
                ('file_path', models.FileField(upload_to='attachment/%Y/%m/', verbose_name='附件')),
                ('create_time', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'verbose_name': '附件',
                'verbose_name_plural': '附件',
            },
        ),
        migrations.CreateModel(
            name='Star',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('object_id', models.PositiveIntegerField()),
            ],
            options={
                'verbose_name': '收藏',
                'verbose_name_plural': '收藏',
            },
        ),
        migrations.CreateModel(
            name='WaterMark',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('types', models.IntegerField(choices=[(1, '文字水印'), (2, '图片水印')], default=1, verbose_name='水印类型')),
                ('content', models.CharField(default='', max_length=250, verbose_name='文字水印内容')),
                ('image', models.ImageField(blank=True, null=True, upload_to='media/images/%Y/%m', verbose_name='图片水印')),
            ],
        ),
        migrations.RenameModel(
            old_name='DocTemp',
            new_name='DocTemplate',
        ),
        migrations.RemoveField(
            model_name='attachment',
            name='user',
        ),
        migrations.RemoveField(
            model_name='docshare',
            name='doc',
        ),
        migrations.RemoveField(
            model_name='doctag',
            name='doc',
        ),
        migrations.RemoveField(
            model_name='doctag',
            name='tag',
        ),
        migrations.DeleteModel(
            name='EmailVerificationCode',
        ),
        migrations.RemoveField(
            model_name='image',
            name='group',
        ),
        migrations.RemoveField(
            model_name='image',
            name='user',
        ),
        migrations.RemoveField(
            model_name='imagegroup',
            name='user',
        ),
        migrations.RemoveField(
            model_name='mycollect',
            name='create_user',
        ),
        migrations.RemoveField(
            model_name='project',
            name='create_user',
        ),
        migrations.RemoveField(
            model_name='projectcollaborator',
            name='project',
        ),
        migrations.RemoveField(
            model_name='projectcollaborator',
            name='user',
        ),
        migrations.RemoveField(
            model_name='projectreport',
            name='project',
        ),
        migrations.RemoveField(
            model_name='projectreportfile',
            name='project',
        ),
        migrations.RemoveField(
            model_name='projecttoc',
            name='project',
        ),
        migrations.RemoveField(
            model_name='registercode',
            name='create_user',
        ),
        migrations.DeleteModel(
            name='SysSetting',
        ),
        migrations.RemoveField(
            model_name='tag',
            name='create_user',
        ),
        migrations.RemoveField(
            model_name='useroptions',
            name='user',
        ),
        migrations.RemoveIndex(
            model_name='doc',
            name='app_knowled_top_doc_c35c6b_idx',
        ),
        migrations.RemoveIndex(
            model_name='doc',
            name='app_knowled_sort_59104a_idx',
        ),
        migrations.RenameField(
            model_name='dochistory',
            old_name='pro_content',
            new_name='his_content',
        ),
        migrations.RemoveField(
            model_name='doc',
            name='editor_mode',
        ),
        migrations.RemoveField(
            model_name='doc',
            name='open_children',
        ),
        migrations.RemoveField(
            model_name='doc',
            name='parent_doc',
        ),
        migrations.RemoveField(
            model_name='doc',
            name='pre_content',
        ),
        migrations.RemoveField(
            model_name='doc',
            name='show_children',
        ),
        migrations.RemoveField(
            model_name='doc',
            name='sort',
        ),
        migrations.RemoveField(
            model_name='doc',
            name='top_doc',
        ),
        migrations.AlterField(
            model_name='doc',
            name='name',
            field=models.CharField(max_length=100, verbose_name='文档标题'),
        ),
        migrations.DeleteModel(
            name='Attachment',
        ),
        migrations.DeleteModel(
            name='DocShare',
        ),
        migrations.DeleteModel(
            name='DocTag',
        ),
        migrations.DeleteModel(
            name='Image',
        ),
        migrations.DeleteModel(
            name='ImageGroup',
        ),
        migrations.DeleteModel(
            name='MyCollect',
        ),
        migrations.DeleteModel(
            name='Project',
        ),
        migrations.DeleteModel(
            name='ProjectCollaborator',
        ),
        migrations.DeleteModel(
            name='ProjectReport',
        ),
        migrations.DeleteModel(
            name='ProjectReportFile',
        ),
        migrations.DeleteModel(
            name='ProjectToc',
        ),
        migrations.DeleteModel(
            name='RegisterCode',
        ),
        migrations.DeleteModel(
            name='Tag',
        ),
        migrations.DeleteModel(
            name='UserOptions',
        ),
        migrations.AddField(
            model_name='star',
            name='content_type',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='contenttypes.contenttype'),
        ),
        migrations.AddField(
            model_name='star',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='docattachment',
            name='doc',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='app_knowledge_base.doc'),
        ),
        migrations.AddField(
            model_name='docattachment',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='collection',
            name='create_user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='collection',
            name='watermark',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='app_knowledge_base.watermark'),
        ),
        migrations.AddField(
            model_name='doc',
            name='collection',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='app_knowledge_base.collection'),
        ),
    ]
