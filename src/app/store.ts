import {applyMiddleware, combineReducers, createStore} from "redux"
import thunkMiddleware from 'redux-thunk'
import {authReducer} from "../pages/Login/auth-reducer"
import {appReducer} from "./app-reducer"
import {mainReducer} from "../pages/MainScreen/main-reducer"
import {profileReducer} from "../pages/PokemonProfile/profile-reducer"


const rootReducer = combineReducers({
    auth: authReducer,
    app: appReducer,
    main: mainReducer,
    profile: profileReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));


export type AppRootStateType = ReturnType<typeof rootReducer>


//@ts-ignore
window.store = store