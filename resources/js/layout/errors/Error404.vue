<template>
    <main id="top" class="main">
        <div class="container" data-layout="container">
            <div class="row flex-center min-vh-100 py-6 text-center">
                <div class="col-sm-10 col-md-8 col-lg-6 col-xxl-5">
                    <a class="d-flex flex-center mb-4" href="#">
                        <img alt="" class="me-2" src="../../../images/logo.png" width="280">
                    </a>
                    <div class="card">
                        <div class="card-body p-4 p-sm-5">
                            <div class="fw-black lh-1 text-300 fs-error">404</div>
                            <p class="lead mt-4 text-800 font-sans-serif fw-semi-bold w-md-75 w-xl-100 mx-auto">The page
                                you're looking for is not found.</p>
                            <hr/>
                            <p>Make sure the address is correct and that the page hasn't moved. If you think this is a
                                mistake,
                                <a href="mailto:test@gmail.com">contact us</a>.</p>
                            <router-link :to="{ name: 'Welcome' }" class="btn btn-primary btn-sm mt-3" tag="a">
                                <span class="fas fa-home me-2"></span>Take me home
                            </router-link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: "Error404"
}
</script>

<style scoped>

</style>
