import React from 'react'
import styles from './Input.module.css'




export const Input = (props:PropsType) => {

    return (
        <label className={styles.input_area}>{props.title}<input type={props.type} name={props.name} {...props.formikProps}/></label>
    )

}


type PropsType = {
    title: string
    type: string
    name?: string
    formikProps?: object
}
