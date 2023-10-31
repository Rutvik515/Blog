<template>
        <div class="w-100 h-26 bg-danger fixed-top">hdjkhdh</div>

    <div>

      <div class="header">
        <nav class="navbar w-26 navbar-expand-lg bg-dark  flex-column">
          <div class="container-fluid ">
            <button
              type="button"
              class="navbar-toggler bg-white"
              data-bs-toggle="collapse"
              data-bs-target="#navbaraid"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse text-uppercase gap-5 justify-content-start " id="navbaraid">
              <ul class="navbar-nav flex-column">
                <router-link to="/layout/home" class="nav-link text-white">
                  <li class="nav-item">Home</li>
                </router-link>
                <router-link to="/layout/about" class="nav-link text-white">
                  <li class="nav-item">About</li>
                </router-link>
                <router-link to="/layout/project" class="nav-link text-white">
                  <li class="nav-item">Project</li>
                </router-link>
                <router-link to="/layout/service" class="nav-link text-white">
                  <li class="nav-item">Service</li>
                </router-link>
                <router-link to="/layout/contact" class="nav-link text-white">
                  <li class="nav-item">Contact</li>
                </router-link>
              </ul>
              <!-- <div> -->
                <!-- <a class="px-btn d-none d-lg-inline-flex text-white" href="#">Let's Talk</a> -->
              <!-- </div> -->
            </div>
          </div>
        </nav>
      </div>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'layoutComponent',
  }
  </script>
  
  <style  scoped>
  /* Add your custom styles for the vertical navbar here */
  .navbar {
    flex-direction: column;
  }
  .h-26{
    height: 70px;
  }
  .w-26{
    width: 200px;
    height: 100vh;
  }
  </style>
  
