import {Dispatch} from "redux"
import {pokemonApi} from "../../api/pokemon-api"




const initialState: any = {
    profileMode: false,
    card: []

}


export const profileReducer = (state: any = initialState, action: ActionsType): any => {

    switch (action.type) {
        case 'PROFILE/SET-PROFILE-MODE':
            return {...state, profileMode: action.value}
        case 'PROFILE/GET-CARD':
            return {...state, card: action.card}
        default:
            return {...state}
    }

}


//AC


export const setProfileModeAC = (value: boolean) => ({ type: 'PROFILE/SET-PROFILE-MODE', value } as const)
export const getCardAC = (card: any) => ({ type: 'PROFILE/GET-CARD', card } as const)


//Thunks


export const fetchCardTC = (id:string) => (dispatch: Dispatch) => {

    pokemonApi.getCards()
        .then((res) => {
            let card = res.filter(res => res.id === id)
            dispatch(getCardAC(card))
        }).catch(err => {
        alert('you bad developer')
    })

}


//Types


type ActionsType =
    | ReturnType<typeof setProfileModeAC>
    | ReturnType<typeof getCardAC>



