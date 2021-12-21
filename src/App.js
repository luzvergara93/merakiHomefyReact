import React from 'react';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CartContextProvider from './Context/CartContext';
import Cart from './components/Cart/Cart';



function App() {

  return (
    <div className="App">
      <CartContextProvider>
          <BrowserRouter> 
              <NavBar />
              <Switch>
                <Route exact path='/'>
                    <ItemListContainer/>
                </Route>
                <Route exact path='/category/:category'>
                    <ItemListContainer/>
                </Route>
                <Route path='/detail/:paramId'> 
                    <ItemDetailContainer/>
                  </Route>
                  <Route path='/Cart'> 
                    <Cart/>
                  </Route>
              </Switch>
            </BrowserRouter>
      </CartContextProvider>
     
    </div>
  );
}

export default App;
