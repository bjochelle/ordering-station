import {defineStore} from "pinia";
import axios from "axios";

export const useUserStore = defineStore("user", {
    state: () => ({
        user: {
            name: null,
            username: null,
            email: null,
            password: 'password',
            password_confirmation: 'password',
            roles: [],
            direct_permissions: [],
        },
        users: {},
        isLoading: {
            users: true,
            user_create: false
        }
    }),

    getters: {},

    actions: {

        async fetchUsersForDatatable(options, page) {
            this.isLoading.users = true
            this.users = {}
            const uri = '/api/users/datatable?' +
                'page=' + page +
                '&search=' + options.search +
                '&sortby=' + options.currentSort +
                '&sortdir=' + options.currentSortDir +
                '&currentpage=' + options.currentPage +
                '&disableduser=' + options.show_disabled_user;
            const response = await axios.get(uri)
            this.users = response.data
            this.isLoading.users = false
        },
        async fetchUser(id) {
            this.user = {
                name: null,
                username: null,
                email: null,
                password: null,
                password_confirmation: null,
                roles: [],
                direct_permissions: [],
            }
            const {data} = (await axios.get(`api/users/${id}`));
            this.user = data;
        },

        async updateUser(id) {
            await axios.patch(`api/users/${id}`, this.user);
            this.user = {
                name: null,
                username: null,
                email: null,
                password: null,
                password_confirmation: null,
                po_max: 0,
                web_access: false,
                roles: [],
                direct_permissions: [],
                employee_id: null,
                branches: [],
                companies: [],
                po_types: [],
                purchasing_groups: [],
                purchasing_organizations: [],
            }
        },
        async createUser() {
            this.isLoading.user_create = true;
            await axios.post(`api/users`, this.user);
            this.isLoading.user_create = false;
            this.user = {
                name: null,
                username: null,
                email: null,
                password: null,
                password_confirmation: null,
                po_max: 0,
                web_access: false,
                roles: [],
                direct_permissions: [],
                employee_id: null,
                branches: [],
                companies: [],
                po_types: [],
                purchasing_groups: [],
                purchasing_organizations: [],
            }
        },
        async removeUser(id) {
            let index = this.users.data.findIndex((details) => details.id === id);
            await axios.delete(`api/users/${id}`);
            this.users.data.splice(index, 1);
        },
        async restoreUser(id) {
            let index = this.users.data.findIndex((details) => details.id === id);
            await axios.delete(`api/users/${id}`);
        },
    },
});

