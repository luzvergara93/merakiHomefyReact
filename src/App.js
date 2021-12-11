import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';





function App() {
  return (
    <div className="App">
     
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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
