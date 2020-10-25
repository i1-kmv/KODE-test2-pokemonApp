import React, {useEffect} from 'react'
import './App.css'
import {PasswordConfirmation} from "../pages/PasswordСonfirmation/PasswordСonfirmation"
import {MainScreen} from "../pages/MainScreen/MainScreen"
import {PokemonProfile} from "../pages/PokemonProfile/PokemonProfile"
import {Login} from "../pages/Login/Login"
import { Switch, Route } from 'react-router-dom'
import {useDispatch} from "react-redux"
import {setAppIsConfirmedAC, setIsLoggedInAC} from "../pages/Login/auth-reducer"
import {setProfileModeAC} from "../pages/PokemonProfile/profile-reducer";






function App() {

    const dispatch = useDispatch()

    useEffect( ()=> {
        let isLoggedIn = localStorage.getItem('isLoggedIn')
        if (isLoggedIn === 'true') {
            dispatch(setIsLoggedInAC(true))
            dispatch(setAppIsConfirmedAC(true))
        }
    },[] )


    useEffect( ()=> {
        let isProfileModeIn = localStorage.getItem('profileMode')
        if (isProfileModeIn === 'true') {
            dispatch(setProfileModeAC(true))
        }
    },[] )


    
  return (

    <div className="App">
     <Switch>
         <Route exact path={'/'} render={() => <Login/>}/>
         <Route  path={'/confirmation'} render={() =>  <PasswordConfirmation/>}/>
         <Route exact path={'/main'} render={() => <MainScreen/>}/>
         <Route  path={'/profile'} render={() => <PokemonProfile/>}/>
     </Switch>
    </div>
  )
  
}


export default App
