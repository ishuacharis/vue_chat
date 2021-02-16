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
                              <span class="status">online</span>
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
               <input type="text" name="" id="">
          </div>
     </div>
</template>

<script>
    import socket from '@/socket.js';
    import { useRouter } from 'vue-router';
    import { reactive } from 'vue';

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
          
          const router = useRouter();
          

          socket.on('connect', () => {
               console.log(`socket connected ${socket.connected}`)
               console.log(`connected ${socket.id}`)
               
          })
          
          socket.on('disconnect', () => {
               console.log(`socket connected ${socket.connected}`)
               console.log(`disconnected ${socket.id }`)
          })
          socket.on('isconnected',function(data) {
               console.log(`thank you servers  ${data.connected}`)

               socket.emit('typing', {isTyping: "yes"},
               (response) => {
                    console.log(response.status)
               }
               )       
          })

          socket.on('hello', (data) => {
               console.log(`connected ${data}`)
          })

          const backToChats = () => {
               router.replace("/chats")
          }

            // window.addEventpstener('beforeunload', function(e) {
            //   console.log(e)
            //   alert("hellow")
            // })


            // if(leaving.isLeaving){
                
            //     alert("you are about to leave")
            //   }

            // onBeforeUnmount(() => {
                
                
                
            // })
            const isEven = (x) => {
                 return x % 2 ? true : false
            } 
            return {
               backToChats,feeds, isEven
          }
            
     }
        
}

</script>

<style src="./Chat.css" scoped>

</style>