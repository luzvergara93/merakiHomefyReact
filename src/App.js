import React, { useEffect, useContext } from 'react'
import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CartContextProvider from './Context/CartContext';
import Cart from './components/Cart/Cart';
import Notification from './components/Notification/Notification'
import {NotificationContextProvider} from './Context/NotificationContext'
import UserContext from './Context/userContext';
import Login from './components/Login/Login'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'

const App = () => {
  const { login } = useContext(UserContext)

    useEffect(() => {
      const loggedUserJSON = window.localStorage.getItem('user')
      console.log(loggedUserJSON)
      if(loggedUserJSON) {
        const objUser = JSON.parse(loggedUserJSON)
        console.log(objUser)
        login(objUser)
      }
    }, []) //eslint-disable-line



  return (
    <div className="App">
        <NotificationContextProvider>
              <CartContextProvider>
                  <BrowserRouter> 
                      <NavBar />
                      <Notification/>
                      <Routes>
                        <Route path='/' element={<ItemListContainer/>}/>
                        <Route path='/category/:category' element={<ItemListContainer/>}/>
                        <Route path='/detail/:paramId' element={<ItemDetailContainer/>}/> 
                          <Route path='/Cart' element={<Cart/>}/> 
                          <Route path='/login' element={<Login/>}/>  
                      </Routes>
                    </BrowserRouter>
              </CartContextProvider>
      </NotificationContextProvider>
     
    </div>
  );
}

export default App;
