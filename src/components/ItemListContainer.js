import ItemCount from "./ItemCount"

const ItemListContainer = ({greeting}) => {

    
    return (
        <div> 
            <div>{greeting}  </div> 
            <ItemCount initial ='1' stock='10' />
            
        </div>
    )
}

export default ItemListContainer