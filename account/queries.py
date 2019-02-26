import graphene
from graphql_jwt.decorators import login_required

from account.object_types import UserType


class UserQuery(object):
    me = graphene.Field(UserType, token=graphene.String(required=True))

    @login_required
    def resolve_me(self, info, **kwargs):
        user = info.context.user

        if user.is_anonymous:
            raise Exception('Not logged in.')

        return user


class Query(UserQuery):
    pass
