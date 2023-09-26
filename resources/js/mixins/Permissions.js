import { useAuthStore } from "@/store/Authentication";

export default {
    data() {
        return {
            user_permissions: [],
            allow: false
        }
    },

    methods: {
        $can(currentUser) {
            const currentPermission = (typeof this.currentPermission == "object" ? this.currentPermission : JSON.parse(this.currentPermission));
            const currentRole = (typeof this.currentRole == "object" ? this.currentRole : JSON.parse(this.currentRole));
            const permissions = currentPermission.some(r => currentUser.includes(r))

            if (currentRole.includes('Super Administrator')) {
                return true;
            } else {
                return permissions
            }


        },
    },
    computed: {
        currentPermission() {
            return useAuthStore().permissions || []
        },
        currentRole() {
            return useAuthStore().roles || []
        }
    },
};




