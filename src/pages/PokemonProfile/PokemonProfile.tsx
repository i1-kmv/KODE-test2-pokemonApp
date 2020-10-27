import React, {useCallback, useEffect} from "react"
import styles from './PokemonProfile.module.css'
import {useDispatch, useSelector} from "react-redux"
import {AppRootStateType} from "../../app/store"
import {fetchCardTC, getCardAC, setProfileModeAC} from "./profile-reducer"
import {Redirect} from "react-router-dom"
import {logoutTC} from "../Login/auth-reducer"
import CircularIndeterminate from "../../utils/Loader"
import {CardType} from "../../api/pokemon-api"



export const PokemonProfile = () => {


    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)
    const card = useSelector<AppRootStateType, CardType | null>(state => state.profile.card)
    const profileMode = useSelector<AppRootStateType, boolean>(state => state.profile.profileMode)
    const isInitialized = useSelector<AppRootStateType, boolean>(state => state.app.isInitialized)
    const dispatch = useDispatch()


    useEffect(() => {
        let id = localStorage.getItem('profileId')
        dispatch(fetchCardTC(id || ''))
    },[dispatch])


    const onBackHandler = () => {
        dispatch(getCardAC(null))
        dispatch(setProfileModeAC(false))
        localStorage.setItem('profileMode', JSON.stringify(false))
    }


    const logoutHandler = useCallback(() => {
        dispatch(logoutTC())
    }, [dispatch])


    if (!profileMode) {
        return <Redirect to={'/main'}/>
    }


    if (!isLoggedIn) {
        dispatch(setProfileModeAC(!profileMode))
        return <Redirect to={'/'}/>
    }


    if (!card) {
        return <CircularIndeterminate/>
    }


    return (
        <div key={card.id} className={styles.wrap}>
            <div className={styles.profileBar}>
                <button onClick={onBackHandler}>Back</button>
                <button onClick={logoutHandler}>Logout</button>
            </div>
            <div className={styles.profileContent}>
                <div className={styles.profileContent__image}>
                    <img src={card.imageUrlHiRes} alt=""/>
                    <span>
                        {card.attacks ?  card.attacks[0].text : 'No description'}
                   </span>
                </div>
                <div className={styles.profileContent__description}>
                    <div className={styles.description__name}>
                        <div>Pokemon name: <span className={styles.bold}>{card.name}</span></div>
                        <div>Type: <span className={styles.bold}>{card.types ? card.types[0] : 'No data'}</span></div>
                        <div>SubType: <span className={styles.bold}>{card.subtype}</span></div>
                    </div>
                    <div className={styles.description__char}>
                        <div>attackDamage: <span className={styles.bold}>{card.attacks ? card.attacks[0].damage : 'No data'}</span></div>
                        <div>attackCost: <span className={styles.bold}>{card.attacks ? card.attacks[0].cost : 'No data'}</span></div>
                        <div>resistances:
                            type: {card.resistances ? <span className={styles.bold}>{card.resistances[0].type}</span> : <span className={styles.bold}>No data</span>}
                            value: {card.resistances ? <span className={styles.bold}>{card.resistances[0].value}</span> : <span className={styles.bold}>No data</span>}
                        </div>
                        <div>evolvesFrom: {card.evolvesFrom ? <span className={styles.bold}>{card.evolvesFrom}</span> : <span className={styles.bold}>No data</span>}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

