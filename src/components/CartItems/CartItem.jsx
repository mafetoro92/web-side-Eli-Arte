import { FaMinus } from 'react-icons/fa' 
import { FaPlus } from 'react-icons/fa'
import { FaTrashAlt } from 'react-icons/fa'
import styles from './CartItem.module.css'

//This is a component children, here we have all our logic to create our items in the 
//shopping cart we create here the items our clients pick to buy
const CartItem = ({data, removeProduct,increase,reduction}) => {
    let {price}=data

    return (

        <div className={styles.containerCart}>
            {/* Here we apply in our tag html our props information and we apply our useState too
            the idea is to show up the items our clients pick to buy in our shopping cart */}

            <h2>{data.name}</h2>
            <h2>${price}.00</h2>
            <h2>{data.count}</h2>
            <h2>{data.colors}</h2>
            <div>
                <button onClick= {()=> increase(data.id)}><FaPlus/></button> 
                <button onClick={()=>  reduction(data.id)}><FaMinus/></button>
            </div>
            <h2>${price*data.count}.00</h2>
            <FaTrashAlt className={styles.trash} onClick={()=>removeProduct(data.id)}/> 
            
        </div>
    )
}

export default CartItem
