import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import AppInfo from '../views/AppInfo.vue';
import ProfileManagement from '../views/ProfileManagement.vue';


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/AppInfo',
        name: 'AppInfo',
        component: AppInfo
    },
    {
        path: '/ProfileManagement',
        name: 'ProfileManagement',
        component: ProfileManagement
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
/*  router.beforeEach((to, from, next) => {
      if(to.meta.requiresLogin && !Session.user){
          next('/login');
      }else{
          next();
      }
    } )*/
  
  export default router