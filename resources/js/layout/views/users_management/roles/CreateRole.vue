<template>
    <div class="row g-3 mb-3 p-3">
        <div class="col-sm-12">
            <label class="form-label-sm">Role Name</label>
            <input v-model="role.name" :class="error.errors.name ? 'is-invalid' : ''"
                   class="form-control form-control-sm"
                   placeholder="permission" type="text"/>
            <div v-if="error.errors.name" class="invalid-feedback fw-bolder">
                {{ error.errors.name.toString() }}
            </div>
        </div>
        <div class="col-sm-12">
            <label class="form-label-sm">Guard Name</label>
            <input v-model="role.guard_name" :class="error.errors.guard_name ? 'is-invalid' : ''"
                   class="form-control form-control-sm"
                   placeholder="guard name" type="text"/>
            <div v-if="error.errors.guard_name" class="invalid-feedback fw-bolder">
                {{ error.errors.guard_name.toString() }}
            </div>
        </div>

        <div class="col-sm-12">
            <label class="form-label-sm">Select Permissions</label>

            <select v-model="role.permissions" :class="error.errors.permissions ? 'is-invalid' : ''"
                    aria-label="multiple select example"
                    class="form-control form-select form-select-sm"
                    multiple size="10">
                <option v-for="(permission,index) in all_permissions" :key="permission.id"
                        :selected="role.permissions ===permission.name" :value="permission.name"
                >{{ permission.name }}
                </option>
            </select>
            <div v-if="error.errors.permissions" class="invalid-feedback fw-bolder">
                {{ error.errors.permissions.toString() }}
            </div>
        </div>
    </div>
</template>

<script setup>
import {useErrorStore} from "@/store/Error";
import {useRoleStore} from "@/store/Role";
import {usePermissionStore} from "@/store/Permission";
import {storeToRefs} from "pinia";
import {onMounted} from "vue";


const error = useErrorStore();
const roleStore = useRoleStore()
const permissionStore = usePermissionStore()
const {role, isLoading} = storeToRefs(roleStore)//user variable from store
const {all_permissions} = storeToRefs(permissionStore)//user variable from store
const {allPermissions} = permissionStore//user variable from store


onMounted(() => {
    allPermissions()
})

</script>

<style scoped>

</style>
