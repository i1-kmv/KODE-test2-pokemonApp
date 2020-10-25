import React, {useCallback} from "react"
import styles from './PokemonCard.module.css'
import {CardType} from "../../api/pokemon-api"
import {useDispatch} from "react-redux"
import {setPopupModeAC, setPopupSrcAC} from "../../pages/MainScreen/main-reducer"
import {fetchCardTC, setProfileModeAC} from "../../pages/PokemonProfile/profile-reducer";


type PropsType = {
    imageUrl: string
    id: string
    name: string | undefined
    artist: string | undefined
}


export const PokemonCard = (props: PropsType) => {


    const dispatch = useDispatch()


    let popupHandler = useCallback(() => {
        dispatch(setPopupModeAC())
        dispatch(setPopupSrcAC(props.imageUrl))
    }, [])


    let profileHandler = useCallback(() => {
        dispatch(setProfileModeAC(true))
        localStorage.setItem('profileMode', JSON.stringify(true))
        dispatch(fetchCardTC(props.id))
        localStorage.setItem('profileId', props.id)
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