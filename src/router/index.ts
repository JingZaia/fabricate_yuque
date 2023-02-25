import {createRouter,createWebHashHistory} from "vue-router";
const routes=[
    {
        path:"/",
        redirect:"/dashboard/start",
    },
    {
        path:'/dashboard',
        name:"dashboard",
        component:()=> import("@/pages/Dashboard.vue"),
        children:[
            {
                path:"/dashboard/start",
                name:"start",
                component:()=>import("@/pages/Start.vue"),
            },
            {
                path:"/dashboard/notes",
                name:"notes",
                component:()=>import("@/pages/Notes.vue"),
            },
            {
                path:"/dashboard/collecting",
                name:"collecting",
                component:()=>import("@/pages/Collect.vue"),
            },
            {
                path:"/dashboard/stroll",
                name:"stroll",
                component:()=>import("@/pages/Stroll.vue"),
            }
        ]
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