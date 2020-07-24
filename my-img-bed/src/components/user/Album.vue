<template>
  <div class="root-container">
    <div class="image-area">
      <div class="title">
        <h1>我的相册</h1>
      </div>
      <template v-for="(image,index) in imagesShow">
        <span class="imgItem">
          <el-image
            class="imageItem"
            fit="contain"
            :current-page="currentPage"
            :key="image.index"
            style="width: 150px; height: 150px"
            lazy
            :src="image.url"
            :preview-src-list="previewSrcList">
          </el-image>
          <div class="describe">
            <div class="likeArea">
              <el-badge
                :value="image.likeCount"
                :max="999">
                <a @click="handleLike">
                  <span :class="image.isLiked"></span>
                </a>
              </el-badge>
            </div>
            <div class="titleArea">
              <span class="name"><p v-text="image.index"></p></span>
            </div>
            <div class="deleteArea">
              <a @click="handleDelete">
                <span class="el-icon-delete" :imageIndex="index"></span>
              </a>
            </div>
          </div>
        </span>

      </template>
    </div>
    <el-pagination
      class="pagination"
      @current-change="handleCurrentChange"
      @prev-click="handlePrevClick"
      @next-click="handleNextClick"
      background
      layout="prev, pager, next"
      :page-size="15"
      :total="total"></el-pagination>
  </div>
</template>

<script>
  export default {
    name: 'Album',
    props: {
      imageIndex: Number
    },
    data () {
      return {
        images: [],
        previewSrcList: [],
        currentPage: 1,
        imagesShow: [],
        total: 0
      }
    },
    methods: {
      handleCurrentChange: function (curPage) {
        this.imagesShow = this.images.filter((item, index) => {
          return index < curPage * 15 && index >= (curPage - 1) * 15
        })
        for (let i = 0; i < this.imagesShow.length; i++) {
          this.previewSrcList[i] = this.imagesShow[i].url
        }
      },
      handlePrevClick: function (curPage) {
        this.imagesShow = this.images.filter((item, index) => {
          return index < curPage * 15 && index >= (curPage - 1) * 15
        })
        for (let i = 0; i < this.imagesShow.length; i++) {
          this.previewSrcList[i] = this.imagesShow[i].url
        }
      },
      handleNextClick: function (curPage) {
        this.imagesShow = this.images.filter((item, index) => {
          return index < curPage * 15 && index >= (curPage - 1) * 15
        })
        for (let i = 0; i < this.imagesShow.length; i++) {
          this.previewSrcList[i] = this.imagesShow[i].url
        }
      },
      handleLike: function (event) {
        if (event.target.className === 'el-icon-star-off') {
          event.target.className = 'el-icon-star-on'
          console.log('Like it!')
        } else if (event.target.className === 'el-icon-star-on') {
          event.target.className = 'el-icon-star-off'
          console.log('Dislike it!')
        }
      },
      handleDelete: function (event) {
        let curIndex = Number.parseInt(event.target.getAttribute('imageindex'))
        this.imagesShow.splice(curIndex, 1)
        this.images.splice(curIndex, 1)
        console.log(this.imagesShow.length, this.images.length)
        this.$confirm('此操作将永久删除该图片, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
        // this.total--
        // 需要请求刷新页面
      }
    },
    created () {
      this.images = [
        {
          index: 0,
          url: require('../../assets/myImages/0.png'),
          alt: '0',
          isLiked: 'el-icon-star-off',
          likeCount: 123
        },
        {
          index: 1,
          url: require('../../assets/myImages/1.png'),
          alt: '1',
          isLiked: 'el-icon-star-off',
          likeCount: 12
        },
        {
          index: 2,
          url: require('../../assets/myImages/0.png'),
          alt: '2',
          isLiked: 'el-icon-star-off',
          likeCount: 1
        },
        {
          index: 3,
          url: require('../../assets/myImages/1.png'),
          alt: '3',
          isLiked: 'el-icon-star-off',
          likeCount: 123
        },
        {
          index: 4,
          url: require('../../assets/myImages/0.png'),
          alt: '0',
          isLiked: 'el-icon-star-off',
          likeCount: 123
        },
        {
          index: 5,
          url: require('../../assets/myImages/1.png'),
          alt: '1',
          isLiked: 'el-icon-star-off',
          likeCount: 123
        },
        {
          index: 6,
          url: require('../../assets/myImages/0.png'),
          alt: '0',
          isLiked: 'el-icon-star-off',
          likeCount: 123
        },
        {
          index: 7,
          url: require('../../assets/myImages/1.png'),
          alt: '1',
          isLiked: 'el-icon-star-off',
          likeCount: 123
        },
        {
          index: 8,
          url: require('../../assets/myImages/0.png'),
          alt: '0',
          isLiked: 'el-icon-star-off',
          likeCount: 123
        },
        {
          index: 9,
          url: require('../../assets/myImages/1.png'),
          alt: '1',
          isLiked: 'el-icon-star-off',
          likeCount: 123
        },
        {
          index: 10,
          url: require('../../assets/myImages/0.png'),
          alt: '0',
          isLiked: 'el-icon-star-off',
          likeCount: 123
        },
        {
          index: 11,
          url: require('../../assets/myImages/1.png'),
          alt: '1',
          isLiked: 'el-icon-star-off',
          likeCount: 123
        },
        {
          index: 12,
          url: require('../../assets/myImages/0.png'),
          alt: '0',
          isLiked: 'el-icon-star-off',
          likeCount: 123
        },
        {
          index: 13,
          url: require('../../assets/myImages/1.png'),
          alt: '1',
          isLiked: 'el-icon-star-off',
          likeCount: 123
        },
        {
          index: 14,
          url: require('../../assets/myImages/0.png'),
          alt: '0',
          isLiked: 'el-icon-star-off',
          likeCount: 123
        },
        {
          index: 15,
          url: require('../../assets/myImages/1.png'),
          alt: '1',
          isLiked: 'el-icon-star-off',
          likeCount: 123
        },
        {
          index: 16,
          url: require('../../assets/myImages/0.png'),
          alt: '0',
          isLiked: 'el-icon-star-off',
          likeCount: 123
        },
        {
          index: 17,
          url: require('../../assets/myImages/1.png'),
          alt: '1',
          isLiked: 'el-icon-star-off',
          likeCount: 123
        },
        {
          index: 18,
          url: require('../../assets/myImages/0.png'),
          alt: '0',
          isLiked: 'el-icon-star-off',
          likeCount: 123
        },
        {
          index: 19,
          url: require('../../assets/myImages/1.png'),
          alt: '1',
          isLiked: 'el-icon-star-off',
          likeCount: 123
        },
        {
          index: 20,
          url: require('../../assets/myImages/0.png'),
          alt: '0',
          isLiked: 'el-icon-star-off',
          likeCount: 123
        },
        {
          index: 21,
          url: require('../../assets/myImages/1.png'),
          alt: '1',
          isLiked: 'el-icon-star-off',
          likeCount: 123
        },
        {
          index: 22,
          url: require('../../assets/myImages/0.png'),
          alt: '0',
          isLiked: 'el-icon-star-off',
          likeCount: 123
        },
        {
          index: 23,
          url: require('../../assets/myImages/1.png'),
          alt: '1',
          isLiked: 'el-icon-star-off',
          likeCount: 123
        }
      ]
      this.imagesShow = this.images.filter((item, index) => {
        return index < this.currentPage * 15
      })
      for (let i = 0; i < this.imagesShow.length; i++) {
        this.previewSrcList[i] = this.imagesShow[i].url
      }
      this.total = this.images.length
    }
  }
</script>

<style scoped lang="scss">
  .root-container {
    height: auto;

    .pagination {
      width: auto;
      height: auto;
      text-align: center;
      margin: 30px;
    }

    .title {
      height: auto;
      width: 100%;

      h1 {
        color: rgb(152, 52, 52);
        font-weight: bold;
        font-size: 1.5rem;
      }
    }

    .image-area {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-content: space-around;
      margin: 30px;
      width: auto;

      .imageItem {
        margin: 30px 30px 10px 30px;
      }

      .describe {
        width: auto;
        height: auto;
        display: flex;
        justify-content: space-around;
        .likeArea {
          width: 20px;
          float: left;
          margin-left: 30px;
        }

        .titleArea {
          text-align: center;
          width: 120px;
          overflow: hidden;
        }

        .deleteArea {
          width: 20px;
          margin-right: 30px;
        }

        a {
          cursor: pointer;
        }

        .name {
          text-align: center;
        }
      }
    }
  }
</style>
