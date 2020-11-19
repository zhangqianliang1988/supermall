<template>
  <swiper>
    <swiper-item v-for="banner in banners" :key="banner.acm">
      <a :href="banner.link">
        <img :src="banner.image" alt="banner.title" @load="bannerImageLoaded">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from "@/components/common/swiper";

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
      isImageLoaded: false
    }
  },
  components: {
    Swiper,
    SwiperItem
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
