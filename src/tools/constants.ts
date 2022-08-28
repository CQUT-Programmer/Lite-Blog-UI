
//数据类型

import dayjs from "dayjs";

export const ContentType = {
    JSON: 'application/json;charset=UTF-8',
    FORM: 'application/x-www-form-urlencoded;charset=UTF-8',
    UPLOAD: 'multipart/form-data'
}

export const StorageType = {
    COOKIE: 'cookies',
    SESSION: 'sessionStorage',
    LOCAL: 'localStorage'
}

const SuccessCode = {
    ZERO: 0,
    TWO_HUNDRED: 200
}

export const DateFormat = {
    COMMON: 'YYYY-M-D HH:mm:ss'
}

//vo博客类
export interface BlogContent {
    id: string
    title: string,
    author: {
        headUrl: string,
        name: string,
        awesomeNumber: number
    },
    creationTime: any,
    readingVolume: number,
    posterImg: string,
    describe: string,
    content: string,
    awesomeNumber: number,
    commentNumber: number,
}



//请求数据类型
export const CONTENT_TYPE = ContentType.JSON
// 访问秘钥 存储
export const TOKEN_KEY = 'lite-blog'
export const TOKEN_STORAGE = StorageType.LOCAL
export const TIME_OUT = 20000

// 双向绑定方法名
export const UPDATE_MODEL_EVENT = 'update:modelValue'
export const BaseURL = "http://localhost:8090/"
export const WS_URL = "ws://localhost:8090"
export const SUCCESS_CODE = [SuccessCode.ZERO, SuccessCode.TWO_HUNDRED]
