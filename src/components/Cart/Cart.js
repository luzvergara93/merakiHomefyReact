import React from 'react';
import { useState, useContext, useRef } from 'react';
import { CartContext } from '../../Context/CartContext';
import './Cart.css';
import { Link } from 'react-router-dom';
import {addDoc, collection, Timestamp, doc, writeBatch, getDoc} from 'firebase/firestore'
import {db} from '../../services/firebase/firebase'
import UserContext from '../../Context/userContext'
import NotificationContext from '../../Context/NotificationContext'

const Cart = () => {
    const {cart, removeItem, clearCart, sumarTotal} = useContext (CartContext);

    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [comment, setComment] = useState('')

    const [processingOrder, setProcessingOrder] = useState(false)

    
    const { user} = useContext(UserContext)
    const {setNotification} = useContext(NotificationContext)
   

    const confirmOrder = () => {
        setProcessingOrder(true)

        const objOrder = {
            buyer: user,
            items: cart,
            total: sumarTotal(),
            phone: phone,
            email: email,
            comment: comment,
            date: Timestamp.fromDate(new Date())
        }

    const batch = writeBatch(db) 
    const NoStock = [];

    objOrder.items.forEach((prod) => {
        getDoc(doc(db, 'items', prod.id)).then((docSnap) => {
            if(docSnap.data().stock >= prod.qty) {
                batch.update(doc(db, 'items', docSnap.id), {
                    stock: docSnap.data().stock - prod.qty,
                });
            } else {
                NoStock.push({ id: docSnap.id, ...docSnap.data() });
            }
        })
    });

    if(NoStock.length === 0){
        addDoc(collection(db, 'orders'), objOrder)
        .then((doc) => {
            batch.commit().then(() => {
                setNotification('success', `El id de su orden es: ${doc.id}`);
            })
        }).catch((error) => {
            setNotification('error', `Error ejecutando la orden: ${error}` )
        }).finally(() => {
            setProcessingOrder(false)
            clearCart()
        });
    }
};

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

      
        {cart.length === 0 ? <div className="noItems"> <span> No tienes ningun producto </span> <Link to='/'> 
        <button className="btn btn-outline-primary"> Volver al listado</button></Link></div>
            : (<div> <button className="btn btn-warning" onClick={clearCart}> Cancelar compra </button> </div>)}
            <span className="total"> total: $ {sumarTotal()} </span>
        
        { cart.length > 0 &&
           (<div> <form className='LoginForm'>
                <h2> Ingresa tus datos de contacto para finalizar la compra </h2>
                        <label className='LabelLogin'>
                            Telefono
                        <input
                            className='InputLogin'
                            type='text'
                            name='Telefono'
                           value={phone}
                            onChange={({ target }) => setPhone(target.value)}
                        />
                        </label>
                        <label className='LabelLogin'>
                            email
                        <input
                            className='InputLogin'
                            type='email'
                            name='email'
                           value={email}
                            onChange={({ target }) => setEmail(target.value)}
                        />
                        </label>
                        <label className='LabelLogin'>
                            Comentario
                        <input
                            className='InputLogin'
                            type='text'
                            name="comentario"
                            value={comment}
                            onChange={({ target }) => setComment(target.value)}
                        />
                        </label>
                        
                    </form>

                    <button onClick={confirmOrder}> Finalizar compra</button>
         </div>
            )}
        </div> 
    )
}

export default Cart