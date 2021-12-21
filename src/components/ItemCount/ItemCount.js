import React, { useState } from 'react';
import "./ItemCount.css";

const ItemCount = ({ initial, stock, onAdd }) => {

  const [count, setCount] = useState(1)
  const [out, setOut] = useState(false);

  const handleAdd = () => {
    if (count < stock ) {
      setCount(count + 1);
    }
    else{
      setOut(true);
    }
  }

  const handleSub = () => {
    if (count === 1) {
      return
    }else {
      setCount( count - 1)
      setOut(false);
    }
  }

  return (
    <div className="Contador">
      <div className="counter">
      <button onClick={handleSub}> - </button>
      <p> {count}</p>
      <button onClick={handleAdd}> +</button>
      {out && <span> Out of Stock</span>}
      </div>
      <button className="addToCart" onClick={() => onAdd(count)}> Agregar al carrito</button>
    </div>
  )
};
export default ItemCount;