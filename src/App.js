import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './logo.svg';
import './App.css';

import Exam from './pages/Exam';
import NewList from './pages/NewList';
import EditForm from './pages/EditForm';
import List from './pages/List';
import Import from './pages/ImportPage';
import Home from './pages/Home';
import Header from './components/Header';

import { HashRouter, Switch, Route } from 'react-router-dom';
import { saveToStorage, generateId } from 'utils/defaultLists';
import React, { useState } from 'react';
import { defaultLanguage, dictionary, LocalisationContext } from 'localisation';

export default function App() {
  // Number of saved lists with questions in local storage
  const [size, setSize] = useState(localStorage.length - 1); // - 1 is userId
  const [language, setLanguage] = useState(defaultLanguage); //language is en by default

  //initialize default questionaries and save them to local storage
  function intitDefaultLists() {
    localStorage.length < 2 && saveToStorage();
  }
  //generate user Id if not exist in local storage
  function generateUserId() {
    localStorage.getItem('userId') == null && generateId();
  }

  //language toggler
  const toggleLanguage = (e) => (e.target.checked ? setLanguage('ua') : setLanguage('en'));

  return (
    <div className="main-wrapper">
      {generateUserId()}
      {intitDefaultLists()}
      <HashRouter>
        <LocalisationContext.Provider value={dictionary[language]}>
          <Header size={size} languageHandler={toggleLanguage} language={language} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/new" component={() => <NewList setSize={setSize} />} />
            <Route path="/lists" component={() => <List setSize={setSize} />} />
            <Route path="/import" component={Import} />
            <Route path="/:id/edit" component={() => <EditForm setSize={setSize} />} />
            <Route path="/:id/exam" component={Exam} />
          </Switch>
        </LocalisationContext.Provider>
      </HashRouter>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}
