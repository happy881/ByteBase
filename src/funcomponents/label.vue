<template>
  <div class="Labtable">
    <div class="lable">
      <el-dialog :title="$t('Editlable')" :visible.sync="changebtn" :center="true">
        <div class="ltitke">{{ $t('tagName') }}</div>
        <input :placeholder="$t('EnterTagName')" class="Lbainput" type="text" v-model="ladbelsstr2" />
        <div class="Lablesubmit" @click="changesubmit">{{ $t('Confirm') }}</div>
      </el-dialog>
      <el-dialog :title="$t('newTag')" :visible.sync="addlablebtn" :center="true">
        <div class="ltitke">{{ $t('tagTip') }}</div>
        <input :placeholder="$t('EnterTagName')" class="Lbainput" type="text" v-model="ladbelsstr" />
        <div class="Lablesubmit" @click="addsubmit">{{ $t('confirms') }}</div>
      </el-dialog>
    </div>
    <div class="labdead">
      <div class="upFileButton" @click="addlable">
        <img style="width: 24px; margin-right: 15px" src="../assets/home/icon_add@2x.png" alt="" />
        <span>{{ $t('new') }}</span>
      </div>
      <div class="delbtn" @click="dellable">{{ $t('delete') }}</div>
      <div class="tarLeftSearchBox">
        <input type="text" class="tarLeftSearch" v-model="inputSearchData" :placeholder="$t('search')" />
        <img src="../assets/home/icon_srech_noSelect@2x.png" alt="" @click="blurserch" />
        <!-- <img
                    src="../assets/home/searchClose.png"
                    alt=""
                    v-else
                    @click="clearInputFun"
                /> -->
      </div>
    </div>
    <div class="bqtitle">{{ $t('labelManagement') }}</div>

    <el-table ref="multipleTable" :data="tableData" :default-sort="{ prop: 'date', order: 'ascending' }" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="78"> </el-table-column>
      <el-table-column label="">
        <template slot="header" slot-scope="scope">
          <span v-if="lang === 'zh-CN'">{{$t('hint107') + ' ' + total + ' '  + '项，'}}{{ $t('Total') + ' ' + total + ' ' + '项'}}</span>
          <span v-if="lang === 'en-US'">{{ $t('hint107') + ' ' + tablength }}，{{ $t('Total') + ' ' + total }}</span>
        </template>
        <template slot-scope="scope">{{ scope.row.name }}</template>
      </el-table-column>
      <el-table-column sortable prop="date" :label="$t('createTime')" min-width="300" align="right">
        <template slot-scope="scope">{{ scope.row.createTime }}</template>
      </el-table-column>
      <el-table-column prop="address" :label="$t('operations')" align="center" min-width="60" style="padding-right:30px">
        <template slot-scope="scope">
          <!-- <el-button
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)"
                        >编辑</el-button
                    > -->
          <img class="editimg" src="../assets/home/edit@2x.png" @click="handleEdit(scope.$index, scope.row)" alt="" />
        </template>
      </el-table-column>
    </el-table>

    <div class="fywarp">
      <div style="padding-left: 25px; margin-right: auto">
        <span v-if="lang === 'zh-CN'">{{  $t('Total') + ' ' + total + '条'}}</span>
        <span v-if="lang === 'en-US'">{{  $t('Total') + ' ' + total }}</span>
      </div>
      <div style="margin-right: 10px">{{ $t('hint105') }}</div>
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">{{ commandNum }}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="10">10</el-dropdown-item>
          <el-dropdown-item command="20">20</el-dropdown-item>
          <el-dropdown-item command="30">30</el-dropdown-item>
          <el-dropdown-item command="40">40</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <div class="ffwarp">
        <div class="leftmore">
          <img class="icon" src="../assets/byteicon/leftmore.png" alt="" />
        </div>
        <div class="leftmore" @click="leftbtn">
          <img class="icon2" src="../assets/byteicon/leftbtn.png" alt="" />
        </div>
        <div class="yeinput">
          <input v-model="page" class="inll" type="text" style="width: 100%; height: 100%" @blur="pageonChange" />
        </div>
        <div class="totleys">{{ current }}/{{ pages }}{{ $t('hint106') }}</div>
        <div class="rightmore" @click="rightbtn">
          <img class="icon" src="../assets/byteicon/rightbtn.png" alt="" />
        </div>
        <div class="rightmore">
          <img class="icon2" src="../assets/byteicon/rightmore.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from '../../event-bus.js'
import apis from '../common/apis.js'
export default {
  data () {
    return {
      lang: sessionStorage.getItem('lang') || 'zh-CN',
      pagese: 0,
      ladbelsstr: '',
      ladbelsstr2: '',
      labels: [],
      addlablebtn: false,
      changebtn: false,
      page: 1,
      commandNum: 10,
      multipleSelection: 0,
      tablength: 0,
      total: 0,
      inputSearchData: null,
      tableData: [],
      pages: 0,
      current: 0,
      changeid: '',
      changename: '',
      pramsdata: ''
    }
  },
  created () {
    // total 总数 size 当前页数量 current 当前页  pages 总页数
    let token = localStorage.token
    let prams = {
      createTimeSort: 1
    }
    this.$axios({
      method: 'post',
      url: apis.labelListApi,
      data: prams,
      headers: {
        'Content-Type': 'application/json',
        Bearer: token
      }
    }).then((r) => {
      console.log(r)
      if (r.status === 200) {
        this.tableData = r.data.records[0]
        this.total = r.data.total
        this.pages = r.data.pages // 总页数
        this.current = r.data.current // 当前页数
        this.pagese = r.data.size
      }
    })
  },

  methods: {
    blurserch () {
      let token = localStorage.token
      console.log(this.inputSearchData)
      let prams = {
        createTimeSort: 1,
        name: this.inputSearchData
      }
      this.$axios({
        method: 'post',
        url: apis.labelListApi,
        data: prams,
        headers: {
          'Content-Type': 'application/json',
          Bearer: token
        }
      }).then((r) => {
        console.log(r)
        if (r.status === 200) {
          this.tableData = r.data.records[0]
          this.total = r.data.total
          this.pages = r.data.pages // 总页数
          this.current = r.data.current // 当前页数
          this.pagese = r.data.size
        }
      })
    },
    onloadcreate (index) {
      let that = this
      // total 总数 size 当前页数量 current 当前页  pages 总页数
      let token = localStorage.token
      if (index === '') {
        that.pramsdata = {
          createTimeSort: 1
        }
      } else {
        that.pramsdata = {
          createTimeSort: 1,
          size: index
        }
      }

      this.$axios({
        method: 'post',
        url: apis.labelListApi,
        data: that.pramsdata,
        headers: {
          'Content-Type': 'application/json',
          Bearer: token
        }
      }).then((r) => {
        console.log(r)
        if (r.status === 200) {
          this.tableData = r.data.records[0]
          this.total = r.data.total
          this.pages = r.data.pages // 总页数
          this.current = r.data.current // 当前页数
          this.pagese = r.data.size
        }
      })
    },
    changesubmit () {
      let that = this
      console.log(that.ladbelsstr2)
      let prams = {
        id: that.changeid,
        name: that.ladbelsstr2
      }
      let token = localStorage.token
      if (that.ladbelsstr2 === '') {
        that.$message.info({
          content: this.$t('EnterTagName'),
          background: true,
          duration: 3
        })
      } else {
        that.$axios({
          method: 'post',
          url: apis.updLabelApi,
          data: prams,
          headers: {
            'Content-Type': 'application/json',
            Bearer: token
          }
        })
          .then((res) => {
            console.log(res)
            if (res.status === 200) {
              that.$message.info({
                content: this.$t('modifySuc'),
                background: true,
                duration: 3
              })
              that.changebtn = false
              that.ladbelsstr2 = ''
              that.onloadcreate()
            }
          })
          .catch((e) => {
            that.$message.info({
              content: this.$t('hint42'),
              background: true,
              duration: 3
            })
          })
      }
    },
    dellable () {
      let that = this
      let ids = []
      console.log(this.multipleSelection)
      if (this.multipleSelection <= 0) {
        return
      }
      this.multipleSelection.forEach((c) => {
        ids.push(c.id)
      })
      console.log(ids)
      let token = localStorage.token
      let prams = {
        ids: ids
      }
      this.$axios({
        method: 'post',
        url: apis.delLabelApi,
        data: prams,
        headers: {
          'Content-Type': 'application/json',
          Bearer: token
        }
      }).then((res) => {
        console.log(res)
        that.$message.info({
          content: this.$t('deleteSuc'),
          background: true,
          duration: 3
        })
        that.onloadcreate()
      })
    },
    addsubmit () {
      let that = this
      let labels = this.ladbelsstr.split('#')
      console.log(labels)
      if (labels.length === 1 && labels[0] === '') {
        that.$message.info({
          content: this.$t('tagNotNull'),
          background: true,
          duration: 3
        })
        return
      }
      let token = localStorage.token
      let prams = {
        labels: labels
      }
      this.$axios({
        method: 'post',
        url: apis.addLabelApi,
        data: prams,
        headers: {
          'Content-Type': 'application/json',
          Bearer: token
        }
      }).then((r) => {
        console.log(r)
        if (r.status === 200) {
          that.$message.info({
            content: this.$t('hint120'),
            background: true,
            duration: 3
          })
          that.addlablebtn = false
          that.onloadcreate()
        }
      }).catch(err => {
        that.$message.info({
          content: err.response.data,
          background: true,
          duration: 3
        })
      })
    },
    addlable () {
      this.addlablebtn = true
    },
    pageonChange () {
      // 失去焦点 请求页数
      let that = this
      console.log(this.page)
      if (this.page > this.pages) {
        that.$message.info({
          content: this.$t('hint121'),
          background: true,
          duration: 3
        })
      } else {
        let that = this
        // total 总数 size 当前页数量 current 当前页  pages 总页数
        let token = localStorage.token
        that.pramsdata = {
          createTimeSort: 1,
          size: that.commandNum,
          current: this.page

        }

        this.$axios({
          method: 'post',
          url: apis.labelListApi,
          data: that.pramsdata,
          headers: {
            'Content-Type': 'application/json',
            Bearer: token
          }
        }).then((r) => {
          console.log(r)
          if (r.status === 200) {
            this.tableData = r.data.records[0]
            this.total = r.data.total
            this.pages = r.data.pages // 总页数
            this.current = r.data.current // 当前页数
            this.pagese = r.data.size
          }
        })
      }
    },
    leftbtn () {
      // 切换上一页
      console.log(this.current)
      let that = this
      if (this.current === 1) {
        that.$message.info({
          content: this.$t('hint122'),
          background: true,
          duration: 3
        })
      } else {
        that.current = that.current - 1
        that.page = that.page - 1
        // total 总数 size 当前页数量 current 当前页  pages 总页数
        let token = localStorage.token
        that.pramsdata = {
          createTimeSort: 1,
          size: that.commandNum,
          current: that.current

        }

        this.$axios({
          method: 'post',
          url: apis.labelListApi,
          data: that.pramsdata,
          headers: {
            'Content-Type': 'application/json',
            Bearer: token
          }
        }).then((r) => {
          console.log(r)
          if (r.status === 200) {
            that.tableData = r.data.records[0]
            that.total = r.data.total
            that.pages = r.data.pages // 总页数
            that.current = r.data.current // 当前页数
            that.pagese = r.data.size
          }
        })
      }
    },

    rightbtn () {
      // 切换上一页
      console.log(this.current)
      let that = this
      if (this.current === that.pages) {
        that.$message.info({
          content: this.$t('hint123'),
          background: true,
          duration: 3
        })
      } else {
        that.current = Number(that.current) + 1
        that.page = Number(that.page) + 1
        // total 总数 size 当前页数量 current 当前页  pages 总页数
        let token = localStorage.token
        that.pramsdata = {
          createTimeSort: 1,
          size: that.commandNum,
          current: that.current

        }

        this.$axios({
          method: 'post',
          url: apis.labelListApi,
          data: that.pramsdata,
          headers: {
            'Content-Type': 'application/json',
            Bearer: token
          }
        }).then((r) => {
          console.log(r)
          if (r.status == 200) {
            that.tableData = r.data.records[0]
            that.total = r.data.total
            that.pages = r.data.pages // 总页数
            that.current = r.data.current // 当前页数
            that.pagese = r.data.size
          }
        })
      }
    },
    handleCommand (command) {
      this.commandNum = command
      console.log(command)
      this.onloadcreate(this.commandNum)
    },
    clearInputFun () {
      this.inputSearchData = null
    },
    handleSelectionChange (val) {
      console.log(val)
      this.multipleSelection = val
      console.log(this.multipleSelection.length)
      this.tablength = this.multipleSelection.length
    },
    handleEdit (index, row) {
      console.log(index, row)
      this.changeid = row.id
      this.changename = row.name
      this.changebtn = true
    },
    toggleSelection (rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection() // 清空选项，项目中：请求接口后，重新请求数据渲染页面的时候，使用此方式，清空选中勾选状态。
      }
    }
  }
}
</script>

<style scoped>
.el-table td.is-right,
.el-table th.is-right {
  text-align: right;
  padding-right: 40px !important;
}

.el-table .ascending .sort-caret.ascending {
  border-bottom-color: #f04d30 !important;
}
.el-table .descending .sort-caret.descending {
  border-top-color: #f04d30;
}
input {
  background: none;
  outline: none;
  border: 1px solid #cccccc;
}
input:focus {
  border: 1px solid #cccccc;
}

.Lablesubmit {
  cursor: pointer;
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: #ef190f;
  color: white;
  font-size: 16px;
  margin-top: 35px;
  margin-bottom: 10px;
  height: 40px;
  margin-left: auto;
  margin-right: auto;
}
.Lbainput {
  width: 360px;
  height: 35px;
  margin-left: 22px;
  border-color: #cccccc;
  box-shadow: 0 0 0;
  margin-top: 6px;
  padding-left: 5px;
  padding-right: 5px;
  font-size: 13px;
}
.ltitke {
  color: #333333;
  font-size: 12px;
  margin: 0 22px;
}
.lable >>> .el-dialog__header {
  border: 0;
}
.lable >>> .el-dialog__body {
  /*height: 150px;*/
  padding: 0 !important;
}
.lable >>> .el-dialog--center {
  text-align: center;
  margin-top: 30vh !important;
}
.totleys {
  width: 60px;
  height: 30px;

  font-size: 14px;
  color: #333333;
  display: flex;
  align-items: center;
  justify-content: center;
}
.inll {
  border: none;
  padding-left: 20px;
}
.yeinput {
  width: 60px;
  height: 100%;
  background-color: white;
  font-size: 14px;
  color: #333333;
  border-right: 1px solid #cccccc;
}
.icon {
  width: 16px;
  height: 16px;
}
.icon2 {
  width: 17px;
  height: 17px;
}
.ffwarp {
  margin-right: 30px;
  width: 235px;
  height: 32px;
  margin-left: 5px;
  border-radius: 3px;
  border: 1px solid #cccccc;
  display: flex;
  align-items: center;
}
.el-dropdown-link {
  cursor: pointer;
  color: #333333;
  font-weight: bold;
}
.Labtable >>> .el-table_1_column_1 {
  width: 78px !important;
}
.Labtable >>> .el-table_1_column_2 {
  width: 209px !important;
}
.Labtable >>> .el-table-column--selection .cell {
  padding-left: 30px;
}
.Labtable >>> .el-table__row {
  height: 68px;
}
.fywarp {
  min-width: 1140px;
  /* width: 1624px; */
  height: 40px;
  margin-left: 24px;
  background-color: #fbfbfb;
  border-radius: 4px;
  display: flex;
  align-items: center;
  margin-top: 18px;
  font-size: 14px;
}

.editimg {
  width: 24px;
  height: 24px;
  cursor: pointer;
}
.bqtitle {
  width: 1680px;
  height: 40px;
  margin-top: 8px;
  display: flex;
  align-items: center;
  padding-left: 28px;
  color: #4f4f4f;
  font-size: 16px;
}
.labdead {
  min-width: 1240px;
  /* width: 1680px; */
  height: 74px;
  display: flex;
  align-items: center;
  padding-left: 24px;
  border-bottom: 1px solid #e8eaec;
}
.upFileButton {
  width: 140px;
  height: 44px;
  background: linear-gradient(to left, #ef190f, #f04d30);
  /* background: #EF190F; */
  border-radius: 4px;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  cursor: pointer;
  white-space: nowrap;
  justify-content: center;
}
.delbtn {
  width: 51px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: rgba(204, 204, 204, 0.1);
  margin-left: 22px;
  color: #4f4f4f;
  cursor: pointer;
  font-size: 14px;
}

.tarLeftSearchBox {
  width: 526px;
  height: 44px;
  position: relative;
  margin-left: auto;
  margin-right: 40px;
  border-radius: 5px;
  border-color: #e8eaec;
}

.tarLeftSearchBox img {
  height: 44px;
  width: 44px;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
}

.tarLeftSearch {
  width: 526px;
  height: 44px;
  padding: 12px 16px;
  padding-right: 56px;
  border-radius: 5px;
  border: 1px solid #e8eaec;
}
input::-webkit-input-placeholder {
  color: #6f6f6f;
  font-size: 14px;
}
.leftmore {
  width: 30px;
  height: 30px;
  border-right: 1px solid #cccccc;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;
}
.rightmore {
  width: 30px;
  height: 30px;
  border-left: 1px solid #cccccc;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;
}
.lable >>> .el-dialog {
  width: 400px;
}
</style>
