<template>
   <div class="item-input">
      <label v-if="name">{{name}}</label>
      <slot></slot>
   </div>
</template>

<script>
export default {
   name:'wrappInput',
   props:{
      name:{
         type:String
      }
   }
}
</script>