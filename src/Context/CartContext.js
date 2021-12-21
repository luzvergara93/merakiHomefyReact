//Este seria mi custom context

import React, { createContext, useState } from 'react' ;

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [ cart, setCart ] = useState([]);

    const getCantidad = () => {
        let subTotal = 0;
        cart.forEach(elemento => {
            // console.log(elemento);
            subTotal += elemento.cantidad
        })
        return subTotal;
    }

    const addItem = (product, quantity) => {
        const flag = isInCart(product);

        if(flag){
            let productoRepetido = cart.find (elemento => elemento.item === product);
            productoRepetido.cantidad += quantity;
            let cartSinRepetido = cart.filter(elemento => elemento.item !== product);
            setCart([...cartSinRepetido, productoRepetido]);
        }else{
            setCart([...cart, {item: product, cantidad: quantity}]);
        }
        
    }

    const isInCart = (item) => {
        //true or false
        return cart.some(product => product.item === item);
    }




   const removeItem = (id) => {
    
    let newArr = cart.filter(product => product.item.id !== id);

    newArr.splice(
        newArr.findIndex((product) => product.item.id !== id),
        1
    );
        setCart([...newArr])
    } 
        


       
    

       
    

    const clearCart = () => {
        //remover todos los items
        setCart([])
    }

    


    return ( 
            <CartContext.Provider value={{ 
                cart, 
                addItem, removeItem, clearCart, getCantidad 
                }}> 
            {children}
            </CartContext.Provider>
    )
}


export default CartContextProvider;












// export const Provider = ({children}) => {

//     const [message, setMessage] = UseState('')
//     const [severity, setSeverity] = useState('')
//     const [AddItem, setAddItem] = useState(true);

//     const setNotification = ({severity, message}) => {
//         setMessage(message)
//         setSeverity(severity)
//     }

//     return (
//         <CartContext.Provider value={product, quantity}>

//         </CartContext.Provider>
//     )
// }

// export default Context