<template>
  <div class="root-container">
    <div class="logo">
      <a href="#">
        <el-image
          :src="logoUrl"
          fit="contain"
        ></el-image>
      </a>
    </div>
    <div class="nav">
        <el-upload
          class="upload-demo auto-height-width"
          action="#"
          multiple
        >
          <el-link
            type="primary"
          >上传</el-link>
        </el-upload>
      <div class="auto-height-width">
        <el-link type="primary">注册</el-link>
      </div>
      <div class="auto-height-width">
        <el-link type="primary">登录</el-link>
      </div>
      <div class="auto-height-width">
        <el-link type="primary">关于我们</el-link>
      </div>
    </div>
  </div>


  <!--  <nav>-->
  <!--    <div class="nav-wrapper">-->
  <!--      <div class="logo">-->
  <!--        <a href="index.html">-->
  <!--          <img src="../../assets/logo.png" alt="Logo">-->
  <!--        </a>-->
  <!--      </div>-->
  <!--      <div class="space"></div>-->
  <!--      <div class="nav">-->
  <!--        <ul>-->
  <!--          <li><a href="#">上传</a></li>-->
  <!--          <li><a href="#">注册</a></li>-->
  <!--          <li><a href="#">登录</a></li>-->
  <!--          <li><a href="#">关于我们</a></li>-->
  <!--        </ul>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </nav>-->
</template>

<script>
  export default {
    name: 'NavBar',
    data(){
      return {
        logoUrl: require('../../assets/logo.png')
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

  .auto-height-width {
    height: auto;
    width: auto;
  }

  .root-container {
    display: flex;
    justify-content: space-between;
    width: auto;
    .nav {
      display: flex;
      justify-content: end;
      align-items: center;
      width: auto;
      div {
        margin-right: 25px;
      }
    }
  }

</style>
