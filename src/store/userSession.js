export default {
   state: {
      user:null,
   },
   mutations:{
      SET_USER(state, user){
         state.user = user
      },
   },
   getters:{
      GET_USER : state => state.user,
      GET_ROL_USER : state => state.user?.nivelAcceso
   },
}