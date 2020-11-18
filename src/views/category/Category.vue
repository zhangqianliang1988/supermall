<template>
  <div id="category">
    <nar-bar class="category-nav">
      <div slot="center">分类</div>
    </nar-bar>
  </div>
</template>

<script>
import NarBar from "@/components/common/navbar/NarBar";

export default {
  name: 'Category',
  components: {
    NarBar
  }
}
</script>

<style scoped>
.category-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
