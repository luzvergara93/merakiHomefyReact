import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = () => {

    const {cart, removeItem, clearCart, sumarTotal} = useContext (CartContext);


    

    return (
        <div>
        <table className="table table-striped">
            <thead>
                <tr>
                <th scope="col">Producto</th>
                <th scope="col">Descripcion</th>
                <th scope="col">Cantidad</th>
                <th scope="col"> Precio unitario </th>
                <th scope="col"> </th>
                </tr>
            </thead>
            <tbody className="CartList">
            {cart.map(producto => {
                        return <tr className="CartRow">
                            <td> {producto.item.name}</td>
                            <td> {producto.item.description} </td>
                            <td> {producto.cantidad} </td>
                            <td> $ {producto.item.price} </td> 
                            <td> <button className="btn btn-danger remove"onClick={removeItem} data-name={producto.item.id} > X </button></td>
                        </tr>
            })}
            </tbody>
            
        </table>
        {cart <= 0 ? <div className="noItems"> <span> No tienes ningun producto </span> <Link to='/'> <button className="btn btn-outline-primary"> Volver al listado</button></Link></div>
            : <button className="btn btn-warning" onClick={clearCart}> Vaciar Carrito </button>}
            <span className="total"> total: $ {sumarTotal()} </span>
        </div>
    )
}

export default Cart;