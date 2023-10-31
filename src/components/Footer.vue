<template>
    <div>
      <mainLayout>
   <template #footer>
    <div>
        <footer>
        <p>Copyright &copy; 2023 <img src="https://i.ibb.co/QDy827D/ak-logo.png" alt="logo"> All Rights Reserved.</p>
    </footer>
    </div>
   </template>
</mainLayout>
    
    </div>
</template>

<script>
import mainLayout from './MainLayout.vue';

    export default {
        name:"footerComponent",
        components:{
            mainLayout,
        }
    }
</script>

<style scoped>



 footer {
    background: #1A1E25;
    color: #868c96;
}

footer p {
    padding: 40px 0;
    text-align: center;
}

footer img {
    width: 44px;
}

</style>