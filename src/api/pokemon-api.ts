import axios from 'axios'
import {FormikErrorType} from "../pages/Login/Login"




const instance = axios.create({
    baseURL: 'https://api.pokemontcg.io/v1',
})


export const pokemonApi = {
    getCards(page: number, types: string, subtype: string) {
       return instance.get<ResponseCardsType>('/cards', {params: {page, pageSize: 4, types, subtype}})
    },
    getCard(id:string) {
        return instance.get<ResponseCardType>(`/cards/${id}`)
    },
    getTypes(){
        return instance.get<ResponseTypesType>('/types')
    },
    getSubTypes(){
        return instance.get<ResponseSubtypesType>('/subtypes')
    }
}


//Created a fake IP to simulate post requests


export const authApi = {
    //request to send to thunk
    login_mock(data: FormikErrorType) {
        return new Promise((res, rej) => {
            if (data.login === 'kode@kode.ru' && data.password === 'Enk0deng') {
                res(true)
            } else {
                rej('Incorrect login or password')
            }
        })
    },
    //request to send to thunk
    confirm_mock(data: FormikErrorType) {
        return new Promise((res, rej) => {
            if (data.code === '123456') {
                res(true)
            } else {
                rej('Incorrect code')
            }
        })
    },
    //request to send to thunk
    logout__mock() {
        return new Promise((res, rej) => {
            res(true)
        })
    }
}


//Types


type ResponseCardsType = {
    cards: Array<CardType>
}

type ResponseCardType = {
    card: CardType
}

type ResponseTypesType = {
    types: Array<string>
}

type ResponseSubtypesType = {
    subtypes: Array<string>
}

export interface CardType  {
    ability?: IAbility;
    artist: string;
    attacks: IAttack[];
    convertedRetreatCost?: number;
    evolvesFrom?: string;
    hp?: string;
    id: string;
    imageUrl: string;
    imageUrlHiRes?: string;
    name?: string;
    nationalPokedexNumber?: number;
    number?: string;
    rarity?: string;
    retreatCost?: string[];
    series?: string;
    set?: string;
    setCode?: string;
    subtype: string;
    supertype?: string;
    text: string[];
    types: string[];
    weaknesses?: IWeakness[];
    resistances: Array<IResistance>;
}

export type IAbility = {
    name: string;
    text: string;
    type: string;
}

export type IAttack = {
    cost: string[];
    name: string;
    text: string;
    damage: string;
    convertedEnergyCost: string;
}

export type IResistance =  {
    type: string;
    value: string;
}

export type IWeakness =  {
    type: string;
    value: string;
}