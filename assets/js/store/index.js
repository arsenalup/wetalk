import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 所有应用级别的状态都放在这里
const state = {
    // 计数器的初始状态为 0
    count: 0
}

// 类似于组件中的 computed，可以对 state 里面的数据
// 做处理，然后通过 $store.getters.func 的方式获取
const getters = {
    evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'

}

// state 里面的状态不能直接改变，想要改变就需要在这里
// 定义函数，函数的第一个参数是 state，通过这个参数改
// 变 state 里面的数据
// 在组件中通过 $store.commit() 触发
const mutations = {
  increment: state => state.count++,
  decrement: state => state.count--,
  incrByAmount: (state, { amount }) => state.count += amount

}

// 和 mutations 类似，但 actions 触发的是 mutations
// mutations 只能进行同步操作，在 actions 中可以定义
// 异步操作
const actions = {
  asyncIncrByAmount: ({ commit }, { amount }) => {
    setTimeout(() => {
      commit('incrByAmount', { amount })
    }, 2000)
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})