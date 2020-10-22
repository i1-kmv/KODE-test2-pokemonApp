import React, {useCallback} from "react"
import styles from './PokemonCard.module.css'
import {CardType} from "../../api/pokemon-api"
import {useDispatch} from "react-redux"
import {setPopupModeAC, setPopupSrcAC} from "../../pages/MainScreen/main-reducer"




export const PokemonCard = (props: CardType) => {


    const dispatch = useDispatch()


    let popupHandler = useCallback(() => {
        dispatch(setPopupModeAC())
        dispatch(setPopupSrcAC(props.imageUrl))
    }, [])


    return (
        <div className={styles.wrap}>
            <div className={styles.image}><img src={props.imageUrl} alt="#"/></div>
            <div>{props.name}</div>
            <div>{props.artist}</div>
            <div className={styles.buttons}>
                <button onClick={popupHandler}>Quick view</button>
                <button>Pokemon profile</button>
            </div>
        </div>
    )

}