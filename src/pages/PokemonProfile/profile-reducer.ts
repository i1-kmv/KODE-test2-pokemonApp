import {Dispatch} from "redux"
import {CardType, pokemonApi} from "../../api/pokemon-api"
import {setAppErrorAC, setAppIsInitializedAC} from "../../app/app-reducer";


export type InitialStateType = typeof initialState

const initialState: any = {
    profileMode: false,
    card: null as CardType | null
}


export const profileReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case 'PROFILE/SET-PROFILE-MODE':
            return {...state, profileMode: action.value}
        case 'PROFILE/GET-CARD':
            return {...state, card: action.card}
        default:
            return state
    }
}


//AC


export const setProfileModeAC = (value: boolean) => ({ type: 'PROFILE/SET-PROFILE-MODE', value } as const)
export const getCardAC = (card: CardType | null) => ({ type: 'PROFILE/GET-CARD', card } as const)


//Thunks


export const fetchCardTC = (id:string) => (dispatch: Dispatch) => {

    pokemonApi.getCard(id)
        .then((res) => {
            console.log(res)
            dispatch(getCardAC(res.data.card))
        }).catch(err => {
        dispatch(setAppIsInitializedAC(true))
        dispatch(setAppErrorAC(err))
    })

}


//Types


type ActionsType =
    | ReturnType<typeof setProfileModeAC>
    | ReturnType<typeof getCardAC>



