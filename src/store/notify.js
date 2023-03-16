export default {
   state: {
      messages:[]
   },
   mutations:{
      SET_MESSAGES(state, message){
         message['id'] = state.messages.length + 1
         state.messages.push(message)
         setTimeout(() => {
            this.commit('REMOVE_MESSAGE', message.id)
         }, 4500);
      },
      REMOVE_MESSAGE(state, id){
         state.messages.forEach((el,index) => {
            if(id == el.id){
               state.messages.splice(index, 1);
            }
         });
      },
   },
   getters:{
      GET_MESSAGES : state => state.messages
   },
}