// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import moment from 'moment'
import ElementUI, { Button, Drawer, DatePicker, TimePicker, Upload, Icon, Tooltip, InfiniteScroll, Dropdown, Progress } from 'element-ui'
import ViewUI, { Message } from 'view-design'
// import 'view-design/dist/styles/iview.css';
import 'moment/locale/zh-cn'
import 'view-design/dist/styles/iview.css'

import store from './store/index' // 引入store
import { List, PullRefresh } from 'vant'
import 'vant/lib/index.css'
import './progressCss/index.css'
// import { setCookie, getCookie, delCookie } from './common/cookies'
import VueClipboard from 'vue-clipboard2'
import VideoPlayer from 'vue-video-player'
import 'element-ui/lib/theme-chalk/index.css'
import JsonExcel from 'vue-json-excel'
import xlsx from 'xlsx'
import {EventBus} from '../event-bus'
import VueI18n from 'vue-i18n'
import zh from './common/lang/zh'
import en from './common/lang/en'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import VDistpicker from 'v-distpicker'
import 'lib-flexible/flexible.js'
// import NProgress from 'nprogress'
// import 'nprogress/nprogress.css'
Vue.use(VueI18n)
Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})
Vue.config.productionTip = false
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.component('downloadExcel', JsonExcel)
Vue.use(ElementUI)
Vue.use(ViewUI)
Vue.use(VideoPlayer)
Vue.use(VueClipboard)
Vue.use(Button)
Vue.use(Drawer)
Vue.use(DatePicker)
Vue.use(TimePicker)
Vue.use(Tooltip)
Vue.use(Upload)
Vue.use(Icon)
Vue.use(List)
Vue.use(PullRefresh)
Vue.use(Dropdown)
Vue.use(InfiniteScroll)
Vue.use(Progress)
Vue.prototype.$message = Message
Vue.prototype.$axios = axios
Vue.prototype.$store = store
Vue.prototype.$moment = moment
// Vue.prototype.$cookieStore = { setCookie, getCookie, delCookie }
ElementUI.Dialog.props.closeOnClickModal.default = false
// axios.defaults.baseURL = '/api'
Vue.component('v-distpicker', VDistpicker)
// 语言切换
let lang = window.sessionStorage.getItem('lang') || 'zh-CN'
// eslint-disable-next-line no-unused-vars
const i18n = new VueI18n({
  locale: lang, // 语言标识
  fallbackLocale: 'zh-CN', // 没有英文的时候默认中文语言
  silentFallbackWarn: true, // 抑制警告
  // this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    'zh-CN': { ...zh, ...zhLocale }, // 中文语言包
    'en-US': { ...en, ...enLocale } // 英文语言包
  }
})
/* 响应拦截器 */
// axios.interceptors.request.use(config => {
//   // 发起请求则展示进度条
//   NProgress.start()
//   // 必须要返回config
//   return config;
// })
axios.interceptors.response.use(function (response) {
  // if (response.status === 401 || response.status === 500) {
  //   localStorage.clear() // 删除已经失效或过期的token（不删除也可以，因为登录后覆盖）
  //   router.replace({
  //     path: '/' // 到登录页重新获取token
  //   })
  //   localStorage.setItem('signs', true)
  //   // EventBus.$emit('showOrnot', { xuanzhuan: 2, islogin: true })
  // } else
  if (response.bearer) { // 判断token是否存在，如果存在说明需要更新token
    localStorage.setItem('token', response.bearer) // 覆盖原来的token(默认一天刷新一次)
  }
  // NProgress.done()
  return response
}, function (error) {
  if (error.response.status === 401 || error.response.status === 500) {
    // Message.error({
    //   content: '登录已失效，请重新登录',
    //   background: true,
    //   duration: 3
    // })
    localStorage.clear() // 删除已经失效或过期的token（不删除也可以，因为登录后覆盖）
    router.replace({
      path: '/' // 到登录页重新获取token
    })
    location.reload()
    // localStorage.setItem('signs', true)
    // EventBus.$emit('showOrnot', { xuanzhuan: 2, islogin: true })
  }
  return Promise.reject(error)
})
// 路由发生变化修改页面 title
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    // document.title = this.$i18n.$t('to.meta.title')
  }
  next()
})
if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile |BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
  // localStorage.setItem("showTypeDeviec", "mobile");
  (function () {
    var whdef = 100 / 750 // 表示750的设计图,使用100PX的默认值,使用100px只是为了方便计算 其他值都可以
    var wW = window.innerWidth // 当前窗口的宽度
    var rem = wW * whdef // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
    document.getElementsByTagName('html')[0].style.fontSize = rem + 'px'
  })()
  window.onresize = function () {
    (function () {
      var whdef = 100 / 750 // 表示750的设计图,使用100PX的默认值,使用100px只是为了方便计算 其他值都可以
      var wW = window.innerWidth // 当前窗口的宽度
      var rem = wW * whdef // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
      document.getElementsByTagName('html')[0].style.fontSize = rem + 'px'
    })()
  }
} else {
  (function () {
    var whdef = 100 / 1920 // 表示1920的设计图,使用100PX的默认值,使用100px只是为了方便计算 其他值都可以
    var wW = window.innerWidth // 当前窗口的宽度
    var rem = wW * whdef // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
    document.getElementsByTagName('html')[0].style.fontSize = rem + 'px'
  })()
  window.onresize = function () {
    (function () {
      var whdef = 100 / 1920 // 表示1920的设计图,使用100PX的默认值,使用100px只是为了方便计算 其他值都可以
      var wW = window.innerWidth // 当前窗口的宽度
      var rem = wW * whdef // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
      document.getElementsByTagName('html')[0].style.fontSize = rem + 'px'
    })()
  }
}

new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
