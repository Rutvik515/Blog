<template>
    <div>
      <mainLayout>
        <template #header>
          <div>
            <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
              <div class="container-fluid d-flex justify-content-between">
                <div class="d-flex align-items-center">
                  <a class="navbar-brand" href="#">
                    <img src="http://octalinfotech.com/img/octal-logo.png" alt="Logo" style="width:40px;" class="rounded-pill">
                  </a>
                  <h5 class="text-uppercase text-light ms-2">octal infotech</h5>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
                <div class="dropdown">
                  <button data-bs-toggle="dropdown" class="navbar-brand border-0 bg-none">
                    <img src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png" alt="Logo" style="width:40px;" class="rounded-pill dropdown-toggle" aria-expanded="false" id="dropdownMenuButton1">
                  </button>
                  <div class="dropdown-menu dropdown-menu-end mt-2" aria-labelledby="dropdownMenuButton1">
                    <div class=" align-items-lg-center d-flex justify-content-center ">
                      <img class="w-25 h-25 rounded-5" src="http://octalinfotech.com/img/octal-logo.png" alt="">
                    </div>

                      <div class="text-center">
                      <p class="mt-2">OCTAL INFOTECH</p>
                    </div>
                    <hr class="my-2">
                    <a class="dropdown-item" href="#"><i class="fa-solid fa-user me-3"></i>Profile</a>
                    <a class="dropdown-item" href="#"><i class="fa-solid fa-lock me-3"></i>Change Password</a>
                    <a class="dropdown-item" @click="logout" href="#"><i class="fa-solid fa-arrow-right-from-bracket me-3"></i>Logout</a>
                  </div>
                </div>
              </div>
              
            </nav>
          </div>
          <div>
            <div class="container-fluid d-flex p-0">
    <div class="bg-color  pr-3 pb-2">
      <nav class="navbar p-0">
        <ul class="navbar-nav h-100 flex-column w-100">
          <router-link to="/admin/dashboard" class="nav-item text-decoration-none pt-2">
            <li :class="{ 'nav-link': true, 'active': activeLink === 'dashboard' }" @click="setActiveLink('dashboard')">
              <i class="fa-solid fa-house ms-3"></i><span class="ms-2">Dashboard</span>
            </li>
          </router-link>
          <hr class="my-1">
          <router-link to="/admin/categories" class="nav-item text-decoration-none pt-2">
            <li :class="{ 'nav-link': true, 'active': activeLink === 'categories' }" @click="setActiveLink('categories')">
              <i class="fa-solid ms-3 fa-graduation-cap"></i><span class="ms-2">Categories</span>
            </li>
          </router-link>
          <hr class="my-1">
          <router-link to="/admin/tag" class="nav-item text-decoration-none pt-2">
            <li :class="{ 'nav-link': true, 'active': activeLink === 'tag' }" @click="setActiveLink('tag')">
              <i class="fa-solid ms-3 fa-rocket"></i><span class="ms-2">Tag</span>
            </li>
          </router-link>
          <hr class="my-1">
          <router-link to="/admin/users" class="nav-item text-decoration-none pt-2">
            <li :class="{ 'nav-link': true, 'active': activeLink === 'users' }" @click="setActiveLink('users')">
              <i class="fa-solid ms-3 fa-users"></i><span class="ms-2">Users</span>
            </li>
          </router-link>
          <hr class="my-1">
          <router-link to="/admin/blog" class="nav-item text-decoration-none pt-2">
            <li :class="{ 'nav-link': true, 'active': activeLink === 'blog' }" @click="setActiveLink('blog')">
              <i class="fa-solid ms-3 fa-rocket"></i><span class="ms-2">Blog</span>
            </li>
          </router-link>
        </ul>
      </nav>
    </div>
    <router-view></router-view>
  </div>
          </div>
        </template>
      </mainLayout>
    </div>
    
  </template>
  
  <script>
  import mainLayout from './MainLayout.vue';
  export default {
    name: 'adminComponent',
    components: {
      mainLayout,
    },
    data() {
      return {
        isOpen: false,
        activeLink: null,
      }
    },
    methods: {
      setActiveLink(link) {
      this.activeLink = link;
    },
      logout() {
        this.$router.push("/login");
        localStorage.removeItem("user");
        localStorage.removeItem("token");
      }
    },
  }
  </script>
  
  <style scoped>
.active {
  background-color: #90b2d4 !important;
}

  .w-100{
    width: 180px !important;
    margin-top: 10px;
  }
  .h-100 {
    height: 100%;
  }

  .bg-color{
    background-color: #e4e8eafc;
    height: 100vh;
    position:fixed
  }
  
  .bg-dark {
    background-color: #343a40 !important;
  }
  
  .navbar-brand img {
    max-width: 40px;
  }
  
  .text-light {
    color: #fff !important;
  }
  
  ul,li{
    padding: 5px;
    padding-bottom: 5px;
    padding-top: 5px;
    margin-left:2px ;
  }
  .dropdown-menu {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .dropdown-menu img {
    max-width: 100%;
    height: auto;
  }
  
  .navbar-nav {
    width: 100%;
  }
  
  .nav-link {
    display: flex;
    align-items: center;
    color: #000 !important;
  }
  
  .nav-link i {
    color: #000;
  }
  
  .nav-link:hover {
    background-color: #98c9e2;
    color: #fff !important;
  }
  </style>
  