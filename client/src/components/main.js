import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import About from './about';
import Contact from './contact';
import logIn from './logIn';
import Register from './register';
import Search from './search';


const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/members" component={LandingPage} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/login" component={logIn} />
    <Route path="/register" component={Register} />
    <Route path="/search" component={Search} />
  </Switch>
)

export default Main;