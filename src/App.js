import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DataProvider from './components/DataProvider'


function App() {
  return (
        <body className="App-body">
          <DataProvider />
          <img src={logo} className="App-logo" alt="logo" />
        </body>
  );
}

export default App;
