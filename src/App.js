import React from 'react'
import { BrowserRouter, Route, Switch, render } from 'react-router-dom'
import Home from './components/Home'
// import Pilot from './components/Pilot'
// import Films from './components/Films'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
import Navigation from './components/Navigation'
import Helmet from 'react-helmet'
import ApolloClient from 'apollo-boost'
import { gql } from 'apollo-boost'
import { ApolloProvider, useQuery, useMutation } from '@apollo/react-hooks'
import { mutationPortQuery } from './components/PortToJack'


const portQuery = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
})

function App() {
  const variables = {variables: { input: { panelJackId: 298, switchPortId: 229, }, }, }
  const [assign, { data, error, loading }] = useMutation(mutationPortQuery)
  if (error) return <div>error :( {error}</div>
  if (loading) return <div>loading... {loading}</div>

  return (
    <ApolloProvider client={portQuery}>
      <BrowserRouter>
        <div>
          <Helmet>
            <title>My Page</title>
          </Helmet>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            {/*<Route path="/pilot" component={Pilot} />*/}
            {/*<Route path="/films" component={Films} />*/}
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={Error} />
          </Switch>
          <pre>{data}</pre>
          <button onClick={() => assign(variables)}>
            Port To Jack Assignment
          </button>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
