export default {
   state: {
      id_user:null
   },
   mutations:{
      SET_ID_USER_PASS(state, id){
         state.id_user = id
      }, 
   },
   getters:{
      GET_ID_USER_PASS : state => state.id_user
   },
}