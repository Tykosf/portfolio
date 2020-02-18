import React from 'react';
import Landingpage from './LandingPage/LandingPage';
import Projects from './Projects/Projects';
import { Switch, Route } from 'react-router-dom';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Landingpage} /> 
    <Route path="/projects" component={Projects} />
  </Switch>
)
export default Main
