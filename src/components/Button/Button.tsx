import React from 'react'
import styles from './Button.module.css'
import arrow from '../../images/arrow-right.svg'



export const Button = () => {
    return (
        <button type={"submit"} className={styles.login_button}><img src={arrow} alt=""/></button>
    )
}