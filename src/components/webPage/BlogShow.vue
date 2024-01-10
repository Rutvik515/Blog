<template>
<headerVue></headerVue>
<carousel :items-to-show="3.5" class="w-75 container mt-24">
    <slide v-for="categoriesShow in categoriesShows" :key="categoriesShow">
        <div class="">
            <div class="">
                <img class="img-border img-fluid " :src="categoriesShow.image" alt="">
            </div>
            <div>
                {{ categoriesShow.name }}
            </div>
        </div>
    </slide>
    <template #addons>
        <navigation />

    </template>
</carousel>

<section class="container mt-4">
    <div class="row">
        <div class="col-md-4" v-for="blogShow in blogShows" :key="blogShow.id">

            <div class="mt-5 card " style="width:300px">
                <router-link :to='`/blogShow/${blogShow.id}`'>
                    <img class="width-img img-fluid hover-effect" :src="blogShow.image" alt="">
                </router-link>
            </div>
            <div class=" mt-2 d-flex width-user ml-14 justify-evenly">
                <div>

                    <img class="width-img img-fluid  rounded-pill pic-rounded " :src="blogShow.user_image" alt="">

                </div>
                <div class="ml-4 mt-2 ">{{ blogShow.user_name }}</div>
                <div class="ml-4 mt-2 ">{{ blogShow.date }}</div>
            </div>
            <div class=" text-color">{{ blogShow.category_name }}</div>

            <!-- <div class="mr-28 mt-2 text-color">{{ blogShow.title }}</div> -->
            <div class=" mt-2 " v-html="blogShow.description.length > 99 ? blogShow.description.substring(0, 40) + '.....' : blogShow.description">
            </div>
           
        </div>
    </div>
</section>

    <section>
        <div class="flex justify-center mt-5 hover-effect1">
            <img src="../../assets/octal-logo.png" alt="" class="rounded-img">
        </div>
        <div class="mt-4 text-size">
             <p> <b>❝</b> One-stop solution for a wide range of web development services. Fully customized and responsive websites- <br> worldclass solution to our valued customers. Expiries at fullscale, personalized-unlocking endless possibilities. <br>Shopify and Shopify Plus development is Octal Infotech's specialty. We have a top team of E-Commerce web <br>developers.</p> 
             <div >
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

    <section>
        <div class="d-flex justify-content-center mt-16">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d59506.18818722751!2d72.85386725000001!3d21.226424749999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i1200!4f13.1!5e0!3m2!1sen!2sin!4v1686806699190!5m2!1sen!2sin"
                width="70%" height="450px" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div>
    </section>

      
    <footerComponents/>

    
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
            blogShows: []
        }
    },
    mounted() {
        this.getCetegories();
        this.getBlogs()
    },
    methods: {

        getCetegories() {
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

        getBlogs() {
            let data = localStorage.getItem('user');
            data = JSON.parse(data);
            let token = data.token;

            axios.get("https://blog-api-dev.octalinfotech.com/api/blogs?page=1&search=", {
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

.width-user{
  width: 300px !important;
}

.text-color {
    font-family: 'Times New Roman', Times, serif;
    font-size: 25px;
    color: black;
    font: bold 700;
}

.rounded-img{
    border-radius: 50%;
    width: 200px;
    height: 200px;
    
}

.text-size{
    font-size: 20px;
}
@media (min-width: 1200px) {
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


.card{
    /* margin-top: 200px!important; */
    /* width:400px; */
    margin: auto;
    /* height: 400px; */
    position: relative;
    transition: transform 4s ease-in;
    overflow: hidden;
    border:4px solid #fff;

}
.hover-effect{
    /* width:100%; */
    /* height: 400px; */
    transition: transform 1s ease-in;
}
.hover-effect:hover{
    transform: scale(1.2);
}
.card:before {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left:0;
/*     content: "Yeah!"; */
    transform:translateY(-100%);
    font-size: 25px;
    color:#fff;
   display: block;
    background-color: rgba(188, 143, 143, 0.137);
    z-index: 1;
    display:flex;
    justify-content: center;
    align-items: center;
   font-family: sans-serif;
    transition: transform .4s ease-in;
    border:4px solid white;
    justify-content: center;
    box-sizing: border-box;
}

.card:after {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left:0;
/*     content: "Yeah!"; */
    transform:translateY(100%);
    font-size: 25px;
    color:#fff;
   display: block;
    background-color: rgba(188, 143, 143, 0.137);
    z-index: 1;
    display:flex;
    justify-content: center;
    align-items: center;
   font-family: sans-serif;
    transition: transform .4s ease-in;
    border:4px solid white;
    justify-content: center;
    box-sizing: border-box;
}
 .card:hover::before{
 transform: translateY(0%); 
 
}
.card:hover::after{
    transform: translateY(0%); 
    
   }

   @media only screen and (max-width: 600px) {
       body{
           display: block;
       }
   }

   
.hover-effect1::before {
    right: 0;
    opacity:0.7;
    top: 0;
}
.hover-effect1::after {
    bottom: 0;
    opacity: 0.7;
    left: 0;
}

div.hover-effect1{
  
    transition: transform .4s ease-in;
     
  position:relative;
}

.hover-effect1::before, .hover-effect1::after {
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
.hover-effect1:hover::after, .hover-effect1:hover::before {
    height: 100%;
    opacity: 0;
    width: 100%;
}


</style>
