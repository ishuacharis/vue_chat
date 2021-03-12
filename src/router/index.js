import { createRouter, createWebHistory } from 'vue-router'
const Chat = () => import("@/views/Chat/Chat.vue") ;
const Chats = () => import("@/views/Chats/Chats.vue") ;
const HelloWorld = () => import('@/components/HelloWorld.vue');
const Register  = () => import('@/views/Auth/Register.vue');
const routes = [
    {
        path: "/",
        component: HelloWorld
    },
    {
        path: "/chat/:username",
        name: "chat",
        component: Chat
    },
    {
        path: "/chats",
        name: "chats",
        component: Chats
    },
    {
        path: "/register",
        name: "register",
        component: Register
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;