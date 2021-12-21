import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import React, { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext'


const ItemDetail = ({ product }) => {

  const {addItem} = useContext(CartContext);

  // En value tengo todo lo que este en cache provider
  // en lugar de value, puedo poner lo que necesite nada mas por ej {addItem}
  // tambien lo tengo que pasar al return
  
  const [buy, setBuy] = useState(false);
  const [qty, setQty] = useState(0);



  const handleBuy = (qty) => {
    setBuy(true);
    setQty(qty);
  }

  const handlePurchase = () => {
    addItem(product, qty);

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
          <p className="Info">Categoria: {product?.category}</p>
          <p className="Info">Precio: {product?.price}</p>
          <p className="Info">Cantidad: {product?.stock} unidades</p>
          <div>
          {!buy ? <ItemCount stock = {product?.stock} onAdd ={(qty) => handleBuy(qty)} />
         : <Link to="/Cart"><button className="Button" onClick={handlePurchase}> Ver Carrito</button> </Link> 
          }
        </div>
        
        </div>
      </div>
    </div>
  );
};
export default ItemDetail;