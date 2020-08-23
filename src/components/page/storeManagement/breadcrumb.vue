<template>
    <div>
        <el-breadcrumb style="margin-bottom: 10px;">      
            <el-breadcrumb-item v-for="(item, index) in titleList" :key="index">{{item}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>
<script>
export default {
    props: {
        titleList: {
            type: Array,
            defualt: [],
            require: true,
        }
    }
}
</script>