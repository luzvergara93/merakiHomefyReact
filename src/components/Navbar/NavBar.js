import './NavBar.css'
import logo2 from '../logo.jpg';
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from "../../Context/CartContext"



const NavBar = () => {

    const {getCantidad} = useContext(CartContext);
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
                <Link to = "/Cart"> <CartWidget /> </Link>
                <div className='number'>
                    <span> {getCantidad()} </span>
                </div>
            </div>
        </nav>
    )
}

export default NavBar