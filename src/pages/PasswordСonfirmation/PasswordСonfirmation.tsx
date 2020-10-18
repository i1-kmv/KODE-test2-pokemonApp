import React from "react"
import styles from './PasswordConfirmation.module.css'
import {Input} from "../../components/Input/Input"
import {Button} from "../../components/Button/Button"




export const PasswordConfirmation = () => {
    return (
        <div className={styles.wrap}>
            <form action="">
                <Input title={'Code from sms'} type={'text'}/>
                <Button/>
            </form>
        </div>
    )
}