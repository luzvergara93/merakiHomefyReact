import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from 'react-router-dom';



const ItemDetail = ({ product }) => {
  const [contador, setContador] = useState(0);
  const handleSumar = () => {
    if (contador < product?.stock) {
      setContador(contador + 1);
    }
  };
  const handleRestar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };
  const handleOnAdd = () => {
    const carrito = { ...product, cantidad: contador };
    console.log(carrito);
  };
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
          <ItemCount
            restar={handleRestar}
            sumar={handleSumar}
            contador={contador}
          />
          {contador > 0 ? (
            <Link to="/cart"><button className="Button" onClick={handleOnAdd}>
              Agregar al carrito
            </button> </Link>
          ) : (
            <p className="Cantidad"> Elija cantidad</p>
          )}
        </div>
        
        </div>
      </div>
    </div>
  );
};
export default ItemDetail;