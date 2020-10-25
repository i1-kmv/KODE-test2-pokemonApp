import {Dispatch} from "redux"
import {CardType, pokemonApi} from "../../api/pokemon-api"
import {setAppErrorAC, setAppIsInitializedAC} from "../../app/app-reducer";




const initialState: any = {
    cards: [],
    types: [],
    subtypes: [],
    supertypes: [],
    filterTypeValue: '',
    filterSubtypeValue: '',
    filterSupertypeValue: '',
    popupMode: false,
    popupSrc: '',
    totalCount: 0
}


export const mainReducer = (state: any = initialState, action: ActionsType): any => {

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
        default:
            return state
    }
}


//AC


export const setCardsAC = (cards: Array<CardType>) => ({ type: 'MAIN/SET-CARDS', cards } as const)
export const setTypesAC = (types: Array<string>) => ({ type: 'MAIN/SET-TYPES', types } as const)
export const setSubTypesAC = (subtypes: Array<string>) => ({ type: 'MAIN/SET-SUBTYPES', subtypes } as const)
export const setTypeFilterAC = (filterTypeValue: string) => ({ type: 'MAIN/SET-TYPE-FILTER', filterTypeValue } as const)
export const setSubtypeFilterAC = (filterSubtypeValue: string) => ({ type: 'MAIN/SET-SUBTYPE-FILTER', filterSubtypeValue } as const)
export const setSupertypeFilterAC = (filterSupertypeValue: string) => ({ type: 'MAIN/SET-SUPERTYPE-FILTER', filterSupertypeValue } as const)
export const setPopupModeAC = () => ({ type: 'MAIN/SET-POPUP-MODE'} as const)
export const setPopupSrcAC = (popupSrcValue: string) => ({ type: 'MAIN/SET-POPUP-SRC', popupSrcValue } as const)


//Thunks


export const fetchCardsTC = () => (dispatch: Dispatch) => {

    pokemonApi.getCards()
        .then((res) => {
            console.log(res.data)
            dispatch(setCardsAC(res.data.cards))
        }).catch(err => {
        dispatch(setAppIsInitializedAC(true))
        dispatch(setAppErrorAC(err))
    })

}


export const getTypesTC = () => (dispatch: Dispatch) => {

    pokemonApi.getTypes()
        .then((res) => {
            dispatch(setTypesAC(res.data.types))
        }).catch(err => {
        dispatch(setAppIsInitializedAC(true))
        dispatch(setAppErrorAC(err))
    })

}


export const getSubTypesTC = () => (dispatch: Dispatch) => {

    pokemonApi.getSubTypes()
        .then((res) => {
            dispatch(setSubTypesAC(res.data.subtypes))
        }).catch(err => {
        dispatch(setAppIsInitializedAC(true))
        dispatch(setAppErrorAC(err))
    })

}


//Types


type ActionsType =
    | ReturnType<typeof setCardsAC>
    | ReturnType<typeof setTypesAC>
    | ReturnType<typeof setSubTypesAC>
    | ReturnType<typeof setTypeFilterAC>
    | ReturnType<typeof setSubtypeFilterAC>
    | ReturnType<typeof setSupertypeFilterAC>
    | ReturnType<typeof setPopupModeAC>
    | ReturnType<typeof setPopupSrcAC>




