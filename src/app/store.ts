import {applyMiddleware, combineReducers, createStore} from "redux"
import thunkMiddleware from 'redux-thunk'
import {authReducer} from "../pages/Login/auth-reducer"
import {appReducer} from "./app-reducer"


const rootReducer = combineReducers({

    auth: authReducer,
    app: appReducer

})


export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));


export type AppRootStateType = ReturnType<typeof rootReducer>