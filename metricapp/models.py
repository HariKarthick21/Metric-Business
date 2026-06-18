from django.db import models

class TeamMember(models.Model):
    name = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    image = models.ImageField(upload_to='team/')
    facebook = models.URLField(blank=True, null=True)
    instagram = models.URLField(blank=True, null=True)
    linkedin = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.name

class Contact(models.Model):
    name = models.CharField(max_length=100)
    mobile = models.CharField(max_length=10, unique=True)
    message = models.TextField()

    def __str__(self):
        return self.name


class Subscribe(models.Model):
    email = models.EmailField(unique=True)

    def __str__(self):
        return self.email