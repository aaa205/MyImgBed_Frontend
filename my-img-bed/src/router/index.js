import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/index/Main'
import Global from '../components/user/Global'
import Album from '../components/user/Album'
import Detail from '../components/user/Detail'
import Gallery from '../components/user/Gallery'
import Setting from '../components/user/Setting'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      meta: {
        isIndex: true
      }
    },
    {
      path: '/user',
      redirect: '/user/global'
    },
    {
      path: '/user/global',
      name: 'Global',
      component: Global,
      meta: {
        isIndex: false
      }
    },
    {
      path: '/user/album',
      name: 'Album',
      component: Album,
      meta: {
        isIndex: false
      }
    },
    {
      path: '/user/detail',
      name: 'Detail',
      component: Detail,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/user/gallery',
      name: 'Gallery',
      component: Gallery,
      meta: {
        isIndex: false
      }
    },
    {
      path: '/user/setting',
      name: 'Setting',
      component: Setting,
      meta: {
        isIndex: false
      }
    }
  ]
})
