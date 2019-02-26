import graphene

import account.queries
import account.mutations
import reports.queries
import reports.mutations


class Query(account.queries.Query, reports.queries.Query, graphene.ObjectType):
    pass


class Mutation(account.mutations.Mutation, reports.mutations.Mutation, graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query, mutation=Mutation)
