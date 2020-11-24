<template>
    <div class="page">
        <div class="bold">
            <div class="head">
                <router-link to="/">
                    <div class="logo">
                        <i class="el-icon-grape"></i>
                    </div>
                </router-link>
            </div>
            <p class="name">电子商城账号</p>
            <div class="form-box">
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="用户名" prop="username">
                        <el-input type="text" v-model="ruleForm.username"></el-input>
                    </el-form-item>

                    <el-form-item label="密码" prop="password">
                        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button  class="submit" @click="submitForm(ruleForm)">登录</el-button>
                    </el-form-item>
                </el-form>
                <p class="goregister">还没账号? <router-link to="/register">去注册</router-link> </p>
            </div>
        </div>
        <!-- 底部 -->
        <div class="foot">
            <span>简体</span>
            <el-divider direction="vertical"></el-divider>
            <span>繁体</span>
            <el-divider direction="vertical"></el-divider>
            <span>English</span>
            <el-divider direction="vertical"></el-divider>
            <span>其他问题</span>
            <p>
                小米公司版权所有-京ICP备10046444-京公网安备11010802020134号-京ICP证110507号
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            var checkUsername = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('用户名不能为空'));
                }
                callback()
            };
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm.password !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                    }
                    callback();
                }
            };
            return{
                ruleForm: {
                    pass: '',
                    username: ''
                },
                rules: {
                    pass: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    username: [
                        { validator: checkUsername, trigger: 'blur' }
                    ]
                }
            };
        },
        methods:{
            submitForm(params) {
                let _this=this 
                this.$axios.get("http://120.25.169.22:3008/login",{params}).then(res => {
                    if(res.data=="200"){
                        _this.$store.state.username = params.username
                        _this.$router.push('home')
                    }else{
                        alert('登录失败')
                    }
                })
            }
        },
        created(){
            this.$store.state.showAside = false
            this.$store.state.showTop = false
            this.$store.state.footer = false
        }
    }
</script>

<style lang="scss" scoped>
.page{
    background: #fff;
    padding-top: 50px;
    .bold{
        width: 800px;
        height: 550px;
        padding:0 30px;
        margin: 0 auto;
        background-color: #fff;
        .head{
            width: 100%;
            height: 50px;
            padding-bottom:40px ;
            .logo{
                width: 55px;
                height: 55px;
                line-height: 65px;
                margin-right: 200px;
                background-color: #FF6700;
                text-align: center;
                color: #ffffff;
                margin: 0 auto;
                i{
                    font-size: 30px;
                    font-weight: bolder;
                }
            }
        }
        .name{
            font-size: 20px;
            color: #555;
            text-align: center;
            padding-bottom:30px ;
        }
        .form-box{
            width: 500px;
            margin: 0px auto;
            .submit{
                background-color: #ff6700;
                color: #fff;
                width: 100%;
            }
        }
    }
    .goregister{
        text-align: right;
        font-size: 12px;
    }
    .foot{
        text-align: center;
        margin-top: 50px;
        p{
            padding: 30px 0;
        }
    }
}
</style>