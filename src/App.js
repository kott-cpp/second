import React from 'react'
import { BrowserRouter, Route, Switch, render } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
import Navigation from './components/Navigation'
import Helmet from 'react-helmet'
import ApolloClient from 'apollo-boost'
import { gql } from 'apollo-boost'
import { ApolloProvider, useQuery } from '@apollo/react-hooks'

const client = new ApolloClient({
  // uri: 'https://graphiql.graphcms.com/simple/v1/swapi',
  uri: 'http://localhost:3000/graphql',
})

client.query({
  query: gql`
    {
      patchPanel(patchPanelId: 1) {
        panelJacks {
          nodes {
            id
          }
        }
        switchPorts {
          nodes {
            id
          }
        }
      }
    }
  `,
})

// .then(result => console.log(result.patchPanel.panelJacks.nodes[0].id))

function PortJackPair() {
  const { loading, error, data } = useQuery(gql`
    {
      patchPanel(patchPanelId: 1) {
        panelJacks {
          nodes {
            id
          }
        }
        switchPorts {
          nodes {
            id
          }
        }
      }
    }
  `)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  // const panelJack = data.patchPanel.panelJacks.nodes.map(id)
  // console.log("panelJacks", panelJack)

  return data.patchPanel.panelJacks.nodes.map(({ id }) => (
    <div>
      <ul>
        <li>Jack: {id}</li>
      </ul>
    </div>
  ))
}

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div>
          <Helmet>
            <title>My Page</title>
          </Helmet>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={Error} />
          </Switch>
          <PortJackPair />
        </div>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
