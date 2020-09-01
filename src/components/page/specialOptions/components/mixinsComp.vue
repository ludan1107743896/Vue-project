<template>
    <div class="container-box">
        {{this.name}}<br/>
        {{this.title}}<br/>
        <el-button type="primary" @click="handleClick">点击调用方法</el-button>
    </div>
</template>

<script>
import mixin from './mixins.js'

export default {
    mixins: [mixin],
    data() {
        return {
            name: '我是当前组件属性值',
        }
    },
}
</script>
