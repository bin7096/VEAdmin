import Vue from 'vue';
import Router from 'vue-router';
import notFound from '@/views/404';
import main from '@/App';
import index from '@/views/index';
import login from '@/views/login';
import stylePicker from '@/views/stylePicker';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: main,
      redirect: { name: 'index' },
      children: [
        {
          path: 'index',
          name: 'index',
          component: index,
          meta: { requireAuth: true }
        },
        {
          path: 'login',
          name: 'login',
          component: login,
          meta: { requireAuth: true }
        },
        {
          path: 'stylePicker',
          name: 'stylePicker',
          component: stylePicker,
          meta: { requireAuth: true }
        }
      ]
    },
    {
      path: '*',
      name: '404 not found!',
      component: notFound
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth && to.fullPath !== '/login') {
    const time = new Date().valueOf();
    let loginInfo = localStorage.getItem('login_info');
    loginInfo = loginInfo === null ? null : JSON.parse(loginInfo);
    if (loginInfo === null || !loginInfo.token || loginInfo.expireTime < time) {
      next({ path: 'login' });
    } else {
      const store = router.app.$options.store;
      store.commit('auth/setAuthToken', loginInfo.token);
      store.commit('auth/setExpireTime', loginInfo.expireTime);
      next();
    }
  } else {
    next();
  }
});

export default router;
