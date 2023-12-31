
import users_management_routes from "@/routes/users_management_routes";
import public_management_routes from "@/routes/public_routes";


const routes = [
    ...public_management_routes,
    {
        path: '/log-in',
        component: () => import('@/layout/authentication/Login.vue'),
        name: 'Login',
        meta: {
            title: 'Login',
            requiresAuth: false, //false for testing purposes
        },
    },
    {
        path: '/main', //auth
        redirect: {name: 'Home'},
        component: () => import('@/layout/Main.vue'),
        children: [
            {
                path: '',
                component: () => import('@/layout/Welcome.vue'),
                name: 'Welcome',
                meta: {
                    title: 'Welcome',
                    requiresAuth: true, //false for testing purposes
                },
            },
            ...users_management_routes,
            
        ]
    },
    {
        path: "/:pathMatch(.*)",
        name: 'error_404',
        component: () => import('@/layout/errors/Error404.vue'),
        meta: {
            title: 'Error 404',
            requiresAuth: false, //false for testing purposes
        },
    },

]

export default routes
