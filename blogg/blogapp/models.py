from django.db import models

# Create your models here.
class APIkey(models.Model):
    fname = models.CharField(max_length = 100)
    lname = models.CharField(max_length = 100)
    email = models.CharField(max_length = 100, default = "abc@xyz.com")
    key = models.CharField(max_length = 32)

    def __str__(self):
        string = self.fname+" "+self.lname+" "+self.key
        return string
