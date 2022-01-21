import React from 'react';
import { useState, useContext} from 'react';
import { CartContext } from '../../Context/CartContext';
import './Cart.css';
import { Link } from 'react-router-dom';
import {addDoc, collection, Timestamp, doc, writeBatch, getDoc} from 'firebase/firestore'
import {db} from '../../services/firebase/firebase'
import UserContext from '../../Context/userContext'
import NotificationContext from '../../Context/NotificationContext'
import ContactForm from '../ContactForm/ContactForm';

const Cart = () => {
    const {cart, removeItem, clearCart, addTotal} = useContext (CartContext);

    // eslint-disable-next-line
    const [processingOrder, setProcessingOrder] = useState(false)
    const [contact, setContact] = useState({
        phone: '',
        email: '',
        comment: ''
    })

    const { user} = useContext(UserContext)
    const {setNotification} = useContext(NotificationContext)
   

    const confirmOrder = () => {
        setProcessingOrder(true)

        const objOrder = {
            buyer: user,
            items: cart,
            total: addTotal(),
            phone: contact.phone,
            email: contact.email,
            comment: contact.comment,
            date: Timestamp.fromDate(new Date())
        }

    const batch = writeBatch(db) 
    const NoStock = [];

    objOrder.items.forEach((prod) => {
        getDoc(doc(db, 'items', prod.item.id)).then((docSnap) => {
            if(docSnap.data().stock >= prod.cantidad) {
                batch.update(doc(db, 'items', docSnap.id), {
                    stock: docSnap.data().stock - prod.cantidad,
                });
            } else {
                NoStock.push({ id: docSnap.id, ...docSnap.data() });
            }
        })
    });

    if(NoStock.length === 0){
        addDoc(collection(db, 'orders'), objOrder).then(({id}) => {
            batch.commit().then(() => {
                setNotification('success', `El id de su orden es ${id}`);
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
                <th scope="col">Descripción</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Precio unitario </th>
                <th scope="col"> </th>
                </tr>
            </thead>
            <tbody className="CartList">
            {cart.map(product => {
                        return <tr className="CartRow">
                            <td> {product.item.name}</td>
                            <td> {product.item.description} </td>
                            <td> {product.cantidad} </td>
                            <td> $ {product.item.price} </td> 
                            <td> <button className="btn btn-danger remove"onClick={removeItem} data-name={product.item.id} > X </button></td>
                        </tr>
            })}
            </tbody>
            
        </table>

      
        {cart.length === 0 ? <div className="noItems"> <span> No tienes ningun producto en el carrito</span> <Link to='/'> 
        <button className="cancel"> Volver al listado</button></Link></div>
            : (<div> <button className="cancel" onClick={clearCart}> Cancelar compra </button> </div>)}
            <span className="total"> Total: $ {addTotal()} </span>
        
        { (cart.length > 0 && contact.phone === '' && contact.email === '' && contact.comment === '') &&
           ( <ContactForm  setContact={setContact}/>
            )}
        { }
        { (cart.length > 0 && contact.phone !== '' && contact.email !== '' && contact.comment !== '') && 
        (<div>
            <div className="orderData"> 
                <h3> Los datos para su compra son:</h3>
                <div>
                <p> Nombre: {user}</p>
                <p> Teléfono: {contact.phone}</p>
                <p> Email: {contact.email}</p>
                <p> Comentario: {contact.comment}</p>
                </div>
                </div>
        <button className="cancel" onClick={confirmOrder}> Finalizar compra</button></div>)}
        

        </div> 
    )
}

export default Cart