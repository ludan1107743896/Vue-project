<template>
    <el-row style="padding: 20px">
        <el-col :span="6" class="lable-sty-item">
            <span style="width:120px;line-height:32px">Plan Name:</span>
            <el-input v-model="searchItem.name"></el-input>
        </el-col>
        <el-col :span="6" class="lable-sty-item">
            <span style="width:120px;line-height:32px;margin-left:10px;">Plan Code:</span>
            <el-input v-model="searchItem.code"></el-input>
        </el-col>
        <el-col :span="2" :offset="1">
            <el-button type="danger" @click="handleSerch">Search</el-button>
        </el-col>
        <el-col :span="2">
            <el-button type="danger" @click="dialogFormVisible = true">Add</el-button>
        </el-col>
        <el-col :span="2">
            <el-button type="danger">Upload template</el-button>
        </el-col>

        <el-dialog title="Edit" :visible.sync="dialogFormVisible">
            <el-form :model="form" :rules="rules" ref="ruleForm">
                <el-form-item label="code" :label-width="formLabelWidth"  prop="code">
                    <el-input v-model="form.code" autocomplete="off" placeholder="请输入code" />
                </el-form-item>
                <el-form-item label="name" :label-width="formLabelWidth" prop="name">
                    <el-input v-model="form.name" autocomplete="off" placeholder="请输入name" />
                </el-form-item>
                <el-form-item label="lastUpdate" :label-width="formLabelWidth" prop="lastUpdate">
                    <el-date-picker
                        v-model="form.lastUpdate"
                        type="datetime"
                        placeholder="选择日期时间"
                        class="model-form-style"
                    ></el-date-picker>
                </el-form-item>
                <el-form-item label="relese" :label-width="formLabelWidth" prop="relese">
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
    </el-row>
</template>

<script>
import moment from 'moment';
export default {
    data() {
        return {
            dialogFormVisible: false,
            formLabelWidth: '120px',
            form: {
                code: '',
                name: '',
                lastUpdate: '',
                relese: ''
            },
            searchItem: {
                name: '',
                code: ''
            },
            rules: {
                code: [{ required: true, message: '请输入Code', trigger: 'blur' }],
                name: [{ required: true, message: '请输入活动名称', trigger: 'blur' }],
                lastUpdate: [{ type: 'date', required: true, message: '请选择日期', trigger: 'change' }],
                relese: [{ required: true, message: '请输入活动名称', trigger: 'change' }]
            }
        };
    },
    watch: {
        dialogFormVisible(val, oldval){
            if(val){
                console.log(val, '新值添加')
            }
        }
    },
    methods: {
        handleSerch() {
            this.$emit('handleSearch', this.searchItem);
        },
        handleOnok() {
            this.$refs['ruleForm'].validate((valid) => {
                if (valid) {
                    this.$emit('handleSubmitAdd', { ...this.form, lastUpdate: moment(this.form.lastUpdate).format('YYYY-MM-MM') });
                    this.dialogFormVisible = false;
                } else {
                    return false;
                }
            });
        }
    }
};
</script>
<style scoped>
.lable-sty-item {
    display: flex;
}
.model-form-style {
    width: 100%;
}
</style>