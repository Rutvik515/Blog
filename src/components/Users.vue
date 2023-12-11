<template>
<div class="width height mt-5  ms-5 rounded-5 m-0">
    <div class="container-fluid  bg-dark-500">
        <div class=" d-flex">
            <input class="float-lg-start ms-5 mt-3 p-2 border " type="search" v-model="search" placeholder="search something....">
        </div>
        <div class="">
            <button @click="resetFormData" class="float-lg-end mt-0 border-1 rounded-1 p-2 bg-dark text-white" data-bs-toggle="modal" data-bs-target="#exampleModal1">New User</button>
        </div>
        <loading v-model:active="isLoading" :can-cancel="true" :is-full-page="fullPage" />
        <div class="mt-6 table-responsive-sm">

            <template v-if="filterUsers.length === 0">
                <p>No users found.</p>
            </template>
            <div v-else>
                <table class="table" style="border: 1px solid; border-collapse: collapse;">

                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Avtar</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(user , index) in filterUsers" :key="index" class="border-6">
                            <td>{{ index+1 }}</td>
                            <td>{{ user.name }}</td>
                            <td>{{ user.email }}</td>
                            <td><img class="img-fluid d-inline justify-content-center" :src="user.image" alt=""></td>
                            <td>
                                <!-- Button trigger modal -->
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
                                <input type="file" class="custom-file-input" @change="uploadImage">

                            </div>
                        </div>
                        <div class="mt-2 text-start">
                            <label for="">Name<span class="text-danger">*</span></label>
                            <div><input class="border-2 p-2 w-full rounded-2" type="text" placeholder="" v-model="currentUser.name"></div>

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
        <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content" style="width: auto;">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">New User</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body d-flex gap-4">

                        <div class="mt-2 text-start">

                            <label for="">Name<span class="text-danger">*</span></label>
                            <div><input class="border-2 p-2 w-full rounded-2" type="text" placeholder="Enter your  name" v-model="createUser.name"></div>

                            <div class="mt-2 text-start">
                                <label for="">Password<span class="text-danger">*</span></label>
                                <div><input class="border-2 p-2 w-full rounded-2" type="text" placeholder="Enter your password" v-model="createUser.password"></div>

                            </div>
                        </div>
                        <div class="mt-2 text-start">

                            <label for="">Email<span class="text-danger">*</span></label>
                            <div><input class="border-2 p-2 w-full rounded-2" type="text" placeholder="Enter your email " v-model="createUser.email"></div>

                            <div class="mt-2 text-start">
                                <label for="">Password Confirmation
                                    <span class="text-danger">*</span></label>
                                <div><input class="border-2 p-2 w-full rounded-2" type="text" placeholder="Enter your password"></div>

                            </div>
                        </div>
                    </div>
                    <div class="text-start p-0">

                        <label class="container">User image <span class="text-danger">*</span></label>
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

import {
    useToast
} from "vue-toastification";
const toast = useToast();

// import Mainlayout from './MainLayout.vue';
export default {
    name: 'ServiceComponent',
    components: {
        // Mainlayout
    },
    data() {
        return {
            users: [],
            search: '',
            createUser: {
                name: '',
                email:'',
                password:'',
                image:'',
            },
            currentUser: '',
            updateUser: [{
                name: '',
            }],
        }
    },
    computed: {
        filterUsers() {
            if (!this.users || !Array.isArray(this.users)) {
                return [];
            }

            return this.users.filter((item) => {
                return Object.values(item).some((val) => {
                    return String(val).toLowerCase().includes(this.search.toLowerCase());
                });
            });
        }
    },
    mounted() {
        this.getUser()
    },
    methods: {
        getUser() {
            let data = localStorage.getItem('user');
            data = JSON.parse(data);
            let token = data.token;

            axios.get('https://blog-api-dev.octalinfotech.com/api/users?page=', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((res) => {
                this.users = res.data.data.data
                console.log(res);
            })
        },
        createItem() {
        let data = localStorage.getItem('user');
            data = JSON.parse(data);
            let token = data.token;

            let formData = new FormData()
            formData.append('name', this.createUser.name);
            formData.append('email', this.createUser.email);
            formData.append('password', this.createUser.password);
            formData.append('image', this.createUser.image);

            axios.post(`https://blog-api-dev.octalinfotech.com/api/users/store`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }

            }).then((res) => {
                toast.success(res.data.message, {
                timeout: 2000
                });
                this.users = res.data.data.data
                this.resetFormData();
                this.getUser();

            }).catch((err) => {
                console.log(err);
                toast.error(err.response.data.message, {
                    timeout: 2000
                });
            })

        },
        uploadImage1(e) {
            this.createUser.image = e.target.files[0];
        },
        resetFormData() {
            this.createCategory = {
                image: null,
                name: '',
                email:'',
                password:'',
            };
            this.$refs.fileupload.value = "";
        },
    },
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
