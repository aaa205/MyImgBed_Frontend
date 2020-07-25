<template>
  <div class="root-container">
    <div class="register-container">
      <div class="register-area">
        <div class="register-title">
          欢迎注册
        </div>
        <el-form ref="ruleForm" :model="registForm" label-width="120px" :rules="rules">
          <el-form-item label="用户名" prop="usernameR">
            <el-input v-model="registForm.usernameR"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="passwordR">
            <el-input type="password" v-model="registForm.passwordR"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPasswordR">
            <el-input type="password" v-model="registForm.checkPasswordR"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="handleRegistCancel">取消</el-button>
            <el-button type="primary" @click="handleSummit">注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>


    <div class="login-container">
      <div class="login-area">
        <div class="login-title">
          欢迎回来
        </div>
        <el-form ref="ruleForm" :model="loginForm" label-width="120px" :rules="rules">
          <el-form-item label="用户名" prop="usernameL">
            <el-input v-model="loginForm.usernameL"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="passwordL">
            <el-input type="password" v-model="loginForm.passwordL"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="handleLoginCancel">取消</el-button>
            <el-button type="primary" @click="handleLogin">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>



    <el-image
      :src="bgSrc"
      fit="cover"
      class="princess"
    ></el-image>
    <div class="content">
      <h1>A 2 0 5 图 床</h1>
      <p>
        本图床有A205全体成员共同开发，请勿上传涩图。
      </p>
      <div class="uploadArea">
        <a class="upload">
          上传图片
        </a>
        <input type="file">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Main',
    data () {
      let passwordLength = 6
      let validRUsername = (rule, value, callback)=> {
        if (value === '' || value === undefined) {
          callback(new Error('用户名不能为空!'))
        } else {
          callback()
        }
      }
      let validRPass = (rule, value, callback) => {
        if (value === '' || value === undefined) {
          callback(new Error('密码不能为空!'))
        } else if (value.length < passwordLength) {
          callback(new Error(`密码不得少于${passwordLength}位!`))
        } else {
          callback()
        }
      }
      let validRCheckPass = (rule, value, callback) =>{
        if (value === '' || value === undefined) {
          callback(new Error('密码不能为空!'))
        } else if (value !== this.registForm.passwordR) {
          callback(new Error('两次密码不一致!'))
        } else {
          callback()
        }
      }
      let validLUsername = (rule, value, callback) =>{
        if (value === '' || value === undefined) {
          callback(new Error('用户名不能为空!'))
        } else {
          callback()
        }
      }
      let validLPassword = (rule, value, callback) =>{
        if (value === '' || value === undefined) {
          callback(new Error('密码不能为空'))
        } else {
          callback()
        }
      }
      return {
        bgSrc: require('../../assets/bg.jpg'),
        registForm: {
          usernameR: '',
          passwordR: '',
          checkPasswordR: ''
        },
        loginForm: {
          usernameL: '',
          passwordL: ''
        },
        rules: {
          usernameR: [
            {validator: validRUsername, trigger: 'blur'}
          ],
          passwordR: [
            {validator: validRPass, trigger: 'blur'}
          ],
          checkPasswordR: [
            {validator: validRCheckPass, trigger: 'blur'}
          ],
          usernameL: [
            {validator: validLUsername, trigger: 'blur'}
          ],
          passwordL: [
            {validator: validLPassword, trigger: 'blur'}
          ]
        }
      }

    },
    methods: {
      handleSummit : function () {

      },
      handleRegistCancel: function () {
        let regist =
          document.getElementsByClassName('register-container')[0]
        regist.style.visibility = 'hidden'
      },
      handleLoginCancel: function () {
        let login =
          document.getElementsByClassName('login-container')[0]
        login.style.visibility = 'hidden'
      },
      handleLogin: function () {

      }
    }
  }
</script>

<style scoped lang="scss">
  $nav_color_default: #424242;
  div {
    width: auto;
    height: auto;
    color: $nav_color_default;
  }

  .root-container {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .register-container {
      position: fixed;
      display: flex;
      justify-content: center;
      top: 60px;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(0,0,0, 0.3);
      visibility: hidden;
      z-index: 9999;
      .register-area {
        width: 400px;
        height: 300px;
        background-color: #fafafa;
        border-radius: 10px;
        margin-top: 100px;
        padding: 30px;
        .register-title {
          font-size: 150%;
          color: #2196f3;
          font-weight: 700;
          text-align: center;
          margin-bottom: 30px;
        }
      }
    }

    .login-container {
      position: fixed;
      display: flex;
      justify-content: center;
      top: 60px;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(0,0,0, 0.3);
      visibility: hidden;
      z-index: 9999;
      .login-area {
        width: 400px;
        height: 300px;
        background-color: #fafafa;
        border-radius: 10px;
        margin-top: 100px;
        padding: 30px;
        .login-title {
          font-size: 150%;
          color: #2196f3;
          font-weight: 700;
          text-align: center;
          margin-bottom: 30px;
        }
      }
    }

    .princess {
      position: fixed;
      right: 0;
      left: 0;
      top: 0;
      bottom: 0;
      z-index: -999;
    }

    .content {
      min-height: 500px;
      width: 400px;
      background-color: rgba(255, 255, 255, 0.8);
      border-radius: 10px;
      padding: 30px;
      display: flex;
      flex-direction: column;

      h1 {
        font-size: 250%;
        margin: 30px;
        text-align: center;
        font-weight: bolder;
      }

      p {
        flex-grow: 1;
        font-size: 110%;
      }

      .uploadArea {
        text-align: center;
        width: 180px;
        height: 70px;
        overflow: hidden;
        border-radius: 15px;
        align-self: center;
        background-color: #f06292;
        cursor: pointer;
        color: #fafafa;
        font-size: 120%;
        font-weight: 700;
        .upload {
          position: relative;
          overflow: hidden;
          line-height: 70px;
        }
        input[type='file'] {
          position: relative;
          top: -999px;
          left: 0;
          width: 999px;
          height: 999px;
          opacity: 0;
          cursor: pointer;
        }
      }
    }
  }
</style>
