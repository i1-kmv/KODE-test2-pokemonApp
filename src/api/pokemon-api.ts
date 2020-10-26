import axios from 'axios'
import {FormikErrorType} from "../pages/Login/Login"






const Instance = axios.create({
    baseURL: 'https://api.pokemontcg.io/v1',
})



export const pokemonApi = {
    getCards(page: number, types: string, subtype: string) {
       const promise = Instance.get<ResponseCardsType>('/cards', {params: {page, pageSize: 4, types, subtype}})
        return promise
    },
    getCard(id:string) {
        const promise = Instance.get<ResponseCardType>(`/cards/${id}`)
        return promise
    },
    getTypes(){
        const promise = Instance.get<ResponseTypesType>('/types')
        return promise
    },
    getSubTypes(){
        const promise =Instance.get<ResponseSubtypesType>('/subtypes')
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

export interface FullCard extends CardType {

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