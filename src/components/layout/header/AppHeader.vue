<template>
   <header class="header">
      <div class="flex-sb">
         <div class="flex-center-all">
            <i @click="showMenu" class="item-head icon-menu"></i>
         </div>
         <div class="flex">
            <UserSesionVue/>
         </div>
      </div>
   </header>
</template>

<script>
import UserSesionVue from './UserSesion.vue'

export default {
   name:'appHeader',
   components:{
      UserSesionVue,
   },
   computed:{
      offSideBar(){
         return this.$store.getters.GET_OFF_SIDEBAR
      }
   },
   methods:{
      showMenu(){
         let state = !this.offSideBar
         this.$store.commit('SET_OFF_SIDEBAR', state)
      }
   }
}
</script>