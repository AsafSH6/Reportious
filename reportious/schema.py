import graphene
import graphql_jwt

import reports.queries
import reports.mutations


class Query(reports.queries.Query, graphene.ObjectType):
    pass


class Mutation(reports.mutations.Mutation, graphene.ObjectType):
    token_auth = graphql_jwt.ObtainJSONWebToken.Field()
    verify_token = graphql_jwt.Verify.Field()
    refresh_token = graphql_jwt.Refresh.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
