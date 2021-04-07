import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './logo.svg';
import './App.css';

import Exam from './pages/Exam';
import NewList from './pages/NewList';
import EditForm from './pages/EditForm';
import List from './pages/List';
import Share from './pages/SharePage';
import Home from './pages/Home';
import Header from './components/Header';

import { BrowserRouter as HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { saveToStorage, generateId } from 'utils/defaultLists';
import React, { useState } from 'react';

function App() {
  // Number of saved lists with questions in local storage
  const [size, setSize] = useState(localStorage.length - 1); // - 1 is userId

  //initialize default questionaries and save them to local storage
  function intitDefaultLists() {
    localStorage.length < 2 && saveToStorage();
  }
  //generate user Id if not exist in local storage
  function generateUserId() {
    localStorage.getItem('userId') == null && generateId();
  }

  return (
    <div className="main-wrapper">
      {generateUserId()}
      {intitDefaultLists()}
      <HashRouter>
        <Header size={size} />
        <Switch>
          <Route exact path="/questionnaire" component={Home} />
          <Route path="/new" component={() => <NewList setSize={setSize} />} />
          <Route path="/lists" component={() => <List setSize={setSize} />} />
          <Route path="/share" component={Share} />
          <Route path="/:id/edit" component={() => <EditForm setSize={setSize} />} />
          <Route path="/:id/exam" component={Exam} />
          <Route exact path="/">
            <Redirect to="/questionnaire" />
          </Route>
        </Switch>
      </HashRouter>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
