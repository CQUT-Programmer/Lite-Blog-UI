
import { RouteRecordRaw } from 'vue-router'
import {getStorage} from "@/tools/storage";
import {StorageType} from "@/tools/constants";
//导入子路由配置
const requireUsers = require.context("@/views/user", true, /index\.vue$/)
const routers: Array<RouteRecordRaw> = []

const userId = getStorage('user_id', StorageType.SESSION)
requireUsers.keys().forEach(filePath => {
    const modular = requireUsers(filePath)
    //filePath = "./dynamic/index.vue"
    const path = filePath.split("/")[1]
    if (path === 'dynamic') {
        routers.push({
            path: userId ,
            component: modular.default,
            name: path
        })
    }
    else  {
        routers.push({
            path: userId + '/' + path,
            component: modular.default,
            name: path
        })
    }

})
const userRouter: Array<RouteRecordRaw> = [
    ...routers
]

console.log(userRouter)

export default userRouter
