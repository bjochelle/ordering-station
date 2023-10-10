<template>
    <div class="container pb-lg-9 pb-xl-2">
        <div class="row g-3">
            <div class="col-xxl-2 col-xl-3">
                <aside class="scrollbar-overlay font-sans-serif p-4 p-xl-3 ps-xl-0 offcanvas offcanvas-start offcanvas-filter-sidebar" tabindex="-1" id="filterOffcanvas" aria-labelledby="filterOffcanvasLabel" data-simplebar="init"><div class="simplebar-wrapper" style="margin: -16px -16px -16px 0px;"><div class="simplebar-height-auto-observer-wrapper"><div class="simplebar-height-auto-observer"></div></div><div class="simplebar-mask"><div class="simplebar-offset ps-3" style="right: 0px; bottom: 0px;"><div class="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content" style="height: 100%; overflow: hidden scroll;"><div class="simplebar-content" style="padding: 16px 16px 16px 0px;">
                    <div class="d-flex flex-between-center">
                        <div class="d-flex gap-2 flex-xl-grow-1 align-items-center justify-content-xl-between">
                            <h5 class="mb-0 text-700 d-flex align-items-center" id="filterOffcanvasLabel">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-filter" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227z"></path>
                                </svg>
                                <span>Filter</span></h5><button class="btn btn-sm btn-outline-secondary">Reset</button>
                        </div><button class="btn-close text-reset d-xl-none shadow-none" type="button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="d-flex gap-2 flex-wrap my-3">

            <span class="badge bg-300 text-600 py-0">Design<button class="btn btn-link btn-sm p-0 text-600 ms-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M18 6l-12 12"></path>
                        <path d="M6 6l12 12"></path>
                      </svg>
            </button></span>
                    </div>
                    <ul class="list-unstyled">
                        <li class="border-bottom"><a class="nav-link collapse-indicator-plus fs--2 fw-medium text-600 py-3" data-bs-toggle="collapse" href="#category-collapse" aria-controls="category-collapse" aria-expanded="true">Category</a>
                            <div class="collapse show" id="category-collapse">
                                <ul class="list-unstyled">
                                    <li>
                                        <div class="form-check d-flex ps-0">
                                            <label class="form-check-label fs--1 flex-1 text-truncate" for="filter-category-free">
                                                Laptop</label>
                                            <input class="form-check-input" type="checkbox" checked="checked" name="free" id="filter-category-free"></div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li><a class="nav-link collapse-indicator-plus fs--2 fw-medium text-600 py-3" data-bs-toggle="collapse" href="#enrolled-courses-collapse" aria-controls="enrolled-courses-collapse" aria-expanded="false">Brand </a>
                            <div class="collapse" id="enrolled-courses-collapse">
                                <ul class="list-unstyled">
                                    <li>
                                        <div class="form-check d-flex ps-0"><label class="form-check-label fs--1 flex-1 text-truncate" for="filter-brand-1-show">Brand 1</label><input class="form-check-input" type="checkbox" name="enrolled-courses" id="filter-brand-1-show"></div>
                                    </li>
                                    <li>
                                        <div class="form-check d-flex ps-0"><label class="form-check-label fs--1 flex-1 text-truncate" for="filter-enrolled-courses-show">Brand 2</label><input class="form-check-input" type="checkbox" name="enrolled-courses" id="filter-enrolled-courses-show"></div>
                                    </li>
                                    <li>
                                        <div class="form-check d-flex ps-0"><label class="form-check-label fs--1 flex-1 text-truncate" for="filter-enrolled-courses-don’t-show">Brand 3</label><input class="form-check-input" type="checkbox" name="enrolled-courses" id="filter-enrolled-courses-don’t-show"></div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div></div></div></div><div class="simplebar-placeholder" style="width: auto; height: 1047px;"></div></div><div class="simplebar-track simplebar-horizontal" style="visibility: hidden;"><div class="simplebar-scrollbar" style="width: 0px; display: none;"></div></div><div class="simplebar-track simplebar-vertical" style="visibility: visible;"><div class="simplebar-scrollbar" style="height: 719px; transform: translate3d(0px, 0px, 0px); display: block;"></div></div></aside>
            </div>
            <div class="col-xxl-10 col-xl-9" id="product-list">
                <div class="card mb-3">
                    <div class="card-body  pt-md-3">
                        <div class="row g-3 d-flex justify-content-between ">
                            <div class="col-1 col-xs-1 col-sm-1 d-xl-none"><button class="btn btn-sm p-0 btn-link position-relative" type="button" data-bs-toggle="offcanvas" data-bs-target="#filterOffcanvas" aria-controls="filterOffcanvas">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-filter" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227z"></path>
                                </svg>
                            </button></div>
                            <div class="col-11 col-xs-11 col-sm-11  col-lg-5">
                                <form class="position-relative">
                                    <input class="form-control form-control-sm search-input lh-1 rounded-2 ps-4" type="search" placeholder="Search..." aria-label="Search"
                                    v-model="table.search">
                                    <div class="position-absolute top-50 start-0 translate-middle-y ms-2"><svg class="svg-inline--fa fa-search fa-w-16 text-400 fs--1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg><!-- <span class="fas fa-search text-400 fs--1"></span> Font Awesome fontawesome.com --></div>
                                </form>
                            </div>
                            <div class="col-12 col-xs-12 col-sm-12 col-lg-6 position-sm-relative  top-0 end-0 me-3 me-sm-0 p-0">
                                <div class="row g-0 g-md-3 justify-content-end">
                                    <div class="col-auto">
                                        <form class="row gx-2">
                                            <div class="col-auto d-none d-lg-block"><small class="fw-semi-bold">Sort by:</small></div>
                                            <div class="col-auto">
                                                <select class="form-select form-select-sm" aria-label="Bulk actions"
                                                v-model="table.currentSort">
                                                <option value="eff_to">Latest</option>
                                                <option value="item_desc">Name</option>
                                                <option value="regular_price">Price</option>
                                            </select></div>
                                            <div class="col-auto d-none d-lg-block"><small class="fw-semi-bold">Per Page:</small></div>
                                            <div class="col-auto">
                                                <select class="form-select form-select-sm" aria-label="Bulk actions"
                                                v-model="table.currentPage">
                                                <option v-for="page in showPage">{{ page }}</option>
                                            </select></div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mb-3 g-3">
<!--                    <article class="col-md-4 col-xxl-3" @click="goToProductDetails(item.item_id,item.item_desc)"-->
<!--                    v-for="item in promo_items.data">-->
<!--                        <div class="card h-100 overflow-hidden">-->
<!--                            <div class="card-body p-0 d-flex flex-column justify-content-between">-->
<!--                                <div>-->
<!--                                    <div class="text-center text-white bold">-->
<!--                                        <img class="w-100 h-100 fit-cover"-->
<!--                                        loading="lazy"-->
<!--                                        :src="buildImageSrc(item.image_name,'product_thumb')" alt="">-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                                <div class="p-3">-->
<!--                                    <h5 class="fs-0">-->
<!--                                        <span class="text-dark">{{ item.item_desc }}</span>-->
<!--                                    </h5>-->
<!--                                    <p class="fs&#45;&#45;1 mb-3">-->
<!--                                        <span class="text-500">{{ item.inv_dim1 }} &amp; {{ item.inv_dim2 }}</span>-->
<!--                                    </p>-->
<!--                                    <h5 class="fs-md-2 text-warning mb-0 d-flex align-items-center mb-3">-->
<!--                                        SGD {{ item.regular_price }}<del class="ml-2 fs&#45;&#45;1 text-500">SGD {{ item.mbr_price }} </del>-->
<!--                                    </h5>-->

<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </article>-->
                    <div v-if="!promo_items.data" class="row mb-3 g-3"
                         @click="goToProductDetails('0194253749462','apple-iphone-14-plus-512gb-yellow0')">
                        <article class="col-md-4 col-xxl-3" v-for="i in 12">
                        <div class="card h-100 overflow-hidden shadow">
                            <div class="card-body p-0 d-flex flex-column justify-content-between" style="border: 1px solid #E0E0E0;">
                                <div class=" text-center  text-white bold skeleton-box skeleton-img" ></div>
                                <div class="p-3 pb-0 mb-2 skeleton-details">
                                    <h6 class="fs-1 d-flex skeleton-box"> </h6>
                                    <h5 class="fs-1 d-flex skeleton-box w-50"> </h5>
                                </div>
                            </div>
                        </div>
                        </article>
                    </div>



                </div>

                <div class="card">
                    <div class="card-body">
                        <div class="row g-3 flex-center justify-content-md-between">
                            <div class="col-auto">
                                <p class="text-font">Showing {{ promo_items.from || 0 }} to {{ promo_items.to || 0 }} of
                                    {{ promo_items.total || 0 }}
                                    entries</p>
                            </div>
                            <div class="col-auto">

                                <Bootstrap5Pagination :data="promo_items" :limit="3" :show-disabled="true" align="right" size="small"
                                                        @pagination-change-page="dataTable">
                                    <template #prev-nav class="page-link">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="20" height="20" viewBox="0 0 24 24" stroke-width="1" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M15 6l-6 6l6 6" />
                                    </svg>
                                    </template>


                                    <template #next-nav class="page-link">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right" width="20" height="20" viewBox="0 0 24 24" stroke-width="1" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M9 6l6 6l-6 6" />
                                    </svg>
                                    </template>
                                </Bootstrap5Pagination>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>



</template>

<script setup>
import {ref, onBeforeUnmount, onMounted, reactive,watch} from "vue";
import {useErrorStore} from "@/store/Error";
import {useRoute, useRouter} from "vue-router";
import {usePromoItemStore} from "@/store/Promo";
import {storeToRefs} from "pinia";
import {Bootstrap5Pagination} from 'laravel-vue-pagination';

const promoItemStore = usePromoItemStore()
const error = useErrorStore();

const route = useRoute();
const router = useRouter();
const {promo_items} = storeToRefs(promoItemStore)//job variable from store
const {fetchPromoItem} = promoItemStore; //job methods from store

const table = reactive({
    currentSort: 'eff_to',
    currentSortDir: 'asc',
    search: '',
    currentPage: '12',
    sortClassActive: {
        'activeDesc': false,
        'activeAsc': true
    },
    show_disabled_job: false
})
const showPage = ['12', '24', '48']

let pages = {}

let isShownModal = ref(false);
const product_data = ref('');


const goToProductDetails = async(id,name) => {
    await router.push({
        name: "ProductDetails",
        params: {'id': id,'name': name}
    });

}

const buildImageSrc = (src, type = '') =>  {
            if (src.substr(0, 4) === 'http')
              return src;
            else {
              if (type == 'product_thumb')
                return 'https://cdn.hachi.tech/assets/images/product_images_thumb/'+ src
              else if (type == 'product_image')
                return 'https://cdn.hachi.tech/assets/images/product_images/' + src
              else
                return 'https://cdn.hachi.tech/' + src;
            }
          };


const dataTable = _.debounce(function (page) {

if (typeof page === 'undefined') {
    pages = 1;
}
pages = page;

fetchPromoItem(table, pages);
}, 800);

 watch(
    () => [table.search,table.currentPage, table.currentSort],
    async (newValue) => {
        if (newValue[0].length) { // search
            dataTable(table,pages);
        } else {
            let query = await Object.assign({}, route.query);
            delete query.search;
            await router.replace({query});
            dataTable(table,pages);

        }

    }
)


onMounted(() => {
 //    dataTable(table,pages);
})


onBeforeUnmount(() => {
    error.$reset()
    promoItemStore.$reset();
})

</script>

<style lang="scss" scoped>

article:hover{
 cursor: pointer;
}

@media  screen and (max-width: 600px) {
    #product-list {
        position: absolute;
    }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media  screen and (min-width: 600px) {
    #product-list {
        position: absolute;
    }
}

/* Medium devices (landscape tablets, 768px and up) */
@media  screen and (min-width: 768px) {
    #product-list{
        position: absolute;
    }
}

/* Large devices (laptops/desktops, 992px and up) */
@media  screen and (min-width: 992px) {
    #product-list{
        position: absolute;
    }
}

@media  screen and (min-width: 1200px) {
    #product-list{
        position: relative;
    }
}


</style>
