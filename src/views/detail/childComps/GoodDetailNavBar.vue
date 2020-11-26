<template>
  <div class="good-detail-nav-bar">
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <i class="iconfont icon-back"></i>
      </div>
      <div slot="center" class="title">
        <div v-for="(title, index) in titles"
             :key="index" class="title-item"
             :class="{active: index === currentIndex}" @click="titleClick(index)">
          {{ title }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";

export default {
  name: "GoodDetailNavBar",
  components: {
    NavBar
  },
  props: {
    currentIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐']
    }
  },
  methods: {
    titleClick(index) {
      //this.currentIndex = index
      this.$emit('titleClick', index)
    },
    backClick() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.back {
  text-align: center;
}

.back .iconfont {
  font-size: 30px;
}

.title {
  display: flex;
  size: 14px;
}

.title-item {
  flex: 1;
}

.active {
  color: var(--color-high-text);
}
</style>
