<template>
  <div class="back-top" @click="topClick">
    <img src="~@/assets/images/common/top.png">
  </div>
</template>

<script>
export default {
  name: "BackTop",
  methods: {
    topClick: function () {
      this.$emit('backTop');
    }
  }
}
</script>

<style scoped>
.back-top {
  position: fixed;
  right: 10px;
  bottom: 50px;
}

.back-top img {
  width: 40px;
  height: 40px;
}
</style>
