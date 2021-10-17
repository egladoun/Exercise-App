import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import AppInfo from '../views/AppInfo.vue';
import Profile from '../views/Profile.vue';
import ExerciseLog from '../views/ExerciseLog.vue';
import Schedule from '../views/Schedule.vue';
import Sharing from '../views/Sharing.vue';
import Login from '../views/Login.vue';


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
        path: '/Profile',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/ExerciseLog',
        name: 'ExerciseLog',
        component: ExerciseLog
    },
    {
        path: '/Schedule',
        name: 'Schedule',
        component: Schedule
    },
    {
        path: '/Sharing',
        name: 'Sharing',
        component: Sharing
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login
    }
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