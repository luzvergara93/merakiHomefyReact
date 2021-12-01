import {useState} from 'react';
import './ItemCount.css'


const ItemCount = ({stock, initial}) => {
    const [contador, setContador] = useState(1)

    const OnAdd = () => {
        console.log('agregado al carrito')
    }

    const Sumar = () => {
        if (contador < stock) {
        setContador(contador + 1);
        }
    }
    const Restar = () => {
        if (contador > initial) {
        setContador(contador - 1);
        }
    }

    return (
        <div className="itemCount"> 
            <div className="counter">
                <button onClick={Restar}> - </button>
                <div> {contador} </div>
                <button onClick={Sumar}> + </button>
            </div>
                <button onClick={OnAdd}> Agregar al carrito</button>
            
        </div>
    )
}

export default ItemCount;