import React from "react"
import styles from './PokemonCard.module.css'
import {CardType} from "../../api/pokemon-api";




export const PokemonCard = (props: CardType) => {

    return (
        <div className={styles.wrap}>
            <div className={styles.image}><img src={props.imageUrl} alt="#"/></div>
            <div>{props.name}</div>
            <div>{props.artist}</div>
        </div>
    )

}