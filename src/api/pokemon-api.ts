import axios from 'axios'
import {FormikErrorType} from "../pages/Login/Login"
import {PokemonTCG} from "pokemon-tcg-sdk-typescript";
import {Meta} from "pokemon-tcg-sdk-typescript/dist/classes/meta";




const settings = {
    withCredentials: true,
    headers: {
        'Page-Size': '4',
        'Count': '4',
        'Total-Count': '4',
    }
}


export const pokemonApi = {
    getCards() {
       const promise = PokemonTCG.Card.all()
        return promise
    },
    getTypes(){
        const promise = Meta.allTypes()
        return promise
    },
    getSubTypes(){
        const promise = Meta.allSubtypes()
        return promise
    }
}


//Создал фэйковое айпи для имитации post запросов на сервер


const fakeInstance = axios.create({
    baseURL: 'some/fake/api/',
    ...settings
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
    imageUrl: string
    name: string
    artist: string
    types?: Array<string>
    subtype?: string
}