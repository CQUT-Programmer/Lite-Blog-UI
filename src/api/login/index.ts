import service from "@/utils/service";
import {RootObject} from "@/model/rootObject";

export function loginApi(params: { mail: string, password: string }) {
    return service.get<RootObject<any>>('/auth/login', {
        params: params,
        needToken: false
    })
}
