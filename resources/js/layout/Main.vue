<template>
    <div class="container" data-layout="container">
        <Sidebar></Sidebar>
        <div class="content">
            <Header></Header>
            <div class="card bg-100 shadow-none border mb-3">
                <div class="row gx-0 flex-between-center">
                    <AmBreadcrumbs :showCurrentCrumb="true" class="col-sm-auto d-flex align-items-start mt-2 mb-2"/>
                    <!--                    <div class="col-sm-auto d-flex align-items-center"><img alt=""-->
                    <!--                                                                            class="ms-n2"-->
                    <!--                                                                            src="../../images/connect-circle.png"-->
                    <!--                                                                            width="70">-->
                    <!--                        <div>-->
                    <!--                            <h4 class="text-primary fw-bold mb-0">{{ page_name }}</h4>-->
                    <!--                        </div>-->
                    <!--                        <img alt="" class="ms-n4 d-md-none d-lg-block" src="../../images/crm-line-chart.png"-->
                    <!--                             width="150">-->
                    <!--                    </div>-->
                </div>
            </div>
            <router-view v-slot="{ Component,route }">
                <Transition mode="out-in" name="slide-fade">
                    <div :key="route.name">
                        <component :is="Component"/>
                    </div>
                </Transition>
            </router-view>
            <Footer></Footer>
        </div>
    </div>

</template>

<script setup>
import {computed, reactive} from "vue";

import Sidebar from "@/layout/component/Sidebar.vue";
import Header from "@/layout/component/Header.vue";
import Footer from "@/layout/component/Footer.vue";
import {pageTitle} from '@/store/PageTitle'

const page_name = reactive(computed(() => pageTitle().pageName))

</script>

<style>
.form-group.required > label[class*="form-label-"]:after {
    content: "*";
    color: red;
}
</style>

<style scoped>
.navbar-vertical-collapsed-hide-shadow {
    box-shadow: none !important;
}

</style>
