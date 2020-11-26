<template>
  <div class="goods-item">
    <img v-lazy="good.img" alt="" @load="goodImageLoaded" @click="goodClick(good.goodId)">
    <div class="goods-info">
      <p>{{ good.title }}</p>
      <span class="price">{{ good.price }}</span>
      <span class="iconfont icon-favorites"></span>
      <span>{{ good.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    good: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    goodImageLoaded() {
      this.$bus.$emit('goodImageLoaded')
    },
    goodClick(goodId) {
      // this.$router.push('/good-detail/' + goodId)
      this.$router.push({path: '/good-detail', query: {goodId}})
    }
  }
}
</script>

<style scoped>
.goods-item {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}

.goods-item img {
  width: 100%;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 10px;
}

.goods-info .iconfont {
  font-size: 12px;
  margin-right: 1px;
}
</style>
