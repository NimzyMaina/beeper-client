import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from './components/auth/Auth'
import Login from './components/auth/Login'
import Register from './components/auth/Register'

Vue.use(VueRouter);

var router = new VueRouter({
    routes: [
        {
            path: '/auth',
            component: Auth,
            redirect: '/auth/login',
            children: [
                {
                    path: 'login',
                    component: Login,
                    name: 'login'
                },
                {
                    path: 'register',
                    component: Register,
                    name: 'register'
                }
            ]
        }
    ]
});

export default router;