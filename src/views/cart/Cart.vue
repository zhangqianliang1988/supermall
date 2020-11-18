<template>
  <div id="cart">
    <nar-bar class="cart-nav">
      <div slot="center">购物车</div>
    </nar-bar>
  </div>
</template>

<script>
import NarBar from "@/components/common/navbar/NarBar";

export default {
  name: 'Cart',
  components: {
    NarBar
  }
}
</script>

<style scoped>
.cart-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
