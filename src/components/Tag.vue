<template>
    <Mainlayout>
        <template #detail>
            <div class="text">
                this is Pag page
            </div>
        </template>
    </Mainlayout>
</template>

<script>
import Mainlayout from './MainLayout.vue';
    export default {
       name: 'ProjectComponent' ,
       components: {
        Mainlayout
       }
    }
</script>

<style scoped>

.text{
    text-decoration: none;
}
</style>