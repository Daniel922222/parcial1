import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import com from '../views/com.vue'
import pr from '../views/pr.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/com',
    name: 'com',
    component:com
 
  },
  {
    path: '/Productos',
    name: 'Productos',
    component:pr
    
  },
  {
    path: '/tienda',
    name: 'About',

 

    
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
