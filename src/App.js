import React from 'react'
import { BrowserRouter, Route, Switch, render } from 'react-router-dom'
import Home from './components/Home'
import Pilot from './components/Pilot'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
import Navigation from './components/Navigation'
import Helmet from 'react-helmet'
import { ApolloProvider, useQuery } from '@apollo/react-hooks'
import ApolloClient from 'apollo-client'


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
        </div>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
