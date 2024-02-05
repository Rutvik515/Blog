<template>
<!-- <div class="width height mt-5 ml-60  rounded-3">
    <div class="container-fluid  bg-dark-500">
        <div class="d-flex justify-between p-3">

            <div>
                <div>
                    <i class="fa-solid fa-magnifying-glass position-absolute icon-margin rounded-end-0 border  "></i>
                </div>
                <input class="float-lg-start ms-5 mt-3 p-2 border rounded-start-0 " type="search" v-model="search" placeholder="search something....">
            </div>

            <div class="">
                <BButton class="float-lg-end mr-5 mt-3 border-1 rounded-1 p-2 " data-bs-toggle="modal" data-bs-target="#exampleModal1" variant="outline-primary">New Tages</BButton>
            </div>
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
                            <table class="table table-hover align-items-center">
                                <thead>
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Tag Name</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(tag, index) in filterTages" :key="index" class="border-6">
                                        <td>{{ index + 1 }}</td>
                                        <td>{{ tag.name }}</td>
                                        <td>
                                             Button trigger modal 
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

<div class="items-center md:flex-row flex-col flex justify-between px-1.5 mb-2">
    <div class="flex gap-8 md:flex-row flex-col mb-5">
        <div>
            <!-- <input type="text" v-model="search" class="p-2 border rounded-md focus:outline-none border-gray-500" placeholder="Search">-->
            <searchBox @search="search" />
        </div>
    </div>
    <div class="px-6 lg:px-2">
        <div class="xl:flex-row xl:justify-between lg:flex-row lg:justify-between flex flex-col lg:gap-0 gap-2 items-center bg-white md:p-4 p-3 mb-3 rounded-sm">
            <div class="lg:flex-row md:flex-col sm:mt-0 sm:flex-none flex items-center space-x-3 flex-col gap-2">
                <BButton @click="resetFormData" class="float-lg-end   border-1 rounded-1 " variant="outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal1">New Tag</BButton>
            </div>
        </div>
    </div>
</div>

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg justify-center">
        <table class="w-full text-sm  text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr class="">
                    <th scope="col" class="px-6 py-3 text-justify">
                        Id
                    </th>

                    <th scope="col" class="px-6 py-3 text-justify">
                        Tag Name
                    </th>
                    <th scope="col" class="px-6 py-3 text-justify">
                        Action
                    </th>

                </tr>
            </thead>
            <tbody>
                <template v-if="tages?.length > 0">
                    <tr v-for="(tag, index) in tages" :key="index" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                        <td class="px-6 py-4 text-justify">
                            {{ index + 1 }}
                        </td>
                        <td class="px-6 py-4 text-justify">
                            {{ tag.name }}
                        </td>

                        <td class="px-6 py-4 text-justify">
                            <button type="button" @click="openEdit(tag)" class="bg-color" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <i class="fa-regular fa-pen-to-square mt-3 me-2 color-blue" role="button"></i>
                            </button>

                            <button class="bg-color" @click="removeItem(tag.id)" href=""><i class="fa-solid fa-trash color-red" role="button"></i></button>
                        </td>

                    </tr>
                </template >
                    <tr v-else>
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
                <BButton type="button" class="btn btn-secondary" data-bs-dismiss="modal" variant="outline-secondary">Cancle</BButton>

                <BButton @click="updateItem(currentTag.id)" type="button" class="btn btn-primary" data-bs-dismiss="modal" variant="outline-primary">Submit</BButton>

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
                <BButton class=" border-1 rounded-1 " data-bs-dismiss="modal" variant="outline-secondary">Cancle</BButton>

                <BButton @click="createItem" class="float-lg-end   border-1 rounded-1 " variant="outline-primary" data-bs-dismiss="modal">Submit</BButton>

            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert2';
import searchBox from '../components/SearchBox.vue';

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
        Pagination,
        searchBox
    },
    data() {
        return {
            isLoading: false,
            fullPage: true,
            // search: '',
            tages: [],
            createTag: {
                name: '',
            },
            currentTag: '',
            updateTag: [{
                name: '',

            }],
            message:"No Tages found.",
            page: 1,
            total: 0,
            last_page: null,
            perPage: 10,
            records: [],

        };
    },
    watch: {
        // search() {
        //         this.getTages();
        //     },
    },
    mounted() {
        this.isLoading = true;
        this.getTages(this.page, );
    },
    // computed: {
    //     filterTages() {
    //         if (!this.tages || !Array.isArray(this.tages)) {
    //             return [];
    //         }

    //         return this.tages.filter((item) => {
    //             return Object.values(item).some((val) => {
    //                 return String(val).toLowerCase().includes(this.search.toLowerCase());
    //             });
    //         });
    //     }
    // },
    methods: {

        openEdit(tag) {
            this.currentTag = JSON.parse(JSON.stringify(tag));
        },
        pageChange(value) {
            this.perPage = parseInt(value)
            this.setTages()
        },
        setTages() {
            this.page = 1;
            this.getTages(this.page);
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
                this.tages = res.data.data.data;
                this.resetFormData();
                this.getTages(this.page);

            }).catch((err) => {
                console.log(err);
                toast.error(err.response.data.message, {
                    timeout: 2000
                });
            })

        },

        search(value) {
            console.log(value);
            this.getTages(1, value)
        },

        getTages(page, search = '') {
            let data = localStorage.getItem('user');
            data = JSON.parse(data);
            let token = data.token;

            axios.get(`https://blog-api-dev.octalinfotech.com/api/tages?page=${page}&search=${search}&per_page=${this.perPage}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((res) => {
                this.tages = res.data.data.data;
                this.isLoading = false;
                this.last_page = res.data.data.last_page;
                this.total = res.data.data.total;
                console.log(res.data.data.total);

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
