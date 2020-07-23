<template>
  <div class="root-container">
    <div class="logo-container">
      <a href="/">
        <el-image
          :src="images.logo[0].url"
          :alt="images.logo[0].alt"
          fit="contain"></el-image>
      </a>
    </div>
    <div class="right-container">
      <div class="upload-container">
        <el-upload
          class="upload-demo flex-align-items-center"
          action="post"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          :on-exceed="handleExceed"
          :file-list="fileList">
          <el-link type="info" :underline='false'>上传</el-link>
        </el-upload>
      </div>
<!--      <div class="change-psw">-->
<!--        <el-link type="info" :underline='false'>修改密码</el-link>-->
<!--      </div>-->
      <div class="logout">
        <el-link type="info" :underline='false'>退出登陆</el-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'UserHeader',
    data () {
      return {
        images: {
          logo: [
            {url: require('../../assets/logo.png'), alt: 'logo'}
          ]
        },
        fileList: []
      }
    },
    methods: {
      handlePreview: function () {

      },
      handleRemove: function () {

      },
      beforeRemove: function () {

      },
      handleExceed: function () {

      }
    }
  }
</script>

<style scoped lang="scss">
  $background-color-default: #545c64;
  .root-container {
    background-color: $background-color-default;
    background-image: url('../../assets/division.png');
    background-repeat: repeat-x;
    background-position: 0 54px;

    .logo-container {
      text-align: left;
      width: 300px;
      float: left;
    }

    .right-container {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-around;
      max-width: 300px;
      min-width: 200px;
      float: right;
      line-height: 50px;
      .upload-container {
        max-width: 30px;
      }
      .logout, .change-psw {
        max-width: 60px;
      }
    }
  }
</style>
