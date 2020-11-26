<template>
  <div class="back-top" @click="topClick">
    <span class="iconfont icon-back-top"></span>
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
  bottom: 60px;
}

.back-top .iconfont {
  font-size: 20px;
  color: #FF3030;
  border-radius: 50%;
  background-color: #FEFEFE;
  padding: 5px;
  box-shadow: 1px 1px 5px #888;
}
</style>
