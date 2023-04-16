// vue-router
import { createWebHistory,createRouter } from "vue-router";

const routes = [
    {
        path:'/buchet',
        name:'Main',
        component:()=>import('@/views/Main.vue')
    },
    {
        // path:'/buchet/Info/:name/:age',
        path:'/buchet/Info',
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
    // mode:'hash',
    history:createWebHistory(),
    routes,
})

export default router;