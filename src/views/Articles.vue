<!--<template>-->
<!--  <div class="articles">-->
<!--    <banner></banner>-->
<!--    <div class="site-content animate">-->
<!--      <main class="site-main">-->
<!--        <el-row v-loading="loading">-->
<!--          <el-col :span="24">-->
<!--            <div style="text-align: left;">-->
<!--              <el-button type="text" icon="el-icon-back" @click="goBack" style="padding-bottom: 0px;">返回</el-button>-->
<!--            </div>-->
<!--          </el-col>-->
<!--          <el-col :span="24">-->
<!--            <div>-->
<!--              <div><h3 style="margin-top: 0px;margin-bottom: 0px">{{article.title}}</h3></div>-->
<!--              <div style="width: 100%;margin-top: 5px;display: flex;justify-content: flex-end;align-items: center">-->
<!--                <div style="display: inline; color: #20a0ff;margin-left: 50px;margin-right:20px;font-size: 12px;">-->
<!--                  {{article.nickname}}-->
<!--                </div>-->
<!--                <span style="color: #20a0ff;margin-right:20px;font-size: 12px;">浏览 {{article.pageView==null?0:article.pageView}}</span>-->
<!--                <span style="color: #20a0ff;margin-right:20px;font-size: 12px;"> {{article.editTime | parseTime}}</span>-->
<!--                <el-tag type="success" v-for="(item,index) in article.tags" :key="index" size="small"-->
<!--                        style="margin-left: 8px">{{item.tagName}}-->
<!--                </el-tag>-->
<!--                <span style="margin:0px 50px 0px 0px"></span>-->
<!--              </div>-->
<!--            </div>-->
<!--          </el-col>-->
<!--          <el-col>-->
<!--            <div class = "entry-content" style="text-align: left"  v-html="article.htmlContent"></div>-->
<!--          </el-col>-->
<!--          <h1>this is h1</h1>-->
<!--          <h2>this is h2</h2>-->
<!--          <h3>this is h3</h3>-->
<!--        </el-row>-->
<!--      </main>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->


<template>
  <div class="articles">
    <banner></banner>
    <div class="site-content animate">
      <!-- 文章目录 -->
<!--      <div id="article-menus">-->
<!--        <menu-tree :menus="menus" child-label="child"></menu-tree>-->
<!--      </div>-->
      <main class="site-main">
        <article class="hentry">
          <!-- 文章头部 -->
          <header class="entry-header">
            <!-- 标题输出 -->
            <h1 class="entry-title" >{{article.title}}</h1>
            <hr>
            <div class="breadcrumbs">
              <div id="crumbs">最后更新时间：{{article.editTime | parseTime}}</div>
            </div>
          </header>
          <!-- 正文输出 -->
            <div class = "entry-content" style="text-align: left"  v-html="article.htmlContent"></div>
          <!-- 文章底部 -->
          <section-title>
            <footer class="post-footer">
              <!-- 阅读次数 -->
              <div class="post-like">
                <i class="iconfont iconeyes"></i>
                <span class="count">{{article.pageView==null?0:article.pageView}}</span>
              </div>
              <!-- 分享按钮 -->
              <!--                        <div class="post-share">-->
              <!--                            <ul class="sharehidden">-->
              <!--                                <li><a href="http://qr.liantu.com/api.php?text=https://zhebk.cn/Web/gongan.html"-->
              <!--                                       onclick="window.open(this.href, 'renren-share', 'width=490,height=700');return false;"-->
              <!--                                       class="s-weixin" target="_blank" rel="nofollow noopener noreferrer"><img src="https://cdn.zhebk.cn/usr/themes/Akina/images/wechat.png"></a></li>-->
              <!--                                <li>-->
              <!--                                    <a href="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=https://zhebk.cn/Web/gongan.html/&amp;title=公安联网备案记录"-->
              <!--                                       onclick="window.open(this.href, 'weibo-share', 'width=730,height=500');return false;"-->
              <!--                                       class="s-qq" target="_blank" rel="nofollow noopener noreferrer"><img src="https://cdn.zhebk.cn/usr/themes/Akina/images/qzone.png"></a></li>-->
              <!--                                <li>-->
              <!--                                    <a href="http://service.weibo.com/share/share.php?url=https://zhebk.cn/Web/gongan.html/&amp;title=公安联网备案记录"-->
              <!--                                       onclick="window.open(this.href, 'weibo-share', 'width=550,height=235');return false;"-->
              <!--                                       class="s-sina" target="_blank" rel="nofollow noopener noreferrer"><img src="https://cdn.zhebk.cn/usr/themes/Akina/images/sina.png"></a></li>-->
              <!--                                <li>-->
              <!--                                    <a href="http://shuo.douban.com/!service/share?https://zhebk.cn/Web/gongan.html/&amp;title=公安联网备案记录"-->
              <!--                                       onclick="window.open(this.href, 'renren-share', 'width=490,height=600');return false;"-->
              <!--                                       class="s-douban" target="_blank" rel="nofollow noopener noreferrer"><img src="https://cdn.zhebk.cn/usr/themes/Akina/images/douban.png"></a></li>-->
              <!--                            </ul>-->
              <!--                            <i class="iconfont show-share"></i>-->
              <!--                        </div>-->
              <!-- 赞助按钮 -->
<!--              <div class="donate" @click="showDonate=!showDonate">-->
<!--                <span>赏</span>-->
<!--                <ul class="donate_inner" :class="{'show':showDonate}">-->
<!--                  <li class="wedonate"><img src="http://cdn.fengziy.cn/gblog/wexin_pay.png"><p>微信</p></li>-->
<!--                  <li class="alidonate"><img src="http://cdn.fengziy.cn/gblog/ali_pay.jpg"><p>支付宝</p></li>-->
<!--                </ul>-->
<!--              </div>-->
              <!-- 文章标签 -->
              <div class="post-tags">
                <i class="iconfont iconcategory"></i>
                <router-link :to="`/category/${article.cateName}`">{{ article.cateName }}</router-link>
              </div>
            </footer>
          </section-title>

          <!--声明-->
          <div class="open-message">
            <p>声明：Gblog博客|版权所有，违者必究|如未注明，均为原创|本网站采用<a href="https://creativecommons.org/licenses/by-nc-sa/3.0/" target="_blank">BY-NC-SA</a>协议进行授权</p>
            <p>转载：转载请注明原文链接 - <a href="/">看一遍闭着眼都会安装Lua了</a></p>
          </div>
          <!--评论-->
<!--          <div class="comments">-->
<!--            <comment v-for="item in comments" :key="item.comment.id" :comment="item.comment">-->
<!--              <template v-if="item.reply.length">-->
<!--                <comment v-for="reply in item.reply" :key="reply.id" :comment="reply"></comment>-->
<!--              </template>-->
<!--            </comment>-->
<!--          </div>-->
        </article>
      </main>
    </div>
  </div>
</template>

<script>
import {getRequest} from "@/utils/api";
import Banner from '@/components/banner'
import 'mavon-editor/dist/css/index.css'
import marked from 'marked'

export default{
  name: 'articles',
  props:['id', 'words'],

  methods: {
    goBack(){
      this.$router.go(-1);
    },
  },
  components: {
    Banner,
    // sectionTitle,
    // comment,
    // menuTree
  },
  mounted: function () {

    const aid = this.$route.params.id;
    //console.log(aid);
    this.activeName = this.$route.params.an
    const _this = this;
    this.loading = true;
    const url = "/api/article/" + aid;
    //console.log(url);
    getRequest("/api/article/" + aid).then(resp=> {

      if (resp.status == 200) {
        _this.article = resp.data;
        _this.content = marked(_this.article.mdContent);
      }
      _this.loading = false;
    }, resp=> {
      _this.loading = false;
      _this.$message({type: 'error', message: '页面加载失败!'});
    });
  },
  data(){
    return {
      article: {},
      loading: false,
      activeName: '',
      content:'',
      rawHtml:'<h1>sdfsdf</h1>\n<h2>sdfdsfds</h2>\n<h3>sdfdsfds</h3>\n<h4>sdfdsfds</h4>'

    }
  }
}
</script>


<style scoped lang="less">
.site-content {
  position: relative;
  .site-main {
    padding: 80px 0 0 0;
  }
}
#article-menus{
  position: sticky;
  top: 0;
  box-shadow: 0 2px 6px rgba(0, 0, 0, .1);
  border-radius: 3px;
  padding: 15px;
  width: 300px;
  transform: translateX(-120%) translateY(150px);
  font-size: 14px;
}
article.hentry {
  .entry-header {
    .entry-title {
      font-size: 23px;
      font-weight: 600;
      color: #737373;
      margin: 0.67em 0;

      &:before {
        content: "#";
        margin-right: 6px;
        color: #d82e16;
        font-size: 20px;
        font-weight: 600;
      }
    }

    hr {
      height: 1px;
      border: 0;
      background: #EFEFEF;
      margin: 15px 0;
    }

    .breadcrumbs {
      font-size: 14px;
      color: #D2D2D2;
      text-decoration: none;
      margin-bottom: 30px;
    }
  }

  .entry-content {}

  footer.post-footer {
    width: 100%;
    padding: 20px 10px;
    margin-top: 30px;
    height: 65px;
    position: relative;
    i{
      font-size: 18px;
      margin-right: 5px;
    }
    .post-like {
      float: right;
      margin: 7px 0 0 20px;
    }

    .post-share {
      float: right;
      list-style: none;
      margin-right: 20px;
    }

    .donate {
      float: left;
      line-height: 36px;
      border-radius: 100%;
      -webkit-border-radius: 100%;
      -moz-border-radius: 100%;
      border: 1px solid #2B2B2B;
      &:hover{
        border: 1px solid goldenrod;
        span{
          color: goldenrod;
        }
      }
      span {
        color: #2B2B2B;
        padding: 10px;
        position: relative;
        cursor: pointer;
      }

      .donate_inner {
        display: none;
        margin: 0;
        list-style: none;
        position: absolute;
        left: 80px;
        top: -40px;
        background: #FFF;
        padding: 10px;
        border: 1px solid #ddd;
        box-shadow: 0 2px 6px rgba(0, 0, 0, .08);
        border-radius: 3px;
        &.show{
          display: block;
        }
        li {
          float: left;
        }

        img {
          width: 100px;
        }
        p {
          text-align: center;
          font-size: 15px;
          color: #D2D2D2;
          line-height: 1rem;
        }
      }

      .donate_inner:after, .donate_inner:before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 45%;
        margin-left: -8px;
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
        border-right: 8px solid #fff;
      }

      .donate_inner:before {
        left: -1px;
        border-right: 8px solid #ddd;
      }

    }

    .post-tags {
      margin: 7px 0 0 20px;
      float: left;
      text-transform: uppercase;
      a:hover{
        color: #ff6d6d;
      }
    }
  }
  .open-message {
    margin: 50px 0;
    position: relative;
    background: #2B2B2B;
    padding: 10px 30px;
    border-radius: 3px;
    font-size: 14px;
    color: #fff;
    &:after {
      content: "";
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 10px solid #2B2B2B;
      position: absolute;
      top: -8px;
      left: 48%;
    }
    p {
      margin: 10px 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    a {
      color: #A0DAD0;
      padding: 0 5px;
    }
  }
}
</style>
