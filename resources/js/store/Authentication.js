import {defineStore} from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        loggedIn: !!localStorage.getItem("token"),
        roles: localStorage.getItem("roles") || [],
        permissions: localStorage.getItem("permissions") || [],
        user: {},
    }),

    getters: {},

    actions: {
        async login(credentials) {
            await axios.get("/sanctum/csrf-cookie");

            const response = (await axios.post("/login", credentials)).data;

            if (response) {
                localStorage.setItem("token", true);
                await this.fetchUser();
                await this.fetchAbilities();
            }
        },

        async logout() {

            const response = (await axios.post("logout"));
            if (response) {
                localStorage.removeItem("token");

                this.$reset();
            }
        },

        async fetchUser() {
            this.user = (await axios.get("api/user")).data;

            this.loggedIn = true;
        },

        async fetchAbilities() {
            const abilities = (await axios.get("api/abilities")).data;

            if (abilities) {
                localStorage.setItem('permissions', JSON.stringify(Object.assign(abilities.permissions), []))
                localStorage.setItem('roles', JSON.stringify(Object.assign(abilities.roles), []))
                this.roles = abilities.roles
                this.permissions = abilities.permissions

            }

        }
    },
});
