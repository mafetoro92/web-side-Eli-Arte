import React, { useContext } from 'react'
import styles from './Header.module.css'
import {FaShoppingCart} from 'react-icons/fa'
import {Link} from "react-router-dom"
import { AppContext } from '../Context/AppContext'


const Header = () => {
    const{cart}=useContext(AppContext)//we import cart who have a number of items select for our client
    
    return (
        <div className={styles.containerHeader}>
            <div className={styles.ContainerThree}>

                {/* Here we use Link in our Router */}
                <Link className={styles.linkHeader} to="/"><h1>Eli Arte</h1></Link>

                <div className={styles.containerCar}>
                <div> 
                <Link className={styles.linkCar} to="/shopping"><FaShoppingCart/></Link> 
                </div>
                <h3>{cart.length}</h3> {/*we want to increase our numbers in the shopping cart*/}
                </div>
            </div>
            
            
        </div>
    )
}

export default Header
