<template>
  <div id="good-detail">
    <good-detail-nav-bar/>
    <good-detail-swiper :top-images="topImages"/>
  </div>
</template>

<script>
import GoodDetailNavBar from "./childComps/GoodDetailNavBar";
import GoodDetailSwiper from "@/views/detail/childComps/GoodDetailSwiper";

import * as request from "@/network/good-detail"

export default {
  name: "GoodDetail",
  components: {
    GoodDetailNavBar,
    GoodDetailSwiper
  },
  data() {
    return {
      goodId: null,
      topImages: []
    }
  },
  created() {
    this.goodId = this.$route.params.goodId
    request.queryGoodDetail(this.goodId).then(res => {
      this.topImages = res.topImages
    })
  }
}
</script>

<style scoped>

</style>
