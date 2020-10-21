import {Dispatch} from "redux"
import {CardType, pokemonApi} from "../../api/pokemon-api"




const initialState: any = {
    cards: [],
    types: [],
    subtypes: [],
    filterTypeValue: '',
    filterSubtypeValue: ''
}


export const mainReducer = (state: any = initialState, action: ActionsType): any => {

    switch (action.type) {
        case "MAIN/SET-CARDS": {
            return {...state, cards: action.cards}
        }
        case 'MAIN/SET-TYPES':
            return {...state, types: action.types}
        case 'MAIN/SET-SUBTYPES':
            return {...state, subtypes: action.subtypes}
        case 'MAIN/SET-TYPE-FILTER':
            let value = [...action.filterTypeValue]
            return {...state, filterTypeValue: value}
        case 'MAIN/SET-SUBTYPE-FILTER':
            return {...state, filterSubtypeValue: action.filterSubtypeValue}
        default:
            return {...state}
    }

}


//AC


export const setCardsAC = (cards: Array<CardType>) => ({ type: 'MAIN/SET-CARDS', cards } as const)
export const setTypesAC = (types: Array<string>) => ({ type: 'MAIN/SET-TYPES', types } as const)
export const setSubTypesAC = (subtypes: Array<string>) => ({ type: 'MAIN/SET-SUBTYPES', subtypes } as const)
export const setTypeFilterAC = (filterTypeValue: Array<string>) => ({ type: 'MAIN/SET-TYPE-FILTER', filterTypeValue } as const)
export const setSubtypeFilterAC = (filterSubtypeValue: string) => ({ type: 'MAIN/SET-SUBTYPE-FILTER', filterSubtypeValue } as const)


//Thunks


export const fetchCardsTC = () => (dispatch: Dispatch) => {

    pokemonApi.getCards()
        .then((res) => {
            dispatch(setCardsAC(res))
        }).catch(err => {
        alert('you bad developer')
    })

}


export const getTypesTC = () => (dispatch: Dispatch) => {

    pokemonApi.getTypes()
        .then((res) => {
            dispatch(setTypesAC(res))
        }).catch(err => {
        alert('you bad developer')
    })

}


export const getSubTypesTC = () => (dispatch: Dispatch) => {

    pokemonApi.getSubTypes()
        .then((res) => {
            dispatch(setSubTypesAC(res))
        }).catch(err => {
        alert('you bad developer')
    })

}


//Types


type ActionsType =
    | ReturnType<typeof setCardsAC>
    | ReturnType<typeof setTypesAC>
    | ReturnType<typeof setSubTypesAC>
    | ReturnType<typeof setTypeFilterAC>
    | ReturnType<typeof setSubtypeFilterAC>



