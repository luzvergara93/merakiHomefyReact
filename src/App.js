import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';





function App() {
  return (
    <div className="App">
     
        <NavBar />
        <ItemListContainer/>
        <ItemDetailContainer/>
        
      
    </div>
  );
}

export default App;
