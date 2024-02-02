<template>
<HeaderVue @search="search"></HeaderVue>
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

<div class="container mx-auto p-8">
    <div v-if="total === 0">
        <div class="text-3xl text-gray-900">Blog is not found</div>
    </div>
    <div v-else>

        <section class="container mt-4">

            <div class="row">
                <div class="col-md-6 col-xl-4" v-for="category in categoryWebs" :key="category">
                    <router-link :to='`/blogs/${category.id}`'>
                        <div class="mt-5 card " style="width:300px">
                            <img class="width-img img-fluid  object-cover" :src="category.image" alt="">
                        </div>
                    </router-link>

                    <div class=" mt-2 d-flex w-full  justify-center">
                        <div>

                            <img class="width-img img-fluid  rounded-pill pic-rounded " :src="category.user_image" alt="">

                        </div>
                        <div class="ml-4 mt-2 ">{{ category.user_name }}</div>
                        <div class="ml-4 mt-2 ">{{ category.date }}</div>
                    </div>
                    <div>
                        <div class=" text-color">{{ category.category_name }}</div>

                        <div class="text-color">{{ category.title }}</div>
                    </div>

                    <div class=" mt-2 " v-html="category.description.length > 99 ? category.description.substring(0, 40) + '.....' : category.description">
                    </div>

                </div>
            </div>
        </section>
    </div>
</div>

<div>
    <FooterVue />
</div>
</template>

<script>
import HeaderVue from './Header.vue';
import FooterVue from './Footer.vue';
import axios from 'axios';
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
            isActive: null,

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
                    console.log(res, 'dddd');
                })
                .catch((err) => {
                    console.log(err);
                });
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
            axios
                .get(`https://blog-api-dev.octalinfotech.com/api/categories/${this.$route.params.id}/blogs`, {})
                .then((res) => {
                    this.total = res.data.data.total;
                    this.categoryWebs = res.data.data.data;
                    console.log(res, 'dddd');
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
    border-bottom: black solid 2px;
    color: red
}
</style>
