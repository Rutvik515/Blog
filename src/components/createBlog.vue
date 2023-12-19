<template>
    <div class="ml-96">
        <div class=" mt-5 " id="" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content" style="width: auto;">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">New Blog</h5>\
                        <router-link  to="/layout/blog" >
                        <button type="button"   class="bg-dark text-white rounded-2 p-2">Back</button>
                    </router-link>
                    </div>
                    <div class="modal-body d-flex gap-4">

                        <div class="mt-2 text-start">

                            <label for="">Name<span class="text-danger">*</span></label>
                            <div><input class="border-2 p-2 w-full rounded-2" type="text" placeholder="Enter your  name" v-model="createUser"></div>
                        </div>

                        <div>
                            <div class="mt-2 text-start">
                                <label for="">Email<span class="text-danger">*</span></label>
                                <div><input class="border-2 p-2 w-full rounded-2" type="text" placeholder="Enter your email " v-model="createUser"></div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-body d-flex gap-4">

                        <div class="mt-2 text-start">
                            <label for="">Password<span class="text-danger">*</span></label>
                            <div><input class="border-2 p-2 w-full rounded-2" type="password" placeholder="Enter your password" v-model="createUser"></div>
                        </div>
                        <div>
                            <div class="mt-2 text-start">
                                <label for="">Password Confirmation
                                    <span class="text-danger">*</span></label>
                                <div><input class="border-2 p-2 w-full rounded-2" type="password" placeholder="Enter your password" v-model="createUser"></div>
                            </div>
                        </div>
                    </div>

                    <div class="text-start p-0">
                        <label class="container">User image <span class="text-danger">*</span></label>
                        <div id="fileupload" class="container border-2 p-0 text-center rounded-2 w-full " style="width: 466px;height: 44px;">
                            <input ref="fileupload" type="file" class="custom-file-input mt-1" style="cursor: pointer;" @input="uploadImage1">

                        </div>
                    </div>
                  
                </div>
            </div>
        </div>
        <div class="modal-footer ">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancle</button>

                        <button type="button" @click="createItem" class="btn btn-primary" data-bs-dismiss="modal">Submit</button>

                    </div>
        <div id="app">
    <vue-editor v-model="content"></vue-editor>
  </div>
    </div>
   
</template>

<script>
import { VueEditor } from "vue3-editor";


export default {
  components: {
    VueEditor
  },

  data() {
    return {
      content: "<h1>Some initial content</h1>"
    };
  }
}
</script>

<style scoped>

</style>