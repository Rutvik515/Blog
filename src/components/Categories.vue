<template>
<div class="width height mt-5  ms-3 rounded-5 ">
    <div class="container-fluid  bg-dark-500">
        <div class=" d-flex">
            <input class="float-lg-start ms-5 mt-3 p-2 border " type="search" v-model="search" placeholder="search something....">
        </div>
        <div class="">
            <button class="float-lg-end mt-0 border-1 rounded-1 p-2 bg-dark text-white" data-bs-toggle="modal" data-bs-target="#exampleModal1">New Categories</button>
        </div>
        <loading v-model:active="isLoading" :can-cancel="true" :is-full-page="fullPage" />
        <div class="mt-6 table-responsive-sm">

            <template v-if="filterCategories.length === 0">
          <p>No categories found.</p>
        </template>
        <div v-else>
          <table class="table" style="border: 1px solid; border-collapse: collapse;">

                <thead>
                    <tr>
                        <th>id</th>
                        <th>Categories Name</th>
                        <th>Avtar</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(category , index) in filterCategories" :key="index" class="border-6">
                        <td>{{ index+1 }}</td>
                        <td>{{ category.name }}</td>
                        <td><img class="img-fluid d-inline justify-content-center " :src="category.image" alt=""></td>
                        <td>
                            <!-- Button trigger modal -->
                            <button type="button" @click="currentCategory = category" class="bg-color" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <i class="fa-regular fa-pen-to-square mt-3 me-2 color-blue" role="button"></i>
                            </button>

                            <button class="bg-color" @click="removeItem(category.id)" href=""><i class="fa-solid fa-trash color-red" role="button">
                                </i></button>
                        </td>

                    </tr>
                </tbody>
            </table>
            </div >
        </div>

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
                                <i class="fa fa-upload fa-2x" aria-hidden="true" role="button"></i>
                                <input type="file" class="" @change="uploadImage">

                            </div>
                        </div>
                        <div class="mt-2 text-start">
                            <label for="">Name<span class="text-danger">*</span></label>
                            <div><input class="border-2 p-2 w-full rounded-2" type="text" placeholder="" v-model="currentCategory.name"></div>

                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                        <button @click="updateItem(currentCategory.id)" type="button" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button>

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
                        <div id="fileupload" class="container border-2 p-0 text-center rounded-2 w-full " style="width: 466px;height: 44px;">
                            <i class="fa fa-upload fa-2x" aria-hidden="true"></i>
                            <input for="fileupload" type="file" class="" style="cursor: pointer;" @input="uploadImage1">

                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                        <button type="button" @click="createItem" class="btn btn-primary" data-bs-dismiss="modal">Submit</button>

                    </div>
                </div>
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
import axios from 'axios';
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
        PageEvent
    },
    data() {
        return {
            categories: [],
            search: '',
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

    // computed : {
    //       filterCategories()
    //       {
    //         return this.categories.filter((item) => {
    //             return Object.values(item).some((val) => {
    //                 return String(val).toLowerCase().includes(this.search.toLowerCase());
    //             });
    //         });
    //       }
    // },

    computed: {
        filterCategories() {
            if (!this.categories || !Array.isArray(this.categories)) {
                return [];
            }

            return this.categories.filter((item) => {
                return Object.values(item).some((val) => {
                    return String(val).toLowerCase().includes(this.search.toLowerCase());
                });
            });
        }
    },
    mounted() {
        this.isLoading = true;
        this.getCategories(this.page,this.perPage);
    },

    methods: {
        pageChange(value){
            this.perPage = parseInt(value)
            this.setCategories()
        },

        setCategories() {
            this.page = 1;
            this.getCategories(this.page,this.perPage);
        },

        resetFormData() {
            this.createCategory = {
                image: null,
                name: '',
            };
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
                this.getCategories(this.page,this.perPage);

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

        getCategories(page) {
            let data = localStorage.getItem('user');
            data = JSON.parse(data);
            let token = data.token;

            axios.get(`https://blog-api-dev.octalinfotech.com/api/categories?page=${page}&per_page=${this.perPage}`, {
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
        // allCategories() {
        //     let data = localStorage.getItem('user');
        //     data = JSON.parse(data);
        //     let token = data.token;

        //     axios.get("https://blog-api-dev.octalinfotech.com/api/categories/all", {
        //         headers: {
        //             Authorization: `Bearer ${token}`
        //         }
        //     }).then((res) => {
        //         toast.success(res.data.message, {
        //             timeout: 2000
        //         });
        //         this.categories = res.data.data.data
        //         this.getCategories();
        //     }).catch((err) => {
        //         console.log(err);
        //         toast.error(err.response.data.message, {
        //             timeout: 2000
        //         });
        //         console.log(err);

        //     })

        // },

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
    width: 80%;
    box-shadow: 10px 10px 30px 10px;

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
</style>
