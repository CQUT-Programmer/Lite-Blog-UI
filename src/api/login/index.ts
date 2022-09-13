import service from "@/utils/service";
import {AxiosPromise} from "axios";

export function loginApi(params: {mail: string, password: string}){
    return service({
        url: '/auth/login',
        method: 'get',
        params: params,
    })
}
