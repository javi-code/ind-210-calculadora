export default {
   state: {
      operador: null
   },
   mutations:{
      SET_OPERADOR_REPORTE(state, operador){
         state.operador = operador
      }, 
   },
   getters:{
      GET_OPERADOR_REPORTE : state => state.operador
   },
}