import React from 'react'
import HomePage from './components/general/HomePage'

import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

const client = new ApolloClient({
  uri: process.env.GRAPHQL_ENDPOINT,
  cache: new InMemoryCache()
});
if (process.env.NODE_ENV !== 'production') {  // Adds messages only in a dev environment
  loadDevMessages();
  loadErrorMessages();
}

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <main className=" w-[100%] 2xl:w-[80%] h-[100%] flex mx-auto">
        <HomePage />
      </main>
    </ApolloProvider>

  )
}
