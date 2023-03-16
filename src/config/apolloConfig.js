import Vue from 'vue'
import VueApollo from 'vue-apollo'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createUploadLink } from 'apollo-upload-client'
import { ENDPOINT, TOKEN } from '../shared/constants'

Vue.use(VueApollo)

const httpLink =  createUploadLink({
   uri: ENDPOINT,
   headers: {
      Authorization: TOKEN ? `Bearer ${TOKEN}` : null,
   }
})

var apolloClient = new ApolloClient({
   link: httpLink,
   cache: new InMemoryCache({
      addTypename: false
   }),
 })

export const apolloProvider = new VueApollo({
   defaultClient: apolloClient
})