<template>
  <div id="good-detail">
    <good-detail-nav-bar @titleClick="navTitleClick" :current-index="navCurrentIndex"/>
    <scroll class="good-detail-scroll" ref="scroll"
            @scroll="contentScroll" :probe-type="3">
      <good-detail-swiper ref="base" :top-images="topImages" @swiperImageLoaded="swiperImageLoaded"/>
      <good-detail-base-info :good="good"/>
      <good-detail-shop-info :shop="shop"/>
      <good-detail-info :detail-info="detailInfo" @imageLoaded="goodDetailImageLoaded"/>
      <good-detail-param-info ref="param" :param-info="paramInfo"/>
      <good-detail-comment-info ref="comment" :comment-info="commentInfo"/>
      <good-detail-recommend-info ref="recommend" :recommend-list="recommendList"/>
    </scroll>
    <back-top @backTop="backTop" v-show="isShowBackTop"></back-top>
    <good-detail-bottom-bar @addToCart="addToCart"/>
  </div>
</template>

<script>
import GoodDetailNavBar from "./childComps/GoodDetailNavBar";
import GoodDetailSwiper from "./childComps/GoodDetailSwiper";
import GoodDetailBaseInfo from "./childComps/GoodDetailBaseInfo";
import GoodDetailShopInfo from "./childComps/GoodDetailShopInfo";
import GoodDetailInfo from "./childComps/GoodDetailInfo";
import GoodDetailParamInfo from "./childComps/GoodDetailParamInfo";
import GoodDetailCommentInfo from "./childComps/GoodDetailCommentInfo";
import GoodDetailRecommendInfo from "./childComps/GoodDetailRecommendInfo";
import GoodDetailBottomBar from "@/views/detail/childComps/GoodDetailBottomBar";

import Scroll from "@/components/common/scroll/Scroll";
import BackTop from "@/components/content/backTop/BackTop";

import * as request from "@/network/good-detail"
import {backTopMixin, goodImageLoadedMixin} from "@/common/mixin"
import {BACK_TOP} from "@/common/const"

export default {
  name: "GoodDetail",
  components: {
    GoodDetailNavBar,
    GoodDetailSwiper,
    GoodDetailBaseInfo,
    GoodDetailShopInfo,
    GoodDetailInfo,
    GoodDetailParamInfo,
    GoodDetailCommentInfo,
    GoodDetailRecommendInfo,
    Scroll,
    BackTop,
    GoodDetailBottomBar
  },
  data() {
    return {
      goodId: null,
      topImages: [],
      good: {},
      paramInfo: {},
      shop: {},
      detailInfo: {},
      commentInfo: {},
      recommendList: [],
      navThemeTops: [],
      navCurrentIndex: 0
    }
  },
  mixins: [backTopMixin, goodImageLoadedMixin],
  created() {
    this._getGoodDetailData()
    this._getRecommendData()
  },
  destroyed() {
    this.$bus.$off('goodImageLoaded', this.goodImageLoaded)
  },
  updated() {
    this._getOffsetTops()
  },
  methods: {
    _getGoodDetailData() {
      this.goodId = this.$route.query.goodId
      request.queryGoodDetail(this.goodId).then(res => {
        const data = res.result
        // 1. 获取顶部轮播图片数据
        this.topImages = res.topImages
        // 2. 获取商品描述数据
        this.good = new request.Good(data.itemInfo, data.columns, data.shopInfo.services)
        // 3. 获取店铺数据
        this.shop = new request.Shop(data.shopInfo)
        // 4. 获取商品图片数据
        this.detailInfo = data.detailInfo
        // 5. 获取商品参数数据
        this.paramInfo = new request.GoodParam(data.itemParams.info, data.itemParams.rule)
        // 6. 获取商品用户评价数据
        if (data.rate && data.rate.list) {
          this.commentInfo = data.rate.list[0];
        }
      })
    },
    _getRecommendData() {
      request.getRecommend().then((res, error) => {
        if (error) return
        this.recommendList = res.data.list
      })
    },
    _getOffsetTops() {
      this.navThemeTops = []
      this.navThemeTops.push(this.$refs.base.$el.offsetTop)
      this.navThemeTops.push(this.$refs.param.$el.offsetTop)
      this.navThemeTops.push(this.$refs.comment.$el.offsetTop)
      this.navThemeTops.push(this.$refs.recommend.$el.offsetTop)
      this.navThemeTops.push(Number.MAX_VALUE)
    },
    swiperImageLoaded() {
      this.$refs.scroll.refresh()
    },
    goodDetailImageLoaded() {
      this.$refs.scroll.refresh()
    },
    contentScroll(position) {
      const y = Math.abs(position.y)
      // 1、显示返回顶部按钮
      this.isShowBackTop = y > BACK_TOP
      // 2、切换头部主题
      let length = this.navThemeTops.length;
      for (let index = 0; index < length; index++) {
        if (y >= this.navThemeTops[index] && y < this.navThemeTops[index + 1]) {
          if (this.navCurrentIndex !== index) {
            this.navCurrentIndex = index;
          }
          break;
        }
      }
    },
    navTitleClick(index) {
      this.navCurrentIndex = index
      this.$refs.scroll.scrollTo(0, -this.navThemeTops[index])
    },
    addToCart() {
      const product = {}
      product.goodId = this.goodId
      product.image = this.topImages[0]
      product.title = this.good.title
      product.desc = this.good.desc
      product.price = this.good.nowPrice
      this.$store.dispatch('addCart', product)
    }
  },
  watch: {
    '$route'(to, from) {
      if (to.query.goodId !== from.query.goodId) {
        this.goodId = to.query.goodId
        this._getGoodDetailData()
        this._getRecommendData()
        this.$refs.scroll.scrollTo(0, 0, 0)
      }
    }
  }
}
</script>

<style scoped>
#good-detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}

.good-detail-scroll {
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
</style>
