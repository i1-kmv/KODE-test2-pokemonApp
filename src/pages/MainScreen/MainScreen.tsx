import React, {useCallback, useEffect, useState} from "react"
import styles from './MainScreen.module.css'
import {PokemonCard} from "../../components/PokemonCard/PokemonCard"
import {useDispatch, useSelector} from "react-redux"
import {
    fetchCardsTC,
    getSubTypesTC,
    // getSuperTypesTC,
    getTypesTC,
    setSubtypeFilterAC, setSupertypeFilterAC,
    setTypeFilterAC
} from "./main-reducer"
import {AppRootStateType} from "../../app/store"
import {CardType} from "../../api/pokemon-api"
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
    // const supertypes = useSelector<AppRootStateType, Array<string>>(state => state.main.supertypes)
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)
    const profileMode = useSelector<AppRootStateType, boolean>(state => state.profile.profileMode)
    const filterTypeValue = useSelector<AppRootStateType, string>(state => state.main.filterTypeValue)
    const filterSubtypeValue = useSelector<AppRootStateType, string>(state => state.main.filterSubtypeValue)
    //const filterSupertypeValue = useSelector<AppRootStateType, string>(state => state.main.filterSupertypeValue)
    const popupMode = useSelector<AppRootStateType, boolean>(state => state.main.popupMode)


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


    // useEffect(() => {
    //     const thunk = getSuperTypesTC()
    //     dispatch(thunk)
    // }, [])


    const logoutHandler = useCallback(() => {
        dispatch(logoutTC())
    }, [])


    const selectTypeHandler = (e: any) => {
        let newValue = e.currentTarget.value
        dispatch(setTypeFilterAC(newValue))
        localStorage.setItem('TypeValue', JSON.stringify(newValue))
    }


    const selectSubtypeHandler = (e: any) => {
        let newValue = e.currentTarget.value
        dispatch(setSubtypeFilterAC(newValue))
        localStorage.setItem('SubtypeValue', JSON.stringify(newValue))
    }


    // const selectSupertypeHandler = (e: any) => {
    //     let newValue = e.currentTarget.value
    //     dispatch(setSupertypeFilterAC(newValue))
    // }


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
                    <select className={styles.types} onChange={selectTypeHandler}>
                        <option>Choose type</option>
                        {
                            types.map(type => {
                                return (
                                    <option>{type}</option>
                                )
                            })
                        }
                    </select>
                    <select className={styles.subtypes} onChange={selectSubtypeHandler}>
                        <option>Choose subtype</option>
                        {
                            subtypes.map(subtype => {
                                return (
                                    <option>{subtype}</option>
                                )
                            })
                        }
                    </select>
                    {/*<select className={styles.subtypes} onChange={selectSupertypeHandler}>*/}
                    {/*    <option>Choose supertypes</option>*/}
                    {/*    {*/}
                    {/*        supertypes.map(supertype => {*/}
                    {/*            return (*/}
                    {/*                <option>{supertype}</option>*/}
                    {/*            )*/}
                    {/*        })*/}
                    {/*    }*/}
                    {/*</select>*/}
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