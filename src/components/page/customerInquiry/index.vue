<template>
    <div>
        <bread-crumb :titleList="title"></bread-crumb>
        <div class="container">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="基本信息" name="basicInfo">
                    <BasicInfoComp />
                </el-tab-pane>
                <el-tab-pane label="报单" name="form">
                    <StepComp />
                </el-tab-pane>
                <el-tab-pane label="上门" name="goupdoor">上门</el-tab-pane>
                <el-tab-pane label="购买方案" name="buy">购买方案</el-tab-pane>
                <el-tab-pane label="成交" name="success">成交</el-tab-pane>
                <el-tab-pane label="操作" name="options">操作</el-tab-pane>
                <el-tab-pane label="回访" name="callback">回访</el-tab-pane>
                <el-tab-pane label="账户" name="user">账户</el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<script>
import breadCrumb from '../storeManagement/breadcrumb.vue';
import BasicInfoComp from './components/BasicInfoComp.vue';
import StepComp from './components/StepComp.vue';
export default {
    data() {
        return {
            title: ['首页', '客户自定义查询'],
            activeName: 'basicInfo'
        };
    },
    methods: {
        handleClick(e) {
            console.log(e, '--------e------')
        }
    },
    components: {
        breadCrumb,
        BasicInfoComp,
        StepComp,
    }
};
</script>
