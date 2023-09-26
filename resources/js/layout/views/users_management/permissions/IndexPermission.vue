<template>
    <div class="card overflow-hidden">
        <div class="card-header">
            <div class="row gx-0 align-items-center">
                <div class="col-auto d-flex justify-content-end order-md-1">
                    <button class="btn btn-primary btn-sm"
                            type="button" @click="showCreateModal">New Permission
                    </button>
                </div>
                <div class="col d-flex justify-content-end order-md-2">

                    <div class="row g-2">
                        <div class="col d-md-block d-none"><input v-model="table.search"
                                                                  class="form-control form-control-sm"
                                                                  placeholder="Search..." type="text"></div>
                    </div>

                </div>

            </div>
        </div>
        <div class="card-body bg-light px-1 py-0 ">
            <PulseLoading v-if="isLoading.permissions"></PulseLoading>
            <div class="table-responsive table-responsive-sm scrollbar" v-else>
                <table class="table overflow-hidden fs--1">
                    <thead class="text-black bg-200">
                    <tr>
                        <th @click="sort('name')">
                            <div class="inline-block">
                                <div :class="{'active-filter-asc':table.sortClassActive.activeAsc}"
                                     class="filter-asc"></div>
                                <div :class="{'active-filter-desc':table.sortClassActive.activeDesc}"
                                     class="filter-desc">
                                </div>
                            </div>
                            Name
                        </th>
                        <th @click="sort('guard_name')">
                            <div class="inline-block">
                                <div :class="{'active-filter-asc':table.sortClassActive.activeAsc}"
                                     class="filter-asc"></div>
                                <div :class="{'active-filter-desc':table.sortClassActive.activeDesc}"
                                     class="filter-desc">
                                </div>
                            </div>
                            Guard Name
                        </th>

                        <th @click="sort('created_at')">
                            <div class="inline-block">
                                <div :class="{'active-filter-asc':table.sortClassActive.activeAsc}"
                                     class="filter-asc"></div>
                                <div :class="{'active-filter-desc':table.sortClassActive.activeDesc}"
                                     class="filter-desc">
                                </div>
                            </div>
                            Created at
                        </th>
                        <th>Options</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(permission) in permissions.data" :key="permission.id" class="align-middle">
                        <td>{{ permission.name }}</td>
                        <td>{{ permission.guard_name }}</td>
                        <td>{{ permission.created_at }}</td>
                        <td>
                            <button aria-label="Delete" class="btn p-0 shadow-none pe-2"
                                    data-bs-original-title="Delete" data-bs-placement="top"
                                    data-bs-toggle="tooltip" type="button" @click="showEditModal(permission.id)">
                                <svg class="icon icon-tabler icon-tabler-edit-circle" fill="none"
                                     height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                     stroke-width="1"
                                     viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
                                    <path d="M12 15l8.385 -8.415a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3z"></path>
                                    <path d="M16 5l3 3"></path>
                                    <path d="M9 7.07a7.002 7.002 0 0 0 1 13.93a7.002 7.002 0 0 0 6.929 -5.999"></path>
                                </svg>
                            </button>
                            <button aria-label="Delete" class="btn p-0 shadow-none"
                                    data-bs-original-title="Delete" data-bs-placement="top" data-bs-toggle="tooltip"
                                    type="button" @click="showDeleteModal(permission.id)">
                                <svg class="icon icon-tabler icon-tabler-trash" fill="none" height="24"
                                     stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                     stroke-width="1" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
                                    <line x1="4" x2="20" y1="7" y2="7"></line>
                                    <line x1="10" x2="10" y1="11" y2="17"></line>
                                    <line x1="14" x2="14" y1="11" y2="17"></line>
                                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                                </svg>
                            </button>
                        </td>
                    </tr>

                    </tbody>
                </table>
            </div>
        </div>
        <div class="card-footer">
            <Bootstrap5Pagination :data="permissions" :limit="20" :show-disabled="true" align="right" size="small"
                                  @pagination-change-page="dataTable">
                <template #prev-nav class="page-link">

                    Previous

                </template>
                <template #next-nav class="page-link">

                    Next

                </template>

            </Bootstrap5Pagination>
        </div>
    </div>

    <ModalComponent ref="thisModal" :backdrop="modal_properties.backdrop" :keyboard="modal_properties.keyboard"
                    :size="modal_properties.size" :title="modal_properties.title" @modalHiddenEvent="modalClose">
        <template #body>
            <CreatePermission v-if="modal_properties.type==='create'"></CreatePermission>
            <EditPermission v-if="modal_properties.type==='edit'"></EditPermission>
        </template>
        <template #footer>
            <button v-if="modal_properties.type==='create'" class="btn btn-sm btn-primary me-1 mb-1"
                    @click="submitData">Submit
            </button>
            <button v-if="modal_properties.type==='edit'" class="btn btn-sm btn-primary me-1 mb-1"
                    @click="updateData">Update
            </button>
        </template>
    </ModalComponent>
</template>

<script setup>
import {inject, onBeforeUnmount, onMounted, reactive, ref, watch} from "vue";
import {useRoute, useRouter} from "vue-router";
import {storeToRefs} from "pinia";
import {usePermissionStore} from "@/store/Permission";
import {useErrorStore} from "@/store/Error";
import {Bootstrap5Pagination} from 'laravel-vue-pagination';
import PacmanLoading from "@/layout/component/loading/PacmanLoading.vue";
import ModalComponent from "@/layout/component/ModalComponent.vue";
import CreatePermission from "@/layout/views/users_management/permissions/CreatePermission.vue";
import EditPermission from "@/layout/views/users_management/permissions/EditPermission.vue";
import PulseLoading from "../../../component/loading/PulseLoading.vue";

const swal = inject('$swal')
const permissionStore = usePermissionStore()
const error = useErrorStore();
const route = useRoute();
const router = useRouter();
const {permissions, permission, isLoading} = storeToRefs(permissionStore)//user variable from store
const {
    fetchPermissionsForDatatable,
    createPermission,
    fetchPermission,
    updatePermission,
    removePermission
} = permissionStore; //user methods from store


const table = reactive({
    currentSort: 'name',
    currentSortDir: 'asc',
    search: '',
    currentPage: '10',
    sortClassActive: {
        'activeDesc': false,
        'activeAsc': true
    },
})
const showPage = ['10', '50', '100']

let pages = {}

const modal_properties = ref({
    title: null,
    backdrop: null,
    keyboard: null,
    type: null,
    size: null
})

let thisModal = ref(null);


const showCreateModal = async () => {

    modal_properties.value.title = 'Create New Permission'
    modal_properties.value.backdrop = 'static'
    modal_properties.value.keyboard = true
    modal_properties.value.type = 'create'
    modal_properties.value.size = 'md'
    if (await thisModal.value) {
        await thisModal.value.show();
    }

}

const showEditModal = async (id) => {

    modal_properties.value.title = 'Edit Permission'
    modal_properties.value.backdrop = 'static'
    modal_properties.value.keyboard = true
    modal_properties.value.type = 'edit'
    modal_properties.value.size = 'md'
    if (await thisModal.value) {
        await fetchPermission(id)
        await thisModal.value.show();
    }
}

const submitData = async () => {
    await createPermission()
    await swal({
        icon: 'success',
        title: 'Success',
        text: 'successfully added',
        showConfirmButton: false,
        timer: 800
    })
    if (await thisModal.value) {
        await thisModal.value.hide();
        await dataTable(pages)
    }

}

const updateData = async () => {
    await updatePermission(permission.value.id)
    await swal({
        icon: 'success',
        title: 'Success',
        text: 'successfully added',
        showConfirmButton: false,
        timer: 800
    })
    if (await thisModal.value) {
        await thisModal.value.hide();
        await dataTable(pages)
    }

}

const showDeleteModal = async (id) => {
    swal({
        icon: 'error',
        title: 'Do you want to delete this permission?',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        width: 400
    }).then(async (result) => {
        if (result.isConfirmed) {

            // let data_index = permissions.value.data.findIndex(x => x.id === id)
            // permissions.value.data.splice(data_index, 1);
            await removePermission(id)
            swal({
                icon: 'success',
                title: 'Deleted',
                text: 'successfully deleted',
                showConfirmButton: false,
                timer: 800,
            })
        }
    })


}

const modalClose = () => {

    permission.value = {
        guard_name: 'web'
    }
    error.$reset()
    // permission.value.name = null
    // permission.value.guard_name = 'web';
}


const dataTable = _.debounce(function (page) {

    if (typeof page === 'undefined') {
        pages = 1;
    }
    pages = page;

    fetchPermissionsForDatatable(table, pages);
}, 800);

const sort = (s) => {
    if (s === table.currentSort) {
        table.currentSortDir = table.currentSortDir === 'asc' ? 'desc' : 'asc';
        if (table.currentSortDir === 'asc') {
            table.sortClassActive.activeAsc = true;
            table.sortClassActive.activeDesc = false;
        } else {
            table.sortClassActive.activeAsc = false;
            table.sortClassActive.activeDesc = true;
        }
    }
    table.currentSort = s;
    dataTable(pages)
}


watch(() => route.query['search'],
    async (newValue) => {
        if (newValue) {
            console.log('cc')
            table.search = newValue

        } else {

        }
    }, {immediate: true},
)


watch(
    () => [table.search, table.currentPage],
    async (newValue) => {
        // console.log(newValue);
        if (newValue[0].length) { // search

            await router.push({
                name: "IndexPermission",
                query: {...route.query, 'search': newValue[0]}
            });
            dataTable(pages);
        } else {

            let query = await Object.assign({}, route.query);
            delete query.search;
            await router.replace({query});
            dataTable(pages);

        }

    }
)

onMounted(() => {
    dataTable(pages);
})


onBeforeUnmount(() => {
    error.$reset()
    permissionStore.$reset();
})

</script>

<style scoped>
.filter-asc {
    border-bottom: 5px solid #ccc;
    margin-bottom: 1px
}

.filter-asc, .filter-desc {
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent
}

.filter-desc {
    border-top: 5px solid #ccc;
    margin-top: 1px
}

.active-filter-asc {
    border-bottom: 5px solid #a3a3a3
}

.active-filter-desc {
    border-top: 5px solid #a3a3a3
}

.inline-block {
    display: inline-block
}
</style>
