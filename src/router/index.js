import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            component: () => import('../Layout.vue'),
            children: [
                {
                    path: '/currencies',
                    component: () => import('../views/CurrenciesView.vue')
                },
                {
                    path: '/converter',
                    name: 'converter',
                    // route level code-splitting
                    // this generates a separate chunk (About.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    //TODO Show the correct view in this route
                    component: () => import('../views/ConverterView.vue')
                },
            ]
        }
    ]
})

export default router
