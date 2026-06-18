from django import forms
import re

class ContactForm(forms.Form):
    name = forms.CharField(
        max_length=100,
        widget=forms.TextInput(attrs={'placeholder': 'Your Name'}),
        error_messages={
            'required': 'Please enter your name'
        }
    )
    mobile = forms.CharField(
        max_length=10,
        widget=forms.TextInput(attrs={'placeholder': 'Your Name'}),
        error_messages={
            'required': 'Please enter your mobile number'
        }
    )
    message = forms.CharField(
        widget=forms.Textarea,
        error_messages={
            'required': 'Please enter your message'
        }
    )
    # NAME VALIDATION
    def clean_name(self):
        name = self.cleaned_data.get('name')
        if name and not re.match(r'^[A-Za-z ]+$', name):
            raise forms.ValidationError("Name must contain only letters")
        return name

    # MOBILE VALIDATION
    def clean_mobile(self):
        mobile = self.cleaned_data.get('mobile')
        if mobile and not re.match(r'^\d{10}$', mobile):
            raise forms.ValidationError("Enter a valid 10-digit mobile number")
        return mobile

    # MESSAGE VALIDATION
    def clean_message(self):
        message = self.cleaned_data.get('message')
        if message and len(message.split()) < 5:
            raise forms.ValidationError("Minimum 5 words required")
        return message

class SubscribeForm(forms.Form):
    email = forms.EmailField(
        widget=forms.TextInput(attrs={
            'placeholder': 'Your Email',
            'id': 'uemail'
        }),
        error_messages={
            'required': 'Please enter your email',
            'invalid': 'Enter a valid email address'
        }
    )

    def clean_email(self):
        email = self.cleaned_data.get('email')
        # extra validation (optional but professional)
        if email and len(email) < 6:
            raise forms.ValidationError("Email is too short")

        return email