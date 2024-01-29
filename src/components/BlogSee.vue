<template>
    <div>
    
        <div class="text-start">
            <router-link to="/admin/blog">
                <i class="fa-solid fa-house" @click="backClick"></i>
                <span class="ml-3">></span>
    
            </router-link>
    
            <span class="ml-3 font-semibold">
                {{ blogWebs.category_name }}
            </span>
        </div>
        <div class="font-size text-start">
            <span class="">
    
                {{ blogWebs.category_name }}
            </span>
    
        </div>
        <div class="d-flex">
            <span>
                <img :src="blogWebs.user_image" alt="" class="img-fluid object-cover img-width">
            </span>
            <span class="float-start user-name">{{ blogWebs.user_name }}</span>
            <span class="float-start user-name">{{ blogWebs.date }}</span>
        </div>
    
        <div class="icon-margin d-flex ">
            <!-- Facebook -->
            <a data-mdb-ripple-init class="btn text-white btn-floating m-1 " style="background-color: #3b5998;" href="#!" role="button"><i class="fab fa-facebook-f mr-2"></i>Facebook</a>
    
            <!-- Twitter -->
            <a data-mdb-ripple-init class="btn text-white btn-floating m-1" style="background-color: #55acee;" href="#!" role="button"><i class="fab fa-twitter mr-2"></i>Twitter</a>
    
            <!-- Google -->
    
            <!-- Linkedin -->
            <a data-mdb-ripple-init class="btn text-white btn-floating m-1" style="background-color: #0082ca;" href="#!" role="button"><i class="fab fa-linkedin-in mr-2"></i>Linkedin</a>
            <!-- Github -->
            <a data-mdb-ripple-init class="btn text-white btn-floating m-1" style="background-color: #333333;" href="#!" role="button"><i class="fab fa-github mr-2"></i>Github</a>
        </div>
    
        <div class="d-flex justify-content-center align-items-center text-center  container" >
        <div class="mt-32 row  ">
            <div class="col-6 bg-none">
            <img :src="blogWebs.image" alt="">
        </div>

        <div class="col-6">
            <div class="mb-4 text-color">
                <p>{{ blogWebs.title }}</p>
            </div>
            <div class="d-inline">
                <p v-html="blogWebs.description" class="text-justify"></p>
            </div>
        </div>
        </div>
       
    </div>
    </div>
    
    </template>
    
    <script>
    import axios from 'axios';
    
    export default {
        name: 'blogWeb',
        components: {},
        data() {
            return {
                blogWebs: [],
            };
        },
    
        mounted() {
            this.getBlogs();
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
                        this.blogWebs = res.data.data;
                        console.log(res.data.data.category_name);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            },
            backClick(){
                this.$router.push("/");
    
            },
        },
    };
    </script>
    
    <style scoped>
    /* Add your scoped styles here */
    
    img {
        width: 400px;
        height: 400px;
    }
    
    a {
        text-decoration: none;
        color: black;
        margin-left: 250px;
    
    }
    
    .img-width {
        width: 50px;
        height: 50px;
        margin-left: 240px;
        margin-top: 10px;
    }
    
    .font-size {
        font-size: 40px !important;
        font-family: 'Times New Roman', Times, serif;
        font: bold 700;
        margin-left: 250px !important;
        margin-top: 20px;
    
    }
    
    .user-name {
    
        margin-top: 20px;
        margin-left: 10px;
        font: bold 700;
        font-size: 20px;
        font-family: 'Times New Roman', Times, serif;
    
    }
    
    .icon-margin {
        margin-left: 250px;
        margin-top: 50px;
    }
    
    .text-color {
        font-family: 'Times New Roman', Times, serif;
        font-size: 25px;
        color: black;
        font: bold 700;
    }
    </style>
    