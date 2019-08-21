from django.db import models
# https://docs.djangoproject.com/en/2.2/ref/validators/
from django.core.validators import MinValueValidator

# Create your models here.
# https://docs.djangoproject.com/en/2.2/ref/models/fields/
class Recipe(models.Model):
    # https://docs.djangoproject.com/en/2.2/ref/models/fields/#django.db.models.Field.choices
    # The first element in each tuple is the actual value to be set on the model
    RECIPE_TYPE_CHOICES=[
        ('BREAKFAST', 'Breakfast'),
        ('LUNCH', 'Lunch'),
        ('DINNER', 'Dinner'),
        ('DESSERT', 'Dessert'),
    ]

    TEMP_SCALE_CHOICES=[
        ('FARENHEIT', 'Farenheit'),
        ('CELSIUS', 'Celsius'),
    ]

    name=models.CharField(max_length=255)
    is_public=models.BooleanField(default=False)
    recipe_type=models.CharField(max_length=255, choices=RECIPE_TYPE_CHOICES)
    prep_time=models.IntegerField(
        validators = [
            MinValueValidator(0)
        ]
    )
    cook_time=models.IntegerField(
        validators=[
            MinValueValidator(0)
        ]
    )
    cook_temp=models.IntegerField()
    temp_scale=models.CharField(max_length=255, choices=TEMP_SCALE_CHOICES, default="FARENHEIT")
    recipe_amount=models.IntegerField(
        validators = [
            MinValueValidator(1)
        ]
    )
    recipe_unit=models.CharField(max_length=255)
    personal_notes=models.TextField()
