<template>
   <label class="flex-center-ai">
      <small>{{name}}</small>
      <span class="switch">
         <input type="checkbox" :disabled="disabled"
            v-bind:checked="checked"
            v-on:change="$emit('change', $event.target.checked)">
         <b class="data-switch" data-on="Si" data-off="No"></b>
      </span>
   </label>
</template>

<script>
export default {
   props:{
      checked: Boolean,
      name:{
         type: String
      },
      disabled:{
         default: false
      }
   },
   model: {
      prop: 'checked',
      event: 'change'
   },
}
</script>