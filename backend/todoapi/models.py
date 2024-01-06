from django.db import models

# Create your models here.
class Todo(models.Model):
    body = models.CharField(max_length=255)
    completed = models.BooleanField(default=False)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateField(auto_now_add=True)

