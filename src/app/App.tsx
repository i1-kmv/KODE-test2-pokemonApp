import React from 'react';
import './App.css';
import {PasswordConfirmation} from "../pages/PasswordСonfirmation/PasswordСonfirmation";
import {MainScreen} from "../pages/MainScreen/MainScreen";
import {PokemonProfile} from "../pages/PokemonProfile/PokemonProfile";
import {Login} from "../pages/Login/Login";

function App() {
  return (
    <div className="App">
      {/*<Login/>*/}
      {/*<PasswordConfirmation/>*/}
      <MainScreen/>
      {/*<PokemonProfile/>*/}
    </div>
  );
}

export default App;
