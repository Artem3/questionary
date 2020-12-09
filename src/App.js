import logo from './logo.svg';
import './App.css';
import DataComponent from './components/DataComponent'

function App() {
  return (
    <div className="App">
      <h1>la-la</h1>
      <DataComponent />
      <header className="App-header">
        <h2>tu-tu</h2>
        <img src={logo} className="App-logo" alt="logo" />

      </header>
    </div>
  );
}

export default App;
