import {createRouter,createWebHashHistory} from "vue-router";
const routes=[
    {
        path:'/dashboard',
        name:"dashboard",
        component:()=> import("@/pages/Dashboard.vue")
    },
    {
        path: "/:catchAll(.*)",
        name: "404",
        component: () => import("@/pages/Dashboard.vue")
    },
];

const router=createRouter({
    history:createWebHashHistory(),
    routes,
})
export default router;