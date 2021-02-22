<template>
    <div class="chat-container chats">
        <div class="content">
            <div @click="navigateToChat(chat.name)" class="contact" v-for="chat in CHATS" :key="chat.name">
                <div class="contact-avatar">
                    <img alt="Vue logo" src="../../assets/logo.png">
                </div>
                <div class="contact-info">
                    <div class="chat-preview">
                        <div class="chat-single">
                            <span class="contact-name">
                                {{ chat.name }}
                            </span>
                            <span class="chat-date">
                                {{ chat.date }}
                            </span>
                        </div>
                        <span class="text">
                            {{ chat.text }} 
                        </span>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
    import { CHATS } from '@/data/chats';
    import { useRouter,  } from 'vue-router'
    export default {
        name: 'Chats',

        setup() {
            
            const router = useRouter();
            
            window.router = useRouter()
            const navigateToChat = (username) => {
                router.push({
                    name: "chat",
                    params: { username: username } 
                })
            }

            return {
                navigateToChat, CHATS
            }
        }   
    }
</script>

<style src="./Chats.css" scoped>

</style>