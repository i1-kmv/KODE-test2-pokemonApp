import React, {useCallback, useEffect} from "react"
import styles from './MainScreen.module.css'
import {PokemonCard} from "../../components/PokemonCard/PokemonCard"
import {useDispatch, useSelector} from "react-redux"
import {fetchCardsTC, getSubTypesTC, getTypesTC, setSubtypeFilterAC, setTypeFilterAC} from "./main-reducer"
import {AppRootStateType} from "../../app/store"
import {CardType} from "../../api/pokemon-api"
import {Redirect} from 'react-router-dom'
import {logoutTC} from "../Login/auth-reducer"


export const MainScreen = () => {

    const cards = useSelector<AppRootStateType, Array<CardType>>(state => state.main.cards)
    const types = useSelector<AppRootStateType, Array<string>>(state => state.main.types)
    const subtypes = useSelector<AppRootStateType, Array<string>>(state => state.main.subtypes)
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)
    const filterTypeValue = useSelector<AppRootStateType, string>(state => state.main.filterTypeValue)
    const filterSubtypeValue = useSelector<AppRootStateType, string>(state => state.main.filterSubtypeValue)


    const dispatch = useDispatch()


    useEffect(() => {
        const thunk = fetchCardsTC()
        dispatch(thunk)
    }, [])


    useEffect(() => {
        const thunk = getTypesTC()
        dispatch(thunk)
    }, [])


    useEffect(() => {
        const thunk = getSubTypesTC()
        dispatch(thunk)
    }, [])


    const logoutHandler =useCallback(() => {
        dispatch(logoutTC())
    }, [])


    const selectTypeHandler = (e: any) => {
        let newValue = e.currentTarget.value
        dispatch(setTypeFilterAC(newValue))
    }


    const selectSubtypeHandler = (e: any) => {
        let newValue = e.currentTarget.value
        dispatch(setSubtypeFilterAC(newValue))
    }


    // if (isLoggedIn === false) {
    //     return <Redirect to={'/'}/>
    // }


    return (
        <div className={styles.wrap}>
            <div className={styles.mainBar}>
                <button onClick={logoutHandler}>Logout</button>
            </div>
            <div className={styles.mainContent}>
                <div className={styles.selectsBar}>
                    <select className={styles.types} onChange={selectTypeHandler}>
                        {
                            types.map(type => {
                                return (
                                    <option>{type}</option>
                                )
                            })
                        }
                    </select>
                    <select className={styles.subtypes} onChange={selectSubtypeHandler}>
                        {
                            subtypes.map(subtype => {
                                return (
                                    <option>{subtype}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className={styles.cards}>
                    <div className={styles.cardsItems}>
                        {
                            cards.map(card => {
                                if ( card.subtype === filterSubtypeValue ){
                                    return (
                                        <PokemonCard
                                            imageUrl={card.imageUrl}
                                            name={card.name}
                                            artist={card.artist}
                                        />
                                    )
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )

}