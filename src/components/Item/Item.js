import './Item.css'
import { Link } from 'react-router-dom';

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
            Precio: ${product.price} 
        </p>
        {/* <button className="Button"> Ver Detalle</button> */}
        <Link className="Button" to={`/detail/${product.id}`}> Ver Detalle </Link>
        </div>
    )
}

export default Item