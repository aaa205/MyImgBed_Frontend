/**
 * 全局变量和全局方法集中处
 * 通过$store.state/$store.mutations引用
 * **/

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 全局变量
  state: {
    isIndex: true
  },
  // 全局方法，一般用于axios
  mutations: {

  }
})
