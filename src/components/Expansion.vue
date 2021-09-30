<template>
    <div>
      <el-dialog
        :title="$t('Expansion')"
        :visible.sync="showExp"
        :append-to-body="true"
        :center="true"
      >
<!--        申请步骤-->
        <ul class="stepsMenue">
          <li class="members">
            <div :class="active === 0 ? 'order' : 'noActive'">1</div>
            <span :class="active === 0 ? 'label' : 'changeLab'">{{ $t('Application') }}</span>
          </li>
          <span class="el-icon-arrow-right arrows"></span>
          <li class="members">
            <div :class="active === 1 ? 'order' : 'noActive'">2</div>
            <span :class="active === 1 ? 'label' : 'changeLab'">{{ $t('Review') }}</span>
          </li>
          <span class="el-icon-arrow-right arrows"></span>
          <li class="members">
            <div :class="active === 2 ? 'order' : 'noActive'">3</div>
            <span :class="active === 2 ? 'label' : 'changeLab'">{{ $t('Approved') }}</span>
          </li>
        </ul>
<!--        历史申请-->
        <div v-show="active !== 0">
          <p class="prompt review" v-show="active === 1 && auditStatus === 1">{{ $t('waitting') }}</p>
          <p class="prompt review" v-show="active === 1 && auditStatus === 3">{{ $t('upset') }}</p>
          <p class="prompt review" v-show="active === 2">{{ $t('great') }}</p>
        </div>
        <div class="applicateHistory" v-show="total > 0">
          <div class="historyTitle">
            <span v-if="total < '2'">{{$t('hint102') + ' ' + total + ' ' + $t('hint103')}}</span>
            <span v-if="total > '1'">{{$t('hint102') + ' ' + total + ' ' + $t('hint104')}}</span>
            <el-button type="text" v-if="showHistory === true" class="shrink" @click="showHistory = !showHistory">{{ $t('close') }}</el-button>
            <el-button type="text" v-else class="shrink" @click="showHistory = !showHistory">{{ $t('open') }}</el-button>
          </div>
          <el-collapse-transition>
            <div class="historyContent" v-show="showHistory">
              <div style="border: 1px solid #CCCCCC; margin-top: 20px;" v-for="(temp, index) in failArray" :key="index">
                <el-table
                  :data="temp"
                  style="width: 100%;">
                  <el-table-column
                    prop="createTime"
                    :label="$t('applyTime')"
                    :show-overflow-tooltip="true">
                  </el-table-column>
                  <el-table-column
                    prop="applyCapacity"
                    :label="$t('applyCapacity')">
                    <template slot-scope="scope">
                      <span v-if="scope.row.applyCapacity === 1">100 GiB</span>
                      <span v-else-if="scope.row.applyCapacity === 2">500 GiB</span>
                      <span v-else-if="scope.row.applyCapacity === 3">1.5 TiB</span>
                      <span v-else-if="scope.row.applyCapacity === 4">3 TiB</span>
                      <span v-else-if="scope.row.applyCapacity === 5">5 TiB</span>
                      <span v-else-if="scope.row.applyCapacity === 6">{{ getStr(scope.row.retApplyApacityFront) }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    :label="$t('reviewStatus')">
                    <template slot-scope="scope">
                      <span v-show="scope.row.auditStatus === 1" class="check">{{ $t('reviewing') }}</span>
                      <span v-show="scope.row.auditStatus === 2">{{ $t('pass') }}</span>
                      <span v-show="scope.row.auditStatus === 3">{{ $t('return') }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="remarks"
                    :label="$t('FeedBack')"
                    v-if="temp.auditStatus !== 1"
                    :show-overflow-tooltip="true">
                    <template slot-scope="scope">
                      <span v-if="scope.row.remarks">{{ scope.row.remarks }}</span>
                      <span v-else>-</span>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
              <div style="border: 1px solid #CCCCCC; margin-top: 20px;" v-for="(temp, index) in allDatas" :key="index">
                <el-table
                  :data="temp"
                  style="width: 100%;">
                  <el-table-column
                    min-width="50%"
                    prop="createTime"
                    :label="$t('applyTime')"
                    :show-overflow-tooltip="true">
                  </el-table-column>
                  <el-table-column
                    min-width="80%"
                    prop="applyCapacity"
                    :label="$t('applyCapacity')">
                    <template slot-scope="scope">
                      <span v-if="scope.row.applyCapacity === 1">100 GiB</span>
                      <span v-else-if="scope.row.applyCapacity === 2">500 GiB</span>
                      <span v-else-if="scope.row.applyCapacity === 3">1.5 TiB</span>
                      <span v-else-if="scope.row.applyCapacity === 4">3 TiB</span>
                      <span v-else-if="scope.row.applyCapacity === 5">5 TiB</span>
                      <span v-else-if="scope.row.applyCapacity === 6">{{ getStr(scope.row.retApplyApacityFront) }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="actualCapacity"
                    min-width="50%"
                    :label="$t('actualCapacity')">
                    <template slot-scope="scope">
                      <span v-if="scope.row.auditStatus === 2">{{ getStr(scope.row.capacityFront) }}</span>
                      <span v-else>-</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    min-width="45%"
                    :label="$t('reviewStatus')"
                    :show-overflow-tooltip="true">
                    <template slot-scope="scope">
                      <span v-show="scope.row.auditStatus === 1" class="check">{{ $t('reviewing') }}</span>
                      <span v-show="scope.row.auditStatus === 2">{{ $t('pass') }}</span>
                      <span v-show="scope.row.auditStatus === 3">{{ $t('return') }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="remarks"
                    min-width="50%"
                    :label="$t('FeedBack')"
                    :show-overflow-tooltip="true">
                    <template slot-scope="scope">
                      <span v-if="scope.row.remarks">{{ scope.row.remarks }}</span>
                      <span v-else>-</span>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </el-collapse-transition>
        </div>
        <div class="applicateCapacity" v-show="active === 0">
          <h4 class="applicateTitle">{{ $t('capacity') }}</h4>
          <div class="content">
            <div class="contentType">
              <span class="contentLabel"><span class="starSign">*</span>{{ $t('capacitySize') }}</span>
              <ul class="contentList">
                <li v-for="(item, index) in sizeType" :key="index">
                  <div :class="sizeIndex === index ? 'checked' : 'type'" @click="chooseItem(item,index)">{{ item.typeValue }}</div>
                </li>
              </ul>
              <div class="customize" v-if="dataSizeType === 6">
                <el-input v-model="newSize" type="text" size="medium" class="customizeInput"></el-input>
                <span>TiB</span>
              </div>
            </div>
            <div class="footLine"></div>
          </div>
        </div>
        <div class="footerBtn">
          <button class="button cancel" @click="cancel">{{ $t('cancel') }}</button>
          <button class="button sure" v-show="active === 0" @click="submit">{{ $t('Sure') }}</button>
          <button class="button sure" v-show="active === 1 && auditStatus === 3" @click="resetNew">{{ $t('Reapply') }}</button>
          <button class="button sure" v-show="active === 2"  @click="createNew">{{ $t('appExpansion') }}</button>
        </div>
      </el-dialog>
    </div>
</template>

<script>
import { EventBus } from '../../event-bus.js'
import apis from '../common/apis.js'
export default {
  name: 'Expansion',
  data () {
    return {
      showExp: false,
      active: 0,
      totalNum: 0,
      showHistory: true,
      allDatas: [],
      sizeType: [
        {typeValue: '100GiB', typeCode: 1},
        {typeValue: '500GiB', typeCode: 2},
        {typeValue: '1.5TiB', typeCode: 3},
        {typeValue: '3TiB', typeCode: 4},
        {typeValue: '5TiB', typeCode: 5},
        {typeValue: this.$t('Customized'), typeCode: 6}],
      textarea: '',
      sizeIndex: null,
      Id: null,
      dataSizeType: null,
      remarks: null,
      total: null,
      timer: null,
      auditStatus: null,
      failArray: null,
      newSize: null
    }
  },
  mounted () {
    EventBus.$on('sendId', id => {
      this.Id = id
      console.log('getId:', id)
    })
    EventBus.$on('expansion', msg => {
      console.log('allDatas:', msg)
      this.showExp = true
      this.total = msg.total
      // this.allDatas = msg.records
      this.filterStatus(msg.records)
      let t = msg.records[msg.records.length - 1]
      if (msg.total > 0) {
        let auditStatus = t[0].auditStatus
        this.auditStatus = auditStatus
        if (auditStatus === 1 || auditStatus === 3) {
          this.active = 1
          // this.sign = t[0].dataType
          // this.setTimer(this.id)
        } else if (auditStatus === 2) {
          this.active = 2
        }
      }
    })
  },
  beforeDestroy () {
    clearInterval(this.timer)
    this.timer = null
  },
  watch: {
    active (newVal, oldVal) {
      if (newVal === 3) {
        this.showExp = false
        this.active = 0
      }
    },
    showExp (newVal, oldVal) {
      if (newVal === false) {
        this.sizeIndex = null
        this.remarks = null
        clearInterval(this.timer)
      }
    }
  },
  methods: {
    next () {
      if (this.active++ > 2) {
        this.active = 0
      }
    },
    deleteRow (index, rows) {
      rows.splice(index, 1)
      clearInterval(this.timer)
    },
    chooseItem (val, index) {
      this.sizeIndex = index
      this.dataSizeType = val.typeCode
      console.log(val)
    },
    resetData () {
      this.dataSizeType = null
      this.sizeIndex = null
      this.remarks = null
      this.active = 0
      clearInterval(this.timer)
    },
    cancel () {
      this.showExp = false
      this.resetData()
    },
    submit () {
      if (this.dataSizeType === null && this.newSize === null) {
        this.$message.error({
          content: this.$t('hint1'),
          background: true,
          duration: 3
        })
      } else if (this.dataSizeType !== null || this.newSize !== null) {
        let that = this
        let token = localStorage.token
        let parms = {
          id: this.Id,
          dataSize: this.newSize,
          dataSizeType: this.dataSizeType,
          remarks: this.remarks
        }
        this.$axios({
          method: 'post',
          url: apis.dataMainBodyCapacityApi,
          data: parms,
          headers: {
            'Content-Type': 'application/json',
            Bearer: token
          }
        }).then((r) => {
          console.log(r)
          if (r.status === 200) {
            console.log('ggg', r)
            this.next()
            this.setTimer(parms.id)
          } else if (!r) {
            console.log('aaaaa', r)
          }
        }).catch((e) => {
          this.$message.info({
            content: this.$t('hint53'),
            background: true,
            duration: 3
          })
        })
      }
    },
    setTimer (val) {
      this.timer = setInterval(() => {
        this.checkHistoryList(val)
      }, 1000)
    },
    checkHistoryList (id) {
      // 扩容响应历史
      // console.log('iddd:', id)
      let that = this
      let token = localStorage.token
      let parms = {
        id: id,
        ids: []
      }
      this.$axios({
        method: 'post',
        url: apis.dataMainBodyCapacityListApi,
        data: parms,
        headers: {
          'Content-Type': 'application/json',
          Bearer: token
        }
      }).then((r) => {
        console.log(r)
        if (r.status === 200) {
          let msg = r.data
          this.total = msg.total
          // this.allDatas = msg.records
          this.filterStatus(msg.records)
          let t = msg.records[msg.records.length - 1]
          this.auditStatus = t[0].auditStatus
          if (this.auditStatus === 2) {
            this.active = 2
          }
        }
      }).catch(e => {
        this.$message.info({
          content: this.$t('hint116'),
          background: true,
          duration: 3
        })
      })
    },
    createNew () {
      this.resetData()
    },
    resetNew () {
      this.resetData()
    },
    // 筛选出退回状态的数据
    filterStatus (val) {
      val.forEach(e => {
        if (e.auditStatus === 3) {
          this.failArray = null
          this.failArray.push(e)
          this.failArray = [...new Set(this.failArray)]
        } else {
          this.allDatas = []
          this.allDatas.push(e)
          this.allDatas = [...new Set(this.allDatas)]
        }
      })
      console.log('退回:', this.failArray)
      console.log('非退回:', this.allDatas)
    },
    getStr (str) {
      let v = str.substring(str.length - 2)
      if (v === 'MB') {
        return (str.substring(0, str.length - 2) + 'MiB')
      } else if (v === 'GB') {
        return (str.substring(0, str.length - 2) + 'GiB')
      } else if (v === 'TB') {
        return (str.substring(0, str.length - 2) + 'TiB')
      }
    }
  }
}
</script>

<style scoped>
  .stepsMenue {
    /*width: 384px;*/
    padding-right: 50px;
    display: flex;
    justify-content: space-between;
    line-height: 32px;
  }
  .members {
    display: flex;
    font-size: 14px;
    font-weight: 400;
    color: #333333;
  }
  .order, .noActive {
    text-align: center;
    height: 32px;
    width: 32px;
    border-radius: 50%;
    font-size: 20px;
    margin-right: 10px;
  }
  .order {
    background-color: #EF190F;
    color: #FFFFFF;
  }
  .noActive {
    background: #FFFFFF;
    border: 1px solid #CCCCCC;
    border-radius: 50%;
    color: #CCCCCC;
  }
  .prompt {
    height: 40px;
    background: #FFF3F2;
    opacity: 1;
    border-radius: 2px;
    padding-left: 20px;
    margin-top: 34px;
  }
  .review {
    font-size: 14px;
    font-weight: 400;
    line-height: 40px;
    color: #EF190F;
    opacity: 1;
  }
  .label {
    font-weight: 400;
    font-size: 14px;
    color: #333333;
  }
  .changeLab {
    font-weight: 400;
    font-size: 14px;
    color: #CCCCCC;
  }
  .arrows {
    line-height: 32px;
    font-size: 16px;
    font-weight: 500;
    color: #A1A1A1;
    opacity: 1;
  }
  .shrink {
    color: #EF190F;
  }
  .applicateCapacity {
    margin-top: 28px;
  }
  .applicateTitle {
    font-size: 16px;
    font-weight: 400;
    color: #333333;
  }
  .historyTitle {
    margin-top: 20px;
  }
  .content {
    margin-top: 20px;
  }
  .contentList {
    margin-top: 4px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .contentList li {
    margin-right: 10px;
  }
  .contentType {
    position: relative;
    margin-bottom: 30px;
  }
  .customize {
    margin-top: 15px;
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 2px;
    left: 110px;
  }
  .customize >>> .el-input__inner:focus {
    border-color: #ef190f;
  }
  .setRight {
    margin-right: 20px;
  }
  .customizeInput {
    width: 80px;
    height: 32px;
    margin-right: 10px;
  }
  .type {
    cursor: pointer;
    width: 90px;
    padding: 0;
    text-align: center;
    line-height: 32px;
    background: #F9F9F9;
    opacity: 1;
    border-radius: 2px;
    border: 1px solid #ffffff;
    margin-top: 15px;
  }
  .type:hover {
    color: #EF190F;
    border: 1px solid #EF190F;
    box-sizing: border-box;
  }
  .type:focus {
    border-color: #EF190F;
    color: #EF190F;
  }
  .checked {
    cursor: pointer;
    width: 90px;
    padding: 0;
    text-align: center;
    line-height: 32px;
    background: #F9F9F9;
    opacity: 1;
    border-radius: 2px;
    border: 1px solid #EF190F;
    color: #EF190F;
    margin-top: 15px;
  }
  .checked:focus {
    border-color: #EF190F;
    color: #EF190F;
    line-height: 16px;
  }
  .reason {
    margin-top: 20px;
  }
  .footLine {
    width: 100%;
    height: 1px;
    background: #E8EAEC;
    opacity: 1;
  }
  .footerBtn {
    margin: 20px 0;
    text-align: right;
  }
  .button {
    width: 100px;
    height: 40px;
    border: 1px solid #4F4F4F;
    opacity: 1;
    border-radius: 4px;
    box-sizing: border-box;
  }
  .cancel {
   background-color: #FFFFFF;
  }
  .sure {
    background-color: #EF190F;
    color: #FFFFFF;
    border-color: #FFFFFF;
  }
  .check {
    font-size: 14px;
    font-weight: 400;
    color: #FF9F0E;
    opacity: 1;
  }
  .deleteStyle {
    font-size: 14px;
    font-weight: 400;
    color: #EF190F;
    opacity: 1;
  }
  .starSign {
    color: #EF190F;
  }
</style>
