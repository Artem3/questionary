import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './logo.svg';
import './App.css';

import Exam from './pages/Exam'
import NewQestionnaire from './pages/NewQestionnaire';
import About from './pages/About';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';


function App() {
  return (
    <div className="main-wrapper">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/questionnaire" component={Exam} />
          <Route path="/new" component={NewQestionnaire} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
