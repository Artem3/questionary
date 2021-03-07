import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './logo.svg';
import './App.css';

import Exam from './pages/Exam';
import NewList from './pages/NewList';
import EditForm from './pages/EditForm';
import List from './pages/List';
import FbTest from './pages/FbTest';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import { saveToStorage } from 'utils/defaultLists';
import React, { useState } from 'react';

function App() {
  const [size, setSize] = useState(0);

  //initialize default questionaries and save them to local storage
  function intitDefaultLists() {
    localStorage.length == 0 && saveToStorage();
  }

  return (
    <div className="main-wrapper">
      {intitDefaultLists()}
      <Router>
        <Header size={size} />
        <Switch>
          <Route exact path="/questionnaire" component={Exam} />
          <Route path="/new" component={NewList} />
          <Route path="/lists" component={() => <List setSize={setSize} />} />
          <Route path="/fbtest" component={FbTest} />
          <Route path="/:id" component={EditForm} />
        </Switch>
      </Router>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
