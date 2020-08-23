<template>
    <div>
        <bread-crumb :titleList="title"></bread-crumb>
        <div class="container">
            <el-row style=" margin-bottom: 23px;">
                <el-col :span="8" :offset="16">
                    <el-button type="primary">添加门店</el-button>
                    <el-button type="primary">一键上线</el-button>
                    <el-button type="primary">一键下线</el-button>
                    <el-button type="primary">重置刷新</el-button>
                </el-col>
            </el-row>
            <el-table :data="tableData" style="width: 100%">
                <el-table-column label="序号" type="index"></el-table-column>
                <el-table-column prop="name" label="商铺名称"></el-table-column>
                <el-table-column prop="status" label="状态">
                    <template slot-scope="scope">
                        <el-tag type="success" v-if="scope.row.status == 'S01'">已完善</el-tag>
                        <el-tag type="danger" v-else>未完善</el-tag>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button type="primary" @click="handleRemove(scope.row)">移除</el-button>
                        <el-button type="primary" @click="handleEdit(scope.row)">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-dialog title="编辑" :visible.sync="modalVsible">
                <el-form :model="form">
                    <el-form-item label="地址" :label-width="formLabelWidth">
                        <el-input v-model="form.address" autocomplete="off" placeholder="请输入地址" />
                    </el-form-item>
                   
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="handleOnok">提 交</el-button>
                    <el-button @click="modalVsible = false">取 消</el-button>
                </div>
            </el-dialog>
        </div>
    </div>
</template>

<script>
import breadCrumb from './breadcrumb.vue';
import tableSource from './tableSource';
export default {
    data() {
        return {
            title: ['首页', '商铺管理'],
            tableData: tableSource,
            modalVsible: false,
            formLabelWidth: '120px',
            dialogItem: {},
            form: {
                address: ''
            }
        };
    },
    components: {
        breadCrumb
    },
    methods: {
        handleRemove(item) {
            this.tableData = this.tableData.filter((k) => k.id !== item.id);
        },
        handleEdit(item) {
            console.log(item, '----item---');
            this.modalVsible = true;
            this.dialogItem = item;
        },
        handleOnok() {

        }
    }
};
</script>

<style scoped>
tr > th {
    text-align: center;
}
tr > td {
    text-align: center;
}
</style>