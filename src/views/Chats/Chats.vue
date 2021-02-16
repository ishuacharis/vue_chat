<template>
    <div class="chats">
        <div @click="navigateToChat" class="contact" v-for="chat in chats" :key="chat.name">
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
</template>

<script>
    import { reactive } from 'vue';
    import { useRouter } from 'vue-router'
    export default {
        name: 'Chats',

        setup() {
            const chats = reactive([
                {
                    name: "+2348030742614",
                    date: 'yesterday',
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. autem suscipit dolorum Lorem ipsum dolor sit amet consectetur adipisicing elit. autem suscipit dolorum"
                },
                {
                    name: "+2348028603445",
                    date: '20/01/21',
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. autem suscipit dolorum Lorem ipsum dolor sit amet consectetur adipisicing elit. autem suscipit dolorum"
                }
            ])
            const router = useRouter();
            const navigateToChat = () => {
                router.push("/chat")
            }

            return {
                navigateToChat, chats
            }
        }   
    }
</script>

<style src="./Chats.css" scoped>

</style>