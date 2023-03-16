import Vue from 'vue'
import VueRouter from 'vue-router' 
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
   {
      path: '*',
      redirect: '/'
   },
   {
      path: '/',
      name: 'inicio',
      component: Index,
   },
]

const router = new VueRouter({
   mode: 'history',
   base: process.env.BASE_URL,
   scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      }
      return { x: 0, y: 0 }
   },
   routes
});

export default router;