from django.db import models

# Create your models here.


class Tasks(models.Model):
    task = models.TextField()

    def __str__(self):
        return f"{self.task}"


