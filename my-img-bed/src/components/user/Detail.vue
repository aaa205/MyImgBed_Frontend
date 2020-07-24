<template>
  <div class="root-container">
    <div class="title">
      <h1>我的相册</h1>
    </div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      class="detailTable"
      :stripe="true"
      :border="true"
      lazy
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        class="table-column">
      </el-table-column>
      <el-table-column
        class="table-column"
        label="ID"
        prop="id"
        :width="80">
      </el-table-column>
      <el-table-column
        class="table-column"
        label="图片名称"
        prop="name"
        :width="120">
      </el-table-column>
      <el-table-column
        class="table-column"
        label="类型"
        prop="type"
        :width="80">
      </el-table-column>
      <el-table-column
        class="table-column"
        label="点赞数"
        prop="like"
        :width="80">
      </el-table-column>
      <el-table-column
        class="table-column"
        label="缩略图"
        :width="150">
        <template slot-scope="scope">
          <el-image
            fit="contain"
            :src="scope.row.url"
            :preview-src-list="previewSrcList">
          </el-image>
        </template>
      </el-table-column>
      <el-table-column
        class="table-column"
        label="图片地址"
        prop="url"
      >
      </el-table-column>

      <el-table-column
        class="table-column"
        label="更多操作"
        :width="100">
        <template slot-scope="scope">
          <div>
            <el-link type="primary">复制地址</el-link>
            <el-link type="primary">修改图片</el-link>
            <el-link type="danger">删除图片</el-link>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="pagination"
      @current-change="handleCurrentChange"
      @prev-click="handlePrevClick"
      @next-click="handleNextClick"
      background
      layout="prev, pager, next"
      :page-size="5"
      :total="total"></el-pagination>
  </div>
</template>

<script>
  export default {
    name: 'Detail',
    data () {
      return {
        originTableData: [],
        tableData: [],
        tableShow: [],
        pageSize: 0,
        previewSrcList: [],
        images: [],
        currentPage: 1,
        imagesShow: [],
        total: 0
      }
    },
    methods: {
      handleSelectionChange: function () {

      },
      handleCurrentChange: function (curPage) {
        this.tableData = this.originTableData.filter((item, index) => {
          return index < curPage * this.pageSize
            && index >= (curPage - 1) * this.pageSize
        })
        for (let i = 0; i < this.tableData.length; i++) {
          this.previewSrcList[i] = this.tableData[i].url
        }
      },
      handlePrevClick: function (curPage) {
        this.tableData = this.originTableData.filter((item, index) => {
          return index < curPage * this.pageSize
            && index >= (curPage - 1) * this.pageSize
        })
        for (let i = 0; i < this.tableData.length; i++) {
          this.previewSrcList[i] = this.tableData[i].url
        }
      },
      handleNextClick: function (curPage) {
        this.tableData = this.originTableData.filter((item, index) => {
          return index < curPage * this.pageSize
            && index >= (curPage - 1) * this.pageSize
        })
        for (let i = 0; i < this.tableData.length; i++) {
          this.previewSrcList[i] = this.tableData[i].url
        }
      }, handleDelete: function (event) {
        let curIndex = Number.parseInt(event.target.getAttribute('imageindex'))
        this.tableData.splice(curIndex, 1)
        this.originTableData.splice(curIndex, 1)
        console.log(this.imagesShow.length, this.images.length)
        this.$confirm('此操作将永久删除该图片, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      }
    },
    created () {
      this.pageSize = 5
      this.originTableData = [
        {
          id: 4456456,
          name: '顶上之战',
          uploadTime: new Date(),
          type: '好东西',
          like: 123,
          url: require('../../assets/myImages/0.png')
        },
        {
          id: 456872,
          name: '纪念',
          uploadTime: new Date(),
          type: '好东西+1',
          like: 99,
          url: require('../../assets/myImages/1.png')
        },
        {
          id: 95058,
          name: '随便看',
          uploadTime: new Date(),
          type: '一般般',
          like: 1,
          url: require('../../assets/myImages/2.png')
        },
        {
          id: 4456456,
          name: '顶上之战',
          uploadTime: new Date(),
          type: '好东西',
          like: 123,
          url: require('../../assets/myImages/0.png')
        },
        {
          id: 456872,
          name: '纪念',
          uploadTime: new Date(),
          type: '好东西+1',
          like: 99,
          url: require('../../assets/myImages/1.png')
        },
        {
          id: 95058,
          name: '随便看',
          uploadTime: new Date(),
          type: '一般般',
          like: 1,
          url: require('../../assets/myImages/2.png')
        },
        {
          id: 4456456,
          name: '顶上之战',
          uploadTime: new Date(),
          type: '好东西',
          like: 123,
          url: require('../../assets/myImages/0.png')
        },
        {
          id: 456872,
          name: '纪念',
          uploadTime: new Date(),
          type: '好东西+1',
          like: 99,
          url: require('../../assets/myImages/1.png')
        },
        {
          id: 95058,
          name: '随便看',
          uploadTime: new Date(),
          type: '一般般',
          like: 1,
          url: require('../../assets/myImages/2.png')
        },
        {
          id: 4456456,
          name: '顶上之战',
          uploadTime: new Date(),
          type: '好东西',
          like: 123,
          url: require('../../assets/myImages/0.png')
        },
        {
          id: 456872,
          name: '纪念',
          uploadTime: new Date(),
          type: '好东西+1',
          like: 99,
          url: require('../../assets/myImages/1.png')
        },
        {
          id: 95058,
          name: '随便看',
          uploadTime: new Date(),
          type: '一般般',
          like: 1,
          url: require('../../assets/myImages/2.png')
        },
        {
          id: 4456456,
          name: '顶上之战',
          uploadTime: new Date(),
          type: '好东西',
          like: 123,
          url: require('../../assets/myImages/0.png')
        },
        {
          id: 456872,
          name: '纪念',
          uploadTime: new Date(),
          type: '好东西+1',
          like: 99,
          url: require('../../assets/myImages/1.png')
        },
        {
          id: 95058,
          name: '随便看',
          uploadTime: new Date(),
          type: '一般般',
          like: 1,
          url: require('../../assets/myImages/2.png')
        },
        {
          id: 4456456,
          name: '顶上之战',
          uploadTime: new Date(),
          type: '好东西',
          like: 123,
          url: require('../../assets/myImages/0.png')
        },
        {
          id: 456872,
          name: '纪念',
          uploadTime: new Date(),
          type: '好东西+1',
          like: 99,
          url: require('../../assets/myImages/1.png')
        },
        {
          id: 95058,
          name: '随便看',
          uploadTime: new Date(),
          type: '一般般',
          like: 1,
          url: require('../../assets/myImages/2.png')
        },
        {
          id: 4456456,
          name: '顶上之战',
          uploadTime: new Date(),
          type: '好东西',
          like: 123,
          url: require('../../assets/myImages/0.png')
        },
        {
          id: 456872,
          name: '纪念',
          uploadTime: new Date(),
          type: '好东西+1',
          like: 99,
          url: require('../../assets/myImages/1.png')
        },
        {
          id: 95058,
          name: '随便看',
          uploadTime: new Date(),
          type: '一般般',
          like: 1,
          url: require('../../assets/myImages/2.png')
        },
        {
          id: 4456456,
          name: '顶上之战',
          uploadTime: new Date(),
          type: '好东西',
          like: 123,
          url: require('../../assets/myImages/0.png')
        },
        {
          id: 456872,
          name: '纪念',
          uploadTime: new Date(),
          type: '好东西+1',
          like: 99,
          url: require('../../assets/myImages/1.png')
        },
        {
          id: 95058,
          name: '随便看',
          uploadTime: new Date(),
          type: '一般般',
          like: 1,
          url: require('../../assets/myImages/2.png')
        }
      ]
      this.tableData = this.originTableData.filter((item, index) => {
        return index < this.currentPage * this.pageSize
      })
      this.tableData.forEach((item, index) => {
        this.previewSrcList[index] = item.url
      })
      this.total = this.originTableData.length
    }
  }
</script>

<style scoped lang="scss">
  div {
    width: auto;
  }

  .root-container {
    width: auto;
    height: auto;
    padding: 30px;

    .pagination {
      margin: 30px;
      text-align: center;
    }

    .title {
      height: auto;
      width: 100%;
      margin-bottom: 30px;
      h1 {
        color: rgb(152, 52, 52);
        font-weight: bold;
        font-size: 1.5rem;
      }
    }
  }
</style>
