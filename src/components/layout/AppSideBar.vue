<template>
   <div class="box-sidebar">
      <div class="siderbar">
         <div class="bx-menu">
            <div class="sidebar-logo">
               <img src="~@/assets/img/logo_full.png">
            </div>
            <ul class="menu">
               <template v-for="(item,index) in menu">
                  <li v-if="!item.notAccess || !item.notAccess.includes(userRol)" :key="index" class="item-menu">
                     <router-link :to="{name: item.nameUrl}" @click.native="showSubmenu(index)" class="item-menu-link"
                        :class="active==index && item.childs? 'show-sub-m':''"
                        :active-class="item.nameUrl ? 'active-menu':''" > 
                           <i :class="item.icon"></i>
                           <p>{{item.name}}</p>
                           <b v-if="item.childs" :class="active==index ? 'icon-arrow-up':'icon-arrow-down'"></b>
                     </router-link>
                     <ul v-if="item.childs" class="sub-menu" :class="{'active-submenu': active==index}">
                        <template v-for="(child, index2) in item.childs">
                           <li v-if="!child.notAccess || !child.notAccess.includes(userRol)" :key="index2">
                              <router-link :to="{name: child.nameUrl}" active-class="active-menu"  class="item-menu-link">
                                 <p>{{child.name}}</p>
                              </router-link>
                           </li>
                        </template>
                     </ul>
                  </li>
               </template>
            </ul>
         </div>
         <div class="bx-devs">
            <p>Diseñado y Desarrollado por</p>
            <a :href="WEB_SOPORTE" target="blank">90 Horas / semana</a>
         </div>
      </div>
      <!-- <div class="mask" @click="offSideBar"></div> -->
   </div>
</template>

<script>
import { WEB_SOPORTE } from '../../shared/constants'
export default {
   name:'SideBar',
   data: () => ({
      active:null,
      WEB_SOPORTE,
      menu:[
         {
            name:'Inicio',
            nameUrl:'inicio',
            icon:'icon-home'
         },
         {
            name:'Tipo de prenda',
            nameUrl:'tipo-prenda',
            icon:' icon-dry-cleaning',
            notAccess: ['OPE','PLA','SUC']
         },
         {
            name:'Horarios',
            nameUrl:'horarios',
            icon:' icon-clock',
            notAccess: ['OPE','PLA','SUC']
         },
         {
            name:'Reportes',
            icon:'icon-article',
            childs:[
               {
                  name:'Detalle de caja',
                  nameUrl:'detalle-caja',
               },
               {
                  name:'Resumen de servicio',
                  nameUrl:'resumen-servicio',
                  notAccess: ['JFP','OPE','PLA','SUC']
               },
               {
                  name:'Resumen de clientes',
                  nameUrl:'resumen-clientes',
                  notAccess: ['JFP','OPE','PLA','SUC']
               },
               {
                  name:'Pagos con cheque',
                  nameUrl:'pagos-cheque',
                  notAccess: ['OPE','PLA','SUC']
               },
               {
                  name:'Lavado en sucursal',
                  nameUrl:'lavado-sucursal',
                  notAccess: ['OPE','PLA','SUC']
               },
            ]
         },
         {
            name:'Monitoreo',
            icon:'icon-ballot',
            notAccess: ['OPE','PLA','SUC'],
            childs: [
               {
                  name:'Por recoger',
                  nameUrl:'por-recoger',
               },
               {
                  name:'Recogidas',
                  nameUrl:'recogidas',
               },
               {
                  name:'Entregadas',
                  nameUrl:'entregadas',
               },
               {
                  name:'General en planta',
                  nameUrl:'general-planta',
               },
               {
                  name:'Por Sucursal',
                  nameUrl:'por-sucursal',
               },
            ]
         },
         {
            name: 'Clientes',
            nameUrl: 'clientes',
            icon: 'icon-folder-shared',
            notAccess: ['OPE','PLA','SUC']
         },
         {
            name:'Usuarios',
            nameUrl:'usuarios',
            icon:'icon-assignment',
            notAccess: ['OPE','PLA','SUC']
         },
      ]
   }),
   computed: {
      userRol(){
         return this.$store.getters.GET_ROL_USER
      }
   },
   methods:{
      showSubmenu(index){
         this.active = this.active == index ? null : index
      },
   }
}
</script>