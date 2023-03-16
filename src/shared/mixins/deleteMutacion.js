import { ELIMINAR } from '@/graphql/mutations'
import { parsetData } from '@/shared/utils'

export const MixDeleteMutacion = {
   methods:{
      eliminarItem(id, nameMutacion, items=null, UPDATE_QUERY=null, delByKey=null, callback=null){
         if( confirm('¿ Esta seguro de eliminar ?') ){
            let mutacion = ELIMINAR(nameMutacion)
            this.$apollo.mutate({
               mutation: mutacion,
               variables:{
                  id: parseInt( id )
               },
               refetchQueries: UPDATE_QUERY
            }).then(r => {
               let data = parsetData(r.data)
               if( data.estado ){
                  if(items){
                     for (let i = 0; i < items.length; i++) {
                        if(delByKey){
                           if(items[i][delByKey] == id){
                              items.splice(i, 1)
                           }
                        }else if(items[i].id == id){
                           items.splice(i, 1)
                        }
                     }
                  }
                  if(callback){
                     callback()
                  }
                  this.notificar('Se eliminó correctamente','success')
               }else{
                  this.notificar('No se pudo eliminar, vuelva intentar','error')
               }
            }).catch(() => {
               this.notificar('No se pudo eliminar, vuelva intentar','error')
            })
         }
      },
      notificar(sms, type){
         this.$store.commit('SET_MESSAGES',{
            type: type,
            text: sms
         })
      }
   }
}