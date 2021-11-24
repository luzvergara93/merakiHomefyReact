import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
        <ItemListContainer greeting={'Bienvenidos a Meraki Homefy'} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Meraki Homefy
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Home Deco
        </a>
      </header>
      
    </div>
  );
}

export default App;
