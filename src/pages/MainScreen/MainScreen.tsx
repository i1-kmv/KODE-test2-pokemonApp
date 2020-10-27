import React, {ChangeEvent, useCallback, useEffect} from "react"
import styles from './MainScreen.module.css'
import {PokemonCard} from "../../components/PokemonCard/PokemonCard"
import {useDispatch, useSelector} from "react-redux"
import {
    fetchCardsTC,
    getSubTypesTC,
    getTypesTC, setPageAC,
    setSubtypeFilterAC,
    setTypeFilterAC
} from "./main-reducer"
import {AppRootStateType} from "../../app/store"
import {CardType} from "../../api/pokemon-api"
import {Redirect} from 'react-router-dom'
import {logoutTC} from "../Login/auth-reducer"
import {Popup} from "../../components/Popup/Popup"
import Pagination from "../../components/Pagination/Pagination"




export const MainScreen = () => {


    const cards = useSelector<AppRootStateType, Array<CardType>>(state => state.main.cards)
    const types = useSelector<AppRootStateType, Array<string>>(state => state.main.types)
    const subtypes = useSelector<AppRootStateType, Array<string>>(state => state.main.subtypes)
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoggedIn)
    const profileMode = useSelector<AppRootStateType, boolean>(state => state.profile.profileMode)
    const filterTypeValue = useSelector<AppRootStateType, string>(state => state.main.filterTypeValue)
    const filterSubtypeValue = useSelector<AppRootStateType, string>(state => state.main.filterSubtypeValue)
    const popupMode = useSelector<AppRootStateType, boolean>(state => state.main.popupMode)
    const totalCount = useSelector<AppRootStateType, number>(state => state.main.totalCount)
    const page = useSelector<AppRootStateType, number>(state => state.main.page)


    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchCardsTC())
        dispatch(getTypesTC())
        dispatch(getSubTypesTC())
    }, [dispatch])


    useEffect( ()=> {
        let type = localStorage.getItem('TypeValue')
        dispatch(setTypeFilterAC(type || ''))
        let subtype = localStorage.getItem('SubtypeValue')
        dispatch(setSubtypeFilterAC(subtype || ''))
        let pageNumber = Number(localStorage.getItem('currentPage'))
        dispatch(setPageAC(pageNumber))
    },[dispatch, localStorage.getItem('currentPage'),localStorage.getItem('TypeValue'),localStorage.getItem('SubtypeValue')])


    useEffect(() => {
        dispatch(fetchCardsTC())
    }, [page, filterTypeValue, filterSubtypeValue, dispatch])


    const logoutHandler = () => {
        dispatch(logoutTC())
    }


    const selectTypeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        let newValue = e.currentTarget.value
        dispatch(setTypeFilterAC(newValue))
        localStorage.setItem('TypeValue', newValue)
        localStorage.setItem('currentPage', '1' )
    }


    const selectSubtypeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        let newValue = e.currentTarget.value
        dispatch(setSubtypeFilterAC(newValue))
        localStorage.setItem('SubtypeValue', newValue)
        localStorage.setItem('currentPage', '1' )
    }


    const changePageNumber = useCallback((page: number) => {
        dispatch(setPageAC(page))
        localStorage.setItem('currentPage', page.toString() )
    }, [dispatch])


    if (profileMode) {
        return <Redirect to={'/profile'}/>
    }


    if (!isLoggedIn) {
        return <Redirect to={'/'}/>
    }


    let finalCards = cards.map(card => {
            return (
                <PokemonCard
                    id={card.id}
                    imageUrl={card.imageUrl}
                    name={card.name}
                    artist={card.artist}
                    key={card.id}
                />
            )
    })


    return (
        <div className={styles.wrap}>
            {popupMode && <Popup/>}
            <div className={styles.mainBar}>
                <button onClick={logoutHandler}>Logout</button>
            </div>
            <div className={styles.mainContent}>
                <div className={styles.selectsBar}>
                    <div className={styles.type__text}>Choose type</div>
                    <select className={styles.types} onChange={selectTypeHandler} value={filterTypeValue}>
                        <option> </option>
                        {
                            types.map(type => <option key={type}>{type}</option>)
                        }
                    </select>
                    <div  className={styles.type__text}>Choose subtype</div>
                    <select className={styles.subtypes} onChange={selectSubtypeHandler} value={filterSubtypeValue}>
                        <option> </option>
                        {
                            subtypes.map(subtype => <option key={subtype} >{subtype}</option>)
                        }
                    </select>
                </div>
                <div className={styles.cards}>
                    <div className={styles.cardsItems}>
                        {finalCards.length ?  finalCards : <div className={styles.noResults}>Sorry, the search for the specified parameters did not return any results :(</div>}
                    </div>
                    { finalCards.length ? <Pagination
                        changePageNumber={changePageNumber}
                        currentPage={page}
                        itemsOnPage={4}
                        totalItems={totalCount}
                    /> : ''}

                </div>
            </div>
        </div>
    )
}