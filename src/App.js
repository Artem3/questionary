import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './logo.svg';
import './App.css';

import Exam from './pages/Exam';
import NewQestionnaire from './pages/NewQestionnaire';
import EditForm from './pages/EditForm';
import List from './pages/List';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div className="main-wrapper">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/questionnaire" component={Exam} />
          <Route path="/new" component={NewQestionnaire} />
          <Route path="/lists" component={List} />
          <Route path="/:id" component={EditForm} />
        </Switch>
      </Router>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
