<template>
    <div class="container pb-lg-9 pb-xl-6 pb-6" v-if="item_details">
        <div class="row g-3">
            <div class="card mb-3">
                <div class="card-body">
                    <div class="row">
                        <h5>
                            {{ item_details.item_desc }}
                        </h5>
                        <div class="product-fulfilled">{{ showFulfillBy }}</div>

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

                            <div v-if="price_valid" class="product-detail" :class="(price_valid) ? '' : 'price-transparent'">
            <div class="prices">

              <span>{{ showPriceTag }}     {{ formatCurrency(showUnitPrice)  }}
              </span> <br>
              <span class="text-danger h6" v-if="item_details && item_details.prices && item_details.prices.unit_rebate_points > 0">+ Get ${{ item_details.prices.unit_rebate_amount}} Cashback</span>
<!--              <span>-->
<!--                <i v-if="widgetContent.prices.regular_price > widgetContent.prices.unit_price">U.P. {{-->
<!--                  widgetContent.prices.regular_price | amount-->
<!--                }} &nbsp;</i>-->
<!--                <p class="IPPMsg text-sm" v-if="showUnitPrice >= 500">0% interest instalment plan (up to 24 months) for-->
<!--                  selected products above $500</p>-->
<!--                &lt;!&ndash; removed v_redemption link &ndash;&gt;-->
<!--              </span>-->
<!--              <span v-if="price_valid && getGuestPromoText" class="text-red-700 text-sm"-->
<!--                v-html="getGuestPromoText"></span>-->
            </div>

<!--            <rating-stars :item-id="widgetContent.item_id" />-->
          </div>

                            <p class="fs--1">

                            </p>
                            <h4 class="d-flex align-items-center">
                                <span class="text-warning mr-2">SGD 1200</span><span class="mr-1 fs--1 text-500"><del class="mr-1">SGD 2400</del><strong>-50%</strong></span>
                            </h4>
                            <p class="fs--1">Stock: <strong class="text-success">Available</strong></p>

                            <div class="row">
                                <div class="col-auto pe-0">

                                    <div class="input-group input-group-sm" data-quantity="data-quantity">
                                        <button class="btn btn-sm btn-outline-secondary border-300 bg-soft-dark" data-field="input-quantity" data-type="minus"
                                        @click="decrement">-</button>
                                        <input class="form-control text-center input-quantity input-spin-none" type="number" min="0"
                                               aria-label="Quantity" style="max-width: 50px"
                                        v-model="quantity">
                                        <button class="btn btn-sm btn-outline-secondary border-300 bg-soft-dark" data-field="input-quantity" data-type="plus"
                                                @click="increment">+</button></div>
                                </div>
                                <div class="col-auto px-2 px-md-3"><a class="btn btn-sm btn-primary" href="#!">

                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart-plus" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                        <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                                        <path d="M17 17h-11v-14h-2"></path>
                                        <path d="M6 5l6 .429m7.138 6.573l-.143 1h-13"></path>
                                        <path d="M15 6h6m-3 -3v6"></path>
                                    </svg>
                                    <span class="d-none d-sm-inline-block">Add To Cart</span></a></div>

                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="overflow-hidden mt-4">
                                <ul class="nav nav-tabs" id="myTab" role="tablist">
                                    <li class="nav-item" role="presentation" v-for="(desc,index) in descriptions" :key="index">
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
                                                <div class="overview_div_hachi" v-html="addWidthStyleIfImageExists(desc.body)"></div>
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
import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

import {ref, onBeforeUnmount, onMounted, reactive,watch} from "vue";
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

import img_1 from '@/../images/products/1.jpg';
import img_2 from '@/../images/products/1-3.jpg';

import {useErrorStore} from "@/store/Error";
import {useRoute, useRouter} from "vue-router";
import {usePromoItemStore} from "@/store/Promo";
import {formatCurrency} from "@/services/formatNumber";
import {storeToRefs} from "pinia";

const promoItemStore = usePromoItemStore()
const error = useErrorStore();

const route = useRoute();
const router = useRouter();
const {item_details,price_valid,descriptions,showPriceTag,
    showUnitPrice,showFulfillBy,firstDescription} = storeToRefs(promoItemStore)//job variable from store
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



const buildImageSrc = (src)=> {
      if (src.substr(0, 4) === 'http') {
        return src;
      }

      return 'https://cdn.hachi.tech/assets/images/product_images/' + src;
    }

onMounted(async() => {
    const id = route.params['id'];
    await fetchProductDetails(id);
    // await fetchDescription(id);
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        slidesPerView:5,
        pagination:false,
        loop: true,
        clickable:true,
        spaceBetween:10,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        allowSlidePrev: true,
        allowSlideNext: true,
        autoplay:false,
        cssMode:"true",
        breakpoints:{
            280: {
                slidesPerView: 1,
                    spaceBetween: 20
            },
            320: {
                slidesPerView: 1,
                    spaceBetween: 20
            },
            480: {
                slidesPerView: 2,
                    spaceBetween: 20
            },
            640: {
                slidesPerView: 3,
                    spaceBetween: 10
            },
            960: {
                slidesPerView: 5,
                    spaceBetween: 10
            }
        },
        effect:'crossFade'



    });
})

</script>

<style scoped>
.swiper-button-prev, .swiper-button-next {
    width: calc(var(--swiper-navigation-size) / 22 * 27);
}
</style>
