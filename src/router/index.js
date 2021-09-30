import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import {EventBus} from '../../event-bus'
const home = r => require.ensure([], () => r(require('@/pages/home.vue'), 'home'))
const apiWord = r => require.ensure([], () => r(require('@/pages/apiWord.vue'), 'apiWord'))
const login = r => require.ensure([], () => r(require('@/pages/login.vue'), 'login'))
Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}
NProgress.configure({
  showSpinner: false
})
let router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../pages/index.vue'),
      meta: {
        index: 0,
        title: '冰塔数科-Filecoin Plus大中华区公证人'
      }
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      meta: {
        title: 'ByteBase隐私存储平台-文件'
      }
    },
    {
      path: '/apiWord',
      name: 'apiWord',
      component: apiWord,
      meta: {
        title: 'ByteBase隐私存储平台-API'
      }
    },
    {
      path: '/news',
      name: 'news',
      component: () => import(/* webpackChunkName: "about" */ '../components/news.vue'),
      meta: {
        index: 4,
        title: '冰塔数科-Filecoin Plus大中华区公证人'
      }
    },
    {
      path: '/new1',
      name: 'new1',
      component: () => import(/* webpackChunkName: "about" */ '../components/new1.vue'),
      meta: {

        title: '冰塔数科-Filecoin Plus大中华区公证人'
      }
    },
    {
      path: '/new2',
      name: 'new2',
      component: () => import(/* webpackChunkName: "about" */ '../components/new2.vue'),
      meta: {

        title: '冰塔数科-Filecoin Plus大中华区公证人'
      }
    },
    {
      path: '/new3',
      name: 'new3',
      meta: {
        index: 4,
        title: '冰塔数科-Filecoin Plus大中华区公证人'
      },
      component: () => import(/* webpackChunkName: "about" */ '../components/new3.vue')
    },
    {
      path: '/preview',
      name: 'preview',
      meta: {
        title: '冰塔数科-Filecoin Plus大中华区公证人'
      },
      component: () => import(/* webpackChunkName: "about" */ '../pages/preview')
    },
    {
      path: '/searchDatacap',
      name: 'searchDatacap',
      meta: {
        title: '冰塔数科-Filecoin Plus大中华区公证人'
      },
      component: () => import(/* webpackChunkName: "about" */ '../pages/searchDatacap.vue')
    },
    {
      path: '/helpPage',
      name: 'helpPage',
      meta: {
        title: '冰塔数科-Filecoin Plus大中华区公证人'
      },
      component: () => import(/* webpackChunkName: "about" */ '../pages/helpPage.vue')
    },
    {
      path: '/searchEngine',
      name: 'searchEngine',
      meta: {
        title: '冰塔IPFS导航神器'
      },
      component: () => import('../components/searchEngine.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import(/* webpackChunkName: "about" */ '../pages/dashboard.vue'),
      meta: {
        title: '冰塔数科-Filecoin Plus大中华区公证人'
      }
    },
    {
      path: '/author',
      name: 'author',
      meta: {
        title: '冰塔数科-授权页面'
      },
      component: () => import(/* webpackChunkName: "about" */ '../components/author')
    },
    {
      path: '*',
      name: 'Err404',
      meta: {

        title: '404'
      },
      component: () => import(/* webpackChunkName: "about" */ '../funcomponents/Err404.vue')

    }
  ]
})
router.beforeEach((to, from, next) => {
  let lang = sessionStorage.getItem('lang')
  console.log('当前lang:', lang)
  if (from.path === '/dashboard') {
    EventBus.$emit('headhidden', true)
    if (lang === 'en-US' && lang != null) {
      window.document.title = 'ByteBase - Filecoin Plus Greater China Notary'
    } else {
      window.document.title = to.meta.title
    }
  }
  if (to.name === 'index' || to.name === 'news' || to.name === 'new1' || to.name === 'searchDatacap' || to.name === 'helpPage') {
    if (lang === 'en-US' && lang != null) {
      window.document.title = 'ByteBase - Filecoin Plus Greater China Notary'
    } else {
      window.document.title = to.meta.title
    }
  }
  if (to.name === 'author') {
    if (lang === 'en-US' && lang != null) {
      window.document.title = 'ByteBase - Authorization Page'
    } else {
      window.document.title = to.meta.title
    }
  }
  if (to.name === 'apiWord') {
    if (lang === 'en-US' && lang != null) {
      window.document.title = 'ByteBase Privacy Storage Platform-API'
    } else {
      window.document.title = to.meta.title
    }
  }
  if (to.name === 'home') {
    if (lang === 'en-US' && lang != null) {
      window.document.title = 'ByteBase Privacy Storage Platform - Files'
    } else {
      window.document.title = to.meta.title
    }
  }
  if (localStorage.getItem('token') || to.name === 'index' || to.name === 'news' || to.name === 'new1' || to.name === 'author' || to.name === 'dashboard' || to.name === 'searchDatacap' || to.name === 'helpPage' || to.name === 'searchEngine') {
    // window.document.title = to.meta.title
    NProgress.start()
    next()
  } else {
    next({
      path: '/'
    })
  }
  console.log(from, 'formmmmmmmmm')
  console.log(to, 'tooooooooooo')
})
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})
router.afterEach(() => {
  NProgress.done()
})
export default router
