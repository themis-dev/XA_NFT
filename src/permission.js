import router from './router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style

import { ACCESS_TOKEN } from '@/store/mutation-types'

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const whiteList = ['home', 'login', 'register', 'registerCode', 'setPassword', 'market', 'marketDetail'] // no redirect whitelist
const loginRoutePath = '/user/login'
const defaultRoutePath = '/'

router.beforeEach((to, from, next) => {
  NProgress.start() // start progress bar
  if(whiteList.includes(to.name)) {
    next()
  } else {
    if(window.sessionStorage.getItem(ACCESS_TOKEN)) {
      if(to.path === loginRoutePath) {
        next({ path: defaultRoutePath })
        NProgress.done()
      } else {
        next()
      }
    } else {
      if (whiteList.includes(to.name)) {
        next()
      } else {
        next({ path: loginRoutePath, query: { redirect: to.fullPath } })
        NProgress.done() 
      }
    }
  }
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})
