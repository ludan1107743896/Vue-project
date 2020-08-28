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
                <el-table-column prop="status" label="当前状态">
                    <template slot-scope="scope">
                        <el-tag type="success" v-if="scope.row.status == 'S01'">已完善</el-tag>
                        <el-tag type="info" v-else-if="scope.row.status == 'S02'">已下线</el-tag>
                        <el-tag type="danger" v-else>未完善</el-tag>
                    </template>
                </el-table-column>
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
            dataSouce: []
        };
    },
    mounted() {
        axios.get('/instrumentManagement/tableList').then(res => {
            this.tableData = res.data;
            this.dataSouce = res.data;
        })
    },
    components: {
        breadCrumb,
        searchComp
    },
    methods: {
        callbackSearchItem(item) {
            const { status, shop } = item;
            this.tableData = shop != '' ? this.dataSouce.filter(k => k.name === shop): this.dataSouce;
            this.tableData = this.dataSouce.filter(v => v.status == status);
        }
    },
    watch: {
        tableData: function (_o, _n){
            // console.log(_o, 'old')
            // console.log(_n, 'new')
        }
    }
};
</script>