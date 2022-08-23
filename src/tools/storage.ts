import cookie from "js-cookie";
import {TOKEN_KEY, TOKEN_STORAGE, StorageType} from './constants'


export function getToken() {
    let token
    switch (TOKEN_STORAGE) {
        case StorageType.COOKIE :
            token = cookie.get(TOKEN_KEY)
            break
        case StorageType.LOCAL :
            token = localStorage.getItem(TOKEN_KEY)
            break
        case StorageType.SESSION :
            token = sessionStorage.getItem(TOKEN_KEY)
            break
        default :
            token = cookie.get(TOKEN_KEY)
    }

    return token
}

export function setToken(token: any) {

    switch (TOKEN_STORAGE) {
        case StorageType.COOKIE :
            cookie.set(TOKEN_KEY, token)
            break
        case StorageType.LOCAL :
            localStorage.setItem(TOKEN_KEY, token)
            break
        case StorageType.SESSION :
            sessionStorage.setItem(TOKEN_KEY, token)
            break
        default :
            cookie.get(TOKEN_KEY)
    }
}

export function clearToken() {

    switch (TOKEN_STORAGE) {
        case StorageType.COOKIE :
            cookie.remove(TOKEN_KEY)
            break
        case StorageType.LOCAL :
            localStorage.removeItem(TOKEN_KEY)
            break
        case StorageType.SESSION :
            sessionStorage.removeItem(TOKEN_KEY)
            break
        default :
            cookie.remove(TOKEN_KEY)
    }
}
