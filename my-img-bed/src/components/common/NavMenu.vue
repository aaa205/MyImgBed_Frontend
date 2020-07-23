<template>
  <el-row class="tac">
    <el-col :span="24" class="nav-bgc">
<!--      设置头像-->
      <div class="avatar">
        <el-avatar shape="circle" :size="70" :src="images.avatar[0].url"></el-avatar>
        <p>{{user.name}}，欢迎您！</p>
      </div>
<!--      设置路由导航栏-->
      <el-menu
        class="el-menu-vertical-demo no-border"
        @open="handleOpen"
        @close="handleClose"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fafafa"
        active-text-color="#ffd04b"
        :default-active=defaultActive
        :router=useRouter>
        <el-menu-item :index="router[0].value">
          <i class="el-icon-user"></i>
          <span slot="title">个人信息</span>
        </el-menu-item>
        <el-menu-item :index="router[1].value">
          <i class="el-icon-money"></i>
          <span slot="title">我的相册</span>
        </el-menu-item>
        <el-menu-item :index="router[2].value">
          <i class="el-icon-picture-outline"></i>
          <span slot="title">图片详情</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>

</template>

<script>
  export default {
    name: 'NavMenu',
    methods: {
      handleOpen (key, keyPath) {
        // console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        // console.log(key, keyPath)
      },
      handleSelect (key, keyPath) {
        // this.defaultActive = keyPath[0]
        // console.log(keyPath[0])
      }
    },
    data () {
      return {
        // 使用路由模式的导航
        useRouter: true,
        // 当前激活的项
        defaultActive: '',
        // 传入需要使用路由的页面
        router: [],
        // 用户信息
        user: {
          id: 0,
          name: ''
        },
        // 图片信息（等后端信息再确定格式）
        images: {
          logo: [
            {url: require('../../assets/logo.png'), alt: 'logo'}
          ],
          avatar: [
            {url: require('../../assets/avatar.jpg'), alt: 'avatar'}
          ]
        }
      }
    },
    // 数据初始化，初启动
    created () {
      this.router = [
        {index: 0, value: '/user/global'},
        {index: 1, value: '/user/album'},
        {index: 2, value: '/user/detail'}
      ]
      this.defaultActive = this.router[0].value
      this.user = { id: 20172005066, name: 'Links'}
    }
  }
</script>

<style scoped lang="scss">
  $background-color-default: #545c64;
  $font-color: #fafafa;
  .avatar {
    display: inline-block;
    height: 100px;
    background: $background-color-default;
    text-align: center;
    padding: 30px 0;
    color: $font-color;
    p {
      margin-top: 15px;
    }
  }

  .nav-bgc {
    background-color: $background-color-default;
  }

  .no-border {
    border: 0;
  }

  .nav-root-container {
    min-width: 150px;
    max-width: 16.7%;
    float: left;
  }
</style>
