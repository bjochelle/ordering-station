import { useAuthStore } from "@/store/Authentication";
export default {
    data() {
        return {
            user_roles: [],
            allow: false
        }
    },
    methods: {
        $is(currentUser) {
            const currentRole = (typeof this.currentRole === "object" ? this.currentRole : JSON.parse(this.currentRole));
            const role = currentRole.some(r => currentUser.includes(r))

            if (currentRole.includes('Super Administrator')) {
                return true;
            }else{
                return role
            }


        },
    },
    computed: {
        currentRole() {
            return useAuthStore().roles || []
        }
    },

};

