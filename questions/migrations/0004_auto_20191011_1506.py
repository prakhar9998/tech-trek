# Generated by Django 2.2.4 on 2019-10-11 15:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('questions', '0003_question_is_solved'),
    ]

    operations = [
        migrations.RenameField(
            model_name='question',
            old_name='is_solved',
            new_name='first_solve',
        ),
    ]
