import React from 'react'
import { ApolloClient, InMemoryCache } from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { createHttpLink } from 'apollo-link-http'
import AddContact from './components/AddContact'
import Contacts from './components/Contacts'
import Header from './components/Header'
import './App.css'

const client = new ApolloClient({
  link: createHttpLink({ uri: 'http://localhost:4000/graphql' }),
  cache: new InMemoryCache()
})

const App = () => {
  return (
 
<ApolloProvider client={client}>
  <Header />
      <div className='App'>
        <AddContact/>
        <Contacts />
      </div>
    </ApolloProvider>
  )
}

export default App
