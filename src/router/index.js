import { createRouter, createWebHistory } from 'vue-router'
const Chat = () => import("@/views/Chat/Chat.vue") ;
const Chats = () => import("@/views/Chats/Chats.vue") ;
const HelloWorld = () => import('@/components/HelloWorld.vue');
const Register  = () => import('@/views/Auth/Register.vue');
const Settings  = () => import('@/views/Settings/Settings.vue');
const AddUser  = () => import('@/views/AddUser/AddUser.vue');
import {authGuard, guestGuard} from './guard';

const routes = [
    {
        path: "/",
        component: HelloWorld
    },
    {
        path: "/chat/:username",
        name: "chat",
        meta: {requiresAuth: true},
        beforeEnter: authGuard,
        component: Chat
    },
    {
        path: "/chats",
        name: "chats",
        meta: {requiresAuth: true},
        beforeEnter: authGuard,
        component: Chats
    },
    {
        path: "/settings",
        name: "settings",
        meta: {requiresAuth: true},
        beforeEnter: authGuard,
        component: Settings
    },
    {
        path: "/add-user",
        name: "adduser",
        meta: {requiresAuth: true},
        beforeEnter: authGuard,
        component: AddUser
    },
    {
        path: "/register",
        name: "register",
        meta: { guest: true},
        beforeEnter: guestGuard,
        component: Register
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;