import logo from './logo.svg';
import './App.css';
import DataProvider from './components/DataProvider'

function App() {
  return (
    <div className="App">
      <DataProvider />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
