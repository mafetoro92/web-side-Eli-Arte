import React from 'react'
import mainBouquet from "../../asset/mainBouquet.JPG"
import mainFlower from "../../asset/mainFlower.JPG"
import styles from "./Main.module.css"
import {Link} from "react-router-dom"

//This is the content the our main page 
const Main = () => {
    return (
        <div className={styles.containerMain}>

            <p className={styles.pMain}>Somos una empresa santandereana tradicional la cual busca que adornes con diferentes tipos de flores artificiales, mismas que se asemejan a flores naturales. Dentro de nuestro catálogo encontraras número plural de Flores como: cartuchos, orquídeas, heliconias, girasoles, entre otras; también podrás decorar tus espacios abiertos o cerrados. <br></br><br></br>

            Por otra parte, ELI ARTE coadyuva a decorar diferentes eventos como bodas, bautizos, fiestas, entre otros. Somos una empresa que ofrece los productos artesanales de la mejor calidad a precios económicos. </p>

            <h1 className={styles.categoryMain}>Categorías</h1>

            <div className={styles.containerCategories}>
                <div className={styles.flowerContainer}>
                    {/*We use in our router implementing Link to move to our bouquet side */}
                    <Link className={styles.link} to="/bouquet">Ramos</Link>
                    <img className={styles.bouquet} src={mainBouquet} alt="img bouquet flowers" />
                </div>
                
                <div className={styles.flowerContainer}>
                    {/*We use in our router implementing Link to move to our flower side */}
                    <Link className={styles.link} to="/flower">Flores</Link>
                    
                    <img className={styles.flower} src={mainFlower} alt="img flowers" /> 
                </div>
        
            </div>
            

        </div>
    )
}

export default Main
