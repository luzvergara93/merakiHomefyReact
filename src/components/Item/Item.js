import './Item.css'

const Item = ({ product }) => {
    
    return (
        <div className="CardItem"> 
        <div className="ContainerItem">
            <h2 className="ItemTitle"> 
            {product.name}
            </h2>
        </div>
        <img src={product.img} alt={product.name} className="ItemImg"/>
        <p className="Info">
            Categoria: {product.category} 
        </p>
        <p className="Info">
            Precio: {product.price} 
        </p>
        <button className="Button"> Ver Detalle</button>
        </div>
    )
}

export default Item