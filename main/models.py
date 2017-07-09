# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Articale(models.Model):
	title = models.CharField(max_length=250)
	owner =  models.ForeignKey(User)

	def __unicode__(self):
		return '%s' % self.title
