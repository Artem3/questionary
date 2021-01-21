import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NewQestionnaire from './pages/NewQestionnaire';
import About from './pages/About';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';



ReactDOM.render(
  <body className="App-body">
  <Router>
    <Header />
    <Switch>
      <Route exact path="/questionnaire" component={App} />
      <Route path="/new" component={NewQestionnaire} />
      <Route path="/about" component={About} />
    </Switch>
  </Router>
  </body>
  , document.getElementById('root')
);

