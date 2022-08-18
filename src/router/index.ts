import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import viewContent from '@/views/ViewContent.vue'


const routes: Array<RouteRecordRaw> = [

    {
        path: '/',
        component: viewContent
    },
    {
        path: '/liteblog',
        component: viewContent,
        name: 'home',
        meta: {title: '博客页面总内容'},
        children: [
            {
                path: '',
                name: 'homeView',
                meta: {title: '主页面'},
                component: () => import('@/views/homeView/HomeView.vue'),
                children: [
                    {
                        path: 'synthetical',
                        name: 'synthetical',
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
                path: '/hotspot',
                name: 'about',
                component: () => import('../views/hotspot/Hotspot.vue')
            },
        ]

    },

    {
        path: '/blogEditor',
        name: 'blogEditor',
        meta: {title: '博客编辑页面'},
        component: () => import('../components/BlogEditor.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})


export default router
