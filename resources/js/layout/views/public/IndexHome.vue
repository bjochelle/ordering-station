<template>
    <Header></Header>
    <router-view v-slot="{ Component,route }">
        <Transition mode="out-in" name="slide-fade">
            <div :key="route.name" class="component-div mt-7 mb-7">
                <component :is="Component"/>
            </div>
        </Transition>
    </router-view>
    <Footer></Footer>
</template>

<script setup>
import Footer from "@/layout/views/public/component/Footer.vue";
import Header from "@/layout/views/public/component/Header.vue";
</script>

<style>

.text-blue{
    color: #203196;
}
@media screen and (max-width: 767px) {
    .banner #banner-image{
        height: 150px;
        background-position-x: 92%;
        background-size: cover;
    }

    .custom-margin {
        margin-top: 18%; /* Set your desired margin-top value for small screens */
    }
}

@media screen and (min-width: 768px) {
    .banner #banner-image{
        height: 160px;
        background-position: center 30%;
        background-size: cover;
    }
}

@media (min-width: 992px) {
    .banner #banner-image{
        height: 200px;
        background-position: center 30%;
        background-size: cover;
    }


}

@media (min-width: 1200px) {
    .banner #banner-image{
        height: 250px;
        background-position: center 30%;
        background-size: cover;
    }
}

.rotate-45{
    transform: rotate(45deg);
}
.banner {
    background-image: url(/resources/images/upper-left.webp);
    background-size: cover;
}

</style>
