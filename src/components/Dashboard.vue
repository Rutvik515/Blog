<template>
    <div class="bg-body-secondary container-fluid hg-10 wh-10 ">
      <div class="d-flex flex-column flex-md-row align-items-md-center" style="margin-left: 180px;">
        <img class="m-3 mt-4 img-fluid " src="https://ims-api.octalinfotech.com/images/avatar.png" style="height: 64px;" alt="">
        <div class="mt-4">
          <h1 class="font-size mb-2">Good Morning, Rutvik Kher</h1>
        </div>
      </div>
  
      <div class="d-flex flex-column flex-md-row w-75 gap-3 gap-md-5 p-3 container " style="margin-left: 180px;">
        <div class="w-100 w-md-50 bg-dark p-4 text-white bg-current mb-3 mb-md-0">
          <p>User {{ showDashboard.user }}</p>
        </div>
        <div class="w-100 w-md-50 bg-dark p-4 text-white mb-3 mb-md-0">
          <p>Blog {{ showDashboard.blog }}</p>
        </div>
        <div class="w-100 w-md-50 bg-dark p-4 text-white mb-3 mb-md-0">
          <p>Tag {{ showDashboard.tag }}</p>
        </div>
        <div class="w-100 w-md-50 bg-dark p-4 text-white">
          <p>Category {{ showDashboard.category }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'HomeComponent',
    data() {
      return {
        showDashboard: {}
      };
    },
    mounted() {
      this.getDashboard();
    },
    methods: {
      getDashboard() {
        let data = localStorage.getItem('user');
        data = JSON.parse(data);
        let token = data.token;
  
        axios
          .get('https://blog-api-dev.octalinfotech.com/api/dashboard', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          .then((res) => {
            this.showDashboard = res.data.data;
          });
      }
    }
  };
  </script>
  
  <style scoped>
  .text {
    text-decoration: none;
  }

  
  .border-none {
    border: none;
  }
  .ms-6 {
    margin-left: 54px;
    font-size: 18px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }
  .hg-10 {
    height: 100px;
  }
  .font-size {
    font-size: 30px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #111825;
    font-weight: 700;
  }
  .mt-6 {
    margin-top: 40px;
  }
  </style>
  