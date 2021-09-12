import React, { useContext } from 'react'
import Card from '../Card/Card'
import styles from './Cards.module.css'
import { AppContext } from '../Context/AppContext'

const CardsFlower = () => {
    //This is a father component where I pass like a prop my json info and who take that is my 
    //children cart 
    const {products,addCart}=useContext(AppContext) //we are importing our context and taking products 
    //product its our json and addCart for adding is a function 

    const bouquetFlowers= products.filter(bouquet => bouquet.category === "flower")
    return (
        <div>

            <div className={styles.containerBoth}>
                <h1 className={styles.headerBoth}>Flores</h1>
            <p className={styles.pBoth}>Seis razones por las cuales se pueden regalar flores: <br />

                •	Transmiten nuestras emociones <br />
                •	Mejoran el estado de ánimo <br />
                •	Es un regalo unisex <br />
                •	Son perfectas para celebrar cualquier cosa <br />
                •	¡Es imposible no acertarlas! <br />
                •	Porque nuestras flores son hechas con la más alta calidad </p>
            </div>
            {/* Here we do a map to pass information to our children component Card
            just we are showing  a flower information*/}

            <div className={styles.containerFather}> 
                {
                    bouquetFlowers.map((item, index)=><Card key={index} data={item} addCart={addCart}/>) 
                }
            </div>
        </div>
    )
}

export default CardsFlower
