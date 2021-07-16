<template>
  <el-form :rules="rules" class="login-container" label-position="left"
           label-width="0px" v-loading="loading">
    <h3 class="login_title">系统登录</h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-checkbox class="login_remember" v-model="checked" label-position="left">记住密码</el-checkbox>
    <el-form-item style="width: 100%">
      <el-button type="primary" @click.native.prevent="submitClick" style="width: 100%">登录</el-button>
    </el-form-item>
    <el-form-item style="width: 100%">
      <el-button type="primary" @click.native.prevent="regClick" style="width: 100%">注册</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
  import {postRequest} from '@/utils/api'
  import axios from "axios";
  export default{
    data(){
      return {
        rules: {
          account: [{required: true, message: '请输入用户名', trigger: 'blur'}],
          checkPass: [{required: true, message: '请输入密码', trigger: 'blur'}]
        },
        checked: true,
        loginForm: {
          username: 'humbot',
          password: '666'
        },
        loading: false
      }
    },
    methods: {
      submitClick: function () {
        var _this = this;
        this.loading = true;
        // postRequest('/login', {
        //   username: this.loginForm.username,
        //   password: this.loginForm.password
        // }).then(resp=> {
        //   _this.loading = false;
        //   if (resp.status == 200) {
        //     //成功
        //     var json = resp.data;
        //     if (json.status == 'success') {
        //       _this.$router.replace({path: '/home'});
        //     } else {
        //       _this.$alert('登录失败!', '失败!');
        //     }
        //   } else {
        //     //失败
        //     _this.$alert('登录失败!', '失败!');
        //   }
        // }, resp=> {
        //   _this.loading = false;
        //   _this.$alert('找不到服务器⊙﹏⊙∥!', '失败!');
        // });

        // search(){
        //   const _this = this;//这里是学习vblog的写法
        //   const url = "/api/usr/foresearch" + "?keyword="+this.$route.params.words;
        //   axios.post(url).then(function(response) {
        //     _this.postList = response.data.items || []
        //     _this.currPage = response.data.page
        //     _this.hasNextPage = response.data.hasNextPage
        //   }).catch(err=>{
        //     console.log(err);
        //   });
        // },

        const url = "/api/usr/forelogin"
        axios.post(url,this.loginForm).then(function (resp) {
          const result = resp.data;
          if(result.code==0){
            _this.$router.replace({path: '/background/home'});
          }else {
            _this.$alert('登录失败!', '失败!');
          }
        });
        // postRequest('/api/usr/forelogin', {
        //   username: this.loginForm.username,
        //   password: this.loginForm.password
        // }).then(resp=> {
        //   _this.loading = false;
        //   if (resp.status === 200) {
        //     //成功
        //     var json = resp.data;
        //     if (json.code === 1) {
        //       _this.$router.replace({path: '/friend'});
        //     } else {
        //       _this.$alert('登录失败!', '失败!');
        //     }
        //   } else {
        //     //失败
        //     _this.$alert('登录失败!', '失败!');
        //   }
        // }, resp=> {
        //   _this.loading = false;
        //   _this.$alert('找不到服务器⊙﹏⊙∥!', '失败!');
        // });
      },
      regClick: function () {
        var _this = this;
        this.loading = true;
        const url = "/api/usr/foreregister"
        axios.post(url,this.loginForm).then(function (resp) {
          const result = resp.data;
          if(result.code==0){
            _this.$router.replace({path: '/background/home'});
          }else {
            _this.$alert('登录失败!', '失败!');
          }
        });
      }
    }
  }
</script>
<style>
  .login-container {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }

  .login_title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }

  .login_remember {
    margin: 0px 0px 35px 0px;
    text-align: left;
  }
</style>
