<!-- <template>
<div class="ml-36 mt-12 width">
    <div class="ml-5" id="modal" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content" style="width: auto;">
                <div class="modal-header">
                    <h5 class="modal-title">Update Blog</h5>
                    <router-link to="/admin/blog">
                        <button type="button" class="bg-dark text-white rounded-2 p-2 mr-5 mt-3">Back</button>
                    </router-link>
                </div>
                <form @submit.prevent="submitForm">
                    <div class="modal-body d-flex gap-4">
                        <div class="mt-2 text-start">
                            <label for="name">Title<span class="text-danger">*</span></label>
                            <div><input id="name" class="border-2 p-2 width-5 rounded-2" type="text" placeholder="Enter your title" v-model="currentBlog.title" @input="convertToSlug"></div>
                        </div>
                        <div class="mt-2 text-start">
                            <label for="email">Slug<span class="text-danger">*</span></label>
                            <div><input id="email" class="border-2 p-2  width-5 rounded-2 " type="text" placeholder="Enter your slug" v-model="currentBlog.slug" disabled></div>
                        </div>
                    </div>
                    <div class="modal-body d-flex gap-4">
                        <div class="mt-3 text-start">
                            <label for="">User<span class="text-danger">*</span></label>
                            <div>

                                <Multiselect class=" width-5 rounded-2" v-model="currentBlog.user_id" :options="userOptions" placeholder="Select Option" />
                            </div>
                        </div>
                        <div class="mt-3 text-start">
                            <label for="">Tags<span class="text-danger">*</span></label>
                            <div>
                                <Multiselect class=" width-5 rounded-2" v-model="currentBlog.tag" mode="tags" :multiple="true" :options="tageOptions" :closeOnSelect="true" :searchable="true" placeholder="Select Option" />

                            </div>
                        </div>
                    </div>
                    <div class="modal-body d-flex gap-3">
                        <div class="mt-3 text-start">
                            <label for="">Category<span class="text-danger">*</span></label>
                            <div>
                                <Multiselect class=" width-5 rounded-2" v-model="currentBlog.category_id" :options="categoriesOptions" placeholder="Select Option" />

                            </div>
                        </div>
                        <div class="mt-2 text-start">
                            <label for="" class="ml-1">Date<span class="text-danger">*</span></label>
                            <VueDatePicker v-model="currentBlog.date" class=" p-2 width-5 rounded-2"></VueDatePicker>
                        </div>

                    </div>
                    <div class="modal-body d-flex ">

                    </div>
                    <div class="modal-body d-flex gap-4">
                        <div class="text-start p-0 mt-3 width-10">
                            <label class="container p-0">Image <span class="text-danger">*</span></label>
                            <div class="container border-2 p-0 text-center rounded-2 float-lg-start " style="width: 480px;height: 44px;">
                                <input ref="fileupload" type="file" class="custom-file-input mt-1" style="cursor: pointer;" @input="uploadImage">
                            </div>
                        </div>
                        <div class="mt-3 mr-10 text-start">
                            <label for="">Status<span class="text-danger">*</span></label>
                            <div>
                                <Multiselect class="width-5 rounded-2" v-model="currentBlog.status" :options="statusOptions" placeholder="Select Option" />

                            </div>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    </div>
    <div class="float-start ml-4 mt-4">
        <label for="">Description<span class="text-danger">*</span></label>
    </div>
    <div id="app " class="container mt-5">

        <div>
            <vue-editor v-model="currentBlog.description"></vue-editor>
        </div>
    </div>
    <div class="mt-3">
        <hr>
        <div class="modal-footer mt-2 mr-2">
            <router-link to="/admin/blog">

                <button type="button" class="btn btn-secondary mr-2">Cancel</button>
            </router-link>

            <button type="submit" class="btn btn-primary" @click="updateItem(currentBlog.id)">Submit</button>
        </div>
    </div>
</div>

</template> -->

<!-- <template>
    <div class="mx-auto p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 2xl:p-24">
        <div class="sm:ml-5 md:ml-10 xl:ml-20">
            <div id="modal" class="w-full sm:w-auto md:w-full lg:w-3/4 xl:w-2/3 2xl:w-1/2" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content" style="width: auto;">
                        <div class="modal-header">
                            <h5 class="modal-title">Update Blog</h5>
                            <router-link to="/admin/blogs">
                                <button type="button" class="bg-dark text-white rounded-2 p-2 mr-5 mt-3">
                                    Back
                                </button>
                            </router-link>
                        </div>
                        <form @submit.prevent="submitForm">
                            <div class="modal-body">
                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    Title 
                                    <div class="mb-4">
                                        <label for="name" class="block text-sm font-medium text-gray-700">
                                            Title<span class="text-danger">*</span>
                                        </label>
                                        <input id="name" type="text" v-model="currentBlog.title" @input="convertToSlug" class="mt-1 p-2 border rounded w-full" placeholder="Enter your title" />
                                    </div>
                                    
                                    Slug 
                                    <div class="mb-4">
                                        <label for="email" class="block text-sm font-medium text-gray-700">
                                            Slug<span class="text-danger">*</span>
                                        </label>
                                        <input id="email" type="text" class="mt-1 p-2 border rounded w-full" placeholder="Enter your slug" v-model="currentBlog.slug" disabled />
                                    </div>
                                    
                                    User 
                                    <div class="mb-4">
                                        <label for="user" class="block text-sm font-medium text-gray-700">
                                            User<span class="text-danger">*</span>
                                        </label>
                                        <Multiselect v-model="currentBlog.user_id" :options="userOptions" placeholder="Select Option" class="w-full rounded-2" />
                                    </div>
                                    
                                    Tags 
                                    <div class="mb-4">
                                        <label for="tags" class="block text-sm font-medium text-gray-700">
                                            Tags<span class="text-danger">*</span>
                                        </label>
                                        <Multiselect v-model="currentBlog.tag" mode="tags" :multiple="true" :options="tageOptions" :closeOnSelect="true" :searchable="true" placeholder="Select Option" class="w-full rounded-2" />
                                    </div>
                                    
                                    Category 
                                    <div class="mb-4">
                                        <label for="category" class="block text-sm font-medium text-gray-700">
                                            Category<span class="text-danger">*</span>
                                        </label>
                                        <Multiselect v-model="currentBlog.category_id" :options="categoriesOptions" placeholder="Select Option" class="w-full rounded-2" />
                                    </div>
                                    
                                    Date 
                                    <div class="mb-4">
                                        <label for="date" class="block text-sm font-medium text-gray-700">
                                            Date<span class="text-danger">*</span>
                                        </label>
                                        <VueDatePicker v-model="currentBlog.date" class="p-2 w-full rounded-2" />
                                    </div>
                                    
                                    Image 
                                    <div class="mb-4">
                                        <label for="fileupload" class="block text-sm font-medium text-gray-700">
                                            Image<span class="text-danger">*</span>
                                        </label>
                                        <div class="flex items-center border">
                                            <input ref="fileupload" type="file" class="custom-file-input mt-1" style="cursor: pointer;" @input="uploadImage" />
                                        </div>
                                    </div>
                                    
                                    Status 
                                    <div class="mb-4">
                                        <label for="status" class="block text-sm font-medium text-gray-700">
                                            Status<span class="text-danger">*</span>
                                        </label>
                                        <Multiselect v-model="currentBlog.status" :options="statusOptions" placeholder="Select Option" class="w-full rounded-2" />
                                    </div>
                                </div>
                            </div>
                            <div class="modal-body">
                                ... (rest of your code) 
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="float-start ml-4 mt-4">
            <label for="">Description<span class="text-danger">*</span></label>
        </div>
        <div id="app" class="container mt-5">
            <div>
                <vue-editor v-model="currentBlog.description"></vue-editor>
            </div>
        </div>
        <div class="">
            <hr />
            <div class="modal-footer sm:mr-2 md:mr-4 lg:mr-8 xl:mr-12 2xl:mr-16 mt-3">
                <router-link to="/admin/blogs">
                <BButton type="button" class="btn btn-secondary" variant="outline-secondary">
                    Cancel
                </BButton>
            </router-link>
            
                <BButton type="submit" class="btn btn-primary ms-2 sm:ms-4 md:ms-6 lg:ms-8 xl:ms-10 2xl:ms-12" @click="updateItem(currentBlog.id)" variant="outline-primary">
                    Submit
                </BButton>
            </div>
        </div>
    </div> -->

    <template>
        <div class="p-3 overflow-scroll h-[850px]">
            <div class="max-w-7xl mx-auto">
                <div class="divide-y divide-gray-200 rounded-lg bg-white shadow border-slate-400">
                    <div class="px-4 py-5 sm:p-6">
                            <form @submit.prevent="submitForm"  class="px-3">
        
                            <div class="space-y-12">
                                <div class="border-b border-gray-900/10 pb-12">
                                    <div class="flex justify-between items-center">
                                        <h2 class="font-semibold leading-7 text-gray-900">New Blog</h2>
                                        <router-link to="/admin/blogs">
                                            <button type="button" class="inline-flex items-center px-3 py-2 bg-gray-800 border border-transparent font-semibold tracking-wide text-xs rounded-sm text-white capitalize hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150">Back</button>
                                        </router-link>
                                    </div>
                                    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                        <div class="sm:col-span-3"><label class="float-start text-sm  leading-6 text-gray-900 block mb-1 font-medium after:content-['*'] after:ml-0.5 after:text-red-500" for="title"><span>Title</span></label><input v-model="currentBlog.title" @input="convertToSlug" class="block w-full rounded-md borderb-0 focus:outline-none focus:bg-gray-100 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset sm:text-sm sm:leading-6 mt-1  " id="title" type="text" required="" autofocus="" autocomplete="title" placeholder="Enter your title">
                                            <div class="mt-2" style="display: none;">
                                                <p class="text-sm text-red-600 bg-red-100 p-2 rounded-md"></p>
                                            </div>
                                        </div>
                                        <div class="sm:col-span-3"><label class="float-start text-sm  leading-6 text-gray-900 block mb-1 font-medium after:content-['*'] after:ml-0.5 after:text-red-500" for="Slug"><span>Slug</span></label><input v-model="currentBlog.slug" class="rounded-md borderb-0 focus:outline-none focus:bg-gray-100 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset sm:text-sm sm:leading-6 mt-1 block w-full" id="slug" type="text" required="" autofocus="" autocomplete="slug" placeholder="Enter your slug" disabled>
                                            <div class="mt-2" style="display: none;">
                                                <p class="text-sm text-red-600 bg-red-100 p-2 rounded-md"></p>
                                            </div>
                                        </div>
                                        <div class="col-span-3"><label class="float-start block text-sm font-medium leading-6 text-gray-900  mb-1  after:content-['*'] after:ml-0.5 after:text-red-500" for="users"><span>User</span></label>
                                            <div>
                                                <Multiselect v-model="currentBlog.user_id" :options="userOptions" placeholder="Select Option" class="w-full rounded-2" />
                                                <div class="mt-2" style="display: none;">
                                                    <p class="text-sm text-red-600 bg-red-100 p-2 rounded-md"></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-span-3"><label class="float-start text-sm  leading-6 text-gray-900 block mb-1 font-medium after:content-['*'] after:ml-0.5 after:text-red-500" for="tags"><span>Tag</span></label>
                                            <div>
                                                <Multiselect  v-model="currentBlog.tag" :options="tageOptions" :closeOnSelect="true" :searchable="true" mode="tags" :multiple="true" placeholder="Select Option" class="w-full rounded-2" />
        
                                            </div>
                                        </div>
                                        <div class="col-span-3"><label class="float-start text-sm  leading-6 text-gray-900 block mb-1 font-medium after:content-['*'] after:ml-0.5 after:text-red-500" for="category"><span>Category</span></label>
                                            <div>
                                                <Multiselect v-model="currentBlog.category_id" :options="categoriesOptions" placeholder="Select Option" class="w-full rounded-2" />
        
                                                <div class="mt-2" style="display: none;">
                                                    <p class="text-sm text-red-600 bg-red-100 p-2 rounded-md"></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-span-3"><label class="float-start text-sm leading-6 text-gray-900 block mb-1 font-medium after:content-['*'] after:ml-0.5 after:text-red-500" for="date"><span>Date</span></label>
                                            <VueDatePicker v-model="currentBlog.date" class="p-2 w-full rounded-2" />
        
                                        </div>
                                        <div class="col-span-3"><label class="text-start item-start text-sm  leading-6 text-gray-900 block mb-1 font-medium after:content-['*'] after:ml-0.5 after:text-red-500" for="file"><span>Image</span></label>
                                            <div class="mt-2 cursor-pointer">
                                                <div>
        
                                                    <div class="w-full p-1.5 border-2 rounded-md shadow-md border-gray-900 border-dashed" tabindex="0">
                                                        <input ref="fileupload" type="file" class="custom-file-input mt-1 w-full" style="cursor: pointer;" @input="uploadImage1" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-span-3"><label class="float-start text-sm  leading-6 text-gray-900 block mb-1 font-medium after:content-['*'] after:ml-0.5 after:text-red-500" for="category"><span>Status</span></label>
                                            <div>
                                                <Multiselect v-model="currentBlog.status" :options="statusOptions" placeholder="Select Option" class="w-full rounded-2" />
        
                                                <div class="mt-2" style="display: none;">
                                                    <p class="text-sm text-red-600 bg-red-100 p-2 rounded-md"></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-span-6"><label class="text-start item-start text-sm leading-6 text-gray-900 block mb-1 font-medium after:content-['*'] after:ml-0.5 after:text-red-500" for="file"><span>Description</span></label>
                                            <div class="mt-2 cursor-pointer">
                                                <div class="quillWrapper">
        
                                                    <div id="quill-container" class="ql-container ql-snow">
                                                        <vue-editor v-model="currentBlog.description"></vue-editor>
        
                                                    </div>
                                                    <!---->
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-3 flex items-center justify-end gap-x-6">
                                <button type="submit" class="inline-flex items-center px-3 py-2 bg-gray-800 border border-transparent font-semibold tracking-wide text-xs rounded-sm text-white capitalize hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150" @click="updateItem(currentBlog.id)">Save
        
                                </button>
                                <router-link to="/admin/blogs">
                                    <button type="submit" class="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 capitalize tracking-wide shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150">Cancel</button>
                                </router-link>
                            </div>
                        </form>
                    </div>
                    <!---->
                </div>
            </div>
        </div>
</template>

<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import axios from 'axios';
import moment from 'moment'
import Multiselect from '@vueform/multiselect';
import {
    useRoute
} from 'vue-router';
import {
    useToast
} from "vue-toastification";
const toast = useToast();
import {
    VueEditor
} from "vue3-editor";

export default {
    components: {
        VueEditor,
        Multiselect,
        VueDatePicker
    },

    data() {
        return {
            updateBlog: [{
                title: '',
                slug: '',
                image: '',
                description: '',
                status: '',
                user: '',
                category: '',
                tags: [],
                date: ''

            }],
            blogs: [],

            currentBlog: '',
            content: "<h1></h1>",
            user: null,
            date: '',
            tage: null,
            status: null,
            categories: null,
            userOptions: [],
            tageOptions: [],
            categoriesOptions: [],
            statusOptions: [{
                    label: 'Publish',
                    value: 1
                },
                {
                    label: 'UnPublish',
                    value: 2
                }
            ]

        };
    },
    mounted() {
        this.getUsers();
        this.getTages();
        this.getCategories();
        this.getBlogs(useRoute().params.id);
         
    },

    methods: {

        getBlogs(id) {
            let data = localStorage.getItem('user');
            data = JSON.parse(data);
            let token = data.token;

            axios.get(`https://blog-api-dev.octalinfotech.com/api/blogs/${id}/show`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((res) => {
                this.currentBlog = res.data.data.blog;

                console.error(res.data.data);

                this.currentBlog.tag = this.currentBlog.tag.map((item) => {
                        return item.id;
                    });
                this.currentBlog.user_id = this.currentBlog.user_id
                    .map((item) => {
                        return item.id;
                    });
                this.currentBlog.category_id = this.currentBlog.category_id
                    .map((item) => {
                        return item.id;
                    });

                this.isLoading = false;
            }).catch((err) => {
                console.log(err);
            })

        },
        convertToSlug(event) {
            let text = event.target.value;

            this.currentBlog.slug = text.toLowerCase()
                .replace(/ /g, "-")
                .replace(/[^\w-]+/g, "");
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
        getTages() {
            let data = localStorage.getItem('user');
            data = JSON.parse(data);
            let token = data.token;

            axios.get(`https://blog-api-dev.octalinfotech.com/api/tages/all`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((res) => {
                this.tageOptions = res.data.data.map((value) => {
                    return {
                        label: value.name,
                        value: value.id
                    }
                })
                console.log(res.data.data);
            });
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

        updateItem(id) {
            let data = localStorage.getItem('user');
            data = JSON.parse(data);
            let token = data.token;
            let formData = new FormData();
            this.currentBlog.date = moment(this.currentBlog.date).format("YYYY-MM-DD");
            console.log(this.currentBlog);
            formData.append('title', this.currentBlog.title);
            formData.append('image', this.currentBlog.image);
            formData.append('description', this.currentBlog.description);
            formData.append('status', this.currentBlog.status);
            formData.append('user_id', this.currentBlog.user_id);
            formData.append('category_id', this.currentBlog.category_id);
            // formData.append('tag_ids', this.currentBlog.tag_ids);

            this.currentBlog.tag.forEach((value) => formData.append('tag_ids[0]', value))

            formData.append('date', this.currentBlog.date);

            axios.post(`https://blog-api-dev.octalinfotech.com/api/blogs/${id}/update`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((res) => {
                toast.success(res.data.message, {
                    timeout: 2000
                });

                this.$router.push("/admin/blogs");

            }).catch((err) => {
                console.log(err);
                toast.error(err.response.data.message, {
                    timeout: 2000
                });
            });
        },
        uploadImage(e) {
            this.currentBlog.image = e.target.files[0];
        },

        submitForm() {
            // Implement your form submission logic here using this.createUser
            // For example, you can send a request to your server to create a new user
            console.log("Form submitted:", this.createUser);
        }
    }
};
</script>

<style src="@vueform/multiselect/themes/default.css"></style><style scoped>
.width {
    box-shadow: 20px 20px 60px #0000002d, inset -20px -20px 60px #ffffff48;
    height: 48rem;
    width: 70rem;
}

.width-10 {
    width: 478px;
}

.width-5 {
    width: 30rem;
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

@media (max-width: 1200px) {
    .width {
        width: 65rem;
        margin-left: 300px;
    }
}
</style>
