<template>
    <div>
        <bread-crumb :titleList="title"></bread-crumb>
        <div class="container">
            <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item title="组件中定义v-modal" name="1">
                    <span>{{name}}</span>
                    <viewModal v-model="name"/>
                </el-collapse-item>
                <el-collapse-item title="组件中使用$nexttick" name="2" >
                    
                </el-collapse-item>
                <el-collapse-item title="动态组件component/异步组件加载" name="3" >
                   
                </el-collapse-item>
                <el-collapse-item title="公用法法mixin用法" name="4" >
                    
                </el-collapse-item>
                <el-collapse-item title="slot插槽用法" name="4">
                    
                </el-collapse-item>
                <el-collapse-item title="缓存组件keep-alive" name="4" >
                    
                </el-collapse-item>
            </el-collapse>
        </div>
    </div>
</template>

<script>
import breadCrumb from '../storeManagement/breadcrumb';
import viewModal from './components/viewModal.vue';
export default {
    data() {
        return {
            name: '这里输入数据',
            activeNames: ['1'],
            title: ['首页', 'vue特殊交易']
        };
    },
    components: {
        breadCrumb,
        viewModal
    },
    methods: {
        handleChange(val) {
            console.log(val);
        }
    }
};
</script>

<style scoped>
.title-header{
    font-size: 16px;
    font-weight: 600;
}
</style>>