import ItemList from "../ItemList/ItemList"
import './ItemListContainer.css'
import { getProducts } from "../../products"
import React, { useEffect, useState } from "react";


const ItemListContainer = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const list = getProducts()
        list.then(list => {
            setProducts(list)
        })
    
        return (() => {
            setProducts([])
        })
    }, [])

    return (
        <div className="ItemListContainer">
            <ItemList products={products} />
        </div>
    )

}

export default ItemListContainer