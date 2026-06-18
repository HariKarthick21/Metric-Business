from django.contrib import admin
from .models import TeamMember, Contact, Subscribe

class TeamMemberAdmin(admin.ModelAdmin):
    list_display = ('name', 'role')

admin.site.register(TeamMember, TeamMemberAdmin)
admin.site.register(Contact)
admin.site.register(Subscribe)