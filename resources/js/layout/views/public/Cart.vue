<script setup>
import {ref} from "vue";
import InputNumber from "@/layout/views/public/component/InputNumber.vue";
const items =ref([
    {
        'item_name' : 'Apple MacBook Pro 15" Z0V20008N: 2.9GHz 6-core 8th-Gen Intel Core i9, 32GB RAM',
        'qty' : 2,
        'price' : 1292,
        'image' : 'https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP776/sp776-mbp15touch-space.jpeg',
    },
    {
        'item_name' : 'Apple iMac Pro (27-inch with Retina 5K Display, 3.0GHz 10-core Intel Xeon W, 1TB SSD)',
        'qty' : 1,
        'price' : 2012,
        'image' : 'https://media.ldlc.com/r1600/ld/products/00/04/74/20/LD0004742070_2_0004808238_0004808264_0004808302.jpg',
    },
    {
        'item_name' : 'Apple iPad Air 2019 (3GB RAM, 128GB ROM, 8MP Main Camera)',
        'qty' : 2,
        'price' : 1024,
        'image' : 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-finish-select-gallery-202211-space-gray-wifi?wid=2560&hei=1440&fmt=p-jpg&qlt=95&.v=1670631471539',
    },
    {
        'item_name' : 'Apple iPhone XS Max (4GB RAM, 512GB ROM, 12MP Main Camera)',
        'qty' : 1,
        'price' : 990,
        'image' : 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-Xs-line-up-09122018_inline.jpg.large.jpg',
    },
    {
        'item_name' : 'Apple Watch Series 4 44mm GPS Only',
        'qty' : 1,
        'price' : 400,
        'image' : 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/s9-case-unselect-gallery-1-202309_FMT_WHH?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1693524702398',
    },
    {
        'item_name' : 'Nikon D3200 Digital DSLR Camera',
        'qty' : 2,
        'price' : 2398,
        'image' : 'https://cdn-4.nikon-cdn.com/e/Q5NM96RZZo-YRYNeYvAi9beHK4x3L-8kHbA0MlEAVn2W1yKXB-B_2zEtiAgzBX5TShX8lUMVnxSs0ATXqRnkGA==/Views/25492_D3200_front.png',
    },
    {
        'item_name' : 'Canon Standard Zoom Lens',
        'qty' : 1,
        'price' : 400,
        'image' : 'https://media.the-digital-picture.com/Images/Review/Canon-EF-24-70mm-f-4-L-IS-USM-Lens.jpg',
    },
])

const increment = (index) => {
    //add async to update qty in backend
    items.value[index].qty += 1;
}

const decrement = (index) => {
    if (items.value[index].qty  > 0) {
        items.value[index].qty --;
    }
}

</script>

<template>
    <div class="container pb-lg-9 pb-xl-6">
        <div class="row g-3">
            <div class="card">
                <div class="card-header">
                    <div class="row justify-content-between">
                        <div class="col-md-auto">
                            <h5 class="mb-3 mb-md-0">Shopping Cart (7 Items)</h5>
                        </div>
                        <div class="col-md-auto"><a class="btn btn-sm btn-outline-secondary border-300 me-2 shadow-none" href="../../app/e-commerce/product/product-list.html">
                            <svg class="svg-inline--fa fa-chevron-left fa-w-10 me-1"
                                 width="24" height="24" data-fa-transform="shrink-4" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg="" style="transform-origin: 0.3125em 0.5em;"><g transform="translate(160 256)"><g transform="translate(0, 0)  scale(0.75, 0.75)  rotate(0 0 0)"><path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" transform="translate(-160 -256)"></path></g></g></svg>
                            <!-- <span class="fas fa-chevron-left me-1" data-fa-transform="shrink-4"></span> Font Awesome fontawesome.com -->Continue Shopping</a>
                            <router-link :to="{ name: 'Checkout' }"  class="btn btn-sm btn-primary" >Checkout</router-link></div>
                    </div>
                </div>
                <div class="card-body p-0">
                    <div class="row gx-card mx-0 bg-200 text-900 fs--1 fw-semi-bold">
                        <div class="col-9 col-md-8 py-2">Name</div>
                        <div class="col-3 col-md-4">
                            <div class="row">
                                <div class="col-md-8 py-2 d-none d-md-block text-center">Quantity</div>
                                <div class="col-12 col-md-4 text-end py-2">Price</div>
                            </div>
                        </div>
                    </div>
                    <div class="row gx-card mx-0 align-items-center border-bottom border-200"
                    v-for="(item,index) in items">
                        <div class="col-8 py-3">
                            <div class="d-flex align-items-center">
                                <router-link
                                    :to="{ name: 'ProductDetails',params:{name:item.item_name}}">
                                <img class="img-fluid rounded-1 me-3 d-none d-md-block" :src="item.image" alt="" width="60">
                                </router-link >
                                <div class="flex-1">
                                    <h5 class="fs-0">
                                        <router-link
                                            :to="{ name: 'ProductDetails',params:{name:item.item_name}}"
                                            class="text-900"
                                        >
                                        {{item.item_name}}</router-link></h5>
                                    <div class="fs--2 fs-md--1"><a class="text-danger" href="#!">Remove</a></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-4 py-3">
                            <div class="row align-items-center">
                                <div class="col-md-8 d-flex justify-content-end justify-content-md-center order-1 order-md-0">
                                    <div>
                                        <div class="input-group input-group-sm" data-quantity="data-quantity">
                                            <button class="btn btn-sm btn-outline-secondary border-300 bg-soft-dark" data-field="input-quantity" data-type="minus"
                                                    @click="decrement(index)">-</button>
                                            <input class="form-control text-center input-quantity input-spin-none" type="number" min="0"
                                                   aria-label="Quantity" style="max-width: 50px"
                                                   v-model="item.qty"> <!-- Use localQuantity here -->
                                            <button class="btn btn-sm btn-outline-secondary border-300 bg-soft-dark" data-field="input-quantity" data-type="plus"
                                                    @click="increment(index)">+</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 text-end ps-0 order-0 order-md-1 mb-2 mb-md-0 text-600">SGD {{item.price}}</div>
                            </div>
                        </div>
                    </div>

                    <div class="row fw-bold gx-card mx-0">
                        <div class="col-9 col-md-8 py-2 text-end text-900">Total</div>
                        <div class="col px-0">
                            <div class="row gx-card mx-0">
                                <div class="col-md-8 py-2 d-none d-md-block text-center">7 (items)</div>
                                <div class="col-12 col-md-4 text-end py-2">SGD 8516</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer bg-light d-flex justify-content-end">
                    <form class="me-3">

                    </form><router-link :to="{ name: 'Checkout' }"  class="btn btn-sm btn-primary">Checkout</router-link>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>

</style>
