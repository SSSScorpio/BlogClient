<template>
  <div class="home">
    <el-header class="el-aside1" height="80px" >
    </el-header>
    <el-container>


      <el-container>
        <el-aside width="200px">
          <el-menu
              default-active="0"
              class="el-menu-vertical-demo" style="background-color: rgba(0, 0, 0, 0.08)" router>
              <el-menu-item index="/articleList" key="/articleList" style="background-color: rgba(0,0,0,0.04)">文章列表</el-menu-item>
              <el-menu-item index="/postArticle" key="/postArticle" style="background-color: rgba(0, 0, 0, 0.04)">发布文章</el-menu-item>
              <el-menu-item index="/cateMana">
              <i class="el-icon-menu"></i>
              <span slot="title">栏目管理</span>
            </el-menu-item>
          </el-menu>

          <el-menu
              default-active="0"
              class="el-menu-vertical-demo" style="background-color: #ECECEC" router>
            <template v-for="(item,index) in this.$router.options.routes" v-if="!item.hidden">
<!--              <h1>{{item.name}}</h1>-->
<!--              <h1>{{item.hidden}}</h1>-->
            </template>
          </el-menu>

        </el-aside>
        <el-container>
          <el-main>
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/background/home' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item v-text="this.$router.currentRoute.name"></el-breadcrumb-item>
            </el-breadcrumb>
            <keep-alive>
              <router-view v-if="this.$route.meta.keepAlive"></router-view>
            </keep-alive>
            <router-view v-if="!this.$route.meta.keepAlive"></router-view>
          </el-main>
        </el-container>

      </el-container>

    </el-container>

  </div>






</template>
<script>
import {postRequest} from '@/utils/api'
import axios from "axios";
export default{

  methods: {
    handleCommand(command){
      var _this = this;
      if (command == 'logout') {
        this.$confirm('注销登录吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(function () {
          getRequest("/api/usr/forelogout")
          _this.currentUserName = '游客';
          _this.$router.replace({path: '/'});
        }, function () {
          //取消
        })
      }
    }
  },

  data(){
    return {
      currentUserName: '',
      nameArticle: '/articleList',
      nameF: '/friend'
    }
  },
  mounted() {
    window.scrollTo(0,0);

  }

}
</script>
<style>
.home_container {
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
}

.el-header {
  background-color: #20a0ff;
  color: #333;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.el-aside {
  background-color: #ECECEC;
}
.el-aside1 {
  background-color: #ffffff;


}

.el-main {
  background-color: #fff;
  color: #000;
  text-align: center;
}

.home_title {
  color: #fff;
  font-size: 22px;
  display: inline;
}

.home_userinfo {
  color: #fff;
  cursor: pointer;
}

.home_userinfoContainer {
  display: inline;
  margin-right: 20px;
}
</style>
