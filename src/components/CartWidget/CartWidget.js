import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import '../Navbar/NavBar.css'

const CartWidget = () => {
    return (
        <div className="shoppingCart"> 
        <FontAwesomeIcon icon={faShoppingCart}> </FontAwesomeIcon>
        <div className="number"> 4 </div>
        </div>
    )
}

export default CartWidget 