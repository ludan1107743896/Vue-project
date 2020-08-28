<template>
    <div class="content">
        <div class="topTitle">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/dashboard' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>用户信息</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="useData">
            <el-table :data="formData" border style="width: 100%">
                <el-table-column fixed prop="date" label="日期" width="150"></el-table-column>
                <el-table-column prop="name" label="姓名" width="120"></el-table-column>
                <el-table-column prop="email" label="邮箱" width="120"></el-table-column>
                <el-table-column prop="city" label="市区" width="120"></el-table-column>
                <el-table-column prop="age" label="年龄" width="300"></el-table-column>
                <el-table-column fixed="right" label="操作" width="300">
                    <template scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                        <el-button @click="handleChange(scope.row)" type="text" size="small">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-dialog title="编辑" :visible.sync="dialogFormVisible">
                <el-form :model="form">
                    <el-form-item label="姓名" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                     <el-form-item label="年龄" :label-width="formLabelWidth">
                    <el-input v-model="form.age" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                </div>
                </el-dialog>
        </div>
    </div>
</template>
<style>
.topTitle {
    margin-bottom: 20px;
}
</style>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            dialogFormVisible:false,
            formData: [],
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
         },
          formLabelWidth: '120px'
        }
    },
    mounted() {
        axios.get('/userData/personList').then((res) => {
            this.formData = res.data;
            console.log(res.data);
        });
    },
    methods: {
        handleClick(val) {
            console.log(val);
        },
       handleChange(val){
           this.dialogFormVisible=true
           this.form = val;
           console.log(val)
       }
      }
    }

</script>


 