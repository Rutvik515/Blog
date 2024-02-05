<template>
<!-- <div class="width height mt-5 ml-60 rounded-3 ">
    <div class="container-fluid  bg-dark-500">
        <div class=" d-flex justify-between p-3">
            <div>
              <div>
                    <i class="fa-solid fa-magnifying-glass position-absolute icon-margin rounded-end-0 border  "></i>
                </div>
                <input class="float-lg-start ms-5 mt-3 p-2 border rounded-start-0 " type="search" v-model="search" placeholder="search something....">
            </div>
        <div class="">
            <BButton @click="resetFormData" class="float-lg-end border-1 rounded-1 mr-5 mt-3 p-2 " data-bs-toggle="modal" variant="outline-primary" data-bs-target="#exampleModal1">New Categories</BButton>
        </div>
        </div>

        <loading v-model:active="isLoading" :can-cancel="true" :is-full-page="fullPage" />
        <div class="mt-6 table-responsive-sm">

            <template v-if="filterCategories.length === 0">
                <p>No categories found.</p>
            </template>
            <div v-else>
                <table class="table table-hover align-items-center" >

                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Categories Name</th>
                            <th scope="col">Avatar</th>
                            <th scope="col">Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(category , index) in filterCategories" :key="index" class="border-6">
                            <td>{{ index+1 }}</td>
                            <td>{{ category.name }}</td>
                            <td><img class="img-fluid d-inline justify-content-center rounded-5" :src="category.image" alt=""></td>
                            <td>
                                Button trigger modal
                                <button type="button" @click="openEdit(category)" class="bg-color" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <i class="fa-regular fa-pen-to-square mt-3 me-2 color-blue" role="button"></i>
                                </button>

                                <button class="bg-color" @click="removeItem(category.id)" href=""><i class="fa-solid fa-trash color-red" role="button">
                                    </i></button>
                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div> -->

<!-- edit modal -->

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Update tag</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">

                <div class="text-start">

                    <label for="">Category image <span class="text-danger">*</span></label>
                    <div class=" border-2 p-1 text-center rounded-2 w-full">
                        <input type="file" class="custom-file-input" @change="uploadImage">

                    </div>
                </div>
                <div class="mt-2 text-start">
                    <label for="">Name<span class="text-danger">*</span></label>
                    <div><input class="border-2 p-2 w-full rounded-2" type="text" placeholder="" v-model="currentCategory.name"></div>

                </div>
            </div>
            <div class="modal-footer">
                <BButton type="button" class="btn btn-secondary" data-bs-dismiss="modal" variant="outline-secondary">Cancle</BButton>

                <BButton @click="updateItem(currentCategory.id)" type="button" class="btn btn-primary" data-bs-dismiss="modal" variant="outline-primary">Submit</BButton>

            </div>
        </div>
    </div>
</div>

<!-- Create Modal-->
<div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">New Categories</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">

                <div class="mt-2 text-start">
                    <label for="">Name<span class="text-danger">*</span></label>
                    <div><input class="border-2 p-2 w-full rounded-2" type="text" placeholder="Enter your categories name" v-model="createCategory.name"></div>

                </div>
            </div>

            <div class="text-start p-0">

                <label class="container">Category image <span class="text-danger">*</span></label>
                <div id="fileupload" class="container border-2 pl-1 text-start rounded-2 w-full " style="width: 466px;height: 44px;">
                    <input ref="fileupload" type="file" class="custom-file-input mt-1" style="cursor: pointer;" @input="uploadImage1">
                </div>
            </div>
            <div class="modal-footer">
                <BButton type="button" class="btn btn-secondary" data-bs-dismiss="modal" variant="outline-secondary">Cancle</BButton>

                <BButton type="button" @click="createItem" class="btn btn-primary" data-bs-dismiss="modal" variant="outline-primary">Submit</BButton>

            </div>
        </div>
    </div>
</div>
<!-- </div> -->
<!-- <div class="d-flex justify-content-between ">
        <PageEvent @onChnage="pageChange" />
        <div v-if="last_page > 1">

            <pagination v-model="page" :records="total" :per-page="10" @paginate="myCallback" />
        </div>
    </div> -->

<!-- </div> -->

<loading v-model:active="isLoading" :can-cancel="true" :is-full-page="fullPage" />

<div class="items-center md:flex-row flex-col flex justify-between px-1.5 mb-2">
    <div class="flex gap-8 md:flex-row flex-col mb-5">
        <div>
            <searchBox @search="search" />
            <!-- <input type="text" v-model="search" class="p-2 border rounded-md focus:outline-none border-gray-500" placeholder="Search"> -->
        </div>
    </div>
    <div class="px-6 lg:px-2">
        <div class="xl:flex-row xl:justify-between lg:flex-row lg:justify-between flex flex-col lg:gap-0 gap-2 items-center bg-white md:p-4 p-3 mb-3 rounded-sm">
            <div class="lg:flex-row md:flex-col sm:mt-0 sm:flex-none flex items-center space-x-3 flex-col gap-2">
                <BButton @click="resetFormData" class="float-lg-end   border-1 rounded-1 " variant="outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal1">New Categories</BButton>
            </div>
        </div>
    </div>
</div>
<div class="relative overflow-x-auto shadow-md sm:rounded-lg justify-center">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3 text-justify">
                    Sr No
                </th>

                <th scope="col" class="px-6 py-3 text-justify">
                    Categories Name
                </th>
                <th scope="col" class="px-6 py-3 text-justify">
                    Avatar
                </th>
                <th scope="col" class="px-6 py-3 text-justify">
                    Action
                </th>
 
            </tr>
        </thead>
        <tbody>
       
            <template v-if="categories?.length > 0">
                <tr v-for="(category , index) in categories" :key="index" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                    <td class="px-6 py-4 text-justify">
                        {{ index + 1 }}
                    </td>
                    <td class="px-6 py-4 text-justify">
                        {{ category.name }}
                    </td>
                    <td class="px-6 py-4 text-justify">
                        <img class="img-fluid d-inline justify-content-center rounded-5" :src="category.image" alt="">
                    </td>

                    <td class="px-6 py-4 text-justify">
                        <button type="button" @click="openEdit(category)" class="bg-color" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <i class="fa-regular fa-pen-to-square mt-3 me-2 color-blue" role="button"></i>
                        </button>

                        <button class="bg-color" @click="removeItem(category.id)" href=""><i class="fa-solid fa-trash color-red" role="button">
                            </i></button>
                    </td>
                </tr>

            </template>
            <tr v-else >
               <span class="px-6 py-4 flex float-end font-semibold text-2xl text-center"> {{ message }}</span>
            </tr>

        </tbody>
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
import axios from 'axios';
import searchBox from '../components/SearchBox.vue'
import swal from 'sweetalert2';
import {
    useToast
} from "vue-toastification";
const toast = useToast();

import Pagination from 'v-pagination-3';
import PageEvent from '@/components/PageEvent.vue'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
export default {
    name: 'AboutComponent',
    components: {
        Loading,
        Pagination,
        PageEvent,
        searchBox
    },
    data() {
        return {
            categories: [],
            message: 'No Categories found.',
            // search: '',
            isLoading: false,
            fullPage: true,
            createCategory: {
                image: '',
                name: '',
            },
            currentCategory: '',
            updateCategory: [{
                name: '',
                image: '',
            }],
            page: 1,
            total: 0,
            last_page: null,
            perPage: 10,
            records: [],

        }
    },

    // computed: {
    //     filterCategories() {
    //         if (!this.categories || !Array.isArray(this.categories)) {
    //             return [];
    //         }

    //         return this.categories.filter((item) => {
    //             return Object.values(item).some((val) => {
    //                 return String(val).toLowerCase().includes(this.search.toLowerCase());
    //             });
    //         });
    //     }
    // },
    // watch: {
    //     search() {
    //         this.getCategories();
    //     },
    // },
    mounted() {
        this.isLoading = true;
        this.getCategories(this.page);
    },

    methods: {
        openEdit(category) {
            this.currentCategory = JSON.parse(JSON.stringify(category));
        },
        pageChange(value) {
            this.perPage = parseInt(value)
            this.setCategories()
        },

        setCategories() {
            this.page = 1;
            this.getCategories(this.page);
        },

        resetFormData() {
            this.createCategory = {
                image: null,
                name: '',
            };
            this.$refs.fileupload.value = "";
        },
        createItem() {
            let data = localStorage.getItem('user');
            data = JSON.parse(data);
            let token = data.token;
            let formData = new FormData()

            formData.append('image', this.createCategory.image)
            formData.append('name', this.createCategory.name);

            axios.post(`https://blog-api-dev.octalinfotech.com/api/categories/store`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }

            }).then((res) => {
                toast.success(res.data.message, {
                    timeout: 2000
                });
                this.categories = res.data.data.data
                this.resetFormData();
                this.getCategories(this.page, this.perPage);

            }).catch((err) => {
                console.log(err);
                toast.error(err.response.data.message, {
                    timeout: 2000
                });
            })

        },
        uploadImage(e) {
            this.currentCategory.image = e.target.files[0];
        },

        uploadImage1(event) {
            this.createCategory.image = event.target.files[0];
        },

        search(value) {
            this.getCategories(1, value);
        },

        getCategories(page, search = '') {
            let data = localStorage.getItem('user');
            data = JSON.parse(data);
            let token = data.token;

            axios.get(`https://blog-api-dev.octalinfotech.com/api/categories?page=${page}&per_page=${this.perPage}&search=${search}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((res) => {
                this.categories = res.data.data.data;
                console.log(this.categories);
                this.last_page = res.data.data.last_page;
                this.total = res.data.data.total;

                this.isLoading = false;
            }).catch((err) => {
                console.log(err);
            })

        },
        myCallback: function (page) {
            this.getCategories(page)
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
                    axios.delete(`https://blog-api-dev.octalinfotech.com/api/categories/${id}/delete`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }

                    }).then((res) => {
                        console.log(res);
                        this.getCategories();
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

        },

        updateItem(id) {
            let data = localStorage.getItem('user');
            data = JSON.parse(data);
            let token = data.token;
            let formData = new FormData()

            formData.append('image', this.currentCategory.image)
            formData.append('name', this.currentCategory.name)

            axios.post(`https://blog-api-dev.octalinfotech.com/api/categories/${id}/update`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }

            }).then((res) => {
                toast.success(res.data.message, {
                    timeout: 2000
                });
                this.categories = res.data.data.data
                this.getCategories();

            }).catch((err) => {
                console.log(err);
                toast.error(err.response.data.message, {
                    timeout: 2000
                });
            })

        },
    },
    // watch: {
    //     search(value) {
    //         this.categories = this.categories.filter((item) => {
    //             return Object.values(item).some((val) => {
    //                 return String(val).toLowerCase().includes(value.toLowerCase());
    //             });
    //         });
    //     }
    // }

}
</script>

<style scoped>
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

.icon-margin {
    margin-left: -125px;
    margin-top: 16px;
    z-index: 1;
    padding: 12px;

}

@media (max-width: 1200px) {
    .width {
        width: 90rem;
        margin-right: 40px;
    }
}
</style>
