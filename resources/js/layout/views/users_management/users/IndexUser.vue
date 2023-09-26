<template>
    <div class="card overflow-hidden">
        <div class="card-header">
            <div class="row gx-0 align-items-center">
                <div class="col-auto d-flex justify-content-end order-md-1">
                    <button class="btn btn-primary btn-sm"
                            type="button" @click="showCreateModal">New User
                    </button>
                </div>
                <div class="col d-flex justify-content-end order-md-2">

                    <div class="row g-2">
                        <div class="col d-md-block d-none">
                            <input v-model="table.search" class="form-control form-control-sm" placeholder="Search..."
                                   type="text">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-2 gx-2 align-items-center">
                <div class="col d-flex justify-content-start order-md-2">
                    <div class="form-check form-switch text-danger ">
                        <input v-model="table.show_disabled_user" class="form-check-input" type="checkbox"/>
                        <label class="form-check-label">
                            Disabled/Deleted User
                        </label>
                    </div>
                </div>
            </div>
            <div class="row mt-2 gx-2 align-items-center">
                <div class="col-auto">
                    <label class="col-form-label">Toggle Column:</label>
                </div>
                <div class="col-auto">
                    <template v-for="(toggle,index) in toggle_column" :key="index">
                        <button :class="{'text-success':toggle.isShow,'text-primary':!toggle.isShow}"
                                class="btn btn-link"
                                @click="toggle.isShow = !toggle.isShow">{{
                                toggle.header_name
                            }}
                        </button>
                    </template>

                </div>
            </div>
        </div>
        <div class="card-body bg-light px-1 py-0 ">
            <PulseLoading v-if="isLoading.users"></PulseLoading>
            <div v-else class="table-responsive table-responsive-sm scrollbar">
                <table class="table overflow-hidden fs--1">
                    <thead class="text-black bg-200">
                    <tr>
                        <th class="align-middle white-space-nowrap" @click="sort('name')">
                            <div class="inline-block">
                                <div :class="{'active-filter-asc':table.sortClassActive.activeAsc}"
                                     class="filter-asc"></div>
                                <div :class="{'active-filter-desc':table.sortClassActive.activeDesc}"
                                     class="filter-desc">
                                </div>
                            </div>
                            Name
                        </th>
                        <th class="align-middle white-space-nowrap" @click="sort('username')">
                            <div class="inline-block">
                                <div :class="{'active-filter-asc':table.sortClassActive.activeAsc}"
                                     class="filter-asc"></div>
                                <div :class="{'active-filter-desc':table.sortClassActive.activeDesc}"
                                     class="filter-desc">
                                </div>
                            </div>
                            Username
                        </th>
                        <th :class="{'d-none':!toggle_column.find(x => x.object_name === 'email').isShow}"
                            class="align-middle white-space-nowrap" @click="sort('email')">
                            <div class="inline-block">
                                <div :class="{'active-filter-asc':table.sortClassActive.activeAsc}"
                                     class="filter-asc"></div>
                                <div :class="{'active-filter-desc':table.sortClassActive.activeDesc}"
                                     class="filter-desc">
                                </div>
                            </div>
                            Email
                        </th>

                        <th class="align-middle white-space-nowrap text-center">Roles</th>
                        <th class="align-middle white-space-nowrap">Direct Permissions</th>
                        <th :class="{'d-none':!toggle_column.find(x => x.object_name === 'created_at').isShow}"
                            class="align-middle white-space-nowrap" @click="sort('created_at')">
                            <div class="inline-block">
                                <div :class="{'active-filter-asc':table.sortClassActive.activeAsc}"
                                     class="filter-asc"></div>
                                <div :class="{'active-filter-desc':table.sortClassActive.activeDesc}"
                                     class="filter-desc">
                                </div>
                            </div>
                            Created at
                        </th>
                        <th class="align-middle white-space-nowrap">Options</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(user) in users.data" :key="user.id" class="align-middle">
                        <td class="white-space-nowrap">{{ user.name }}</td>
                        <td class="white-space-nowrap">{{ user.username }}</td>
                        <td :class="{'d-none':!toggle_column.find(x => x.object_name === 'email').isShow}"
                            class="white-space-nowrap">{{ user.email }}
                        </td>
                        <td>
                            <span v-for="(role) in user.roles"
                                  class="badge bg-primary ms-1 rounded-pill">
                                {{ role.name }}
                            </span>
                        </td>
                        <td>
                            <span v-for="(permission) in user.permissions"
                                  class="badge bg-success ms-1 rounded-pill">
                                {{ permission.name }}
                            </span>
                        </td>
                        <td :class="{'d-none':!toggle_column.find(x => x.object_name === 'created_at').isShow}"
                            class="white-space-nowrap">{{ user.created_at }}
                        </td>
                        <td class="white-space-nowrap">
                            <button aria-label="Delete" class="btn p-0 shadow-none pe-2" data-bs-original-title="Delete"
                                    data-bs-placement="top" data-bs-toggle="tooltip" type="button"
                                    @click="showEditModal(user.id)">
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
                            <template v-if="!user.roles.find(x => x.name === 'Super Administrator')">
                                <button v-if="!user.deleted_at"
                                        aria-label="Delete"
                                        class="btn p-0 shadow-none"
                                        data-bs-original-title="Delete" data-bs-placement="top"
                                        data-bs-toggle="tooltip" type="button" @click="deleteData(user.id)">
                                    <svg class="icon icon-tabler icon-tabler-trash" fill="none" height="24"
                                         stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                         stroke-width="1" viewBox="0 0 24 24" width="24"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0h24v24H0z" fill="none" stroke="none"></path>
                                        <line x1="4" x2="20" y1="7" y2="7"></line>
                                        <line x1="10" x2="10" y1="11" y2="17"></line>
                                        <line x1="14" x2="14" y1="11" y2="17"></line>
                                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                                    </svg>
                                </button>
                            </template>

                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="card-footer">
            <p class="text-font">Showing {{ users.from || 0 }} to {{ users.to || 0 }} of
                {{ users.total || 0 }}
                entries</p>
            <Bootstrap5Pagination :data="users" :limit="3" :show-disabled="true" align="right" size="small"
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
            <CreateUser v-if="modal_properties.type==='create'"></CreateUser>
            <EditUser v-if="modal_properties.type==='edit'"></EditUser>
        </template>
        <template #footer>
            <button v-if="modal_properties.type==='create'" class="btn btn-sm btn-primary me-1 mb-1"
                    @click.prevent="submitData">Submit
            </button>
            <button v-if="modal_properties.type==='edit'" class="btn btn-sm btn-primary me-1 mb-1"
                    @click.prevent="updateData">Update
            </button>
        </template>
    </ModalComponent>
</template>

<script setup>
import {inject, onBeforeUnmount, onMounted, reactive, ref, watch} from "vue";
import {useRoute, useRouter} from "vue-router";
import {storeToRefs} from "pinia";
import {useUserStore} from "@/store/User";
import {useErrorStore} from "@/store/Error";
import {Bootstrap5Pagination} from 'laravel-vue-pagination';
import ModalComponent from "@/layout/component/ModalComponent.vue";
import CreateUser from "@/layout/views/users_management/users/CreateUser.vue";
import EditUser from "@/layout/views/users_management/users/EditUser.vue";
import PulseLoading from "@/layout/component/loading/PulseLoading.vue";

const swal = inject('$swal')
const userStore = useUserStore()
const error = useErrorStore();
const route = useRoute();
const router = useRouter();
const {users, isLoading, user} = storeToRefs(userStore)//user variable from store
const {fetchUsersForDatatable, createUser, fetchUser, updateUser, removeUser, restoreUser} = userStore; //user methods from store


const toggle_column = reactive(
    [
        {
            header_name: 'Created At',
            object_name: 'created_at',
            isShow: false,
        },
        {
            header_name: 'Email',
            object_name: 'email',
            isShow: false,
        }
    ],
)

const table = reactive({
    currentSort: 'created_at',
    currentSortDir: 'desc',
    search: '',
    currentPage: '10',
    sortClassActive: {
        'activeDesc': false,
        'activeAsc': true
    },
    show_disabled_user: false
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

const updateData = async () => {
    await updateUser(user.value.id)
    await swal({
        icon: 'success',
        title: 'Successfully updated!',
        // text: 'successfully updated',
        showConfirmButton: false,
        timer: 1000
    })
    if (await thisModal.value) {
        await thisModal.value.hide();
        await dataTable(pages)
    }

}

const submitData = async () => {
    await createUser()
    await swal({
        icon: 'success',
        title: 'Successfully added!',
        // text: '',
        showConfirmButton: false,
        timer: 1000
    })
    if (await thisModal.value) {
        await thisModal.value.hide();
        await dataTable(pages)
    }

}

const showCreateModal = async () => {

    modal_properties.value.title = 'Create New User'
    modal_properties.value.backdrop = 'static'
    modal_properties.value.keyboard = true
    modal_properties.value.type = 'create'
    modal_properties.value.size = 'md'
    if (await thisModal.value) {
        user.value = {
            password: 'password',
            password_confirmation: 'password',
        }
        await thisModal.value.show();
    }

}

const showEditModal = async (id) => {

    modal_properties.value.title = 'Edit User Details'
    modal_properties.value.backdrop = 'static'
    modal_properties.value.keyboard = true
    modal_properties.value.type = 'edit'
    modal_properties.value.size = 'md'
    if (await thisModal.value) {
        await fetchUser(id)
        await thisModal.value.show();
    }
}

const modalClose = () => {

    user.value = {
        name: null,
        username: null,
        email: null,
        password: null,
        password_confirmation: null,
        roles: [],
        direct_permissions: [],
    }
}


const dataTable = _.debounce(function (page) {

    if (typeof page === 'undefined') {
        pages = 1;
    }
    pages = page;

    fetchUsersForDatatable(table, pages);
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

const restoreData = (id) => {
    swal({
        icon: 'error',
        title: 'Do you want to restore this user?',
        showCancelButton: true,
        confirmButtonText: 'Yes',
    }).then(async (result) => {
        if (result.isConfirmed) {
            await restoreUser(id)
            await dataTable(pages)
            swal({
                icon: 'success',
                title: 'Restored',
                text: 'successfully restored',
                showConfirmButton: false,
                timer: 800
            })
        }
    })
}

const deleteData = (id) => {
    swal({
        icon: 'error',
        title: 'Do you want to delete this user?',
        showCancelButton: true,
        confirmButtonText: 'Yes',
    }).then(async (result) => {
        if (result.isConfirmed) {
            await removeUser(id)
            await dataTable(pages)
            swal({
                icon: 'success',
                title: 'Deleted',
                text: 'successfully deleted',
                showConfirmButton: false,
                timer: 800
            })
        }
    })


}

watch(() => route.query['disabled'],
    async (newValue) => {
        if (newValue === 'true') {

            table.show_disabled_user = true

        } else {
            let query = await Object.assign({}, route.query);

            delete query.disabled;
            await router.replace({query});
            table.show_disabled_user = false
        }
    }, {immediate: true},
)

watch(() => route.query['search'],
    async (newValue) => {
        if (newValue) {
            table.search = newValue

        }
    }, {immediate: true},
)

watch(
    () => table.show_disabled_user,
    async (newValue) => {

        await router.push({
            name: "IndexUser",
            query: {...route.query, 'disabled': newValue}
        });
        dataTable(pages);
    },
)

watch(
    () => [table.search, table.currentPage],
    async (newValue) => {
        if (newValue[0].length) { // search
            await router.push({
                name: "IndexUser",
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
    userStore.$reset();
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
