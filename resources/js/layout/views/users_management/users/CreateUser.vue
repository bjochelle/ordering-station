<template>
    <div class="row g-3 mb-3 p-3">
        <div class="col-sm-12 form-group required">
            <label class="form-label-sm">Name</label>
            <input v-model="user.name" :class="error.errors.name ? 'is-invalid' : ''"
                   class="form-control form-control-sm" placeholder="Name"
                   type="text"/>
            <div v-if="error.errors.name" class="invalid-feedback fw-bolder">
                {{ error.errors.name.toString() }}
            </div>
        </div>
        <div class="col-sm-12 form-group required">
            <label class="form-label-sm">Username</label>
            <input v-model="user.username" :class="error.errors.username ? 'is-invalid' : ''"
                   class="form-control form-control-sm" placeholder="Username"
                   type="text"/>
            <div v-if="error.errors.username" class="invalid-feedback fw-bolder">
                {{ error.errors.username.toString() }}
            </div>
        </div>
        <div class="col-sm-12">
            <label class="form-label-sm">Email</label>
            <input v-model="user.email" :class="error.errors.email ? 'is-invalid' : ''"
                   class="form-control form-control-sm" placeholder="Email"
                   type="email"/>
            <div v-if="error.errors.email" class="invalid-feedback fw-bolder">
                {{ error.errors.email.toString() }}
            </div>
        </div>
        <div class="col-sm-12 form-group required">
            <label :class="error.errors.password ? 'is-invalid' : ''" class="form-label-sm">Password
                <small class="text-muted">[the default password is
                    <mark>password</mark>
                    ]</small>
            </label>
            <input v-model="user.password" :class="error.errors.password ? 'is-invalid' : ''"
                   class="form-control form-control-sm" placeholder="Password"
                   type="password"/>
            <div v-if="error.errors.password" class="invalid-feedback fw-bolder">
                {{ error.errors.password.toString() }}
            </div>
        </div>
        <div class="col-sm-12 form-group required">
            <label class="form-label-sm">Retype Password</label>
            <input v-model="user.password_confirmation" class="form-control form-control-sm"
                   placeholder="Retype Password" type="password"/>
        </div>

        <div class="col-sm-12 form-group required">
            <label class="form-label-sm">Roles <small class="text-muted">[press ctrl key to select multiple
                ]</small></label>
            <select v-model="user.roles" :class="error.errors.roles ? 'is-invalid' : ''"
                    aria-label="multiple select"
                    class="form-control form-select form-select-sm"
                    multiple size="5">
                <option v-for="(role) in all_roles" :key="role.id"
                        :selected="user.roles === role.name" :value="role.name"
                >{{ role.name }}
                </option>
            </select>
            <div v-if="error.errors.roles" class="invalid-feedback fw-bolder">
                {{ error.errors.roles.toString() }}
            </div>
        </div>

        <div class="col-sm-12">
            <label class="form-label-sm ">Direct Permission <small class="text-muted">[press ctrl key to select multiple
                ]</small></label>
            <select v-model="user.direct_permissions"
                    aria-label="multiple select example"
                    class="form-control form-select form-select-sm"
                    multiple size="5">
                <option v-for="(permission) in all_permissions" :key="permission.id"
                        :selected="user.direct_permissions ===permission.name" :value="permission.name"
                >{{ permission.name }}
                </option>
            </select>
        </div>
    </div>
</template>

<script setup>
import {useErrorStore} from "@/store/Error";
import {useRoleStore} from "@/store/Role";
import {usePermissionStore} from "@/store/Permission";
import {useUserStore} from "@/store/User";

import {storeToRefs} from "pinia";
import {onMounted} from "vue";

const error = useErrorStore();
const roleStore = useRoleStore()
const userStore = useUserStore()
const permissionStore = usePermissionStore()



const {role, isLoading, all_roles} = storeToRefs(roleStore)//user variable from store
const {user} = storeToRefs(userStore)//user variable from store
const {allRoles} = roleStore//user variable from store
const {all_permissions} = storeToRefs(permissionStore)//user variable from store
const {allPermissions} = permissionStore//user variable from store


onMounted(() => {
    allRoles()
    allPermissions()
})


</script>

<style scoped>

</style>
