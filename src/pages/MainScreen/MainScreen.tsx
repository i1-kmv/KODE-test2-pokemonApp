import React, {useCallback, useEffect, useState} from "react"
import styles from './MainScreen.module.css'
import {PokemonCard} from "../../components/PokemonCard/PokemonCard"
import {useDispatch, useSelector} from "react-redux"
import {
    fetchCardsTC,
    getSubTypesTC,
    getTypesTC,
    setSubtypeFilterAC,
    setTypeFilterAC
} from "./main-reducer"
import {AppRootStateType} from "../../app/store"
import {CardType, pokemonApi} from "../../api/pokemon-api"
import {Redirect} from 'react-router-dom'
import {logoutTC} from "../Login/auth-reducer"
import {Popup} from "../../components/Popup/Popup"
import Pagination from "../../components/Pagination/Pagination"







export const MainScreen = () => {



    let init = Number(localStorage.getItem('currentPage'))
    let [currentPage, setCurrentPage] = useState(init)


    localStorage.setItem('currentPage', JSON.stringify(currentPage))


    const cards = useSelector<AppRootStateType, Array<CardType>>(state => state.main.cards)
    const types = useSelector<AppRootStateType, Array<string>>(state => state.main.types)
    const subtypes = useSelector<AppRootStateType, Array<string>>(state => state.main.subtypes)
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)
    const profileMode = useSelector<AppRootStateType, boolean>(state => state.profile.profileMode)
    const filterTypeValue = useSelector<AppRootStateType, string>(state => state.main.filterTypeValue)
    const filterSubtypeValue = useSelector<AppRootStateType, string>(state => state.main.filterSubtypeValue)
    const popupMode = useSelector<AppRootStateType, boolean>(state => state.main.popupMode)


    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchCardsTC())
        dispatch(getTypesTC())
        dispatch(getSubTypesTC())
    }, [])



    const logoutHandler = useCallback(() => {
        dispatch(logoutTC())
    }, [])


    const selectTypeHandler = (e: any) => {
        let newValue = e.currentTarget.value
        dispatch(setTypeFilterAC(newValue))
        localStorage.setItem('TypeValue', newValue)
    }


    const selectSubtypeHandler = (e: any) => {
        let newValue = e.currentTarget.value
        dispatch(setSubtypeFilterAC(newValue))
        localStorage.setItem('SubtypeValue', newValue)
    }


    useEffect( ()=> {
        let type = localStorage.getItem('TypeValue')
        dispatch(setTypeFilterAC(type || ''))
    },[] )


    useEffect( ()=> {
        let subtype = localStorage.getItem('SubtypeValue')
        dispatch(setSubtypeFilterAC(subtype || ''))
    },[] )


    if (profileMode) {
        return <Redirect to={'/profile'}/>
    }


    if (!isLoggedIn) {
        return <Redirect to={'/'}/>
    }


    let filteredCard = cards.filter(card => (card.types?.join() === filterTypeValue && card.subtype === filterSubtypeValue)).map(card => {
        {
            return (
                <PokemonCard
                    id={card.id}
                    imageUrl={card.imageUrl}
                    name={card.name}
                    artist={card.artist}
                    key={card.id}
                />
            )
        }
    })


    let currentPageCards = filteredCard.slice(currentPage-1, currentPage+3)


    return (

        <div className={styles.wrap}>
            {popupMode && <Popup/>}
            <div className={styles.mainBar}>
                <button onClick={logoutHandler}>Logout</button>
            </div>
            <div className={styles.mainContent}>
                <div className={styles.selectsBar}>
                    <select className={styles.types} onChange={selectTypeHandler} value={filterTypeValue}>

                        {
                            types.map(type => {
                                return (
                                    <option key={type}>{type}</option>
                                )
                            })
                        }
                    </select>
                    <select className={styles.subtypes} onChange={selectSubtypeHandler} value={filterSubtypeValue}>

                        {
                            subtypes.map(subtype => {
                                return (
                                    <option key={subtype} >{subtype}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className={styles.cards}>
                    {(filterTypeValue === '' || filterSubtypeValue === '') &&
                    <div className={styles.first}>Choose pokemon type and subtype</div>}
                    <div className={styles.cardsItems}>
                        {
                            currentPageCards
                        }
                    </div>
                    {(filterTypeValue !== '' && filterSubtypeValue !== '') && <Pagination
                        changePageNumber={setCurrentPage}
                        currentPage={currentPage}
                        itemsOnPage={4}
                        totalItems={filteredCard.length}
                    />}
                </div>
            </div>
        </div>
    )

}