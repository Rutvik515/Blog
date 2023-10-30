<template>
<div>
    <div class="header">
        <nav class="navbar navbar-expand-lg bg-dark fixed-top">
            <div class=" container ">
                <!-- <a href="" class=" navbar-brand"><img src="../CSS/images/logo-light.svg" alt=""></a> -->
                <button type="button" class="navbar-toggler bg-white" data-bs-toggle="collapse" data-bs-target="#navbaraid">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse text-uppercase gap-5  justify-content-end" id="navbaraid">
                    <ul class="navbar-nav text-start">
                        <router-link to="/layout/home" class="nav-link text-white">
                            <li class="nav-item">home</li>
                        </router-link>
                        <router-link to="/layout/about" class="nav-link text-white">
                            <li class="nav-item">about</li>
                        </router-link>
                        <router-link to="/layout/project" class="nav-link text-white">
                            <li class="nav-item">Project</li>
                        </router-link>
                        <router-link to="/layout/service" class="nav-link text-white">
                            <li class="nav-item">service</li>
                        </router-link>
                        <router-link to="/layout/contact" class="nav-link text-white">
                            <li class="nav-item">contact</li>
                        </router-link>
                    </ul>
                    <div>
                        <a class="px-btn d-none d-lg-inline-flex text-white" href="#">Lets'Talk</a>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    <div>
        <router-view></router-view>
    </div>
</div>
</template>

<script>
export default {
    name: 'layoutComponent',
}
</script>

<style lang="scss" scoped>

</style>
