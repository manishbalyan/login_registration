# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-07-14 08:15
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0005_auto_20160714_0813'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='username',
            new_name='name',
        ),
    ]