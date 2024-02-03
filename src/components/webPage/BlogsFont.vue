<template>
<headerVue @search="search" />
<div>
    <section class="container mt-28">
        <div class="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 w-75">
            <div v-for="blogShow in blogShows" :key="blogShow.id">

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
            </div>
        </div>
    </section>
</div>
<div class="mt-16">
    <footerVue />
</div>
</template>

<script>
import axios from 'axios';
import headerVue from '../Header.vue'
import footerVue from '../Footer.vue';

export default {
    name: 'blogFont',
    components: {
        headerVue,
        footerVue

    },
    data() {
        return {
            blogShows: [],
        }
    },
    mounted() {
        this.getBlogs();
    },
    methods: {
        search(value) {
            //    console.log(value); 
            this.getBlogs(1, value)
        },
        getBlogs(page,search='') {

            axios.get(`https://blog-api-dev.octalinfotech.com/api/blogs?page=${page}&search=${search}`, {

            }).then((res) => {
                this.blogShows = res.data.data.data;
                // console.log(res.data.data);
            }).catch((err) => {
                console.log(err);
            })

        },
    },

}
</script>

<style lang="scss" scoped>

</style>
