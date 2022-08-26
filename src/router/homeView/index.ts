
import { RouteRecordRaw } from 'vue-router'
import routerImport from "@/tools/routerImport";

//导入子路由配置
const requireUsers = require.context("@/views/homeView", true, /index\.vue$/)

const routers = routerImport(requireUsers, 'synthetical', 'homeView')

const userRouter: RouteRecordRaw = {
    path: '',
    name: 'homeView',
    meta: {title: '主页面'},
    component: () => import('@/views/homeView/HomeView.vue'),
    children: routers
}


export default userRouter
