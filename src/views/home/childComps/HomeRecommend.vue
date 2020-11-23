<template>
  <div class="recommend">
    <div class="recommend-item" v-for="(recommend, index) in recommends" :key="index">
      <div class="recommend-item-img">
        <a :href="recommend.link">
          <img :src="recommend.image" alt="recommend.title">
        </a>
      </div>
      <div class="recommend-item-name">
        {{ recommend.title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.recommend {
  display: flex;
  padding: 10px 0 10px;
  border-bottom: 10px solid #eee;
}

.recommend .recommend-item {
  flex: 1;
  text-align: center;
  font-size: 14px;
}

.recommend .recommend-item img {
  width: 70px;
  height: 70px;
}
</style>
