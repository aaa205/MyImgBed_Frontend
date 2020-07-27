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
                :value="image.like"
                :max="999">
                <a @click="handleLike">
                  <span class="el-icon-star-on"></span>
                </a>
              </el-badge>
            </div>
            <div class="titleArea">
              <span class="name"><p v-text="image.name"></p></span>
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
        data() {
            return {
                images: [],
                // images: [],
                previewSrcList: [],
                currentPage: 1,
                imagesShow: [],
                total: 0,
                userID: -1,
                token: ''
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
                let id = this.imagesShow[curIndex].id
                this.$confirm('此操作将永久删除该图片, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.imagesShow.splice(curIndex, 1)
                    this.images.splice(curIndex * this.currentPage, 1)
                    this.total--
                    this.$message({
                        type: 'success',
                        message: '删除成功'
                    })
                    this.$axios.request({
                        method: 'delete',
                        headers:{Authorization: this.token},
                        url: `pic/p/${id}`,
                        params: {
                            userID: this.userID,
                            albumID: this.albumID
                        }
                    }).then(res => {

                    }).catch(err => {

                    })
                })
                // 需要请求刷新页面
            }
        },
        created() {
            let str = sessionStorage.getItem('store')
            let startIndex = str.indexOf('userID') + 9
            let endIndex = str.indexOf('"', startIndex)
            this.userID = str.substr(startIndex, endIndex - startIndex)
            startIndex = str.indexOf('Token') + 8
            endIndex = str.indexOf('"', startIndex)
            this.token = str.substr(startIndex, endIndex - startIndex)
            this.$axios.request({
                method: 'get',
                url: `/pic/u/${this.userID}/pictures`,
                headers: {
                    Authorization: this.token
                }
            }).then((res) => {
                this.images = res.data.data
                console.log(this.images)
                this.imagesShow = this.images.filter((item, index) => {
                    return index < this.currentPage * 15
                })
                for (let i = 0; i < this.imagesShow.length; i++) {
                    this.previewSrcList[i] = this.imagesShow[i].url
                }
                this.total = this.images.length
            })

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
