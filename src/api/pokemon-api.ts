import axios from 'axios'
import {FormikErrorType} from "../pages/Login/Login"




const settings = {
   params: {
        'Page-Size': 1000,
        'Count': 1000,
        'Total-Count': 9320,
    }
}


const Instance = axios.create({
    baseURL: 'https://api.pokemontcg.io/v1',
    ...settings
})



export const pokemonApi = {
    getCards() {
       const promise = Instance.get('/cards')
        return promise
    },
    getCard(id:string) {
        const promise = Instance.get(`/cards/${id}`)
        return promise
    },
    getTypes(){
        const promise = Instance.get('/types')
        return promise
    },
    getSubTypes(){
        const promise =Instance.get('/subtypes')
        return promise
    }
}


//Создал фэйковое айпи для имитации post запросов на


const fakeSettings = {
    withCredentials: true,
    headers: {
        'Page-Size': '4',
        'Count': '4',
        'Total-Count': '4',
    }
}


const fakeInstance = axios.create({
    baseURL: 'some/fake/api/',
    ...fakeSettings
})


export const authApi = {
    //данный запрос можно будет использовать, когда подключим реальный бэк
    login(data: FormikErrorType) {
        const promise = fakeInstance.post('auth/login', data)
        return promise
    },
    //запрос для проброса в thunk
    login_mock(data: FormikErrorType) {
        return new Promise((res, rej) => {
            if (data.login === 'KODE' && data.password === '123456') {
                res(true)
            } else {
                rej('Incorrect login or password')
            }
        })
    },
    //данный запрос можно будет использовать, когда подключим реальный бэк
    confirm(data: FormikErrorType) {
        const promise = fakeInstance.post('auth/confirm', data)
        return promise
    },
    //запрос для проброса в thunk
    confirm_mock(data: FormikErrorType) {
        return new Promise((res, rej) => {
            if (data.code === '123456') {
                res(true)
            } else {
                rej('Incorrect code')
            }
        })
    },
    //запрос для проброса в thunk
    logout__mock() {
        return new Promise((res, rej) => {
            res(true)
        })
    }
}


export type CardType = {
    ability?: IAbility;
    artist: string;
    attacks?: IAttack[];
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
}

export type IAbility = {
    name: string;
    text: string;
    type: string;
}

export type IAttack = {
    ost: string[];
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