
export const MixParsePrecios = {
   filters:{
      parsePrecio(val) {
         if(!val) return '0.0';
         return val.toFixed(2);
      },
   }
}