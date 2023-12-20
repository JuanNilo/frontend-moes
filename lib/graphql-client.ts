import { GraphQLClient } from 'graphql-request'

export const graphQLClient = new GraphQLClient(
    process.env.GRAPHQL_ENDPOINT as string,
    {
        headers: {
            "a-api-key": process.env.GRAPHQL_API_KEY as string,
        },
    }
);