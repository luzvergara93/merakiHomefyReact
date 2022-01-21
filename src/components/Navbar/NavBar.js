import './NavBar.css'
import logo2 from '../../logo.jpg';
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom';
import { useContext, useState, useEffect  } from 'react';
import { db } from '../../services/firebase/firebase'
import {getDocs, collection} from 'firebase/firestore'
import UserContext from '../../Context/userContext'
import NotificationContext from '../../Context/NotificationContext'


const NavBar = () => {

    // eslint-disable-next-line
    const [categories, setCategories] = useState([])
    const { user, logout } = useContext(UserContext)
    const { setNotification } = useContext(NotificationContext)

    useEffect(() => {
        (async () => {
           try {
            const querySnapshot = await getDocs(collection(db, 'categories'))
            const categories = querySnapshot.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            
            setCategories(categories)
        } catch (error) {
            console.log('Error searching categories:', error)
        }})()
        
    },[])

    const handleLogout = () => {
        logout()
        setNotification('error', `Hasta luego ${user}`)
    }


    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand"><img src={logo2} alt="" width="80" height="80"/> </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to="/" className="nav-link active" aria-current="page"> Home </Link>
                    <Link to ="/category/Deco" className="nav-link">Deco </Link>
                    <Link to ="/category/Espejos" className="nav-link" >Espejos </Link>
                    <Link to ="/category/Aromas" className="nav-link" >Aromas</Link>
                    
                </div>
                
                </div>
                <div>
                {
                 user ?
                 <button onClick={handleLogout} className='login'>Logout</button>
                 : <Link to='/login' className='login'>Login</Link>
                }      
                    
                </div>
                {user &&
                <div className='number'>
                <Link to = "/Cart"><CartWidget /></Link>
                </div>}
            </div>
        </nav>
    )
}

export default NavBar