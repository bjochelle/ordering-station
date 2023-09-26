<template>
    <nav class="navbar navbar-light navbar-vertical navbar-expand-lg" data-double-top-nav="data-double-top-nav">
        <div class="d-flex align-items-center">
            <div class="toggle-icon-wrapper">
                <button aria-label="Toggle Navigation" class="btn navbar-toggler-humburger-icon navbar-vertical-toggle"
                        data-bs-original-title="Toggle Navigation" data-bs-placement="left" data-bs-toggle="tooltip"
                        @click="toggle"><span class="navbar-toggle-icon"><span
                    class="toggle-line"></span></span></button>
            </div>

            <router-link :to="{ name: 'Welcome' }" class="navbar-brand" tag="a">
                <div class="d-flex align-items-center py-2">
                    <img alt="" class="me-2" src="../../../images/intranet-img/vcygroup.jpg" width="130">
                    <!--                    <span class="font-sans-serif">BTH</span>-->
                </div>
            </router-link>

        </div>
        <div id="navbarVerticalCollapse" class="collapse navbar-collapse">
            <div class="navbar-vertical-content scrollbar"
            >
                <ul id="navbarVerticalNav" class="navbar-nav flex-column mb-3"
                    @mouseenter="hover()"
                    @mouseleave="closeCollapsedSidebar()"
                    @mousemove="hover()"
                >
                    <li class="nav-item"
                    >
                        <div v-if="$can(['user_management_panel'])" class="row navbar-vertical-label-wrapper mt-3 mb-2">
                            <div class="col-auto navbar-vertical-label">Maintenance</div>
                            <div class="col ps-0">
                                <hr class="mb-0 navbar-vertical-divider">
                            </div>
                        </div>
                        <UsersManagementSideBar v-if="$can(['user_management_panel'])"></UsersManagementSideBar>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import UsersManagementSideBar from "@/layout/component/sidebar/UsersManagementSideBar.vue";


const list = document.getElementsByTagName("html")[0];
export default {
    name: "Sidebar",
    components: {
        UsersManagementSideBar
    },
    data() {
        return {
            isToggled: false,
            isHovering: false,
        }
    },
    methods: {
        hover() {
            list.classList.add("navbar-vertical-collapsed-hover");
            const verticalCollapse = document.getElementById("navbarVerticalCollapse");
            if (!this.isToggled) {
                verticalCollapse.style.boxShadow = "1px 1px 1px #edf2f9";
            } else {
                verticalCollapse.style.removeProperty('box-shadow');
            }
        },
        closeCollapsedSidebar() {
            list.classList.remove("navbar-vertical-collapsed-hover");
        },
        toggle() {
            if (this.isToggled) {
                list.classList.remove("navbar-vertical-collapsed")
            } else {
                list.classList.add("navbar-vertical-collapsed")
            }
            this.isToggled = !this.isToggled;
        },
        autoClosedCollapse() {
            list.classList.add("navbar-vertical-collapsed")
        }
    }
}
</script>

<style scoped>
.navbar-vertical-collapsed .navbar-vertical-collapsed-hover {
    box-shadow: 1px 1px 1px #edf2f9;
}

/*//box-shadow: 0.625rem 0 0.625rem -0.5625rem var(--falcon-navbar-vertical-collapsed-hover)*/
</style>
