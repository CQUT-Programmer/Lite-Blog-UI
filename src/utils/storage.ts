import cookie from "js-cookie";
import {TOKEN_KEY, TOKEN_STORAGE} from './constants'
import {StorageType} from '@/constant/settings'
import keys from "@/constant/key";
import Crypto from "@/utils/crypto";

interface StorageInterface {
    getStorage(storage_key: string, storage_type: StorageType): string | null

    setStorage(storage_item: any, storage_key: string, storage_type: StorageType): void

    clearStorage(storage_key: string, storage_type: StorageType): void
}

class Storage implements StorageInterface {
    private static instance: Storage

    static shared() {
        if (!this.instance) {
            this.instance = new Storage()
        }
        return this.instance
    }

    clearStorage(storage_key: string, storage_type: StorageType = StorageType.LOCAL): void {
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

    getStorage(storage_key: string, storage_type: StorageType = StorageType.LOCAL): string | null {

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
        return Crypto.decrypt(token || "")

    }

    setStorage(storage_item: any, storage_key: string, storage_type: StorageType = StorageType.LOCAL): void {
        let itemJson = storage_item;
        if (typeof storage_item !== 'string')
            itemJson = JSON.stringify(storage_item)
        const itemAes = Crypto.encrypt(itemJson) as string
        switch (storage_type) {
            case StorageType.COOKIE :
                cookie.set(storage_key, itemAes)
                break
            case StorageType.LOCAL :
                localStorage.setItem(storage_key, itemAes)
                break
            case StorageType.SESSION :
                sessionStorage.setItem(storage_key, itemAes)
                break
            default :
                localStorage.set(storage_key, itemAes)
        }
    }

}

const storage = Storage.shared()
export default storage


export function getToken(token_key = TOKEN_KEY) {
    return storage.getStorage(token_key, TOKEN_STORAGE)
}

export function setToken(token: any, token_key = TOKEN_KEY) {
    storage.setStorage(token, token_key, TOKEN_STORAGE)
}

export function clearToken() {
    storage.clearStorage(keys.tokenAccessKey, TOKEN_STORAGE)
    storage.clearStorage(keys.tokenRefreshKey, TOKEN_STORAGE)
}
