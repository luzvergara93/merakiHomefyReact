import ItemList from "../ItemList/ItemList"
import './ItemListContainer.css'
import { getProductByCategory, getProductById, getProducts } from "../../products"
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loader from "../Loader/Loader"



const ItemListContainer = () => {

    const {category} = useParams()
    const [products, setProducts] = useState([])

    useEffect(() => {

        ( async () => {

            if (category !== undefined){

                const products = await getProductByCategory(category);
                console.log(products);
                setProducts(products)
            }else {

                const products = await getProducts()
                console.log(products)
                setProducts(products)
            }
        })()

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