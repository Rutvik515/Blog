<template>
<div class="container mx-auto p-8">

    <!-- Navigation -->
    <div class="text-start mt-8">
        <router-link to="/" class="flex items-center text-gray-600">
            <i class="fa-solid fa-house"></i>
            <span class="ml-3">&gt;</span>
            <span class="ml-3 font-semibold">{{ blogWebs.category_name }}</span>
        </router-link>
    </div>

    <!-- Category Name -->
    <div class="font-size mt-4 text-start">
        <span>{{ blogWebs.category_name }}</span>
    </div>

    <!-- User Information -->
    <div class="flex items-center mt-4">
        <img :src="blogWebs.user_image" alt="" class="img-fluid object-cover img-width rounded-full">
        <div class="ml-4">
            <span class="user-name">{{ blogWebs.user_name }}</span>
            <span class="user-name">{{ blogWebs.date }}</span>
        </div>
    </div>

    <!-- Social Icons -->
    <div class="flex justify-center mt-4">
        <a data-mdb-ripple-init class="btn text-white btn-floating m-1" style="background-color: #3b5998;" href="#!" role="button">
            <i class="fab fa-facebook-f mr-2"></i>Facebook
        </a>
        <a data-mdb-ripple-init class="btn text-white btn-floating m-1" style="background-color: #55acee;" href="#!" role="button">
            <i class="fab fa-twitter mr-2"></i>Twitter
        </a>
        <a data-mdb-ripple-init class="btn text-white btn-floating m-1" style="background-color: #0082ca;" href="#!" role="button">
            <i class="fab fa-linkedin-in mr-2"></i>Linkedin
        </a>
        <a data-mdb-ripple-init class="btn text-white btn-floating m-1" style="background-color: #333333;" href="#!" role="button">
            <i class="fab fa-github mr-2"></i>Github
        </a>
    </div>

    <!-- Blog Content -->
    <div class="flex flex-col lg:flex-row justify-center items-center text-center mt-8 space-y-4 lg:space-y-0 lg:space-x-8 relative">
        <div class="lg:w-1/2">
            <img :src="blogWebs.image" alt="" class="w-75 h-full rounded-lg">
        </div>

        <div class="lg:w-1/2 mt-4 lg:mt-0">
            <div class="text-color mb-4">
                <p class="text-3xl font-semibold ">{{ blogWebs.title }}</p>
            </div>
            <div class="text-justify" v-html="blogWebs.description"></div>
        </div>
    </div>

    
    <section class="container mt-4">
      <div class="mt-10">
        <hr>
        <div>
            <h1 class="uppercasefont-semibold text-start mt-3 text-2xl">Related Posts</h1>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6 col-xl-4" v-for="blogShow in blogShows" :key="blogShow.id">

          <div @click="changeCategory(blogShow.id)">
                    <router-link :to='`/blogs/${blogShow.id}`'>
            <div class="mt-5 card " style="width:300px">
                    <img class="width-img img-fluid hover-effect object-cover" :src="blogShow.image" alt="">
            </div>
            <div class=" mt-2 d-flex w-full  justify-center gap-4">
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
        </router-link>
</div>
        

        </div>
    </div>
</section>

    <!-- <section class="container mt-4">
        <div class="row">
            <div class="col-md-6 col-xl-4" v-for="blogShow in blogShows" :key="blogShow.id">

                <div @click="changeCategory(blogShow.id)">
                    <router-link :to='`/blogs/${blogShow.id}`'>
                        <img class="width-img img-fluid hover-effect object-cover" :src="blogShow.image" alt="">
                        <div class=" mt-2 d-flex w-full   justify-start">
                            <div>

                                <img class="width-img img-fluid  rounded-pill pic-rounded " :src="blogShow.user_image" alt="">

                            </div>
                            <div class="ml-4 mt-2 ">{{ blogShow.user_name }}</div>
                            <div class="ml-4 mt-2 ">{{ blogShow.date }}</div>
                        </div>

                    </router-link>
                </div>
                <div class=" text-color">{{ blogShow.category_name }}</div>
                <div class="mt-5 card " style="width:300px">
                    <div class=" mt-2 " v-html="blogShow.description.length > 99 ? blogShow.description.substring(0, 40) + '.....' : blogShow.description">
                    </div>

                </div>
            </div>
        </div>
    </section> -->
</div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'blogWeb',
    data() {
        return {
            blogWebs: {},
            blogShows: {},
        };
    },
    mounted() {
        this.getBlogs(1);
        this.changeCategory(1);
    },
    methods: {
        getBlogs() {
            let data = localStorage.getItem('user');
            data = JSON.parse(data);
            let token = data.token;

            axios
                .get(`https://blog-api-dev.octalinfotech.com/api/blogs/${this.$route.params.id}/show`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then((res) => {
                    this.blogWebs = res.data.data.blog;
                    this.blogShows = res.data.data.latestPost;

                })
                .catch((err) => {
                    console.log(err);
                });
        },

        changeCategory() {
            let data = localStorage.getItem('user');
            data = JSON.parse(data);
            let token = data.token;

            axios
                .get(`https://blog-api-dev.octalinfotech.com/api/blogs/${this.$route.params.id}/show`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then((res) => {
                    this.getBlogs(1);
                    this.blogWebs = res.data.data.blog;
                    this.blogShows = res.data.data.latestPost;
                })
                .catch((err) => {
                    console.log(err);
                });
        }

    },

};
</script>

<style scoped>
/* Add your scoped styles here */
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
</style>
