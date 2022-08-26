import {RouteRecordRaw} from 'vue-router'


interface RequireContext {
    keys(): string[];

    (id: string): any;

    <T>(id: string): T;

    resolve(id: string): string;

    id: string;
}


/*export default function routerImport(requireContext: RequireContext, defaultPath: string, ...routerAdd: Array<string>) {

    const routerAddFlag = routerAdd.length !== 0
    const routers: Array<RouteRecordRaw> = []
    requireContext.keys().forEach(filePath => {
        const modular = requireContext(filePath)
        //filePath = "./bagName/index.vue"
        const path = filePath.split("/")[1]
        const currRouter: RouteRecordRaw = {
            component: modular.default,
            name: path,
            path: path
        }

        //当是默认路由设置path为''
        if (path === defaultPath) {

            const defaultRouter: RouteRecordRaw = {
                component: modular.default,
                name: path,
                path: ''
            }
            if (routerAddFlag) {
                routerAdd.forEach(value => {
                    defaultRouter.path = currRouter.path + "/" + ":" + value
                })}

            routers.push(defaultRouter)

        }

        //当路由有添加信息进行添加
        if (routerAddFlag) {
                routerAdd.forEach(value => {
                    currRouter.path = currRouter.path + "/" + value
            })}

        routers.push(currRouter)

    })
    const router: Array<RouteRecordRaw> = [
        ...routers
    ]

    return router
}*/

export default function routerImport(requireContext: RequireContext, defaultPath: string, parentBagName: string) {

    const routers: Array<RouteRecordRaw> = []
    requireContext.keys().forEach(filePath => {
        const modular = requireContext(filePath)
        //filePath = "./bagName/index.vue"
        const path = filePath.split("/")[1]
        const currRouter: RouteRecordRaw = {
            path: path,
            name: parentBagName + "_" + path,
            component: modular.default,
        }

        //当是默认路由设置path为''
        if (path === defaultPath) {

            const defaultRouter: RouteRecordRaw = {
                path: '',
                name: parentBagName + "_" + path + "_default",
                component: modular.default,
            }
            routers.push(defaultRouter)

        }

        routers.push(currRouter)

    })

    return routers
}




