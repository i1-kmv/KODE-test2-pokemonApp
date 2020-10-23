import React, {useCallback} from "react"
import styles from './PokemonCard.module.css'
import {CardType} from "../../api/pokemon-api"
import {useDispatch, useSelector} from "react-redux"
import {setPopupModeAC, setPopupSrcAC} from "../../pages/MainScreen/main-reducer"
import {AppRootStateType} from "../../app/store";
import {fetchCardTC, setProfileModeAC} from "../../pages/PokemonProfile/profile-reducer";





export const PokemonCard = (props: CardType) => {

    const profileMode = useSelector<AppRootStateType, boolean>(state => state.profile.profileMode)
    const dispatch = useDispatch()


    let popupHandler = useCallback(() => {
        dispatch(setPopupModeAC())
        dispatch(setPopupSrcAC(props.imageUrl))
    }, [])


    let profileHandler = useCallback(() => {
        dispatch(setProfileModeAC(!profileMode))
        dispatch(fetchCardTC(props.id))
    }, [])


    return (
        <div className={styles.wrap}>
            <div className={styles.image}><img src={props.imageUrl} alt="#"/></div>
            <div>{props.name}</div>
            <div>{props.artist}</div>
            <div className={styles.buttons}>
                <button onClick={popupHandler}>Quick view</button>
                <button onClick={profileHandler}>Pokemon profile</button>
            </div>
        </div>
    )

}