import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './logo.svg';
import './App.css';

import Exam from './pages/Exam';
import NewList from './pages/NewList';
import EditForm from './pages/EditForm';
import List from './pages/List';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import { saveToStorage } from 'utils/defaultLists';

function App() {
  //initialize default questionaries and save them to local storage
  function intitDefaultLists() {
    localStorage.length == 0 && saveToStorage();
  }

  return (
    <div className="main-wrapper">
      {intitDefaultLists()}
      <Router>
        <Header />
        <Switch>
          <Route exact path="/questionnaire" component={Exam} />
          <Route path="/new" component={NewList} />
          <Route path="/lists" component={List} />
          <Route path="/:id" component={EditForm} />
        </Switch>
      </Router>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
