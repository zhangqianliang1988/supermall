import * as mutationTypes from "./mutation-types"

const actions = {
  addCart(context, payload) {
    return new Promise(resolve => {
      let product = context.state.cartList.find(prod => prod.goodId === payload.goodId)
      if (product) {
        context.commit(mutationTypes.ADD_COUNTER, product)
      } else {
        payload.checked = true
        payload.count = 1
        context.commit(mutationTypes.ADD_TO_CART, payload)
      }
      resolve('加入购物车成功！')
    })

  }
}

export default actions
