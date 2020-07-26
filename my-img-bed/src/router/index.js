import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/index/Main'
import Global from '../components/user/Global'
import Album from '../components/user/Album'
import Detail from '../components/user/Detail'
import ElementUI from 'element-ui'
import VueClipboard from 'vue-clipboard2'
// import Clipboard from 'clipboard'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(Router)
Vue.use(VueClipboard)

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
    }
  ]
})
