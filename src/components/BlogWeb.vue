<template>
    <div>
      <!-- <div v-for="blogWeb in blogWebs" :key="blogWeb.id">
        <div style="z-index: -1;" class="mr-44 mt-1">{{ blogWeb.category_name }}</div>
      </div> -->
      <img src="" alt="">

      {{ blogWebs.category_name }}
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'blogWeb',
    components: {
    },
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
    },
  };
  </script>
  
  <style scoped>
  /* Add your scoped styles here */
  </style>
  