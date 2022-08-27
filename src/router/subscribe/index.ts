
import { RouteRecordRaw } from 'vue-router'
import routerImport from "@/tools/routerImport";
//导入子路由配置
const requireUsers = require.context("@/views/subscribe", true, /index\.vue$/)

const routers = routerImport(requireUsers, 'subscribed', 'subscribed')

const userRouter: RouteRecordRaw = {
    path: 'subscribe',
    name: 'subscribe',
    meta: {title: '标签'},
    component: () => import('@/views/subscribe/Subscribe.vue'),
    children: [
        ...routers
    ]
}


export default userRouter
