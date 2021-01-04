import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/service" component={Service} />
      <Route path="/about" component={About} />

    </Switch>
  </Router>
  , document.getElementById('root')
);

