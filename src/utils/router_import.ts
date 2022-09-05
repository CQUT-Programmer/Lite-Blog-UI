import {RouteRecordRaw} from 'vue-router'
interface RequireContext {
    keys(): string[];

    (id: string): any;

    <T>(id: string): T;

    resolve(id: string): string;

    id: string;
}

/**
 *
 * @param requireContext: 解析导出的资源对象
 * @param defaultPath: 默认url地址
 * @param parentBagName: 父包名
 * @param neglect: 忽略自动配置的url
 */
export default function routerImport(requireContext: RequireContext, defaultPath: string, parentBagName: string, ...neglect: Array<string>) {

    const routers: Array<RouteRecordRaw> = []
    requireContext.keys().forEach(filePath => {
        const modular = requireContext(filePath)
        //filePath = "./bagName/index.vue"
        const path = filePath.split("/")[1]
        if (neglect.length == 0 || neglect.indexOf(path) == -1) {
            const currRouter: RouteRecordRaw = {
                path: path,
                name: parentBagName + "_" + path,
                component: () => new Promise((rev, rej) => {
                    rev(modular.default)
                    rej("组件加载失败")
                }).catch(reason => {
                    console.log(reason)
                }),
            }

            //当是默认路由设置path为''
            if (path === defaultPath) {

                const defaultRouter: RouteRecordRaw = {
                    path: '',
                    name: parentBagName + "_" + path + "_default",
                    component: () => new Promise((rev, rej) => {
                        rev(modular.default)
                        rej("组件加载失败")
                    }).catch(reason => {
                        console.log(reason)
                    }),
                }
                routers.push(defaultRouter)

            }

            routers.push(currRouter)
        }


    })

    return routers
}




