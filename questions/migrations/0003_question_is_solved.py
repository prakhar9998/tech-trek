# Generated by Django 2.2.4 on 2019-10-09 06:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('questions', '0002_auto_20190927_1508'),
    ]

    operations = [
        migrations.AddField(
            model_name='question',
            name='is_solved',
            field=models.BooleanField(default=False),
        ),
    ]