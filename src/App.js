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

// .then(result => console.log(result.patchPanel.panelJacks.nodes[0].id))
const createController = args => {
  const {
    Input,
    displayName = 'UnknownControl',
    mutation,
    preMutation = variablesMutation,
    updateMutation,
    postMutation = asDoMutation,
    propTypes = {},
  } = args

const asDoMutation = (props, doMutation) => ({
  ...props,
  doMutation,
})


const variablesMutation = ({ variables }) => variables || {}

  const container = props => {

    const variables = { panelJack:298, switchPort:229 }
    console.log('variables', variables)

    const doMutation = useMutation(mutation, {
      update: updateMutation(props),
      variables,
    })

    return <Input {...props} doClick={doMutation} />
  }

const ASSIGN_PORT_TO_JACK = gql`
  mutation($input: PortToJackAssignmentInput!) {
    portToJackAssignment(input: $input) {
      errors {
        ...messageFragment
      }
      messages {
        ...messageFragment
      }
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
  fragment messageFragment on Message {
    title
    body
    category
    autoClose
    icon
  }
`
/*
function Jacks() {
  const { loading, error, data } = useQuery(gql`
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
  `)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

const panelJack = data.patchPanel.panelJacks.nodes.map(id)
console.log("panelJacks", panelJack)

return data.patchPanel.switchPorts.nodes.map(({ id }) => (
  <div>
    <ul>
      <li>Port: {id}</li>
    </ul>
  </div>
))


  return data.patchPanel.panelJacks.nodes.map(({ switchPortId }) => (
    <div>
      <ul>
        <li>Jack: {switchPortId}</li>
      </ul>
    </div>
  ))
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
          <Jacks />
          {/*<ASSIGN_PORT_TO_JACK />*/}
        </div>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
