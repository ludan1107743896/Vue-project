<template>
    <div class>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-copy"></i>业务逻辑页面
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <el-tabs v-model="activeName" type="card" @tab-click="handleClick" class="tab-box">
                <el-tab-pane label="用户管理" name="Basicplan">
                    <el-table :data="tableData" style="width: 100%">
                        <el-table-column prop="code" label="code"></el-table-column>
                        <el-table-column prop="name" label="name"></el-table-column>
                        <el-table-column prop="lastUpdate" label="LastUpdate"></el-table-column>
                        <el-table-column prop="relese" label="Relese"></el-table-column>
                        <el-table-column label="Action" width="350px">
                            <template slot-scope="scope">
                                <el-button
                                    type="danger"
                                    size="mini"
                                    @click="handleEdit(scope.row)"
                                >Edit</el-button>
                                <el-button type="danger" size="mini" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
                                <el-button type="danger" size="mini"
                                    @click="handleClose(scope.row)"
                                >Close</el-button>
                                <el-button type="danger" size="mini">SetUp</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    <div class="pagination">
                        <el-pagination
                            background
                            layout="total, prev, pager, next"
                            :current-page="query.pageIndex"
                            :page-size="query.pageSize"
                            :total="11"
                            @current-change="handlePageChange"
                        ></el-pagination>
                    </div>
                    <!-- 提示框展示 -->
                    <el-dialog title="Edit" :visible.sync="dialogFormVisible">
                        <el-form :model="form">
                            <el-form-item label="code" :label-width="formLabelWidth">
                                <el-input
                                    v-model="form.code"
                                    autocomplete="off"
                                    placeholder="请输入code"
                                />
                            </el-form-item>
                            <el-form-item label="name" :label-width="formLabelWidth">
                                <el-input
                                    v-model="form.name"
                                    autocomplete="off"
                                    placeholder="请输入name"
                                />
                            </el-form-item>
                            <el-form-item label="lastUpdate" :label-width="formLabelWidth">
                                <el-date-picker
                                    v-model="form.lastUpdate"
                                    type="datetime"
                                    placeholder="选择日期时间"
                                    class="model-form-style"
                                ></el-date-picker>
                            </el-form-item>
                            <el-form-item label="relese" :label-width="formLabelWidth">
                                <el-select
                                    v-model="form.relese"
                                    placeholder="请选择relese类型"
                                    class="model-form-style"
                                >
                                    <el-option label="true" value="true"></el-option>
                                    <el-option label="false" value="false"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                            <el-button @click="dialogFormVisible = false">取 消</el-button>
                            <el-button type="primary" @click="handleOnok">确 定</el-button>
                        </div>
                    </el-dialog>
                </el-tab-pane>
                <el-tab-pane label="配置管理" name="Rider">Rider</el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
import moment from 'moment';

export default {
    data() {
        return {
            activeName: 'Basicplan',
            dialogFormVisible: false,
            formLabelWidth: '120px',
            pageTotal:1,
            query: {
                pageIndex: 1,
                pageSize: 10
            },
            form: {
                code: '',
                name: '',
                lastUpdate: '',
                relese: ''
            },
            tableData: [
                {
                    code: '8P20F2F',
                    name: '王小虎',
                    lastUpdate: '2020-2-9',
                    relese: 'true',
                    id: '1'
                }
            ]
        };
    },
    methods: {
        handleClick() {},
        handlePageChange(val) {
            this.$set(this.query, 'pageIndex', val);
        },
        handleEdit(item) {
            this.form = item;
            this.dialogFormVisible = true;
        },
        handleOnok() {
            this.form.lastUpdate = moment(this.form.lastUpdate).format('YYYY-MM-MM');
            this.tableData.map((k) => {
                if (k.id == this.form.id) {
                    k = this.form;
                }
            });
            this.dialogFormVisible = false;
        },
        handleDelete(index, row) {
            this.$confirm('确定要删除吗？', '提示', {
                type: 'warning'
            })
            .then(() => {
                this.$message.success('删除成功');
                this.tableData.splice(index, 1);
            })
            .catch(() => {});
        },
        handleClose(item) {
            this.tableData.map(k => {
                if(k.id == item.id){
                    k.relese = 'false'
                }
            })
        }
    }
};
</script>

<style scoped>
.model-form-style {
    width: 100%;
}
</style>