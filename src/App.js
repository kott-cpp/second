import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Navigation from "./components/Navigation";
import Helmet from "react-helmet";

function App() {
  return (
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
      </div>
    </BrowserRouter>
  );
}

export default App;
