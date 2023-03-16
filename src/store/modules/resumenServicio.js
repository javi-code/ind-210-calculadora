import { currentDate } from "@/shared/utils";
export default {
   state: {
      datos:{
         cliente: null,
         termino: null,
         inicio: null,
         fin: currentDate(),
      }
   },
   mutations:{
      SET_DATA_RESUMEN(state, data){
         let key = Object.keys(data)[0]
         let val = Object.values(data)[0]
         state.datos[key] = val;
      }, 
   },
   getters:{
      GET_DATA_RESUMEN : state => state.datos
   },
}