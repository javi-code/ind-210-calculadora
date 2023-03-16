import {parsetData} from '../utils'
export const MixSaveData = {
   data: () => ({
      sending : false,
      id : null
   }),
   computed:{
      itemEdit(){
         return this.$store.getters.GET_ITEM_EDIT
      }
   },
   methods:{
      saveData(MUTACION, UPDATE_QUERY=null, callback ){
         if(this.sending) return;
         this.sending = true
         let RESPONSE = this.$apollo.mutate({
            mutation: MUTACION.mutation,
            variables: MUTACION.variables,
            refetchQueries: UPDATE_QUERY
         });
         this.response(RESPONSE, callback)
      },
      response(RESPONSE, callback){
         RESPONSE.then( res => {
            let data = parsetData(res.data)
            if(data.estado){
               this.notificar('Se registro correctamente','success')
               if(callback){
                  callback()
               }
               this.resetForm()
            } else {
               this.notificar(data.error.description, 'error')
            }
         }).catch(e => {
            this.notificar('Error inesperado, recargue la página. Si el problema persiste hable con soporte','error')
            console.error(e);
         }).finally(() => {
            this.sending = false;
         });
      },

      resetForm(){
         Object.assign( this.$data, this.$options.data.call(this) )
         this.offModalForm()
         this.removeItemEditStore()
      },
      offModalForm(){
         this.$root.$emit('off-modal-form')
      },
      removeItemEditStore(){
         this.$store.commit('SET_ITEM_EDIT', null)
      },
      notificar(sms, type){
         this.$store.commit('SET_MESSAGES',{
            type: type,
            text: sms
         })
      },
   },
   destroyed(){
      this.removeItemEditStore()
   },
   watch:{
      itemEdit(){
         Object.assign(this, this.itemEdit);
         this.imagen = null
      }
   }
}