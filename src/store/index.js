import { createStore } from 'Vuex'

const store = createStore({
  // 唯一状态数
  state() {
    return {
      count: 0,
      demoNames: [],
    }
  },
  // 派生
  getters: {
    demoNames(state) {
      return state.demoNames;
    }
  },
  // 修改方式
  mutations: {
    demoNames(state, demoNames) {
      state.demoNames = demoNames;
    },
    increment(state) {
      state.count++
    }
  },
  // 异步操作
  actions: {}
})
export default store;