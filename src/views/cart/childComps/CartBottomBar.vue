<template>
  <div class="bottom-bar">
    <div class="check-wrapper">
      <check-button class="check-button" :value="isSelectAll" @checkBtnClick="checkAllBtnClick"/>
      <span>全选</span>
    </div>
    <div class="total-price">
      合计：{{ totalPrice }}
    </div>
    <div class="calculate" @click="calcBtnClick">
      去计算({{ checkLength }})
    </div>
  </div>
</template>

<script>
import CheckButton from "./CheckButton"

import {mapGetters} from "vuex"

export default {
  name: "CartBottomBar",
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters(['cartList']),
    totalPrice() {
      return '￥' + this.cartList.filter(item => item.checked).reduce((preValue, item) => {
        return preValue + item.price * item.count
      }, 0).toFixed(2)
    },
    checkLength() {
      return this.cartList.filter(item => item.checked).length
    },
    isSelectAll() {
      if (this.cartList.length === 0) {
        return false
      }
      return !this.cartList.find(item => !item.checked)
    }
  },
  methods: {
    checkAllBtnClick() {
      if (this.isSelectAll) {
        this.cartList.forEach(item => item.checked = false)
      } else {
        this.cartList.forEach(item => item.checked = true)
      }
    },
    calcBtnClick() {
      if (this.checkLength === 0) {
        this.$toast.show('请选择购买的商品！')
        return
      }
      this.$toast.show('合计：' + this.totalPrice)
    }
  }
}
</script>

<style scoped>
.bottom-bar {
  height: 40px;
  background-color: #eee;
  position: relative;
  display: flex;
  align-items: center;
  font-size: 14px;
}

.check-wrapper {
  width: 80px;
  display: flex;
  align-items: center;
}

.total-price {
  flex: 1;
}

.check-button {
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin: 0 5px 0 10px;
}

.calculate {
  width: 100px;
  background-color: red;
  text-align: center;
  color: #fff;
  line-height: 40px;
}
</style>
