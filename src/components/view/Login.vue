<template>
    <div class="login-wrap">
        <div class="ms-login">
            <div  class="ms-title">后台管理系统</div>
            <el-form ref="login" :model="param" :rules="rules" class="ms-content">
                <el-form-item prop="username">
                    <el-input v-model="param.username" placeholder="用户名">
                        <el-button slot="prepend"  icon="el-icon-lx-people"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" v-model="param.password" placeholder="密码">
                        <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
                    </el-input>
                </el-form-item>
            </el-form>
             <div class="login-btn">
                <el-button type="primary" @click="handleSubmit">登陆</el-button>
            </div>
            <p class="login-tips">Tips:  用户名和密码随便写。</p>
        </div>
    </div>
</template>

<script scoped>
export default {
    data() {
        return {
            param: {
                username: '',
                password: ''
            },
            rules: {
                username: [{ required: true, message: "请输入用户名", trigger: 'blur' }],
                password: [{ required: true, message: "请输入密码", trigger: 'blur' }]
            }
        }
    },
    methods: {
        handleSubmit() {
            this.$refs.login.validate((err) => {
                if (err) {
                    this.$message.success('登录成功');
                    localStorage.setItem("ms_username", this.param.username)
                    this.$router.push('/')
                } else {
                    this.$message.error("请输入账号和密码")
                    return;
                }
            })
        }
    }
}
</script>

<style scoped>
.login-wrap{
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(../../assets/img/login-bg.jpg);
    background-size: 100%;
}
.ms-login{
    position: absolute;
    left: 50%;
    top: 50%;
    width: 350px;
    margin: -190px 0 0 -175px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.3);
    overflow: hidden;
}
.ms-title{
    width: 100%;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    border-bottom: 1px solid #ddd;
}
.ms-content{
    padding: 30px 30px;
}
.login-btn{
    text-align: center;
}
.login-btn button {
    width: 100%;
    height: 36px;
    margin-bottom: 10px;
}
.login-tips {
    font-size: 12px;
    line-height: 30px;
    color: #fff;
}
</style>