import axios from 'axios'
import {FormikErrorType} from "../pages/Login/Login"


const settings = {
    withCredentials: true,
    headers: {}
}


const instance = axios.create({
    baseURL: 'https://api.pokemontcg.io/v1/',
    ...settings
})


export const pokemonApi = {
    getCards() {
        const promise = instance.get('/cards')
        return promise
    },
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
}


export const CardsType = {

}