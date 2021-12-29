import ItemList from "../ItemList/ItemList"
import './ItemListContainer.css'
// import { getProductByCategory, getProductById, getProducts } from "../../products"
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loader from "../Loader/Loader"

import {collection, getDocs, query, where} from 'firebase/firestore'
import { db } from '../../services/firebase/firebase'

const ItemListContainer = () => {

    const {category} = useParams()
    const [products, setProducts] = useState([])

    useEffect(() => {
        if(!category){
        getDocs(collection(db, 'items')).then((querySnapshot) => {
            console.log(querySnapshot)
            const products = querySnapshot.docs.map(doc => {
                console.log(doc)
                return { id: doc.id, ...doc.data()}
            })
            setProducts(products)
        }).catch((error) => {
            console.log('error searching items', error)
        })
    }else{
        getDocs(query(collection(db, 'items'), where('category', '==', category))).then((querySnapshot) => {
            console.log(querySnapshot)
            const products = querySnapshot.docs.map(doc => {
                console.log(doc)
                return { id: doc.id, ...doc.data()}
            })
            setProducts(products)
        }).catch((error) => {
            console.log('error searching items', error)
        })
    }

        return(() => {
            setProducts([])
        })

    }, [category])

    // (consulta local )  
    //     ( async () => {

    //         if (category !== undefined){

    //             const products = await getProductByCategory(category);
    //             console.log(products);
    //             setProducts(products)
    //         }else {

    //             const products = await getProducts()
    //             console.log(products)
    //             setProducts(products)
    //         }
    //     })()

    // }, [category])


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