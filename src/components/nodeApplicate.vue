<template>
  <div>
    <div class="setBody">
      <el-dialog
        :title="$t('nodeApply')"
        :visible.sync="dialogVisible"
        :append-to-body="true"
        :before-close="handleClose"
        class="setDialog">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" size="medium" class="demo-ruleForm">
          <div class="setnewModel">
            <div class="setLeft">{{ $t('requiredInfo') }}</div>
            <i class="setLines"></i>
          </div>
          <el-form-item :label="$t('StorageNodeNum')" prop="storageNum">
            <el-input v-model.trim="ruleForm.storageNum" :placeholder="$t('enterStorageNodeNum')" @blur="checkNodes"></el-input>
          </el-form-item>
          <el-form-item class="setRadio" :label="$t('locations')" prop="area">
            <el-radio-group v-model="ruleForm.area" class="setEachOption">
              <el-radio class="setBtn" border v-for="(item, index) in areaList" :key="index" :label="item.value">{{ item.label }}</el-radio>
            </el-radio-group>
            <transition name="el-zoom-in-top">
              <div class="transition-box divwrap" v-if="ruleForm.area === 1">
                <v-distpicker
                  :placeholders="placeholders"
                  :province='province'
                  :city='myaddress'
                  hide-area
                  @selected="sel">
                </v-distpicker>
              </div>
              <div class="transition-box divcountry" v-else-if="ruleForm.area === 2">
                <el-select v-model="ruleForm.countryEn" @change="showSelect" :placeholder="$t('country')">
                  <el-option
                    v-for="item in options"
                    :key="item.code"
                    :label="item.en"
                    :value="item.code">
                  </el-option>
                </el-select>
              </div>
            </transition>
          </el-form-item>
          <el-form-item :label="$t('CarryingSpace')" prop="space">
            <el-input :placeholder="$t('enterCarryingSpace')" onkeyup="value = value.replace(/[^0-9.]/g,'')" v-model.trim="ruleForm.space"></el-input>
          </el-form-item>
          <el-form-item :label="$t('UploadBandwidth')" prop="upload">
            <el-input :placeholder="$t('enterUploadBandwidth')" onkeyup="value = value.replace(/[^0-9.]/g,'')" v-model.trim="ruleForm.upload"></el-input>
          </el-form-item>
          <el-form-item :label="$t('DownloadBandwidth')" prop="download">
            <el-input :placeholder="$t('enterDownloadBandwidth')" onkeyup="value = value.replace(/[^0-9.]/g,'')" v-model.trim="ruleForm.download"></el-input>
          </el-form-item>
          <el-form-item :label="$t('ContactName')" prop="name">
            <el-input :placeholder="$t('enterContactName')" v-model.trim="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item v-if="ruleForm.area === 2" :label="$t('ContactCellphoneNumber')" prop="otherPhone">
            <el-input :placeholder="$t('enterContactCellphoneNumber1')" v-model.trim="ruleForm.otherPhone"></el-input>
          </el-form-item>
          <el-form-item v-else :label="$t('ContactCellphoneNumber')" prop="phone">
            <el-input :placeholder="$t('enterContactCellphoneNumber1')" v-model.trim="ruleForm.phone"></el-input>
          </el-form-item>
          <el-form-item class="setRadio" :label="$t('testServer')" prop="other">
            <el-radio-group v-model="ruleForm.other" class="setEachOption">
              <el-radio border v-for="(item, index) in otherOptions" :key="index" :label="item.value">{{ item.label }}</el-radio>
            </el-radio-group>
          </el-form-item>
          <div class="setnewModel">{{ $t('optionalInfo') }}<i class="setLines"></i></div>
          <el-form-item :label="$t('CompanyName')" prop="companyName">
            <el-input :placeholder="$t('enterCompanyName')" v-model.trim="ruleForm.companyName"></el-input>
          </el-form-item>
          <el-form-item :label="$t('ContactEmail')" prop="email">
            <el-input :placeholder="$t('enterContactEmail')" v-model.trim="ruleForm.email"></el-input>
          </el-form-item>
          <el-form-item :label="$t('Remarks')" prop="notes">
            <el-input :placeholder="$t('enterRemarks')" v-model.trim="ruleForm.notes"></el-input>
          </el-form-item>
        </el-form>
<!--        <span slot="footer" class="dialog-footer">-->
<!--        -->
<!--        </span>-->
        <div class="footers">
          <el-button class="cancel" @click="dialogVisible = false">{{ $t('cancel') }}</el-button>
          <el-button class="save" @click="saveInfo">{{ $t('Save') }}</el-button>
          <el-button class="confirm" type="primary" @click="submitForm('ruleForm')">{{ $t('Sure') }}</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import * as allAddress from '../common/address'
import * as allCountry from '../common/countries'
import VDistpicker from 'v-distpicker'
import apis from '../common/apis'
export default {
  inject: ['showHead', 'reload'],
  name: 'nodeApplicate',
  components: { VDistpicker },
  data () {
    return {
      dialogVisible: true,
      ruleForm: {
        storageNum: '', // 节点编号
        area: '', // 地域类型
        countryCode: '', // 国家或地区代码
        countryEn: '', // 英文地址
        countryCn: '', // 中文地址
        space: '', // 可承载空间
        upload: '', // 上传带宽
        download: '', // 下载带宽
        name: '',  // 联系人名称
        phone: '', // 联系人手机号
        otherPhone: '',
        other: 2, // 是否可提供测试服务器
        companyName: '', // 公司名称
        email: '', // 联系人邮箱
        notes: '', // 备注
        value: '',
        valueCode: ''
      },
      rules: {
        storageNum: [
          { required: true, message: this.$t('enterStorageNodeNum'), trigger: 'blur' }
        ],
        area: [
          { required: true, message: this.$t('enterLocations'), trigger: 'change' }
        ],
        space: [
          { required: true, message: this.$t('enterCarryingSpace'), trigger: 'blur' }
        ],
        upload: [
          { required: true, message: this.$t('enterUploadBandwidth'), trigger: 'blur' }
        ],
        download: [
          { required: true, message: this.$t('enterDownloadBandwidth'), trigger: 'blur' }
        ],
        name: [
          { required: true, message: this.$t('enterContactName'), trigger: 'blur' }
        ],
        phone: [
          { required: true, message: this.$t('enterContactCellphoneNumber1'), trigger: 'blur' },
          { pattern: /^[1][3,4,5,6,7,8,9][0-9]{9}$/, message: this.$t('enterContactCellphoneNumber2'), trigger: 'blur' }
        ],
        otherPhone: [
          { required: true, message: this.$t('hint90'), trigger: 'blur' },
          { pattern: /^[0-9]*$/, message: this.$t('hint98'), trigger: 'blur' }
        ],
        other: [
          { required: true, message: this.$t('entertestServer'), trigger: 'change' }
        ]
      },
      otherOptions: [
        { value: 2, label: this.$t('yes') },
        { value: 1, label: this.$t('no') }
      ],
      areaList: [
        { value: 1, label: this.$t('GreaterChina') },
        { value: 2, label: this.$t('NonGreaterChina') }
      ],
      placeholders: {
        province: this.$t('province'),
        city: this.$t('city')
      },
      options: null,
      province: '',
      myaddress: ''
    }
  },
  created () {
    this.getArea()
  },
  watch: {
    dialogVisible: {
      handler (n, o) {
        if (n === false) {
          this.showHead()
        }
      },
      deep: true,
      immediate: true
    },
    'ruleForm.area': {
      handler (n, o) {
        // if (n === 2) {
        //   this.province = ''
        //   this.myaddress = ''
        //   this.ruleForm.value = ''
        // } else if (n === 1) {
        //   this.ruleForm.countryEn = ''
        // }
      }
    }
  },
  methods: {
    handleClose () {
      this.dialogVisible = false
    },
    getArea () {
      this.options = allCountry.allCountry
      let v = JSON.parse(sessionStorage.getItem('nodesInfo'))
      if (v) {
        this.province = v.province
        this.myaddress = v.city
        this.ruleForm.area = v.area
        this.ruleForm.companyName = v.companyName
        this.ruleForm.country = v.country
        this.ruleForm.download = v.download
        this.ruleForm.email = v.email
        this.ruleForm.name = v.name
        this.ruleForm.notes = v.notes
        this.ruleForm.other = v.other
        this.ruleForm.phone = v.phone
        this.ruleForm.otherPhone = v.phone
        this.ruleForm.space = v.space
        this.ruleForm.storageNum = v.storageNum
        this.ruleForm.upload = v.upload
        this.ruleForm.value = v.value
        this.ruleForm.valueCode = v.valueCode
        this.ruleForm.countryCode = v.countryCode
        this.ruleForm.countryEn = v.countryEn
        this.ruleForm.countryCn = v.countryCn
      }
      console.log('aaaaa:', v)
    },
    sel (a) {
      this.province = a.province.value
      this.myaddress = a.city.value
      this.ruleForm.value = a.province.value + '-' + a.city.value
      this.ruleForm.valueCode = a.province.code + '-' + a.city.code
      // this.ruleForm.areaEn = null
      console.log(a)
    },
    submitForm (formName) {
      let sign = /^(([a-zA-Z0-9_-]+\.)|[a-zA-Z0-9_-])+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.ruleForm.email) {
            if (sign.test(this.ruleForm.email)) {
              this.submitApi()
            } else {
              this.$message.info({
                content: this.$t('correctEmail'),
                background: true,
                duration: 5
              })
            }
          } else {
            this.submitApi()
          }
          // alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    saveInfo () {
      let all
      this.ruleForm.province = this.province
      this.ruleForm.city = this.myaddress
      all = this.ruleForm
      sessionStorage.setItem('nodesInfo', JSON.stringify(all))
      this.dialogVisible = false
    },
    checkNodes () {
      // 校验节点
      let that = this
      let token = localStorage.getItem('token')
      let params = {
        minerAddress: that.ruleForm.storageNum
      }
      that.$axios({
        method: 'post',
        url: apis.storageMinerCheck,
        data: params,
        headers: {
          'Content-Type': 'application/json',
          Bearer: token
        }
      }).then(res => {
        console.log(res.data)
        if (res.data) {
          this.$message.info({
            content: this.$t('reenter'),
            background: true,
            duration: 5
          })
        }
      }).catch(err => {
        console.log(err)
      })
    },
    submitApi () {
      // 存储服务节点申请
      let that = this
      let token = localStorage.getItem('token')
      let val = that.ruleForm
      let params = {
        areaCn: '', // 地域中文名
        areaCode: '', // 地域code
        areaEn: '', // 地域英文名
        areaType: val.area, // 地域类型
        contacts: val.name, // 联系人名称
        carryingSpace: val.space, // 可承载空间
        companyName: val.companyName, // 公司名称
        contactsEmail: val.email, // 联系人邮箱
        contactsPhone: '', // 联系人手机号
        downloadBandwidth: val.download, // 下载带宽
        isTestServer: val.other, // 是否可提供测试服务器
        minerAddress: val.storageNum, // 节点编号
        remarks: val.notes, // 备注
        uploadBandwidth: val.upload // 上传带宽
      }
      if (val.area === 1) {
        params.contactsPhone = val.phone
        params.areaCn = val.value
        params.areaCode = val.valueCode
        params.areaEn = 'null'
      } else if (val.area === 2) {
        params.contactsPhone = val.otherPhone
        params.areaCn = val.countryCn
        params.areaCode = val.countryCode
        params.areaEn = val.countryEn
      }
      if (!params.areaCn) {
        this.$message.info({
          content: this.$t('enterLocations'),
          background: true,
          duration: 5
        })
        return
      }
      that.$axios({
        method: 'post',
        url: apis.storageMinerApply,
        data: params,
        headers: {
          'Content-Type': 'application/json',
          Bearer: token
        }
      }).then(res => {
        console.log(res.status)
        if (res.status === 200) {
          this.$message.info({
            content: this.$t('successful')
            // background: true,
            // duration: 5
          })
          sessionStorage.removeItem('nodesInfo')
          this.dialogVisible = false
          this.resetForm()
        } else {
          this.$message.info({
            content: this.$t('failed'),
            background: true,
            duration: 5
          })
        }
      })
    },
    showSelect (value) {
      let v = this.options.find(e => e.code === value)
      this.ruleForm.countryCode = v.code
      this.ruleForm.countryEn = v.en
      this.ruleForm.countryCn = v.cn
      console.log(value, v)
    },
    resetForm () {
      this.ruleForm.email = ''
      this.ruleForm.valueCode = ''
      this.ruleForm.area = ''
      this.ruleForm.countryEn = ''
      this.ruleForm.name = ''
      this.ruleForm.countryCn = ''
      this.ruleForm.companyName = ''
      this.ruleForm.countryCode = ''
      this.ruleForm.download = ''
      this.ruleForm.notes = ''
      this.ruleForm.other = ''
      this.ruleForm.phone = ''
      this.ruleForm.otherPhone = ''
      this.ruleForm.space = ''
      this.ruleForm.storageNum = ''
      this.ruleForm.upload = ''
      this.ruleForm.value = ''
    }
  }
}
</script>

<style scoped>
.setDialog {
  position: fixed;
  top: -12vh;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0;
  overflow: auto;
}
/*.setDialog >>> .el-dialog {*/
/*  bottom: 8vh;*/
/*}*/
.setDialog >>> .el-dialog__header {
  padding: 0 0 0 22px;
  height: 60px;
  display: flex;
  align-items: center;
  font-size: 21px;
  color: #333333;
  font-weight: 500;
  border-bottom: 1px solid #e8eaec;
}
.setDialog >>> .el-dialog__title {
  font-size: 21px;
  color: #333333;
  font-weight: bold;
}
.setDialog >>> .el-dialog__footer {
  padding: 20px 42px;
  margin-top: 15px;
  border-top: 1px solid #e8eaec;
  text-align: right;
  /*position: fixed;*/
  /*bottom: 0;*/
}
.el-dialog--center {
  text-align: center;
  margin-top: 2vh !important;
}
.setDialog >>> .el-dialog__body {
  height: 650px;
  overflow: scroll;
  padding: 0 !important;
  display: block;
}
.demo-ruleForm {
  padding: 0 42px;
}
.demo-ruleForm >>> .el-form-item__content, .demo-ruleForm >>> .el-form-item__label {
  font-size: 13px;
}
.demo-ruleForm  >>> .el-input__inner:focus {
  border-color: #ef190f;
}
.setRadio >>> .el-radio__input.is-checked .el-radio__inner {
  display: none;
}
.setRadio >>> .el-radio__inner {
  display: none;
}
.setRadio >>> .el-radio {
  width: 100px;
  text-align: center;
  margin-right: 5px;
  padding: 10px !important;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  background-color: #f9f9f9;
}
.setRadio >>> .el-radio-group {
  width: 100%;
}
.setRadio >>> .el-radio__input.is-checked .el-radio__inner {
  border-color:#ef190f;
}
.setRadio >>> .el-radio__label {
  font-size: 13px;
}
.setRadio >>> .el-radio__label {
  padding-left: 0;
}
.setRadio >>> .el-radio.is-bordered.is-checked {
  border-color: #ef190f;
}
.setRadio >>> .el-radio__input.is-checked+.el-radio__label {
  color: #ef190f;
}
.setnewModel {
  margin: 21px 0 20px 0;
  background-color: #F0F0F0;
  opacity: 1;
  border-radius: 2px;
  font-size: 16px;
  font-weight: 400;
  color: #333333;
  display: flex;
  justify-content: space-between;
  /*cursor: pointer;*/
  padding: 5px 20px;
  position: relative;
}
.setLines {
  width: 4px;
  height: 23px;
  background-color: #ef190f;
  position: absolute;
  left: 0;
  top: 5px;
}
.cancel {
  width: 100px;
  height: 40px;
  border: 1px solid #4F4F4F;
}
.cancel:hover {
  color: #4F4F4F;
  background-color: #FFFFFF;
}
.save {
  width: 100px;
  height: 40px;
  color: #ef190f;
  background-color: #FFFFFF;
  border: 1px solid #ef190f;
}
.confirm {
  width: 100px;
  height: 40px;
  color: #FFFFFF;
  border-color: #ef190f;
  background-color: #ef190f;
}
.divwrap, .divcountry {
  width: 100%;
  margin-top: 17px;
}
.el-select {
  width: 100%;
}
.divwrap >>> .distpicker-address-wrapper {
  color: #606266;
}
.divwrap >>> .address-header {
  position: fixed;
  width: 100%;
  background: #000;
  color:#fff;
}
.divwrap >>> .address-header ul li {
  flex-grow: 1;
  text-align: center;
}
.divwrap >>> .address-header .active {
  color: #fff;
  border-bottom:#666 solid 8px
}
.divwrap >>> .address-container .active {
  color:#606266;
  border-color: #ef190f;
}
.divwrap >>> .distpicker-address-wrapper select {
  width: 263px;
  height: 36px;
  padding: 0 15px 0 15px;
  font-size: 13px;
  border-radius: 5px;
}
.divwrap >>> .distpicker-address-wrapper select:focus {
  border-color: #ef190f;
}
.divwrap >>> .distpicker-address-wrapper .active {
  border-color: #ef190f;
}
.divcountry >>> .el-select-dropdown__item.selected {
  color: #ef190f;
}
.el-select-dropdown__item.selected {
  color: #ef190f;
  font-weight: 700;
}
.divcountry >>> .el-select .el-input.is-focus .el-input__inner {
  border-color: #ef190f;
}
.setEachOption >>> .el-radio {
  width: 130px;
}
  .footers {
    text-align: right;
    position: sticky;
    bottom: 0;
    background-color: #FFFFFF;
    padding: 20px 42px;
    margin-top: 15px;
    border-top: 1px solid #e8eaec;
  }
</style>
