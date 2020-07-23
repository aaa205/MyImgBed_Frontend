<template>
  <nav>
    <div class="nav-wrapper">
      <div class="logo">
        <a href="index.html">
          <img src="../../assets/logo.png" alt="Logo">
        </a>
      </div>
      <div class="space"></div>
      <div class="nav">
        <ul>
          <li><a href="#">上传</a></li>
          <li><a href="#">注册</a></li>
          <li><a href="#">登录</a></li>
          <li><a href="#">关于我们</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'NavBar'
  }
</script>

<style scoped lang="scss">
  $nav_color_default: #fafafa;
  $nav_color_hover: #b3e5fc;

  $dm_color_default: #000000;
  $dm_color_hover: #fafafa;
  $dm_bgc: #29b6f6;

  $text_color: #424242;
  body, html, .root-container {
    width: 100%;
    height: 100%;
  }

  .nav-wrapper {
    height: 100%;
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;

  }

  nav {
    height: 100%;
    width: 100%;
    background: linear-gradient(rgba(2, 119, 189, .7), rgba(179, 229, 252, .7));
  }

  .logo img {
    height: 100%;
    width: 40%;
  }

  .nav {
    ul {
      list-style: none;
      float: right;

      li {
        float: left;
        margin: 0 10px;

        a {
          text-decoration: none;
          color: $nav_color_default;
        }

        a:hover {
          color: $nav_color_hover
        }
      }
    }
  }

  .space {
    margin: 0 auto;
  }
</style>
