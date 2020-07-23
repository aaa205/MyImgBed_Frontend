<template>
  <article>
    <div class="content">
      <h1>A205图床</h1>
      <p>
        本图床有A205全体成员共同开发，请勿上传涩图。
      </p>
      <a class="upload">
        <p>上传文件</p>
        <input type="file"></input>
      </a>
    </div>
  </article>
</template>

<script>
  export default {
    name: 'Main'
  }
</script>

<style scoped lang="scss">
  $nav_color_default: #fafafa;
  $nav_color_hover: #b3e5fc;

  $dm_color_default: #000000;
  $dm_color_hover: #fafafa;
  $dm_bgc: #29b6f6;

  $text_color: #424242;


  //---------drop-menu--------------------
  .drop-menu {
    position: absolute;
    left: 80%;
    visibility: hidden;

    ul {
      float: right;
      width: 90px;
      list-style: none;
      margin: 0;
      padding: 0;
      border: 1px;
      border-radius: 3px;
      background-color: #e0e0e0;

      li {
        a {
          padding: 10px 10px;
          display: block;
          margin: 0;
          width: 100%;
          height: 100%;
          text-decoration: none;
          color: $dm_color_default;
        }
      }

      li:hover {
        color: $dm_color_hover;
        background-color: $dm_bgc;
      }
    }
  }

  //---------------------------
  article {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background: url('../../assets/bg.jpg') no-repeat;
    background-size: cover;

    h1, p {
      margin: 0;
      padding: 0;
      color: $text_color;
    }

    //*********************************************//
    .content {
      display: flex;
      flex-wrap: nowrap;
      flex-direction: column;
      width: 60%;
      height: 80%;
      border-radius: 15px;
      border: 1px;
      background-color: rgba(255, 255, 255, .8);

      h1 {
        text-align: center;
        margin: 3% 5%;
      }

      p {
        flex-grow: 12;
        margin: 5% 5%;
      }

      //****************************************
      .upload {
        display: inline-block;
        height: 60px;
        width: 200px;
        margin: 10px auto;
        align-items: center;
        overflow: hidden;
        //line-height: 100%;
        cursor: pointer;
        position: relative;
        left: 0;
        border-radius: 15px;
        background-color: #ec407a;
        p {
          margin: 0;
          padding: 0;
          text-align: center;
          line-height: 60px;
          color: $nav_color_default;
        }

        input {
          position: absolute;
          top: 0;
          right: 0;
          height: 999px;
          width: 999px;
          border: 0;
          outline: none;
          overflow: hidden;
          opacity: 0;
          cursor: pointer;
        }

        :active {
          transform: translate(1px, 1px);
        }

        input:hover {
          text-decoration: none;
        }
      }
      //******************************************************
    }
    //***********************************************//
  }
</style>
