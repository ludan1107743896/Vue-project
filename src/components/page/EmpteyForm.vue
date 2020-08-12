<template>
    <div class="crumbs">
        <div class="container">
            <el-form :rules="rules" ref="form" :model="form" label-width="80px">
                <el-row :gutter="20">
                    <el-col :span="10">
                        <el-form-item label="活动名称">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-form-item label="活动区域">
                    <el-select v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-row :gutter="20">
                    <el-col :span="16">
                        <el-form-item label="活动时间">
                            <el-col :span="11">
                                <el-date-picker
                                    type="date"
                                    placeholder="选择日期"
                                    v-model="form.date1"
                                    style="width: 100%;"
                                ></el-date-picker>
                            </el-col>
                            <el-col class="line" :span="2" style="text-align:center">-</el-col>
                            <el-col :span="11">
                                <el-time-picker
                                    placeholder="选择时间"
                                    v-model="form.date2"
                                    style="width: 100%;"
                                ></el-time-picker>
                            </el-col>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-form-item label="即时配送">
                    <el-switch v-model="form.delivery"></el-switch>
                </el-form-item>
                <el-form-item label="活动性质">
                    <el-checkbox-group v-model="form.type">
                        <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                        <el-checkbox label="地推活动" name="type"></el-checkbox>
                        <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                        <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="特殊资源">
                    <el-radio-group v-model="form.resource">
                        <el-radio label="线上品牌商赞助"></el-radio>
                        <el-radio label="线下场地免费"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="活动形式">
                    <el-input type="textarea" v-model="form.desc"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">立即创建</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>

            <el-dialog title="确认提示" :visible.sync="centerDialogVisible" width="30%" center>
                <el-row :gutter="20">
                    <el-col :span="8">
                        <div>活动名称:{{this.form.name}}</div>
                    </el-col>
                </el-row>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="centerDialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
                </span>
            </el-dialog>
        </div>
    </div>
</template>

<script>
import navTags from '../common/NavTages.vue';

export default {
    data() {
        return {
            centerDialogVisible: false,
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
            rules: {
                name: [{ required: true, message: '请输入活动名称', trigger: 'blur' }],
                region: [{ required: true, message: '请选择活动区域', trigger: 'change' }],
                date1: [{ type: 'date', required: true, message: '请选择日期', trigger: 'change' }],
                date2: [{ type: 'date', required: true, message: '请选择时间', trigger: 'change' }],
                type: [{ type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }],
                resource: [{ required: true, message: '请选择活动资源', trigger: 'change' }],
                desc: [{ required: true, message: '请填写活动形式', trigger: 'blur' }]
            }
        };
    },
    methods: {
        onSubmit() {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    this.centerDialogVisible = true;
                    console.log('submit!', this.form);
                } else {
                    return false;
                }
            });
        }
    },
    components: {
        navTags
    }
};
</script>

