<template>
<div>
    <div class="header">
        <nav class="navbar navbar-expand-lg bg-gray-400 fixed-top">
            <div class=" container ">
                

                    <img src="../assets/octal-logo.png" alt="" class="rounded-pill align-items-center text-center" style="width: 40px;" >
               
                
                    <h2 class="text-white ml-3 align-items-center text-center mt-2">Octal Infotech</h2>

                <button type="button" class="navbar-toggler bg-white" data-bs-toggle="collapse" data-bs-target="#navbaraid">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse text-uppercase gap-5  justify-content-end" id="navbaraid">
                    <ul class="navbar-nav text-start">
                        <li class="nav-item"><a class="nav-link text-white">Home</a></li>
                        <li class="nav-item"><a class="nav-link text-white">Blog</a></li>
                        <li class="nav-item"><a class="nav-link text-white">Categories</a></li>
                        <li class="nav-item"><a class="nav-link text-white">Contact Us</a></li>
                         <!-- <div class="mt-0">            <div>                  <i class="fa-solid fa-magnifying-glass position-absolute icon-margin rounded-end-0 border  "></i>
                </div>
                <input class="float-lg-start ms-5 mt-3 p-2 border rounded-start-0 bg-none" type="search" v-model="search" placeholder="search something....">
            </div> -->


                           
                    </ul>
                    <!-- <div>
                    <a class="px-btn d-none d-lg-inline-flex text-white" href="#">Lets'Talk</a>
                </div> -->
                </div>
            </div>
        </nav>
    </div>

</div>
</template>

<script>
export default {
    name: 'headerVue'

}
</script>

<style  scoped>

.icon-margin {
    margin-left: 5px;
    margin-top: 16px;
    padding: 12px;
  
}
</style>
