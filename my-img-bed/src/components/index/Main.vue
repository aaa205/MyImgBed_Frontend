<template>
    <div class="root-container">
      <el-image
        :src="bgSrc"
        fit="contain"
        class="princess"
        :width="800"
      ></el-image>
      <h1>A205图床</h1>
      <p>
        本图床有A205全体成员共同开发，请勿上传涩图。
      </p>
      <a class="upload">
        <p>上传文件</p>
        <input type="file"></input>
      </a>
    </div>
</template>

<script>
  export default {
    name: 'Main',
    data(){
      return {
        bgSrc: require('../../assets/bg.jpg')
      }
    }
  }
</script>

<style scoped lang="scss">
  $nav_color_default: #fafafa;
  $nav_color_hover: #b3e5fc;

  $dm_color_default: #000000;
  $dm_color_hover: #fafafa;
  $dm_bgc: #29b6f6;

  $text_color: #424242;
  div {
    width: auto;
    height: auto;
  }
  .root-container {
    .princess {
      position: fixed;
      right: 0;
      left: 0;
      top: 0;
      bottom: 0;
      z-index: -999;
    }
  }
</style>
