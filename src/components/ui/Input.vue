<template>
   <WrappInputVue :name="name">
         <!-- v-focus -->
      <input
         :type="type"
         :placeholder="holder"
         :min="(type=='number') ? 0:null"
         :required="required"
         :disabled="disabled"
         :step="(float) ? '0.10':null"
         :tabindex="tabindex"
         v-bind:value="value"
         v-on:input="updateValue($event.target.value)"
      />
   </WrappInputVue>
</template>
<script>
import WrappInputVue from './WrappInput.vue'
export default {
   name:'inputTag',
   components:{
      WrappInputVue
   },
   directives: {
      // focus: {
      //    inserted: function (el) {
      //       el.focus()
      //    }
      // }
   },
   props:{
      name:{
         type: String,
      },
      focus:{
         default: false
      },
      value:{
         default:null
      },
      float:{
         default:null
      },
      type:{
         default: 'text'
      },
      required:{
         default:false
      },
      disabled:{
         default:false
      },
      holder:{
         type: String,
         default: null
      },
      tabindex:{
         default:null
      }
   },
   methods: {
      updateValue: function (value) {
         this.$emit('input', value)
      }
   },
}
</script>