<template>
    


<loading v-model:active="isLoading" :can-cancel="true" :is-full-page="fullPage" />

<div class="items-center md:flex-row flex-col flex justify-between px-1.5 mb-2">
    <div class="flex gap-8 md:flex-row flex-col mb-5">
        <div>
            <searchBox @search="search" />
            <!-- <input type="text" v-model="search" class="p-2 border rounded-md focus:outline-none border-gray-500" placeholder="Search"> -->
        </div>
    </div>
    <div class="px-6 lg:px-2">
       
    </div>
</div>

<div class="relative overflow-x-auto shadow-md sm:rounded-lg justify-center">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3 text-justify">
                    Id
                </th>

                <th scope="col" class="px-6 py-3 text-justify">
                    Name
                </th>
                <th scope="col" class="px-6 py-3 text-justify">
                    Email
                </th>
                <th scope="col" class="px-6 py-3 text-justify">
                    Message
                </th>

            </tr>
        </thead>
        <tbody>
            <template v-if="contacts?.length > 0">

            <tr v-for="(contact, index) in contacts" :key="index" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                <td class="px-6 py-4 text-justify">
                    {{ index + 1 }}
                </td>
                <td class="px-6 py-4 text-justify">
                    {{ contact.name }}
                </td>

                <td class="px-6 py-4 text-justify">
                    {{ contact.email}}
                </td>
                <td class="px-6 py-4 text-justify">
                    <P v-html="contact.message"></P>
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
            contacts: [],
            message: 'No Categories found.',
           
            page: 1,
            total: 0,
            last_page: null,
            perPage: 10,
            records: [],

        };
    },
    mounted() {
        this.isLoading = true;
        this.getContacts(this.page,);
    },
    computed: {
        // filterContacts() {
        //     if (!this.contacts || !Array.isArray(this.contacts)) {
        //         return [];
        //     }

        //     return this.contacts.filter((item) => {
        //         return Object.values(item).some((val) => {
        //             return String(val).toLowerCase().includes(this.search.toLowerCase());
        //         });
        //     });
        // }
    },
    methods: {

      
        pageChange(value) {
            console.log(value);
            this.perPage = parseInt(value)
            this.setContacts(value)
        },
        setContacts() {
            this.page = 1;
            this.getContacts(this.page);
        },

        
       search(value){
        this.getContacts(1,value)
       },

        getContacts(page, search= '') {
            let data = localStorage.getItem('user');
            data = JSON.parse(data);
            let token = data.token;

            axios.get(`https://blog-api-dev.octalinfotech.com/api/contact-us/index?page=${page}&per_page=${this.perPage}&search=${search}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((res) => {
                this.contacts = res.data.data.data;
                this.isLoading = false;
                this.last_page = res.data.data.last_page;
                this.total = res.data.data.total;
                console.log(res.data.data.total);

            }).catch((err) => {
                console.log(err);
            });
        },
        myCallback: function (page) {
            this.getContacts(page)
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

   

   