
import Vue from 'vue'
import Router from 'vue-router'

import authService from '../services/AuthService'



function requireAuth (to, from, next) {
  if (!authService.loggedIn()) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}


Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes(),
})

function configRoutes () {
    return [
      {
          path: '/', redirect: '/home'
      },
      {
          path: '/home',
          component: ()=> import("../views/home/Index"),
          beforeEnter: requireAuth,
          children: [
            {
                path: '/modulo3',
                name: 'Modulo3',
                component: ()=> import("../views/modulo3/Index"),
            },
            {
                path: '/modulo1',
                name: 'Modulo1',
                component: ()=> import("../views/modulo1/Index"),
            },
            {
              path: '/modulo2',
              name: 'Modulo2',
              component: ()=> import("../views/modulo2/Index"),
          },
        ],
      },
      {
          path: '/login',
          component: ()=> import("../views/login/Index")
      },
      { path: '/logout',
        beforeEnter (to, from, next) {
          authService.logout()
          next('/login')
        }
      }
    ]
}
