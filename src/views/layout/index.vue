<template>
  <div class="container">
    <!-- 可以采用vant的导航组件 来实现   ckickright是vant自带的点击事件-->
    <van-nav-bar @click-right="$router.push('/search')"  v-if="showNavBar" fixed title="黑马头条" right-text="搜索"></van-nav-bar>
    <!-- 二级路由容器  首页/问答/视频/我的 放置二级路由-->
    <!-- :class="{ 名称: 布尔值 }" -->
    <div class="my-wrapper" :class="{ noTop: !showNavBar }">
      <!-- 那么就可以设置组件的样式 -->
      <!-- 如果想要缓存的二级路由组件的话 可以直接缓存二级路由容器
        如果缓存了这个容器 表示 这个容器下的所有的组件都会被缓存
       -->

       <!-- 已经使用children这里就是二级路由 -->
       <keep-alive>
         <!-- 用keep-alive包裹路由容器 -->
       <router-view></router-view>
       </keep-alive>
    </div>
    <!-- 标签栏  开启路由模式 route :route="true"(布尔)  route="true"(字符串)-->
    <!-- 这就是声明是导航 跳转想要去的地址-->
    <van-tabbar route>
      <!-- router-link  to  -->
      <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/question" icon="chat-o">问答</van-tabbar-item>
      <van-tabbar-item to="/video" icon="video-o">视频</van-tabbar-item>
      <van-tabbar-item to="/user" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'layout',
  computed: {
    // 是否显示navbar
    showNavBar () {
      // this  指向 组件实例
      // 如果这个路由地址是用户的话
      return this.$route.path !== '/user'
    }
  }
}
</script>

<style lang='less' scoped>
// less-loader > css-loader > style-loader
.container {
  width: 100%;
  height: 100%;
  position: relative;
  .my-wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding-top: 46px;
    padding-bottom: 50px;
    box-sizing: border-box;
    &.noTop {
      padding-top: 0;
    }
  }
}
</style>
