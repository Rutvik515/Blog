<template>
    <div class="mx-auto p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 2xl:p-24">
      <div class="sm:ml-5 md:ml-10 xl:ml-20">
        <div
          id="modal"
          class="w-full sm:w-auto md:w-full lg:w-3/4 xl:w-2/3 2xl:w-1/2"
          tabindex="-1"
          aria-labelledby="exampleModalLabel1"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content" style="width: auto;">
              <div class="modal-header">
                <h5 class="modal-title">New Blog</h5>
                <router-link to="/admin/blog">
                  <button
                    type="button"
                    class="bg-dark text-white rounded-2 p-2 mr-5 mt-3"
                  >
                    Back
                  </button>
                </router-link>
              </div>
              <form @submit.prevent="submitForm">
                <div class="modal-body">
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <!-- Title -->
                    <div class="mb-4">
                      <label for="name" class="block text-sm font-medium text-gray-700">
                        Title<span class="text-danger">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        v-model="createBlog.title"
                        @input="convertToSlug"
                        class="mt-1 p-2 border rounded w-full"
                        placeholder="Enter your title"
                      />
                    </div>
  
                    <!-- Slug -->
                    <div class="mb-4">
                      <label for="email" class="block text-sm font-medium text-gray-700">
                        Slug<span class="text-danger">*</span>
                      </label>
                      <input
                        id="email"
                        type="text"
                        v-model="createBlog.slug"
                        class="mt-1 p-2 border rounded w-full"
                        placeholder="Enter your slug"
                        disabled
                      />
                    </div>
  
                    <!-- User -->
                    <div class="mb-4">
                      <label for="user" class="block text-sm font-medium text-gray-700">
                        User<span class="text-danger">*</span>
                      </label>
                      
                      <Multiselect
                        v-model="createBlog.user"
                        :options="userOptions"
                        placeholder="Select Option"
                        class="w-full rounded-2"
                      />
                    </div>
  
                    <!-- Tags -->
                    <div class="mb-4">
                      <label for="tags" class="block text-sm font-medium text-gray-700">
                        Tags<span class="text-danger">*</span>
                      </label>
                      <Multiselect
                        v-model="createBlog.tags"
                        :options="tageOptions"
                        :closeOnSelect="true"
                        :searchable="true"
                        mode="tags"
                        :multiple="true"
                        placeholder="Select Option"
                        class="w-full rounded-2"
                      />
                    </div>
  
                    <!-- Category -->
                    <div class="mb-4">
                      <label for="category" class="block text-sm font-medium text-gray-700">
                        Category<span class="text-danger">*</span>
                      </label>
                      <Multiselect
                        v-model="createBlog.category"
                        :options="categoriesOptions"
                        placeholder="Select Option"
                        class="w-full rounded-2"
                      />
                    </div>
  
                    <!-- Date -->
                    <div class="mb-4">
                      <label for="date" class="block text-sm font-medium text-gray-700">
                        Date<span class="text-danger">*</span>
                      </label>
                      <VueDatePicker v-model="createBlog.date" class="p-2 w-full rounded-2" />
                    </div>
  
                    <!-- Image -->
                    <div class="mb-4">
                      <label for="fileupload" class="block text-sm font-medium text-gray-700">
                        Image<span class="text-danger">*</span>
                      </label>
                      <div class="flex items-center border">
                        <input
                          ref="fileupload"
                          type="file"
                          class="custom-file-input mt-1 w-full"
                          style="cursor: pointer;"
                          @input="uploadImage1"
                        />
                      </div>
                    </div>
  
                    <!-- Status -->
                    <div class="mb-4">
                      <label for="status" class="block text-sm font-medium text-gray-700">
                        Status<span class="text-danger">*</span>
                      </label>
                      <Multiselect
                        v-model="createBlog.status"
                        :options="statusOptions"
                        placeholder="Select Option"
                        class="w-full rounded-2"
                      />
                    </div>
                  </div>
                </div>
                <div class="modal-body">
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
          <vue-editor v-model="createBlog.description"></vue-editor>
        </div>
      </div>
      <div class="">
        <hr />
        <div class="modal-footer sm:mr-2 md:mr-4 lg:mr-8 xl:mr-12 2xl:mr-16 mt-3">
          <router-link to="/admin/blog">

          <BButton type="button" class="btn btn-secondary" variant="outline-secondary">
            Cancel
          </BButton>
        </router-link>
          <BButton
            type="submit"
            class="btn btn-primary ms-2 sm:ms-4 md:ms-6 lg:ms-8 xl:ms-10 2xl:ms-12"
            @click="createItem" variant="outline-primary"
          >
            Submit
          </BButton>
          
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
            createBlog: {
                title: '',
                slug: '',
                image: '',
                description: '',
                status: '',
                user: '',
                category: '',
                tags: [],
                date: ''

            },
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
            statusOptions: ['Publish', 'UnPublish']

        };
    },
    mounted() {
        this.getUsers();
        this.getTages();
        this.getCategories();
    },

    methods: {

        convertToSlug(event) {
            let text = event.target.value;

            this.createBlog.slug = text.toLowerCase()
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

        createItem() {
            let data = localStorage.getItem('user');
            data = JSON.parse(data);
            let token = data.token;
            let formData = new FormData();
            this.createBlog.date = moment(this.createBlog.date).format("YYYY-MM-DD");

            formData.append('title', this.createBlog.title);
            formData.append('image', this.createBlog.image);
            formData.append('description', this.createBlog.description);
            formData.append('status', this.createBlog.status === 'Publish' ? 1 : 2);
            formData.append('user_id', this.createBlog.user);
            formData.append('category_id', this.createBlog.category);
            this.createBlog.tags.forEach((value) => formData.append('tag_ids[]', value))

            formData.append('date', this.createBlog.date);

            axios.post(`https://blog-api-dev.octalinfotech.com/api/blogs/store`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((res) => {
                toast.success(res.data.message, {
                    timeout: 2000
                });

                // this.resetFormData();
                this.$router.push("/admin/blog");
                this.getUsers();
                this.getTages();
                this.getCategories();

            }).catch((err) => {
                console.log(err);
                toast.error(err.response.data.message, {
                    timeout: 2000
                });
            });
        },
        uploadImage1(event) {
            this.createBlog.image = event.target.files[0];
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
