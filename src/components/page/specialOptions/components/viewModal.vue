<template>
    <div>
        <input :value="text1" @input="$emit('change', $event.target.value)" class="input"/>
    </div>
</template>

<script>
export default {
    model: {
        prop: 'text1',
        event: 'change'
        
    },
    props: {
        text1: {
            type: String,
            default: ''
        }
    },
    data() {
        return {}
    }
}
</script>

<style scoped>
.input {
    width: 95%;
    line-height: 32px;
    border: 1px solid #ddd;
    border-radius: 2.5px;
    padding-left: 12px;
}
</style>