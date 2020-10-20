import React from "react"
import styles from './PokemonProfile.module.css'




export const PokemonProfile = () => {

    return (
       <div className={styles.wrap}>
           <div className={styles.profileBar}>
               <button>Back</button>
               <button>Logout</button>
           </div>
           <div className={styles.profileContent}>
               <div className={styles.profileContent__image}>
                   <img src="" alt=""/>
                   <span>Does 30 damage plus 20 more damage for each Energy attached
                       to Dark Blastoise but not used to pay for this attack. You can't
                       add more than 40 damage in this way.
                   </span>
               </div>
               <div className={styles.profileContent__description}>
                   <div className={styles.description__name}>
                       <div>Pokemon name</div>
                       <div>Type</div>
                       <div>SubType</div>
                   </div>
                   <div className={styles.description__char}>
                       <div>attackDamage</div>
                       <div>attackCost</div>
                       <div>resistances</div>
                       <div>evolvesFrom</div>
                   </div>
               </div>
           </div>
       </div>
    )

}