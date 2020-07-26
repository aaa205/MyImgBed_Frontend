<template>
  <div class="root-container">
    <div class="img-info">
      <h1>我的信息</h1>
      <p>总计上传图片数量为：<strong>{{user.imgCount}}</strong></p>
      <p>总计创建相册数量为：<strong>{{user.albumCount}}</strong></p>
      <p>欢迎继续使用本图床，谢谢支持！</p>
    </div>

    <div class="form-set-psw">
      <h1>修改密码</h1>
      <el-form ref="ruleForm" :model="form" label-width="80px" label-position="top" :rules="rules">
        <el-form-item label="原密码" prop="originPsw">
          <el-input type="password" v-model="form.originPsw" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="newPsw">
          <el-input type="password" v-model="form.newPsw"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPsw">
          <el-input type="password" v-model="form.checkPsw" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSummit">立即修改</el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'Global',
    data(){
      let pswLength = 6
      let validOriginPsw = (rule, value, callback)=>{
        if (value === '') {
          callback(new Error('请输入原密码!'))
        } else if (value !== this.user.originPsw) {
          callback(new Error('原密码错误!'))
        } else {
          callback()
        }
      }
      let validNewPsw = (rule, value, callback) =>{
        if (value === '') {
          callback(new Error('请输入新密码！'))
        } else if (value.length < 6) {
          callback(new Error(`请输入长度大于等于${pswLength}的新密码！`))
        } else if (value === this.form.originPsw){
          callback(new Error('新密码不能与原密码相同！'))
        } else {
          callback()
        }
      }
      let validCheckPsw = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入新密码!'))
        } else if (value !== this.form.newPsw) {
          console.log(value, this.form.newPsw)
          callback(new Error('与新密码不一致!'))
        } else {
          callback()
        }
      }
      return {
        Token: '',
        userID: -1,
        form: {
          originPsw: '',
          newPsw:'',
          checkPass: ''
        },
        user: {
          imgCount: -1,
          albumCount: -1,
          originPsw: '123456'
        },
        rules: {
          originPsw: [
            {validator: validOriginPsw, trigger: 'blur'}
          ],
          newPsw: [
            {validator: validNewPsw, trigger: 'blur'}
          ],
          checkPsw: [
            {validator: validCheckPsw, trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      onSummit: function () {

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
      this.$axios.request({
        method: 'get',
        url: `/pic/u/${this.userID}/pictures`,
        headers: {
          Authorization: this.Token
        }
      }).then(res=>{
        this.user.albumCount = 1
        this.user.imgCount  = res.data.data.length
      })
    }
  }
</script>

<style scoped lang="scss">
  .root-container {
    height: auto;
    h1 {
      color: rgb(152,52,52);
      font-weight: bold;
      font-size: 1.5rem;
      margin: 20px 0;
    }
    p {
      color: rgb(77,77,77);
      line-height: 250%;
      strong {
        font-weight: bold;
        color: red;
      }
    }
    .form-set-psw {
      margin: 30px;
      max-width: 400px;
    }
    .img-info {
      margin: 30px;
      max-width: 400px;
    }
  }


</style>
