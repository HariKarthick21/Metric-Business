from django.shortcuts import render, redirect
from .models import Contact, Subscribe, TeamMember
from .forms import ContactForm, SubscribeForm


# ------------------ INDEX ------------------
def index(request):
    contact_form = ContactForm()
    sub_form = SubscribeForm()

    if request.method == "POST":
        # CONTACT FORM
        if 'name' in request.POST and request.POST.get('name'):
            contact_form = ContactForm(request.POST)
            if contact_form.is_valid():
                name = contact_form.cleaned_data['name']
                mobile = contact_form.cleaned_data['mobile']
                message = contact_form.cleaned_data['message']

                obj, created = Contact.objects.get_or_create(
                    mobile=mobile,
                    defaults={
                        'name': name,
                        'message': message
                    }
                )
                if created:
                    msg = f"Thank you {name}... Your form Submitted Successfully ✅"
                else:
                    msg = "This mobile number already submitted 👍"

                request.session['success_message'] = msg
                return redirect('index')

        # SUBSCRIBE FORM
        elif 'subscribe_btn' in request.POST:
            sub_form = SubscribeForm(request.POST)
            if sub_form.is_valid():
                obj, created = Subscribe.objects.get_or_create(
                    email=sub_form.cleaned_data['email']
                )
                if created:
                    msg = "Thank you! Your Mail Submitted Successfully ✅"
                else:
                    msg = "You are already subscribed 👍"

                request.session['subscribe_success'] = msg
                return redirect('index')

    return render(request, 'index.html', {
        'form': contact_form,
        'sub_form': sub_form,
        'success_message': request.session.pop('success_message', None),
        'subscribe_success': request.session.pop('subscribe_success', None),
    })


# ------------------ COMMON SUBSCRIBE HANDLER ------------------

def handle_subscribe(request, page_name):
    sub_form = SubscribeForm()

    if request.method == "POST" and 'subscribe_btn' in request.POST:
        sub_form = SubscribeForm(request.POST)
        if sub_form.is_valid():
            obj, created = Subscribe.objects.get_or_create(
                email=sub_form.cleaned_data['email']
            )
            if created:
                msg = "Thank you! Your Mail Submitted Successfully ✅"
            else:
                msg = "You are already subscribed 👍"

            request.session['subscribe_success'] = msg
            return redirect(page_name)

    return sub_form


# ------------------ PAGES ------------------

def about(request):
    sub_form = handle_subscribe(request, 'about')
    return render(request, 'about.html', {
        'sub_form': sub_form,
        'subscribe_success': request.session.pop('subscribe_success', None),
    })


def services(request):
    sub_form = handle_subscribe(request, 'services')
    return render(request, 'services.html', {
        'sub_form': sub_form,
        'subscribe_success': request.session.pop('subscribe_success', None),
    })


def privacy(request):
    sub_form = handle_subscribe(request, 'privacy')
    return render(request, 'privacy.html', {
        'sub_form': sub_form,
        'subscribe_success': request.session.pop('subscribe_success', None),
    })


def portfolio(request):
    sub_form = handle_subscribe(request, 'portfolio')
    return render(request, 'portfolio.html', {
        'sub_form': sub_form,
        'subscribe_success': request.session.pop('subscribe_success', None),
    })


def alignment(request):
    sub_form = handle_subscribe(request, 'alignment')
    return render(request, 'alignment.html', {
        'sub_form': sub_form,
        'subscribe_success': request.session.pop('subscribe_success', None),
    })


def construction(request):
    sub_form = handle_subscribe(request, 'construction')
    return render(request, 'construction.html', {
        'sub_form': sub_form,
        'subscribe_success': request.session.pop('subscribe_success', None),
    })


def team(request):
    members = TeamMember.objects.all()
    sub_form = handle_subscribe(request, 'team')
    return render(request, 'team.html', {
        'members': members,
        'sub_form': sub_form,
        'subscribe_success': request.session.pop('subscribe_success', None),
    })


# ------------------ PAGES WITH BOTH FORMS ------------------

def single_service(request):
    contact_form = ContactForm()
    sub_form = SubscribeForm()

    if request.method == "POST":
        if 'name' in request.POST and request.POST.get('name'):
            contact_form = ContactForm(request.POST)
            if contact_form.is_valid():
                name = contact_form.cleaned_data['name']
                mobile = contact_form.cleaned_data['mobile']
                message = contact_form.cleaned_data['message']

                obj, created = Contact.objects.get_or_create(
                    mobile=mobile,
                    defaults={
                        'name': name,
                        'message': message
                    }
                )
                if created:
                    msg = f"Thank you {name}... Your form Submitted Successfully ✅"
                else:
                    msg = "This mobile number already submitted 👍"

                request.session['success_message'] = msg
                return redirect('index')

        elif 'subscribe_btn' in request.POST:
            sub_form = SubscribeForm(request.POST)
            if sub_form.is_valid():
                obj, created = Subscribe.objects.get_or_create(
                    email=sub_form.cleaned_data['email']
                )
                if created:
                    msg = "Thank you! Your Mail Submitted Successfully ✅"
                else:
                    msg = "You are already subscribed 👍"

                request.session['subscribe_success'] = msg
                return redirect('single_service')

    return render(request, 'single_service.html', {
        'form': contact_form,
        'sub_form': sub_form,
        'success_message': request.session.pop('success_message', None),
        'subscribe_success': request.session.pop('subscribe_success', None),
    })


def contact(request):
    contact_form = ContactForm()
    sub_form = SubscribeForm()

    if request.method == "POST":
        if 'name' in request.POST and request.POST.get('name'):
            contact_form = ContactForm(request.POST)
            if contact_form.is_valid():
                name = contact_form.cleaned_data['name']
                mobile = contact_form.cleaned_data['mobile']
                message = contact_form.cleaned_data['message']

                obj, created = Contact.objects.get_or_create(
                    mobile=mobile,
                    defaults={
                        'name': name,
                        'message': message
                    }
                )
                if created:
                    msg = f"Thank you {name}... Your form Submitted Successfully ✅"
                else:
                    msg = "This mobile number already submitted 👍"

                request.session['success_message'] = msg
                return redirect('index')

        elif 'subscribe_btn' in request.POST:
            sub_form = SubscribeForm(request.POST)
            if sub_form.is_valid():
                obj, created = Subscribe.objects.get_or_create(
                    email=sub_form.cleaned_data['email']
                )
                if created:
                    msg = "Thank you! Your Mail Submitted Successfully ✅"
                else:
                    msg = "You are already subscribed 👍"

                request.session['subscribe_success'] = msg
                return redirect('contact')

    return render(request, 'contact.html', {
        'form': contact_form,
        'sub_form': sub_form,
        'success_message': request.session.pop('success_message', None),
        'subscribe_success': request.session.pop('subscribe_success', None),
    })
