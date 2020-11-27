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

import {STORE} from "@/common/const";

export default {
  name: 'App',
  components: {MainTabBar},
  created() {
    let store = sessionStorage.getItem(STORE)
    if (store) {
      this.$store.replaceState(
        Object.assign(
          {},
          this.$store.state,
          JSON.parse(store)
        )
      )
    }

    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem(STORE, JSON.stringify(this.$store.state))
    })
  }
}
</script>

<style>
@import "~@/assets/css/base.css";
@import "https://at.alicdn.com/t/font_2198072_pkrmf6sxo6.css";
</style>
