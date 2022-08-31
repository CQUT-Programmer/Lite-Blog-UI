
import { RouteRecordRaw } from 'vue-router'
import routerImport from "@/utils/router_import";
//导入子路由配置
const requireUsers = require.context("@/views/hotspot", true, /index\.vue$/)

const routers = routerImport(requireUsers, 'new', 'hotspot')

const userRouter: RouteRecordRaw = {
    path: 'hotspot',
    name: 'hotspot',
    meta: {title: '沸点'},
    component: () => import('@/views/hotspot/Hotspot.vue'),
    children: [
        ...routers
    ]
}


export default userRouter
