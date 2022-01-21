import ItemList from "../ItemList/ItemList"
import './ItemListContainer.css'
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loader from "../Loader/Loader"
import { getProducts } from '../../services/firebase/firebase'

const ItemListContainer = () => {

    const {category} = useParams()
    const [products, setProducts] = useState([])

    useEffect(() => {

        getProducts('category', '==', category).then(products => {
            setProducts(products)
        }).catch(error => {
            console.log(error)
        })

        return(() => {
            setProducts([])
        })

    }, [category])


    return (
        <div className="ItemListContainer">

            {products.length !== 0 ?
            <ItemList products={products}/>
            :
            <Loader/>
            }
            
            
        </div>
    )

}

export default ItemListContainer