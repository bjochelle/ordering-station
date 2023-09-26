import {defineStore} from "pinia";
import axios from "axios";

export const useRoleStore = defineStore("role", {
    state: () => ({
        role: {
            guard_name: 'web',
            permissions: []
        },
        roles: {},
        isLoading: {
            roles: true,
        },
        all_roles: []
    }),

    getters: {},

    actions: {
        async allRoles() {
            const uri = '/api/roles';
            const response = await axios.get(uri)
            this.all_roles = response.data
        },
        async fetchRole(id) {

            const {data} = (await axios.get(`api/roles/${id}`));
            this.role = data;
        },

        async updateRole(id) {
            await axios.patch(`api/roles/${id}`, this.role);
            this.role = {
                guard_name: 'web',
                permissions: []
            };
        },

        async fetchRolesForDatatable(options, page) {
            this.isLoading.roles = true
            this.roles = {}
            const uri = '/api/roles/datatable?' +
                'page=' + page +
                '&search=' + options.search +
                '&sortby=' + options.currentSort +
                '&sortdir=' + options.currentSortDir +
                '&currentpage=' + options.currentPage +
                '&disableduser=' + options.show_disabled_user;
            const response = await axios.get(uri)
            this.roles = response.data
            this.isLoading.roles = false
        },

        async createRole() {

            await axios.post(`/api/roles`, this.role);
            this.role = {
                guard_name: 'web',
                permissions: []
            };
        },

        async removeRole(id) {
            let index = this.roles.data.findIndex((details) => details.id === id);
            await axios.delete(`api/roles/${id}`);
            this.roles.data.splice(index, 1);
        },
    },
});

