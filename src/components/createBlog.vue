<template>
<div class="ml-96 mt-12 width rounded-5">
    <div class="ml-5" id="modal" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content" style="width: auto;">
                <div class="modal-header">
                    <h5 class="modal-title">New Blog</h5>
                    <router-link to="/layout/blog">
                        <button type="button" class="bg-dark text-white rounded-2 p-2 mr-5 mt-3">Back</button>
                    </router-link>
                </div>
                <form @submit.prevent="submitForm">
                    <div class="modal-body d-flex gap-4">
                        <div class="mt-2 text-start">
                            <label for="name">Title<span class="text-danger">*</span></label>
                            <div><input id="name" class="border-2 p-2 width-5 rounded-2" type="text" placeholder="Enter your title" v-model="createBlog.title"></div>
                        </div>
                        <div class="mt-2 text-start">
                            <label for="email">Slug<span class="text-danger">*</span></label>
                            <div><input id="email" class="border-2 p-2  width-5 rounded-2 " type="text" placeholder="Enter your slug" v-model="createBlog.slug"></div>
                        </div>
                    </div>
                    <div class="modal-body d-flex gap-4">
                        <div class="mt-2 text-start">
                            <label for="password">User<span class="text-danger">*</span></label>
                            <div>
                                
                                <!-- <input id="password" class="border-2 p-2 width-5 rounded-2" type="password" placeholder="Enter your use"> -->
                                <Multiselect class=" width-5 rounded-2" v-model="user" :options="userOptions"  placeholder="Select Option"/>
                            </div>
                        </div>
                        <div class="mt-2 text-start">
                            <label for="confirmPassword">Tag<span class="text-danger">*</span></label>
                            <div>
                                <Multiselect class=" width-5 rounded-2" v-model="tage" :options="tageOptions"  placeholder="Select Option"/>
                               
                                <!-- <input id="confirmPassword" class="border-2 p-2 width-5 rounded-2" type="password" placeholder="Enter your tag" v-model="createUser"> -->
                            </div>
                        </div>
                    </div>
                    <div class="modal-body d-flex gap-4">
                        <div class="mt-2 text-start">
                            <label for="password">Categories<span class="text-danger">*</span></label>
                            <div>
                                <Multiselect class=" width-5 rounded-2" v-model="categories" :options="categoriesOptions"  placeholder="Select Option"/>

                                <!-- <input id="password" class="border-2 p-2 width-5 rounded-2" type="password" placeholder="Enter your categories" v-model="createUser"> -->
                            </div>
                        </div>
                        <div class="mt-2 text-start">
                            <label for="confirmPassword">Date<span class="text-danger">*</span></label>
                            <div><input id="confirmPassword" class="border-2 p-2 width-5 rounded-2" type="password" placeholder="Enter your date" v-model="createUser"></div>
                        </div>
                    </div>
                    <div class="text-start p-0 mt-2">
                        <label class="container p-0">User image <span class="text-danger">*</span></label>
                        <div class="container border-2 p-0 text-center rounded-2 float-lg-start " style="width: 480px;height: 44px;">
                            <input ref="fileupload" type="file" class="custom-file-input mt-1" style="cursor: pointer;" @input="uploadImage1">
                        </div>
                    </div>

                </form>
            </div>
        </div>
    </div>
    <div id="app " class="container mt-5">
        <vue-editor v-model="content"></vue-editor>
    </div>
    <div class="mt-3">
        <hr>
        <div class="modal-footer mt-2 mr-2">

            <button type="button" class="btn btn-secondary mr-2" data-bs-dismiss="modal">Cancel</button>
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
import Multiselect from '@vueform/multiselect'

import {
    VueEditor
} from "vue3-editor";

export default {
    components: {
        VueEditor,
        Multiselect
    },

    data() {
        return {
            createBlog:{
                title:'',
                slug:'',
            },
            content: "<h1>Some initial content</h1>",
            user: null,   
            tage:null,
            categories:null,
            userOptions: [],
            tageOptions:[],
            categoriesOptions:[],

        };
    },
    mounted() {
        this.getUsers();
        this.getTages();
        this.getCategories();
    },

    methods: {
        uploadImage1() {
            // Implement your image upload logic here

        },
        getUsers() {
            let data = localStorage.getItem('user');
            data = JSON.parse(data);
            let token = data.token;

            axios.get(`https://blog-api-dev.octalinfotech.com/api/users/all`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((res) => {
                this.userOptions = res.data.data.map((value) => {
                    return{
                        label:value.name,
                        value:value.id
                    }
                })
                console.log(res.data.data);
            })
        },
        getTages() {
            let data = localStorage.getItem('user');
            data = JSON.parse(data);
            let token = data.token;

            axios.get(`https://blog-api-dev.octalinfotech.com/api/tages/all`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((res) => {
                this.tageOptions = res.data.data.map((value)=>{
                    return{
                        label:value.name,
                        value:value.id
                    }
                })
                console.log(res.data.data);
            });
        },
        getCategories() {
            let data = localStorage.getItem('user');
            data = JSON.parse(data);
            let token = data.token;

            axios.get(`https://blog-api-dev.octalinfotech.com/api/categories/all`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((res) => {
                this.categoriesOptions = res.data.data.map((value)=>{
                    return{
                        label:value.name,
                        value:value.id,
                    }
                })
                console.log(this.categories);
            }).catch((err) => {
                console.log(err);
            })

        },

        submitForm() {
            // Implement your form submission logic here using this.createUser
            // For example, you can send a request to your server to create a new user
            console.log("Form submitted:", this.createUser);
        }
    }
};
</script>

<style src="@vueform/multiselect/themes/default.css"></style><style scoped>
.width {
    box-shadow: 20px 20px 60px #0000002d, inset -20px -20px 60px #ffffff48;
    height: 47rem;
    width: 70rem;
}

.width-5 {
    width: 30rem;
}

.custom-file-input::-webkit-file-upload-button {
    visibility: hidden;
}

.custom-file-input::before {
    content: 'Select some image';
    display: inline-block;
    background: linear-gradient(top, #f9f9f9, #e3e3e3);
    border: 1px solid #999;
    border-radius: 3px;
    padding: 5px 8px;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    cursor: pointer;
    text-shadow: 1px 1px #fff;
    font-weight: 700;
    font-size: 10pt;
}

.custom-file-input:hover::before {
    border-color: black;
}

.custom-file-input:active::before {
    background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
}
</style>
