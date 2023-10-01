<script setup>
import {computed, onBeforeUnmount, onMounted, ref, watch} from "vue";
import {useRoute, useRouter} from "vue-router";
const route = useRoute();
const router = useRouter();
const  navbarDarkenOnScroll =ref(0);

import logo from '../../../../../images/logo.png';


</script>

<template>
    <nav class="navbar  navbar-expand-lg fixed-top navbar-light bg-white border-bottom border-primary border-2"
         data-navbar-darken-on-scroll="data-navbar-darken-on-scroll" style="background-image: none;" >
        <div class="container" id="nav" ><a class="navbar-brand" href="#">
            <span class="text-white dark__text-white">
            <img alt=""
                 class="me-2"
                 :src="logo"
                 width="88"/>
        </span></a><button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarStandard" aria-controls="navbarStandard" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse scrollbar" id="navbarStandard">
                <!-- <ul class="navbar-nav ms-auto  fs-lg-1  " id="navbar" data-top-nav-dropdowns="data-top-nav-dropdowns">
                   
                    <li class="nav-item dropdown">
                        
                        <div class="dropdown-menu dropdown-caret dropdown-menu-card border-0 mt-0" aria-labelledby="investor_relations">
                            <div class="bg-white dark__bg-1000 rounded-3 py-2">
                               
                            </div>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle fw-light" role="button" type="a"
                                     data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="">
                            
                        </a>
                        <div class="dropdown-menu dropdown-caret dropdown-menu-card border-0 mt-0" aria-labelledby="">
                            <div class="bg-white dark__bg-1000 rounded-3 py-2">
                            
                            </div>
                        </div>
                    </li>
                    
                </ul> -->
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
