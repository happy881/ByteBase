<template>
    <div id="app">
        <headnav v-if="show" :isshow="changeStatus" :thisReal="thisReal"></headnav>
        <router-view v-if="showRouter"/>
        <div class="setHelpButton">
          <help></help>
        </div>
    </div>
</template>

<script>
import headnav from '@/funcomponents/head'
import help from '@/funcomponents/helpbutton'
import Err404 from '@/funcomponents/Err404.vue'
import { EventBus } from '../event-bus.js'
import apis from './common/apis.js'
export default {
  components: {
    headnav,
    help,
    Err404
  },
  name: 'App',
  provide () {
    return {
      reload: this.reload,
      showHead: this.showHead
    }
  },
  data () {
    return {
      changeStatus: false,
      showRouter: true,
      show: true,
      thisReal: localStorage.getItem('real')
    }
  },
  methods: {
    reload () {
      this.showRouter = false
      this.$nextTick(() => {
        this.showRouter = true
      })
    },
    showHead () {
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    goPAGE () {
      let newUrl = window.location.href
      if (
        navigator.userAgent.match(
          /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile |BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
        )
      ) {
        localStorage.showTypeDeviec = '1'
        this.$router.push({
          name: 'mobileHome'
        })
      } else {
        localStorage.showTypeDeviec = '0'
        this.$router.push({
          name: 'home'
        })
      }
    }
  },
  mounted () {
    EventBus.$on('headhidden', msg => {
      this.show = msg
    })
    console.log('dangqian:', this.thisReal)
    // if (
    //   localStorage.loginName !== '' &&
    //         localStorage.loginName !== null &&
    //         localStorage.loginName !== undefined
    // ) {
    //   let prams = {}
    //
    //   prams.passWord = localStorage.passWord
    //   prams.login = localStorage.loginName
    //
    //   this.$axios({
    //     method: 'post',
    //     url: apis.userLoginApi,
    //     data: prams,
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   }).then((res) => {
    //     localStorage.token = res.data.bearer
    //     this.$axios({
    //       method: 'post',
    //       url: apis.getminTokenApi,
    //       headers: {
    //         'Content-Type': 'application/json',
    //         Bearer: res.data.bearer
    //       }
    //     })
    //       .then((res) => {
    //         console.log(res.data)
    //         localStorage.minioToekn = res.data.bearer
    //       })
    //       .catch((err) => {
    //         if (err.response.status === 500) {
    //           this.$message.error({
    //             content: '服务器出错了，请稍后再试',
    //             background: true,
    //             duration: 5
    //           })
    //         } else {
    //           this.$message.error({
    //             content: err.response.data,
    //             background: true
    //           })
    //         }
    //       })
    //   }).catch(err => {
    //     if (err.response.status === 400 && err.response.data) {
    //       localStorage.clear()
    //       this.$router.push({ path: '/' })
    //       this.changeStatus = true
    //       // console.log('登陆错误：', err.response.data)
    //     }
    //   })
    // }
  }
}
</script>

<style>
  .setHelpButton {
    display: inline-block;
    position: fixed;
    z-index: 9;
    bottom: 100px;
    right: 6%;
  }
.el-popover {
    padding: 5px 10px !important;
}
::-webkit-scrollbar {
  width: 0 !important;
}
::-webkit-scrollbar {
  width: 0 !important;
  height: 0;
}
input:-webkit-autofill { box-shadow: 0 0 0 1000px white inset !important;}
.el-table .ascending .sort-caret.ascending {
    border-bottom-color: #f04d30 !important;
}
.el-table .descending .sort-caret.descending {
    border-top-color: #f04d30 !important;
}
.ivu-message{
    z-index: 9999 !important;
}
.ivu-message-notice-with-background .ivu-message-notice-content-info {
    background: #fff0f1cb !important;
    color: #ef190f !important;
    border: 1px solid #fff0f1cb;
}
.ivu-icon-ios-information-circle:before {
    content: "\F202";
    color: #ef190f !important;
}
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    padding-right: 0px !important;
}
/*
.el-dropdown-menu__item :hover{
    background-color: red !important;
} */
.el-dropdown-menu__item:focus,
.el-dropdown-menu__item:not(.is-disabled):hover {
    background-color: rgba(255, 0, 0, 0.158);
    color: red;
}
.van-list__finished-text {
    color: #707889 !important;
    background: #f1f6f6;
}

.hoverUnderlineStyle {
    text-decoration: underline;
}

.overview {
    width: 100%;
    height: 100%;
    /* position: relative; */
}

.overviewHead {
    width: 100%;
    height: 74px;
    border-bottom: 1px solid #e8eaec;
    padding-left: 30px;
    display: flex;
    align-items: center;
    font-size: 18px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 800;
    color: #333333;
}

.overviewBanner {
    margin-left: 30px;
    margin-right: 30px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    margin-top: 20px;
    /* padding: 0 30px; */
}
.overviewBannermid {
    width: 900px;
    margin-left: auto;
    margin-right: auto;
}

.overviewTitle {
    padding-top: 34px;
    width: 100%;
    /*height: 22px;*/
    border-radius: 3px;
    font-size: 18px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 800;
    color: #333333;
    display: flex;
    margin-bottom: 32px;
}

.overviewTitleLine {
    width: 2px;
    /*height: 22px;*/
    background: #ef190f;
    margin-right: 10px;
}

.jianJie {
    width: 100%;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #515a6e;
    line-height: 20px;
}

.jianJie_4 {
    margin-top: 8px;
    width: 100%;
    border-right: 1px solid #e8eaec;
    border-left: 1px solid #e8eaec;
    border-bottom: 1px solid #e8eaec;
}

.jianJie_4_item {
    width: 100%;
    height: 40px;
    border-top: 1px solid #e8eaec;
    display: flex;
}

.jianJie_4_item_l {
    width: 120px;
    height: 100%;
    border-right: 1px solid #e8eaec;
    padding-left: 16px;
    line-height: 40px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #333333;
    background: #f7faf8;
}

.jianJie_4_item_r {
    flex-flow: 1;
    height: 100%;
    padding-left: 16px;
    line-height: 40px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #515a6e;
}

.jianJie_5 {
    margin-top: 16px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #515a6e;
}

.jianJie_5Title {
    font-weight: 800;
    margin-bottom: 8px;
    font-size: 14px;
}

.jianJie_5_info {
    display: flex;
    flex-direction: column;
}

.jianJie_5_infoS {
    display: flex;
}

.jianJie_5_infoSCom {
    padding: 2px;
    background: rgba(255, 112, 86, 0.1);
    color: #ff7056;
}

.jianJie_6 {
    margin-top: 16px;
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #515a6e;
}

.jsonTable {
    border-right: 1px solid #e8eaec;
    border-left: 1px solid #e8eaec;
    border-bottom: 1px solid #e8eaec;
    width: 100%;
}

.jsonTableItem {
    width: 100%;
    height: 40px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #515a6e;
    border-top: 1px solid #e8eaec;
    display: flex;
    line-height: 40px;
}

.jsonTableItemHead {
    color: #333333;
    background: #f7faf8;
}

.jsonTableItem_1 {
    width: 155px;
    padding-left: 16px;
    border-right: 1px solid #e8eaec;
}

.jsonTableItem_2 {
    width: 177px;
    padding-left: 16px;
    border-right: 1px solid #e8eaec;
}

.jsonTableItem_3 {
    width: 470px;
    padding-left: 16px;
    border-right: 1px solid #e8eaec;
}

.jsonTableItem_4 {
    padding-left: 16px;
}

.jsonInfo {
    margin-top: 16px;
}

.jsonInfoBox {
    width: 100%;
    background: black;
    border-radius: 4px;
    /* border: 1px solid #EF190F; */
    padding: 16px 20px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #f6f6f6;
}

.jsonInfoBoxContent {
    padding-left: 50px;
}

.jsonBack {
    height: 80px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #515a6e;
}

.overviewFoot {
    margin-bottom: 36px;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    align-items: center;
    border-top: 1px solid #e8eaec;
    margin-top: 30px;
}

.overviewFootItem {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #dcdee2;
    height: 100%;
    padding: 16px 0;
    justify-content: space-between;
    cursor: pointer;
}

.overviewFootItemRight {
    align-items: flex-end;
}

.overviewFootItemTop {
    display: flex;
    align-items: center;
    color: #808695;
    margin-bottom: 4px;
}

.LeftImg {
    width: 16px;
    height: 16px;
    margin-right: 2px;
}

.RightImg {
    width: 16px;
    height: 16px;
    margin-left: 2px;
}

.overviewFootItemBottom {
    font-size: 18px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #333333;
}
</style>
