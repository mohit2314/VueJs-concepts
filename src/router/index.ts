import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/input',
    name:'Input',
    component:()=>import ('../views/InputDemo.vue'),
  },
  {
    path: '/isv2',
    name:'Isv',
    component:()=>import ('../views/Isv2.vue'),
  },
  {
    path: '/vmodel',
    name:'Vmodel',
    component:()=>import ('../views/VmodelDemo.vue'),
  },
  {
    path: '/timer',
    name:'Timer',
    component:()=>import ('../components/Timer.vue'),
  },
  {
    path: '/cropper',
    name:'Cropper',
    component:()=>import ('../views/Cropper.case.vue'),
  },
  {
    path: '/composition',
    name:'Composition',
    component:()=>import ('../views/CompositionApi.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
