<template>
   <div class="flex-center-all">
      <div class="box">
         <h2>.: Calculadora :.</h2>
         <div class="flex innp">
            <div class="mr">
               <span>i: </span>
               <input type="number" v-model.number="i" step=".5"> 
            </div>
            <div>
               <span>n: </span>
               <input type="number" v-model.number="n">
            </div>
         </div>
         {{porcent.toFixed(4)}}%
         <div class="grid-6-6 mt">
            <div class="item-res-type">
               <span>Tasa interes efectiva <i>i</i>: </span>
               <b>{{tasaInteres}} = {{(tasaInteres*100).toFixed(2)}}%</b>
            </div>
         </div>
         <div class="grid-6-6 mt">
            <div class="item-res-type">
               <span>[F/P,i,n]: </span>
               <b>{{fp}}</b>
            </div>
            <div class="item-res-type">
               <span>[P/F,i,n]: </span>
               <b>{{pf}}</b>
            </div>
            <div class="item-res-type">
               <span>[P/A,i,n]: </span>
               <b>{{pa}}</b>
            </div>
            <div class="item-res-type">
               <span>[A/P,i,n]: </span>
               <b>{{ap}}</b>
            </div>
            <div class="item-res-type">
               <span>[A/F,i,n]: </span>
               <b>{{af}}</b>
            </div>
            <div class="item-res-type">
               <span>[F/A,i,n]: </span>
               <b>{{fa}}</b>
            </div>
            <div class="item-res-type">
               <span>[P/G,i,n]: </span>
               <b>{{pg}}</b>
            </div> 
         </div> 
         
      </div>
   </div>
</template>

<script>

export default {
   name:'login',
   data(){
      return{
         i:0,
         n:0,
      }
   },
   computed:{
      porcent(){
         return this.i / 100;
      },
      tasaInteres(){
         const a = 1 + (this.porcent / this.n)
         const resp = this.elevadoA(a, this.n) - 1
         return this.redondeo(resp)
      },
      fp(){
         const resp = this.elevadoA( (1 + this.porcent), this.n)
         return this.redondeo(resp)
      },
      pf(){
         const resp = 1 / this.elevadoA( (1 + this.porcent), this.n)
         return this.redondeo(resp)
      },
      pa(){
         let a = this.elevadoA( (1 + this.porcent), this.n) -1
         let b = this.porcent * (this.elevadoA( (1 + this.porcent), this.n))
         const resp = a / b
         return this.redondeo(resp)
      },
      ap(){
         let a = this.elevadoA( (1 + this.porcent), this.n) -1
         let b = this.porcent * (this.elevadoA( (1 + this.porcent), this.n))
         const resp = b / a
         return this.redondeo(resp)
      },
      af(){
         let b = this.porcent * (this.elevadoA( (1 + this.porcent), this.n))
         const resp = this.porcent/b
         return this.redondeo(resp)
      },
      fa(){
         let b = this.porcent * (this.elevadoA( (1 + this.porcent), this.n))
         const resp = b/this.porcent
         return this.redondeo(resp)
      },
      pg(){
         const resp = this.pa - (this.n/( this.fp ))
         return this.redondeo(resp)
      },
      pg2(){
         let a = this.fp - this.porcent*this.n - 1
         const resp = a / this.elevadoA(this.porcent, 2) * this.fp
         return this.redondeo(resp)
      }
   },
   methods: {
      elevadoA(base, exponente){
         return Math.pow(base, exponente)
      },
      redondeo(val){
         return val.toFixed(4)
      }
   }
}
</script>
<style>
.item-res-type{
   padding: 1rem;
   margin: .4rem;
   border-radius: 6px;
   border: solid 1px #ccc;
}
.item-res-type b{
   font-size: 1.5rem;
}
.innp{
   font-size: 1.2rem;
}
.innp input{
   font-size: 2rem;
}
</style>