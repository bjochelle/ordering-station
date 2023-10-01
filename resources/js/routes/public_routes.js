export default [
    /*public no -auth required*/
    {
        path: '/',
        component: () => import('@/layout/views/public/IndexHome.vue'),
        name: 'HomeIndex',
        redirect: {name: 'Home'},
        meta: {
            title: 'Homes',
            requiresAuth: false, //false for testing purposes
        },
        children: [
            {
                path: '',
                component: () => import('@/layout/views/public/Home.vue'),
                name: 'Home',
                meta: {
                    title: 'Home',
                    requiresAuth: false, //false for testing purposes
                },
            },
    
            // {
            //     path: 'products/:id',
            //     component: () => import('@/layout/views/public/ProductDetails.vue'),
            //     name: 'ApplyJob',
            //     meta: {
            //         title: 'Apply Job',

            //         requiresAuth: false, //false for testing purposes
            //     },
            // },
         
        ]
    },
  

    /*end*/
]
