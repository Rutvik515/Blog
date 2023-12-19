<template>
<div class="width height mt-5 ml-52 rounded-5">
    <div class="container-fluid  bg-dark-500">
        <div class=" d-flex">
            <input class="float-lg-start ms-5 mt-3 p-2 border " type="search" v-model="search" placeholder="search something....">
        </div>
        <div class="">
            <router-link to="/layout/createBlog"> 
            <button @click="resetFormData" class="float-lg-end mt-0 border-1 rounded-1 p-2 bg-dark text-white" >New Blog</button>
            </router-link>
            <router-view></router-view>
        </div>
        <loading v-model:active="isLoading" :can-cancel="true" :is-full-page="fullPage" />
        <div class="mt-6 table-responsive-sm">

            <template v-if="filterBlogs.length === 0">
                <p>No users found.</p>
            </template>
            <div v-else>
                <table class="table" style="border: 1px solid; border-collapse: collapse;">

                    <thead>
                        <tr>
                            <th>id</th>
                            <th>avtar</th>
                            <th>title</th>
                            <th>Categories</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(blog , index) in filterBlogs" :key="index" class="border-6">
                            <td>{{ index+1 }}</td>
                            <td><img class="img-fluid d-inline justify-content-center" :src="blog.image" alt=""></td>

                            <td>{{ blog.title }}</td>
                            <td>{{ blog.category_name }}</td>
                            <td>
                                <p v-html="blog.description"></p>
                            </td>
                            <td>{{ blog.status }}</td>
                            <td>
                                <!-- Button trigger modal -->
                                <button type="button" @click="openEdit(user)" class="bg-color" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <i class="fa-regular fa-pen-to-square mt-3 me-2 color-blue" role="button"></i>
                                </button>

                                <button class="bg-color" @click="removeItem(user.id)" href=""><i class="fa-solid fa-trash color-red" role="button">
                                    </i></button>
                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- edit modal -->

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Update Blog</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="d-flex gap-4">
                            <div class="mt-2 text-start">
                                <label for="">Name<span class="text-danger">*</span></label>
                                <div><input class="border-2 p-2 w-full rounded-2" type="text" placeholder="" v-model="currentUser"></div>

                            </div>
                            <div class="mt-2 text-start">
                                <label for="">Email<span class="text-danger">*</span></label>
                                <div><input class="border-2 p-2 w-full rounded-2" type="text" placeholder="" v-model="currentUser"></div>

                            </div>
                        </div>
                        <div class="mt-3 text-start">
                            <label for="">Change Password<span class="text-danger">*</span></label>
                            <div><input class="border-2 p-2 w-full rounded-2" type="password" placeholder="" v-model="currentUser"></div>

                        </div>
                        <div class="text-start mt-3">

                            <label for="">Image <span class="text-danger">*</span></label>
                            <div class=" border-2 p-1 text-center rounded-2 w-full">
                                <input type="file" class="custom-file-input" @change="uploadImage">

                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancle</button>

                        <button @click="updateItem(currentUser.id)" type="button" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button>

                    </div>
                </div>
            </div>
        </div>

        <!-- Create Modal-->
        <!-- <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content" style="width: auto;">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">New Blog</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body d-flex gap-4">

                        <div class="mt-2 text-start">

                            <label for="">Name<span class="text-danger">*</span></label>
                            <div><input class="border-2 p-2 w-full rounded-2" type="text" placeholder="Enter your  name" v-model="createUser"></div>
                        </div>

                        <div>
                            <div class="mt-2 text-start">
                                <label for="">Email<span class="text-danger">*</span></label>
                                <div><input class="border-2 p-2 w-full rounded-2" type="text" placeholder="Enter your email " v-model="createUser"></div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-body d-flex gap-4">

                        <div class="mt-2 text-start">
                            <label for="">Password<span class="text-danger">*</span></label>
                            <div><input class="border-2 p-2 w-full rounded-2" type="password" placeholder="Enter your password" v-model="createUser"></div>
                        </div>
                        <div>
                            <div class="mt-2 text-start">
                                <label for="">Password Confirmation
                                    <span class="text-danger">*</span></label>
                                <div><input class="border-2 p-2 w-full rounded-2" type="password" placeholder="Enter your password" v-model="createUser"></div>
                            </div>
                        </div>
                    </div>

                    <div class="text-start p-0">
                        <label class="container">image <span class="text-danger">*</span></label>
                        <div id="fileupload" class="container border-2 p-0 text-center rounded-2 w-full " style="width: 466px;height: 44px;">
                            <input ref="fileupload" type="file" class="custom-file-input mt-1" style="cursor: pointer;" @input="uploadImage1">

                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancle</button>

                        <button type="button" @click="createItem" class="btn btn-primary" data-bs-dismiss="modal">Submit</button>

                    </div>
                </div>
            </div>
        </div> -->
    </div>
    <div class="d-flex justify-content-between ">
        <PageEvent @onChnage="pageChange" />
        <div v-if="last_page > 1">

            <pagination v-model="page" :records="total" :per-page="10" @paginate="myCallback" />
        </div>
    </div>

</div>
</template>

<script>
// import Mainlayout from './MainLayout.vue';
import axios from 'axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

import Pagination from 'v-pagination-3';
import PageEvent from '@/components/PageEvent.vue'

export default {
    name: 'ContactComponent',
    components: {
        // Mainlayout
        Loading,
        Pagination,
        PageEvent
    },
    data() {
        return {
            blogs: [],
            search: '',
            isLoading: false,

        }
    },
    mounted() {
        this.getBlogs();
        this.isLoading = true;

    },

    computed: {
        filterBlogs() {
            if (!this.blogs || !Array.isArray(this.blogs)) {
                return [];
            }

            return this.blogs.filter((item) => {
                return Object.values(item).some((val) => {
                    return String(val).toLowerCase().includes(this.search.toLowerCase());
                });
            });
        }
    },
    methods: {

        getBlogs() {
            let data = localStorage.getItem('user');
            data = JSON.parse(data);
            let token = data.token;

            axios.get(`https://blog-api-dev.octalinfotech.com/api/blogs`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((res) => {
                this.blogs = res.data.data.data;
                console.log(this.blogs);
                // this.last_page = res.data.data.last_page;
                // this.total = res.data.data.total;

                this.isLoading = false;
            }).catch((err) => {
                console.log(err);
            })

        },
    }
}
</script>

<style scoped>
.text {
    text-decoration: none;
}

.width {
    width: 85%;
    box-shadow: 20px 20px 60px #0000002d, inset -20px -20px 60px #ffffff48;

}

img {
    width: 50px;
    height: 50px;
}

.height {
    height: auto;
}

.border {
    border: none;
    border-radius: 10px;

}

.mt-6 {
    margin-top: 50px;
    background-color: rgb(208, 221, 232);

}

input:focus-visible {
    outline: none;
}

.color-blue {
    color: blue;
}

.color-red {
    color: red;
}

.bg-color {

    background: none;
    border: none;
}

td {
    border: 1px solid;
    border-collapse: collapse;
    text-align: center;
    padding: 10px;
}

th {
    border: 1px solid;
    border-collapse: collapse;
    text-align: center;
    padding: 10px;
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
