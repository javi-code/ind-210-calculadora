<template>
   <WrappInputVue :name="name">
      <select @change="updateValue" :required="required" :tabindex="tabindex" :disabled="disabled">
         <option v-if="!notNull" :value="null">{{holder}}</option>
         <option v-for="(item, index) in items" :key="index"
            :value="index" :selected="index == value">
            {{item}}
         </option>
      </select>
   </WrappInputVue>
</template>
<script>
import WrappInputVue from './WrappInput.vue'

export default {
   name:'selectTag',
   components:{
      WrappInputVue
   },
   props:{
      name:{
         type: String,
      },
      items:{
         default:[],
         required:true
      },
      value:{
         default: null,
      },
      def:{
         default:null
      },
      required:{
         default:false
      },
      holder:{
         type: String,
         default: '--Seleccionar--'
      },
      notNull:{
         default:false
      },
      tabindex:{
         default:null
      },
      disabled: {
         default: null
      }
   },
   methods: {
      updateValue: function () {
         let val = null
         if(event){
            val = event.target.value
         }
         this.$emit('input', val)
      }
   },
   mounted(){
      return 
   }
}
</script>