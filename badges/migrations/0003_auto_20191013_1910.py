# Generated by Django 2.2.4 on 2019-10-13 19:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('badges', '0002_auto_20191011_1558'),
    ]

    operations = [
        migrations.AlterField(
            model_name='badge',
            name='one_time_only',
            field=models.BooleanField(default=True),
        ),
    ]