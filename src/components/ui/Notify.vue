<template>
   <div class="notify--box">
      <div v-for="(message, index) in messages" :key="index"
      class="notify-item" :class="'notify-' + message.type">
         <b @click="close(message.id)" class="icon-clear notify-close"></b>
         <h5>{{ message.type | verificarTipo }}</h5>
         <p>{{ message.text }}</p>
      </div>
   </div>
</template>
<script>
export default {
   name: "Notify",
   data() {
      return {
         time: 4500,
      }
   },
   computed: {
      messages() {
         return this.$store.getters.GET_MESSAGES;
      },
   },
   methods: {
      close(id) {
         this.$store.commit("REMOVE_MESSAGE", id)
      }
   },
   filters: {
      verificarTipo(type) {
         let titulo;
         switch (type) {
            case "success":
               titulo = "Correcto";
               break;
            case "warning":
               titulo = "Advertencia";
               break;
            case "error":
               titulo = "Error";
               break;
            case "info":
               titulo = "Información";
               break;
         }
         return titulo;
      }
   }
   // 
};
</script>