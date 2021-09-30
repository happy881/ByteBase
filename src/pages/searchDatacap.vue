<template>
    <div class="setTopHeight">
      <div class="searchBox">
        <el-input :placeholder="$t('dataCap')" clearable v-model="input" @keyup.enter.native="test" class="input-with-btn">
          <el-button slot="append" @click="test">Check</el-button>
        </el-input>
<!--        <el-button class="setColor" @click="test">Check</el-button>-->
      </div>
      <div class="dataDapContent">
        <div>
          <div class="setlogo">
            <img class="lujingImg" src="../assets/zhezhao/lujingl.png" alt="">
            <p>{{ $t('hint97') }}</p>
          </div>
          <div class="setTable">
            <el-table
              :header-cell-style="{background:'#EF301D', color:'#FFFFFF'}"
              :data="tableData"
              stripe
              style="width: 100%"
              lazy>
              <el-table-column
                label="ID"
                width="150">
                <template slot-scope="scope">
                  <span v-if="scope.row.lookUpId !== null">{{ scope.row.lookUpId }}</span>
                  <span v-else-if="scope.row.lookUpId === null">-</span>
                </template>
              </el-table-column>
              <el-table-column
                label="Wallet Address"
                :show-overflow-tooltip="true">
                <template slot-scope="scope">
                  <div class="setCopy">
                    <span>{{ scope.row.walletAddress }}</span>
                  </div>
                </template>
              </el-table-column>
              <el-table-column
                label="DataCap"
                width="200">
                <template slot-scope="scope">
                  <span>{{ getStr(scope.row.dataCap) }}</span>
                </template>
              </el-table-column>
              <!-- ele 暂无数据插槽 -->
              <template slot="empty">
                <div class="noData notice">
                  <p>{{ $t('hint43') }}</p>
                </div>
              </template>
            </el-table>
          </div>
        </div>
      </div>
      <div class="setZindex">
        <foot></foot>
      </div>
    </div>
</template>

<script>
import apis from '../common/apis'
import foot from '../components/foot'
export default {
  inject: ['reload'],
  name: 'searchDatacap',
  components: {
    foot
  },
  data () {
    return {
      dataCap: sessionStorage.getItem('datacap'),
      signs: sessionStorage.getItem('checkSign'),
      tableData: [],
      input: '',
      watchStatus: false
    }
  },
  mounted () {
    if (this.dataCap) {
      this.check()
    }
  },
  methods: {
    getData () {
      let token = localStorage.token
      let params = {
        walletAddress: this.dataCap
      }
      console.log('111:', params)
      this.$axios({
        method: 'post',
        url: apis.getDataCapByWalletApi,
        data: params,
        headers: {
          'Content-Type': 'application/json',
          Bearer: token
        }
      }).then(res => {
        if (res.status === 200) {
          // res.data.dataCap
          // this.getStr(res.data.dataCap)
          this.tableData.push(res.data)
          // console.log('测试钱包地址:', this.getStr(res.data.dataCap))
        }
      }).catch(err => {
        this.$message.info({
          content: this.$t('hint43'),
          background: true,
          duration: 5
        })
      })
    },
    check () {
      // f1 41位  f3 86位
      if (this.signs === 'true' && (this.dataCap.length === 41 || this.dataCap.length === 86)) {
        this.getData()
      } else {
        let token = localStorage.token
        let params = {
          walletAddress: null
        }
        this.$axios({
          method: 'post',
          url: apis.getDataCapByWalletApi,
          data: params,
          headers: {
            'Content-Type': 'application/json',
            Bearer: token
          }
        }).then(res => {
          if (res.status === 200) {
            this.tableData = []
            this.tableData.push(res.data)
            this.input = ''
          }
        }).catch(err => {
          this.$message.info({
            content: this.$t('hint43'),
            background: true,
            duration: 5
          })
          this.input = ''
        })
        this.tableData = []
        sessionStorage.removeItem('datacap')
      }
    },
    getStr (str) {
      let v = str.substring(str.length - 2)
      if (v === 'MB') {
        return (str.substring(0, str.length - 2) + 'MiB')
      } else if (v === 'GB') {
        return (str.substring(0, str.length - 2) + 'GiB')
      } else if (v === 'TB') {
        return (str.substring(0, str.length - 2) + 'TiB')
      } else if (str === '0') {
        return (str + ' TiB')
      }
    },
    test () {
      let rex = '^(([f][1])|([f][3]))'
      let token = localStorage.token
      let input = this.input.replace(/\s/ig,'')
      this.signs = new RegExp(rex).test(input)
      if (this.signs) {
        let params = {
          walletAddress: input
        }
        if (input.length === 41 || input.length === 86) {
          this.$axios({
            method: 'post',
            url: apis.getDataCapByWalletApi,
            data: params,
            headers: {
              'Content-Type': 'application/json',
              Bearer: token
            }
          }).then(res => {
            if (res.status === 200) {
              this.tableData = []
              this.tableData.push(res.data)
              this.input = ''
            }
          }).catch(err => {
            this.$message.info({
              content: this.$t('hint43'),
              background: true,
              duration: 5
            })
            this.input = ''
          })
        } else {
          let params = {
            walletAddress: null
          }
          this.$axios({
            method: 'post',
            url: apis.getDataCapByWalletApi,
            data: params,
            headers: {
              'Content-Type': 'application/json',
              Bearer: token
            }
          }).then(res => {
            if (res.status === 200) {
              this.tableData = []
              this.tableData.push(res.data)
              this.input = ''
            }
          }).catch(err => {
            this.$message.info({
              content: this.$t('hint43'),
              background: true,
              duration: 5
            })
            this.input = ''
          })
          this.tableData = []
          sessionStorage.removeItem('datacap')
        }
      } else {
        let params = {
          walletAddress: null
        }
        this.$axios({
          method: 'post',
          url: apis.getDataCapByWalletApi,
          data: params,
          headers: {
            'Content-Type': 'application/json',
            Bearer: token
          }
        }).then(res => {
          if (res.status === 200) {
            this.tableData = []
            this.tableData.push(res.data)
            this.input = ''
          }
        }).catch(err => {
          this.$message.info({
            content: this.$t('hint43'),
            background: true,
            duration: 5
          })
          this.input = ''
        })
        this.tableData = []
        sessionStorage.removeItem('datacap')
      }
      this.watchStatus = true
    }
  }
}
</script>

<style scoped>
.setTopHeight {
  margin-top: 70px;
  /*背景色铺满全屏*/
  background-color: #F0F0F0;
  background-size: 100% 100%;
  height: 100%;
  position: fixed;
  width: 100%;
}
  .dataDapContent {
    /*width: 100%;*/
    height: 100%;
    padding: 31px 320px;
    background-color: #FFFFFF;
  }
  .dataDapContent >>> .el-table__body {
    background: #F0F0F0;
    border-radius: 5px 5px 0px 0px;
  }
  .dataDapContent >>> .el-table__empty-block {
    background: #F0F0F0;
  }
  .dataDapContent >>> .el-table {
    border-radius: 5px 5px 0px 0px;
  }
  .setlogo {
    display: flex;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    color: #4F4F4F;
    opacity: 1;
  }
  .lujingImg {
    width: 21px;
    height: 24px;
    /*background: #EF301D;*/
    opacity: 1;
    margin-right: 11px;
  }
  .setTable {
    margin-top: 17px;
  }
  .notice p {
    text-align: center;
    color: #909399;
    font-size: 16px;
  }
.setZindex {
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 999;
}
.searchBox {
  /*width: 1920px;*/
  padding: 30px 320px;
  height: 110px;
  background: #F0F0F0;
  opacity: 1;
}
.searchBox >>> .el-input__inner:focus {
  border-color: #ef190f;
}
.input-with-btn {
  width: 650px;
  height: 50px;
}
.input-with-btn >>> .el-input__inner {
  height: 50px;
}
.input-with-btn >>> .el-input-group__append, .el-input-group__prepend {
  background: #EF1F13;
  color: #FFFFFF;
  border: 1px solid #ef190f;
}
.setColor {
  height: 50px;
  background: #EF1F13;
  color: #FFFFFF;
}
</style>
