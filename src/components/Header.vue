<template>
<div>
    <div class="header">
        <nav class="navbar navbar-expand-lg bg-gray-400 fixed-top">
            <div class="container flex items-center justify-between">
                <router-link to="/">
                <div class="flex items-center">
                    <img src="../assets/octal-logo.png" alt="" class="rounded-pill" style="width: 40px;" />
                    <h2 class="text-white ml-3">Octal Infotech</h2>
                </div>
            </router-link>

                <div class="flex gap-3">
                    <div class="float-end">
                        <button type="button" class="lg:hidden navbar-toggler bg-white float-end " @click="toggleNavVisibility">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <ul class="list-reset py-2 px-2 text-center flex gap-3 display-none">
                        <router-link to="/">
                            <li class="mb-2">
                                <a class="block text-white hover:text-gray-300" href="home">Home</a>
                            </li>
                        </router-link>
                        <router-link to="/blog">
                            <li class="mb-2">
                                <a class="block text-white hover:text-gray-300">Blog</a>
                            </li>
                        </router-link>
                        <router-link to="/category">
                            <li class="mb-2">
                                <a class="block text-white hover:text-gray-300">Categories</a>
                            </li>
                        </router-link>
                        <li>
                            <router-link to="/contact">
                                <a class="block text-white hover:text-gray-300">Contact Us</a>
                            </router-link>
                        </li>

                    </ul>
                    <searchvue @search="handleSearch" />
                </div>

                <!-- Responsive Navbar Menu -->
                <div v-if="isNavVisible" class="lg:hidden fixed top-14 left-0 right-0 bg-black z-50">
                    <ul class="list-reset py-4 px-2  text-justify">
                        <router-link to="/">
                            <li class="mb-2">
                                <a class="block text-white hover:text-gray-300">Home</a>
                            </li>
                        </router-link>
                        <router-link to="/blog">
                            <li class="mb-2">
                                <a class="block text-white hover:text-gray-300">Blog</a>
                            </li>
                        </router-link>
                        <router-link to="/category">
                        <li class="mb-2">
                            <a class="block text-white hover:text-gray-300">Categories</a>
                        </li>
                    </router-link>
                        <router-link to="/contact">
                            <li>
                                <a class="block text-white hover:text-gray-300">Contact Us</a>
                            </li>
                        </router-link>

                    </ul>
                    <searchvue @search="handleSearch" />

                </div>
            </div>
        </nav>
    </div>

</div>
</template>

<script>
// import axios from 'axios';
import searchvue from '../components/SearchBox.vue'
export default {
    name: 'headerVue',
    components: {
        searchvue
    },
    data() {
        return {
            isNavVisible: false,
            blogShows: [],
            search: '',
        };
    },

    computed: {
        filterBlogs() {
            if (!this.blogShows || !Array.isArray(this.blogShows)) {
                return [];
            }

            return this.blogShows.filter((item) => {
                return Object.values(item).some((val) => {
                    return String(val).toLowerCase().includes(this.search.toLowerCase());
                });
            });
        }
    },
    mounted() {
        // this.getBlogs();
    },
    watch: {

    },
    methods: {
        toggleNavVisibility() {
            this.isNavVisible = !this.isNavVisible;
        },
        handleSearch(value) {
            this.$emit('search', value);
            // console.log(value);
        },

    },

}
</script>

<style scoped>
.icon-margin {
    margin-left: 5px;
    margin-top: 16px;
    padding: 12px;
}

@media screen and (max-width:991px) {
    .display-none {
        display: none;
    }

}
</style>
