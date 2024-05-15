import Vue from 'vue';
import Router from 'vue-router';
import CampusBinhai from '@/components/CampusBinhai';
import CampusChashan from '@/components/CampusChashan';
import CampusYueqing from '@/components/CampusYueqing';
import Login from '@/components/Login';
import StudentSystem from '@/components/StudentSystem';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CampusBinhai',
      component: CampusBinhai
    },
    {
      path: '/chashan',
      name: 'CampusChashan',
      component: CampusChashan
    },
    {
      path: '/yueqing',
      name: 'CampusYueqing',
      component: CampusYueqing
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/student-system',
      name: 'StudentSystem',
      component: StudentSystem,
      beforeEnter: (to, from, next) => {
        // 简单的路由守卫，检查用户是否登录
        if (localStorage.getItem('isLoggedIn') !== 'true') {
          next('/login');
        } else {
          next();
        }
      }
    }
  ]
});
