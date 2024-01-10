<template>
<div class="width height mt-5 ml-60 rounded-3">
    <div class="container-fluid  bg-dark-500">
        <div class=" d-flex justify-between p-3">
            <div>
              <div>
                    <i class="fa-solid fa-magnifying-glass position-absolute icon-margin rounded-end-0 border  "></i>
                </div>
                <input class="float-lg-start ms-5 mt-3 p-2 border rounded-start-0 " type="search" v-model="search" placeholder="search something....">
            </div>
            <div class="">
            <router-link to="/admin/blog/create">
                <BButton @click="resetFormData" class="float-lg-end  mt-0 border-1 rounded-1 p-2  mt-3 mr-3" variant="outline-primary">New Blog</BButton>
            </router-link>
            <router-view></router-view>
        </div>
        </div>
       
        <loading v-model:active="isLoading" :can-cancel="true" :is-full-page="fullPage" />
        <div class="mt-6 table-responsive-sm">

            <template v-if="filterBlogs.length === 0">
                <p>No users found.</p>
            </template>
            <div v-else>
                <table class="table table-hover align-items-center">

                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Avatar</th>
                            <th scope="col">Title</th>
                            <th scope="col">Categories</th>
                            <th scope="col">Description</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(blog , index) in filterBlogs" :key="index" class="border-6">
                            <td>{{ index+1 }}</td>
                            <td>{{ blog.user_name }}</td>
                            <td><img class="img-fluid  d-inline justify-content-center rounded-5" :src="blog.image" alt=""></td>

                            <td>{{ blog.title }}</td>
                            <td>{{ blog.category_name }}</td>
                            <td  class="overflow-hidden w-[20px]">
                                <p v-html="blog.description.length > 99 ? blog.description.substring(0, 40) + '...' : blog.description"></p>

                                
                            </td>
                            <td><span class="" style="color: black;"><span class="badge rounded-pill" style="font-size: 14px;" :class="blog.status === 1 ? 'green' : 'red'">{{ blog.status === 1 ?'Published':'UnPublished'}}</span></span></td>
                            <td>
                                <!-- Button trigger modal -->
                                <router-link :to='`/admin/blog/edit/${blog.id}`'>
                                    <button type="button" class="bg-color" >
                                        <i class="fa-regular fa-pen-to-square mt-3 me-2 color-blue" role="button"></i>
                                    </button>
                                </router-link>

                                <button class="bg-color" @click="removeItem(blog.id)" href=""><i class="fa-solid fa-trash color-red" role="button">
                                    </i></button>
                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

      
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
// import mainLayout from './mainLayout.vue';
import axios from 'axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import swal from 'sweetalert2';

import Pagination from 'v-pagination-3';
import PageEvent from '@/components/PageEvent.vue'
import {
    useToast
} from "vue-toastification";
const toast = useToast();

export default {
    name: 'ContactComponent',
    components: {
        // mainLayout
        Loading,
        Pagination,
        PageEvent
    },
    data() {
        return {
            blogs: [],
            search: '',
            isLoading: false,
            // currentBlog:'',
            page: 1,
            total: 0,
            last_page: null,
            perPage: 10,
            records: [],


        }
    },
    mounted() {
        this.getBlogs(this.page, this.perPage);

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

        // openEdit(blog) {
        //     this.currentBlog = JSON.parse(JSON.stringify(blog));
        // },
        pageChange(value) {
            this.perPage = parseInt(value)
            this.setBlogs()
        },
        setBlogs() {
            this.page = 1;
            this.getBlogs(this.page, this.perPage);
        },

        getBlogs(page) {
            let data = localStorage.getItem('user');
            data = JSON.parse(data);
            let token = data.token;

            axios.get(`https://blog-api-dev.octalinfotech.com/api/blogs?page=${page}&per_page=${this.perPage}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((res) => {
                this.blogs = res.data.data.data;
                this.last_page = res.data.data.last_page;
                this.total = res.data.data.total;
                this.isLoading = false;
            }).catch((err) => {
                console.log(err);
            })

        },
        myCallback: function (page) {
            this.getBlogs(page)
        },
        removeItem(id) {

            let data = localStorage.getItem('user');
            data = JSON.parse(data);
            let token = data.token;

            swal({
                title: 'Are you sure?',
                text: 'You will not be able to recover this imaginary file!',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Delete',
                cancelButtonText: 'Cancel',
                confirmButtonColor: "red",
                cancelButtonColor: "blue"
            }).then((result) => {
                if (result.value) {
                    swal(
                        'Deleted!',
                        'Your imaginary file has been deleted.',
                        'success'
                    )
                    axios.delete(`https://blog-api-dev.octalinfotech.com/api/blogs/${id}/delete`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }

                    }).then((res) => {
                        console.log(res);
                        this.getBlogs();
                        toast.success(res.data.message, {
                            timeout: 2000
                        });

                    }).catch((err) => {
                        console.log(err);
                    })
                } else if (result.dismiss === 'cancel') {
                    swal(
                        'Cancelled',
                        'Your imaginary file is safe :)',
                        'error'
                    )
                }
            })
        }
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

/* td {
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
} */

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

.red {
background-color: rgba(224, 40, 40, 0.815);
}

.green {
    background: green;
}

.icon-margin {
    margin-left: -125px;
    margin-top: 16px;
    z-index: 1;
    padding: 12px;
  
}

@media screen and (min-width: 768px) {
    .width {
        width: 90rem;
        margin-right: 40px;
    }
}
</style>
