<template>
<div class="width height mt-5 ml-52  rounded-5 ">
    <div class="container-fluid  bg-dark-500">
        <div class=" d-flex">
            <input class="float-lg-start ms-5 mt-5 p-2 border " type="search" v-model="search" placeholder="search something....">
        </div>
        <div class="">
            <button class="float-lg-end mt-0 border-1 rounded-1 p-2 bg-dark text-white" data-bs-toggle="modal" data-bs-target="#exampleModal1">New Tages</button>
        </div>
        <loading v-model:active="isLoading" :can-cancel="true" :is-full-page="fullPage" />
        <div class="mt-6 table-responsive-sm">

            <div>
                <div class="text">
                    <div class="mt-6 table-responsive-sm">
                        <template v-if="filterTages.length === 0">
                            <p>No tages found.</p>
                        </template>
                        <div v-else>
                            <table class="table" style="border: 1px solid; border-collapse: collapse;">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Tag Name</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(tag, index) in filterTages" :key="index" class="border-6">
                                        <td>{{ index + 1 }}</td>
                                        <td>{{ tag.name }}</td>
                                        <td>
                                            <!-- Button trigger modal -->
                                            <button type="button" @click="openEdit(tag)" class="bg-color" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                <i class="fa-regular fa-pen-to-square mt-3 me-2 color-blue" role="button"></i>
                                            </button>

                                            <button class="bg-color" @click="removeItem(tag.id)" href=""><i class="fa-solid fa-trash color-red" role="button"></i></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Create Modal-->
            <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">New tag</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">

                            <div class="mt-2 text-start">
                                <label for="">Name<span class="text-danger">*</span></label>
                                <div><input class="border-2 p-2 w-full rounded-2" type="text" placeholder="Enter your tages name" v-model="createTag.name"></div>

                            </div>
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancle</button>

                            <button type="button" @click="createItem" class="btn btn-primary" data-bs-dismiss="modal">Submit</button>

                        </div>
                    </div>
                </div>
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

                            <div class="mt-2 text-start">
                                <label for="">Name<span class="text-danger">*</span></label>
                                <div><input class="border-2 p-2 w-full rounded-2" type="text" placeholder="" v-model="currentTag.name"></div>

                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancle</button>

                            <button @click="updateItem(currentTag.id)" type="button" class="btn btn-primary" data-bs-dismiss="modal">Save Tages</button>

                        </div>
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
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import Pagination from 'v-pagination-3';
import PageEvent from '@/components/PageEvent.vue'

export default {
    name: 'ProjectComponent',
    components: {
        Loading,
        PageEvent,
        Pagination
    },
    data() {
        return {
            isLoading: false,
            fullPage: true,
            search: '',
            tages: [],
            createTag: {
                name: '',
            },
            currentTag: '',
            updateTag: [{
                name: '',

            }],
            page: 1,
            total: 0,
            last_page: null,
            perPage: 10,
            records: [],

        };
    },
    mounted() {
        this.isLoading = true;
        this.getTages(this.page, this.perPage);
    },
    computed: {
        filterTages() {
            if (!this.tages || !Array.isArray(this.tages)) {
                return [];
            }

            return this.tages.filter((item) => {
                return Object.values(item).some((val) => {
                    return String(val).toLowerCase().includes(this.search.toLowerCase());
                });
            });
        }
    },
    methods: {

        openEdit(tag){
             this.currentTag = JSON.parse(JSON.stringify(tag));
        },
        pageChange(value) {
            this.perPage = parseInt(value)
            this.setTages()
        },
        setTages() {
            this.page = 1;
            this.getTages(this.page, this.perPage);
        },

        resetFormData() {
            this.createTag.name = '';
        },
        createItem() {
        let data = localStorage.getItem('user');
            data = JSON.parse(data);
            let token = data.token;

            let formData = new FormData()
            formData.append('name', this.createTag.name);

            axios.post(`https://blog-api-dev.octalinfotech.com/api/tages/store`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }

            }).then((res) => {
                toast.success(res.data.message, {
                timeout: 2000
                });
                this.tages = res.data.data.data
                this.resetFormData();
                this.getTages(this.page);

            }).catch((err) => {
                console.log(err);
                toast.error(err.response.data.message, {
                    timeout: 2000
                });
            })

        },

        getTages(page) {
            let data = localStorage.getItem('user');
            data = JSON.parse(data);
            let token = data.token;

            axios.get(`https://blog-api-dev.octalinfotech.com/api/tages?page=${page}&per_page=${this.perPage}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((res) => {
                this.tages = res.data.data.data;
                this.isLoading = false;
                this.last_page = res.data.data.last_page;
                this.total = res.data.data.total;

            }).catch((err) => {
                console.log(err);
            });
        },
        myCallback: function (page) {
            this.getTages(page)
        },
        updateItem(id) {
            let data = localStorage.getItem('user');
            data = JSON.parse(data);
            let token = data.token;
            let formData = new FormData()

            formData.append('name', this.currentTag.name)

            axios.post(`https://blog-api-dev.octalinfotech.com/api/tages/${id}/update`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }

            }).then((res) => {
                toast.success(res.data.message, {
                    timeout: 2000
                });

                this.tages = res.data.data.data
                this.getTages();

            }).catch((err) => {
                console.log(err);
                toast.error(err.response.data.message, {
                    timeout: 2000
                });
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
            axios.delete(`https://blog-api-dev.octalinfotech.com/api/tages/${id}/delete`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }

            }).then((res) => {
                console.log(res);
                this.getTages(this.page, this.perPage);
                toast.success(res.data.message, {
                    timeout: 2000
                });

            }).catch((err) => {
                console.log(err);
               
                });
            } else if (result.dismiss === 'cancel') {
                    swal(
                        'Cancelled',
                        'Your imaginary file is safe :)',
                        'error'
                    )
                }
            });

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
</style>
