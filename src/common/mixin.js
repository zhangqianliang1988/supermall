import {debounce} from "@/common/utils";

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

export const goodImageLoadedMixin = {
  data() {
    return {
      goodImageLoaded: null
    }
  },
  mounted() {
    const invokeScrollRefresh = debounce(this.$refs.scroll.refresh, 500)
    this.goodImageLoaded = () => invokeScrollRefresh();
    this.$bus.$on('goodImageLoaded', this.goodImageLoaded)
  }
}
