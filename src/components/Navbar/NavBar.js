import './NavBar.css'
import logo2 from '../logo.jpg';
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom';
import { useContext, useState, useEffect  } from 'react';
import { CartContext } from "../../Context/CartContext"
import { db } from '../../services/firebase/firebase'
import {getDocs, collection} from 'firebase/firestore'
import Login from '../Login/Login';

import UserContext from '../../Context/userContext'
import NotificationContext from '../../Context/NotificationContext'

const NavBar = () => {

    const [categories, setCategories] = useState([])
    const { user, logout } = useContext(UserContext)
    const { setNotification } = useContext(NotificationContext)

    const {getCantidad} = useContext(CartContext);

    useEffect(() => {
        (async () => {
           try {
            const querySnapshot = await getDocs(collection(db, 'categories'))
            const categories = querySnapshot.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            console.log(categories)
            setCategories(categories)
        } catch (error) {
            console.log('Error searching categories:', error)
        }})()
        
        

    // useEffect(() => {
    //     getDocs(collection(db, 'categories')).then((querySnapshot) => {
    //         const categories = querySnapshot.docs.map(doc => {
    //             return {id: doc.id, ...doc.data() }
    //         })
    //         console.log(categories)
    //         setCategories(categories)
    //     })
    },[])

    const handleLogout = () => {
        logout()
        setNotification('error', `Hasta luego ${user}`)
    }


    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand">
                <Link to="/"><img src={logo2} alt="" width="80" height="80"/> </Link>
                </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link active" aria-current="page" href="/#">Home</a>
                    <Link to ="/category/Deco"><a className="nav-link" href="/#">Deco</a></Link>
                    <Link to ="/category/Espejos"><a className="nav-link" href="/#">Espejos</a></Link>
                    <Link to ="/category/Aromas"><a className="nav-link" href="/#">Aromas</a></Link>
                    
                </div>
                
                </div>
                <div>
                {
                 user ?
                 <button onClick={handleLogout} className='login'>Logout</button>
                 : <Link to='/login' className='login'>Login</Link>
                }      
                    
                </div>
                {getCantidad() <= 0 ? <span> </span> :
                <div className='number'>
                <Link to = "/Cart"><CartWidget /></Link>
                    <span className="quantity"> {getCantidad()} </span>
                </div>}
            </div>
        </nav>
    )
}

export default NavBar