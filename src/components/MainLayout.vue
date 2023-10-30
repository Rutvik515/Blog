<template>
    <div>
    
        <slot name="heroSection" >
            <div v-if="$slots.heroSection">
            <h1>default header</h1>
        </div>
        </slot>
        <slot name="detail">
            <div v-if="$slots.detail">
            <h1>defaudeataikllt hero</h1>
        </div>
        </slot>

        <slot name="footer">
            <div v-if="$slots.footer">
            <h1>defaudeataikllt footer</h1>
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