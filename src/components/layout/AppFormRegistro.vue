<template>
   <div class="form-reg mb">
      <BotonVue v-if="nameAdd" 
         @click.native="onmodal=true"
         :name="nameAdd" icon="icon-add"
         class="btn-add not-print"
      />
      <div class="modal-form" :class="{'on-modal-frm':onmodal}">
         <slot></slot>
      </div>
   </div>
</template>

<script>
import BotonVue from '../ui/Boton.vue'

export default {
   name:'FrmLog',
   components:{
      BotonVue
   },
   data:() => ({
      onmodal: false
   }),
   props:['nameAdd'],
   created(){
      this.$root.$on('off-modal-form', () => {
         this.onmodal = false
      })
      this.$root.$on('on-modal-form', () => {
         this.onmodal = true
      })
   }
}
</script>