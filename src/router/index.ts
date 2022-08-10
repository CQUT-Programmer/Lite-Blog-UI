import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import HomeView from '@/views/HomeView.vue'


const routes: Array<RouteRecordRaw> = [

    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {title: '主页面'},

    },
    {
        path: '/homeView',
        redirect: {name: 'home'},
    },
    {
        path: '/hotspot',
        name: 'about',
        component: () => import('../views/Hotspot.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
