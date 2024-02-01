<template>
<!-- <div class="width height mt-5 ml-60 rounded-3">
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
        <div class="mt-6 table-responsive-sm media-class">

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
                                 Button trigger modal 
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

</div> -->
<loading v-model:active="isLoading" :can-cancel="true" :is-full-page="fullPage" />
                                                                                 
   
<!-- search -->
<div class="flex flex-col xl:flex-row lg:flex-col gap-3 lg:justify-center justify-center  xl:justify-between px-1.5">
    <div class="">
        <div>
            <input type="text" v-model="search" class="p-2 border rounded-md focus:outline-none border-gray-500" placeholder="Search">
        </div>
    </div>
     <!-- User -->
     <div class="flex  flex-col gap-4 lg:flex-col md:flex-col xl:flex-row items-center">
    <div class="w-[200px]">
                    <label for="user" class="lg:block text-sm font-medium text-gray-700">
                    </label>
                    <Multiselect v-model="user_id" :options="userOptions"  placeholder="Select User" class="rounded-2" />
                </div>

    <!-- Category -->
    <div class="w-[200px]">
                    <label for="category" class="lg:block text-sm font-medium text-gray-700">
                    </label>
                    <Multiselect v-model="category_id" :options="categoriesOptions" placeholder="Select Category" class=" rounded-2" />
                </div>

    <!-- Status -->
    <div class="w-[200px]">
        <label for="status" class="lg:block text-sm font-medium text-gray-700">
        </label>
        <Multiselect v-model="status" :options="statusOptions" placeholder="Select Status" class="rounded-2" />
    </div>
    
    <div class="">
        <div class="bg-white rounded-sm">
            <div class="">
                <router-link to="/admin/blog/create">
                    <BButton @click="resetFormData" class="border-1 rounded-1" variant="outline-primary">New Blog</BButton>
                </router-link>
            </div>
        </div>
    </div>
<!-- </div> -->
</div>
</div>

         <!-- Table -->
<div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    sr No
                </th>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>

                <th scope="col" class="px-6 py-3">
                    Title
                </th>
                <th scope="col" class="px-6 py-3">
                    Categories
                </th>
                <th scope="col" class="px-6 py-3">
                    Status
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>

            </tr>
        </thead>
        <tbody>
            <tr v-for="(blog, index) in filterBlogs" :key="index.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="px-6 py-4">
                    {{index + 1}}
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div class="flex items-center">
                        <div class="h-11 w-11">
                            <img :src="blog.image" alt="employee_img" class="h-11 w-11 rounded-full object-cover" />
                        </div>
                        <div class="ml-2">
                            <div class="font-medium text-gray-900">
                                {{ blog.user_name }}
                            </div>
                            <div class="mt-1 text-gray-500">{{ blog.date }}</div>
                        </div>
                    </div>
                </th>

                <td class="px-6 py-4">
                    {{ blog.title }}
                </td>
                <td class="px-6 py-4">
                    {{ blog.category_name }}
                </td>
                <td class="px-6 py-4">

                    <span class="" style="color: black;"><span class="badge rounded-pill" style="font-size: 14px;" :class="blog.status === 1 ? 'green' : 'red'">{{ blog.status === 1
                                    ? 'Published' : 'UnPublished' }}</span></span>
                </td>
                <td class="px-6 py-4">
                    <router-link :to='`/admin/blog/edit/${blog.id}`'>
                        <button type="button" class="bg-color">
                            <i class="fa-regular fa-pen-to-square mt-3 me-2 color-blue" role="button"></i>
                        </button>
                    </router-link>
                            <router-link  :to='`/admin/blog/blogShow/${blog.id}`'>
                    <button type="button" class="bg-color">
                                <i class="fa-solid fa-eye mt-3 me-2 color-blue" role="button"></i>
                        </button>

                </router-link>
                    <button class="bg-color" @click="removeItem(blog.id)" href=""><i class="fa-solid fa-trash color-red" role="button">
                        </i></button>
                </td>

            </tr>

        </tbody>

        <!-- <div class="relative">
            <div class="absolute left-0">

                <PageEvent @onChnage="pageChange" class="p-2 border rounded-md focus:outline-none border-gray-500" />
            </div>
            <div class="absolute right-0" v-if="last_page > 1">

                <pagination v-model="page" :records="total" :per-page="10" @paginate="myCallback" />
            </div>
        </div> -->

    </table>
    <div class="items-center md:flex-row flex-col flex justify-between px-1.5 mb-2">
        <div class="flex gap-8 md:flex-row flex-col mb-5">
            <div>
                <PageEvent @onChange="pageChange" class="p-2 border rounded-md focus:outline-none border-gray-500" />
            </div>
        </div>
        <div class="px-6 lg:px-2">
            <div class="xl:flex-row xl:justify-between lg:flex-row lg:justify-between flex flex-col lg:gap-0 gap-2 items-center bg-white md:p-4 p-3 mb-3 rounded-sm">
                <div class="lg:flex-row md:flex-col sm:mt-0 sm:flex-none flex items-center space-x-3 flex-col gap-2">
                    <pagination v-model="page" :records="total" :per-page="10" @paginate="myCallback" />
                </div>
            </div>
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
import Multiselect from '@vueform/multiselect';
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
        PageEvent,
        Multiselect
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
            categoriesOptions: [],
            userOptions: [],
            statusOptions:[
            {label:'All',value:0},
            {label:'Publish',value:1},
            {label:'UnPublish',value:2},
            ],
            status: '',
            // user: null,
            // categories: null,
            category_id:'',
            user_id:'',


            // Blog: {
            //     status: '',
            //     category: '',
            //     user: '',

            // }

        }
    },
    mounted() {
        this.getBlogs(this.page, this.perPage);
        this.isLoading = true;
        this.getCategories();
        this.getUsers();

    },
    watch: {
    status(value) {
    console.log(value);
    this.getBlogs(this.page);
    },
    category_id(value) {
    console.log(value);
    this.getBlogs(this.page);
    },
    user_id(value) {
    console.log(value);
    this.getBlogs(this.page);
    },
    search(value) {
    console.log(value);
    this.getBlogs(this.page);
    }
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
            let url = `https://blog-api-dev.octalinfotech.com/api/blogs?page=${page}&per_page=${this.perPage}`;
            if(this.search){
                url+= `&search=${this.search}`;
            }
            if(this.category_id){
                url+= `&category_id=${this.category_id}`;
            }
            if(this.user_id){
                url+= `&user_id=${this.user_id}`;
            }

            if(this.status){
                url+= `&status=${this.status}`;
            }


            axios.get(url, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((res) => {
                this.blogs = res.data.data.data;
                this.last_page = res.data.data.last_page;
                this.total = res.data.data.total;
                console.log(res.data.data.total);
                this.isLoading = false;
            }).catch((err) => {
                console.log(err);
            })

        },
        myCallback: function (page) {
            this.getBlogs(page)
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
                this.categoriesOptions = res.data.data.map((value) => {
                    return {
                        label: value.name,
                        value: value.id,
                    }
                })
                console.log(this.categories);
            }).catch((err) => {
                console.log(err);
            })

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
                    return {
                        label: value.name,
                        value: value.id
                    }
                })
                console.log(res.data.data);
            })
        },

    //     selectStatus(value) {
    //   if (value === 'Publish') {
    //     this.Blog.status = 1;
    //   } else if (value === 'UnPublish') {
    //     this.Blog.status = 2;
    //   } else {
    //     this.Blog.status = ''; 
    //   }

      // You can optionally trigger the filtering logic here
      // based on the selected status value.
    //   this.setBlogs();
    // },

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

<style src="@vueform/multiselect/themes/default.css" ></style><style scoped>

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

/* @media screen and (max-width: 768px) {
    .width {
        width: 90rem;
        margin-right: 40px;
    }
} */

@media (max-width: 1200px) {
    .media-class {
        width: 500px;
        margin-right: 40px;
    }
}
</style>
