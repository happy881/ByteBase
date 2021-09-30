<template>
  <div>
    <div class="header">
      <div class="header-content">
        <img class="headlogo" src="../assets/byteimg/logo.png" alt="" @click="goHome" />
        <h3 class="setTitle">ByteBase Filecoin Plus Dashboard</h3>
      </div>
    </div>
    <div class="content">
      <div class="content-top">
        <div class="content-top-left">
          <img class="lujingImg" src="../assets/zhezhao/lujingl.png" alt="">
          <p>DataCap Application Record</p>
        </div>
        <div class="content-top-right">
          <h4>Total：<span class="setFontWeight">100TiB</span></h4>
          <h4>Allocated：<span>5%</span></h4>
          <h4>Unallocated：<span>95%</span></h4>
        </div>
      </div>
      <div class="content-center">
        <el-table
          :header-cell-style="{background:'#EF301D', color:'#FFFFFF'}"
          :data="tableData"
          stripe
          style="width: 100%"
          lazy>
          <el-table-column
            prop="name"
            label="Client Name"
            width="300">
          </el-table-column>
          <el-table-column
            label="Filecoin Address"
            width="380">
            <template slot-scope="scope">
              <div class="setCopy">
                <span>{{ scope.row.address }}</span>
                <img @click="copy(scope.row)" style="width: 14px;cursor: pointer" src="../assets/zhezhao/copyl.png" alt="">
              </div>
            </template>
          </el-table-column>
          <el-table-column
            prop="allocated"
            label="DataCap Allocated"
            width="300">
          </el-table-column>
          <el-table-column
            prop="time"
            label="Time">
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="setFoot">
      <foot></foot>
    </div>
  </div>
</template>

<script>
import foot from '@/components/foot'
import {EventBus} from '../../event-bus'
export default {
  name: 'dashboard',
  components: {
    foot
  },
  created () {
    EventBus.$emit('headhidden', false)
  },
  data () {
    return {
      tableData: [{
        name: '福州达内信息科技有限公司',
        address: 'f1ynk2lrlksum4mxkrmivzf3iudgquuevlyilwvoa',
        allocated: '5.00 TiB',
        time: '2021-07-30'
      }]
    }
  },
  methods: {
    copy (val) {
      this.$copyText(val.address).then((e) => {
        this.$message.info(this.$t('hint39'))
      }, (e) => {
        this.$message.error(this.$t('hint40'))
      })
      console.log('复制:', val.address)
      // this.$message.info({
      //   content: '复制成功',
      //   background: true,
      //   duration: 3
      // })
    },
    goHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
  .header {
    width: 100%;
    /*height: 70px;*/
    opacity: 1;
    padding: 0 320px;
  }
  .header-content {
    display: flex;
    align-items: center;
  }
  .headlogo {
    width: 127px;
    cursor: pointer;
  }
  .setTitle {
    margin-left: 41px;
    font-size: 22px;
    font-weight: 600;
    line-height: 30px;
    color: #000000;
    opacity: 1;
  }
.content {
  /*max-height: 100%;*/
  /*margin-top: 70px;*/
  background-color: #F0F0F0;
  background-size: 100% 100%;
  height: 100%;
  position: fixed;
  width: 100%;
  padding: 0 320px;
}
  .content-top {
    padding: 24px 0;
    display: flex;
    justify-content: space-between;
  }
  .content-top-left {
    display: flex;
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
    color: #4F4F4F;
    opacity: 1;
  }
  .lujingImg {
    width: 20px;
    height: 22px;
    /*background: #EF301D;*/
    opacity: 1;
    margin-right: 11px;
  }
  .content-top-right {
    display: flex;
    width: 358px;
    justify-content: space-between;
  }
  .setFontWeight {
    color: #4F4F4F;
  }
  .setFoot {
    width: 100%;
    position: fixed;
    bottom: 0;
  }
</style>
