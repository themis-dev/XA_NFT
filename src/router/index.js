import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'
import MainLayout from '../views/layout/MainLayout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  { path: '/', redirect: '/home', hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/home/index',
    name: 'Home',
    children: [{
      name: 'home',
      path: 'home',
      component: () => import('@/views/home/index')
    }
    ]
  }
]

// 正式网路由
const mainnetRouters = [
  {
    path: '/error',
    component: () => import('@/views/500')
  },
  { path: '*', component: () => import('@/views/404'), hidden: true }
]
const routerList = constantRouterMap.concat(mainnetRouters);

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: routerList
})
