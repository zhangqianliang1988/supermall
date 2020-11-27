<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="(image, index) in topImages" :key="index">
      <img :src="image" alt="" @load="swiperImageLoaded">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

import {swiperOption} from "@/common/const";

export default {
  name: "GoodDetailSwiper",
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      isImageLoaded: false,
      swiperOption
    }
  },
  methods: {
    swiperImageLoaded() {
      if (!this.isImageLoaded) {
        this.$emit("swiperImageLoaded")
        this.isImageLoaded = true
      }
    }
  }
}
</script>

<style scoped>
.swiper img {
  width: 100%;
}
</style>
