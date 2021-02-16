<template>
     <div class="chat">
          <div class="chat__header">
               <div class="left">
                    <i class='bx bx-chevron-left'></i>
               </div>
               <div class="middle">
                    <div class="chat__header-avatar">
                         <img alt="Vue logo" src="../../assets/logo.png">
                    </div>
                    <div class="chat__header-user">
                         <span class="name">Oluwashla bridget</span>
                         <span class="status">online</span>
                    </div>
               </div>
               <div class="right">
                    <i class='bx bx-video'></i>
                    <i class='bx bxs-phone'></i>
               </div>
          </div>
          <div class="chat__feeds">
               <div class="feed">     
                    <p class="text">
                         Lorem ipsum dolor sit amet consectetur, adipisicing ept. Ipsa, obcaecati nesciunt tempore amet corporis error illum hic
                         corrupti placeat debitis expedita odit praesentium, ducimus recusandae voluptatem perspiciatis culpa? Dolorum, molestiae!
                    </p>
               </div>
               <div class="feed right">     
                    <p class="text">
                         Lorem ipsum dolor sit amet consectetur, adipisicing ept. Ipsa, obcaecati nesciunt tempore amet corporis error illum hic
                         corrupti placeat debitis expedita odit praesentium, ducimus recusandae voluptatem perspiciatis culpa? Dolorum, molestiae!
                    </p>
               </div>
               <div class="feed">     
                    <p class="text">
                         Lorem ipsum dolor sit amet consectetur, adipisicing ept. Ipsa, obcaecati nesciunt tempore amet corporis error illum hic
                         corrupti placeat debitis expedita odit praesentium, ducimus recusandae voluptatem perspiciatis culpa? Dolorum, molestiae!
                    </p>
               </div>
               <div class="feed right">     
                    <p class="text">
                         Lorem ipsum dolor sit amet consectetur, adipisicing ept. Ipsa, obcaecati nesciunt tempore amet corporis error illum hic
                         corrupti placeat debitis expedita odit praesentium, ducimus recusandae voluptatem perspiciatis culpa? Dolorum, molestiae!
                    </p>
               </div>
               
          </div>
          <div class="chat__form-message">
               <input type="text" name="" id="">
          </div>
     </div>
</template>

<script>
    import socket from '@/socket.js';
    export default {
        name: 'Chat',
        components: {

        },

        setup() {   
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

            // window.addEventpstener('beforeunload', function(e) {
            //   console.log(e)
            //   alert("hellow")
            // })


            // if(leaving.isLeaving){
                
            //     alert("you are about to leave")
            //   }

            // onBeforeUnmount(() => {
                
                
                
            // })     
            
        }
        
        }

</script>

<style src="./Chat.css" scoped>

</style>