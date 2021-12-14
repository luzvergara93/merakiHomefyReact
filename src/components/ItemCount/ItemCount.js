import {useState} from 'react';
import './ItemCount.css'


// const ItemCount = ({onConfirm, stock}) => {
//     const [contador, setContador] = useState(0)

//     const handleChange = ({target}) => {
//         if(target.value <= stock && target.value >= 0) {
//             setContador(target.value)
//         }
//     } 


//     return (
//         <div className="itemCount"> 
//                 <input type="number" onChange={handleChange} value={contador}/>
//                 <button onClick={() => onConfirm(contador)}> Agregar al carrito</button>
                
//         </div>
//     )
// }

const ItemCount = ({ onConfirm, stock}) => {
    const [contador, setContador] = useState(0)

    const Sumar = () => {
        if (contador < stock) {
        setContador(contador + 1);
        }
    }
    const Restar = () => {
        if (contador > 0) {
        setContador(contador - 1);
        }
    }

    return (
        <div>
            <button onClick={Restar}> - </button>
            <p> {contador}</p>
            <button onClick={Sumar}> +</button>
            <button onClick={ () => onConfirm(contador)}> Agregar al Carrito </button>
        </div>
    )
}

export default ItemCount;