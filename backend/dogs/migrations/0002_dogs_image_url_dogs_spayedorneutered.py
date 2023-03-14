# Generated by Django 4.1.7 on 2023-03-13 21:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dogs', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='dogs',
            name='image_url',
            field=models.CharField(blank=True, default='', max_length=255),
        ),
        migrations.AddField(
            model_name='dogs',
            name='spayedOrNeutered',
            field=models.BooleanField(default=False),
        ),
    ]
