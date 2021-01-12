import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NewQestionnaire from './components/NewQestionnaire';
import About from './components/About';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import DataProvider from './components/DataProvider';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/new" component={NewQestionnaire} />
      <Route path="/about" component={About} />
    </Switch>
  </Router>
  , document.getElementById('root')
);

