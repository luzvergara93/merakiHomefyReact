import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({product}) => {
    
    // const Count = inputType === 'input' ? ItemCount : ButtonCount;
    
    
    const OnAdd = (contador) => {
        const carrito = carrito + contador;
    }

    return (
        
        <div className="CardItemDes"> 
            <div className="ItemDesContainer">
                <h2 className="ItemTitle"> 
                {product?.name}
                </h2>
            </div>
        <div className="ItemDes"> 
            <img src={product?.img} alt={product?.name} className="Img"/>
            <div className="ItemContainer"> 
                <p className="Description"> {product?.description}</p>
                <p className="Info">
                    Categoria: {product?.category} 
                </p>
                <p className="Info">
                    Precio: {product?.price} 
                </p>
                <p className="Info">
                    Cantidad: {product?.stock} unidades
                </p>
                <button className="Button"> Agregar al carrito</button>
            </div>
                <div>
                     {carrito === 0 ? <ItemCount onConfirm={OnAdd} stock={product?.stock}/> : <button> Finalizar compra </button>}
                </div>
            
        </div>
        </div>

        
    )
}

export default ItemDetail