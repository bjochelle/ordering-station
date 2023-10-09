<template>
    <div class="container pb-lg-9 pb-xl-6">
        <div class="row g-3">
            <div class="card mb-3">
                <div class="card-body">
                    <div class="row">
                        <div class="col-lg-6 mb-4 mb-lg-0">
                            <div class="h-100 fit-cover">
                                <div id="carousel-indicators-thumb" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                    <div class="carousel-indicators carousel-indicators-thumb">
                                        <button type="button" data-bs-target="#carousel-indicators-thumb" data-bs-slide-to="0" class="ratio ratio-4x3"
                                                :style="{ backgroundImage: `url(${img_1})` }"></button>
                                        <button type="button" data-bs-target="#carousel-indicators-thumb" data-bs-slide-to="1" class="ratio ratio-4x3 active"
                                                :style="{ backgroundImage: `url(${img_2})` }"></button>
                                    </div>
                                    <div class="carousel-inner">
                                        <div class="carousel-item">
                                            <img class="d-block w-100" alt="" :src="img_1">
                                        </div>
                                        <div class="carousel-item active">
                                            <img class="d-block w-100 " alt="" :src="img_2">
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="col-lg-6 col-md-6">
                            <h5>
                                {{ item_details.item_desc }}
                            </h5>

                            <div v-if="price_valid" class="product-detail" :class="(price_valid) ? '' : 'price-transparent'">
            <div class="prices">
              <span>{{ showPriceTag }} {{ showUnitPrice | amount }}</span>
              <span class="text-red-700 text-sm" v-if="showRebate > 0">+ Get V{{ showRebate | amount('$') }}&nbsp;</span>
              <span>
                <i v-if="widgetContent.prices.regular_price > widgetContent.prices.unit_price">U.P. {{
                  widgetContent.prices.regular_price | amount
                }} &nbsp;</i>
                <p class="IPPMsg text-sm" v-if="showUnitPrice >= 500">0% interest instalment plan (up to 24 months) for
                  selected products above $500</p>
                <!-- removed v_redemption link -->
              </span>
              <span v-if="price_valid && getGuestPromoText" class="text-red-700 text-sm"
                v-html="getGuestPromoText"></span>
            </div>

            <rating-stars :item-id="widgetContent.item_id" />
          </div>
          
                            <p class="fs--1">
                                Testing conducted by Apple in October 2018 using preproduction 2.9GHz 6‑core
                                Intel Core i9‑based 15-inch MacBook Pro systems with Radeon Pro Vega 20
                                graphics, and shipping 2.9GHz 6‑core Intel Core i9‑based 15‑inch MacBook Pro
                                systems with Radeon Pro 560X graphics, both configured with 32GB of RAM and 4TB
                                SSD.
                            </p>
                            <h4 class="d-flex align-items-center">
                                <span class="text-warning mr-2">SGD 1200</span><span class="mr-1 fs--1 text-500"><del class="mr-1">SGD 2400</del><strong>-50%</strong></span>
                            </h4>
                            <p class="fs--1">Stock: <strong class="text-success">Available</strong></p>
                            <p class="fs--1 mb-3">
                                Tags: <a class="ml-2" href="#!">Computer,</a><a class="ml-1" href="#!">Mac Book,</a><a class="ml-1" href="#!">Mac Book Pro,</a><a class="ml-1" href="#!">Laptop</a>
                            </p>
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
                                    <li class="nav-item" role="presentation"><a class="nav-link ps-0" id="whats-in-the-box-tab" data-bs-toggle="tab" href="#tab-whats-in-the-box" role="tab" aria-controls="tab-description" aria-selected="true">What's in the box</a></li>
                                    <li class="nav-item" role="presentation"><a class="nav-link ps-0 active" id="description-tab" data-bs-toggle="tab" href="#tab-description" role="tab" aria-controls="tab-description" aria-selected="true">Description</a></li>
                                    <li class="nav-item" role="presentation"><a class="nav-link px-2 px-md-3" id="recommendation-tab" data-bs-toggle="tab" href="#tab-recommendation" role="tab" aria-controls="tab-recommendation" aria-selected="false" tabindex="-1">Recommendation</a></li>
                                </ul>
                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade" id="tab-whats-in-the-box" role="tabpanel" aria-labelledby="whats-in-the-box-tab">
                                        <div class="mt-3">
                                            <img class="rounded-1 w-100 fit-cover" src="../../../../../../../images/products/1.jpg" alt=""
                                                 style="height: 500px;">
                                        </div>
                                    </div>

                                    <div class="tab-pane fade active show" id="tab-description" role="tabpanel" aria-labelledby="description-tab">
                                        <div class="mt-3">
                                            <p>
                                                Over the years, Apple has built a reputation for releasing its products
                                                with a lot of fanfare – but that didn’t exactly happen for the MacBook Pro
                                                2018. Rather, Apple’s latest pro laptop experienced a subdued launch, in
                                                spite of it offering a notable spec upgrade over the 2017 model – along
                                                with an improved keyboard. And, as with previous generations the 15-inch
                                                MacBook Pro arrives alongside a 13-inch model.
                                            </p>
                                            <p>
                                                Apple still loves the MacBook Pro though, despite the quiet release. This
                                                is because, while the iPhone XS and iPad, along with the 12-inch MacBook,
                                                are aimed at everyday consumers, the MacBook Pro has always aimed at the
                                                creative and professional audience. This new MacBook Pro brings a level of
                                                performance (and price) unlike its more consumer-oriented devices.
                                            </p>
                                            <p>
                                                Still, Apple wants mainstream users to buy the MacBook Pro, too. So, if
                                                you’re just looking for the most powerful MacBook on the market, you’ll
                                                love this new MacBook Pro. Just keep in mind that, while the keyboard has
                                                been updated, there are still some issues with it.
                                            </p>
                                            <p>
                                                There’s enough of a difference between the two sizes when it comes to
                                                performance to warrant two separate reviews, and here we’ll be looking at
                                                how the flagship 15-inch MacBook Pro performs in 2019.
                                            </p>
                                            <p>
                                                It's build quality and design is batter than elit. Numquam excepturi a
                                                debitis, sint voluptates, nam odit vel delectus id repellendus vero
                                                reprehenderit quidem totam praesentium vitae nesciunt deserunt. Sint,
                                                veniam?
                                            </p>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="tab-recommendation" role="tabpanel" aria-labelledby="recommendation-tab">
                                        <div class="row my-3">


                                            <div class="swiper px-5">
                                                <div class="swiper-wrapper">
                                                    <div class="swiper-slide p-2">
                                                        <div class="card h-100  overflow-hidden shadow">
                                                        <div class="text-center text-white bold">
                                                            <img class="w-100 h-100 fit-cover " :src="img_1" alt="" loading="lazy"/>
                                                        </div>
                                                            <div class="p-3">
                                                                <h6 class="fs-0">
                                                            <span class="text-dark">Apple iMac Pro (27-inch with Retina 5K Display, 3.0GHz 10-core Intel
                                                                Xeon W, 1TB SSD)</span>
                                                                </h6>
                                                                <p class="fs--1 mb-3">
                                                                    <span class="text-500">Computer &amp; Accessories</span>
                                                                </p>
                                                                <h6 class="fs-md-1 text-warning mb-0 d-flex align-items-center mb-3">
                                                                    SGD 1199.5<del class="ml-2 fs--1 text-500">SGD 2399 </del>
                                                                </h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="swiper-slide p-2">
                                                        <div class="card h-100 overflow-hidden shadow">
                                                            <div class="card-body p-0 d-flex flex-column justify-content-between " style="border: 1px solid #E0E0E0;">
                                                                <div class=" text-center  text-white bold skeleton-box skeleton-img" ></div>
                                                                <div class="p-3 pb-0 mb-2 skeleton-details">
                                                                    <h6 class="fs-1 d-flex skeleton-box"> </h6>
                                                                    <h5 class="fs-1 d-flex skeleton-box w-50"> </h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="swiper-slide p-2">
                                                        <div class="card h-100 overflow-hidden shadow">
                                                            <div class="card-body p-0 d-flex flex-column justify-content-between " style="border: 1px solid #E0E0E0;">
                                                                <div class=" text-center  text-white bold skeleton-box skeleton-img" ></div>
                                                                <div class="p-3 pb-0 mb-2 skeleton-details">
                                                                    <h6 class="fs-1 d-flex skeleton-box"> </h6>
                                                                    <h5 class="fs-1 d-flex skeleton-box w-50"> </h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="swiper-slide p-2">
                                                        <div class="card h-100 overflow-hidden shadow">
                                                            <div class="card-body p-0 d-flex flex-column justify-content-between " style="border: 1px solid #E0E0E0;">
                                                                <div class=" text-center  text-white bold skeleton-box skeleton-img" ></div>
                                                                <div class="p-3 pb-0 mb-2 skeleton-details">
                                                                    <h6 class="fs-1 d-flex skeleton-box"> </h6>
                                                                    <h5 class="fs-1 d-flex skeleton-box w-50"> </h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="swiper-slide p-2">
                                                        <div class="card h-100 overflow-hidden shadow">
                                                            <div class="card-body p-0 d-flex flex-column justify-content-between " style="border: 1px solid #E0E0E0;">
                                                                <div class=" text-center  text-white bold skeleton-box skeleton-img" ></div>
                                                                <div class="p-3 pb-0 mb-2 skeleton-details">
                                                                    <h6 class="fs-1 d-flex skeleton-box"> </h6>
                                                                    <h5 class="fs-1 d-flex skeleton-box w-50"> </h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="swiper-slide p-2">
                                                        <div class="card h-100 overflow-hidden shadow">
                                                            <div class="card-body p-0 d-flex flex-column justify-content-between " style="border: 1px solid #E0E0E0;">
                                                                <div class=" text-center  text-white bold skeleton-box skeleton-img" ></div>
                                                                <div class="p-3 pb-0 mb-2 skeleton-details">
                                                                    <h6 class="fs-1 d-flex skeleton-box"> </h6>
                                                                    <h5 class="fs-1 d-flex skeleton-box w-50"> </h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- If we need pagination -->
                                                <div class="swiper-pagination"></div>
                                                <div class="swiper-nav">
                                                <div class="swiper-button-next swiper-button-white"></div>
                                                <div class="swiper-button-prev swiper-button-white"></div>
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
        </div>
    </div>
</template>

<script setup>
import VueSlickCarousel from 'vue-slick-carousel'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

import {ref, onBeforeUnmount, onMounted, reactive,watch} from "vue";


import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

import img_1 from '@/../images/products/1.jpg';
import img_2 from '@/../images/products/1-3.jpg';

import {useErrorStore} from "@/store/Error";
import {useRoute, useRouter} from "vue-router";
import {usePromoItemStore} from "@/store/Promo";
import {storeToRefs} from "pinia";

const promoItemStore = usePromoItemStore()
const error = useErrorStore();

const route = useRoute();
const router = useRouter();
const {item_details,price_valid} = storeToRefs(promoItemStore)//job variable from store
const {fetchProductDetails} = promoItemStore; //job methods from store



const quantity = ref(0)

const increment = () => {
    quantity.value += 1;
}

const decrement = () => {
    if (quantity.value > 0) {
        quantity.value--;
    }
}

onMounted(async() => {
    const id = route.params['id'];
    await fetchProductDetails(id);
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
