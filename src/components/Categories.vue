<template>
<div class="">
    <div class="width height   mt-5 ms-3 rounded-5 ">
        <div class=" d-flex">
            <input class="float-lg-start ms-5 mt-3 p-2 border " type="search" placeholder="search something....">
        </div>
        <div class="">
            <button class="float-lg-end mt-0 border-1 bg-dark text-white ">New Categories</button>
        </div>

        <div class="mt-6">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Categories Name</th>
                        <th scope="col">Avtar</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(category , index) in categories" :key="index">
                        <td>{{ index+1 }}</td>
                        <td>{{ category.name }}</td>
                        <td><img :src="category.image" alt=""></td>
                        <td>
                            <!-- Button trigger modal -->
                            <button  type="button" class="bg-color" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <i class="fa-regular fa-pen-to-square mt-3 me-2 color-blue" role="button" @click="category.id"></i>
                            </button>

                            <!-- Modal -->
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
                                            <div>
                                            <input  placeholder="Drag and drop files here, or Click to select files" v-model="category.image">
                                        </div>
                                        </div>
                                        <div class="mt-2 text-start">
                                            <label for="">Name<span class="text-danger">*</span></label>
                                            <div><input type="text" placeholder="" v-model="category.name"></div>
                                          
                                        </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                          
                                       <button @click="updateItem(category.updateItem)" type="button" class="btn btn-primary">Save changes</button>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button class="bg-color" @click="removeItem(category.id)" href=""><i class="fa-solid fa-trash color-red" role="button">
                                </i></button>
                        </td>

                    </tr>
                </tbody>
            </table>
        </div>
    </div>

</div>
</template>


<script>
import axios from 'axios';
import swal from 'sweetalert2'

export default {
    name: 'AboutComponent',
    data() {
        return {
            categories: {},
            search: {},
            loader: false,
            updateCategory:[{
                name:'',
                image:'',
            }]

        }
    },
    mounted() {
        this.getCategories();

    },

    methods: {
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
            let datas = {
                name:this.category.name
            }
            axios.post(`https://blog-api-dev.octalinfotech.com/api/categories/${id}/update`,datas, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }

                    }).then((res) => {
                        console.log(res);
                        console.log(datas);
                        this.categories = res.data.data.data
                        this.getCategories();

                    }).catch((err) => {
                        console.log(err);
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
    width: 1630px;
    box-shadow: 10px;
    background-color: rgb(208, 221, 232);

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
</style>
