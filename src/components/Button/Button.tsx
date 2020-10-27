import React from 'react'
import styles from './Button.module.css'
import go from '../../images/go.svg'


export const Button = React.memo(
    () => {
        return (
            <button type={"submit"} className={styles.button}><img src={go} alt=""/></button>
        )
    }
)