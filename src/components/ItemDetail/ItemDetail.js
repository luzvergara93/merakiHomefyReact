import './ItemDetail.css'

const ItemDetail = ({ product }) => {
    return (
        
        <div className="CardItemDes"> 
            <div className="ItemDesContainer">
                <h2 className="ItemTitle"> 
                {product.name}
                </h2>
            </div>
        <div className="ItemDes"> 
            <img src={product.img} alt={product.name} className="Img"/>
            <div className="ItemContainer"> 
                <p className="Description"> {product.description}</p>
                <p className="Info">
                    Categoria: {product.category} 
                </p>
                <p className="Info">
                    Precio: {product.price} 
                </p>
                <button className="Button"> Comprar ahora</button>
            </div>
        
        
        </div>
        </div>

        
    )
}

export default ItemDetail