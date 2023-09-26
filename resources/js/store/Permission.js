import {defineStore} from "pinia";
import axios from "axios";

export const usePermissionStore = defineStore("permission", {
    state: () => ({
        permission: {
            guard_name: 'web',
        },
        permissions: {},
        isLoading: {
            permissions: true,
            submit_permission: false,
        },
        all_permissions: []
    }),

    getters: {},


    actions: {
        async allPermissions() {
            const uri = '/api/permissions';
            const response = await axios.get(uri)
            this.all_permissions = response.data
        },
        async fetchPermissionsForDatatable(options, page) {
            this.isLoading.permissions = true
            this.permissions = {}
            const uri = '/api/permissions/datatable?' +
                'page=' + page +
                '&search=' + options.search +
                '&sortby=' + options.currentSort +
                '&sortdir=' + options.currentSortDir +
                '&currentpage=' + options.currentPage +
                '&disableduser=' + options.show_disabled_user;
            const response = await axios.get(uri)
            this.permissions = response.data
            this.isLoading.permissions = false
        },
        async fetchPermission(id) {
            const {data} = (await axios.get(`api/permissions/${id}`));
            this.permission = data;
        },
        async createPermission() {
            this.isLoading.submit_permission = true
            await axios.post(`api/permissions`, this.permission);
            this.isLoading.submit_permission = false
            this.permission = {
                guard_name: 'web',
            };
        },
        async updatePermission(id) {

            await axios.patch(`api/permissions/${id}`, this.permission);
            this.permission = {
                guard_name: 'web'
            };
        },

        async removePermission(id) {
            let index = this.permissions.data.findIndex((details) => details.id === id);
            await axios.delete(`api/permissions/${id}`);
            this.permissions.data.splice(index, 1);
        },
    },
});

