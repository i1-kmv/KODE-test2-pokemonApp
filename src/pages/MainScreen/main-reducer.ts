import {Dispatch} from "redux"
import {CardType, pokemonApi} from "../../api/pokemon-api"
import {setAppErrorAC, setAppIsInitializedAC} from "../../app/app-reducer";
import {AppRootStateType} from "../../app/store";




const initialState = {
    cards: [] as Array<CardType>,
    types: [] as Array<string>,
    subtypes: [] as Array<string>,
    filterTypeValue: '',
    filterSubtypeValue: '',
    popupMode: false,
    popupSrc: '',
    totalCount: 0,
    page: 1
}


export const mainReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "MAIN/SET-CARDS":
            return {...state, cards: action.cards}
        case 'MAIN/SET-TYPES':
            return {...state, types: action.types}
        case 'MAIN/SET-SUBTYPES':
            return {...state, subtypes: action.subtypes}
        case 'MAIN/SET-TYPE-FILTER':
            return {...state, filterTypeValue: action.filterTypeValue}
        case 'MAIN/SET-SUBTYPE-FILTER':
            return {...state, filterSubtypeValue: action.filterSubtypeValue}
        case 'MAIN/SET-SUPERTYPE-FILTER':
            return {...state, filterSubtypeValue: action.filterSupertypeValue}
        case 'MAIN/SET-POPUP-MODE':
            return {...state, popupMode: !state.popupMode}
        case 'MAIN/SET-POPUP-SRC':
            return {...state, popupSrc: action.popupSrcValue}
        case 'MAIN/SET-TOTAL-COUNT':
            return {...state, totalCount: action.count}
        case 'MAIN/SET-PAGE':
            return {...state, page: action.page}
        default:
            return state
    }
}


//AC


export const setCardsAC = (cards: Array<CardType>) => ({type: 'MAIN/SET-CARDS', cards} as const)
export const setTypesAC = (types: Array<string>) => ({type: 'MAIN/SET-TYPES', types} as const)
export const setSubTypesAC = (subtypes: Array<string>) => ({type: 'MAIN/SET-SUBTYPES', subtypes} as const)
export const setTypeFilterAC = (filterTypeValue: string) => ({type: 'MAIN/SET-TYPE-FILTER', filterTypeValue} as const)
export const setSubtypeFilterAC = (filterSubtypeValue: string) => ({
    type: 'MAIN/SET-SUBTYPE-FILTER',
    filterSubtypeValue
} as const)
export const setSupertypeFilterAC = (filterSupertypeValue: string) => ({
    type: 'MAIN/SET-SUPERTYPE-FILTER',
    filterSupertypeValue
} as const)
export const setPopupModeAC = () => ({type: 'MAIN/SET-POPUP-MODE'} as const)
export const setPopupSrcAC = (popupSrcValue: string) => ({type: 'MAIN/SET-POPUP-SRC', popupSrcValue} as const)
export const setTotalCountAC = (count: number) => ({type: 'MAIN/SET-TOTAL-COUNT', count} as const)
export const setPageAC = (page: number) => ({type: 'MAIN/SET-PAGE', page} as const)


//Thunks


export const fetchCardsTC = () => async (dispatch: Dispatch, getState: () => AppRootStateType) => {
    let state = getState().main
    let page = state.page
    let types = state.filterTypeValue
    let subtype = state.filterSubtypeValue
    try {
        let res = await pokemonApi.getCards(page, types, subtype)
        dispatch(setCardsAC(res.data.cards))
        dispatch(setTotalCountAC(res.headers['total-count']))
    } catch (err) {
        dispatch(setAppIsInitializedAC(true))
        dispatch(setAppErrorAC(err))
    }
}


export const getTypesTC = () => async (dispatch: Dispatch) => {
    try {
        let res = await pokemonApi.getTypes()
        dispatch(setTypesAC(res.data.types))
    } catch (err) {
        dispatch(setAppIsInitializedAC(true))
        dispatch(setAppErrorAC(err))
    }
}


export const getSubTypesTC = () => async (dispatch: Dispatch) => {
    try {
        let res = await pokemonApi.getSubTypes()
        dispatch(setSubTypesAC(res.data.subtypes))
    } catch (err) {
        dispatch(setAppIsInitializedAC(true))
        dispatch(setAppErrorAC(err))
    }
}


//Types


export type InitialStateType = typeof initialState


type ActionsType =
    | ReturnType<typeof setCardsAC>
    | ReturnType<typeof setTypesAC>
    | ReturnType<typeof setSubTypesAC>
    | ReturnType<typeof setTypeFilterAC>
    | ReturnType<typeof setSubtypeFilterAC>
    | ReturnType<typeof setSupertypeFilterAC>
    | ReturnType<typeof setPopupModeAC>
    | ReturnType<typeof setPopupSrcAC>
    | ReturnType<typeof setTotalCountAC>
    | ReturnType<typeof setPageAC>




