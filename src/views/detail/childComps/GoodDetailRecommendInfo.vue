<template>
  <div class="recommend-info" v-if="Object.keys(recommendList).length !== 0">
    <div class="info-header">热门推荐</div>
<!--    <grid-view>-->
<!--      <goods-list-item v-for="(item, index) in recommendList" :key="index" :good="item"></goods-list-item>-->
<!--    </grid-view>-->
    <goods-list :goods="recommendList"/>
  </div>
</template>

<script>
// import GridView from '@/components/common/gridView/GridView'
// import GoodsListItem from '@/components/content/goods/GoodsListItem'
import GoodsList from "@/components/content/goods/GoodsList";

export default {
  name: "GoodDetailRecommendInfo",
  components: {
    GoodsList
    // GridView,
    // GoodsListItem
  },
  props: {
    recommendList: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.recommend-info {
  padding: 5px;
}

.info-header {
  line-height: 40px;
  padding-left: 8px;
  font-size: 15px;
  color: #333;
}
</style>
