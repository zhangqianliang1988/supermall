<template>
  <div>
    <div class="iconfont" :class="checkClass" @click="selectItem"></div>
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    value: {
      type: Boolean,
      default: true
    }
  },
  data: function () {
    return {
      checked: this.value
    }
  },
  methods: {
    selectItem: function () {
      this.$emit('checkBtnClick')
    }
  },
  computed: {
    checkClass() {
      return this.checked ? 'icon-checked' : 'icon-unchecked'
    }
  },
  watch: {
    value: function (newValue) {
      this.checked = newValue;
    }
  }
}
</script>

<style scoped>
.iconfont {
  font-size: 20px;
}

.icon-unchecked {
  color: #ccc;
}

.icon-checked {
  color: #ff8198;
}
</style>
