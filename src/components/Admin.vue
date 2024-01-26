<template>
<!-- <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
                    <div class="container-fluid d-flex justify-content-between">
                        <div class="d-flex align-items-center">
                            <a class="navbar-brand" href="#">
                                <img src="http://octalinfotech.com/img/octal-logo.png" alt="Logo" style="width:40px;" class="rounded-pill">
                            </a>
                            <h5 class="text-uppercase text-light ms-2">octal infotech</h5>
                        </div>
                        <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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

                </nav> -->

<nav class="fixed top-0 z-50 w-full bg-gray-200      border-b border-gray- dark:bg-gray-800 dark:border-gray-700">
    <div class="px-2 py-2 lg:px-5 lg:pl-3">
        <div class="flex items-center justify-between">
            <div class="flex items-center justify-start rtl:justify-end">
                <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                    <span class="sr-only">Open sidebar</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
                        </path>
                    </svg>
                </button>
                <a class="flex ms-2 md:me-24 text-decoration-none ">
                    <img src="http://octalinfotech.com/img/octal-logo.png" alt="Logo" style="width:40px;" class="rounded-pill">
                    <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-black ml-2 text-black">Octal
                        Infotech</span>
                </a>
            </div>
            <div class="flex items-center">
                <div class="flex items-center ms-3">
                    <div>
                        <button type="button" class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                            <span class="sr-only">Open user menu</span>
                            <img class="w-12 h-12 rounded-full" src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png" alt="user photo" />
                        </button>
                    </div>
                    <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
                        <div class="flex gap-4 h-36 flex-col mt-2 flex-shrink-0 items-center justify-center px-3 shadow-sm border-b border-black/10" role="none"><img class="h-14 w-14 rounded-full object-cover" src="http://octalinfotech.com/img/octal-logo.png" alt="Your Company" role="none">
                            <h1 class="text-slate-500 text-lg font-bold space-x-3" role="none">OCTAL INFOTECH</h1>
                        </div>
                        <ul class="py-1 text-justify" role="none">
                            <li>
                                <button type="button" class="btn btn-" data-bs-toggle="modal" data-bs-target="#myModal">
                                    <a href="javascript:void(0)" class="block text-sm text-gray-700 font-bold text-decoration-none" id="headlessui-menu-item-6" role="menuitem" tabindex="-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-6 h-6 inline-block mx-2">
                                            <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd"></path>
                                        </svg> Profile </a>
                                </button>
                            </li>
                            <li>
                                <button type="button" class="btn btn-" data-bs-toggle="modal" data-bs-target="#ChangePassworld">
                                    <a href="javascript:void(0)" class="block  text-sm text-gray-700 font-bold text-decoration-none" id="headlessui-menu-item-7" role="menuitem" tabindex="-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-6 h-6 inline-block mx-2">
                                            <path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clip-rule="evenodd"></path>
                                        </svg> Change Password </a>
                                </button>
                            </li>
                            <li>
                                <button type="button" class="btn btn-" @click="logout">
                                    <a href="/login" class="block ml-3 text-sm text-gray-700 font-bold text-decoration-none " id="headlessui-menu-item-8" role="menuitem" tabindex="-1"><i class="fa-solid fa-arrow-right-from-bracket"></i> <span class="ml-3">Logout</span> </a>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</nav>

<aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-neutral-300 border-r border-gray-800 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
    <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <ul class="space-y-2 font-medium">
            <li>
                <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <router-link to="/admin/dashboard" class="router-link">
                        <i class="fa-solid fa-gauge fa-lg text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></i>
                        <span class="ms-3">Dashboard</span>
                    </router-link>
                </a>
            </li>
            <li>
                <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <router-link to="/admin/blog" class="router-link">
                        <i class="fa-solid fa-blog fa-lg text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></i>
                        <span class="ms-3">Blog</span>
                    </router-link>
                </a>
            </li>
            <li>
                <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <router-link to="/admin/tag" class="router-link">
                        <i class="fa-solid fa-tag fa-lg text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></i>
                        <span class="ms-3">Tag</span>
                    </router-link>
                </a>
            </li>
            <li>
                <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <router-link to="/admin/user" class="router-link">
                        <i class="fa-solid fa-user fa-lg text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></i>
                        <span class="ms-3">User</span>
                    </router-link>
                </a>
            </li>
            <li>
                <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <router-link to="/admin/categories" class="router-link">
                        <i class="fa-solid fa-list fa-lg text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"></i>
                        <span class="ms-3">Categories</span>
                    </router-link>
                </a>
            </li>
        </ul>
    </div>
</aside>

<div class="p-4 sm:ml-64">
    <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
        <router-view></router-view>
    </div>
</div>

<!-- <div>
                <div class="container-fluid d-flex p-0">
                    <div class="bg-color  pr-3 pb-2" id="navbarNav">
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
                </div>
            </div> -->
<!-- <router-view></router-view> -->
</template>

<script>
export default {
    name: 'adminComponent',

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

</style>
