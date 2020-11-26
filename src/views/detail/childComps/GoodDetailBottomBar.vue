<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="iconfont icon-service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="iconfont icon-shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="iconfont icon-favorites"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodDetailBottomBar",
  methods: {
    addToCart() {
      this.$emit('addToCart')
    }
  }
}
</script>

<style scoped>
.bottom-bar {
  height: 49px;
  position: fixed;
  background-color: #fff;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  text-align: center;
  box-shadow: 0 -2px 1px rgba(100, 100, 100, 0.1);
}

.bar-item {
  flex: 1;
  display: flex;
  align-items: center;
}

.bar-item>div {
  flex: 1;
}

.bar-left .text {
  font-size: 13px;
}

.bar-left .iconfont {
  display: block;
  font-size: 24px;
}

.bar-right {
  font-size: 15px;
  color: #fff;
  line-height: 49px;
}

.bar-right .cart {
  background-color: #ffe817;
  color: #333;
}

.bar-right .buy {
  background-color: #f69;
}
</style>
