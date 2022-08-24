import cookie from "js-cookie";
import {TOKEN_KEY, TOKEN_STORAGE, StorageType} from './constants'


export function getToken(token_key = TOKEN_KEY, token_storage = TOKEN_STORAGE) {
    let token
    switch (token_storage) {
        case StorageType.COOKIE :
            token = cookie.get(token_key)
            break
        case StorageType.LOCAL :
            token = localStorage.getItem(token_key)
            break
        case StorageType.SESSION :
            token = sessionStorage.getItem(token_key)
            break
        default :
            token = cookie.get(token_key)
    }

    return token
}

export function setToken(token: any, token_key = TOKEN_KEY, token_storage = TOKEN_STORAGE ) {

    switch (token_storage) {
        case StorageType.COOKIE :
            cookie.set(token_key, token)
            break
        case StorageType.LOCAL :
            localStorage.setItem(token_key, token)
            break
        case StorageType.SESSION :
            sessionStorage.setItem(token_key, token)
            break
        default :
            cookie.set(token_key, token)
    }
}

export function clearToken(token_key = TOKEN_KEY, token_storage = TOKEN_STORAGE) {

    switch (token_storage) {
        case StorageType.COOKIE :
            cookie.remove(token_key)
            break
        case StorageType.LOCAL :
            localStorage.removeItem(token_key)
            break
        case StorageType.SESSION :
            sessionStorage.removeItem(token_key)
            break
        default :
            cookie.remove(token_key)
    }
}
