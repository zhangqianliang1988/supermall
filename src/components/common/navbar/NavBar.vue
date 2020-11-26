<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NarBar"
}
</script>

<style scoped>
.nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
  font-size: 14px;
}

.nav-bar .left, .nav-bar .right {
  width: 60px;
}

.nav-bar .center {
  flex: 1;
  text-align: center;
}
</style>
