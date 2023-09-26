<template>
    <nav class="navbar navbar-light navbar-glass navbar-top navbar-expand">
        <button aria-controls="navbarVerticalCollapse" aria-expanded="false"
                aria-label="Toggle Navigation" class="btn navbar-toggler-humburger-icon navbar-toggler me-1 me-sm-3"
                data-bs-target="#navbarVerticalCollapse" data-bs-toggle="collapse" type="button"><span
            class="navbar-toggle-icon"><span class="toggle-line"></span></span></button>
        <router-link :to="{ name: 'Welcome' }" class="navbar-brand me-1 me-sm-3" tag="a">
            <div class="d-flex align-items-center">
                <img alt="" class="me-2" src="../../../images/intranet-img/vcygroup.jpg" width="130">
                <!--                <span class="font-sans-serif">BTH</span>-->
            </div>
        </router-link>

        <ul class="navbar-nav align-items-center d-none d-lg-block">
            <li class="nav-item">
                Today is {{ currentDateTime }}
            </li>
        </ul>
        <ul class="navbar-nav navbar-nav-icons ms-auto flex-row align-items-center">
            <li class="nav-item">
                <div class="theme-control-toggle fa-icon-wait px-2"><input class="form-check-input ms-0 theme-control-toggle-input" id="themeControlToggle" type="checkbox" data-theme-control="theme" value="dark" /><label class="mb-0 theme-control-toggle-label theme-control-toggle-light" for="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Switch to light theme"><span class="fas fa-sun fs-0"></span></label><label class="mb-0 theme-control-toggle-label theme-control-toggle-dark" for="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Switch to dark theme"><span class="fas fa-moon fs-0"></span></label></div>
            </li>
            <li class="nav-item">
                <template v-if="auth.user !== 'undefined'">

                    <template v-if="auth.employee_info">
                        {{ auth.employee_info.full_name }}
                    </template>
                    <template v-else>
                        {{ auth.user.username }}
                    </template>

                </template>
            </li>
            <li class="nav-item dropdown">
                <a id="navbarDropdownUser" aria-expanded="false" aria-haspopup="true" class="nav-link pe-0 ps-2"
                   data-bs-toggle="dropdown" role="button">
                    <div class="avatar avatar-xl">
                        <img alt="" class="rounded-circle" src="../../../images/user.gif">
                    </div>
                </a>
                <div aria-labelledby="navbarDropdownUser" class="dropdown-menu dropdown-caret dropdown-menu-end py-0">
                    <div class="bg-white dark__bg-1000 rounded-2 py-2">
                        <button class="dropdown-item">Profile &amp; account</button>
                        <div class="dropdown-divider"></div>
                        <button class="dropdown-item">Settings</button>
                        <button class="dropdown-item" @click="onLogout">Logout</button>
                    </div>
                </div>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import moment from 'moment'
import {onMounted, ref} from 'vue'
import {useRouter} from "vue-router"
import {useAuthStore} from "@/store/Authentication"

const auth = useAuthStore();
const router = useRouter();

const currentDateTime = ref()
const onLogout = () => {
    auth.logout().then(() => router.push({name: "Login"}));
};

onMounted(() => {
    currentDateTime.value = moment().format('MMMM DD, YYYY ( dddd )')
})


</script>

<style scoped>

</style>
