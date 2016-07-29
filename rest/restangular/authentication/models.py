from __future__ import unicode_literals

from django.db import models

# Create your models here.

class User(models.Model):
	name = models.CharField(max_length=30,)
	email = models.EmailField(default='',max_length=40)
	password = models.CharField(max_length = 15)

	def __unicode__(self):
		return self.name
