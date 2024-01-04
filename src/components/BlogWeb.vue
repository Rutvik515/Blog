<template>
<div>

    <div class="text-start">
        <router-link to="/">
            <i class="fa-solid fa-house"></i>
            <span class="ml-3">></span>

        </router-link>

        <span class="ml-3 font-semibold">
            {{ blogWebs.category_name }}
        </span>
    </div>
    <div class="font-size text-start">
        <span class="">

            {{ blogWebs.category_name }}
        </span>

    </div>
    <div class="d-flex">
        <span>
            <img :src="blogWebs.user_image" alt="" class="img-fluid object-cover img-width">
        </span>
        <span class="float-start user-name">{{ blogWebs.user_name }}</span>
        <span class="float-start user-name">{{ blogWebs.date }}</span>
    </div>

    <div class="icon-margin d-flex ">
        <button type="button" class="btn btn-primary d-flex ms-2" style="width: 150px;height: 40px;"><img class="align-items-center" src="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg " style="width: 30px;height: 30px;" alt=""><span class="text-center mt-1 ml-2">Facebook</span></button>
        <button type="button" class="btn btn-danger d-flex ml-3 " style="width: 120px;height: 40px;"><img class="mt-1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/292px-Logo_of_Twitter.svg.png" alt="" style="width: 20px;height: 20px;"><span class="text-center mt-1  ml-3">Twitter</span></button>
        <button type="button" class="btn btn-info d-flex ml-3 " style="width: 140px;height: 40px;"><img class="mt-1" src="https://cdn3d.iconscout.com/3d/free/thumb/free-envelope-mail-6431881-5307257.png" alt="" style="width: 20px;height: 20px;"><span class="text-center mt-1  ml-3 text-white">Envelope</span></button>
        <button type="button" class="btn btn-primary d-flex ml-3 " style="width: 140px;height: 40px;"><img class="mt-1" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" alt="" style="width: 20px;height: 20px;"><span class="text-center ml-3 mt-1">Linkedin</span></button>
    </div>

    <div class="d-flex justify-content-around container mt-32 ">
        <div>
          <img :src="blogWebs.image" alt="">
        </div>
        <div>
          <p v-html="blogWebs.description"></p>
        </div>
    </div>

</div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'blogWeb',
    components: {},
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

img {
    width: 400px;
    height: 400px;
}

a {
    text-decoration: none;
    color: black;
    margin-left: 250px;

}

.img-width {
    width: 50px;
    height: 50px;
    margin-left: 240px;
    margin-top: 10px;
}

.font-size {
    font-size: 40px !important;
    font-family: 'Times New Roman', Times, serif;
    font: bold 700;
    margin-left: 250px !important;
    margin-top: 20px;

}

.user-name {

    margin-top: 20px;
    margin-left: 10px;
    font: bold 700;
    font-size: 20px;
    font-family: 'Times New Roman', Times, serif;

}

.icon-margin {
    margin-left: 250px;
    margin-top: 50px;
}
</style>
