import cookie from "js-cookie";
import {TOKEN_KEY, TOKEN_STORAGE} from './constants'
import {StorageType} from '@/constant/settings'
import keys from "@/constant/key";

// TODO 采用sha1加密
export function getStorage(storage_key: string, storage_type = StorageType.LOCAL) {
    let token
    switch (storage_type) {
        case StorageType.COOKIE :
            token = cookie.get(storage_key)
            break
        case StorageType.LOCAL :
            token = localStorage.getItem(storage_key)
            break
        case StorageType.SESSION :
            token = sessionStorage.getItem(storage_key)
            break
        default :
            token = localStorage.get(storage_key)
    }

    return token
}

export function setStorage(storage: any, storage_key: any, storage_type = StorageType.LOCAL) {

    switch (storage_type) {
        case StorageType.COOKIE :
            cookie.set(storage_key, storage)
            break
        case StorageType.LOCAL :
            localStorage.setItem(storage_key, storage)
            break
        case StorageType.SESSION :
            sessionStorage.setItem(storage_key, storage)
            break
        default :
            localStorage.set(storage_key, storage)
    }
}

export function clearStorage(storage_key: string, storage_type = StorageType.LOCAL) {

    switch (storage_type) {
        case StorageType.COOKIE :
            cookie.remove(storage_key)
            break
        case StorageType.LOCAL :
            localStorage.removeItem(storage_key)
            break
        case StorageType.SESSION :
            sessionStorage.removeItem(storage_key)
            break
        default :
            localStorage.remove(storage_key)
    }
}

export function getToken(token_type = TOKEN_KEY) {
    return getStorage(token_type, TOKEN_STORAGE)
}

export function setToken(token: any, token_type = TOKEN_KEY) {
    setStorage(token, token_type, TOKEN_STORAGE)
}

export function clearToken() {
    clearStorage(keys.tokenAccessKey, TOKEN_STORAGE)
    clearStorage(keys.tokenRefreshKey, TOKEN_STORAGE)
}
