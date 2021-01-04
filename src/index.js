import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/Header';

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

