<template>
    <div class="chat-container chats">
        <div class="header">
            <div class="small avatar">
                <img alt="Vue logo" src="../../assets/logo.png">
            </div>
            <ul class="header-nav">
                <li>
                    <a href="#">Add Contact</a>
                </li>
                <li>
                    <a href="#">Setting</a>
                </li>
                <li>
                    <a href="#">Profile</a>
                </li>
            </ul>
        </div>
        <div class="content">
            <div @click="navigateToChat(chat.username)" class="contact" v-for="(chat,i) in friendList" :key="i">
                <div class="large avatar">
                    <img alt="Vue logo" src="../../assets/logo.png">
                </div>
                <div class="contact-info">
                    <div class="chat-preview">
                        <div class="chat-single">
                            <span class="contact-name">
                                {{ chat.username }}
                            </span>
                            <span class="chat-date">
                                {{ timeAgo(chat.created_at)  }}
                            </span>
                        </div>
                        <span class="text">
                            Lorem ipsum dolor sit amet consectetur
                        </span>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
    import { onMounted,ref } from 'vue';
    //import { CHATS } from '@/data/chats';
    import { useRouter,  } from 'vue-router';
    import { getFriends } from '@/routes';
    import { getUser } from '@/helpers';
    import { timeAgo } from "@/helpers/duration_helper"

    export default {
        name: 'Chats',

        setup() {
            const user = getUser();
            console.log(user.phoneNo)
            const router = useRouter();
            const friendList  = ref([]);
            const args = {
                endPoint: "friends",
                method: "POST",
                body: {
                    user: user.phoneNo
                }
            }
            const contacts =  async () => {
                const {  friends }  = await getFriends(args);
                friendList.value = friends
            }

            const navigateToChat = (username) => {
                router.push({
                    name: "chat",
                    params: { username: username } 
                })
            }

            onMounted(() => {
                contacts()
            })

            return {
                navigateToChat, contacts, friendList, timeAgo
            }
        }   
    }
</script>

<style src="./Chats.css" scoped>

</style>