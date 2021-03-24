import Vue from 'vue' // 引入vue
import VueRouter from 'vue-router' // 引入vuerouter
const Layout = () => import('@/views/layout') // 布局组件
const Home = () => import('@/views/home') // 主页组件
const Question = () => import('@/views/question') // 问答组件
const Video = () => import('@/views/video') // 视频组件
const User = () => import('@/views/user') // 个人中心
const Profile = () => import('@/views/user/profile') // 编辑资料
const Chat = () => import('@/views/user/chat') // 小智同学
const Login = () => import('@/views/login') // 登录组件
const Article = () => import('@/views/article') // 文章详情
const Search = () => import('@/views/search') // 搜索中心
const SearchResult = () => import('@/views/search/result') // 搜索结果

Vue.use(VueRouter)
// 可以在路由表里指定 哪个组件需要缓存
const routes = [
  // 这是布局组件
  {
    path: '/',
    name: 'home',
    component: Layout, // 一级路由
    children: [{
      path: '/', // 由于 一级路由下 存在二级路由 并且 path相同
      component: Home, // 二级路由 首页
      // meta属性在存在二级路由并且path相同的情况下 需要写到 二级路由下
      meta: {
        isAlive: true // 是否缓存组件实例  首页缓存组件
      }
    },
    {
      path: '/question',
      component: Question // 二级路由 问答组件
    },
    {
      path: '/video',
      component: Video // 二级路由 视频组件
    }, {
      path: '/user',
      component: User // 二级路由 个人中心
    }]
  },
  {
    // 点击编辑资料
    path: '/user/profile',
    component: Profile // 编辑资料
  },
  {
    // 点击进入小智同学
    path: '/user/chat',
    component: Chat // 小智同学
  },
  {
    // 除了一开始的布局组件都是自己的组件
    path: '/login',
    component: Login // 登录组件
  },
  {
    path: '/article',
    component: Article // 文章详情
  },
  {
    path: '/search',
    component: Search // 搜索中心
  },
  {
    path: '/search/result',
    component: SearchResult // 搜索结果
  }

]

const router = new VueRouter({
  routes
})

export default router
