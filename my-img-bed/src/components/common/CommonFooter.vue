<template>
  <div class="root-container">
    <p>华南师范大学软件工程A205集体制作，商业合作请致电110</p>
  </div>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style scoped lang="scss">

  .root-container {
    width: 100%;
    height: 100%;
    color: #fafafa;
    font-size: 0.6em;
    text-align: center;
    background-color: #545c64;
    background-image: url('../../assets/division.png');
    background-repeat: repeat-x;
    background-position: 0 0;
    p {
      padding-top: 8px;
    }
  }
</style>
