import {AxiosRequestConfig} from "axios";

/**
 * @description: 更改axios的类型声明
 * 实现能够根据声明返回数据类型，通过config判断进行一些额外的操作
 */
declare module 'axios' {

    //拓展 axios 的 config 类型
    export interface AxiosRequestConfig {
        validityTime?: number,
        disableCache?: boolean,
        needToken?: boolean
    }

    //拓展自定义声明返回类型
    export interface AxiosInstance {
        <T = any>(config: AxiosRequestConfig): Promise<T>,

        request<T = any>(config: AxiosRequestConfig): Promise<T>,

        get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>,

        delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>,

        head<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>,

        post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>,

        put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>,

        patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>,

    }
}
