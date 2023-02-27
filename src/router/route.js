// vue-router
import { createWebHistory,createRouter } from "vue-router";

const routes = [
    {
        path:'/buchet_vue',
        name:'Main',
        component:()=>import('@/views/Main.vue')
    },
    {
        path:'/buchet_vue/Info',
        name:'Info',
        component:()=>import('@/views/Info.vue'),
        props:true
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component:()=>import("@/views/NotFound.vue")
    }
];

const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router;