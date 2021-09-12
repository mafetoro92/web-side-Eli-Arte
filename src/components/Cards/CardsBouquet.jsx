import React, { useContext } from 'react'
import Card from '../Card/Card'
import styles from './Cards.module.css'
import { AppContext } from '../Context/AppContext'

const CardsBouquet = () => {
    //This is a father component where I pass like a prop my json info and who take that is my 
    //children cart 
    const {products,addCart}=useContext(AppContext)//we are importing our context and taking products 
    //product its our json and addCart for adding and is a function 

    //I created this variable to filter out category in this component is bouquet category 
    const bouquetFlowers= products.filter(bouquet => bouquet.category === "bouquet") 
    return (

        <div>
            <div className={styles.containerBoth}>
                <h1 className={styles.headerBoth}>Ramo de flores</h1>
            <p className={styles.pBoth}>
                Los ramos de flores son un conjunto de flores, hierbas y ramas, que pueden ser naturales o artificiales. Si el ramo es de pequeño tamaño se le denomina ramillete. También existe el bouquet (o buqué), que es un pequeño ramo de flores elaborado con sentido de arte floral. <br /> <br />
                Los usos de los ramos de flores son variados, pudiendo ser utilizados
                como expresión de dolor, pero también expresan emociones, ​
                especialmente entre los enamorados. Los ramos están formados por

                uno o varios tipos de flor, y a su vez que estas sean de un mismo color
                o de colores variados.
                Por otra parte, los ramos hacen que resalte los espacios abiertos o
                cerrados e incrementan la decoración de determinado lugar. En Eli
                Arte encontraras los ramos más hermosos y duraderos al mejor precio.
            </p>
            </div>
            {/* Here we do a map to pass information to our children component Card
            just we are showing  a bouquet information*/}
            <div className={styles.containerFather}> 
                {
                    bouquetFlowers.map((item, index)=><Card key={index} data={item} addCart={addCart} />) 
                }
            </div>
        </div>
    )
}

export default CardsBouquet
