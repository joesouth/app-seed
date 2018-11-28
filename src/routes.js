import Home from './views/Home.vue'
import Login from './views/Login.vue'
import About from './views/About.vue'
import Admin from './views/Admin.vue'


export default [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
  ,
  {
    path: '/admin',
    name: 'admin',
    component: Admin
  }
]
