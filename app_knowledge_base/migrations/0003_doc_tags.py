# Generated by Django 3.2 on 2022-04-30 02:12

from django.db import migrations
import taggit.managers


class Migration(migrations.Migration):

    dependencies = [
        ('taggit', '0004_alter_taggeditem_content_type_alter_taggeditem_tag'),
        ('app_knowledge_base', '0002_auto_20220430_1005'),
    ]

    operations = [
        migrations.AddField(
            model_name='doc',
            name='tags',
            field=taggit.managers.TaggableManager(help_text='A comma-separated list of tags.', through='taggit.TaggedItem', to='taggit.Tag', verbose_name='Tags'),
        ),
    ]