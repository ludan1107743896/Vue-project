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
                <template>
                    <el-button type="primary">详情</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            tableData: [],
            form: {
                name: '',
                resource: 'woman',
                date1: '',
                date2: ''
            }
        };
    },
    mounted() {
        axios.get('/user/infoList').then(res => {
            this.tableData = res.data;
        })
    }
};
</script>