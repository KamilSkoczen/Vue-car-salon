import { createRouter, createWebHistory } from "vue-router";

import DrivesList from './pages/DrivesList.vue'
import FindDealer from './pages/FindDealer.vue'
import NotFound from './pages/NotFound.vue'
import TheHome from './pages/TheHome.vue'
import TheSearch from './pages/TheSearch.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: TheHome},
        {path: '/drives', component: DrivesList},
        {path: '/find-a-dealer', component: FindDealer},
        {path: '/search', component: TheSearch},
        {path: '/:notFound(.*)', component: NotFound},

    ]
})

export default router