import {useAuthStore} from "@/store/Authentication";

export default {
    install: async ({config}) => {
        config.globalProperties.$auth = useAuthStore();

        if (await config.globalProperties.$auth.loggedIn) {
            await config.globalProperties.$auth.fetchUser();
            await config.globalProperties.$auth.fetchAbilities();
        }
    },
};
