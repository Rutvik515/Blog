<template>
<HeaderVue @search="search"></HeaderVue>
<div>
    <carousel :items-to-show="7" :wrap-around="true" class="w-full container-fluid mt-24">
    <slide v-for="categoriesShow in categoriesShows" :key="categoriesShow">
        <div @click="currentActive(categoriesShow.id)" class="cursor-pointer">
            <router-link :to='`/category/${categoriesShow.id}/blog`'>
                <div>

                    <img class="rounded-pill h-[50px] w-[50px]" :src="categoriesShow.image" alt="">
                </div>
                <div class="mt-3" :class="categoriesShow.id == isActive ? 'active' : ''">
                    {{ categoriesShow.name }}
                </div>
            </router-link>
        </div>
    </slide>
    <template #addons>
        <navigation />

    </template>
</carousel>
</div>


<div class="container mx-auto p-8">
    <div v-if="total === 0">
        <div class="text-3xl text-gray-900">Blog is not found</div>
    </div>
    <div v-else>

        <section class="container mt-10">
    <div class="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 w-75">
        <div v-for="category in categoryWebs" :key="category.id">
            <router-link :to="`/blogs/${category.id}`">
                
                <div class="bg-white shadow-lg rounded-md overflow-hidden">
                    <img class="w-full h-48 object-cover" :src="category.image" alt="">
                    <div class="p-4">
                        <div class="flex items-center justify-around space-x-4">
                            <img class="w-10 h-10 rounded-full" :src="category.user_image" alt="">
                         
                                <div class="text-sm font-semibold">{{ category.user_name }}</div>
                                <div class="text-xs text-gray-500">{{ category.date }}</div>
                                
                     
                        </div>
                        <div class="mt-2 text-lg font-semibold">{{ category.title }}</div>
                        <!-- <div class="mt-2 text-gray-600" v-html="blogShow.description.length > 99 ? blogShow.description.substring(0, 40) + '.....' : blogShow.description"></div> -->
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</section>

    </div>
</div>

<div @click="currentActive">
    <FooterVue />
</div>
</template>

<script>
import HeaderVue from './Header.vue';
import FooterVue from './Footer.vue';
import axios from 'axios';
import 'vue3-carousel/dist/carousel.css'
import {
    Carousel,
    Slide,
    Navigation
} from 'vue3-carousel'
export default {
    name: 'categoryWeb',
    data() {
        return {
            categoryWebs: [],
            total: 0,
            categoriesShows: [],
            isActive: '',

        };
    },
    components: {
        Carousel,
        Slide,
        Navigation,
        HeaderVue,
        FooterVue

    },
    mounted() {
        this.getBlog();
        this.getCategories();

    },
    methods: {
        search(value) {
            this.getBlog(1, value)
            console.log(value);

        },
        getBlog(page, search = '') {
            let data = localStorage.getItem('user');
            data = JSON.parse(data);
            let token = data.token;

            axios
                .get(`https://blog-api-dev.octalinfotech.com/api/categories/${this.$route.params.id}/blogs?page=${page}&search=${search}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then((res) => {
                    this.total = res.data.data.total;
                    this.categoryWebs = res.data.data.data;
                this.categoriesShows = res.data.data.data;
                    this.isActive = this.$route.params.id;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        getCategories() {
            let data = localStorage.getItem('user');
            data = JSON.parse(data);
            let token = data.token;

            axios.get("https://blog-api-dev.octalinfotech.com/api/categories", {
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
        currentActive() {
            axios
            .get(`https://blog-api-dev.octalinfotech.com/api/categories/${this.$route.params.id}/blogs`)
                .then((res) => {
                    this.total = res.data.data.total;
                    this.categoryWebs = res.data.data.data;
                    this.categoryWebs = res.data.data.data;
                    this.isActive = this.$route.params.id;
                    console.log(this.$route.params.id);
                    })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
};
</script>

<style scoped>
/* Add your scoped styles here */

.img-width {
    width: 50px;
    height: 50px;
}

.user-name {
    font-weight: 700;
    font-size: 20px;
    font-family: 'Times New Roman', Times, serif;
}

.text-color {
    font-family: 'Times New Roman', Times, serif;
    font-size: 25px;
    color: black;
    font-weight: 700;
}

.active {
    border-bottom: black solid 4px;
    color: red
}

</style>
