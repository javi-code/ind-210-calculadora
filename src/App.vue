<template>
   <div id="app">
      <router-view></router-view>
      <NotifyVue/>
   </div>
</template>
<script>
import NotifyVue from './components/ui/Notify.vue'

export default {
   components:{
      NotifyVue
   }
}
</script>