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
                path: 'product-details/:name',
                component: () => import('@/layout/views/public/ProductDetails.vue'),
                name: 'ProductDetails',
                meta: {
                    title: 'Product Details',
                    requiresAuth: false, 
                },
            },
         
        ]
    },
  

    /*end*/
]
