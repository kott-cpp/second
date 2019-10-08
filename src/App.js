import React from 'react'
import { BrowserRouter, Route, Switch, render } from 'react-router-dom'
import Home from './components/Home'
import Pilot from './components/Pilot'
import PilotTable from './components/PilotTable'
import Films from './components/Films'
import Chart from './components/Chart'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
import Navigation from './components/Navigation'
import Helmet from 'react-helmet'
import ApolloClient from 'apollo-boost'
import { gql } from 'apollo-boost'
import { ApolloProvider, useQuery, useMutation } from '@apollo/react-hooks'
import { mutationPortQuery, portQuery } from './components/PortToJack'


const client = new ApolloClient({
  uri: 'https://api.graphcms.com/simple/v1/swapi',
})
function App() {
  /* const variables = {variables: { input: { panelJackId: 298, switchPortId: 229, }, }, }
  const [assign, { data, error, loading }] = useMutation(mutationPortQuery)
  if (error) return <div>error :( {error}</div>
  if (loading) return <div>loading... {loading}</div>

  */

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
            <Route path="/pilotTable" component={PilotTable} />
            <Route path="/films" component={Films} />
            <Route path="/chart" component={Chart} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App

/*
          <Route component ...
          <pre>{data}</pre>
          <button onClick={() => assign(variables)}>
            Port To Jack Assignment
          </button>

 */
