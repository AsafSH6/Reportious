from graphene_django.types import DjangoObjectType
from django.contrib.auth.models import User


class UserType(DjangoObjectType):
    class Meta:
        model = User
        exclude_fields = ('password', )
