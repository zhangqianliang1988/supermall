<template>
  <div id="profile">
    <nav-bar class="profile-nav">
      <div slot="center">我的</div>
    </nav-bar>

    <scroll class="profile-scroll">
      <user-info></user-info>
      <account-info></account-info>
      <list-view :list-data="orderList" class="order-list"></list-view>
      <list-view :list-data="serviceList" class="service-list"></list-view>
    </scroll>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import Scroll from "@/components/common/scroll/Scroll";
import UserInfo from './childComps/UserInfo'
import AccountInfo from './childComps/AccountInfo'
import ListView from './childComps/ListView'

export default {
  name: 'Profile',
  components: {
    NavBar,
    Scroll,
    UserInfo,
    AccountInfo,
    ListView
  },
  data: function () {
    return {
      orderList: [
        {icon: 'icon-message', iconColor: '#ff8198', info: '我的消息'},
        {icon: 'icon-points-mall', iconColor: '#fc7b53', info: '积分商城'},
        {icon: 'icon-vip', iconColor: '#ffc636', info: '会员卡'},
      ],
      serviceList: [
        {icon: 'icon-cart', iconColor: '#ff8198', info: '我的购物车'},
        {icon: 'icon-download', iconColor: '#ff8198', info: '下载购物APP'}
      ]
    }
  }
}
</script>

<style scoped>
#profile {
  background-color: #f2f2f2;
  height: 100vh;
}

.profile-nav {
  background-color: var(--color-tint);
  font-weight: 700;
  color: #fff;
}

.profile-scroll {
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}

.order-list, .service-list {
  margin-top: 12px;
}
</style>
