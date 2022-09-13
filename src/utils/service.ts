import axios, {AxiosRequestConfig} from "axios";
import qs from 'qs'
import {getApiBaseUrl} from "./index";
import {TIME_OUT, CONTENT_TYPE, TOKEN_KEY, SUCCESS_CODE, TOKEN_REFRESH_KEY} from "@/utils/constants";
import {ContentType} from "@/constant/headers"
import {getToken} from "@/utils/storage";
import keys from '@/constant/key'
import {Message} from './message'
import router from "@/router/router";

const baseUrl = getApiBaseUrl()

const codeHandle = (code: number, message: string) => {
    switch (code) {
        case 4001:
            Message.warn(message)
            router.replace({
                name: 'login'
            }).then(r => {
                console.log(r)
            });
            break;
        case 401:
        case 404:
            router.replace({
                name: 'login'
            }).then(r => {
                console.log(r)
            });
            break;
        default :
            Message.warn(message)
            break;
    }
}

const service = axios.create({
    baseURL: baseUrl,
    timeout: TIME_OUT,
    headers: {
        'Content-Type': CONTENT_TYPE
    }
})


/**
 * @description: axios请求拦截器
 * @param {*}
 * @return {*}
 */
service.interceptors.request.use((config) => {
    !config.headers && (config.headers = {});
    //登录不需要携带token
    if (config.url?.indexOf("/login") == -1) {
        // const accessToken = userStore.token.accessToken || getToken()
        const accessToken = getToken()
        if (accessToken) {
            config.headers[TOKEN_KEY] = accessToken
        }
        // const refreshToken = userStore.token.refreshToken || getToken(keys.tokenRefreshKey)
        const refreshToken = getToken(keys.tokenRefreshKey)

        if (refreshToken) {
            config.headers[TOKEN_REFRESH_KEY] = refreshToken
        }
    }
    if (config.data) {
        //如果是form表单类型的数据，利用qs进行格式化
        if (config.headers['Content-Type'] === ContentType.FORM) {
            config.data = qs.stringify(config.data)
        }
    }
    return config
}, error => {
    return Promise.reject(error)
})

/**
 * @description: axios响应拦截器
 * @param {*}
 * @return {*}
 */
service.interceptors.response.use(response => {
    switch (response.headers['Content-Type']) {
        case ContentType.TEXT:
        case ContentType.STREAM:
            return response || null
        default:
            if (!SUCCESS_CODE.includes(response.data.code)) {
                codeHandle(response.data.code, response.data.message)
                return null
            }
            return response || null
    }
}, error => {

    if (error && error.response) {
        switch (error.response.status) {
            case 400:
                console.log('服务器请求失败')
                break
            case 401:
                console.log('服务器令牌过期，请重新登录')
                break
            case 403:
                console.log('服务器拒绝访问')
                break
            case 404:
                console.log('请求错误,无效的请求路径,未找到该资源')
                break
            case 405:
                console.log('请求方法未允许')
                break
            case 408:
                console.log('请求超时')
                break
            case 411:
                console.log('需要知道长度')
                break
            case 413:
                console.log('请求的实体太大')
                break
            case 414:
                console.log('请求的URL太长')
                break
            case 415:
                console.log('不支持的媒体类型')
                break
            case 500:
                console.log('服务器内部错误')
                break
            case 501:
                console.log('网络未实现')
                break
            case 502:
                console.log('网络错误')
                break
            case 503:
                console.log('服务不可用')
                break
            case 504:
                console.log('网络超时')
                break
            case 505:
                console.log('http版本不支持该请求')
                break
            default:
                console.log(`连接错误${error.response.status}`)
        }
    } else {
        Message.error("连接到服务器失败")
    }
    return Promise.reject(error)
})
export default service
