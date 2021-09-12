import React, { useContext,useEffect } from 'react'
import styles from '../ShoppingCart/ShoppingCart.module.css'
import { FaWhatsapp } from 'react-icons/fa'
import CartItem from '../CartItems/CartItem'
import { AppContext } from '../Context/AppContext'

const ShoppingCart = () => {
    //Here we are making the shopping cart section here we pass to our child component some
    //logic we create in our Context

    const {cart, removeProducts, removeProduct,getTotal,total,reduction,increase}=useContext(AppContext) //we are importing our context and taking cart 
    //removeProducts and removeProduct both are a functions the removing items 

    useEffect(() => {
        getTotal()
    }, [])

    //we create a variable  to take our articles name
    const articles=cart.map(function (i) {
        return i.name
    })
    
    return (
        <div className={styles.containerShopping}>

            <div className={styles.containerShop}>
            <h1 className={styles.h1Title}>Items a comprar</h1>  <br /> 
            
            <div className={styles.icons}>

                <div className={styles.articlesItems}>
                    <h2>Articulo</h2>
                    <h2>Precio por unidad</h2>
                    <h2>Cantidad</h2>
                    <h2>Colores</h2>
                    <h2>Agregar <br /> Quitar</h2>
                    <h2>Precio total</h2>
                    <h2>Eliminar</h2>
                    
                </div>
            
                {cart.map((item, index) => <CartItem key={index} data={item} removeProduct={removeProduct} increase ={increase} reduction={reduction}/>)}

                <button className={styles.buttonClass} onClick={removeProducts}>Borrar todos los items</button>
            </div>
            </div>
            <div className={styles.buttonClass}>
                <h2>{total}</h2>
            </div>

            <div className={styles.buttonWh}>
                <a  href={` https://api.whatsapp.com/send?phone=573213009146&text= Los articules a comprar son: ${articles} con un total a pagar de ${total}, continua en el chat para comunicarte con una de nuestras asesoras, gracias por escogernos. Atentamente grupo Eli Arte.`}> <button>Enviar orden<FaWhatsapp/></button> </a> 
            </div>
            
            
        </div>

    )
}

export default ShoppingCart
