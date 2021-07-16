import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import ArticleList from  '@/components/background/ArticleList'
import PostArticle from '@/components/background/PostArticle'
import BlogDetail from '@/components/background/BlogDetail'
import CateMana from '@/components/background/CateMana'
import BackHome from '@/views/background/BackHome'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',//绑定的地址
        name: 'home',//这个是路由的名字
        component: () => import('../views/Home.vue'),//这个是绑定的模块
        meta: { title: '首页',state:false,keepAlive: true}//我认为是路由自己的内部信息
    },
    {
        path: '/login',//绑定的地址
        name: 'login',//这个是路由的名字
        component: () => import('../views/Login.vue'),//这个是绑定的模块
        meta: { title: '登录'}//我认为是路由自己的内部信息
    },
    {
        path: '/category/:cate',
        name: 'category',
        component: () => import('../views/Home.vue'),//路由懒加载
        meta: { title: '分类',state:false, params: 'cate',keepAlive: true}
    },
    {
        path: '/search/:words',
        name: 'search',
        component: () => import('../views/Home.vue'),
        meta: { title: '搜索', params: 'words'}
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/About.vue'),
        meta: { title: '关于'}
    },
    {
        path: '/friend',
        name: 'friend',
        component: () => import('../views/Friend.vue'),
        meta: { title: '友链'}
    },
    {
        path: '/article/:id',
        name: 'article',
        component: () => import('../views/Articles.vue'),
        meta: { title: '文章', params: 'id'}
    },
    {
        path: '/background/home',
        name: '',
        component: BackHome,
        meta: { title: '后台'},
        hidden: true
    },
    {
        path: '/background/home',
        component:BackHome,
        meta: { title: '后台'},
        name: '文章管理',
        iconCls: 'fa fa-file-text-o',
        children: [
            {
                path: '/articleList',
                name: '文章列表',
                component: ArticleList,
                meta: {
                    title: '文章列表',
                    keepAlive: false
                }
            }, {
                path: '/postArticle',
                name: '发表文章',
                component: PostArticle,
                meta: {
                    title: '发表文章',
                    keepAlive: false
                }
            }, {
                path: '/blogDetail',
                name: '博客详情',
                component: BlogDetail,
                hidden: true,
                meta: {
                    title: '博客详情',
                    keepAlive: false
                }
            }, {
                path: '/editBlog',
                name: '编辑博客',
                component: PostArticle,
                hidden: true,
                meta: {
                    title: '编辑博客',
                    keepAlive: false
                }
            }
        ]
    },
    {
        path: '/background/home',
        component: BackHome,
        name: '栏目管理',
        children: [
            {
                path: '/cateMana',
                iconCls: 'fa fa-reorder',
                name: '栏目管理',
                component: CateMana
            }
        ]
    }





]


const router = new VueRouter({

    mode: 'history',//路由使用的模式
    //history: 依赖 HTML5 History API 和服务器配置。查看 HTML5 History 模式
    base: process.env.BASE_URL,
    //默认值: "/"
    // 应用的基路径。例如，如果整个单页应用服务在 /app/ 下，然后 base 就应该设为 "/app/"。
    //这里好像还有TS的东西
    routes,
    // scrollBehavior (to, from, savedPosition) {
    //     if (savedPosition) {
    //         return savedPosition
    //     } else {
    //         return { x: 0, y: 0 }
    //     }
    // }
})

router.beforeEach((to, from, next) => {
    //你可以使用 router.beforeEach 注册一个全局前置守卫：
    let title = 'Gblog'
    if (to.meta.params){
        //这里的调用params就是表明是不是有这个东西，有就是true没有就是false
        //而$是就取值
        title = `${to.meta.title}:${to.params[to.meta.params] || ''} - ${title}`
    }else {
        title = `${to.meta.title} - ${title}`
    }
    document.title = title
    if (to.path !== from.path) {
        store.dispatch('setLoading', true);
    }
    next();//next(): 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed (确认的)。
})
//你也可以注册全局后置钩子，然而和守卫不同的是，这些钩子不会接受 next 函数也不会改变导航本身：
router.afterEach((to, from) => {
    // 最多延迟 关闭 loading
    setTimeout(() => {
        store.dispatch('setLoading', false);
    }, 1500)
})


export default router
