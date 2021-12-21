import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import './Cart.css';

const Cart = () => {

    const {cart, removeItem, clearCart} = useContext (CartContext);


    

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                <th scope="col">Producto</th>
                <th scope="col">Descripcion</th>
                <th scope="col">Cantidad</th>
                <th scope="col"> </th>
                </tr>
            </thead>
            <tbody className="CartList">
            {cart.map(producto => {
                        return <tr className="CartRow">
                            <td> {producto.item.name}</td>
                            <td> {producto.item.description} </td>
                            <td> {producto.cantidad} </td>
                            <td> <button className="btn btn-danger remove"onClick={removeItem} data-name={producto.item.id} > X </button></td>
                        </tr>
            })}
            </tbody>
            <button className="btn btn-warning" onClick={clearCart}> Vaciar Carrito </button>
        </table>
    )
}

export default Cart;