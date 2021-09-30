<template>
  <div class="allContent">
    <div class="Sutitle">{{ $t('accountManagement') }}</div>
    <div class="infoMain">
      <div class="tips">
        <div style="display: flex">
          <img class="baicon" src="../assets/byteicon/ba.png" alt="" />
          <p style="margin-left: 10px">{{ $t('tips') }}</p>
        </div>
        <p style="margin: 10px 0 0 33px;"><span>{{ $t('accountTips') }}</span>
<!--          如果数据伙伴和数据主体为同一手机号，则只允许通过数据伙伴角色登录。-->
        </p>
      </div>
      <div class="setPadding">
        <el-row :gutter="20" class="userDetails">
          <el-col :span="3"><div class="grid-content bg-purple nameSet">{{ $t('dataSubjects') }}</div></el-col>
          <el-col :span="21"><div class="grid-content bg-purple detailSet">{{ companyName }}</div></el-col>
        </el-row>
        <el-row :gutter="20" class="userDetails">
          <el-col :span="3"><div class="grid-content bg-purple nameSet">{{ $t('phoneNum') }}</div></el-col>
          <el-col :span="21"><div class="grid-content bg-purple detailSet">{{ Tphone }}</div></el-col>
        </el-row>
        <el-row :gutter="20" class="userDetails">
          <el-col :span="3"><div class="grid-content bg-purple nameSet">{{ $t('Account') }}</div></el-col>
          <el-col :span="21" class="editInfo">
            <div class="grid-content bg-purple detailSet">
              <el-input type="text" class="setInputWidth" v-model="phoneNumber" :clearable="true" :placeholder="$t('setAccount')" size="medium"></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="userDetails">
          <el-col :span="3"><div class="grid-content bg-purple nameSet">{{ $t('password') }}</div></el-col>
          <el-col :span="21" class="editInfo">
            <div class="grid-content bg-purple detailSet">
              <el-input type="password" class="setInputWidth" v-model="password" size="medium" :show-password="true" :placeholder="$t('setPwd')"></el-input>
            </div>
          </el-col>
        </el-row>
        <div class="btn-group">
          <el-button size="medium" class="saveBtn" @click="saveInfo">{{ $t('Save') }}</el-button>
          <el-button size="medium" class="reset" @click="restFrom">{{ $t('reset') }}</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import apis from '../common/apis'

export default {
  name: 'accentManage',
  inject: ['reload'],
  data () {
    return {
      Tphone: '',
      phoneNumber: '',
      accentId: '',
      password: '',
      companyName: '111'
    }
  },
  mounted () {
    this.accentId = this.$store.state.accent
    this.getAccentInfo(this.accentId)
    // console.log('1111:', this.accentId)
  },
  methods: {
    saveInfo () {
      this.checkPhone()
      // this.checkPass()
    },
    setUser () {
      // 申请数据主体账号
      let that = this
      let token = localStorage.token
      let parms = {
        mobile: that.phoneNumber,
        passWord: that.password,
        subjectId: that.accentId
      }
      that.$axios({
        method: 'post',
        url: apis.dataMainBodyAccCretadApi,
        data: parms,
        headers: {
          'Content-Type': 'application/json',
          Bearer: token
        }
      }).then(res => {
        console.log('申请成功', res)
        if (res.status === 200) {
          this.$message.info({
            content: this.$t('hint2'),
            background: true,
            duration: 5
          })
          this.reload()
          // this.companyName = res.data.companyName
          // this.phoneNumber = res.data.dataContactMobile
          // console.log('wwwwwwwww', this.companyName)
        }
      }).catch(err => {
        if (err.response.status === 400 && err.response.data === '该账号已被数据伙伴或数据主体使用！') {
          this.$message.error({
            content: this.$t('hint3'),
            background: true,
            duration: 5
          })
        } else if (err.response.data) {
          this.$message.error({
            content: this.$t('hint53'),
            background: true,
            duration: 5
          })
        }
        // console.log(err.response.status)
      })
    },
    checkPhone () {
      // console.log('校验手机号')
      const phoneReg = /^1[3|4|5|6|7|8][0-9]{9}$/
      if (!this.phoneNumber) {
        return this.$message.error(this.$t('hint4'))
      }
      setTimeout(() => {
        if (!Number.isInteger(+this.phoneNumber)) {
          this.$message.error(this.$t('hint5'))
        } else {
          if (phoneReg.test(this.phoneNumber)) {
            this.checkPass()
          } else {
            this.$message.error(this.$t('hint6'))
          }
        }
      }, 100)
    },
    checkPass () {
      const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/
      if (!this.password) {
        return this.$message.error(this.$t('hint7'))
      }
      if (!reg.test(this.password)) {
        return this.$message.error({
          content: this.$t('hint8'),
          background: true,
          duration: 3
        })
      } else {
        this.setUser()
      }
    },
    getAccentInfo (val) {
      let that = this
      let token = localStorage.token
      let parms = {
        id: val
      }
      that.$axios({
        method: 'post',
        url: apis.dataMainBodyDetailApi,
        data: parms,
        headers: {
          'Content-Type': 'application/json',
          Bearer: token
        }
      }).then(res => {
        if (res.status === 200) {
          this.companyName = res.data.companyName
          this.Tphone = res.data.dataContactMobile
          // console.log('wwwwwwwww', this.companyName)
        }
      }).catch(err => {
        console.log(err.response.status)
      })
    },
    restFrom () {
      this.phoneNumber = ''
      this.password = ''
    }
  }
}
</script>

<style scoped>
  .tips {
    padding: 20px;
    font-size: 14px;
    background-color: #fff3f2;
  }
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
    padding: 35px 60px;
  }
  .setPadding {
    padding: 0 20px;
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
    line-height: 36px;
  }
  .detailSet {
    line-height: 36px;
    /*width: 220px;*/
    color: rgb(51, 51, 51);
  }
  .editInfo {
    display: flex;
  }
  .editInfo > img {
    margin-left: 20px;
    cursor: pointer;
  }
  .btn-group {
    margin-top: 40px;
    padding-left: 80px;
  }
  .saveBtn {
    background-color: #ef190f;
    color: #FFFFFF;
    border-color: #ef190f;
  }
  .saveBtn:hover {
    background-color: #ef190f;
    color: #FFFFFF;
  }
  .saveBtn:focus {
    background-color: #ef190f;
    color: #FFFFFF;
  }
  .reset:hover {
    border-color: #ef190f;
    background-color: #FFFFFF;
    color: #ef190f;
  }
  .reset:focus {
    background-color: #FFFFFF;
    color: #606266;
    border: 1px solid #DCDFE6;
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
  .setInputWidth {
    width: 341px;
  }
</style>
<style>
  .el-dialog__footer {
    margin-top: 10px;
    text-align: center;
  }
  .el-input.is-active .el-input__inner, .el-input__inner:focus {
    border-color: #ef190f;
  }
  /*.el-button:active {*/
  /*  border-color: #ef190f;*/
  /*  color: #ef190f;*/
  /*  !*background-color: #FFFFFF;*!*/
  /*}*/
  /*.el-button:focus, .el-button:hover {*/
  /*  border-color: #ef190f;*/
  /*  color: #ef190f;*/
  /*  background-color: #FFFFFF;*/
  /*}*/
</style>
