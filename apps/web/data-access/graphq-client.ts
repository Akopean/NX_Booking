import { getGraphqlClient } from '@booking/web/data-access-graphql'
import { webEnv } from '@booking/web/utils-env'

const { api } = webEnv

export const gql = getGraphqlClient(api.gqlUrl)
