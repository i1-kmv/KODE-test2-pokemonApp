import React from 'react'
import './App.css'
import {PasswordConfirmation} from "../pages/PasswordСonfirmation/PasswordСonfirmation"
import {MainScreen} from "../pages/MainScreen/MainScreen"
import {PokemonProfile} from "../pages/PokemonProfile/PokemonProfile"
import {Login} from "../pages/Login/Login"
import { Switch, Route } from 'react-router-dom'




function App() {
    
  return (
    <div className="App">
     <Switch>
         <Route exact path={'/'} render={() => <Login/>}/>
         <Route exact path={'/confirmation'} render={() =>  <PasswordConfirmation/>}/>
         <Route exact path={'/main'} render={() => <MainScreen/>}/>
         <Route exact path={'/profile'} render={() =>  <PokemonProfile/>}/>
     </Switch>
    </div>
  )
  
}


export default App
