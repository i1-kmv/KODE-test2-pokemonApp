import React from 'react'
import styles from './Login.module.css'
import {Input} from "../../components/Input/Input"
import {Button} from "../../components/Button/Button"




export const Login = () => {
    return (
       <div className={styles.login_wrap}>
           <form>
               <Input title={'Login'} type={'text'}/>
               <Input title={'Password'} type={'password'}/>
               <Button/>
           </form>
       </div>
    )
}