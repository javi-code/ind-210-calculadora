<template>
      <BotonVue icon="icon-printer" @click.native="print" class="btn-info" name="Imprimir"/>
</template>

<script>
import BotonVue from './Boton.vue'

export default {
   name:'btnPrint',
   components:{
      BotonVue
   },
   methods:{
      print(){
         window.print()
      }
   }
}
</script>