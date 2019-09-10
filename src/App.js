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
  uri: 'http://localhost:3000/graphql',
})

client
  .query({
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

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  field: panel_jack, Types: PanelJack, null: true
  field: switch_port, Types: SwitchPort, null, true

  argument: panel_jack_id, ID, required: true
  argument: switch_port_id, ID, required: true


  resolve(panel_jack_id:, switch_port_id)
})
/*
function PanelJacks() {
  const { loading, error, data } = useQuery(gql`
  {
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
  )

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  return data.panelJacks.nodes.map(({ id }) => (
    <div>
      <ul>
        <li>
          Name: {id}
        </li>
      </ul>
    </div>
  ))
}
}
*/
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
          {/*<PanelJacks/>*/}
        </div>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
