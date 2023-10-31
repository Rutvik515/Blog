<template>
    <Mainlayout>
        <template #detail>
            <div class="text">
                this is Users page
            </div>
        </template>
    </Mainlayout>
</template>

<script>
import Mainlayout from './MainLayout.vue';
    export default {
       name: 'ServiceComponent' ,
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