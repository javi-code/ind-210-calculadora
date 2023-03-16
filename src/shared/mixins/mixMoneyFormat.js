export const MixMoneyFormat = {
   filters: {
      formatMoney(mount){
         if(!mount) return '0.0'
         const mountMoney = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
         }).format(mount);
         return mountMoney.replace('$', '');
      }
   }
}