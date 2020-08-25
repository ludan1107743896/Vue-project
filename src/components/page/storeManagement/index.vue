<template>
    <div>
        <bread-crumb :titleList="title"></bread-crumb>
        <div class="container">
            <el-row style=" margin-bottom: 23px;">
                <el-col :span="8" :offset="16">
                    <el-button type="primary" @click="handleClickAdd">添加门店</el-button>
                    <el-button type="primary" @click="handleClickUpLine('')">一键上线</el-button>
                    <el-button type="primary" @click="handleClickUpLine('S03')">一键下线</el-button>
                    <el-button type="primary" @click="resetDataSource">重置刷新</el-button>
                </el-col>
            </el-row>
            <el-table :data="tableData" style="width: 100%">
                <el-table-column label="序号" type="index"></el-table-column>
                <el-table-column prop="name" label="商铺名称"></el-table-column>
                <el-table-column prop="status" label="状态">
                    <template slot-scope="scope">
                        <el-tag type="success" v-if="scope.row.status == 'S01'">已完善</el-tag>
                        <el-tag type="danger" v-else-if="scope.row == 'S02'">未完善</el-tag>
                        <el-tag type="warning" v-else-if="scope.row == 'S03'">已下线</el-tag>
                        <el-tag type="info" v-else>已上线</el-tag>
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
                <el-form :model="form" :rules="rules" ref="ruleForm">
                    <el-form-item label="名称" :label-width="formLabelWidth" prop="name">
                        <el-input v-model="form.name" autocomplete="off" placeholder="请输入名称" />
                    </el-form-item>
                    <el-form-item label="位置" :label-width="formLabelWidth" prop="position">
                        <el-cascader v-model="form.position" :options="options" style="width: 100%;"></el-cascader>
                    </el-form-item>
                    <el-form-item label="地址" :label-width="formLabelWidth" prop="address">
                        <el-input v-model="form.address" autocomplete="off" placeholder="请输入地址" />
                    </el-form-item>
                    <el-form-item label="活动时间" :label-width="formLabelWidth" required>
                        <el-row>
                            <el-col :span="11">
                                <el-form-item prop="date1">
                                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;">
                                    </el-date-picker>
                                </el-form-item>
                            </el-col>
                            <el-col class="line" :span="2">-</el-col>
                            <el-col :span="11">
                                <el-form-item prop="date2">
                                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date2" style="width: 100%;"></el-date-picker>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form-item>
                    <el-form-item label="面积" :label-width="formLabelWidth">
                        <el-input-number v-model="form.measure" controls-position="right" :min="1" style="width: 100%;"></el-input-number>
                    </el-form-item>
                    <el-form-item label="电话" :label-width="formLabelWidth">
                        <el-input autocomplete="off" v-model="form.phoneNum" placeholder="请输入电话" />
                    </el-form-item>
                    <el-form-item label="类型" :label-width="formLabelWidth">
                        <el-select
                            v-model="form.relese"
                            style="width: 100%;"
                            placeholder="请选择类型"
                        >
                            <el-option label="生美" value="shengmei"></el-option>
                            <el-option label="医美" value="yimei"></el-option>
                            <el-option label="集美" value="jimei"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="备注" :label-width="formLabelWidth">
                        <el-input
                            v-model="form.mark"
                            type="textarea"
                            :rows="2"
                            placeholder="请输入备注">
                        </el-input>
                    </el-form-item>

                    <el-form-item label="文件上传" :label-width="formLabelWidth">
                        <el-upload
                            v-model="form.file"
                            class="upload-demo"
                            drag
                            action="https://jsonplaceholder.typicode.com/posts/"
                            multiple>
                            <i class="el-icon-upload"></i>
                            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                        </el-upload>
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
import moment from 'moment';
import axios from 'axios';

export default {
    data() {
        return {
            title: ['首页', '商铺管理'],
            tableData: tableSource,
            modalVsible: false,
            formLabelWidth: '120px',
            addType: '',
            form: {
                name: '',
                position: [],
                address: '',
                date1: '',
                date2: '',
                measure: '',
                phoneNum: '',
                relese: 'shengmei',
                mark: '',
                file: {}
            },
            rules: {
                name: [{ required: true, message: '门店名称', trigger: 'blur' }],
                // address: [{ required: true, message: '请输入地址', trigger: 'blur' }],
                // date1: [{ type: 'date', required: true, message: '请选择日期', trigger: 'change' }],
                // date2: [{ type: 'date', required: true, message: '请选择日期', trigger: 'change' }],
                // measure: [{ required: true, message: '请输入面积', trigger: 'change' }],
                // position: [{ required: true, message: '请输入位置', trigger: 'blur' }],
            },
            value: [],
            options: [
                {
                    value: 'zhinan',
                    label: '指南',
                    children: [
                        {
                            value: 'shejiyuanze',
                            label: '设计原则',
                            children: [
                                {
                                    value: 'yizhi',
                                    label: '一致'
                                },
                                {
                                    value: 'fankui',
                                    label: '反馈'
                                },
                                {
                                    value: 'xiaolv',
                                    label: '效率'
                                },
                                {
                                    value: 'kekong',
                                    label: '可控'
                                }
                            ]
                        },
                        {
                            value: 'daohang',
                            label: '导航',
                            children: [
                                {
                                    value: 'cexiangdaohang',
                                    label: '侧向导航'
                                },
                                {
                                    value: 'dingbudaohang',
                                    label: '顶部导航'
                                }
                            ]
                        }
                    ]
                },
                {
                    value: 'zujian',
                    label: '组件',
                    children: [
                        {
                            value: 'basic',
                            label: 'Basic',
                            children: [
                                {
                                    value: 'layout',
                                    label: 'Layout 布局'
                                },
                                {
                                    value: 'color',
                                    label: 'Color 色彩'
                                },
                                {
                                    value: 'typography',
                                    label: 'Typography 字体'
                                },
                                {
                                    value: 'icon',
                                    label: 'Icon 图标'
                                },
                                {
                                    value: 'button',
                                    label: 'Button 按钮'
                                }
                            ]
                        },
                        {
                            value: 'form',
                            label: 'Form',
                            children: [
                                {
                                    value: 'radio',
                                    label: 'Radio 单选框'
                                },
                                {
                                    value: 'checkbox',
                                    label: 'Checkbox 多选框'
                                },
                                {
                                    value: 'input',
                                    label: 'Input 输入框'
                                },
                                {
                                    value: 'input-number',
                                    label: 'InputNumber 计数器'
                                },
                                {
                                    value: 'select',
                                    label: 'Select 选择器'
                                },
                                {
                                    value: 'cascader',
                                    label: 'Cascader 级联选择器'
                                },
                                {
                                    value: 'switch',
                                    label: 'Switch 开关'
                                },
                                {
                                    value: 'slider',
                                    label: 'Slider 滑块'
                                },
                                {
                                    value: 'time-picker',
                                    label: 'TimePicker 时间选择器'
                                },
                                {
                                    value: 'date-picker',
                                    label: 'DatePicker 日期选择器'
                                },
                                {
                                    value: 'datetime-picker',
                                    label: 'DateTimePicker 日期时间选择器'
                                },
                                {
                                    value: 'upload',
                                    label: 'Upload 上传'
                                },
                                {
                                    value: 'rate',
                                    label: 'Rate 评分'
                                },
                                {
                                    value: 'form',
                                    label: 'Form 表单'
                                }
                            ]
                        },
                        {
                            value: 'data',
                            label: 'Data',
                            children: [
                                {
                                    value: 'table',
                                    label: 'Table 表格'
                                },
                                {
                                    value: 'tag',
                                    label: 'Tag 标签'
                                },
                                {
                                    value: 'progress',
                                    label: 'Progress 进度条'
                                },
                                {
                                    value: 'tree',
                                    label: 'Tree 树形控件'
                                },
                                {
                                    value: 'pagination',
                                    label: 'Pagination 分页'
                                },
                                {
                                    value: 'badge',
                                    label: 'Badge 标记'
                                }
                            ]
                        },
                        {
                            value: 'notice',
                            label: 'Notice',
                            children: [
                                {
                                    value: 'alert',
                                    label: 'Alert 警告'
                                },
                                {
                                    value: 'loading',
                                    label: 'Loading 加载'
                                },
                                {
                                    value: 'message',
                                    label: 'Message 消息提示'
                                },
                                {
                                    value: 'message-box',
                                    label: 'MessageBox 弹框'
                                },
                                {
                                    value: 'notification',
                                    label: 'Notification 通知'
                                }
                            ]
                        },
                        {
                            value: 'navigation',
                            label: 'Navigation',
                            children: [
                                {
                                    value: 'menu',
                                    label: 'NavMenu 导航菜单'
                                },
                                {
                                    value: 'tabs',
                                    label: 'Tabs 标签页'
                                },
                                {
                                    value: 'breadcrumb',
                                    label: 'Breadcrumb 面包屑'
                                },
                                {
                                    value: 'dropdown',
                                    label: 'Dropdown 下拉菜单'
                                },
                                {
                                    value: 'steps',
                                    label: 'Steps 步骤条'
                                }
                            ]
                        },
                        {
                            value: 'others',
                            label: 'Others',
                            children: [
                                {
                                    value: 'dialog',
                                    label: 'Dialog 对话框'
                                },
                                {
                                    value: 'tooltip',
                                    label: 'Tooltip 文字提示'
                                },
                                {
                                    value: 'popover',
                                    label: 'Popover 弹出框'
                                },
                                {
                                    value: 'card',
                                    label: 'Card 卡片'
                                },
                                {
                                    value: 'carousel',
                                    label: 'Carousel 走马灯'
                                },
                                {
                                    value: 'collapse',
                                    label: 'Collapse 折叠面板'
                                }
                            ]
                        }
                    ]
                },
                {
                    value: 'ziyuan',
                    label: '资源',
                    children: [
                        {
                            value: 'axure',
                            label: 'Axure Components'
                        },
                        {
                            value: 'sketch',
                            label: 'Sketch Templates'
                        },
                        {
                            value: 'jiaohu',
                            label: '组件交互文档'
                        }
                    ]
                }
            ]
        };
    },
    mounted() {
        axios.get('/user/info').then(res => {
            console.log(res, '-----res----')
        })
    },
    components: {
        breadCrumb
    },
    methods: {
        handleRemove(item) {
            this.tableData = this.tableData.filter((k) => k.id !== item.id);
        },
        handleEdit(item) {;
            this.modalVsible = true;
            this.form = item;
        },
        handleOnok() {
            this.$refs['ruleForm'].validate((valid) => {
                if(valid){
                    this.form.date1 = moment(this.form.data1).format('YYYY-MM-MM')
                    this.form.date2 = moment(this.form.data2).format('YYYY-MM-MM')
                    if (this.addType == '') {
                        console.log(this.form, '1')
                        console.log('此时做修改交易');
                    } else {
                        console.log('此时做添加逻辑')
                        console.log(this.form, '2')
                        this.addType = '';
                    }
                } else {
                    return false;
                }
            })
        },
        handleClickAdd() {
            this.form = {
                name: '',
                position: [],
                address: '',
                date1: '',
                date2: '',
                measure: '',
                phoneNum: '',
                relese: '',
                mark: '',
                file: {}
            }
            this.$nextTick(() => {
                this.modalVsible = true;
                this.addType = 'add';
            })
        },
        handleClickUpLine(type) {
            this.tableData.map(k => k.status = type)
        },
        resetDataSource() {
            console.log(tableSource, 'mmmmm')
            this.tableData = tableSource;
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
.line{
    text-align:center;
}
</style>