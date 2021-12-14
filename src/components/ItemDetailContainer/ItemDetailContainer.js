import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.css'
import { getProductById } from "../../products"
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import Loader from "../Loader/Loader"


const ItemDetailContainer = () => {

    const [product, setProduct] = useState()
    
    const {paramId} = useParams()


    useEffect(() => {
        getProductById(paramId).then(item => {
            setProduct(item)
        }).catch(err => {
            console.log(err)
        })
    
        return (() => {
            setProduct()
        })
    }, [paramId])

    return (
        <div className="ItemDetailContainer">
             
            { product !== undefined ?
                <ItemDetail product={product}/>
            :
            <Loader/>
            }
            
         
        </div>
    )

}

export default ItemDetailContainer