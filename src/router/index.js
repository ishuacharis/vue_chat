import { createRouter, createWebHistory } from 'vue-router'
const Chat = () => import("@/views/Chat/Chat.vue") ;
const Chats = () => import("@/views/Chats/Chats.vue") ;
const HelloWorld = () => import('@/components/HelloWorld.vue');

const routes = [
    {
        path: "/",
        component: HelloWorld
    },
    {
        path: "/chat",
        component: Chat
    },
    {
        path: "/chats",
        component: Chats
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;