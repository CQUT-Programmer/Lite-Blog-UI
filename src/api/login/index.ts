import service from "@/utils/service";

export function loginApi(params) {
    return service({
        url: '/api/login',
        method: 'get',
        data: params,
    })
}
