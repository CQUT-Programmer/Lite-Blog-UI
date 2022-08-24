import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import viewContent from '@/views/ViewContent.vue'
import Nprogress from '../tools/myNprogress.js'
Nprogress.configure({ showSpinner: false })

const routes: Array<RouteRecordRaw> = [

    {
        path: '/',
        redirect: {name: 'home'}
    },

    {
        path: '/liteblog',
        name: 'home',
        component: viewContent,
        redirect: '/liteblog/',
        meta: {title: '博客页面总内容'},
        children: [
            {
                path: '',
                name: 'homeView',
                meta: {title: '主页面'},
                component: () => import('@/views/homeView/HomeView.vue'),
                children: [
                    {
                        path: '',
                        name: 'synthetical',
                        component: () => import('@/views/homeView/synthetical/index.vue')
                    },
                    {
                        path: 'synthetical',
                        component: () => import('@/views/homeView/synthetical/index.vue')
                    },
                    {
                        path: 'attention',
                        name: 'attention',
                        component: () => import('@/views/homeView/attention/index.vue')
                    },
                ]
            },
            {
                path: 'hotspot',
                name: 'about',
                component: () => import('../views/hotspot/Hotspot.vue'),
                children: [
                    {
                        path: 'new',
                        name: 'new',
                        component: () => import('@/views/hotspot/new/index.vue')
                    },
                    {
                        path: '',
                        redirect: {name: 'new'}
                    },
                    {
                        path: 'hot',
                        name: 'hot',
                        component: () => import('@/views/hotspot/hot/index.vue')
                    }
                ]
            },
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
