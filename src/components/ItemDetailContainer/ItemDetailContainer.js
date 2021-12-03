import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.css'
import { getItem } from "../../products"
import React, { useEffect, useState } from "react";


const ItemDetailContainer = () => {

    const [product, setProduct] = useState([])

    useEffect(() => {
        const onlyItem = getItem()
        onlyItem.then(onlyItem => {
            setProduct(onlyItem)
        })
    
        return (() => {
            setProduct([])
        })
    }, [])

    return (
        <div className="ItemDetailContainer">
            <ItemDetail key={product.id} product={product}/>
        </div>
    )

}

export default ItemDetailContainer