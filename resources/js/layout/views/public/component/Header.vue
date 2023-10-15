<script setup>
import {computed, onBeforeUnmount, onMounted, ref, watch,reactive} from "vue";
import {useRoute, useRouter} from "vue-router";
const route = useRoute();
const router = useRouter();
const  navbarDarkenOnScroll =ref(0);

import logo from '../../../../../images/logo.png';


const form_search = reactive({
    search: '',
    currentPage: '12',
})


const searchProduct = _.debounce(function () {
console.log(form_search,'form_search')

}, 800);

watch(
    () => [form_search.search],
    async (newValue) => {
        if (newValue[0].length) { // search
            searchProduct(form_search);
        } else {
            let query = await Object.assign({}, route.query);
            delete query.search;
            await router.replace({query});
            searchProduct(form_search);
        }
    }
)
</script>

<template>
    <nav class="navbar  navbar-expand-lg fixed-top navbar-light bg-white border-bottom border-primary border-2"
         data-navbar-darken-on-scroll="data-navbar-darken-on-scroll" style="background-image: none;" >
        <div class="container" id="nav" >
            <router-link :to="{ name: 'HomeIndex' }"  class="navbar-brand" href="#">
                <span class="text-white dark__text-white">
                    <img alt=""
                         class="me-2"
                         :src="logo"
                         width="100"/>
                </span>
            </router-link>
            <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarStandard" aria-controls="navbarStandard" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse scrollbar" id="navbarStandard">
                <ul class="navbar-nav navbar-nav-icons ms-auto flex-row align-items-center">
                    <li class="nav-item">
                        <div class="search-box" data-list="{&quot;valueNames&quot;:[&quot;title&quot;]}">
                            <form class="position-relative" data-bs-toggle="search" data-bs-display="static" aria-expanded="false">
                                <input class="form-control search-input fuzzy-search" type="search" placeholder="Search..." 
                                aria-label="Search"
                                v-model="form_search.search">
                                <svg class="svg-inline--fa fa-search  search-box-icon"
                                     width="18" height="18"
                                     aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg><!-- <span class="fas fa-search search-box-icon"></span> Font Awesome fontawesome.com -->
                            </form>
                            <div class="btn-close-falcon-container position-absolute end-0 top-50 translate-middle shadow-none" data-bs-dismiss="search"><button class="btn btn-link btn-close-falcon p-0" aria-label="Close"></button></div>

                        </div>
                    </li>
                    <li class="nav-item d-none d-sm-block">
                        <router-link :to="{ name: 'Cart' }" class="nav-link px-0 notification-indicator notification-indicator-danger notification-indicator-fill " tag="a">

                            <svg class="svg-inline--fa fa-shopping-cart fa-w-18" data-fa-transform="shrink-7"
                                 width="36" height="36"
                                 aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-cart" role="img" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 576 512" data-fa-i2svg=""><g transform="translate(288 256)"><g transform="translate(0, 0)  scale(0.5625, 0.5625)  rotate(0 0 0)">
                                <path fill="currentColor" d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z" transform="translate(-288 -256)"></path></g></g></svg><!-- <span class="fas fa-shopping-cart" data-fa-transform="shrink-7" style="font-size: 33px;"></span> Font Awesome fontawesome.com -->
                            <span class="notification-indicator-number ">1</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
#navbar .nav-item,.text-header{
    box-shadow: inset 0 0 0 0 #141c58;
    color: white;
    transition: color .5s ease-in-out, box-shadow .5s ease-in-out;
}

.text-subsidiaries:hover {
    box-shadow: inset 250px 0 0 0 #141c58;
    color: white;
}

#navbar .nav-item:hover {
    box-shadow: inset 250px 0 0 0 #141c58;
    color: white !important;
}

.text-header:hover {
    box-shadow: inset 700px 0 0 0 #141c58;
    color: white !important;
    cursor: pointer;
}
#navbar .nav-link:hover,text-header:hover,.nav-link:active {
    color: white !important;
}

.rotate-45{
    transform: rotate(45deg);
}



.dropdown-item.active, .dropdown-item:active{
    background: #BBDEFB;
}

.navbar-light #navbar .nav-link{
    color: black ;
    font-weight: 400;
}
</style>
