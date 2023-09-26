<template>
    <div class="row g-3 mb-3 p-3">
        <div class="col-sm-12">
            <label class="form-label-sm">Permission Name</label>
            <input v-model="permission.name" :class="error.errors.name ? 'is-invalid' : ''"
                   class="form-control form-control-sm"
                   placeholder="permission" type="text"/>
            <div v-if="error.errors.name" class="invalid-feedback fw-bolder">
                {{ error.errors.name.toString() }}
            </div>
        </div>
        <!--        <div class="col-sm-12">-->
        <!--            <label class="form-label-sm">Guard Name</label>-->
        <!--            <input v-model="permission.guard_name" :class="error.errors.guard_name ? 'is-invalid' : ''"-->
        <!--                   class="form-control form-control-sm"-->
        <!--                   placeholder="guard name" type="text"/>-->
        <!--            <div v-if="error.errors.guard_name" class="invalid-feedback fw-bolder">-->
        <!--                {{ error.errors.guard_name.toString() }}-->
        <!--            </div>-->
        <!--        </div>-->
    </div>
</template>

<script setup>
import {useErrorStore} from "@/store/Error";
import {usePermissionStore} from "@/store/Permission";
import {storeToRefs} from "pinia";

const error = useErrorStore();
const permissionStore = usePermissionStore()
const {permission, isLoading} = storeToRefs(permissionStore)//user variable from store
</script>

<style scoped>

</style>
