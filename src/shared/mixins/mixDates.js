export const MixFormatDate = {
   filters: {
      formatDate(date){
         if( !date ) return
         return date.split('-').reverse().join('/')
      },
      formatDateTime(date){
         if( !date ) return;
         let fecha = date.split('T')[0]
         return this.orderDate(fecha)
      },
      formatDateTimeHora(date){
         if( !date ) return;
         let [fecha, hora] = date.split('T')
         fecha = fecha.split('-').reverse().join('/')
         hora  = hora.split('.')[0]
         return `${fecha}, ${hora}`
      },
      formatFechaSlash(date) {
         if( !date ) return;
         return date.split("-").reverse().join("/");
      },
   },
   methods: {
      orderDate(date){
         return date.split('-').reverse().join('/')
      }
   }
}