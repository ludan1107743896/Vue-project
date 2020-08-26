<template>
    <div>
        <bread-crumb :titleList="title"></bread-crumb>
        <div class="container">
            <search-comp @callbackSearchItem="callbackSearchItem" />
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="name" label="门店名称" width="180"></el-table-column>
                <el-table-column prop="prise" label="当前价格"></el-table-column>
                <el-table-column prop="priseGold" label="市场价格"></el-table-column>
                <el-table-column prop="numCount" label="每日访问量"></el-table-column>
                <el-table-column prop="status" label="当前状态"></el-table-column>
                <el-table-column label="操作">
                    <template>
                        <el-button type="primary">移除</el-button>
                        <el-button type="primary">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
import breadCrumb from '../storeManagement/breadcrumb.vue';
import searchComp from './searchComp.vue';
import axios from 'axios';

export default {
    data() {
        return {
            title: ['首页', '仪器管理'],
            tableData: [],
        };
    },
    mounted() {
        axios.get('/instrumentManagement/tableList').then(res => {
            this.tableData = res.data;
            // console.log(res.data)
        })
    },
    components: {
        breadCrumb,
        searchComp
    },
    methods: {
        callbackSearchItem(item) {
            console.log(item, '-----item----');
        }
    }
};
</script>