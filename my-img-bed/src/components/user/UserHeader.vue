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
          action="#"
          multiple
          :before-upload="upload"
          :accept="'image/*'"
        >
          <el-link type="info" :underline='false'>上传</el-link>
        </el-upload>
      </div>
      <div class="logout">
        <el-link type="info" :underline='false' href="/index" @click="handleLogout">返回首页</el-link>
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
        Token: '',
        albumID: -1,
        userID: -1
      }
    },
    methods: {
      upload: function (imgFile) {
        let fd = new FormData()
        fd.append('file',imgFile)
        fd.append('userID',this.userID)
        fd.append('albumID',this.albumID)
        this.$axios.request({
          method: 'post',
          data: fd,
          url: '/pic/upload',
          headers: {
            Authorization: this.Token
          }
        }).then(res=>{
          this.$message({
            type: 'success',
            message: '上传成功'
          })
          window.location.reload()
        }).catch(err=>{
          this.$message({
            type: 'error',
            message: '上传失败'
          })
        })
      },
      handleLogout: function () {

      }
    },
    created () {
      let str = sessionStorage.getItem('store')
      let startIndex = str.indexOf('userID')+9
      let endIndex = str.indexOf('"',startIndex)
      this.userID = str.substr(startIndex,endIndex-startIndex)
      startIndex = str.indexOf('Token')+8
      endIndex = str.indexOf('"',startIndex)
      this.Token = str.substr(startIndex, endIndex-startIndex)
      startIndex = str.indexOf('albumID')+9
      endIndex = str.indexOf('}',startIndex)
      this.albumID = str.substr(startIndex,endIndex-startIndex)
    }
  }
</script>

<style scoped lang="scss">
  $background-color-default: #545c64;
  html, body, div {
    height: 100%;
    width: 100%;
  }

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
