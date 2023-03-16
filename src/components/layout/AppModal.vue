<template>
   <div class="modal-form" :class="{'on-modal-frm':onmodal}">
     <slot></slot>
   </div>
</template>

<script>
export default {
   name:'Modal',
   computed:{
      onmodal(){
         return this.$store.getters.GET_STATE_MODAL
      }
   },
}
</script>