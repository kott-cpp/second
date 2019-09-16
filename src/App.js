import React from 'react'
import { BrowserRouter, Route, Switch, render } from 'react-router-dom'
import Home from './components/Home'
import Pilot from './components/Pilot'
import Films from './components/Films'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
import Navigation from './components/Navigation'
import Helmet from 'react-helmet'
import ApolloClient from 'apollo-boost'
import { gql } from 'apollo-boost'
import { ApolloProvider, useQuery, useMutation } from '@apollo/react-hooks'

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
})

client.query({
  query: gql`
    {
      patchPanel(patchPanelId: 1) {
        panelJacks {
          nodes {
            id
            connectedState
            switchPortId
          }
        }
        switchPorts {
          nodes {
            id
            connectedState
            panelJackId
          }
        }
      }
    }
  `,
})

const PORT_TO_JACK_ASSIGNMENT = gql`
  mutation PortToJackAssignment($input: PortToJackAssignmentInput!) {
    portToJackAssignment(input: $input) {
      panelJack {
        id
        connectedState
        switchPortId
      }
      switchPort {
        id
        connectedState
        panelJackId
      }
    }
  }
`

function PortToJackAssignment() {
  let input
  const [portToJackAssignment, { data }] = useMutation(PORT_TO_JACK_ASSIGNMENT)

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          portToJackAssignment({ variables: { input: input.id } })
          input.id = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">Port To Jack Assignment</button>
      </form>
    </div>
  )
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
            <Route path="/pilot" component={Pilot} />
            <Route path="/films" component={Films} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={Error} />
          </Switch>
          {/*<ASSIGN_PORT_TO_JACK />*/}
        </div>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
