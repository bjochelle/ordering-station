<template>
    <div class="container pb-lg-9 pb-xl-6 pb-6" v-if="item_details">
        <div class="row g-3">
            <ol class="breadcrumb" v-if="item_details.online_settings">
                <template v-for="(map, index) in item_details.online_settings.category_map" :key="index">
                    <li class="breadcrumb-item" :class="{ 'active': index === item_details.online_settings.category_map.length - 1 }">
                        <template v-if="index !== item_details.online_settings.category_map.length - 1">
                            <a href="#">{{ map.name }}</a>
                        </template>
                        <template v-else>
                            <span>{{ map.name }}</span>
                        </template>
                    </li>
                </template>
            </ol>

            <div class="card mb-3">
                <div class="card-body">
                    <div class="row">
                        <h5>
                            {{ item_details.item_desc }}
                        </h5>
                        <div class="product-fulfilled h-6 mb-3">{{ showFulfillBy }}</div>

                        <div class="col-lg-6 mb-4 mb-lg-0">

                            <Carousel id="gallery"
                                      :autoplay="2000"
                                      :transition="500"
                                      class="p-0" :items-to-show="1" :wrap-around="false" v-model="currentSlide">
                                <Slide v-for="(slide,index) in item_details.images" :key="index">
                                    <div class="carousel__item">
                                        <div class="text-center text-white bold">
                                            <img class="w-100 h-100 fit-cover"
                                                 loading="lazy"
                                                 :src="buildImageSrc(slide.src,'product_thumb')" alt="">
                                        </div>
                                    </div>
                                </Slide>
                            </Carousel>

                            <Carousel
                                id="thumbnails"
                                :items-to-show="4"
                                :wrap-around="true"
                                v-model="currentSlide"
                                ref="carousel"
                            >
                                <Slide v-for="(slide,index) in item_details.images" :key="slide">
                                    <div class="carousel__item" @click="slideTo(index - 1)">
                                        <div class="text-center text-white bold">
                                            <img class="w-100 h-100 fit-cover"
                                                 loading="lazy"
                                                 :src="buildImageSrc(slide.src,'product_thumb')" alt="">
                                        </div>
                                    </div>
                                </Slide>
                            </Carousel>

                        </div>
                        <div class="col-lg-6 col-md-6">

                            <div v-if="price_valid" class="product-detail"
                                 :class="(price_valid) ? '' : 'price-transparent'">
                                <div class="prices" v-if="item_details.prices">
                                    <span>{{ showPriceTag }} {{ formatCurrency(showUnitPrice) }} </span> <br>
                                    <span class="text-danger h6"
                                          v-if="item_details && item_details.prices && item_details.prices.unit_rebate_points > 0">
                                        + Get ${{ item_details.prices.unit_rebate_amount }} Cashback
                                    </span>
                                    <p>
                                    <span v-if="item_details.prices.regular_price > item_details.prices.unit_price">
                                        U.P. {{formatCurrency(item_details.prices.regular_price)}}
                                    </span> <br>
                                    <span class="IPPMsg h6 text-black-50" v-if="showUnitPrice >= 500">0% interest
                                        instalment plan (up to 24
                                        months) for
                                        selected products above $500</span>
                                    </p>
                                    <!--              <span v-if="price_valid && getGuestPromoText" class="text-red-700 text-sm"-->
                                    <!--                v-html="getGuestPromoText"></span>-->
                                </div>
                                <rating-stars :item-id="item_details.item_id" />
                            </div>

                            <p class="fs--1">

                            </p>
                            <div class="row"
                                 v-if="item_details.online_settings && item_details.online_settings.color_opt.length > 0">
                                <div class=" col-sm-3 text-sm" style="line-height: 32px;">
                                    <p class="fs--1">Colour </p>
                                </div>
                                <div class=" col-sm-9 m-0">
                                    <strong class="fw-bold">{{item_details.online_settings.color_id}}</strong><br>
                                    <div class="avatar avatar-2xl me-1" v-for="clr in item_details.color_settings">
                                        <img class="img-prototype"
                                             :class="clr.item_id === item_details.item_id ? 'border border-warning border-2' : 'border border-1 cursor-pointer'"
                                             v-lazy="buildImageSrc(clr.image_name, 'product_thumb')"
                                             @click="goToProductDetails(clr.item_id,clr.short_desc)">

                                    </div>
                                </div>
                            </div>
                            <div class="row"
                                 v-if="item_details.p_storage">
                                <div class=" col-sm-3 text-sm" style="line-height: 32px;">
                                    <p class="fs--1">Storage Capacity </p>
                                </div>
                                <div class=" col-sm-9 m-0">
                                    <strong class="fw-bold">
                                        <span v-if="item_details.p_storage.length > 0">{{ item_details.item_storage }}</span>
                                        <span v-else="" class="text-red-700">No other storage found</span>
                                    </strong><br>
                                    <template v-for="pclr in item_details.p_storage">
                                        <span v-if="pclr.inv_dim5 != 'NA'"
                                        class="me-1 p-1"
                                        :class="pclr.item_id === item_details.item_id ? 'border border-warning border-2' : 'border border-1 cursor-pointer'"
                                        @click="pclr.item_id != item_details.item_id && goToProductDetails(pclr.item_id, pclr.item_desc)">
                                        {{ pclr.inv_dim5 }}
                                        </span>
                                    </template>
                                </div>
                            </div>

                            <div class="row">

                                <div class="col-md-3 text-sm" style="line-height: 32px;">
                                    <p class="fs--1">Quantity: </p>
                                </div>
                                <div class="col-md-9 pe-0">

                                    <div class="input-group input-group-sm" data-quantity="data-quantity" style="height: 30px;">
                                        <button class="btn btn-sm btn-outline-secondary border-300 bg-soft-dark"
                                                data-field="input-quantity"
                                                data-type="minus"
                                                @click="decrement">-
                                        </button>
                                        <input class="form-control text-center input-quantity input-spin-none"
                                               type="number" min="0"
                                               aria-label="Quantity" style="max-width: 65px"
                                               v-model="quantity">
                                        <button class="btn btn-sm btn-outline-secondary border-300 bg-soft-dark"
                                                data-field="input-quantity"
                                                data-type="plus"
                                                @click="increment">+
                                        </button>
                                    </div>
                                </div>

                                <div class="mb-5 mt-5" v-if="price_valid">
                                    <!--PWP OR FLB-->
                                    <cart-options :itemId="item_details.item_id"
                                                  :cartOptions="cartOptions" :pwpOptions="item_details.pwp" :additionaDetails="item_details.additional"
                                                  ref="productPage" />
                                </div>

                                <div class="col-auto  mt-3 ">
                                    <a class="btn  btn-primary" href="#!">

                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         class="icon icon-tabler icon-tabler-shopping-cart-plus"
                                         width="20" height="20" viewBox="0 0 24 24" stroke-width="2"
                                         stroke="currentColor" fill="none"
                                         stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                        <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                        <path d="M17 17h-11v-14h-2"></path>
                                        <path d="M6 5l6 .429m7.138 6.573l-.143 1h-13"></path>
                                        <path d="M15 6h6m-3 -3v6"></path>
                                    </svg>
                                    <span class="">Add To Cart</span></a>
                                </div>



                                <div class="mb-12 mt-5" v-if="!price_valid">
                                    <i class="fas fa-spinner fa-pulse"></i> LOADING PRODUCT...
                                </div>

                                <div class="mt-2 mb-5" v-if="price_valid">
                                    <inventory-avail :itemId="item_details.item_id" :cartOptions="cartOptions" />
                                </div>
                            </div>
                        </div>

                        <div class="col-12">
                            <div class="overflow-hidden mt-4">
                                <ul class="nav nav-tabs" id="myTab" role="tablist">
                                    <li class="nav-item" role="presentation" v-for="(desc,index) in descriptions"
                                        :key="index">
                                        <a class="nav-link ps-0" id="whats-in-the-box-tab" data-bs-toggle="tab"
                                           :class="firstDescription === index ? 'active':''"
                                           :href="'#tab-' + desc.name" role="tab"
                                           :aria-controls="'tab-' + desc.name"
                                           aria-selected="true">{{ desc.name }}</a>
                                    </li>
                                </ul>
                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade"
                                         :id="'tab-' + desc.name"
                                         :aria-labelledby="desc.name + '-tab'"
                                         role="tabpanel"
                                         v-for="(desc,index)  in descriptions"
                                         :class="firstDescription === index ? 'active show':''">
                                        <div class="mt-3">
                                            <template v-if="'OVERVIEW'===index">
                                                <div class="overview_div_hachi"
                                                     v-html="addWidthStyleIfImageExists(desc.body)"></div>
                                            </template>
                                            <template v-else="">
                                                <p v-html="addWidthStyleIfImageExists(desc.body)"></p>
                                            </template>
                                        </div>
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
import {ref, onBeforeUnmount, onMounted, reactive,watch} from "vue";
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import InventoryAvail from './component/InventoryAvail.vue';
import CartOptions from './component/CartOptions.vue';

import {useErrorStore} from "@/store/Error";
import {useRoute, useRouter} from "vue-router";
import {usePromoItemStore} from "@/store/Promo";
import {formatCurrency} from "@/services/formatNumber";
import {storeToRefs} from "pinia";
import Template from "@/layout/Template.vue";
import RatingStars from "@/layout/views/public/component/RatingStars.vue";

import {useFullscreenLoader} from "@/store/loader";
const loaderStore = useFullscreenLoader()
let {fullscreen_loader} = storeToRefs(loaderStore)//job variable from store


const promoItemStore = usePromoItemStore()
const error = useErrorStore();

const route = useRoute();
const router = useRouter();
const {item_details,price_valid,descriptions,showPriceTag,
    showUnitPrice,showFulfillBy,firstDescription,cartOptions} = storeToRefs(promoItemStore)//job variable from store
const {fetchProductDetails,fetchDescription} = promoItemStore; //job methods from store

const quantity = ref(0)
const currentSlide = ref(0)

const slideTo = (val) => {
    currentSlide.value = val;
}

const increment = () => {
    quantity.value += 1;
}

const decrement = () => {
    if (quantity.value > 0) {
        quantity.value--;
    }
}

const addWidthStyleIfImageExists = (htmlContent)=>{
    // Define an array of element names to which you want to add the style attribute
    const elementsToAddStyleTo = ['img', 'iframe', 'video'];

    // Loop through each element name and add style="width: 100%;" if found in the HTML content
    elementsToAddStyleTo.forEach((elementName) => {
        const regex = new RegExp(`<${elementName}`, 'g');
        htmlContent = htmlContent.replace(regex, `<${elementName} style="width: 100%;"`);
    });

    return htmlContent;
}


const goToProductDetails = async(id,name) => {
    await router.push({
        name: "ProductDetails",
        params: {'id': id,'name': name}
    });
    fullscreen_loader.value =true;
    await fetchProductDetails(id);
    await fetchDescription(id);
    fullscreen_loader.value =false;

}

const buildImageSrc = (src)=> {
      if (src.substr(0, 4) === 'http') {
        return src;
      }
      return 'https://cdn.hachi.tech/assets/images/product_images/' + src;
    }

onMounted(async() => {
    fullscreen_loader.value =true;
    const id = route.params['id'];
    await fetchProductDetails(id);
     await fetchDescription(id);
    fullscreen_loader.value =false;
})

</script>

<style scoped>

</style>
