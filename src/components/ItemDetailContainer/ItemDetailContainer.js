import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.css'
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import Loader from "../Loader/Loader"
import {getDoc, doc} from 'firebase/firestore'
import {db} from '../../services/firebase/firebase'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState()
    
    const {paramId} = useParams()


    useEffect(() => {

        getDoc(doc(db, 'items', paramId)).then((querySnapshot) => {
            const product = { id: querySnapshot.id, ...querySnapshot.data()}
            setProduct(product)
        }).catch((error) => {
            console.log('Error searching item', error)
        });

        //consulta local
        // getProductById(paramId).then(item => {
        //     setProduct(item)
        // }).catch(err => {
        //     console.log(err)
        // })
    
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