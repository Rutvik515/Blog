<template>
    <div class="bg-body-secondary container-fluid hg-10 wh-10 ">
      <div class="d-flex flex-row mt-4 align-items-md-center text-center" style="margin-left: 200px;">
        <div class="items-center">
         <img data-v-1fd8a062="" src="../assets/octal-logo.png" alt="Logo" class="rounded-pill" style="width: 40px;">
        </div>
        <div class="ml-2">
          <h1 class="font-size mb-2"> {{ currentTimeOfDay }} Rutvik Kher</h1>
        </div>
      </div>
      <div class="ml-40 mt-10">
      <div class="d-flex flex-column   flex-md-row w-50  gap-md-5 p-3 container ">
        <div class="w-100 w-md-50 d-flex justify-content-between p-4 text-white bg-current mb-3 mb-md-0 bg-green-50 rounded-sm shadow border-b-4 border-green-500 ">
          <h5 data-v-cef1fb98="" class="mb-2 text-2xl font-semibold tracking-tight text-green-600 ">User</h5>
          <h1 data-v-cef1fb98="" class="text-2xl font-semibold text-black"> {{ showDashboard.user }}</h1>
        </div>
        <div class="w-100 w-md-50 d-flex justify-content-between p-4 text-white bg-current mb-3 mb-md-0 bg-yellow-50 rounded-sm shadow border-b-4 border-yellow-500 ">
          <h5 data-v-cef1fb98="" class="mb-2 text-2xl font-semibold tracking-tight text-yellow-600 ">Blog</h5>
          <h1 data-v-cef1fb98="" class="text-2xl font-semibold text-black"> {{ showDashboard.blog }}</h1>
        </div>
      </div>
      <div class="d-flex flex-column align-items-center flex-md-row w-50 gap-md-5 p-3 container">

        <div class="w-100 w-md-50 d-flex justify-content-between p-4 text-blue bg-current mb-3 mb-md-0 bg-blue-50 rounded-sm shadow border-b-4 border-blue-500 ">
          <h5 data-v-cef1fb98="" class="mb-2 text-2xl font-semibold tracking-tight text-blue-600 ">Tag</h5>
          <h1 data-v-cef1fb98="" class="text-2xl font-semibold text-black"> {{ showDashboard.tag }}</h1>
        </div>
        <div class="w-100 w-md-50 d-flex justify-content-between p-4 text-blue bg-current mb-3 mb-md-0 bg-pink-50 rounded-sm shadow border-b-4 border-pink-500 ">
          <h5 data-v-cef1fb98="" class="mb-2 text-2xl font-semibold tracking-tight text-pink-600 ">Category</h5>
          <h1 data-v-cef1fb98="" class="text-2xl font-semibold text-black"> {{ showDashboard.category }}</h1>
        </div>
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
        showDashboard: {},
        currentHour: new Date().getHours(),
      };
    },
    computed: {
    currentTimeOfDay() {
      return this.getTimeOfDay(this.currentHour);
    },
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
      },
      getTimeOfDay() {
      let timeOfDay;

      switch (true) {
        case this.currentHour   > 6:
          timeOfDay = "Good Morning!";
          break;
        case this.currentHour > 12:
          timeOfDay = "Good Afternoon!";
          break;
          case this.currentHour > 21:
          timeOfDay = "Good Evening!";
          break;
        default:
          timeOfDay = "Good Night!";
          break;
      }

      return timeOfDay;
    },
  },
    
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
  