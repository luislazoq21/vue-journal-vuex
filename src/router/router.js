import { createRouter, createWebHashHistory } from 'vue-router'
import daybookRouter from '@/modules/daybook/router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import( /* webpackChunkName: "home" */ '@/views/Home' ),
    },
    {
        path: '/daybook',
        ...daybookRouter,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router