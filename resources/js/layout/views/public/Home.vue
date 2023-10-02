<template>
<div class="container-fluid mt-7">
    <div class="row">
        <div class="col-md-3">

        </div>
        <div class="col-md-9">
            <div class="content">
        <div class="card mb-3">
            <div class="card-body">
              <div class="row justify-content-between align-items-center">
                <div class="col-sm-auto mb-2 mb-sm-0">
                  <h6 class="mb-0">Showing 1-24 of 205 Products</h6>
                </div>
                <div class="col-sm-auto">
                  <form class="d-inline-block mr-3">
                    <div class="input-group input-group-sm d-flex align-items-center">
                      <small class="mr-1">Sort by: </small><select class="custom-select" aria-label="Bulk actions">
                        <option selected="">Best Match</option>
                        <option value="Refund">Newest</option>
                        <option value="Delete">Price</option>
                      </select>
                    </div>
                  </form>
                  <a class="text-600" href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Product List"><span class="" data-fa-i2svg="">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-list" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M9 6l11 0"></path>
                    <path d="M9 12l11 0"></path>
                    <path d="M9 18l11 0"></path>
                    <path d="M5 6l0 .01"></path>
                    <path d="M5 12l0 .01"></path>
                    <path d="M5 18l0 .01"></path>
                    </svg>
                </span></a>
                </div>
              </div>
            </div>
    </div>

    <div class="card mb-3">
            <div class="card-body">
              <div class="row">
                <div class="mb-4 col-md-6 col-lg-4" v-for="item in 10" :key="item">
                  <div class="border rounded h-100 d-flex flex-column justify-content-between pb-3">
                    <div class="overflow-hidden">
                      <div class="position-relative rounded-top overflow-hidden">

                        <router-link
                                :to="{ name: 'ProductDetails',params:{name:'Product Name'} }" class="d-block"
                        
                                data-bs-placement="top" data-bs-toggle="tooltip" type="button"
                                title="View Product Details">
                                <img class="img-fluid rounded-top" 
                            src="https://picsum.photos/400/200" alt="">
                      </router-link>

                          <span class="badge badge-pill badge-success position-absolute r-0 t-0 mt-2 mr-2 z-index-2">New</span>
                      </div>
                      <div class="p-3">
                        <h5 class="fs-0">
                          <a class="text-dark" href="../e-commerce/product-details.html">Apple iMac Pro (27-inch with Retina 5K Display, 3.0GHz 10-core Intel
                            Xeon W, 1TB SSD)</a>
                        </h5>
                        <p class="fs--1 mb-3">
                          <a class="text-500" href="#!">Computer &amp; Accessories</a>
                        </p>
                        <h5 class="fs-md-2 text-warning mb-0 d-flex align-items-center mb-3">
                          SGD 1199.5<del class="ml-2 fs--1 text-500">SGD 2399 </del>
                        </h5>
                        <p class="fs--1 mb-1">
                          Stock: <strong class="text-success">Available</strong>
                        </p>
                      </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-between px-3">
                      <div>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-star-filled text-warning" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" stroke-width="0" fill="currentColor"></path>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-star-filled text-warning" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" stroke-width="0" fill="currentColor"></path>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-star-filled text-warning" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" stroke-width="0" fill="currentColor"></path>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-star-filled text-warning" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" stroke-width="0" fill="currentColor"></path>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-star-filled text-warning" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" stroke-width="0" fill="currentColor"></path>
</svg>
                        <span class="ml-1">(8)</span>
                      </div>
                      <div>
                        <a class="btn btn-sm btn-falcon-default mr-2" href="#!" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Wish List">
                            <span class="" data-fa-i2svg="">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
                                </svg>
                            </span></a><a class="btn btn-sm btn-falcon-default" href="#!" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Cart">
                                    <span class="" data-fa-i2svg="">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart-plus" width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
                                        <path d="M12.5 17h-6.5v-14h-2"></path>
                                        <path d="M6 5l14 1l-.86 6.017m-2.64 .983h-10.5"></path>
                                        <path d="M16 19h6"></path>
                                        <path d="M19 16v6"></path>
                                        </svg>
                                    </span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer bg-light d-flex justify-content-center">
              <div>
                <button class="btn btn-falcon-default btn-sm mr-2" type="button" disabled="" data-toggle="tooltip" data-placement="top" title="" data-original-title="Prev">
                  <span class="" data-fa-i2svg="">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="20" height="20" viewBox="0 0 24 24" stroke-width="1" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M15 6l-6 6l6 6" />
                  </svg>
                  </span></button><a class="btn btn-sm btn-falcon-default text-primary mr-2" href="#!">1</a><a class="btn btn-sm btn-falcon-default mr-2" href="#!">2</a><a class="btn btn-sm btn-falcon-default mr-2" href="#!">35</a><button class="btn btn-falcon-default btn-sm" type="button" data-toggle="tooltip" data-placement="top" title="" data-original-title="Next">
                  <span class="" data-fa-i2svg="">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right" width="20" height="20" viewBox="0 0 24 24" stroke-width="1" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M9 6l6 6l-6 6" />
                  </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
    </div>
        </div>
    </div>

</div>

</template>

<script>
  import { ref} from "vue";
  const item = ref(3);
</script>

<style scoped>

</style>
