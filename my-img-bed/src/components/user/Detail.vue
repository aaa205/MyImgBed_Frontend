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
      @select="handleSelectionChange"
    >
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
        :width="100"
      >
        <template slot-scope="scope">
          <div>
            <el-link
              type="primary"
              v-clipboard:copy="scope.row.url"
              v-clipboard:success="onCopy"
            >复制地址</el-link>
            <el-link
              type="danger"
              @click="handleDelete(scope.$index)">删除图片</el-link>
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
        total: 0,
        currentRow: -1,
        currentCol: -1,
        userID: -1,
        Token: '',
        albumID: -1
      }
    },
    methods: {
      handleSelectionChange: function (selection, row) {
        this.currentRow = selection
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
      },
      handleDelete: function (index) {
        let curIndex = index
        console.log(curIndex)
          this.$axios.request({
            method: 'delete',
            url: `/pic/p/${this.tableData[curIndex].id}`,
            params: {
              userID: this.userID,
              albumID: this.albumID
            },
            headers: {
              Authorization: this.Token
            }
          }).then(res => {
            this.tableData.splice(curIndex, 1)
            this.originTableData.splice(curIndex, 1)
            this.total--
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
            window.location.reload()
          }).catch(err=>{
            alert(err)
          })
      },
      onCopy: function () {
        this.$message({
          type: 'success',
          message: '复制地址成功！'
        })
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
      this.pageSize = 5
      this.$axios.request({
        method: 'get',
        url: `/pic/u/${this.userID}/pictures`,
        headers :{
          Authorization: this.Token
        }
      }).then((res)=> {
        this.originTableData = res.data.data.reverse()
        this.tableData = this.originTableData.filter((item, index) => {
          return index < this.currentPage * this.pageSize
        })
        for (let i = 0; i < this.tableData.length; i++) {
          this.previewSrcList[i] = this.tableData[i].url
        }
        this.total = this.originTableData.length
      })
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
