import React from "react"
import styles from './PasswordConfirmation.module.css'
import {Input} from "../../components/Input/Input"
import {Button} from "../../components/Button/Button"
import CustomizedSnackbars from "../../utils/smsAlert"
import {useFormik} from "formik"
import {confirmTC} from "../Login/auth-reducer"
import {FormikErrorType} from "../Login/Login"
import {useDispatch, useSelector} from "react-redux"
import {Redirect} from "react-router-dom"
import {AppRootStateType} from "../../app/store"
import {ErrorSnackbar} from "../../utils/ErrorSnackbar"




export const PasswordConfirmation = () => {


    const isConfirm = useSelector<AppRootStateType, boolean>(state => state.auth.isConfirm)
    const isInitialized = useSelector<AppRootStateType, boolean>(state => state.app.isInitialized)
    const dispatch = useDispatch()


    const formik = useFormik({
        initialValues: {
           code: '',
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.code) {
                errors.login = '';
            }
        },
        onSubmit: (values) => {
            dispatch(confirmTC(values))
        },
    })


    if (isConfirm) {
        return <Redirect to={'/main'}/>
    }


    return (
        <>
            <div className={styles.wrap}>
                {isInitialized && <ErrorSnackbar/>}
                <form onSubmit={formik.handleSubmit}>
                    <Input title={'Code from SMS'}
                           type={'text'}
                           name={'code'}
                           formikProps={{...formik.getFieldProps('code')}}
                    />
                    <Button/>
                </form>
            </div>
            <CustomizedSnackbars/>
        </>
    )
}