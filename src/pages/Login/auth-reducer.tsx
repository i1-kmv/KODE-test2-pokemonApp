import {FormikErrorType} from "./Login"
import {Dispatch} from "redux"
import {authApi} from "../../api/pokemon-api"
import {setAppErrorAC, setAppIsInitializedAC} from "../../app/app-reducer"




const initialState: InitialStateType = {
    isLoggedIn: false,
    isConfirm: false,
}


export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case 'login/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.value}
        case 'APP/SET-IS-CONFIRMED':
            return {...state, isConfirm: action.value }
        default:
            return state
    }

}

//actions


export const setIsLoggedInAc = (value: boolean) => ({type: 'login/SET-IS-LOGGED-IN', value} as const)
export const setAppIsConfirmedAC = (value:  boolean) => ({ type: 'APP/SET-IS-CONFIRMED', value } as const)


//thunks


export const loginTC = (data: FormikErrorType) => (dispatch: Dispatch) => {

    authApi.login_mock(data)
        .then(res => {
            dispatch(setIsLoggedInAc(true))
        }).catch(err => {
        dispatch(setAppIsInitializedAC(true))
        dispatch(setAppErrorAC(err))
    })

}


export const confirmTC = (data: FormikErrorType) => (dispatch: Dispatch) => {

    authApi.confirm_mock(data)
        .then(res => {
            dispatch(setAppIsConfirmedAC(true))
        }).catch(err => {
        dispatch(setAppIsInitializedAC(true))
        dispatch(setAppErrorAC(err))
    })

}


//types


type ActionsType = ReturnType<typeof setIsLoggedInAc> | ReturnType<typeof setAppIsConfirmedAC>


type InitialStateType = {
    isLoggedIn: boolean
    isConfirm: boolean
}