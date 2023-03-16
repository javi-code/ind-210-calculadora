<template>
   <div class="pagination mt flex-center-all not-print">
      <li title="Inicio">
         <router-link :to="{ query: { p: 1 } }" class="item-pag">
            <i class="icon-arrow-left"></i>
         </router-link>
      </li>
      <li v-if="currentPage - 3 > 1">...</li>
      <template v-for="(num, index) in totalPages">
         <li :key="index" v-if="num > currentPage - 3 && num < currentPage + 4">
            <router-link
               :to="{ query: { p: num } }"
               :class="{ 'actual-pag': num == currentPage }"
               class="item-pag">
               {{ num }}
            </router-link>
         </li>
      </template>
      <li v-if="currentPage + 3 < totalPages">...</li>
      <li title="Último">
         <router-link :to="{ query: { p: totalPages } }" class="item-pag">
            <i class="icon-arrow-right"></i>
         </router-link>
      </li>
   </div>
</template>

<script>
export default {
   name: "Pagination",
   computed: {
      currentPage() {
         let pagina = this.$route.query.p;
         return parseInt(pagina) ? parseInt(pagina) : 1;
      },
   },
   props: {
      totalPages: {
         required: true,
      },
   },
};
</script>