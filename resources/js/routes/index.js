import {createWebHistory, createRouter} from "vue-router";
import routes from "@/routes/routes";
import {useAuthStore} from "@/store/Authentication";
import {pageTitle} from "@/store/PageTitle";

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "active",
    linkExactActiveClass: "active",
});


router.beforeEach(async (to, from, next) => {
   
    pageTitle().pageName = to.meta.title;
    const titleFromParams = to.params.name;
    const title = (titleFromParams)?titleFromParams:to.meta.title;
    document.title = title + ' | ' + import.meta.env.VITE_APP_NAME;

    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (!useAuthStore().loggedIn) {
            next({
                path: '/log-in',
                query: {redirect: to.fullPath}
            })

        } else {

            const permissions = (typeof useAuthStore().permissions == "object" ? useAuthStore().permissions : JSON.parse(useAuthStore().permissions)) || [];
            const roles = (typeof useAuthStore().roles == "object" ? useAuthStore().roles : JSON.parse(useAuthStore().roles)) || [];
            const authStore = await useAuthStore()
            await authStore.fetchUser();
            await authStore.fetchAbilities();

            if (roles.includes('Super Administrator')) {
                //super_administrator
                return next();

            } else if (!to.meta.roles) {
                //if no role present

                if (!to.meta.permissions) {
                    return next();
                } else {
                    if (permissions.some(r => to.meta.permissions.includes(r))) {
                        next();
                    } else {
                        next('/404');
                    }
                }

            } else {

                if (roles.some(r => to.meta.roles.includes(r))) {
                    next();
                } else {
                    next('/404');
                }
            }
        }
    } else {

        if (to.path === '/log-in' && useAuthStore().loggedIn)
            next({name: 'Welcome',});
        else next()

    }
});


export default router;
