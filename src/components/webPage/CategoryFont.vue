<template>
<headerVue @search="search"/>
<div>
    <section class="container mt-28">
        <div class="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 w-75">
            <div v-for="category in categories" :key="category.id">
                <div class="bg-white shadow-lg rounded-md overflow-hidden">
                    <img class="w-full h-48 object-cover" :src="category.image" alt="">
                    <div class="p-4">
                        <div class="flex items-center justify-around space-x-4">
                            <!-- <img class="w-10 h-10 rounded-full" :src="category.image" alt=""> -->

                            <div class="text-2xl font-semibold ">{{ category.name }}</div>
                            <!-- <div class="text-xs text-gray-500">{{ category.date }}</div> -->

                        </div>
                        <div class="mt-2 text-lg font-semibold">{{ category.title }}</div>
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
    name: 'categoryVue',
    components: {
        headerVue,
        footerVue
    },
    data() {
        return {
            categories: [],

        }
    },
    mounted() {
        this.getCategories()
    },
    methods: {

        search(value) {
            //    console.log(value); 
            this.getCategories(1, value)
        },

        getCategories(page,search = '') {

            axios.get(`https://blog-api-dev.octalinfotech.com/api/categories?page=${page}&search=${search}`, {

            }).then((res) => {
                this.categories = res.data.data.data;

            }).catch((err) => {
                console.log(err);
            })

        },
    },

}
</script>

<style lang="scss" scoped>

</style>
