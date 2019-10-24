import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router)



const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    {
      path: "/",
      name: "home",
      component: Home,
      children:[
        {
          path: "",
          name: "Homepage",
          component: () =>
              import("../views/homepage/Homepage.vue")
        },
        {
          path: "/about",
          name: "about",
          component: () =>
              import("../views/About.vue")
        },
      ]
    },


  ]
})

export default router
