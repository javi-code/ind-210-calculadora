<template>
   <div class="box-user items--header" v-if="user">
      <div class="toggle tg-head-img" v-dropdown>
         <i class="icon-account"></i>
         <div>
            <p class="fz-9">{{user.nombres}}</p>
            <span class="fz-7 color-1">{{NIVEL_ACCESO[user.nivelAcceso]}}</span>
         </div>
      </div>
      <div class="box dropdown">
         <ul>
            <p class="text-center mb">
               <span class="small">¡BIENVENIDO!</span>
            </p>
            <router-link :to="{name:'inicio'}" class="item-option a-link-option">
               <i class="icon-home"></i>
               <span>Inicio</span>
            </router-link>
            <a :href="WEB_SOPORTE+'/contactos'" target="_blank" class="a-link-option item-option">
               <i class="icon-info"></i>
               <span>Soporte</span>
            </a>
         </ul>
         <BotonVue 
            @click.native="closeSesion"
            icon="icon-input"
            name="Cerrar sesión"
            class="close-sesion btn-error"
         />
      </div>
   </div>
</template>

<script>
import BotonVue from '@/components/ui/Boton.vue'
import {dropdown} from '@/shared/directives/dropdown'
import { outSesion } from '@/shared/utils'
import { WEB_SOPORTE } from '@/shared/constants'
import { NIVEL_ACCESO } from '@/shared/constants'

export default {
   name:'UserSesion',
   components:{
      BotonVue
   },
   data:() => ({
      NIVEL_ACCESO,
      WEB_SOPORTE,
   }),
   directives:{
      dropdown
   },
   computed:{
      user(){
         return this.$store.getters.GET_USER
      }
   },
   methods:{
      closeSesion(){
         outSesion()
      }
   }
}
</script>