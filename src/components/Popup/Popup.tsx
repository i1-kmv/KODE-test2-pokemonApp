import React, {useCallback} from 'react'
import styles from './Popup.module.css'
import {useDispatch, useSelector} from "react-redux"
import {AppRootStateType} from "../../app/store"
import {setPopupModeAC} from "../../pages/MainScreen/main-reducer"




export const Popup = React.memo(() => {


    const popupSrc = useSelector<AppRootStateType, string>(state => state.main.popupSrc)


    const dispatch = useDispatch()


    const popupCloseHandler = useCallback(() => {
        dispatch(setPopupModeAC())
    }, [dispatch])


    return (
        <div className={styles.wrap} onClick={popupCloseHandler}>
            <button className={styles.close}>close</button>
            <img src={popupSrc} alt=""/>
        </div>
    )
})


