<template>
    <div class="container-box">
        之前内容展示内容： {{this.name}}
        <br/>
        <el-button type="primary" @click="handleClick">点击修改内容</el-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: 0
        }
    },
    methods: {
        handleClick() {
            this.name = this.name + 1;
            console.log("当前内容", this.name);
            this.$nextTick(() => {
                console.log("修改之后的内容", this.name)
            })
        }
    }
}
</script>