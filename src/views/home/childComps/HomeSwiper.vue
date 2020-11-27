<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="(banner, index) in banners" :key="index">
      <a :href="banner.link">
        <img :src="banner.image" alt="banner.title" @load="bannerImageLoaded">
      </a>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

import {swiperOption} from "@/common/const";

export default {
  name: "HomeSwiper",
  props: {
    banners: {
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
  components: {
    Swiper,
    SwiperSlide
  },
  methods: {
    bannerImageLoaded() {
      if (!this.isImageLoaded) {
        this.$emit('swiperImageLoaded')
        this.isImageLoaded = true
      }
    }
  }
}
</script>

<style scoped>
</style>
