
const initialState = {
    error: null as string | null,
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


//AC


export const setAppErrorAC = (error: string | null) => ({type: 'APP/SET-ERROR', error} as const)
export const setAppIsInitializedAC = (value: boolean) => ({type: 'APP/SET-IS-INITIALIZED', value} as const)


//Types


type ActionsType = ReturnType<typeof setAppErrorAC> | ReturnType<typeof setAppIsInitializedAC>


type InitialStateType = typeof initialState