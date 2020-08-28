<template>
    <div>
        <el-form ref="form" :model="form" label-width="80px">
            <el-row :gutter="20">
                <el-col :span="6">
                    <el-form-item label="名称" prop="name">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="5">
                    <el-form-item label="性别" prop="resource">
                        <el-radio-group v-model="form.resource">
                            <el-radio label="男"></el-radio>
                            <el-radio label="女"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="活动时间">
                        <el-col :span="11" required>
                            <el-date-picker
                                type="date"
                                placeholder="选择日期"
                                v-model="form.date1"
                                style="width: 100%;"
                            ></el-date-picker>
                        </el-col>
                        <el-col class="line" :span="2">-</el-col>
                        <el-col :span="11">
                            <el-date-picker
                                type="date"
                                placeholder="选择日期"
                                v-model="form.date2"
                                style="width: 100%;"
                            ></el-date-picker>
                        </el-col>
                    </el-form-item>
                </el-col>
                <el-col :span="5">
                    <el-button type="primary">重置</el-button>
                    <el-button>查找</el-button>
                </el-col>
            </el-row>
        </el-form>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column label="序号" type="index"></el-table-column>
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="cardnumber" label="卡号"></el-table-column>
            <el-table-column prop="phoneNum" label="手机号"></el-table-column>
            <el-table-column prop="six" label="性别">
                <template slot-scope="scope">
                    <span v-if="scope.row.six === '1'">男</span>
                    <span v-else>女</span>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button type="primary" @click="handleDeal(scope.row)">详情</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog title="编辑" :visible.sync="modalVsible" :close-on-press-escape="false" :show-close="false">
            <el-form :model="form" ref="ruleForm" :rules="rules" class="form-box">
                <el-form-item label="名称" :label-width="formLabelWidth" prop="name">
                    <el-input v-model="form.name" autocomplete="off" placeholder="请输入名称" />
                </el-form-item>
                <el-form-item label="卡号" :label-width="formLabelWidth" prop="cardnumber">
                    <el-input v-model="form.cardnumber" autocomplete="off" placeholder="请输入卡号" />
                </el-form-item>
                <el-form-item label="手机号" :label-width="formLabelWidth" prop="phoneNum">
                    <el-input v-model="form.phoneNum" autocomplete="off" placeholder="请输入手机号" />
                </el-form-item>
                <el-form-item label="性别" :label-width="formLabelWidth" prop="six">
                    <el-radio-group v-model="form.six">
                        <el-radio label="1">男</el-radio>
                        <el-radio label="0">女</el-radio>
                    </el-radio-group>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="handleOnok">提 交</el-button>
                <el-button @click="handleOnCanCel">取 消</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            tableData: [],
            modalVsible: false,
            formLabelWidth: '120px',
            form: {
                name: '',
                cardnumber: '',
                phoneNum: '',
                six: ''
            },
            rules: {
                name: [{ required: true, message: '请输入名称', trigger: 'blur' }],
                cardnumber: [{ required: true, message: '请输入卡号', trigger: 'blur' }],
                phoneNum: [{ required: true, message: '请输入电话', trigger: 'blur' }],
                six: [{ required: true, message: '请选择性别', trigger: 'blur' }]
            }
        };
    },
    methods: {
        handleOnok() {
            this.$refs['ruleForm'].validate((valid) => {
                if (valid) {
                    this.modalVsible = false;
                } else {
                    this.$message.error('请正确输入结果');
                }
            })
        },
        handleOnCanCel() {
            this.$refs['ruleForm'].validate((valid) => {
                if (valid) {
                    this.modalVsible = false;
                } else {
                    this.$message.error('请正确输入结果');
                }
            })
        },
        handleDeal(item) {
            this.form = item;
            this.modalVsible = true;
        }
    },
    mounted() {
        axios.get('/user/infoList').then((res) => {
            this.tableData = res.data;
        });
    }
};
</script>
<style scoped>
.form-box {
    width: 455px;
    margin: 0 auto;
}
.dialog-footer {
    text-align: center;
}
</style>