export const backTopMixin = {
  data: function () {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    backTop: function () {
      this.$refs.scroll.scrollTo(0, 0, 300);
    }
  }
}
