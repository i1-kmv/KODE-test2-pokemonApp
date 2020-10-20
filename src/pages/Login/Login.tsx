import React from 'react'
import styles from './Login.module.css'
import {Input} from "../../components/Input/Input"
import {Button} from "../../components/Button/Button"
import {useFormik} from "formik"
import {useDispatch, useSelector} from "react-redux"
import {AppRootStateType} from "../../app/store"
import {loginTC, setIsLoggedInAc} from "./auth-reducer"
import {Redirect} from 'react-router-dom'
import {ErrorSnackbar} from "../../utils/ErrorSnackbar"




export const Login = () => {

    const dispatch = useDispatch()
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)
    const isInitialized = useSelector<AppRootStateType, boolean>(state => state.app.isInitialized)


    const formik = useFormik({
        initialValues: {
            login: '',
            password: '',
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.login) {
                errors.login = 'Required field';
            }
            if (!values.password) {
                errors.password = 'Required field';
            }
            return errors;
        },
        onSubmit: (values) => {
            dispatch(loginTC(values))
        }
    })


    if (isLoggedIn) {
        return <Redirect to={'/confirmation'}/>
    }


    return (
        <div className={styles.login_wrap}>
            {isInitialized && <ErrorSnackbar/>}
            <form onSubmit={formik.handleSubmit}>
                <Input title={'Login'}
                       type={'text'}
                       name={'login'}
                       formikProps={{...formik.getFieldProps('login')}}
                />
                {formik.errors.login ? <div>{formik.errors.login}</div> : null}
                <Input title={'Password'}
                       type={'password'}
                       name={'password'}
                       formikProps={{...formik.getFieldProps('password')}}

                />
                {formik.errors.password ? <div>{formik.errors.password}</div> : null}
                <Button/>
            </form>
        </div>
    )

}


export type FormikErrorType = {
    login?: string
    password?: string
    code?: string
}