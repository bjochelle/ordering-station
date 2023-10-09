export default [
    /*public no -auth required*/
    {
        path: '/',
        component: () => import('@/layout/views/public/IndexHome.vue'),
        name: 'HomeIndex',
        redirect: {name: 'Home'},
        meta: {
            title: 'Homes',
            requiresAuth: false,
        },
        children: [
            {
                path: '',
                component: () => import('@/layout/views/public/Home.vue'),
                name: 'Home',
                meta: {
                    title: 'Home',
                    requiresAuth: false,
                },
            },
            {
                path: 'product-details/:id/:name',
                component: () => import('@/layout/views/public/ProductDetails.vue'),
                name: 'ProductDetails',
                meta: {
                    title: 'Product Details',
                    requiresAuth: false,
                    breadcrumb(route, app) {
                        return `${route.params.name}`
                    },
                },
            },
            {
                path: 'cart',
                component: () => import('@/layout/views/public/Cart.vue'),
                name: 'Cart',
                meta: {
                    title: 'Cart',
                    requiresAuth: false,
                },
            },
            {
                path: 'checkout',
                component: () => import('@/layout/views/public/Checkout.vue'),
                name: 'Checkout',
                meta: {
                    title: 'Checkout',
                    requiresAuth: false,
                },
            },


        ]
    },


    /*end*/
]
