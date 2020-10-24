import React from 'react'
import styles from './Button.module.css'
import arrow from '../../images/arrow-right.svg'
import go from '../../images/go.svg'



export const Button = () => {

    return (
        <button type={"submit"} className={styles.button}><img src={go} alt=""/></button>
    )

}