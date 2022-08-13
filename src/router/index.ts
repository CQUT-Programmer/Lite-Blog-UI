import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import HomeView from '@/views/homeView/HomeView.vue'


const routes: Array<RouteRecordRaw> = [

    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {title: '主页面'},
        children: [{
            path: '/synthetical',
            name: 'synthetical',
            component: () => import('@/views/homeView/synthetical/index.vue')
        }, {
            path: '/attention',
            name: 'attention',
            component: () => import('@/views/homeView/attention/index.vue')
        }
        ]

    },
    {
        path: '/homeView',
        redirect: {name: 'home'},
    },
    {
        path: '/hotspot',
        name: 'about',
        component: () => import('../views/hotspot/Hotspot.vue')
    },
    {
        path: '/blogEditor',
        name: 'blogEditor',
        component: () => import('../components/BlogEditor.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})


export default router
