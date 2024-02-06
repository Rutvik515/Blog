<script>
// import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
export default{
    name:'sera-ve',
    
    methods:{
        handleSearch (event){
            this.$emit('search',event.target.value) 
        }
     
     
        
    }
}
</script>
<template>
    <div>
        <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-slate-100 overflow-hidden">
            <div class="grid place-items-center h-full w-12">
                <!-- <MagnifyingGlassIcon class="h-5 text-gray-300" /> -->
        <i class="fa-solid fa-magnifying-glass"></i>

            </div>
            <input @input="handleSearch"
                class="peer h-full w-full outline-none text-sm bg-slate-100 text-gray-700 bg-s pr-2 border-none" type="text" id="search"
                placeholder="Search something.." />
        </div>
    </div>
</template>
<script>
</script>