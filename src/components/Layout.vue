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
                    <a class="navbar-brand" href="#">
                        <img src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png" alt="Logo" style="width:40px;" class="rounded-pill">
                    </a>
                </nav>
            </div>
            <div class="container-fluid h-101 ">
                <nav class="navbar">
                    <ul class="navbar-nav hover-bg">
                        <div >
                        <router-link to="/layout/home" class="nav-item text-decoration-none text-start">
                            <li class="nav-link " href="#">  <i class="fa-solid fa-house" style="color: none;"></i>&nbsp;&nbsp;Home </li>
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
                            <li class="nav-link " href="#"><i class="fa-solid fa-rocket"></i>&nbsp;&nbsp;Users </li>
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
        </template>
        <template #detail>
          <div>
            
          </div>
        </template>
      
    </mainLayout>

    <div>
        <router-view></router-view>
    </div>
    <footerComponent></footerComponent>
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
    }
}
</script>

<style scoped>
.h-101 {
    height: auto;
    width: 200px;
    background-color: #ced7dc;
    padding: 0;
    margin: 0;
    font-family: 'Times New Roman', Times, serif;
    font-size: 20px;

}

hr{
    width: 200px;
}

.hover-bg :hover{
    background-color: #98c9e2;
}
</style>
