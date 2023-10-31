<template>
<div>
    <!-- <div class="header">
        <nav class="navbar navbar-expand-lg bg-dark fixed-top">
            <div class=" container ">
                <h1 class="text-light">Mr.Rutvik</h1>
                <a href="" class=" navbar-brand "><img src="https://www.iconpacks.net/icons/2/free-website-icon-5793-thumb.png" alt="" style="height: 100px; width: 100px;"></a>
                <button type="button" class="navbar-toggler bg-white" data-bs-toggle="collapse" data-bs-target="#navbaraid">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse text-uppercase gap-5  justify-content-end" id="navbaraid">
                    <ul class="navbar-nav text-start">
                        <router-link to="/layout/home" class="nav-link text-white">
                            <li class="nav-item">home</li>
                        </router-link>
                        <router-link to="/layout/categories" class="nav-link text-white">
                            <li class="nav-item">about</li>
                        </router-link>
                        <router-link to="/layout/tag" class="nav-link text-white">
                            <li class="nav-item">Project</li>
                        </router-link>
                        <router-link to="/layout/users" class="nav-link text-white">
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
    </div> -->
    <mainLayout>
        <template #header>
            <div>
                <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
                    <div class="container-fluid d-flex justify-content-lg-start">
                        <a class="navbar-brand" href="#">
                            <img src="http://octalinfotech.com/img/octal-logo.png" alt="Logo" style="width:40px;" class="rounded-pill">
                        </a>
                        <h5 class="text-uppercase text-light">octal infotech</h5>
                    </div>
                    <div>
                        <button class="navbar-brand border-0 bg-none" @click="profile" href="#">
                            <img src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png" alt="Logo" style="width:40px;" class="rounded-pill">
                        </button>
                        <div>
                        <div v-if="isOpen" class="dropdown  w-100 h-100">
                            <div>
                                <div class="dropdown">
                                    <img src="https://ca.slack-edge.com/T04HNPJ1PV3-U04L50M135K-e9c7087e3b5a-512" alt="" class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#myModal">Profile</a></li>
                                        <li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#myModalpassword">Change Password</a></li>
                                        <li>
                                            <router-link to="/login" @click.prevent="logOut">Logout</router-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div class="container-fluid  d-flex p-0">
                <div>
                    <nav class="navbar p-0">
                        <ul class="navbar-nav hover-bg h-101">
                            <div>
                                <router-link to="/layout/home" class="nav-item text-decoration-none text-start">
                                    <li class="nav-link" href="#"> <i class="fa-solid fa-house" style="color: none;"></i>&nbsp;&nbsp;Home </li>
                                </router-link>
                            </div>
                            <hr>
                            <div>
                                <router-link to="/layout/categories" class="nav-item text-decoration-none float-lg-start">
                                    <li class="nav-link " href="#"><i class="fa-solid fa-graduation-cap "></i>&nbsp;&nbsp;Categories </li>
                                </router-link>
                            </div>
                            <hr>
                            <div>
                                <router-link to="/layout/tag" class="nav-item text-decoration-none float-lg-start">
                                    <li class="nav-link " href="#"><i class="fa-solid fa-rocket"></i>&nbsp;&nbsp;Tag </li>
                                </router-link>
                            </div>
                            <hr>
                            <div>
                                <router-link to="/layout/users" class="nav-item text-decoration-none float-lg-start">
                                    <li class="nav-link " href="#"><i class="fa-solid fa-users"></i>&nbsp;&nbsp;Users </li>
                                </router-link>
                            </div>
                            <hr>
                            <div>
                                <router-link to="/layout/blog" class="nav-item text-decoration-none float-lg-start">
                                    <li class="nav-link " href="#"><i class="fa-solid fa-rocket"></i>&nbsp;&nbsp;Blog </li>
                                </router-link>
                            </div>
                        </ul>
                    </nav>
                </div>
                <router-view></router-view>
            </div>
            <div>
                <footerComponent></footerComponent>
            </div>
        </template>
    </mainLayout>
</div>
</template>

<script>
import footerComponent from './Footer.vue'
import mainLayout from './MainLayout.vue';
export default {
    name: 'layoutComponent',
    components: {
        mainLayout,
        footerComponent
    },
    data() {
        return {
            isOpen: false,
        }
    },
    methods: {
        profile() {
            this.isOpen = !this.isOpen

        }
    },
}
</script>

<style scoped>
.h-101 {
    height: auto;
    width: 200px;
    background-color: #ced7dc;
    padding: 10px 10px;
    margin: 0;
    font-family: 'Times New Roman', Times, serif;
    font-size: 20px;

}

.bg-none {
    background: none;
}

.hover-bg :hover {
    background-color: #98c9e2;
}
</style>
