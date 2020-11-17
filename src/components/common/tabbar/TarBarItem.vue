<template>
  <div class="tar-bar-item" :style="activeStyle" @click="tarBarItemClick">
    <div class="iconfont" :class="iconCls"></div>
    <div class="name">{{ name }}</div>
  </div>
</template>

<script>
export default {
  name: 'TarBarItem',
  props: {
    path: String,
    iconCls: String,
    name: String,
    activeColor: {
      type: String,
      default: '#FB7299'
    }
  },
  methods: {
    tarBarItemClick: function () {
      if(this.$route.path.indexOf(this.path) === -1) {
        this.$router.replace(this.path)
      }
    }
  },
  computed: {
    active: function () {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle: function () {
      return this.active ? {color: this.activeColor} : {}
    }
  }
}
</script>

<style scoped>
.tar-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  padding-top: 5px;
  font-size: 14px;
}

.tar-bar-item .iconfont {
  font-size: 20px;
}
</style>
