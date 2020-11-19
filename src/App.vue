<template>
  <div id="app">
    <keep-alive exclude="GoodDetail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "@/components/content/tabbar/MainTabBar"

export default {
  name: 'App',
  components: {MainTabBar}
}
</script>

<style>
@import "~@/assets/css/base.css";
@import "~@/assets/css/iconfont/iconfont.css";
</style>
