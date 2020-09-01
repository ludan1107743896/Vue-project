<template>
    <div class="container-box">
        <keep-alive>
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="组件一" name="first">
                    {{this.name}}
                    <el-button type="primary" @click="handleType1">点击修改状态</el-button>
                </el-tab-pane>
                <el-tab-pane label="组件二" name="second">
                    {{this.name2}}
                    <el-button type="primary" @click="handleType2">点击修改状态</el-button>
                </el-tab-pane>
            </el-tabs>
        </keep-alive>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeName: 'first',
            name: '初始值为1',
            name2: '初始值为2'
        }
    },
    methods: {
        handleClick(e) {
            // console.log(e, '111')
        },
        handleType1() {
            this.name = "11111"
        },
        handleType2() {
            this.name2 = '222'
        }
    }
}
</script>