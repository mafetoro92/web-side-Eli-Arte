import React from 'react'
import {Link} from "react-router-dom"
import styles from "../logo/Logo.module.css"
import logo from "../../asset/logo.jpg"

const Logo = () => {
    //we are using component for our logo because we want to reuse many times
    return (
        <div className={styles.containerLogo}>
            <Link to="/"><img className={styles.logoMain} src={logo} alt="logo" /></Link>
        </div>
    )
}

export default Logo
