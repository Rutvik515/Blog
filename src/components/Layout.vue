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
                    <div class="dropdown">
                        <!-- <img src="" class="btn btn-secondary" role="button"   data-bs-toggle="dropdown" > -->

                        <button data-bs-toggle="dropdown" class="navbar-brand border-0 bg-none" href="#">

                            <img src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png" alt="Logo" style="width:40px;" class="rounded-pill dropdown-toggle" aria-expanded="false" id="dropdownMenuButton1">
                        </button>
                        <div class="">
                            <ul class="dropdown-menu  me-6 mt-2   " aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item text-center " href="#"><img class="w-25  h-25 rounded-5 align-items-lg-center " src="http://octalinfotech.com/img/octal-logo.png" alt=""></a></li>
                                <li><a class="dropdown-item mt-2 text-center " href="#">OCTAL INFOTECH</a></li>
                                <hr>
                                <li class=""><a class="dropdown-item" href="#"><i class="fa-solid fa-user me-3"></i>Profile</a></li>
                                <li><a class="dropdown-item" href="#"><i class="fa-solid fa-lock me-3"></i>Chnage Password</a></li>
                                <li for="logout"><a class="dropdown-item" @click="logout" id="logout" href="#"><i class="fa-solid fa-arrow-right-from-bracket me-3"></i>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div class="container-fluid   d-flex p-0">
                <div>
                    <nav class="navbar p-0">
                        <ul class="navbar-nav  hover-bg h-101">
                            <div>
                                <router-link to="/layout/dashboard" class="nav-item  text-decoration-none text-start">
                                    <li class="nav-link" href="#"><i class="fa-solid fa-house ms-3 " style="color: none;"></i><label for="" class="ms-3"></label>Dashboard </li>
                                </router-link>
                            </div>
                            <hr>
                            <div>
                                <router-link to="/layout/categories" class="nav-item  text-decoration-none float-lg-start">
                                    <li class="nav-link " href="#"><i class="fa-solid ms-3  fa-graduation-cap "></i><label for="" class="ms-3"></label>Categories </li>
                                </router-link>
                            </div>
                            <hr>
                            <div>
                                <router-link to="/layout/tag" class="nav-item text-decoration-none float-lg-start">
                                    <li class="nav-link " href="#"><i class="fa-solid ms-3  fa-rocket"></i><label for="" class="ms-3"></label>Tag </li>
                                </router-link>
                            </div>
                            <hr>
                            <div>
                                <router-link to="/layout/users" class="nav-item text-decoration-none float-lg-start">
                                    <li class="nav-link " href="#"><i class="fa-solid ms-3  fa-users"></i><label for="" class="ms-3"></label>Users </li>
                                </router-link>
                            </div>
                            <hr>
                            <div>
                                <router-link to="/layout/blog" class="nav-item text-decoration-none float-lg-start">
                                    <li class="nav-link " href="#"><i class="fa-solid ms-3  fa-rocket"></i><label for="" class="ms-3"></label>Blog </li>
                                </router-link>
                            </div>
                        </ul>
                    </nav>
                </div>
                <router-view></router-view>
            </div>
            <div>
                <!-- <footerComponent></footerComponent> -->
            </div>
        </template>
    </mainLayout>
</div>
</template>

<script>
// import footerComponent from './Footer.vue'
import mainLayout from './MainLayout.vue';
export default {
    name: 'layoutComponent',
    components: {
        mainLayout,
        // footerComponent
    },
    data() {
        return {
            isOpen: false,
        }
    },
    methods: {
        profile() {
            this.isOpen = !this.isOpen

        },

        logout() {
            this.$router.push("/login")
            // localStorage.clear();
            localStorage.removeItem("user", "token")
        }
    },
}
</script>

<style scoped>
.h-101 {
    height: 93.8vh;
    width: 260px;
    background-color: #ced7dc;
    padding: 10px 10px;
    margin: 0;
    font-family: 'Times New Roman', Times, serif;
    font-size: 20px;

}

.me-6 {
    margin-left: -150px;

}

.bg-none {
    background: none;
}

.hover-bg :hover {
    background-color: #98c9e2;
}
</style>
