<template>
  <div class="sm:px-6 lg:mx-auto bg-white lg:px-8">
        <div class="py-6 md:flex md:items-center md:justify-between  lg:border-gray-200">
            <div class="min-w-0 flex-1">
                <div class="flex items-center"><img class="hidden h-16 w-16 rounded-full sm:block"
                        src="https://ims-api.octalinfotech.com/storage/images/1686053683.jpg" alt="">
                    <div>
                        <div class="flex items-center"><img class="h-16 w-16 rounded-full sm:hidden"
                                src="https://ims-api.octalinfotech.com/storage/images/1686053683.jpg" alt="">
                            <h1 class="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:leading-9">
                               {{ currentTimeOfDay }} Rutvik Kher</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
      <router-link to="/admin/blog">

        <div class="flex flex-wrap justify-between  px-8 py-3 bg-green-50 rounded-sm shadow border-b-4 border-green-500 transition duration-1000 ease-in-out hover:scale-110">
            <a href="" class="" style="text-decoration: none;">
                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-green-600 dark:text-white">
                    Blog</h5>
            </a>
            <h1 class="text-2xl font-semibold text-black">{{ showDashboard.blog }}</h1>
        </div>
      </router-link>

            <router-link to="/admin/tag">
        <div class="flex flex-wrap justify-between px-8 py-3 bg-blue-50 rounded-sm shadow border-b-4 border-blue-500 transition duration-1000 ease-in-out hover:scale-110">
            <a href="" class="" style="text-decoration: none;">
                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-blue-600 dark:text-white">
                    Tags</h5>
            </a>
            <h1 class="text-2xl font-semibold text-black">{{ showDashboard.tag }}</h1>
        </div>
              </router-link>

                  <router-link to="/admin/user">
        <div href="#"
            class="flex flex-wrap justify-between px-8 py-3 bg-pink-50 rounded-sm shadow border-b-4 border-pink-500 transition duration-1000 ease-in-out hover:scale-110">
            <a href="" class="" style="text-decoration: none;">
                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-pink-600 dark:text-white">
                    Users</h5>
            </a>
            <h1 class="text-2xl font-semibold text-black">{{ showDashboard.user }}</h1>
        </div>

      </router-link>

      <router-link to="/admin/Categories">
        <div href="#"
            class="flex flex-wrap justify-between px-8 py-3 bg-yellow-50 rounded-sm shadow border-b-4 border-yellow-500 transition duration-1000 ease-in-out hover:scale-110">
            <a href="" class="" style="text-decoration: none;">
                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-yellow-600 dark:text-white">
                    Categories</h5>
            </a>
            <h1 class="text-2xl font-semibold text-black">{{ showDashboard.category }}</h1>
        </div>
              </router-link>

              
    </div>
    <!-- <div class="bg-body-secondary container-fluid hg-10 wh-10 ">
      <div class="d-flex flex-row mt-4 align-items-md-center text-center" style="margin-left: 200px;">
        <div class="items-center">
         <img data-v-1fd8a062="" src="../assets/octal-logo.png" alt="Logo" class="rounded-pill" style="width: 40px;">
        </div>
        <div class="ml-2">
          <h1 class="font-size mb-2"> {{ currentTimeOfDay }} Rutvik Kher</h1>
        </div>
      </div>
      <div class="ml-40 ">
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
    </div> -->
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
         console.log(this.currentHour);
            switch (true) {
                case this.currentHour >= 6 && this.currentHour < 12:
                    timeOfDay = "Good Morning!";
                    break;
                case this.currentHour >= 12 && this.currentHour < 17:
                    timeOfDay = "Good Afternoon!";
                    break;
                case this.currentHour >= 17 && this.currentHour < 21:
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


.transition-dashboard {
  transition: all 0.5s ease-in-out;

}

/* .transition-dashboard:hover {
  transform: scale(1.060)} */

  </style>
  