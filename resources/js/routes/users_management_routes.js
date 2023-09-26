function removeQueryParams(to) {
    if (Object.keys(to.query).length)
        return {path: to.path, query: {}, hash: to.hash}
}

function removeHash(to) {
    if (to.hash) return {path: to.path, query: to.query, hash: ''}
}


export default [
    {
        path: 'users-management',
        component: () => import('@/layout/views/users_management/IndexUserManagement.vue'),
        name: 'IndexUserManagement',
        redirect: {name: 'IndexUser'},
        meta: {
            breadcrumb: 'Users Management',
            permissions: ['user_management_panel'],
        },
        children: [
            {
                path: "users",
                component: () => import('@/layout/views/users_management/users/IndexUser.vue'),
                name: "IndexUser",
                meta: {
                    title: 'Users',
                    requiresAuth: true,
                    breadcrumb: 'Users',
                    permissions: ['user_management_users'],
                },
            },
            {
                path: "roles",
                component: () => import('@/layout/views/users_management/roles/IndexRole.vue'),
                name: "IndexRole",
                meta: {
                    title: 'Roles',
                    requiresAuth: true,
                    breadcrumb: 'Roles',
                    permissions: ['user_management_roles'],
                },
            },
            {
                path: "permissions",
                component: () => import('@/layout/views/users_management/permissions/IndexPermission.vue'),
                name: "IndexPermission",
                meta: {
                    title: 'Permission',
                    requiresAuth: true,
                    breadcrumb: 'Permissions',
                    permissions: ['user_management_permissions'],
                },
            }
        ]
    },
]
