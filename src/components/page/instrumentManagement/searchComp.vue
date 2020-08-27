<template>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="店铺">
            <el-input v-model="formInline.shop" placeholder="请输入店铺名称"></el-input>
        </el-form-item>
        <el-form-item label="状态">
            <el-select v-model="formInline.status" placeholder="选择状态">
                <el-option label="全部" value=""></el-option>
                <el-option label="上线" value="S01"></el-option>
                <el-option label="下线" value="S02"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
    data() {
        return {
            formInline: {
                shop: '',
                status: ''
            }
        };
    },
    methods: {
        onSubmit() {
            this.$emit('callbackSearchItem', this.formInline);
        }
    }
};
</script>