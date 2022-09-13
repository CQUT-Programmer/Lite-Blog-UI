import avatar from "@/assets/image/default-avatar.png"
import {ContentType} from "@/constant/headers";
import {StorageType} from "@/constant/settings";
import Keys from "@/constant/key";
const sha1 = require('sha1')
const SuccessCode = {
    ZERO: 0,
    TWO_HUNDRED: 200
}

export const DEFAULT_AVATAR = avatar
//请求数据类型
export const CONTENT_TYPE = ContentType.JSON
// 访问秘钥 存储
export const TOKEN_KEY = sha1(Keys.tokenAccessKey)
export const TOKEN_REFRESH_KEY = sha1(Keys.tokenRefreshKey)
export const MAPPING = '/api'
export const TOKEN_STORAGE = StorageType.LOCAL
export const TIME_OUT = 20000


// 双向绑定方法名
export const UPDATE_MODEL_EVENT = 'update:modelValue'
export const WS_URL = "ws://localhost:8090"
export const SUCCESS_CODE = [SuccessCode.ZERO, SuccessCode.TWO_HUNDRED]
