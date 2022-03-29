import Vue from 'vue'
import '@/styles/index.scss' // global css
import ElementUI from 'element-ui';
import '@/permission' // permission control
import 'element-ui/lib/theme-chalk/index.css';
import VueI18n from 'vue-i18n';
import VueCookies from 'vue-cookies'
import App from './App'
import router from './router'
import store from './store'
import moment from 'moment'

import VueLazyload from 'vue-lazyload'

import '@/styles/font.css'

Vue.use(ElementUI);
Vue.use(VueI18n);
Vue.use(VueCookies);
Vue.use(VueLazyload, {
  loading: ''
})

// this.$cookies.config('30d')

const language = navigator.language || navigator.userLanguage;
const lang = VueCookies.get('CultureInfo') || language;

const i18n = new VueI18n({
  locale: lang !== 'zh-CN' ? 'en' : 'zh-CN', // 将要切换的语言
  messages: {
    'zh-CN': require('./assets/languages/zh.json'), // 本地资源文件，中文&英文
    'en': require('./assets/languages/en.json')
  }
});

Vue.config.productionTip = false;

Vue.filter('timeFormat', function(timestamp) {
  return moment.parseZone(timestamp).local().format('YYYY-MM-DD HH:mm:ss')
})

Vue.filter('timeFormatUTC', function(timestamp) {
  return moment(timestamp).utc().format('YYYY-MM-DD HH:mm:ss ') + ' UTC'
})

const app = process.env.NETWORK === 'mainnet' ? 36 : 37;
const source = document.documentElement.clientWidth > 768 ? 1 : 4;
const curr_env = process.env.NODE_ENV === 'production' ? 'prd' : 'test-6';
window.woodpecker = window.woodpecker || {
  app,
  source,
  env: curr_env,
  modules: {
    vhash: {
      type: 'woodpecker'
    }
  }
};
(function() {
  var bw = document.createElement('script');
  bw.src = 'https://open.woodpeckerlog.com/static/woodpecker.js';
  bw.async = true;
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(bw, s);
})();

new Vue({
  el: '#app',
  data() {
    return {
      avatarUrl: 'http://192.168.3.233:8999/'
      // avatarUrl: 'http://35.201.215.236:8999/'
    }
  },
  router,
  i18n,
  store,
  render: h => h(App)
})
