<template>
  <swiper>
    <swiper-item v-for="banner in banners" :key="banner.acm">
      <a :href="banner.link">
        <img :src="banner.image" alt="banner.title">
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
  components: {
    Swiper,
    SwiperItem
  }
}
</script>

<style scoped>

</style>
