import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

import Login from './views/Login'
import Main from './views/Main'
import MainOne from './views/MainOne'
import MainTwo from './views/MainTwo'
import Home from './views/Home'
import NotFound from './views/NotFound'

Vue.config.productionTip = false

// 뷰 어플리케이션에 라우터 플러그인을 추가한다.
Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/main',
      // Main 화면에 router-view가 하나 더 있습니다.
      component: Main,
      // 중첩된 라우트는 children 속성으로 하위 라우트를 정의할 수 있다.
      children: [
        { path: "one", component: MainOne },
        { path: "two", component: MainTwo },
      ],
    },
    {
      path: '*',
      component: NotFound,
    },
  ],
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
