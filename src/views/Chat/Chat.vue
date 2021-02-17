<template>
     <div class="chat">
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
               <template  v-for="(feed, i) in feeds" :key="i">
                    <div class="feed" :class="{ 'right' : isEven(i)  }">     
                         <p class="text">
                              {{ feed.text }}
                         </p>
                    </div>
               </template>               
          </div>
          <div class="chat__form-message">
               <input type="text" name="" id="" @keyup="typing">
          </div>
     </div>
</template>

<script>
    import socket from '@/socket.js';
    import { useRouter } from 'vue-router';
    import { reactive, onMounted, } from 'vue';

    export default {
        name: 'Chat',
        components: {

        },

        setup() {   
          
          const feeds =  reactive([
               {
                    text: "Lorem ipsum dolor sit amet consectetur, adipisicing ept. Ipsa, obcaecati nesciunt tempore amet corporis error illum hic corrupti placeat debitis expedita odit praesentium, ducimus recusandae voluptatem perspiciatis culpa? Dolorum, molestiae!"
               },
               {
                    text: "Lorem ipsum dolor sit amet consectetur, adipisicing ept. Ipsa, obcaecati nesciunt tempore amet corporis error illum hic corrupti placeat debitis expedita odit praesentium, ducimus recusandae voluptatem perspiciatis culpa? Dolorum, molestiae!"
               },
               {
                    text: "Lorem ipsum dolor sit amet consectetur, adipisicing ept. Ipsa, obcaecati nesciunt tempore amet corporis error illum hic corrupti placeat debitis expedita odit praesentium, ducimus recusandae voluptatem perspiciatis culpa? Dolorum, molestiae!"
               },
               {
                    text: "Lorem ipsum dolor sit amet consectetur, adipisicing ept. Ipsa, obcaecati nesciunt tempore amet corporis error illum hic corrupti placeat debitis expedita odit praesentium, ducimus recusandae voluptatem perspiciatis culpa? Dolorum, molestiae!"
               },
               {
                    text: "Lorem ipsum dolor sit amet consectetur, adipisicing ept. Ipsa, obcaecati nesciunt tempore amet corporis error illum hic corrupti placeat debitis expedita odit praesentium, ducimus recusandae voluptatem perspiciatis culpa? Dolorum, molestiae!"
               }
          ])
          
          const status = reactive({status: 'online'})
          const router = useRouter();
          

          socket.on('connect', () => {
               console.log(`socket connected ${socket.connected}`)
               console.log(`connected ${socket.id}`)      
          })
          
          socket.on('disconnect', () => {
               console.log(`socket connected ${socket.connected}`)
               console.log(`disconnected ${socket.id }`)
          })

          
          socket.on('hello', (data) => {
               console.log(`connected ${data}`)
          })

          socket.on ('user_typing', ({ user, typers }) => {
               status.status =  typers > 0 ? `${user} isTyping...` : 'online'
              
          })

          // socket.emit('typing', {isTyping: "yes"},
          //      (response) => {
          //           console.log(response.status)
          //      }
          // ) 

          const typing  = () => {
               
               socket.emit("user_typing")
          }

          // window.addEventListener("beforeunload", function (e) {
          //      var confirmationMessage = " ";

          //      (e || window.event).returnValue = confirmationMessage;
          //      console.log("wahahahahahha") //Gecko + IE
          //      return confirmationMessage;                            //Webkit, Safari, Chrome
          // });

          onMounted(() => {
               const username = window.prompt('Enter your name', 'Olawale')
               if(username) {
                    socket.emit('new_user', { username: username })
               }
          })
         




          const backToChats = () => {
               router.replace("/chats")
          }


          const isEven = (x) => {
               return x % 2 ? true : false
          } 
          return {
               backToChats,feeds, isEven, typing, status
          }
            
     }
        
}

</script>

<style src="./Chat.css" scoped>

</style>