<template>
<headerVue></headerVue>
<carousel :items-to-show="4.5" class="w-75 container mt-24">
    <slide v-for="categoriesShow in categoriesShows" :key="categoriesShow">
        <div class="">
            <div>
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
            <div class="mt-5">
                    <router-link :to='`/blogShow/${blogShow.id}`' >
                <img class="width-img img-fluid" :src="blogShow.image" alt="">
                                    </router-link>
            </div>
            <!-- <div class="mr-28 mt-2 ">{{ blogShow.category_name }}</div> -->
            <div class="mr-48" v-html="blogShow.description.length > 99 ? blogShow.description.substring(0, 20) + '.....' : blogShow.description">
            </div>
            <div class="mr-28 mt-2 d-flex ">
                <div>

                        <img class="width-img img-fluid  rounded-pill pic-rounded " :src="blogShow.image" alt="">

                </div>
                <div class="ml-4 mt-1 ">{{ blogShow.user_name }}</div>
                <div class="ml-4 mt-1 ">{{ blogShow.date }}</div>
            </div>
              <div class="mr-44 mt-1">{{ blogShow.category_name }}</div>
        </div>
    </div>
</section>
</template>

<script>
import axios from 'axios';
import headerVue from '../Header.vue'
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
        headerVue
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

            axios.get("https://blog-api-dev.octalinfotech.com/api/categories?page=1&search=a", {
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
                console.log(res.data.data.data);
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
    width: 200px;
    height: 200px;
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

.pic-rounded{
    width:50px;
    height: 50px;
}

@media (min-width: 768px) {
    .grid-div {
        grid-template-columns: repeat(3, 1fr);
    }
}
</style>
