<template>
<div>
    
<section class="container mt-4">
    <div class="row">
        <div class="col-md-6 col-xl-4" v-for="blogShow in blogShows" :key="blogShow.id">

            <div class="mt-5 card " style="width:300px">
                <router-link :to='`/blogsee/${blogShow.id}`'>
                    <img class="width-img img-fluid hover-effect object-cover" :src="blogShow.image" alt="">
                </router-link>
            </div>
            <div class=" mt-2 d-flex width-user ml-14 justify-evenly">
                <div>

                    <img class="width-img img-fluid  rounded-pill pic-rounded " :src="blogShow.user_image" alt="">

                </div>
                <div class="ml-4 mt-2 ">{{ blogShow.user_name }}</div>
                <div class="ml-4 mt-2 ">{{ blogShow.date }}</div>
            </div>
            <div class=" text-color">{{ blogShow.category_name }}</div>

            <!-- <div class="mr-28 mt-2 text-color">{{ blogShow.title }}</div> -->
            <div class=" mt-2 " v-html="blogShow.description.length > 99 ? blogShow.description.substring(0, 40) + '.....' : blogShow.description">
            </div>

        </div>
    </div>
</section>

<section>
    <div class="flex justify-center mt-5 hover-effect1">
        <img src="../../assets/octal-logo.png" alt="" class="rounded-img">
    </div>
    <div class="mt-4 text-size">
        <p> <b>❝</b> One-stop solution for a wide range of web development services. Fully customized and responsive websites- <br> worldclass solution to our valued customers. Expiries at fullscale, personalized-unlocking endless possibilities. <br>Shopify and Shopify Plus development is Octal Infotech's specialty. We have a top team of E-Commerce web <br>developers.</p>
        <div>
            <i class="fa-solid fa-star" style="color: #e2d43c;"></i>
            <i class="fa-solid fa-star" style="color: #e2d43c;"></i>
            <i class="fa-solid fa-star" style="color: #e2d43c;"></i>
            <i class="fa-solid fa-star" style="color: #e2d43c;"></i>
            <i class="fa-solid fa-star" style="color: #e2d43c;"></i>

            <!-- <i class="fa-solid fa-star-half-stroke" style="color: #e2d43c;"></i> -->
        </div>
        <!-- <i class="fa-regular fa-star  bg-yellow-400"></i> -->
    </div>
</section>


      <!-- map -->
<!-- <section>
    <div class="d-flex justify-content-center mt-16">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d59506.18818722751!2d72.85386725000001!3d21.226424749999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i1200!4f13.1!5e0!3m2!1sen!2sin!4v1686806699190!5m2!1sen!2sin" width="70%" height="450px" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

    </div>
</section> -->

                  <!-- carousel -->
<section class="mt-16">
    <div id="default-carousel" class="relative w-75 container" data-carousel="slide">
    <!-- Carousel wrapper -->
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
         <!-- Item 1 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="../../assets/web dev.jpg" class="absolute block w-75 object-cover rounded -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 2 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="../../assets/web-ful.jpg" class="absolute block w-75 object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 3 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="../../assets/web-desi.webp" class="absolute block w-75 object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 4 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="../../assets/web-design.jpg" class="absolute block w-75 object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 5 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="../../assets/web-development.jpg" class="absolute block w-75 object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
    </div>
    <!-- Slider indicators -->
    <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
    <!-- Slider controls -->
    <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>
</section>


</div>
</template>

<script>
export default {
    name: 'homeVue',
    data() {
        return {

        }
    },

}
</script>

<style lang="scss" scoped>

</style>
