import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import DataProvider from './components/DataProvider'

function App() {
  return (
    <Container>
      <div className="App">
        <header className="App-header">
          <DataProvider />
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </Container>
  );
}

export default App;
