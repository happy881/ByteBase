<style  >
.el-menu-item-group__title{
    padding: 0 !important;
}
button {
    cursor: pointer !important;
}
.input#upfile.file-upload-input {
    cursor: pointer;
}
.smdialog2 >>> .el-dialog__body {
    padding: 42px 42px 20px !important;
}
.setWidth {
  overflow: hidden;
}
.el-checkbox__input.is-checked .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #ef190f;
    border-color: #ef190f;
}
.el-checkbox__inner:hover {
    border: 1px solid #ef190f;
}
.el-checkbox__input .el-checkbox__inner {
    border-color: #cccccc;
    width: 14px;
    height: 14px;
    margin-left: 32px;
}
.el-icon-close:before {
    content: "\E6DB";
    font-size: 20px;
    font-weight: bold;
    color: black;
}
.el-dialog--center {
    text-align: center;
    margin-top: 2vh !important;
}
.el-dialog__header {
    padding: 0;
    height: 60px;
    display: flex;
    align-items: center;
    padding-left: 22px;
    font-size: 21px;
    color: #333333;
    font-weight: 500;
    border-bottom: 1px solid #e8eaec;
}
.el-dialog__title {
    font-size: 21px;
    color: #333333;
    font-weight: bold;
}
/* .smdialog5 >>> .el-dialog__body {
    overflow: scroll;
    height: 800px;
    padding: 42px 42px 0px !important;
    display: block;
} */
.el-dialog__body {
    overflow: scroll;
    /*height: 800px;*/
    padding: 42px 42px 0px !important;
    display: block;
}
.homeApp {
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    width: 100%;
    background: white;
    margin-top: 70px;
    /* overflow: hidden; */

    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
}
.ml-10 {
    margin-right: 10px;
}
.banner {
    width: 100%;
    position: relative;
    display: flex;
    flex-grow: 1;
}

.bannerLeft {
    width: 240px;
    background: #f0f0f0;
    padding-top: 16px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 90%;
    position: fixed;
    overflow: scroll;
}
::-webkit-scrollbar {
    /*隐藏滚轮*/
    display: none;
}

.bannerLeftItem {
    width: 100%;
    height: 46px;
    margin-bottom: 10px;
    padding-left: 16px;
    display: flex;
    align-items: center;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #333333;
    border-right: 2px solid #f5faf7;
    cursor: pointer;
}

.bannerLeftItem img {
    width: 24px;
    height: 24px;
    margin-left: 6px;
}

.selectWord {
    color: #f04d30;
}

.selectLeftItem {
    border-right: 2px solid #ef190f;
    border-radius: 3px;
    background: #ffffff;
    box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.05);
}

.bannerLeftTop {
    width: 100%;
    padding: 0 10px;
}

.bannerLeftFoot {
    width: 224px;
    margin-left: 9px;
    margin-bottom: 9px;
    height: 133px;
    background: #ffffff;
    border-radius: 10px 10px 10px 10px;
    padding: 0 22px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 16px;
    margin-top: auto;
}

.bannerLeftFootTop {
    width: 196px;
    color: black;
}

.bannerLeftFootTop_1 {
    font-size: 12px;
    margin-bottom: 2px;
}

.bannerLeftFootTop_2 {
    font-size: 13px;
}

.bannerLeftFootTop_1_1 {
    color: #d2d1d1;
    /* color: #9ae6c4; */
    margin-left: 2px;
}

.bannerLeftFootTopBottom {
    margin-top: 8px;
    width: 100%;
    height: 8px;
    background: #d0d0d0;
    border-radius: 4px;
    overflow: hidden;
    position: relative;
}

.bannerLeftFootBottomDiv {
    position: absolute;
    left: 0;
    top: 0;
    height: 8px;
    background: linear-gradient(to left, #a1a1a1, #333333);
    /* background: #545454; */
    border-radius: 4px;
}
.bannerLeftFootBottomDiv2 {
    position: absolute;
    left: 0;
    top: 0;
    height: 8px;
    background: linear-gradient(to left, #ff0000, #ff3b3b);
    /* background: #545454; */
    border-radius: 4px;
}

.bannerLeftFootBottom {
    width: 174px;
    height: 40px;
    background: linear-gradient(270deg, #13c677 0%, #10d67a 100%);
    border-radius: 6px 6px 0px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #ffffff;
    cursor: pointer;
}

.bannerLeftFootBottom img {
    width: 16px;
    height: 16px;
    margin-left: 4px;
}

.bannerRight2 {
    flex-grow: 1;
    margin-left: 240px;
    min-width: 1200px;
}

.zhezhao {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.2);
}

.playerBox {
    width: 400px;
    background: #ffffff;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.15);
    border-radius: 6px;
    margin: 0 auto;
    margin-top: 2.1rem;
    padding: 15px 20px;
}

.playTilte {
    font-size: 18px;
    color: #ef190f;
}

.playInfo {
    font-size: 14px;
    color: #545767;
    margin-top: 16px;
}
.el-menu {
    border-right: 0 !important;
}
.playButton {
    margin: 0 auto;
    width: 120px;
    height: 40px;
    background: #ef190f;
    border-radius: 4px;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #ffffff;
    text-align: center;
    line-height: 40px;
    margin-top: 40px;
    cursor: pointer;
}
.el-menu-item.is-active {
    color: black !important;
    background-color: white !important;
    border-right: 3px solid #ef190f !important;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.05);
}
.el-menu-item:hover {
    background-color: white !important;
}
.el-submenu .el-menu-item {
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
    height: 46px !important;
    display: flex;
    align-items: center;
}
.el-submenu__title:hover {
    background-color: white !important;
}

.el-menu-item,
.el-submenu__title {
    height: 46px !important;
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
}
.smtitle {
    color: #333333;
    font-size: 20px;
}
.coent1 {
    color: #6f6f6f;
    font-size: 14px;
    margin-top: 10px;
}
.coent2 {
    color: #6f6f6f;
    font-size: 14px;
    margin-top: 20px;
}
input {
    background: none;
    outline: none;
    border: 1px solid #cccccc;
}
input:focus {
    border: 1px solid #cccccc;
}
.dtitle {
    color: #4f4f4f;
    font-size: 13px;
    margin-top: 20px;
}
.dinpit {
    width: 536px;
    height: 35px;
    border-color: #cccccc;
    box-shadow: 0 0 0;
    margin-top: 6px;
    padding-left: 10px;
    font-size: 13px;
}
.dinpit2 {
    width: 442px;
    height: 35px;
    border-color: #cccccc;
    box-shadow: 0 0 0;

    padding-left: 10px;
    font-size: 13px;
}
input::-webkit-input-placeholder {
    color: #a1a1a1;
}
.upzzwarp {
    width: 536px;
    /*height: 53px;*/
    background-color: #f9f9f9;
    display: flex;
    align-items: center;
    color: #a1a1a1;
    font-size: 12px;
    margin-top: 8px;
}
.uptitle {
    width: 412px;
    margin-left: 10px;
    margin-right: 16px;
    /*height: 34px;*/
}
.file-upload {
    width: 88px;
    height: 32px;
    position: relative;
    overflow: hidden;
    background-color: #333333;
    color: white;
    display: inline-block;
    border-radius: 2px;

    text-align: center;
    cursor: pointer;
    /*margin: 10px 0 auto auto;*/
}
.file-upload-input {
    background-color: transparent;
    position: absolute;
    width: 120px;
    height: 32px;
    cursor: pointer;
    top: 0;
    left: -65px;
    opacity: 0;
}

.upbtn {
    width: 88px;
    height: 32px;
    background-color: #333333;
    color: white;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.zzimgwarp {
    width: 536px;
    height: 32px;
    background-color: #f9f9f9;
    margin-top: 1px;
    display: flex;
    align-items: center;
    color: #4f4f4f;
    font-size: 12px;
}
.zzdel {
    margin-left: auto;
    margin-right: 20px;
    cursor: pointer;
}
.Dzhushi {
    margin-top: 20px;
    width: 536px;
    height: 32px;
    background-color: #f9f9f9;
    color: #a1a1a1;
    font-size: 12px;
    padding-left: 10px;
    display: flex;
    align-items: center;
}
.emailbtn {
    width: 86px;
    height: 32px;
    margin-left: 8px;
    border-radius: 2px;
    background-color: #333333;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
}
.checksmbtnWarp {
    height: 80px;
    margin-top: 30px;
    border-top: 1px solid #e8eaec;
    display: flex;
    align-items: center;
}
.checkSmQx {
    width: 100px;
    height: 40px;
    border: 1px solid #4f4f4f;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: #4f4f4f;
    background-color: white;
    margin-left: auto;
    cursor: pointer;
}
.checkSmQr {
    width: 100px;
    height: 40px;

    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: white;
    background-color: #ef190f;
    margin-left: 16px;
    cursor: pointer;
}
</style>
<template>
  <div>
<!--    <Head @onChange="onChildSearch"></Head>-->
    <div class="homeApp">
      <div class="banner">
        <div class="bannerLeft">
          <div class="bannerLeftTop">
            <el-col :span="24">
              <el-menu
                :default-active='defaultactive'
                class="el-menu-vertical-demo"
                :unique-opened="true"
                @open="handleOpen"
                @close="handleClose"
                @select="changeComponents"
                background-color="#F0F0F0"
                text-color="#000000"
                active-text-color="blue"
              >
                <el-menu-item index="0" v-if="!subjectSign">
                  <!-- <i class="el-icon-menu"></i> -->
                  <img
                    class="ml-10"
                    v-if="key !== '0'"
                    src="../assets/byteicon/meua1.png"
                    alt=""
                  />
                  <img
                    class="ml-10"
                    v-if="key === '0'"
                    src="../assets/byteicon/meua11.png"
                    alt=""
                  />
                  <span slot="title">{{ $t('overview') }}</span>
                </el-menu-item>
                <el-menu-item v-if="!subjectSign" index="1">
                  <img
                    class="ml-10"
                    v-if="key !== '1'"
                    src="../assets/byteicon/meua3.png"
                    alt=""
                  />
                  <img
                    class="ml-10"
                    v-if="key === '1'"
                    src="../assets/byteicon/meua33.png"
                    alt=""
                  />
                  <span slot="title">{{ $t('dataSubjects') }}</span>
                </el-menu-item>
                <el-submenu index="2">
                  <template slot="title">
                    <img
                      class="ml-10"
                      v-if="
                                            key !== '2-1' &&
                                            key !== '2-2' &&
                                            key !== '2-3'
                                        "
                      src="../assets/byteicon/meua2.png"
                      alt=""
                    />
                    <img
                      class="ml-10"
                      v-if="
                                            key === '2-1' ||
                                            key === '2-2' ||
                                            key === '2-3'
                                        "
                      src="../assets/byteicon/meua22.png"
                      alt=""
                    />
                    <span>{{ $t('Myfiles') }}</span>
                  </template>
                  <el-menu-item-group>
                    <!-- <el-menu-item index="1-1"
                        >最近文件</el-menu-item
                    > -->
                    <el-menu-item index="2-2"
                    >{{ $t('allFiles') }}</el-menu-item
                    >
                    <el-menu-item index="2-3"
                    >{{ $t('labelManagement') }}</el-menu-item
                    >
                  </el-menu-item-group>
                </el-submenu>
                <el-menu-item index="4">
                  <img
                    class="ml-10"
                    v-if="key !== '4'"
                    src="../assets/byteicon/keysmeua.png"
                    alt=""
                  />
                  <img
                    class="ml-10"
                    v-if="key === '4'"
                    src="../assets/byteicon/keysmeua2.png"
                    alt=""
                  />
                  <span slot="title">{{ $t('privateDocument') }}</span>
                </el-menu-item>
                <el-submenu index="3">
                  <template slot="title">
                    <img
                      class="ml-10"
                      v-if="
                                            key !== '3-1' &&
                                            key !== '3-2' &&
                                            key !== '3-3' &&
                                            key !== '3-4' &&
                                            key !== '3-5' &&
                                            key !== '3-6' &&
                                            key !== '3-7'
                                        "
                      src="../assets/byteicon/meua4.png"
                      alt=""
                    />
                    <img
                      class="ml-10"
                      v-if="
                                            key === '3-1' ||
                                            key === '3-2' ||
                                            key === '3-3' ||
                                            key === '3-4' ||
                                            key === '3-5' ||
                                            key === '3-6' ||
                                            key === '3-7'
                                        "
                      src="../assets/byteicon/meua44.png"
                      alt=""
                    />
                    <span>{{ $t('APIdocument') }}</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item class="setWidth" index="3-1">{{ $t('generalOverview') }}</el-menu-item>
                    <el-menu-item class="setWidth" index="3-2">{{ $t('encryptionRule') }}</el-menu-item>
                    <el-menu-item class="setWidth" index="3-3">{{ $t('fileList') }}</el-menu-item>
                    <el-menu-item class="setWidth" index="3-4">{{ $t('uploadFiles') }}</el-menu-item>
                    <el-menu-item class="setWidth" index="3-5">{{ $t('downloadFiles') }}</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
              </el-menu>
            </el-col>
          </div>
          <div class="bannerLeftFoot">
            <div class="bannerLeftFootTop">
              <div class="bannerLeftFootTop_1">
                <span style="color:#EF190F">{{ $t('uploaded') }}</span>
                <span style="color:#333333" class="bannerLeftFootTop_1_1">{{ '/' + $t('used') }}</span>
                <span style="" class="bannerLeftFootTop_1_1">{{ '/' + $t('total') }}</span>
              </div>
              <div class="bannerLeftFootTop_2">
                <!-- {{ zongKouData.upLine }} -->
                <span style="color:#EF190F">{{chainCapacity}}  {{setFormat(chainCapacitySize)}}</span>
                <!-- {{ zongKouData.upLoad }} -->
                <span class="bannerLeftFootTop_1_1"
                      style="color:#333333">/{{useCapacity}}  {{setFormat(useCapacitySize)}}</span
                >
                <!-- {{ zongKouData.upLoad }} -->
                <span class="bannerLeftFootTop_1_1"
                >/{{totalCapacity}}  {{setFormat(totalCapacitySize)}}</span
                >
              </div>
              <div class="bannerLeftFootTopBottom">
                <div
                  class="bannerLeftFootBottomDiv"
                  :style="{ width: rongliang * 100 + '%' }"
                ></div>
                <div
                  class="bannerLeftFootBottomDiv2"
                  :style="{ width: rongliang2 * 100 + '%' }"
                ></div>
              </div>

            </div>
          </div>
        </div>
        <div class="bannerRight2" v-if="show === 1">
          <partnerInfo></partnerInfo>
        </div>
        <div class="bannerRight2" v-else-if="show !== 1 && showSign">
          <accentManage></accentManage>
        </div>
        <div class="bannerRight2" v-else-if="show !== 1 && !showSign">
          <AllFile
            v-if="tarSelectId === 2 && key === '2-2'"
            :searchFileValue="text"
            :first="firstClick"
          ></AllFile>
          <!-- <LastFile
              v-if="tarSelectId === 1 && key == '1-1'"
              :searchFileValue="text"
          ></LastFile> -->
          <Label v-if="key === '2-3'"></Label>
          <Summary v-if="key === '0'"></Summary>
          <Mainbody v-if="key === '1'"></Mainbody>
          <Overview @onChange="onChildSearch" v-if="key === '3-1'"></Overview>
          <encryptionRules v-if="key === '3-2'"></encryptionRules>
          <fileList v-if="key === '3-3'"></fileList>
          <UpLoad v-if="key === '3-4'"></UpLoad>
          <fileDown v-if="key === '3-5'"></fileDown>
          <!--                <Signature v-if="key == '3-2'"></Signature>-->
          <!--                <FileStatus v-if="key == '3-3'"></FileStatus>-->
          <!--                <CheckApiFile v-if="key == '3-5'"></CheckApiFile>-->
          <SearchApiFile v-if="key === '3-6'"></SearchApiFile>
          <CheckoutChange v-if="key === '3-7'"></CheckoutChange>
          <privateFile v-if="key === '4'"></privateFile>
          <expansion />
          <updateMainData />
        </div>
      </div>
      <div class="zhezhao" v-if="playerShow">
        <div class="playerBox">
          <span class="playTilte">欢迎使用冰塔数科存储系统</span>
          <div class="playInfo">
            当前为公共测试账户，仅限于产品体验使用，请勿上传重要文件！
          </div>
          <div class="playButton" @click="closePlayerFun">我知道了</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import apis from '../common/apis.js'
import Head from '../funcomponents/head.vue'
import AllFile from '../funcomponents/allFile'
import privateFile from '../funcomponents/privateFile'
import LastFile from '../funcomponents/lastFile'
import Mainbody from '../components/mainbody'
import Summary from '../funcomponents/summary'
import partnerInfo from '../funcomponents/partnerInfo'
import Label from '../funcomponents/label'
import Apiword from '../pages/apiWord'
import Overview from '../components/overview.vue'
import Signature from '../components/signature.vue'
import FileStatus from '../components/fileStatus.vue'
import UpLoad from '../components/upLoad.vue'
import fileDown from '../components/fileDown'
import fileList from '../components/fileList'
import encryptionRules from '../components/encryptionRules'
import CheckApiFile from '../components/checkApiFile.vue'
import SearchApiFile from '../components/searchApiFile.vue'
import CheckoutChange from '../components/checkoutChange.vue'
import expansion from '../components/Expansion'
import updateMainData from '../components/updateMainData'
import accentManage from '../components/accentManage'
import { EventBus } from '../../event-bus.js'
export default {
  inject: ['reload', 'showHead'],
  data () {
    return {
      subjectSign: false,
      showSign: false,
      defaultactive: '0',
      firstClick: 1,
      playerShow: false,
      text: null,
      key: '',
      openSm: false,
      tarList: [
        {
          id: 1,
          selectUrl: require('../assets/home/tarIcon_see_select.png'),
          noSelectUrl: require('../assets/home/tarIcon_see_no.png'),
          name: '最近文件',
          select: false
        },
        {
          id: 2,
          selectUrl: require('../assets/home/tarIcon_all_select.png'),
          noSelectUrl: require('../assets/home/tarIcon_all_no.png'),
          name: '全部文件',
          select: true
        }
      ],
      tarSelectId: 2,
      zongKouData: {
        upLine: '',
        upLoad: ''
      },
      rongliang2: 0,
      rongliang: 0,
      totalCapacitySize: 'TiB',
      totalCapacity: 0,
      chainCapacity: 0,
      useCapacity: 0,
      useCapacitySize: 'TiB',
      chainCapacitySize: 'TiB',
      show: 0,
      subject: false
    }
  },
  watch: {
    key (n, o) {
      this.showSign = false
    },
    subjectSign: {
      deep: true,
      handler: function (newVal, oldVal) {
        if (this.subjectSign === true) {
          this.$nextTick(() => {
            this.defaultactive = '2-2'
            this.key = '2-2'
          })
          // this.reload()
          // this.showHead()
        } else {
          this.$nextTick(() => {
            this.defaultactive = '0'
            this.key = '0'
          })
          // this.reload()
          // this.showHead()
        }
      }
    }
  },
  created () {
    let that = this
    that.$axios({
      method: 'post',
      url: apis.homeDataCountApi,

      headers: {
        'Content-Type': 'application/json',
        Bearer: localStorage.token
      }
    }).then((res) => {
      that.rongliang = res.data.useCapacity / res.data.totalCapacity
      that.rongliang2 = res.data.chainCapacity / res.data.totalCapacity
      that.chainCapacity = res.data.chainCapacityFront.split(' ')[0]
      that.chainCapacitySize = res.data.chainCapacityFront.split(' ')[1]

      that.totalCapacity = res.data.totalCapacityFront.split(' ')[0]
      that.totalCapacitySize = res.data.totalCapacityFront.split(' ')[1]

      that.useCapacity = res.data.useCapacityFront.split(' ')[0]
      that.useCapacitySize = res.data.useCapacityFront.split(' ')[1]

      that.useEntityBody = res.data.useEntityBody
      that.totalEntityBody = res.data.totalEntityBody
    })

    if (localStorage.player === '1') {
      that.playerShow = true
      console.log('1')
    }
    if (localStorage.tarSelectId) {
      console.log('123123')
      that.tarSelectId = parseInt(localStorage.tarSelectId)
      that.tarList.forEach((element) => {
        element.select = false
      })
      that.tarList[that.tarSelectId - 1].select = true
    }
    // this.getDealFileByUserFun()
    this.getUserInfo()
  },
  mounted () {
    EventBus.$on('changeAPi', msg => {
      console.log(msg)
      this.key = msg
      this.defaultactive = msg
    })
    EventBus.$on('accentManage', msg => {
      this.showSign = msg.showSign
    })
    // console.log('传参值:', localStorage.getItem('loginName'))
    if (JSON.stringify(this.$route.params) !== '{}') {
      this.show = this.$route.params.status
      this.key = this.$route.params.key
      EventBus.$on('partnerInfo', msg => {
        this.show = msg.status
        this.key = msg.key
        // this.getUserInfo()
        // console.log('ceshi', JSON.stringify(this.$route.params) === '{}')
      })
      // this.$route.params = {}
    }
    if (JSON.stringify(this.$route.params) === '{}') {
      EventBus.$on('partnerInfo', msg => {
        this.show = msg.status
        this.key = msg.key
      })
    }
  },
  components: {
    privateFile,
    Mainbody,
    Head,
    AllFile,
    LastFile,
    Summary,
    partnerInfo,
    Apiword,
    Overview,
    Signature,
    FileStatus,
    UpLoad,
    fileDown,
    fileList,
    encryptionRules,
    CheckApiFile,
    SearchApiFile,
    CheckoutChange,
    Label,
    expansion,
    updateMainData,
    accentManage
  },
  methods: {
    // 上传文件成功
    handleFileChange (e) {
      let token = localStorage.token
      let inputDOM = this.$refs.inputer
      this.file = inputDOM.files[0] // 通过DOM取文件数据
      let size = Math.floor(this.file.size / 1024) // 计算文件的大小
      this.formData = new FormData() // new一个formData事件
      this.formData.append('file', this.file) // 将file属性添加到formData里

      this.$axios({
        method: 'post',
        url: apis.uploadAccessoryApi,
        data: this.formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          Bearer: token
        }
      }).then((r) => {
        console.log(r)
        if (r.status === 200) {
          this.ZZfileUrl = r.data.fileUrl
          this.ZZsaveUrl = r.data.saveUrl
        }
      })
    },
    getUserInfo () {
      console.log(4564)
      let token = localStorage.token
      this.$axios({
        method: 'post',
        url: apis.currentUserApi,
        headers: {
          'Content-Type': 'application/json',
          Bearer: token
        }
      }).then((r) => {
        console.log(r.data)
        localStorage.setItem('userInfo', JSON.stringify(r.data))
        localStorage.setItem('stateMessage', r.data.stateMessage)
        localStorage.setItem('subjectMessage', r.data.subjectMessage)
        localStorage.setItem('subject', r.data.subject)
        this.subjectSign = r.data.subject
        if (this.subjectSign) {
          this.$nextTick(() => {
            this.key = '2-2'
            this.tarSelectId = 2
          })
        } else {
          this.$nextTick(() => {
            this.key = '0'
          })
        }
        if (r.data.real === true) {
          localStorage.setItem('real', true)
        } else {
          localStorage.setItem('real', false)
        }

        localStorage.setItem('mainBody', r.data.mainBody)
        if (r.data.subject === false) {
          if (r.data.stateMessage === false && r.data.real === false) {
            console.log(789)
            EventBus.$emit('SmRz3')
          }
        }
        if (r.data.subjectMessage === true) {
          EventBus.$emit('TXmb')
        }
        EventBus.$emit('userinfo', r.data)
      })
    },
    changeComponents (key, keyPath) {
      console.log(key)
      this.show = 0
      this.key = key
      if (key === '2-1') {
        this.changeTarFun(0)
      }
      if (key === '2-2') {
        this.changeTarFun(1)
      }
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    closePlayerFun () {
      this.playerShow = false
      localStorage.removeItem('player')
    },
    onChildSearch (value) {
      console.log(value)
      this.key = value
    },
    changeTarFun (index) {
      this.text = null
      this.tarList.forEach((element) => {
        element.select = false
      })
      if (this.tarList[index].id === 2) {
        this.firstClick++
      }
      this.tarList[index].select = true
      this.tarSelectId = this.tarList[index].id
      localStorage.tarSelectId = this.tarSelectId
    },
    kuoRongFun () {
      this.$message.info({
        content: this.$t('hint22'),
        background: true,
        duration: 5
      })
    },
    // 总括 getDealFileByUserApi
    getDealFileByUserFun () {
      let token = localStorage.token
      let params = {}
      this.$axios({
        method: 'post',
        url: apis.getDealFileByUserApi,
        data: params,
        headers: {
          'Content-Type': 'application/json',
          Bearer: token
        }
      })
        .then((res) => {
          if (res.status === 200) {
            if (!res.data.numOne) {
              res.data.numOne = 0
              this.rongliang = 0
            }
            if (!res.data.numTwo) {
              res.data.numTwo = 0
            }
            this.zongKouData.upLoad = this.bytesToSize(
              res.data.numOne
            )
            this.zongKouData.upLine = this.bytesToSize(
              res.data.numTwo
            )
            if (res.data.numOne != 0) {
              this.rongliang = res.data.numTwo / res.data.numOne
            }
          }
        })
        .catch((err) => {})
    },
    bytesToSize (limit) {
      var size = ''
      if (limit < 0.1 * 1024) {
        // 小于0.1KB，则转化成B
        size = limit.toFixed(2) + 'B'
      } else if (limit < 0.1 * 1024 * 1024) {
        // 小于0.1MB，则转化成KB
        size = (limit / 1024).toFixed(2) + 'KB'
      } else if (limit < 0.1 * 1024 * 1024 * 1024) {
        // 小于0.1GB，则转化成MB
        size = (limit / (1024 * 1024)).toFixed(2) + 'MB'
      } else if (limit < 0.1 * 1024 * 1024 * 1024 * 1024) {
        // 其他转化成GB
        size = (limit / (1024 * 1024 * 1024)).toFixed(2) + 'GB'
      } else {
        size = (limit / (1024 * 1024 * 1024 * 1024)).toFixed(2) + 'TB'
      }
      var sizeStr = size + '' // 转成字符串
      var index = sizeStr.indexOf('.') // 获取小数点处的索引
      var dou = sizeStr.substr(index + 1, 2) // 获取小数点后两位的值
      if (dou == '00') {
        // 判断后两位是否为00，如果是则删除00
        return (
          sizeStr.substring(0, index) + sizeStr.substr(index + 3, 2)
        )
      }
      return size
    },
    setFormat (str) {
      if (str === 'B') {
        return str
      } else if (str === 'KB') {
        return ('KiB')
      } else if (str === 'MB') {
        return ('MiB')
      } else if (str === 'GB') {
        return ('GiB')
      } else if (str === 'TB') {
        return ('TiB')
      } else if (str === 'PB') {
        return ('PiB')
      }
    }
  }
}
</script>
