import React, { createContext, useState } from 'react' ;

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [ cart, setCart ] = useState([]);

    const getQuantity = () => {
        let subTotal = 0;
        cart.forEach(element => {
            subTotal += element.cantidad
        })
        return subTotal;
    }


    const addItem = (product, quantity) => {

        const flag = isInCart(product.id);
        
        if (flag) {
            let productoRepetido = cart.find (elemento => elemento.item.id === product.id);
            productoRepetido.cantidad += quantity;
            let cartSinRepetido = cart.filter (elemento => elemento.item.id !== product.id);
            setCart([...cartSinRepetido, productoRepetido]);
        } else {
            setCart([...cart, {item: product, cantidad: quantity}]);
        }
    }

    const isInCart = (product) => {
        
        return cart.some(elemento => elemento.item.id === product);
    
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
        setCart([])
    }

    const addTotal = () => {
        let total = 0;

        cart.forEach((product) => {
           total += (product.item.price * product.cantidad);
        });
    
        
        return total;
    }

    return ( 
            <CartContext.Provider value={{ 
                cart, 
                addItem, removeItem, clearCart, getQuantity, addTotal 
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