import graphene
import graphql_jwt

from django.contrib.auth.models import User

from account.object_types import UserType


class CreateUser(graphene.Mutation):
    class Arguments:
        username = graphene.String()
        password = graphene.String()

    user = graphene.Field(UserType)
    created = graphene.Boolean()

    def mutate(self, info, username, password):
        user = User.objects.create_user(username=username, password=password)
        return CreateUser(user=user, created=True)


class Mutation(object):
    create_user = CreateUser.Field()
    token_auth = graphql_jwt.ObtainJSONWebToken.Field()
    verify_token = graphql_jwt.Verify.Field()
    refresh_token = graphql_jwt.Refresh.Field()
