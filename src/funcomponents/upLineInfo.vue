<style scoped>
  .upLIneInfo {
    z-index: -1;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .zhezhaoUplineShowClass {
    z-index: 99;
    background: rgba(0, 0, 0, 0.2);
  }

  .upLineBox {
    position: absolute;
    top: 0;
    bottom: 0;
    right: -16.58rem;
    width: 16.58rem;
    background: #ffffff;
    box-shadow: -0.04rem 0px 0.1rem 0px rgba(0, 0, 0, 0.15);
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 400;
    transition: right linear 0.3s;
    z-index: -1;
  }

  .upLineBoxShowClass {
    right: 0;
    z-index: 99;
  }

  .upLineHead {
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #e8eaec;
    padding: 0 22px;
    font-size: 21px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #545767;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .upLineHead img {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }

  .upLineTable {
    padding: 0 20px;
  }

  .upLineTableBox {
    overflow-y: scroll;
    overflow-x: scroll;
  }

  .upLineTableBox::-webkit-scrollbar {
    height: 8px;
    width: 8px;
    border-radius: 5px;
  }

  .upLineTableBox::-webkit-scrollbar-thumb {
    background: #d8d8d8;
    border-radius: 4px;
  }

  .upLineTableHead {
    display: flex;
  }

  .tableItem130 {
    width: 130px;
    flex-shrink: 0;
  }

  .tableItem154 {
    width: 154px;
    flex-shrink: 0;
  }

  .tableItem100 {
    width: 100px;
    flex-shrink: 0;
  }

  .tableItem126 {
    width: 126px;
    justify-content: flex-end;
    padding-right: 10px;
    flex-shrink: 0;
  }

  .tableItem109 {
    width: 110px;
    justify-content: flex-end;
    padding-right: 10px;
    padding-left: 0px !important;
    flex-shrink: 0;
  }

  .tableItem100R {
    width: 110px;
    justify-content: flex-end;
    padding-right: 10px;
    padding-left: 0px !important;
    flex-shrink: 0;
  }

  .tableItem140 {
    width: 140px;
    justify-content: flex-end;
    padding-right: 10px;
    flex-shrink: 0;
  }

  .tableItem134 {
    width: 144px;
    justify-content: flex-end;
    padding-right: 10px;
    flex-shrink: 0;
  }

  .tableItem94 {
    width: 94px;
    justify-content: flex-end;
    padding-right: 10px;
    flex-shrink: 0;
  }

  .upLineTableHead div {
    height: 50px;
    display: flex;
    align-items: center;
    font-size: 12px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #333333;
    padding-left: 10px;
    cursor: pointer;
    flex-shrink: 0;
  }

  .upLineTableHead div img {
    width: 16px;
    height: 16px;
    margin-left: 5px;
  }

  .upLineTableItem {
    width: 110%;
    display: flex;
  }

  .upLineTableItemBox {
    width: 100%;
    height: 490px;
  }

  .upLineTableItem div {
    height: 44px;
    display: flex;
    align-items: center;
    font-size: 12px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 400;
    color: #333333;
    padding-left: 10px;
    padding-right: 10px;
    overflow: hidden;
  }

  .upLineTableItem div img {
    width: 20px;
    height: 20px;
  }

  .tableItemSpeceil {
    justify-content: space-between;
    padding-right: 20px;
    position: relative;
  }

  .tableItemSpeceil img {
    position: absolute;
    right: 0;
    width: 20px;
    height: 20px;
    cursor: pointer;
    background-color: #F7FAF8;
  }

  .getMoreClass {
    margin-top: 8px;
    width: 100%;
    height: 26px;
    background: #f7faf8;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: #808695;
    cursor: pointer;
    margin-bottom: 8px;
  }

  .getMoreClass img {
    width: 16px;
    height: 16px;
    margin-left: 5px;
  }

  .blight {
    background: #F7FAF8;
  }

  .kong {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #808695;
  }

  .kong img {
    width: 100px;
    height: 100px;
  }

  .upLineHeadLeft {
    display: table-cell;
    vertical-align: bottom;
  }

  .fileName {
    font-size: 14px;
    color: #8F93A0;
    margin-left: 16px;
  }
</style>
<template>
  <div class="upLIneInfo" @click="closeUpLineMaskFun" :class="{ zhezhaoUplineShowClass: upLineShow }">
    <div class="upLineBox" @click.stop="" :class="{ upLineBoxShowClass: upLineShow }">
      <div class="upLineHead">
        <div class="upLineHeadLeft">
          <span>{{ $t('UplinkInfo') }}</span>
          <span class="fileName">{{fileName}}</span>
        </div>
        <img src="../assets/zhezhao/close.png" alt="" @click.stop="closeUpLineMaskFun(1)" />
      </div>
      <div class="upLineTable">
        <div class="upLineTableBox">
          <div class="upLineTableHead">
            <div class="tableItem100">
<!--              订单ID-->
              <span>{{ $t('DealID') }}</span>
            </div>
            <div class="tableItem154">
<!--              所属消息-->
              <span>{{ $t('Attached') }}</span>
            </div>
            <div class="tableItem154">
<!--              文件CId-->
              <span>{{ $t('PieceCID') }}</span>
            </div>
            <div class="tableItem154">
<!--              订单Cid-->
              <span>{{ $t('DealCID') }}</span>
            </div>
            <div class="tableItem126">
<!--             文件大小-->
              <span>{{ $t('Filesize') }}</span>
            </div>
            <div class="tableItem100R" style="justify-content: flex-end">
<!--             价格-->
              <span>{{ $t('Price') }}</span>
            </div>
            <div class="tableItem140">
<!--              矿工抵押-->
              <span>{{ $t('Miner') }}</span>
            </div>
            <div class="tableItem140">
<!--              上链开始时间-->
              <span>{{ $t('Starttime') }}</span>
            </div>
            <div class="tableItem140">
<!--              上连结束时间-->
              <span>{{ $t('EndTime') }}</span>
            </div>
          </div>
          <div class="upLineTableItemBox">
            <div class="upLineTableItem" @mouseover="selectStyle(item)" @mouseout="outStyle(item)" :class="{blight:item.background===1}" v-for="(item, index) in tableList" :key="index">
              <div class="tableItem100 tableItemSpeceil">
                <span>{{item.deal_id}}</span>
                <img src="../assets/fileImg/icon_copy@2x.png" v-if="item.select" v-clipboard:copy="item.deal_id" v-clipboard:success="copy" v-clipboard:error="onError" alt="" />
              </div>
              <div class="tableItem154 tableItemSpeceil">
                <span>{{item.message_id}}</span>
                <img class="copyImg" src="../assets/fileImg/icon_copy@2x.png" v-if="item.select" v-clipboard:copy="item.message_id" v-clipboard:success="copy" v-clipboard:error="onError" alt="" />
              </div>
              <div class="tableItem154 tableItemSpeceil">
                <span>{{item.piece_cid}}</span>
                <img src="../assets/fileImg/icon_copy@2x.png" v-if="item.select" v-clipboard:copy="item.piece_cid" v-clipboard:success="copy" v-clipboard:error="onError" alt="" />
              </div>
              <div class="tableItem154 tableItemSpeceil">
                <span>{{item.proposal_cid}}</span>
                <img src="../assets/fileImg/icon_copy@2x.png" v-if="item.select" v-clipboard:copy="item.proposal_cid" v-clipboard:success="copy" v-clipboard:error="onError" alt="" />
              </div>
              <div class="tableItem126">
                <span>{{item.pieceSizeShow}}</span>
              </div>
              <div class="tableItem100R">
                <span>{{item.price + 'Fil'}}</span>
              </div>
              <div class="tableItem140">
                <span>{{item.miner_collateral + 'attoFIL'}}</span>
              </div>
              <div class="tableItem140">
                <span>{{setDate(item.create_time)}}</span>
              </div>
              <div class="tableItem140" v-if="item.state === 7">
                <span>{{setDate(item.update_time)}}</span>
              </div>
              <div class="tableItem140" v-else>
                <span>-</span>
              </div>
            </div>
            <div class="kong" v-if="total===0">
              <img src="../assets/fileImg/空@2x.png" alt="">
              <span>{{ $t('noInfo') }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import apis from '../common/apis.js'
import base from '../common/baseUrl'
export default {
  data () {
    return {
      upLineShow: false,
      tableList: [],
      page: 1,
      total: 1,
      UNITS: ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
      STEP: 1024
    }
  },
  watch: {
    upLineBoolean (n, o) { // n为新值,o为旧值;
      this.upLineShow = n
    },
    fileId (n, o) {
      this.getDealListByFileIdFun(1)
    }
  },
  created () {
    this.upLineShow = this.upLineBoolean
  },
  props: {
    bucketName: null,
    upLineBoolean: false,
    fileId: null,
    fileName: null
  },
  methods: {
    format: function format (value, power) {
      return (value / Math.pow(this.STEP, power)).toFixed(2) + this.UNITS[power]
    },
    readFileSizeUnit: function (value) {
      let that = this
      value = parseFloat(value, 10)
      for (var i = 0; i < that.UNITS.length; i++) {
        if (value < Math.pow(that.STEP, i)) {
          if (that.UNITS[i - 1]) {
            return that.format(value, i - 1)
          }
          return value + that.UNITS[i]
        }
      }
      return that.format(value, i - 1)
    },
    selectStyle (item) {
      this.tableList.forEach(element => {
        element.select = false
      })
      item.select = true
    },
    outStyle (item) {
      console.log('你好')
      // item.select = false
    },
    copy () {
      this.$message.info({
        content: this.$t('hint38'),
        // background: true,
        duration: 3
      })
    },
    onError (e) {
      console.log(e)
    },
    // 关闭上链信息
    closeUpLineMaskFun () {
      this.$emit('onChange', 1)
    },
    hideWord (value) {
      let newString = ''
      if (value) {
        if (value.length > 23) {
          let startStr = value.slice(0, 6)
          let endStr = value.slice(value.length - 4)
          newString = startStr + '...' + endStr
        } else {
          return value
        }
      }
      return newString
    },
    setDate (value) {
      let Y = new Date(value).getFullYear()
      let M = new Date(value).getMonth() + 1
      let D = new Date(value).getDate()
      let h = new Date(value).getHours()
      let m = new Date(value).getMinutes()
      let s = new Date(value).getSeconds()
      let fullTimes = Y + '-' + M + '-' + D + ' ' + h + ':' + m + ':' + s
      return fullTimes
    },
    // 查看上链信息 getDealListByFileIdApi
    getDealListByFileIdFun (page) {
      let obj = {}
      let params = {}
      params.bucketName = this.bucketName
      params.prefix = ''
      params.fileId = this.fileId
      obj.id = 1
      obj.jsonrpc = '2.0'
      obj.method = 'web.ListDeals'
      obj.params = params
      let minioToekn = localStorage.minioToekn
      this.$axios({
        method: 'post',
        url: base.homeMinioUrl + '/api/webrpc',
        data: obj,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + minioToekn
        }
      })
        .then((res) => {
          if (res.data.result.objects) {
            res.data.result.objects.forEach((element, index) => {
              element.select = false
              element.pieceCidShow = this.hideWord(element.piece_cid)
              element.dealCidShow = this.hideWord(element.deal_id)
              element.proposalCidShow = this.hideWord(element.proposal_cid)
              element.messageIdShow = this.hideWord(element.message_id)
              element.pieceSizeShow = this.readFileSizeUnit(element.piece_size)
              // element.clientAddressShow = this.hideWord(element.clientAddress);
              if (index % 2 !== 0) {
                element.background = 0
              } else {
                element.background = 1
              }
            })
            this.tableList = res.data.result.objects
            this.total = res.data.result.objects.length
          } else {
            this.total = 0
          }
        })
        .catch((err) => {
          console.log(err)
          this.$message.error({
            content: this.$t('hint125'),
            background: true,
            duration: 5
          })
        })
    }
  }

}
</script>
