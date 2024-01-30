<template>
<div>
    <div class="header">
        <nav class="navbar navbar-expand-lg bg-gray-400 fixed-top">
            <div class="container flex items-center justify-between">
                <div class="flex items-center">
                    <img src="../assets/octal-logo.png" alt="" class="rounded-pill" style="width: 40px;" />
                    <h2 class="text-white ml-3">Octal Infotech</h2>
                </div>
                
                <div class="">
                    <div class="float-end">
                        <button type="button" class="lg:hidden navbar-toggler bg-white float-end " @click="toggleNavVisibility">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <ul class="list-reset py-2 px-2 text-center flex gap-3 display-none">
                        <li class="mb-2">
                            <a class="block text-white hover:text-gray-300">Home</a>
                        </li>
                        <li class="mb-2">
                            <a class="block text-white hover:text-gray-300">Blog</a>
                        </li>
                        <li class="mb-2">
                            <a class="block text-white hover:text-gray-300">Categories</a>
                        </li>
                        <li>
                            <a class="block text-white hover:text-gray-300">Contact Us</a>
                        </li>
                    </ul>
                </div>

                <!-- Responsive Navbar Menu -->
                <div v-if="isNavVisible" class="lg:hidden fixed top-14 left-0 right-0 bg-black z-50">
                    <ul class="list-reset py-4 px-2  text-justify">
                        <li class="mb-2">
                            <a class="block text-white hover:text-gray-300">Home</a>
                        </li>
                        <li class="mb-2">
                            <a class="block text-white hover:text-gray-300">Blog</a>
                        </li>
                        <li class="mb-2">
                            <a class="block text-white hover:text-gray-300">Categories</a>
                        </li>
                        <li>
                            <a class="block text-white hover:text-gray-300">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</div>
</template>

  
<script>
export default {
    name: 'headerVue',
    data() {
        return {
            isNavVisible: false
        };
    },
    methods: {
        toggleNavVisibility() {
            this.isNavVisible = !this.isNavVisible;
        }
    }
}
</script>

  
<style scoped>
.icon-margin {
    margin-left: 5px;
    margin-top: 16px;
    padding: 12px;
}

@media screen and (max-width:991px) {
    .display-none {
        display: none;
    }

}
</style>
