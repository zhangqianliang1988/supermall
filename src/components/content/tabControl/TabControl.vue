<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(title, index) in titles" :key="title"
         :class="{active: index === currentIndex}" @click="tabControlItemClick(index)">
      <span>{{ title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    tabControlItemClick: function (index) {
      this.currentIndex = index
      this.$emit('tabClick', index)
    }
  }
}
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 16px;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
}

.tab-control .tab-control-item {
  flex: 1;
}

.tab-control .active {
  color: var(--color-high-text);
}

.tab-control .active span {
  border-bottom: 2px solid var(--color-high-text);
}
</style>
