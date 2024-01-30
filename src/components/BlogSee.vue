<template>
    <div class="container mx-auto p-8">
  
      <!-- Navigation -->
      <div class="text-start mt-8">
        <router-link to="/admin/blog" class="flex items-center text-gray-600">
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
            <p class="text-3xl font-semibold">{{ blogWebs.title }}</p>
          </div>
          <div class="text-justify" v-html="blogWebs.description"></div>
        </div>
      </div>
      
  
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'blogWeb',
    data() {
      return {
        blogWebs: {},
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
  
  </style>
  