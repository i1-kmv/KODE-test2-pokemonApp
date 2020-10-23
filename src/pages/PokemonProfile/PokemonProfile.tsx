import React from "react"
import styles from './PokemonProfile.module.css'
import {useDispatch, useSelector} from "react-redux"
import {AppRootStateType} from "../../app/store"
import {getCardAC, setProfileModeAC} from "./profile-reducer"
import {Redirect} from "react-router-dom";



export const PokemonProfile = () => {


    const card = useSelector<AppRootStateType, any>(state => state.profile.card)
    const profileMode = useSelector<AppRootStateType, boolean>(state => state.profile.profileMode)
    const dispatch = useDispatch()


    const onBackHandler = () => {
        dispatch(getCardAC([]))
        dispatch(setProfileModeAC(false))
    }


    if (!profileMode) {

        return <Redirect to={'/main'}/>
    }


    return(
        card.map((el:any) => {
            return (
                <div key={el.id} className={styles.wrap}>
                    <div className={styles.profileBar}>
                        <button onClick={onBackHandler}>Back</button>
                        <button>Logout</button>
                    </div>
                    <div className={styles.profileContent}>
                        <div className={styles.profileContent__image}>
                            <img src={el.imageUrlHiRes} alt=""/>
                            <span>
                                {el.attacks[0].text || 'No description'}
                   </span>
                        </div>
                        <div className={styles.profileContent__description}>
                            <div className={styles.description__name}>
                                <div>Pokemon name: {el.name}</div>
                                <div>Type: {el.types[0]} </div>
                                <div>SubType: {el.subtype}</div>
                            </div>
                            <div className={styles.description__char}>
                                <div>attackDamage: {el.attacks[0].damage}</div>
                                <div>attackCost: {el.attacks[0].cost}</div>
                                <div>resistances: type:{el.resistances[0].type} value:{el.resistances[0].value} </div>
                                <div>evolvesFrom: {el.evolvesFrom || 'no data'}</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    )

}

