import React from 'react'
import styles from './Footer.module.css'
import {FaInstagramSquare} from 'react-icons/fa'

//Here is a component for our footer.
const Footer = () => {
    return (
        <div className={styles.containerFooter}>
            <p>© 2021 Eli Arte todos los derechos reservados.</p>

            <div className={styles.logoIns}>
            <a className={styles.instagram} href="https://www.instagram.com/eliarte20/"><FaInstagramSquare/></a> 
            </div>
            

        </div>
    )
}

export default Footer
