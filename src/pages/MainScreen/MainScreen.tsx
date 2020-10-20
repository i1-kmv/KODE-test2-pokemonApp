import React from "react"
import styles from './MainScreen.module.css'
import {PokemonCard} from "../../components/PokemonCard/PokemonCard";




export const MainScreen = () => {

    return (
       <div className={styles.wrap}>
            <div className={styles.mainBar}>
                <button>Logout</button>
            </div>
            <div className={styles.mainContent}>
                <div className={styles.selectsBar}>

                </div>
                <div className={styles.cards}>
                   <div className={styles.cardsItems}>
                       <PokemonCard/>
                       <PokemonCard/>
                       <PokemonCard/>
                       <PokemonCard/>
                   </div>
                </div>
            </div>
       </div>
    )

}