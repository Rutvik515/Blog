<template>
    <div>
    
        <slot name="header" >
            <div v-if="$slots.header">
            <h1>default header</h1>
        </div>
        </slot>
        <slot name="detail">
            <div v-if="$slots.detail">
            <h1> default hero</h1>
        </div>
        </slot>

        <slot name="footer">
            <div v-if="$slots.footer">
            <h1> default footer</h1>
        </div>
        </slot>

    </div>
</template>

<script>

export default {
    
}
</script>

<style scoped>

</style>