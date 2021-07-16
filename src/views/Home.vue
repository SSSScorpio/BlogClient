<template>
    <div class="home">
      <div>
      </div>
        <banner isHome="true"></banner>
        <div class="site-content animate">
            <!--通知栏-->
            <div class="notify">
                <div class="search-result" v-if="hideSlogan">
                    <span v-if="searchWords">搜索结果："{{searchWords}}" 相关文章</span>
                    <span v-else-if="category">分类 "{{category}}" 相关文章</span>
                </div>
                <quote v-else>{{notice}}</quote>
            </div>

            <!--焦点图-->
            <div class="top-feature" v-if="!hideSlogan">
                <section-title>
                    <div style="display: flex;align-items: flex-end;">聚焦<small-ico></small-ico></div>
                </section-title>
                <div class="feature-content">
                    <div class="feature-item" v-for="item in features" :key="item.title">
                        <Feature :data="item"></Feature>
                    </div>
                </div>
            </div>
            <!--文章列表-->
            <main class="site-main" :class="{'search':hideSlogan}">
                <section-title v-if="!hideSlogan">推荐</section-title>
                <template v-for="item in postList">
                    <post :post="item" :key="item.id"></post>
                </template>
            </main>
            <!--加载更多-->
            <div class="more" v-show="hasNextPage">
                <div class="more-btn" @click="loadMore">More</div>
            </div>
        </div>
    </div>

</template>

<script>
    import Banner from '@/components/banner'
    import Feature from '@/components/feature'
    import sectionTitle from '@/components/section-title'
    import Post from '@/components/post'
    import SmallIco from '@/components/small-ico'
    import Quote from '@/components/quote'
    import {fetchFocus,fetchList} from '../api'
    import {putRequest} from '@/utils/api'
    import {getRequest} from '@/utils/api'
    import axios from 'axios'

    export default {
        name: 'Home',
        props: ['cate','state','words'],
        data() {
            return {
                features: [],
                postList: [],
                currPage: 1,
                hasNextPage: false,
            }
        },
        components: {
            Banner,
            Feature,
            sectionTitle,
            Post,
            SmallIco,
            Quote
        },
      watch:{
        $route(to, from) {
          if(from.name!=='article'&&to.name!=='article'){
            console.log("sdfsdfdsf");
            if(this.$route.params.words) this.search();
            else this.fetchList(1,5);
          }
        }
      },
        computed: {
            searchWords() {
                return this.$route.params.words
            },
            category() {
                return this.$route.params.cate
            },
            hideSlogan() {
                return this.category || this.searchWords
            },
            notice() {
                return this.$store.getters.notice
            }
        },
        methods: {
            fetchFocus() {
                fetchFocus().then(res => {
                    this.features = res.data || []
                }).catch(err => {
                    console.log(err)
                })
            },
            fetchList(page, count) {
              const _this = this;//这里是学习vblog的写法

              const url = "/api/usr/list/all" + "?page=" + page + "&count=" + count+"&category="+this.$route.params.cate;
              //这里‘/api’是为了跨域实现的。然后后面的就是要读取东西的参数
              //在这个页面是可能有没有cate这个参数的，是通过后端实现判断，
              //如果是空的就打印所有的
              //console.log(url);
              getRequest(url).then(resp=> {
                  _this.postList = resp.data.items || []
                  _this.currPage = resp.data.page
                  _this.hasNextPage = resp.data.hasNextPage
              }).catch(err=>{
                console.log(err);
              })

                  // fetchList().then(res => {
                  //   this.postList = res.data.items || []
                  //   this.currPage = res.data.page
                  //   this.hasNextPage = res.data.hasNextPage
                  // }).catch(err => {
                  //   console.log(err)
                  // });
            },
          search(){
            const _this = this;//这里是学习vblog的写法
            const url = "/api/usr/foresearch" + "?keyword="+this.$route.params.words;
            axios.post(url).then(function(response) {
              _this.postList = response.data.items || []
              _this.currPage = response.data.page
              _this.hasNextPage = response.data.hasNextPage
            }).catch(err=>{
              console.log(err);
            });
          },
            loadMore() {
              const _this = this;
              const count = 5;
              const page = _this.currPage+1;
              const url = "/api/usr/list/all" + "?page=" + page + "&count=" + count+"&category="+this.$route.params.cate;
              console.log(url)
              getRequest(url).then(resp=> {
                _this.loading = false;
                if (resp.status == 200) {
                  _this.postList = this.postList.concat(resp.data.items || [])
                  _this.currPage = resp.data.page
                  _this.hasNextPage = resp.data.hasNextPage
                } else {
                  _this.$message({type: 'error', message: '数据加载失败!'});
                }
              })

              // fetchList({page:this.currPage+1},5).then(res => {
              //   this.postList = this.postList.concat(res.data.items || [])
              //   this.currPage = res.data.page
              //   this.hasNextPage = res.data.hasNextPage
              // })
            }
        },
        mounted() {
            this.fetchFocus();//这个是那个图片的滚动
            if(this.$route.params.words) this.search();
            else this.fetchList(1,5);
        }
    }
</script>

<style scoped lang="less">

    .site-content {
        .notify {
            margin: 60px 0;
            border-radius: 3px;
            & > div {
                padding: 20px;
            }
        }


        .search-result {
            padding: 15px 20px;
            text-align: center;
            font-size: 20px;
            font-weight: 400;
            border: 1px dashed #ddd;
            color: #828282;
        }
    }

    .top-feature {
        width: 100%;
        height: auto;
        margin-top: 30px;

        .feature-content {
            margin-top: 10px;
            display: flex;
            justify-content: space-between;
            position: relative;

            .feature-item {
                width: 32.9%;
            }
        }
    }

    .site-main {
        padding-top: 80px;

        &.search {
            padding-top: 0;
        }
    }

    .more{
        margin: 50px 0;
        .more-btn{
            width: 100px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            color: #ADADAD;
            border: 1px solid #ADADAD;
            border-radius: 20px;
            margin: 0 auto;
            cursor: pointer;
            &:hover{
                color: #8fd0cc;
                border: 1px dashed #8fd0cc;
            }
        }
    }

    /******/
    @media (max-width: 800px) {
        .top-feature {
            display: none;
        }

        .site-main {
            padding-top: 40px;
        }

        .site-content {
            .notify {
                margin: 30px 0 0 0;
            }

            .search-result {
                margin-bottom: 20px;
                font-size: 16px;
            }
        }
    }

    /******/
</style>
