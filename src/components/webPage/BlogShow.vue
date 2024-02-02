<template>
<headerVue @search="search" />
<carousel :items-to-show="10" :wrap-around="true" class="w-full container-fluid mt-24">
    <slide v-for="categoriesShow in categoriesShows" :key="categoriesShow">
        <div @click="currentActive(categoriesShow.id)" class="cursor-pointer">
            <router-link :to='`/category/${categoriesShow.id}/blog`'>
            <div> 

                <img class="rounded-pill h-[50px] w-[50px]" :src="categoriesShow.image" alt="">
            </div>
            <div class="mt-3" :class="categoriesShow.id === isActive ? 'active' : ''">
                {{ categoriesShow.name }}
            </div>
        </router-link>
        </div>
    </slide>
    <template #addons>
        <navigation />

    </template>
</carousel>

<router-view></router-view>

<section class="container mt-10">
    <div class="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 w-75">
        <div v-for="blogShow in blogShows" :key="blogShow.id">
            <router-link :to="`/blogs/${blogShow.id}`">
                
                <div class="bg-white shadow-lg rounded-md overflow-hidden">
                    <img class="w-full h-48 object-cover" :src="blogShow.image" alt="">
                    <div class="p-4">
                        <div class="flex items-center justify-around space-x-4">
                            <img class="w-10 h-10 rounded-full" :src="blogShow.user_image" alt="">
                         
                                <div class="text-sm font-semibold">{{ blogShow.user_name }}</div>
                                <div class="text-xs text-gray-500">{{ blogShow.date }}</div>
                                
                     
                        </div>
                        <div class="mt-2 text-lg font-semibold">{{ blogShow.title }}</div>
                        <!-- <div class="mt-2 text-gray-600" v-html="blogShow.description.length > 99 ? blogShow.description.substring(0, 40) + '.....' : blogShow.description"></div> -->
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</section>


<section>
    <div class="flex justify-center mt-5 hover-effect1">
        <img src="../../assets/octal-logo.png" alt="" class="rounded-img">
    </div>
    <div class="mt-4 text-size">
        <p> <b>❝</b> One-stop solution for a wide range of web development services. Fully customized and responsive websites- <br> worldclass solution to our valued customers. Expiries at fullscale, personalized-unlocking endless possibilities. <br>Shopify and Shopify Plus development is Octal Infotech's specialty. We have a top team of E-Commerce web <br>developers.</p>
        <div>
            <i class="fa-solid fa-star" style="color: #e2d43c;"></i>
            <i class="fa-solid fa-star" style="color: #e2d43c;"></i>
            <i class="fa-solid fa-star" style="color: #e2d43c;"></i>
            <i class="fa-solid fa-star" style="color: #e2d43c;"></i>
            <i class="fa-solid fa-star" style="color: #e2d43c;"></i>

            <!-- <i class="fa-solid fa-star-half-stroke" style="color: #e2d43c;"></i> -->
        </div>
        <!-- <i class="fa-regular fa-star  bg-yellow-400"></i> -->
    </div>
</section>


      <!-- map -->
<!-- <section>
    <div class="d-flex justify-content-center mt-16">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d59506.18818722751!2d72.85386725000001!3d21.226424749999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i1200!4f13.1!5e0!3m2!1sen!2sin!4v1686806699190!5m2!1sen!2sin" width="70%" height="450px" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

    </div>
</section> -->

                  <!-- carousel -->
<section class="mt-16">
    <div id="default-carousel" class="relative w-75 container" data-carousel="slide">
    <!-- Carousel wrapper -->
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
         <!-- Item 1 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="../../assets/web dev.jpg" class="absolute block w-75 object-cover rounded -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 2 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="../../assets/web-ful.jpg" class="absolute block w-75 object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 3 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="../../assets/web-desi.webp" class="absolute block w-75 object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 4 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="../../assets/web-design.jpg" class="absolute block w-75 object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 5 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="../../assets/web-development.jpg" class="absolute block w-75 object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
    </div>
    <!-- Slider indicators -->
    <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
    <!-- Slider controls -->
    <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>
</section>



<div class="mt-16">

    <footerComponents />
</div>
</template>

<script>
import axios from 'axios';
import headerVue from '../Header.vue'
import footerComponents from '../Footer.vue'
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import {
    Carousel,
    Slide,
    Navigation
} from 'vue3-carousel'

export default {
    name: 'App',
    components: {
        Carousel,
        Slide,
        Navigation,
        headerVue,
        footerComponents
    },
    data() {
        return {
            categoriesShows: [],
            blogShows: [],
            isActive: null,
        }
    },
    watch:{
    
    },
    mounted() {
        this.getCategories();
        this.getBlogs()
        // this.search()
    },
    methods: {
       
        search(value){
        //    console.log(value); 
           this.getBlogs(1,value)
        },

        getCategories() {
            let data = localStorage.getItem('user');
            data = JSON.parse(data);
            let token = data.token;

            axios.get("https://blog-api-dev.octalinfotech.com/api/categories?page=1", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((res) => {
                this.categoriesShows = res.data.data.data;
                this.isLoading = false;
            }).catch((err) => {
                console.log(err);
            })

        },

        currentActive(id) {
            this.isActive = id;
        },

        getBlogs(page,search = '') {
            let data = localStorage.getItem('user');
            data = JSON.parse(data);
            let token = data.token;

            axios.get(`https://blog-api-dev.octalinfotech.com/api/blogs?page=${page}&search=${search}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((res) => {
                this.blogShows = res.data.data.data;
                console.log(res.data.data);
                this.isLoading = false;
            }).catch((err) => {
                console.log(err);
            })

        },

    },

}
</script>

<style>
.img-border {
    width: 150px;
    height: 150px;
    border-radius: 50%;
}

.grid-col {
    display: grid;
    grid-template-columns: auto auto auto;
}

.width-img {
    width: 300px;
    height: 250px;
}

.grid-div {
    display: grid;
    grid-template-columns: auto auto auto;
}

.pic-rounded {
    width: 30px;
    height: 30px;
}

.width-user {
    width: 300px !important;
}

.text-color {
    font-family: 'Times New Roman', Times, serif;
    font-size: 25px;
    color: black;
    font: bold 700;
}

.rounded-img {
    border-radius: 50%;
    width: 200px;
    height: 200px;

}

.text-size {
    font-size: 20px;
}

@media (max-width: 1200px) {
    .grid-div {
        grid-template-columns: repeat(3, 1fr);
    }
}

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap");

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
}

/* 
body {
  display: flex;
  background: #333;
  justify-content: flex-end;
  align-items: flex-end;
  min-height: 100vh;
} */

.card {
    /* margin-top: 200px!important; */
    /* width:400px; */
    margin: auto;
    /* height: 400px; */
    position: relative;
    transition: transform 4s ease-in;
    overflow: hidden;
    border: 4px solid #fff;

}

.hover-effect {
    /* width:100%; */
    /* height: 400px; */
    transition: transform 1s ease-in;
}

.hover-effect:hover {
    transform: scale(1.2);
}

.card:before {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    /*     content: "Yeah!"; */
    transform: translateY(-100%);
    font-size: 25px;
    color: #fff;
    display: block;
    background-color: rgba(188, 143, 143, 0.137);
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: sans-serif;
    transition: transform .4s ease-in;
    border: 4px solid white;
    justify-content: center;
    box-sizing: border-box;
}

.card:after {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    /*     content: "Yeah!"; */
    transform: translateY(100%);
    font-size: 25px;
    color: #fff;
    display: block;
    background-color: rgba(188, 143, 143, 0.137);
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: sans-serif;
    transition: transform .4s ease-in;
    border: 4px solid white;
    justify-content: center;
    box-sizing: border-box;
}

.card:hover::before {
    transform: translateY(0%);

}

.card:hover::after {
    transform: translateY(0%);

}

@media only screen and (max-width: 600px) {
    body {
        display: block;
    }
}

.hover-effect1::before {
    right: 0;
    opacity: 0.7;
    top: 0;
}

.hover-effect1::after {
    bottom: 0;
    opacity: 0.7;
    left: 0;
}

div.hover-effect1 {

    transition: transform .4s ease-in;

    position: relative;
}

.active {
    border-bottom: black solid 2px;
    color: red
}

.hover-effect1::before,
.hover-effect1::after {
    content: "";
    background: #fff;
    height: 0;
    width: 0;
    z-index: 1;
    position: absolute;
    -webkit-transition-duration: 1.3s !important;
    -o-transition-duration: 1.3s;
    transition-duration: 1.3s !important;
}

.hover-effect1:hover::after,
.hover-effect1:hover::before {
    height: 100%;
    opacity: 0;
    width: 100%;
}

@media screen and (max-width:768px) {
    .container {
        display: grid;
        grid-template: auto auto;
    }

}
</style>
