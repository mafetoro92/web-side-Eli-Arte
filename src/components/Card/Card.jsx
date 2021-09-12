import React, {useState} from 'react'
import styles from './Card.module.css'
import Select from 'react-select'


//This is card component here we want to take a father component who want to pass us the
//json information and here we do the logic creating all the cards products

const Card = ({data, addCart}) => {
    const [select, setSelect] = useState(null)
    const onDropdownChange = (value) => {
        setSelect(value)
        console.log(value)
    }

    
    return (
        
        <div className={styles.container}>
            {/*Here I take the data props and I add the values in every single space the my card
            corresponding my name, color and price */}
            <img className={styles.imgOne} src={data.img} alt="Flor"/> 
            <div className={styles.containerTwo}>
                <h3>{data.name}</h3> 
            
                {data.hasOwnProperty('colors') ? // Validation if the property exists

                <Select
                options={data.colors}
                onChange={onDropdownChange}
                value={select}
                />
                // <select className={styles.optionLetter}> 
                //     {data.colors.map((color,index)=><option key={index}>{color}</option>)}
                // </select > 

                : console.log(false)}


                <p>{data.price}</p>
                <button className={styles.buttonCar} onClick={()=>{addCart(data.id,select)}}>Agregar al carrito</button> 
            </div>
        </div>
    )
}

export default Card
