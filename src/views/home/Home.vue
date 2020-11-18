<template>
  <div id="home">
    <nar-bar class="home-nav">
      <div slot="center">购物街</div>
    </nar-bar>
    <home-swiper :banners="banners"/>
    <home-recommend :recommends="recommends"/>
    <home-feature/>
    <tab-control class="home-tab-control" :titles="tabControlTitles"/>
    <goods-list :goods="goods.pop.list"/>
  </div>
</template>

<script>
import NarBar from "@/components/common/navbar/NarBar";
import TabControl from "@/components/content/tabControl/TabControl";
import GoodsList from "@/components/goods/GoodsList";

import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommend from "./childComps/HomeRecommend";
import HomeFeature from "./childComps/HomeFeature";

import * as request from "@/network/home"
import {NEW, POP, SELL} from "@/common/const";

export default {
  name: 'Home',
  components: {
    NarBar,
    TabControl,
    GoodsList,
    HomeRecommend,
    HomeSwiper,
    HomeFeature
  },
  data() {
    return {
      banners: [],
      recommends: [],
      tabControlTitles: ['流行', '新款', '精选'],
      goods: {
        pop: {page: 0, list: []},
        new: {page: 0, list: []},
        sell: {page: 0, list: []},
      }
    }
  },
  created() {
    // 1. 查询多种数据
    this.queryHomeMultiData()
    // 2. 查询商品列表
    this.queryHomeGoods(POP)
    this.queryHomeGoods(NEW)
    this.queryHomeGoods(SELL)
  },
  methods: {
    queryHomeMultiData: function () {
      request.queryHomeMultiData().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    queryHomeGoods: function (type) {
      const page = this.goods[type].page + 1
      request.queryGoods(type, page).then(res => {
        console.log(res)
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page = res.data.page
      })
    }
  }
}
</script>

<style scoped>
#home {
  padding-top: 44px;
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 9;
}

.home-tab-control {
  position: sticky;
  top: 44px;
}
</style>
