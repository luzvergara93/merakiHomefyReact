import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import React, { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext'
import NotificationContext from '../../Context/NotificationContext'


const ItemDetail = ({ product }) => {

  const {setNotification} = useContext(NotificationContext)
  const {addItem} = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);


  const addToCart = (quantity) => {
    setNotification('success', `Se agregaron ${quantity} items al carrito`)
    setQuantity(quantity)
    addItem(product, quantity)
  }
  
  return (
    
    <div className="CardItemDes">
      <div className="ItemDesContainer">
        <h2 className="ItemTitle">{product?.name}</h2>
      </div>
      <div className="ItemDes">
        <img src={product?.img} alt={product?.name} className="Img" />
        <div className="ItemContainer">
          <p className="Description"> {product?.description}</p>
          <p className="Info">Categoría: {product?.category}</p>
          <p className="Info">Precio: $ {product?.price}</p>
          <div>
          { quantity === 0 ? <ItemCount stock={product.stock}  onAdd ={addToCart} />
         : <Link to="/Cart"><button className="Button" > Ir al carrito</button></Link> 
          }
        </div>
        
        </div>
      </div>
    </div>
  );
};
export default ItemDetail;