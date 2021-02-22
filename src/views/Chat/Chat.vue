<template>
     <div class="chat-container chat">
          <div class="chat__header">
               <div @click ="backToChats" class="left">
                    <i class='bx bx-chevron-left'></i>
               </div>
               <div class="right">
                    <div class="right-left">
                         <div class="chat__header-avatar">
                              <img alt="Vue logo" src="../../assets/logo.png">
                         </div>
                         <div class="chat__header-user">
                              <span class="name">Oluwashola bridget</span>
                              <span class="status">{{ status.status }}</span>
                         </div>
                    </div>
                    <div class="right">
                         <i class='bx bx-video'></i>
                         <i class='bx bxs-phone'></i>
                    </div>
               </div>
          </div>
          <div class="chat__feeds">
               <template  v-for="(feed, i) in FEEDS" :key="i">
                    <div class="feed" :class="{ 'right' : isEven(i)  }">     
                         <p class="text">
                              {{ feed.text }}
                         </p>
                    </div>
               </template>               
          </div>
          <div class="chat__form-message">
               <div class="attach">
                    <i class='bx bx-plus'></i>
               </div>
               <div class="text-field">
                    <input type="text" name="" id="" @keyup="notTyping" @keydown="typing">
               </div>
               <div class="other">
                    <span><i class='bx bxs-camera'></i></span>
                    <span><i class='bx bxs-microphone'></i></span>
                    <!-- <span><i class='bx bx-send'></i></span> -->
               </div>
          </div>
     </div>
</template>

<script>
    import socket from '@/socket.js';
    import { useRoute, useRouter } from 'vue-router';
    import { reactive, onMounted, } from 'vue';
    import { FEEDS } from '@/data/feeds';

    export default {
        name: 'Chat',
        components: {

        },

        setup() {   
          let timer,
               timeoutValue = 5000;
          
          
          const status = reactive({status: 'online'})
          
          const router = useRouter();
          window.route = useRoute();
          //const {params:{username}} =  useRoute();
          
          // const getUser  = async () => {

          // }
          
          //socket is connected
          socket.on('connect', () => {
               console.log(`socket connected ${socket.connected}`)
               console.log(`connected ${socket.id}`)      
          })
          
          //socket is disconnected
          socket.on('disconnect', () => {
               console.log(`socket connected ${socket.connected}`)
               console.log(`disconnected ${socket.id }`)
          })

          
          socket.on('hello', (data) => {
               console.log(`connected ${data}`)
          })

          //user is typing
          socket.on ('user_typing', ({ user, typers }) => {
               status.status =  typers > 0 ? `${user} isTyping...` : 'online'
              
          })

          //user stopped typing 
          socket.on('user_stopped_typing', (typers) => {

               if(!typers) {
                    status.status = 'online'
               }
          })
          // socket.emit('typing', {isTyping: "yes"},
          //      (response) => {
          //           console.log(response.status)
          //      }
          // ) 

          const typing  = (e) => {
               
               clearTimeout(timer)
               socket.emit("user_typing", {typing: e.target.value})

               if(e.target.value === '') {
                    socket.emit('user_stopped_typing')
               }
          }

          const notTyping = () => {             
               clearTimeout(timer)
               timer = setTimeout(() => {
                    socket.emit('user_stopped_typing')
               }, timeoutValue);
          }

        

          onMounted(() => {
               // const username = window.prompt('Enter your name', 'Olawale')
               // if(username) {
               //      socket.emit('new_user', { username: username })
               // }
          })
         




          const backToChats = () => {
               router.replace("/chats")
          }


          const isEven = (x) => {
               return x % 2 ? true : false
          } 
          return {
               backToChats,FEEDS, isEven, typing, status, notTyping
          }
            
     }
        
}

</script>

<style src="./Chat.css" scoped>

</style>