<template>
   <div class="box-empty flex-center-all">
      <i class="icon-empty"></i>
      <p v-if="message">{{message}}</p>
   </div>
</template>

<script>
export default {
   name:'Empty',
   props:{
      message:{
         type:String
      }
   }
}
</script>