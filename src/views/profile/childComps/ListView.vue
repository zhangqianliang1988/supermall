<template>
  <div id="list">
    <div v-for="(item, index) in listData" :key="index" class="item">
      <div class="iconfont" :class="item.icon" :style="'color:'+item.iconColor"></div>
      <div class="info">{{ item.info }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListView",
  props: {
    listData: {
      type: Array,
      default: function () {
        return []
      }
    }
  }
}
</script>

<style scoped>
#list {
  background-color: #fff;
  font-size: 15px;
  color: #333;
}

#list .item {
  height: 44px;
  line-height: 44px;
  display: flex;
  align-items: center;
}

.item .iconfont {
  margin: 0 15px;
  font-size: 20px;
}

.item .info {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  padding-left: 5px;
  flex: 1;
}

.item:last-of-type .info {
  border-bottom: none;
}
</style>
