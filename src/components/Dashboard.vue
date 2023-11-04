<template>

        <div class="bg-body-secondary container-fluid  hg-10 wh-10 ">
            <div class="d-flex">
                <img class="m-3 mt-4" src="https://ims-api.octalinfotech.com/images/avatar.png" style="height: 64px;" alt="">
                <h1 class="mt-6 font-size">Good Morning, Rutvik Kher</h1>
            </div>

           <div class="d-flex w-50 gap-5 p-3">
                <div class="w-25 h-100 bg-dark p-4 text-white "><p>User</p>{{ showDashboard.user }}</div>
                <div class="w-25 h-100 bg-dark p-4 text-white "><p>blog</p>{{ showDashboard.blog }}</div>
                <div class="w-25 h-100 bg-dark p-4 text-white "><p>Tag</p>{{ showDashboard.tag }}</div>
                <div class="w-25 h-100 bg-dark p-4 text-white "><p>Category</p>{{ showDashboard.category }}</div>
           </div>

        </div>

</template>

<script>
import axios from 'axios';

export default {
    name: 'HomeComponent',
    data() {
        return {
          showDashboard:{}
        }
    },
    mounted(){
        this.getDashboard();
    },
    methods :{
        getDashboard() {
            let data = localStorage.getItem('user');
            data = JSON.parse(data);
            let token = data.token;

            axios.get('https://blog-api-dev.octalinfotech.com/api/dashboard' , {
                headers:{
                    Authorization:`Bearer ${token}`
                }
            }).then((res) => {
                this.showDashboard = res.data.data
            })
        }
    }

}
</script>

<style scoped>
.text {
    text-decoration: none;
}
.border-none {

    border: none;
}
.ms-6 {

    margin-left: 54px;
    font-size: 18px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;

}
.hg-10{
    height: 100px;
}

.font-size{
    font-size: 30px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #111825;
    font-weight: 700;
  
}

.mt-6{
    margin-top: 40px;
    
}


</style>
