<template>
<footer class="bg-gray-500">
    <div class="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <div class="text-white flex gap-4">
                <img src="../assets/octal-logo.png" alt="" class="w-[50px] h-[50px] "> <span class="font-semibold text-3xl">Octal Infotech</span>
            </div>

            <ul class="mt-8 flex justify-start gap-6 sm:mt-0 sm:justify-end ">

                <div class="mt-6 lg:mb-0 mb-6">
                    <button class="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                        <i class="fab fa-twitter"></i></button><button class="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                        <i class="fab fa-facebook-square"></i></button><button class="bg-white text-pink-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                        <i class="fab fa-dribbble"></i></button><button class="bg-white text-black-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                        <i class="fab fa-github"></i>
                    </button>
                </div>
            </ul>
        </div>

        <div class="grid grid-cols-1 gap-8 border-t border-gray-100 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:pt-16">
            <div>
                <p class="font-medium text-white text-justify">Cetegories</p>

                <ul class="mt-6 space-y-4 text-sm text-justify" v-for="category in categories" :key="category">
                    <div  class="cursor-pointer">
                        <router-link :to='`/category/${category.id}/blog`'>
                            <li>
                            </li>
                            <a href="#" class="text-white  transition hover:opacity-75 p-2" :class="category.id === isActive ? 'router-link-active' : ''">
                                 {{category.name}} <span>({{ category.blog_count }})</span></a>
                        </router-link>
                    </div>
                </ul>
            </div>

            <div>
                <p class="font-medium text-white text-justify">Company</p>

                <ul class="mt-6 space-y-4 text-sm text-justify">
                    <li>
                        <a href="#" class="text-white transition hover:opacity-75"> About </a>
                    </li>

                    <li>
                        <a href="#" class="text-white transition hover:opacity-75"> Meet the Team </a>
                    </li>

                    <li>
                        <a href="#" class="text-white transition hover:opacity-75"> Accounts Review </a>
                    </li>
                </ul>
            </div>

            <div>
                <p class="font-medium text-white text-justify">Helpful Links</p>

                <ul class="mt-6 space-y-4 text-sm text-justify">
                    <li>
                        <a href="#" class="text-white transition hover:opacity-75"> Contact </a>
                    </li>

                    <li>
                        <a href="#" class="text-white transition hover:opacity-75"> FAQs </a>
                    </li>

                    <li>
                        <a href="#" class="text-white transition hover:opacity-75"> Live Chat </a>
                    </li>
                </ul>
            </div>

            <div>
                <p class="font-medium text-white text-justify">Legal</p>

                <ul class="mt-6 space-y-4 text-sm text-justify">
                    <li>
                        <a href="#" class="text-white transition hover:opacity-75"> Accessibility </a>
                    </li>

                    <li>
                        <a href="#" class="text-white transition hover:opacity-75"> Returns Policy </a>
                    </li>

                    <li>
                        <a href="#" class="text-white transition hover:opacity-75"> Refund Policy </a>
                    </li>

                    <li>
                        <a href="#" class="text-white transition hover:opacity-75"> Hiring Statistics </a>
                    </li>
                </ul>
            </div>
        </div>

        <p class="text-xl text-white">&copy; 2024. Company Name. Octal Infotech</p>
    </div>
</footer>
</template>

<script>
import axios from 'axios';

export default {
    name: "footerComponent",
    components: {},
    data() {
        return {
            categories: [],
            isActive:null,

        }
    },
    mounted() {
        this.getCategories();
    },
    methods: {
        getCategories() {
            let data = localStorage.getItem('user');
            data = JSON.parse(data);
            let token = data.token;

            axios.get(`https://blog-api-dev.octalinfotech.com/api/categories/count`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((res) => {
                this.categories = res.data.data.data;

            }).catch((err) => {
                console.log(err);
            })

        },
        // currentActive(id) {
        //   this.isActive = id;

        //     axios.get(`https://blog-api-dev.octalinfotech.com/api/categories/${this.$route.params.id}/blogs`, {
              
        //     }).then((res) => {
        //         this.categories = res.data.data.data;

        //     }).catch((err) => {
        //         console.log(err);
        //     })

        // }
    },
}
</script>

<style scoped>
.footer {
    position: relative;
    width: 100%;
    /* background: #171c24; */
    min-height: 100px;
    padding: 20px 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.social-icon,
.menu {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    flex-wrap: wrap;
}

.social-icon__item,
.menu__item {
    list-style: none;
}

.social-icon__link {
    font-size: 2rem;
    color: #fff;
    margin: 0 10px;
    display: inline-block;
    transition: 0.5s;
}

.social-icon__link:hover {
    transform: translateY(-10px);
}

.menu__link {
    font-size: 1.2rem;
    color: #fff;
    margin: 0 10px;
    display: inline-block;
    transition: 0.5s;
    text-decoration: none;
    opacity: 0.75;
    font-weight: 300;
}

.menu__link:hover {
    opacity: 1;
}

.footer p {
    color: #fff;
    margin: 15px 0 10px 0;
    font-size: 1rem;
    font-weight: 300;
}

.wave {
    position: absolute;
    top: -100px;
    left: 0;
    width: 100%;
    height: 100px;
    background: url("https://i.ibb.co/wQZVxxk/wave.png");
    background-size: 1000px 100px;
}

.wave#wave1 {
    z-index: 1000;
    opacity: 1;
    bottom: 0;
    animation: animateWaves 4s linear infinite;
}

.wave#wave2 {
    z-index: 999;
    opacity: 0.5;
    bottom: 10px;
    animation: animate 4s linear infinite !important;
}



.wave#wave3 {
    z-index: 1000;
    opacity: 0.2;
    bottom: 15px;
    animation: animateWaves 3s linear infinite;
}

.router-link-active{
    background: gray !important;
    color: rgba(0, 0, 0, 0) !important;;
}
.wave#wave4 {
    z-index: 999;
    opacity: 0.7;
    bottom: 20px;
    animation: animate 3s linear infinite;
}

@keyframes animateWaves {
    0% {
        background-position-x: 1000px;
    }

    100% {
        background-positon-x: 0px;
    }
}

@keyframes animate {
    0% {
        background-position-x: -1000px;
    }

    100% {
        background-positon-x: 0px;
    }
}
</style>
