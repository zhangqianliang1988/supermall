<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control :titles="tabControlTitles" @tabClick="tabControlClick"
                 class="home-tab-control" ref="tabControlFixed" v-show="isTabControlFixed"/>
    <scroll class="home-content" :probe-type="3" :pull-up-load="true"
            @scroll="contentScroll" @pullingUp="loadMoreGoods"
            ref="scroll">
      <home-swiper :banners="banners" @swiperImageLoaded="swiperImageLoaded"/>
      <home-recommend :recommends="recommends"/>
      <home-feature/>
      <tab-control :titles="tabControlTitles" @tabClick="tabControlClick" ref="tabControl"/>
      <goods-list :goods="showGoods"/>
    </scroll>
    <back-top @backTop="backTop" v-show="isShowBackTop"/>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import Scroll from "@/components/common/scroll/Scroll";

import TabControl from "@/components/content/tabControl/TabControl";
import GoodsList from "@/components/content/goods/GoodsList";
import BackTop from "@/components/content/backTop/BackTop";

import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommend from "./childComps/HomeRecommend";
import HomeFeature from "./childComps/HomeFeature";

import * as request from "@/network/home"
import {NEW, POP, SELL, BACKTOP} from "@/common/const";
import {debounce} from "@/common/utils";
import {backTopMixin} from "@/common/mixin"

export default {
  name: 'Home',
  components: {
    NavBar,
    Scroll,
    TabControl,
    BackTop,
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
      tabControlOffsetTop: 0,
      isTabControlFixed: false,
      goods: {
        pop: {page: 0, list: []},
        new: {page: 0, list: []},
        sell: {page: 0, list: []},
      },
      currentGoodsType: POP,
      scrollY: 0
    }
  },
  mixins: [backTopMixin],
  created() {
    // 1. 查询多种数据
    this.queryHomeMultiData()
    // 2. 查询商品列表
    this.queryHomeGoods(POP)
    this.queryHomeGoods(NEW)
    this.queryHomeGoods(SELL)
  },
  mounted() {
    // 1. 监听商品图片加载完成
    const invokeScrollRefresh = debounce(this.$refs.scroll.refresh, 500)
    this.$bus.$on('goodImageLoaded', () => {
      invokeScrollRefresh()
    })
  },
  deactivated() {
    this.scrollY = this.$refs.scroll.getScrollY()
  },
  activated() {
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0, this.scrollY, 1)
  },
  computed: {
    showGoods() {
      return this.goods[this.currentGoodsType].list
    }
  },
  methods: {
    queryHomeMultiData() {
      request.queryHomeMultiData().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    queryHomeGoods(type) {
      const page = this.goods[type].page + 1
      request.queryGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page = res.data.page
        this.$refs.scroll.finishPullUp()
      })
    },
    tabControlClick(tabIndex) {
      switch (tabIndex) {
        case 0:
          this.currentGoodsType = POP
          break
        case 1:
          this.currentGoodsType = NEW
          break
        case 2:
          this.currentGoodsType = SELL
          break
      }
      this.$refs.tabControlFixed.currentIndex = tabIndex
      this.$refs.tabControl.currentIndex = tabIndex
    },
    contentScroll(position) {
      let top = Math.abs(position.y)
      this.isShowBackTop = top > BACKTOP
      this.isTabControlFixed = top > this.tabControlOffsetTop
    },
    loadMoreGoods() {
      this.queryHomeGoods(this.currentGoodsType)
    },
    swiperImageLoaded() {
      this.tabControlOffsetTop = this.$refs.tabControl.$el.offsetTop
    }
  }
}
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}

.home-tab-control {
  position: relative;
  z-index: 9;
}

.home-content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
}
</style>
