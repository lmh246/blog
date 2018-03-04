// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import iView from 'iview'
import VueRouter from 'vue-router'
import 'iview/dist/styles/iview.css'
/*引入route页面 */
import Home from './components/Home.vue'
import About from './components/About.vue'
import Classify from './components/Classify.vue'
import Tags from './components/Tags.vue'
import Search from './components/Search.vue'

import ArticleOne from './components/ArticleOne.vue'
/*引入axios和封装的vue-axios */
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(iView);
Vue.use(VueRouter);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false

/*实例化router */

const router =  new VueRouter({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/classify',
      name: 'Classify',
      component: Classify
    },
    {
      path: '/tags',
      name: 'Tags',
      component: Tags
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/articleOne',
      name: 'ArticleOne',
      component: ArticleOne
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
