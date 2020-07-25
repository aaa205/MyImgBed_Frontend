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
            :underline="false"
          >上传</el-link>
        </el-upload>
      <div class="auto-height-width">
        <el-link
          type="primary"
          :underline="false"
          @click="openRegist"
          v-if="$store.state.isNoLogined"
        >注册</el-link>
      </div>
      <div class="auto-height-width">
        <el-link
          type="primary"
          :underline="false"
          @click="openLogin"
          v-if="$store.state.isNoLogined">登录</el-link>
        <el-link
          type="primary"
          :underline="false"
          href="/#/user"
          v-else
        >个人中心</el-link>
      </div>
      <div class="auto-height-width">
        <el-link type="primary" :underline="false" href="/#/user">关于我们</el-link>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'NavBar',
    data(){
      return {
        logoUrl: require('../../assets/logo.png')
      }
    },
    methods: {
      openRegist: function () {
        let regist = document.getElementsByClassName('register-container')[0]
        regist.style.visibility = 'visible'
      },
      openLogin: function () {
        let login = document.getElementsByClassName('login-container')[0]
        login.style.visibility = 'visible'
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
    background-color: rgba(255,255,255,.9);
    .logo {
      width: auto;
    }

    .nav {
      display: flex;
      justify-content: end;
      align-items: center;
      width: auto;
      .el-link {
        font-weight: bold;
        font-size: 110%;
      }
      div {
        margin-right: 25px;
      }
    }
  }

</style>
