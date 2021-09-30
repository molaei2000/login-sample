import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import( /* webpackChunkName: "auth" */ '../layouts/Auth.vue'),
    children: [{
      path: 'login',
      name: 'Login',
      component: () => import( /* webpackChunkName: "login" */ '../views/Login.vue')
    }]
  }

]

const router = new VueRouter({
  mode: 'hash',
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router