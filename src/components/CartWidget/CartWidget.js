import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './CartWidget.css'
import { CartContext } from "../../Context/CartContext"
import { useContext } from 'react';


const CartWidget = () => {

    const {getQuantity} = useContext(CartContext);

    return (
        <div className="shoppingCart"> 
        <FontAwesomeIcon icon={faShoppingCart}> </FontAwesomeIcon>
        <span className="quantity"> {getQuantity()} </span>
        </div>
    )
}

export default CartWidget 