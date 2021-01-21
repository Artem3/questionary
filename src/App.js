import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './logo.svg';
import './App.css';

import Exam from './pages/Exam'


function App() {
  return (
        <>
          <Exam />
          <img src={logo} className="App-logo" alt="logo" />
        </>
  );
}

export default App;
