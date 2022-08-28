import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import viewContent from '@/views/ViewContent.vue'
import Nprogress from '../tools/myNprogress.js'

Nprogress.configure({showSpinner: false})


//导入规范路由
const requireRouter = require.context("@/router", true, /index\.ts$/)
const routers: Array<RouteRecordRaw> = []
requireRouter.keys().forEach(filePath => {
    const model = requireRouter(filePath)
    routers.push(model.default || model)
})


const routes: Array<RouteRecordRaw> = [

    {
        path: '/',
        redirect: {name: 'home'}
    },

    {
        path: '/liteblog',
        name: 'home',
        redirect: 'liteblog',
        component: viewContent,
        meta: {title: '博客页面总内容'},
        children: [
            ...routers,
            {
                path: 'blogview/:blogId',
                name: 'blogview',
                component: () => import('@/views/blogview/index.vue'),
            }

        ]
    },

    {
        path: '/blogEditor',
        name: 'blogEditor',
        meta: {title: '博客编辑页面'},
        component: () => import('@/views/editor/index.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    // linkActiveClass: 'active-color'
})


router.beforeEach((_from, _to, next) => {
    Nprogress.start()
    next()
})
router.afterEach((_to, _from) => {
    console.log()
    Nprogress.done()
})


export default router
