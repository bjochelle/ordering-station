<template>
    <div class="container-fluid">
        <div class="row min-vh-100 flex-center g-0">
            <div class="col-lg-8 col-xxl-5 py-3 position-relative">
                <img alt="" class="bg-auth-circle-shape" src="../../../images/bg-shape.png" width="250">
                <img alt="" class="bg-auth-circle-shape-2" src="../../../images/shape-1.png" width="150">
                <div class="card overflow-hidden z-index-1">
                    <div class="card-body p-0">
                        <div class="row g-0 h-100">
                            <div class="col-md-5 text-center bg-card-gradient">
                                <div class="position-relative p-4 pt-md-5 pb-md-7 light">
                                    <div class="bg-holder bg-auth-card-shape"
                                         style="background-image:url('/resources/images/half-circle.png');"></div>
                                    <!--/.bg-holder-->
                                    <div class="z-index-1 position-relative">
                                        <router-link
                                            :to="{ name: 'Welcome' }"
                                            class="link-light mb-4 font-sans-serif fs-4 d-inline-block fw-bolder text-decoration-none">
                                            <img class="img-fluid" src="../../../images/intranet-img/vcygroup.jpg">
                                        </router-link>
                                    </div>
                                </div>
                                <div class="mt-3 mb-4 mt-md-4 mb-md-5 light">
                                    <p class="text-white">For any concerns?
                                        <br>Contact IT Department. Dial 3314
                                    </p>
                                    <!--                                    <p class="mb-0 mt-4 mt-md-5 fs&#45;&#45;1 fw-semi-bold text-white opacity-75">Read our <a class="text-decoration-underline text-white" href="#!">terms</a> and <a class="text-decoration-underline text-white" href="#!">conditions </a></p>-->
                                </div>
                            </div>
                            <div class="col-md-7 d-flex flex-center">
                                <div class="p-4 p-md-5 flex-grow-1">
                                    <div class="row flex-between-center">
                                        <div class="col-auto">
                                            <h3>Account Login</h3>
                                        </div>
                                    </div>
                                    <form @submit.prevent="onSubmit">
                                        <div class="mb-3">
                                            <label class="form-label" for="card-username">Username</label>
                                            <input id="card-username" v-model="credentials.username"
                                                   :class="error.errors.username ? 'is-invalid' : ''" :disabled="loading" class="form-control"
                                                   type="text">
                                            <div v-if="error.errors.username" class="invalid-feedback fw-bolder">
                                                {{ error.errors.username.toString() }}
                                            </div>
                                        </div>
                                        <div class="mb-3">
                                            <div class="d-flex justify-content-between">
                                                <label class="form-label" for="card-password">Password</label>
                                            </div>
                                            <input id="card-password" v-model="credentials.password"
                                                   :class="error.errors.password ? 'is-invalid' : ''"
                                                   :disabled="loading" class="form-control" type="password">
                                            <div v-if="error.errors.password" class="invalid-feedback fw-bolder">
                                                {{ error.errors.password.toString() }}
                                            </div>

                                        </div>
                                        <div class="row flex-between-center">
                                            <div class="col-auto">
                                                <div class="form-check mb-0">
                                                    <input id="card-checkbox" checked="checked" class="form-check-input"
                                                           type="checkbox">
                                                    <label class="form-check-label mb-0" for="card-checkbox">Remember
                                                        me</label>
                                                </div>
                                            </div>
                                            <!--                                            <div class="col-auto"><a class="fs&#45;&#45;1" href="../../../pages/authentication/card/forgot-password.html">Forgot Password?</a></div>-->
                                        </div>
                                        <div class="mb-3">
                                            <button :disabled="loading" class="btn btn-primary d-block w-100 mt-3"
                                                    name="submit" type="submit">
                                                <span v-if="loading">
                                                    Authenticating...
                                                </span>
                                                <span v-else>
                                                    Log in
                                                </span>
                                            </button>
                                        </div>
                                    </form>
                                    <div v-if="loading" aria-label="Animated striped example" aria-valuemax="100"
                                         aria-valuemin="0" aria-valuenow="100" class="progress"
                                         role="progressbar">
                                        <div class="progress-bar progress-bar-striped progress-bar-animated"
                                             style="width: 100%"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import {onBeforeUnmount, ref} from "vue";
import {useRoute, useRouter} from "vue-router";

import {useAuthStore} from "@/store/Authentication";
import {useErrorStore} from "@/store/Error";

const credentials = ref({});
const loading = ref(false);
const router = useRouter();
const route = useRoute();
const error = useErrorStore();

const onSubmit = () => {
    loading.value = !loading.value;
    useAuthStore()
        .login(credentials.value)
        .then(() => router.push(route.query.redirect || '/'))
        .catch(() => (loading.value = !loading.value));
};

onBeforeUnmount(() => error.$reset());

</script>

<style scoped>

</style>
