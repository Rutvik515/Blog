<template>
<div class="">
    <div class="container-fluid width height mt-5 ms-3 rounded-5 bg-dark-500">
        <div class=" d-flex">
            <input class="float-lg-start ms-5 mt-3 p-2 border " type="search" placeholder="search something....">
        </div>
        <div class="">
            <button class="float-lg-end mt-0 border-1 rounded-1 p-2 bg-dark text-white" data-bs-toggle="modal" data-bs-target="#exampleModal1" @click="createCategory = category">New Categories</button>
        </div>
        <loading v-model:active="isLoading" :can-cancel="true" :is-full-page="fullPage" />
        <div class="mt-6 table-responsive-sm">
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
                    <tr v-for="(category , index) in categories" :key="index" class="border-6">
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
                                <i class="fa fa-upload fa-2x" aria-hidden="true"  role="button"></i>
                                <input type="file" class="" @change="uploadImage"  >

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
                            <div><input class="border-2 p-2 w-full rounded-2" type="text" placeholder="Enter your categories name"  v-model="createCategory"></div>

                        </div>
                    </div>
                    <div class="text-start p-0">

                        <label for="" class="container">Category image <span class="text-danger">*</span></label>
                        <div class="container border-2 p-0 text-center rounded-2 w-full" style="width: 466px;height: 44px;">
                            <i class="fa fa-upload fa-2x" aria-hidden="true"></i>
                            <input type="file" class="" @click="uploadImage1" style="display: visible;">

                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                        <button type="button" @click="createItem(createCategory)" class="btn btn-primary" data-bs-dismiss="modal">Submit</button>

                    </div>
                </div>
            </div>
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

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
export default {
    name: 'AboutComponent',
    components: {
        Loading
    },
    data() {
        return {
            categories: {},
            search: {},
            isLoading: false,
            fullPage: true,
            createCategory:'',
            currentCategory: '',
            updateCategory: [{
                name: '',
                image: '',
            }]

        }
    },
    mounted() {
        this.isLoading = true;
        this.getCategories();
    },

    methods: {
        createItem() {
            let data = localStorage.getItem('user');
            data = JSON.parse(data);
            let token = data.token;
            let formData = new FormData()

            formData.append('image', this.createCategory)
            formData.append('name', this.createCategory)

            axios.post(`https://blog-api-dev.octalinfotech.com/api/categories/store`, formData, {
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
        uploadImage(e) {
            this.currentCategory.image = e.target.files[0];
        },
        
        uploadImage1(e) {
            this.createCategory.name= e.target.files[0];
        },

        getCategories() {
            let data = localStorage.getItem('user');
            data = JSON.parse(data);
            let token = data.token;

            axios.get("https://blog-api-dev.octalinfotech.com/api/categories", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((res) => {
                this.categories = res.data.data.data

                this.isLoading = false;
            }).catch((err) => {
                console.log(err);
            })

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
    //         this.categories = this.res.filter((item) => {
    //             return Object.keys(item).some((key) => {
    //                 return (item[key]).toLowerCase().includes(value.toLowerCase());
    //             })
    //         })
    //     }
    // }

}
</script>

<style scoped>
.width {
    width: 1435px;
    box-shadow: 10px 10px 30px 10px;

}

img {
    width: 50px;
    height: 50px;
}

.height {
    height: 746px;
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
