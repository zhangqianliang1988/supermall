import * as mutationTypes from "./mutation-types"

const actions = {
  addCart(context, payload) {
    let product = context.state.cartList.find(prod => prod.goodId === payload.goodId)
    if (product) {
      context.commit(mutationTypes.ADD_COUNTER, product)
    } else {
      payload.checked = true
      payload.count = 1
      context.commit(mutationTypes.ADD_TO_CART, payload)
    }
  }
}

export default actions
