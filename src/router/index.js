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

// import vue from 'vue'
// import VueRouter from 'vue-router'

// vue.use(VueRouter)

// import Main from '@/views/Main.vue'
// import Info from '@/views/Info.vue'

// const router = new VueRouter({
//     mode: 'hash',
//     router: [
//         {
//             path:'/buchet_vue',
//             name:'Main',
//             component:Main
//         },
//         {
//             path:'/buchet_vue/Info',
//             name:'Info',
//             component:Info
//         },
//         {
//             path: "/:pathMatch(.*)*",
//             name: "NotFound",
//             component:()=>import("@/views/NotFound.vue")
//         }
//     ]
// })

// export { router }