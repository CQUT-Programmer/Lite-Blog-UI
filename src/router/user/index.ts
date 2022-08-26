import {RouteRecordRaw} from 'vue-router'
import routerImport from "@/tools/routerImport";

//导入子路由配置
const requireUsers = require.context("@/views/user", true, /index\.vue$/,)

const routers = routerImport(requireUsers, 'dynamic', 'user')

const userRouter: RouteRecordRaw =
    {
        path: 'user' + "/" + ":userId",
        name: 'user',
        component: () => import('@/views/user/User.vue'),
        children: routers,
    }

export default userRouter
