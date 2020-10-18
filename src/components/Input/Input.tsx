import React from 'react'
import styles from './Input.module.css'

type PropsType = {
    title: string
    type: string
}


export const Input = (props:PropsType) => {
    return (
        <label className={styles.input_area}>{props.title}<input type={props.type}/></label>
    )
}