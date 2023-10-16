<script setup>
import VueCountdown from '@chenfengyuan/vue-countdown';
import {useRoute, useRouter} from "vue-router";
import {usePaymentStore} from "@/store/Payment";
const promoItemStore = usePaymentStore()
const {payment2c2p} = promoItemStore; //payment methods from store
const route = useRoute();
const router = useRouter();

const payOrder = async(force = false) => {
    payment2c2p();

}
const dueOnCountdownEnd = async() => {
    console.log("sdsds")
    // Delete order data
}

</script>

<template>
    <div class="container  pb-lg-9 pb-xl-6 ">
        <div class="row g-3">
            <div class="col-sm-12 col-lg-6 offset-lg-3 order-timeout-counter text-center bg-soft-danger p-3">
                <p class="order-timeout-counter-text h6 text-danger mb-1 ">
                    Order will be deleted if payment is not made within
                </p>
            <vue-countdown :time="1 * 60 * 1000" v-slot="{  minutes, seconds }" class="text-black h6 fw-bold"
                           @end="dueOnCountdownEnd">
                {{ minutes }} : {{ seconds }}
                <br>
                <span> min &nbsp; sec</span>
            </vue-countdown>
            </div>

            <div class="col-xl-4 order-xl-1">
                <div class="card">
                    <div class="card-header bg-light btn-reveal-trigger d-flex flex-between-center">
                        <h5 class="mb-0">Order Summary</h5><a class="btn btn-link btn-sm btn-reveal text-600" href="#">
                        <svg class="svg-inline--fa fa-pencil-alt "
                             width="18" height="18" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pencil-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"></path></svg><!-- <span class="fas fa-pencil-alt"></span> Font Awesome fontawesome.com --></a>
                    </div>
                    <div class="card-body">
                        <table class="table table-borderless fs--1 mb-0">
                            <tbody><tr class="border-bottom">
                                <th class="ps-0 pt-0">Apple MacBook Pro 15" x 1<div class="text-400 fw-normal fs--2">Z0V20008N: 2.9GHz 6-core 8th-Gen Intel Core i9, 32GB RAM</div>
                                </th>
                                <th class="pe-0 text-end pt-0">$1345</th>
                            </tr>
                            <tr class="border-bottom">
                                <th class="ps-0">Apple iMac Pro x 1<div class="text-400 fw-normal fs--2">27-inch with Retina 5K Display, 3.0GHz 10-core Intel Xeon W, 1TB</div>
                                </th>
                                <th class="pe-0 text-end">$2010</th>
                            </tr>
                            <tr class="border-bottom">
                                <th class="ps-0">Subtotal</th>
                                <th class="pe-0 text-end">$3355</th>
                            </tr>

                            </tbody></table>
                    </div>
                    <div class="card-footer d-flex justify-content-between bg-light">
                        <div class="fw-semi-bold">Payable Total</div>
                        <div class="fw-bold">$3320</div>
                    </div>
                </div>
            </div>
            <div class="col-xl-8">
                <div class="card">
                    <div class="card-header bg-light">
                        <h5 class="mb-0">Payment Method</h5>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="payOrder(false)"
                        id="2c2p-payment-form'">
                            <div class="form-check mb-0">
                                <input class="form-check-input" type="radio" value="" id="credit-card" checked="checked" name="payment-method"><label class="form-check-label mb-2 fs-1" for="credit-card">Credit Card</label></div>
                            <div class="row gx-0 ps-2 mb-2">
                                <div class="col-sm-12 px-3">
                                    <div class="mb-3"><label class="form-label ls text-uppercase text-600 fw-semi-bold mb-0" for="inputNumber">Card Number</label><input class="form-control" id="inputNumber" type="text" placeholder="•••• •••• •••• ••••"></div>
                                    <div class="row align-items-center">
                                        <div class="col-6"><label class="form-label ls text-uppercase text-600 fw-semi-bold mb-0">Exp Date</label><input class="form-control" type="text" placeholder="mm/yyyy"></div>
                                        <div class="col-6"><label class="form-label ls text-uppercase text-600 fw-semi-bold mb-0">CVV<a class="d-inline-block" href="#" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Card verification value" data-bs-original-title="Card verification value">
                                            <svg class="svg-inline--fa fa-question-circle  ms-2"
                                                 width="18" height="18"
                                                 aria-hidden="true" focusable="false" data-prefix="fa" data-icon="question-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"></path></svg><!-- <span class="fa fa-question-circle ms-2"></span> Font Awesome fontawesome.com --></a></label><input class="form-control" type="text" placeholder="123" maxlength="3" pattern="[0-9]{3}"></div>
                                    </div>
                                    <div class="mt-3">
                                        <label class="form-label ls text-uppercase text-600 fw-semi-bold mb-0" for="inputNumber">Full Name of the card</label>
                                        <input class="form-control" id="inputNumber" type="text" placeholder=""></div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-5 col-xl-12 col-xxl-5 ps-lg-4 ps-xl-2 ps-xxl-5 text-center text-md-start text-xl-center text-xxl-start">
                                    <div class="border-bottom border-dashed d-block d-md-none d-xl-block d-xxl-none my-4"></div>
                                    <button class="btn btn-success mt-3 mb-3 px-5" type="submit">Secure Pay</button>
                                    <p class="fs--1 mt-3 mb-0">By clicking <strong>Confirm &amp; Pay </strong>button you have read and  agree to the <a href="#/online-sales-terms'">Online Sales Terms</a></p>

                                </div>
                            </div>
                        </form>

<!--                        <Alert type="warning" class="payment-tips">-->
<!--                            <p class="text-sm font-bold">-->
<!--                                Please verify the purchase information and select your mode of payment below:-->
<!--                            </p>-->
<!--                            <template slot="desc">-->
<!--                                <p class="text-xs">- Ensure your pop up blocker is disabled before proceeding.</p>-->
<!--                                <p class="text-xs">-->
<!--                                    - Do not refresh or navigate the back button while payment is in process..</p>-->
<!--                            </template>-->
<!--                        </Alert>-->

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
