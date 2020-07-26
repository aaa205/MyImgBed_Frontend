/**
 * 全局变量和全局方法集中处
 * 通过this.$store.state/this.$store.commit(name, value)引用
 * **/

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 全局变量
  state: {
    isIndex: true,
    isNoLogined: true,
    Token: null,
    userID: null,
    username: null,
    albumID: null
  },
  // 全局方法，一般用于axios
  mutations: {
    Login(state, value){
      state.isNoLogined = false
      state.Token = value.token
      state.userID = value.uid
    },
    Regist(state, value){
      state.userID = value.uid
    },
    setUsername(state, value){
      state.username = value
    },
    setAlbumID(state, value){
      state.albumID = value
    }
  }
})
