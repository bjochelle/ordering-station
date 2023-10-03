<script setup>
import { inject, onBeforeUnmount, onMounted} from "vue";
import {useRoute, useRouter} from "vue-router";
import {storeToRefs} from "pinia";
import {useErrorStore} from "@/store/Error";


const swal = inject('$swal')
const error = useErrorStore();

</script>

<template>
    <section class="bg-primary pt-8 pb-4 light">
        <div class="container">
            <div class="position-absolute btn-back-to-top bg-primary">
                <a class="text-600" href="#container" data-bs-offset-top="0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-up rotate-45 text-white-50"
                         width="36" height="36" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M6 15l6 -6l6 6"></path>
                    </svg>
                </a></div>
            <div class="row">
                <div class="col-lg-4">
                    <h5 class="text-uppercase text-white  mb-3">CONTACT US</h5>
                    <p class="text-600 text-white">  <br>
                        <strong>Phone :</strong> (034) 488-1234<br>
                    </p>


                </div>
                <div class="col ps-lg-6 ps-xl-8">
                    <div class="row mt-5 mt-lg-0">
                        <div class="col-6 col-md-3">
                            <h5 class="text-uppercase text-white  mb-3">Company</h5>
                            <ul class="list-unstyled ">
                                <li class="mb-1 ">
                                    <router-link :to="{ name: 'Home' }" class="text-white-50" type="a">
                                        Home
                                    </router-link>
                                </li>

                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div><!-- end of .container-->
    </section>
    <section class="py-0 bg-primary light">
        <div>
            <hr class="my-0 text-600 opacity-25">
            <div class="container py-3">
                <div class="row justify-content-between fs--1">
                    <div class="col-12 col-sm-auto text-center">
                        <p class="mb-0 text-white-50 ">Copyright  © 2023 Mobile Ordering Station. All Rights Reserved</p>
                    </div>

                </div>
            </div>
        </div><!-- end of .container-->
    </section>
</template>

<style scoped>

</style>
