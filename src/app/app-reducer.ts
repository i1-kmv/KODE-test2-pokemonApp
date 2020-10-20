
const initialState: InitialStateType = {
    error: null,
    isInitialized: false,
}


export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case 'APP/SET-ERROR':
            return {...state, error: action.error}
        case "APP/SET-IS-INITIALIZED":
            return {...state, isInitialized: action.value}
        default:
            return {...state}
    }

}


export const setAppErrorAC = (error: string | null) => ({ type: 'APP/SET-ERROR', error } as const)
export const setAppIsInitializedAC = (value:  boolean) => ({ type: 'APP/SET-IS-INITIALIZED', value } as const)


type ActionsType =
    | ReturnType<typeof setAppErrorAC>
    | ReturnType<typeof setAppIsInitializedAC>


export type InitialStateType = {
    error: string | null,
    isInitialized: boolean,
}