<template>
  <tar-bar>
    <tar-bar-item path="/home" icon-cls="icon-home" name="首页"></tar-bar-item>
    <tar-bar-item path="/category" icon-cls="icon-category" name="分类"></tar-bar-item>
    <tar-bar-item path="/cart" icon-cls="icon-cart" name="购物车"></tar-bar-item>
    <tar-bar-item path="/profile" icon-cls="icon-profile" name="我的"></tar-bar-item>
  </tar-bar>
</template>

<script>
import TarBar from 'components/common/tabbar/TarBar'
import TarBarItem from 'components/common/tabbar/TarBarItem'

export default {
  name: 'MainTabBar',
  components: {
    TarBar,
    TarBarItem
  }
}
</script>

<style scoped>

</style>
