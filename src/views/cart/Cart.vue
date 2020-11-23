<template>
  <div id="cart">
    <nav-bar class="cart-nav">
      <div slot="center">购物车({{ cartCount }})</div>
    </nav-bar>
    <cart-list/>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import CartList from "./childComps/CartList";

import {mapGetters} from "vuex"

export default {
  name: 'Cart',
  components: {
    NavBar,
    CartList
  },
  computed: {
    ...mapGetters(['cartCount'])
  }
}
</script>

<style scoped>
#cart {
  height: 100vh;
}

.cart-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
