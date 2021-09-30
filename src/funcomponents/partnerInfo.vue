<template>
    <div class="allContent">
      <div class="Sutitle">{{ $t('partnerInfos') }}</div>
<!--      <div class="Sutitle" v-if="subjectSign === 'true'">数据主体资料</div>-->
      <div class="infoMain">
        <div class="userName">
          <img src="../assets/userInfo/icon-navtop-head.png" alt="">
          <p>{{ userData.name }}</p>
        </div>
        <el-row :gutter="20" class="userDetails">
          <el-col :span="4"><div class="grid-content bg-purple nameSet">{{ $t('companyName') }}</div></el-col>
          <el-col :span="20">
            <div class="grid-content bg-purple detailSet" v-if="userData.compayName">{{ userData.compayName }}</div>
            <div class="grid-content bg-purple detailSet" v-else>{{ '-' }}</div>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="userDetails" v-if="userData.subject">
          <el-col :span="4"><div class="grid-content bg-purple nameSet">{{ $t('Abbreviation') }}</div></el-col>
          <el-col :span="20">
            <div class="grid-content bg-purple detailSet" v-if="userData.dataReferred">{{ userData.dataReferred }}</div>
            <div class="grid-content bg-purple detailSet" v-else>{{ '-' }}</div>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="userDetails" v-if="userData.userType === 1 && !userData.subject">
          <el-col :span="4"><div class="grid-content bg-purple nameSet">{{ $t('bankAccount') }}</div></el-col>
          <el-col :span="20"><div class="grid-content bg-purple detailSet">{{ userData.bankAccount }}</div></el-col>
        </el-row>
        <el-row :gutter="20" class="userDetails" v-if="userData.userType === 1 && !userData.subject">
          <el-col :span="4"><div class="grid-content bg-purple nameSet">{{ $t('bankName') }}</div></el-col>
          <el-col :span="20"><div class="grid-content bg-purple detailSet">{{ userData.bankName }}</div></el-col>
        </el-row>
        <el-row :gutter="20" class="userDetails" v-if="userData.userType && !userData.subject">
          <el-col :span="4">
            <div class="grid-content bg-purple nameSet" v-if="userData.userType === 1">{{ $t('Receiving') }}</div>
            <div class="grid-content bg-purple nameSet" v-if="userData.userType === 2">{{ $t('personCon') }}</div>
          </el-col>
          <el-col :span="20"><div class="grid-content bg-purple detailSet">{{ userData.contactsName }}</div></el-col>
        </el-row>
        <el-row :gutter="20" class="userDetails">
          <el-col :span="4">
            <div class="grid-content bg-purple nameSet" v-if="!userData.subject">{{ $t('hint126') }}</div>
            <div class="grid-content bg-purple nameSet" v-if="userData.subject">{{ $t('hint126') }}</div>
          </el-col>
          <el-col :span="20" class="editInfo">
            <div class="grid-content bg-purple detailSet" v-if="userData.name">{{ userData.name }}</div>
            <div class="grid-content bg-purple detailSet" v-else>{{ '-' }}</div>
            <img src="../assets/userInfo/icon-edie_nor.png" alt="" v-if="!userData.subject" @click.stop="changePhone">
          </el-col>
        </el-row>
        <el-row :gutter="20" class="userDetails" v-if="userData.subject">
          <el-col :span="4"><div class="grid-content bg-purple nameSet">{{ $t('companyWeb') }}</div></el-col>
          <el-col :span="20">
            <div class="grid-content bg-purple detailSet" v-if="userData.compayWebsite">{{ userData.compayWebsite }}</div>
            <div class="grid-content bg-purple detailSet" v-else>{{ '-' }}</div>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="userDetails" v-if="userData.subject">
          <el-col :span="4"><div class="grid-content bg-purple nameSet">{{ $t('hint127') }}</div></el-col>
          <el-col :span="20">
            <div class="grid-content bg-purple detailSet" v-if="userData.approveCapacity">{{ userData.approveCapacity }}</div>
            <div class="grid-content bg-purple detailSet" v-else>{{ '-' }}</div>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="userDetails" v-if="userData.userType && !userData.subject">
          <el-col :span="4">
            <div class="grid-content bg-purple nameSet" v-if="userData.userType === 1">{{ $t('billEmail') }}</div>
            <div class="grid-content bg-purple nameSet" v-if="userData.userType === 2">{{ $t('hint128') }}</div>
          </el-col>
          <el-col :span="20" class="editInfo">
            <div class="grid-content bg-purple detailSet">{{ userData.contactsEmail }}</div>
            <img src="../assets/userInfo/icon-edie_nor.png" alt="" @click.stop="changeEmail">
          </el-col>
        </el-row>
        <el-row :gutter="20" class="userDetails" v-if="userData.userType === 1 && !userData.subject">
          <el-col :span="4"><div class="grid-content bg-purple nameSet">{{ $t(' conAddress') }}</div></el-col>
          <el-col :span="20">
            <div class="grid-content bg-purple detailSet" v-if="userData.address">{{ userData.address }}</div>
            <div class="grid-content bg-purple detailSet" v-else>-</div>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="userDetails" v-if="userData.userType === 1 && !userData.subject">
          <el-col :span="4"><div class="grid-content bg-purple nameSet">{{ $t(' note') }}</div></el-col>
          <el-col :span="20">
            <div class="grid-content bg-purple detailSet" v-if="userData.remarks">{{ userData.remarks }}</div>
            <div class="grid-content bg-purple detailSet" v-else>-</div>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="userDetails" v-if="userData.userType === 2 && !userData.subject">
          <el-col :span="4"><div class="grid-content bg-purple nameSet">{{ $t('hint129') }}</div></el-col>
          <el-col :span="20"><div class="grid-content bg-purple detailSet">{{ userData.tcr20WalletAddress }}</div></el-col>
        </el-row>
      </div>
      <el-dialog
        :title="$t('hint130')"
        :visible.sync="phoneDialogVisible"
        width="23%"
        :append-to-body="true">
        <p>{{ $t('phoneNum') }}</p>
        <el-input class="setStyle" type="text" :placeholder="$t('hint131')" v-model="phoneNumber" size="small"></el-input>
        <p style="margin-top: 10px">{{ $t('SMStips') }}</p>
        <div class="setCheck">
          <el-input type="text" :placeholder="$t('enterVerCode')" v-model="phoneCode" size="small" class="code setStyle"></el-input>
          <el-button type="primary" size="small" class="checkBtn setStyle" @click="sendPhoneCode" v-if="show1">{{ $t('sendVerificationCode') }}</el-button>
          <el-button type="primary" size="small" class="checkBtn setStyle" style="width: 92px" v-else>{{ count1 }} s</el-button>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" class="setColor" @click="phoneSure">{{ $t('Sure') }}</el-button>
        </span>
      </el-dialog>
      <el-dialog
        :title="$t('hint132')"
        :visible.sync="emailDialogVisible"
        width="23%"
        :append-to-body="true">
        <p>{{ $t('hint128') }}</p>
        <el-input class="setStyle" type="text" :placeholder="$t('hint133')" v-model="emailNumber" size="small"></el-input>
        <p style="margin-top: 10px">{{ $t('hint134') }}</p>
        <div class="setCheck">
          <el-input type="text" :placeholder="$t('hint135')" v-model="emailCode" size="small" class="code setStyle"></el-input>
          <el-button type="primary" size="small" class="checkBtn setStyle" @click="sendEmailCode" v-if="show2">{{ $t('sendVerificationCode') }}</el-button>
          <el-button type="primary" size="small" class="checkBtn setStyle" style="width: 92px" v-else>{{ count2 }} s</el-button>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" class="setColor" @click="emailSure">{{ $t('Sure') }}</el-button>
        </span>
      </el-dialog>
    </div>
</template>

<script>
import apis from '../common/apis'

export default {
  name: 'partnerInfo',
  data () {
    return {
      phoneDialogVisible: false,
      emailDialogVisible: false,
      phoneNumber: '',
      phoneCode: '',
      emailNumber: '',
      emailCode: '',
      userData: '',
      timer1: '',
      timer2: '',
      count1: '',
      count2: '',
      showSeconds1: '',
      showSeconds2: '',
      show1: true,
      show2: true,
      subjectSign: localStorage.getItem('subject')
    }
  },
  mounted () {
    this.userData = JSON.parse(localStorage.getItem('userInfo'))
    // console.log('1111:', this.userData)
  },
  beforeDestroy () {
    clearInterval(this.timer1)
    clearInterval(this.timer2)
  },
  methods: {
    changePhone () {
      // console.log('修改手机号')
      this.phoneDialogVisible = true
    },
    changeEmail () {
      // console.log('修改邮箱')
      this.emailDialogVisible = true
    },
    sendPhoneCode () {
      let token = localStorage.token
      let params = {}
      let that = this
      const TIME_COUNT = 60
      params.mobile = this.phoneNumber
      params.type = 1
      params.afs = {
        appKey: 'FFFF0N0000000000913F',
        scene: 'nvc_login'
      }
      this.$axios({
        method: 'post',
        url: apis.sendSmsAuthCodeOrEmail,
        data: params,
        headers: {
          'Content-Type': 'application/json',
          Bearer: token
        }
      }).then(res => {
        if (!that.timer1) {
          that.count1 = TIME_COUNT
          that.show1 = false
          that.timer1 = setInterval(() => {
            if (
              that.count1 > 0 &&
              that.count1 <= TIME_COUNT
            ) {
              that.count1--
            } else {
              that.show1 = true
              clearInterval(that.timer1)
              that.timer1 = null
            }
          }, 1000)
        }
      }).catch(err => {
        this.$message.error({
          content: this.$t('hint125'),
          duration: 5
        })
        // this.phoneDialogVisible = false
      })
    },
    sendEmailCode () {
      let token = localStorage.token
      let params = {}
      let that = this
      const TIME_COUNT = 60
      params.email = this.emailNumber
      params.type = 2
      params.afs = {
        appKey: 'FFFF0N0000000000913F',
        scene: 'nvc_login'
      }
      this.$axios({
        method: 'post',
        url: apis.sendSmsAuthCodeOrEmail,
        data: params,
        headers: {
          'Content-Type': 'application/json',
          Bearer: token
        }
      }).then(res => {
        if (!that.timer2) {
          that.count2 = TIME_COUNT
          that.show2 = false
          that.timer2 = setInterval(() => {
            if (
              that.count2 > 0 &&
              that.count2 <= TIME_COUNT
            ) {
              that.count2--
            } else {
              that.show2 = true
              clearInterval(that.timer2)
              that.timer2 = null
            }
          }, 1000)
        }
      }).catch(err => {
        this.$message.error({
          content: this.$t('hint125'),
          duration: 5
        })
        // this.emailDialogVisible = false
      })
    },
    phoneSure () {
      let token = localStorage.token
      let params = {}
      params.type = 2
      params.login = this.phoneNumber
      params.code = this.phoneCode
      this.$axios({
        method: 'post',
        url: apis.updEmailOrSmsAuthApi,
        data: params,
        headers: {
          'Content-Type': 'application/json',
          Bearer: token
        }
      }).then(res => {
        this.userData.name = this.phoneNumber
        localStorage.loginName = this.phoneNumber
        this.phoneDialogVisible = false
      }).catch(err => {
        this.$message.error({
          content: this.$t('hint125'),
          duration: 5
        })
      })
    },
    emailSure () {
      let token = localStorage.token
      let params = {}
      params.type = 1
      params.login = this.emailNumber
      params.code = this.emailCode
      this.$axios({
        method: 'post',
        url: apis.updEmailOrSmsAuthApi,
        data: params,
        headers: {
          'Content-Type': 'application/json',
          Bearer: token
        }
      }).then(res => {
        this.userData.contactsEmail = this.emailNumber
        this.emailDialogVisible = false
      }).catch(err => {
        this.$message.error({
          content: this.$t('hint125'),
          duration: 5
        })
      })
    }
  }
}
</script>

<style scoped>
.allContent {
  padding-bottom: 46px;
}
.Sutitle {
  border-bottom: 1px solid #e8eaec;
  height: 74px;
  width: 100%;
  padding-left: 36px;
  color: #333333;
  font-size: 18px;
  display: flex;
  align-items: center;
}
.infoMain {
  margin: 10px 30px;
  min-width: 1140px;
  height: 580px;
  margin-top: 20px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  padding: 35px 90px;
}
.userName{
  display: flex;
  align-items: center;
}
.userName > p {
  margin-left: 10px;
}
.userDetails {
  margin-top: 20px;
  font-size: 14px;
}
.nameSet {
  color: #d2d1d1;
}
.detailSet {
  color: rgb(51, 51, 51);
}
.editInfo {
  display: flex;
}
.editInfo > img {
  margin-left: 20px;
  cursor: pointer;
}
.setColor {
  width: 120px;
  border: 1px solid #ef190f;
  background-color: #ef190f;
}
.setCheck {
  display: flex;
  justify-content: space-between;
}
.setStyle {
  margin-top: 6px;
}
.code {
  width: 72%;
}
.checkBtn {
  background-color: #333333;
  border: 1px solid #333333;
}
</style>
<style>
  .el-dialog__footer {
    margin-top: 10px;
    text-align: center;
  }
</style>
