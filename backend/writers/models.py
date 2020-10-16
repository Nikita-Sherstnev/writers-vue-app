from django.db import models


class Writer(models.Model):
    surname = models.CharField(max_length=50, blank=False, default='')
    name = models.CharField(max_length=50, blank=False, default='')
    middlename = models.CharField(max_length=50, blank=False, default='')
    birthYear = models.IntegerField(blank=False, default=0)
    deathYear = models.IntegerField(blank=False, default=0)
    amountOfBooks = models.IntegerField(blank=False, default=0)
    nobel = models.BooleanField(default=False)
