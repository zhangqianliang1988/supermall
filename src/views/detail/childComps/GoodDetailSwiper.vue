<template>
  <swiper class="good-detail-swiper">
    <swiper-item v-for="(image, index) in topImages" :key="index">
      <img :src="image" alt="" @load="swiperImageLoaded">
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from "@/components/common/swiper";

export default {
  name: "GoodDetailSwiper",
  components: {
    Swiper,
    SwiperItem
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
      isImageLoaded: false
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
</style>
