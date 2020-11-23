import * as mutationTypes from "./mutation-types"

const mutations = {
  [mutationTypes.ADD_COUNTER](state, payload) {
    payload.count++
  },
  [mutationTypes.ADD_TO_CART](state, payload) {
    state.cartList.push(payload)
  }
}

export default mutations
