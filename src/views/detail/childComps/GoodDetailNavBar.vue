<template>
  <div class="good-detail-nav-bar">
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~@/assets/images/common/back.svg">
      </div>
      <div slot="center" class="title">
        <div v-for="(title, index) in titles"
             :key="title" class="title-item"
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
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index
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
  padding-top: 7px;
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
