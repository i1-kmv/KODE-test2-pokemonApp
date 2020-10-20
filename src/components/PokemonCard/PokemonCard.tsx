import React from "react"
import styles from './PokemonCard.module.css'




export const PokemonCard = () => {

    return (
        <div className={styles.wrap}>
            <div className={styles.image}><img src="" alt="#"/></div>
            <div> Pokemon name</div>
            <div>Artist</div>
        </div>
    )

}