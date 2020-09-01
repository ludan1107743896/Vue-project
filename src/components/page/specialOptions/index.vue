<template>
    <div>
        <bread-crumb :titleList="title"></bread-crumb>
        <div class="container">
            <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item title="组件中定义v-modal" name="1">
                   
                </el-collapse-item>
                <el-collapse-item title="组件中使用$nexttick" name="2">
                    
                </el-collapse-item>
                <el-collapse-item title="动态组件component/异步组件加载" name="3">
                   
                </el-collapse-item>
                <el-collapse-item title="公用法法mixin用法" name="4">
                    
                </el-collapse-item>
                <el-collapse-item title="slot插槽用法" name="4">
                    
                </el-collapse-item>
                <el-collapse-item title="缓存组件keep-alive" name="4">
                    
                </el-collapse-item>
            </el-collapse>
        </div>
    </div>
</template>

<script>
import breadCrumb from '../storeManagement/breadcrumb';
export default {
    data() {
        return {
            activeNames: ['1'],
            title: ['首页', 'vue特殊交易']
        };
    },
    components: {
        breadCrumb
    },
    methods: {
        handleChange(val) {
            console.log(val);
        }
    }
};
</script>