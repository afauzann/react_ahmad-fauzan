import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://devoted-doe-46.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
    headers: {
        "x-hasura-admin-secret": "YwoD4wC2ueyRS9yPB2vjnc1HTIOLdUKR2oERYjT53617oryllmXmVNYn8wU4qctk"
    }
  });

export default client