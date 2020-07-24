<template>
  <div id="app">
    <el-container class="no-margin no-padding full-height">
      <el-header v-if="$route.meta.isIndex" class="no-margin no-padding">
        <nav-bar></nav-bar>
      </el-header>
      <el-header v-else class="no-margin no-padding">
        <user-header></user-header>
      </el-header>
      <el-container class="no-margin no-padding">
        <el-aside v-if="!$route.meta.isIndex" class="no-margin no-padding">
          <nav-menu ></nav-menu>
        </el-aside>
        <el-main class="no-margin no-padding full-height" style="height: 100%">
          <router-view/>
        </el-main>
      </el-container>

      <el-footer class="no-margin no-padding" height="20px">
        <common-footer></common-footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>

  import NavMenu from './components/common/NavMenu'
  import Main from './components/index/Main'
  import NavBar from './components/index/NavBar'
  import CommonFooter from './components/common/CommonFooter'
  import UserHeader from './components/user/UserHeader'

  export default {
    name: 'App',
    components: {UserHeader, NavBar, CommonFooter, NavMenu}
  }
</script>

<style lang="scss">
  .full-height{
    height: 100%;
  }

  .no-padding{
    padding: 0;
  }

  .no-margin {
    margin: 0;
  }

  .border{
    border: 2px black solid;
  }

  /* http://meyerweb.com/eric/tools/css/reset/
     v2.0 | 20110126
     License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  html, body, div {
    width: 100%;
    height: 100%;
  }

  .el-message-box__wrapper, .el-message-box {
    width: auto;
    height: auto;
    div {
      width: auto;
      height: auto;
    }
  }
  .el-message, .el-message--success{
    width: auto;
    height: auto;
    div {
      width: auto;
      height: auto;
    }
  }

  #app {
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333333;
  }
</style>
