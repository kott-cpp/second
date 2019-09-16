import React from 'react'
import { BrowserRouter, Route, Switch, render } from 'react-router-dom'
import Home from './components/Home'
import Pilot from './components/Pilot'
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
`;

function PortToJackAssignment() {
  let input;
    const [portToJackAssignment, { data }] useMutation(PORT_TO_JACK_ASSIGNMENT);

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          portToJackAssignment({ variables: { input: input.id } });
          input.id = '';
        }}
      >
        <input
          ref={node => {
          input = node;
          }}
        />
        <button type="submit">Port To Jack Assignment</button>
      </form>
    </div>
  );
}
/*
const client = new ApolloClient({
  uri: 'https://api.graphcms.com/simple/v1/swapi',
})

client
.query({
  query: gql`
      {
          Starship(name: "Millennium Falcon") {
              name
              hyperdriveRating
              pilots(orderBy: height_DESC) {
                  name
                  height
                  homeworld {
                      name
                  }
                  species {
                      name
                  }
                  films {
                      title
                  }
              }
          }
      }
  `,
})
.then(result => console.log(result.data.Starship.pilots[0]))

function PilotName() {
  const { loading, error, data } = useQuery(gql`
      {
          Starship(name: "Millennium Falcon") {
              name
              hyperdriveRating
              pilots(orderBy: height_DESC) {
                  name
                  height
                  homeworld {
                      name
                  }
                  species {
                      name
                  }
                  films {
                      title
                  }
              }
          }
      }
  `)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return data.Starship.pilots.map(({ name, height, homeworld }) => (
    <div>
      <ul>
        <li>
          Name: {name} - Height: {height}cm -{homeworld.name}
        </li>
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
            <Route path="/pilot" component={Pilot} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={Error} />
          </Switch>
          {/*<PilotName />*/}
          {/*<ASSIGN_PORT_TO_JACK />*/}
        </div>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
