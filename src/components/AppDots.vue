<template>
   <div class="box-options-left">
      <i class="ic--vert toggle icon-more-vert" v-dropdown></i>
      <div class="options-dots dropdown box">
         <p v-if="showEdit" class="item-option d-edit" @click="editarItem">
            <i class="icon-create"></i>
            <span>Editar</span>
         </p>
         <p v-if="showDelete" class="item-option d-del" @click="eliminar">
            <i class="icon-bin"></i>
            <span>Eliminar</span>
         </p>
         <slot></slot>
      </div>
   </div>
</template>
<script>
import { dropdown } from '@/shared/directives/dropdown'
import {MixDeleteMutacion} from '@/shared/mixins/deleteMutacion';
export default {
   name:'dots',
   directives:{
      dropdown
   },
   props:{
      showEdit:{
         type:Boolean,
         default:true
      },
      showDelete:{
         type:Boolean,
         default:true
      },
      // 
      id:{
         required:true
      },
      items:{
         type:Array,
         required:true
      },
      nameMutationDelete:{
         type:String,
         required:true
      },
      delByKey: {
         type: String,
         default: null
      }
   },
   mixins:[MixDeleteMutacion],
   computed:{
      itemEdit(){
         let item = null
         for (let i = 0; i < this.items.length; i++) {
            if(this.id == this.items[i].id){
               item = this.items[i]
            }
         }
         return item
      }
   },
   methods:{
      editarItem(){
         if(this.itemEdit){
            this.$store.commit('SET_ITEM_EDIT', this.itemEdit)
            this.$root.$emit('on-modal-form');
         }
      },
      eliminar(){
         this.eliminarItem( this.id, this.nameMutationDelete, this.items, null, this.delByKey );
      },
   },
}
</script>