import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import notify from './notify'
import userSession from './userSession'
import users from './modules/users'
import resumenServicio from './modules/resumenServicio'
import reportes from './modules/reportes'

export default new Vuex.Store({
   state: {
      offSidebar:false,
      itemEdit : null,
      modal:false,
   },
   mutations: {
      SET_OFF_SIDEBAR(state, stateside){
         state.offSidebar = stateside
      },
      SET_ITEM_EDIT(state, item){
         setTimeout(() => {
            state.itemEdit = item
         }, 100);
      },
      SET_STATE_MODAL(state){
         state.modal = !state.modal
      },
   },
   getters:{
      GET_OFF_SIDEBAR : state => state.offSidebar,
      GET_ITEM_EDIT  : state => state.itemEdit,
      GET_STATE_MODAL: state => state.modal,
   },
   modules: {
      userSession,
      notify,
      users,
      resumenServicio,
      reportes
   }
})
