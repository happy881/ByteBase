<style scoped>
  .setBtnBorder:active {
    border-color: #FFFFFF;
  }
  .setBtnBorder:focus, .setBtnBorder:hover {
    background-color: #fff;
    border-color: #FFFFFF;
  }
.loseword {
    margin-top: 15px;
    font-size: 14px;
    color: #a1a1a1;
    margin-left: auto;
    cursor: pointer;
}
.xgword {
    width: 336px;
    height: 50px;
    background-image: -webkit-linear-gradient(#ef190f, #f04d30);
    box-shadow: 0px 3px 10px rgba(240, 77, 48, 0.5);
    margin-top: 48px;
    border-radius: 4px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    cursor: pointer;
}
.loginwwpp >>> .el-dialog__header {
    display: none !important ;
}

.loginwwpp >>> .el-dialog__body {
    /*padding: 0;*/
    overflow-y: hidden;
    height: 0px;
    padding: 0 !important;
}
.loginApp {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: url("../assets/login/bg01@2x.png");
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
}

.loginHead {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #00cc6f;
    justify-content: space-between;
    padding: 0 20px 0 16px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
}

.loginHead img {
    width: 127px;
    height: 60px;
}

.languageBox {
    cursor: pointer;
    color: rgba(255, 255, 255, 0.3);
    width: 80px;
    height: 32px;
    background: #333333;
    border-radius: 16px;
    text-align: center;
    line-height: 32px;
}

.selectLan {
    color: white;
}

.enIMg {
    width: 145px !important;
    height: 30px !important;
}
.sm-pop-inner {
    position: inherit;
}

.banner2 {
    width: 556px;
    position: absolute;
    left: 50%;
    top: 1rem;
    margin-left: -278px;
    z-index: 99999;
}

.banner5 {
    width: 556px;
    position: absolute;
    left: 50%;
    top: 1rem;
    transform: translateX(-50%);
    z-index: 99999;
}
.loginBox {
    width: 100%;
    /*height: 380px;*/
    background: #ffffff;
    box-shadow: 0px 4px 15px 0px rgba(10, 128, 76, 0.15);
    border-radius: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    margin-top: 25px;
    position: relative;
}

.loginBoxHead {
    height: 70px;
    width: 100%;
    background: linear-gradient(270deg, #333333 0%, #333333 100%);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    border-radius: 12px 12px 0 0;
}
.nc_wrapper {
    width: 332px !important;
}
.loginBoxHead img {
    width: 127px;
    height: 60px;
}

.loginBoxHeadRight {
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #ffffff;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
}
.fontspaceStyle {
    letter-spacing: 5px;
}
.fontspaceStyle1 {
  letter-spacing: 0px;
}
.loginBoxHeadRightTop {
    width: 20px;
    height: 4px;
    background: #ffffff;
    border-radius: 3px;
    margin-bottom: 6px;
    margin-right: 10px;
}

.title {
    font-size: 26px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 600;
    color: #13c677;
    display: table-cell;
    vertical-align: bottom;
}

.titleType {
    margin-left: 12px;
    font-size: 20px;
    font-weight: 400;
    color: #808695;
}

.content {
    width: 100%;
    height: 290px;
    background: #ffffff;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
}
.content2 {
    width: 100%;
    height: 400px;
    background: #ffffff;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
}
.content3 {
    width: 100%;
    height: 391px;
    background: #ffffff;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
}
.content5 {
  width: 100%;
  /*height: 400px;*/
  background: #ffffff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
  /*padding-top: 40px;*/
}
.setTips {
  margin: 15px auto;
  padding-left: 20.5%;
}
.contentItem {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
}

.contentItemImg {
    width: 44px;
    height: 40px;
    background: #f2f9f9;
    border-radius: 4px;
    overflow: hidden;
}

.contentItemImg img {
    width: 100%;
    height: 100%;
}

.phoneType {
    width: 288px;
    height: 40px;
    padding: 11px 10px;
    border: 1px solid #d4d4d4;
    color: #333333;
    background-color: white !important;
    /* 透明背景*/
    font-size: 13px;
    border-radius: 4px;
    outline: none;
    /* 去除选中状态边框*/
    margin-left: 4px;
}
.phoneType3 {
    width: 332px;
    height: 35px;
    padding: 11px 10px;
    border: 1px solid #d4d4d4;
    color: #333333;
    background-color: white !important;
    /* 透明背景*/
    font-size: 13px;
    border-radius: 4px;
    outline: none;
    /* 去除选中状态边框*/
    margin-left: 4px;
}

.phoneType2 {
    width: 220px;
    height: 35px;
    padding: 11px 10px;
    border: 1px solid #d4d4d4;
    color: #333333;
    background-color: white !important;
    /* 透明背景*/
    font-size: 13px;
    border-radius: 4px;
    outline: none;
    /* 去除选中状态边框*/
    margin-left: 4px;
}
.phoneType2:focus {
    color: #333333;
    border: 1px solid black;
    /* box-shadow: 0px 1px 8px 0px rgba(0, 209, 114, 0.15); */
}
.phoneType2::-webkit-input-placeholder {
    color: #8f93a0;
    background-color: white !important;
    font-size: 13px;
}
.phoneType3:focus {
    color: #333333;
    border: 1px solid black;
    /* box-shadow: 0px 1px 8px 0px rgba(0, 209, 114, 0.15); */
}
.phoneType3::-webkit-input-placeholder {
    color: #8f93a0;
    background-color: white !important;
    font-size: 13px;
}

.phoneType:focus {
    color: #333333;
    border: 1px solid black;
    /* box-shadow: 0px 1px 8px 0px rgba(0, 209, 114, 0.15); */
}
input:-internal-autofill-selected {
    background-color: white !important;
}
.phoneType::-webkit-input-placeholder {
    color: #8f93a0;
    background-color: white !important;
    font-size: 13px;
}

.foot {
    margin-top: 34px;
    width: 336px;
    height: 50px;
    background: linear-gradient(270deg, #ef190f 0%, #ef190f 100%);
    border-radius: 6px;
    text-align: center;
    line-height: 50px;
    font-size: 18px;
    font-weight: 500;
    color: #ffffff;
    cursor: pointer;
}
.foot2 {
    margin-top: 24px;
    width: 336px;
    height: 50px;
    background: linear-gradient(270deg, #ef190f 0%, #ef190f 100%);
    border-radius: 6px;
    text-align: center;
    line-height: 50px;
    font-size: 18px;
    font-weight: 500;
    color: #ffffff;
    cursor: pointer;
}
.Itemclass {
    margin-left: 4px;
    margin-bottom: 2px;
}
.widthLength {
    width: 332px;
}
.foot:hover {
    box-shadow: 0px 3px 10px 0px rgba(255, 112, 68, 0.5);
}

.img_1 {
    position: absolute;
    /* left: 0; */
    top: 70px;
    /* width: 100%; */
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
}

.img_2 {
    position: absolute;
    right: -64px;
    top: -58px;
    width: 115.74px;
    height: 130.54;
    z-index: -1;
}

.img_3 {
    position: absolute;
    left: -78px;
    bottom: -96px;
    width: 156.94px;
    height: 177.37px;
    z-index: -1;
}

.footLogin {
    margin-top: 16px;
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    color: #ef190f;
    cursor: pointer;
}

.footLogin:hover {
    color: #ef190f;
}
.codeClass {
    width: 102px;
    margin-left: 10px;
    height: 35px;
    background-color: black;
    color: rgb(218, 218, 218);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    border-radius: 2px;
    cursor: pointer;
}
  .weixinCode {
    cursor: pointer;
    margin-left: auto;
    margin-top: 15px;
    /*color: #ef190f;*/
  }
  .codes {
    text-align: center;
    /*overflow: hidden;*/
  }
  .btns-group {
    text-align: center;
    margin: 0 30px;
    border-top: 2px dotted #DDDDDD;
    padding: 16px 0;
  }
  .password-login {
    cursor: pointer;
    margin-right: 70px;
  }
  .rotate {
    margin-left: 10px;
    color: #7B7D80;
  }
  .rotate:hover {
    color: #ef190f;
    transition: all .5s;
  }
  .setColor {
    color: #ef190f;
  }
  /deep/ iframe {
    width: 100% !important;
    /*height: 100% !important;*/
    height: 170px !important;
  }
</style>
<template>
    <div class="loginwwpp">
        <el-dialog
            :modal-append-to-body="false"
            :before-close="closedialog"
            :close-on-press-escape="true"
            :close-on-click-modal="true"
            :visible.sync="dialogVisible"
            :modal="true"
            :show-close="false"
            :lock-scroll="true"
        >
            <div class="banner2" v-if="!bindphone">
                <div class="loginBox">
                    <div class="loginBoxHead">
                        <img
                            src="../assets/login/logo_white@2x.png"
                            alt=""
                        />
                        <div class="loginBoxHeadRight">
                            <span v-if="!ischeck && !losepassword">{{ $t('welcome') }}</span>
                            <span v-if="ischeck && !losepassword">{{ $t('welcome2') }}</span>
                            <span v-if="losepassword">{{ $t('forgetPasw') }}</span>
                            <span
                              :class="lang ==='zh-CN' ? 'fontspaceStyle' : 'fontspaceStyle1'"
                                style="
                                    font-size: 14px;
                                    opacity: 0.8;
                                "
                                >{{ $t('PrivacyStoragePlatform') }}</span>
                        </div>
                    </div>
                    <div class="content" v-if="!ischeck && !losepassword && !QRcode">
                        <div class="contentItem">
                            <div class="contentItemImg">
                                <img
                                    src="../assets/login/icon_login_username@2x.png"
                                    alt=""
                                />
                            </div>
                            <input
                            autocomplete="new-password"
                                type="text"
                                class="phoneType"
                                v-model="login.loginName"
                                @keyup.enter="submit"
                                :placeholder="$t('enterUserName')"
                            />
                        </div>
                        <div class="contentItem">
                            <div class="contentItemImg">
                                <img
                                    src="../assets/login/icon_login_password@2x.png"
                                    alt=""
                                />
                            </div>
                            <input
                            autocomplete="new-password"
                                type="password"
                                class="phoneType"
                                v-model="login.passWord"
                                @keyup.enter="submit"
                                :placeholder="$t('enterPaw')"
                            />
                        </div>
                        <div class="foot" @click="loginFun(1)">
                            {{ $t('loginButton') }}
                        </div>
                        <div style="display: flex; width: 336px;">
                            <span style="margin-top: 15px; color: #b6b6b6"
                                >{{ $t('noAccount') }}<span
                                    class="footLogin"
                                    @click="checkzc"
                                    >{{ $t('register') }}</span
                                >
                            </span>
                            <span class="weixinCode" @click="goQRcode">
                              {{ $t('scanLogin') }}
                            </span>
                            <span @click="loseword" class="loseword"
                                >{{ $t('Forgotten') }}</span>
                        </div>
                    </div>

                    <div class="content2" v-if="ischeck && !losepassword">
                        <div class="contentItem" style="display: block">
                            <div class="Itemclass"><span class="setColor">*</span>{{$t('phoneNum') }}</div>
                            <input
                            autocomplete="new-password"
                                type="text"

                                class="phoneType3"
                                v-model="login.loginName"
                                @keyup.enter="submit"
                                :placeholder="$t('phoneTips')"
                            />
                        </div>

                        <div
                            class="contentItem"
                            style="display: block; margin-bottom: 5px"
                        >
                            <div class="Itemclass widthLength">
                              <span class="setColor">*</span>{{$t('SMS') }}
                            </div>
                        </div>
                        <div class="contentItem">
                            <input

                                maxlength="6"
                                :placeholder="$t('verificationCode')"
                                autocomplete="new-password"
                                class="phoneType2"
                                v-model="phoneCode"
                            />
                            <!-- //getCode -->
                            <!-- <div class="codeClass">发送验证码</div> -->
                            <span
                                v-show="show"
                                @click="submitForm"
                                class="codeClass"
                                >{{ $t('sendVerificationCode') }}</span
                            >
                            <span v-show="!show" class="codeClass"
                                >{{ count }} s</span
                            >
                        </div>
                        <div class="contentItem" style="display: block">
                            <div class="Itemclass"><span class="setColor">*</span>{{$t('password') }}</div>
                            <input
                                type="password"
                                class="phoneType3"
                                autocomplete="new-password"
                                v-model="login.passWord"
                                @keyup.enter="submit"
                                :placeholder="$t('setPasw')"

                            />
                        </div>
                        <div
                            id="sc"
                            style="
                                margin-left: 0px;
                                margin-top: 0px;
                                display: flex;
                                justify-content: center;
                                width: 332px;
                            "
                        ></div>

                        <div class="foot2" @click="loginandcheck">
                          {{ $t('RegisterALogin') }}
                        </div>

                        <span style="margin-top: 15px; color: #b6b6b6"
                            >{{ $t('havenAccount') }}<span class="footLogin" @click="checkzc"
                                >{{ $t('GoLogin') }}</span
                            >
                        </span>
                    </div>

                    <div class="content3" v-if="losepassword">
                        <div class="contentItem" style="display: block">
                            <div class="Itemclass">{{ $t('phoneNum') }}</div>
                            <input
                            autocomplete="new-password"
                                type="text"
                                class="phoneType3"
                                v-model="losephonenum"
                                @keyup.enter="submit"
                                :placeholder="$t('phoneTips')"
                            />
                        </div>
                        <div
                            class="contentItem"
                            style="display: block; margin-bottom: 6px"
                        >
                            <div class="Itemclass">{{ $t('SMStips') }}</div>
                            <div class="contentItem">
                                <input
                                    maxlength="6"
                                    autocomplete="new-password"
                                    :placeholder="$t('verificationCode')"
                                    class="phoneType2"
                                    v-model="phoneCode2"
                                />
                                <!-- //getCode -->
                                <!-- <div class="codeClass">发送验证码</div> -->
                                <span
                                    v-show="show2"
                                    @click="submitForm2"
                                    class="codeClass"
                                    >{{ $t('sendVerificationCode') }}</span
                                >
                                <span v-show="!show2" class="codeClass"
                                    >{{ count2 }} s</span
                                >
                            </div>
                        </div>

                        <div class="contentItem" style="display: block">
                            <div class="Itemclass">{{ $t('setPassword') }}</div>
                            <input
                                type="password"
                                autocomplete="new-password"
                                class="phoneType3"
                                v-model="losepord"
                                @keyup.enter="submit"
                                :placeholder="$t('setPasswordTips')"
                            />
                        </div>
                        <div class="xgword" @click="sublosepasswoer">
                            {{ $t('Confirm') }}
                        </div>
                    </div>

                    <div class="content4" v-if="QRcode">
                      <div class="codes">
                        <p>{{ $t('wechatLogin') }}<el-button class="rotate" type="text" @click="refreshCode">{{ $t('refresh') }}<i class="el-icon-refresh el-icon--right" style="color: #505050; font-weight: 600"></i></el-button></p>
                        <wxlogin
                          v-if="newCode"
                          :appid="appid"
                          :scope="'snsapi_login'"
                          :theme="'black'"
                          :redirect_uri="redirect_uri"
                          :href="href"
                          :state="states"
                          rel="external nofollow">
                        </wxlogin>
                        <p style="color: #b6b6b6;">{{ $t('wechatFailed') }} <el-button type="text" style="color: #000000;" class="setBtnBorder" @click="goWeixinPromise">{{ $t('wechatAuthorization') }}</el-button></p>
                      </div>
                      <div class="btns-group">
                        <span class="password-login" @click="QRcode = false">
                          {{ $t('accountLogin') }}
                        </span>
                        <span style="margin-top: 15px; color: #b6b6b6">{{ $t('noAccount') }}<span
                          class="footLogin"
                          @click="checkzc"
                          >{{ $t('register') }} <i class="el-icon-right" style="font-weight: 600"></i></span>
                        </span>
                      </div>
                    </div>
                    <!-- <img src="../assets/login/decor_biger@2x.png" alt="" class="img_2">
        <img src="../assets/login/decor_smaller@2x.png" alt="" class="img_3"> -->
                </div>
            </div>
            <div class="banner5" v-if="bindphone">
              <div class="loginBox">
                <div class="loginBoxHead">
                  <img
                    src="../assets/login/logo_white@2x.png"
                    alt=""
                  />
                  <div class="loginBoxHeadRight">
                            <span v-if="!ischeck && !losepassword">{{ $t('bindPhone') }}</span>
                    <span v-if="ischeck && !losepassword">{{ $t('welcome2') }}</span>
                    <span
                      style="
                                    font-size: 14px;
                                    opacity: 0.8;
                                    letter-spacing: 5px;
                                "
                    >{{ $t('PrivacyStoragePlatform') }}</span>
                  </div>
                </div>
                <p class="setTips">{{ $t('bindPhoneTips') }}</p>
                <div class="content5">
                  <div class="contentItem" style="display: block">
                    <div class="Itemclass">{{ $t('phoneNum') }}</div>
                    <input
                      autocomplete="new-password"
                      type="text"
                      class="phoneType3"
                      v-model="bind.loginName"
                      @keyup.enter="submit"
                      :placeholder="$t('signInbyPhone')"
                    />
                  </div>
                  <div
                    class="contentItem"
                    style="display: block; margin-bottom: 5px"
                  >
                    <div class="Itemclass" style="width: 332px">
                      {{ $t('SMStips') }}
                    </div>
                  </div>
                  <div class="contentItem">
                    <input maxlength="6" :placeholder="$t('verificationCode')"
                           autocomplete="new-password"
                           class="phoneType2"
                           v-model="phoneCode3"/>
                    <span v-show="show3" @click="submitForm3" class="codeClass">{{ $t('sendVerificationCode') }}</span>
                    <span v-show="!show3" class="codeClass">{{ count3 }} s</span>
                  </div>
                  <div class="contentItem" style="display: block">
                    <div class="Itemclass">{{ $t('setOrenterPsw') }}</div>
                    <input
                      type="password"
                      class="phoneType3"
                      autocomplete="new-password"
                      v-model="bind.passWord"
                      @keyup.enter="submit"
                      :placeholder="$t('setPasswordTips')"
                    />
                  </div>
                  <div style="
                                margin-left: 0px;
                                margin-top: 0px;
                                display: flex;
                                justify-content: center;
                                width: 332px;
                            "></div>
                  <div class="foot2" @click="makeSure">
                    {{ $t('confirms') }}
                  </div>
                </div>
              </div>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import apis from '../common/apis.js'
import wxlogin from 'vue-wxlogin'
import {EventBus} from '../../event-bus'
export default {
  inject: ['reload', 'showHead'],
  props: ['dialogVisible', 'logintype', 'checkcunzeng', 'dataState'],
  watch: {
    dialogVisible (a, b) {
      console.log(a, b)
    }
  },
  data () {
    return {
      lang: sessionStorage.getItem('lang'),
      state: '',
      uuid: '',
      bindphone: false,
      QRcode: true,
      phoneCode2: '',
      phoneCode3: '',
      show2: true,
      show3: true,
      losephonenum: '',
      losepassword: false,
      cc: 1,
      dd: 1,
      phoneCode: null,
      phoneNumber: '',
      count: 0,
      count2: 0,
      count3: 0,
      losepord: '',
      show: true,
      ischeck: false,
      languagetype: '2',
      login: {
        loginName: null,
        passWord: null,
        confirmPassWord: null
      },
      bind: {
        loginName: null,
        passWord: null,
        confirmPassWord: null
      },
      typeShow1: false,
      typeShow2: true,
      htmlWordData: {},
      href: 'data:text/css;base64,' +
        'LmltcG93ZXJCb3ggLnRpdGxlIHsKICBkaXNwbGF5OiBub25lOwp9Ci5pbXBvd2VyQm94IC5zdGF0dXMuc3RhdHVzX2Jyb3dzZXIgewogIGRpc3BsYXk6IG5vbmU7Cn0KLmltcG93ZXJCb3ggLnFyY29kZSB7CiAgd2lkdGg6MTUwcHg7CiAgaGVpZ2h0OiAxNTBweDsKfQouaW1wb3dlckJveCAuc3RhdHVzewogIGRpc3BsYXk6IG5vbmUKfQ==',
      appid: 'wx33e929f0137010f9', // 后端提供
      redirect_uri: encodeURIComponent('https://www.bytebase.cn/#/author'), // 后端提供
      QRcodeUrl: '',
      states: '',
      code: '',
      newCode: true
    }
  },
  components: {
    wxlogin
  },
  beforeDestroy () {
    clearInterval(this.timer)
  },
  created () {
    console.log('1111111:', this.dataState)
    if (this.dataState !== '' && this.dataState !== '2') {
      this.bindphone = true
    }
    this.phoneCode = null
    if (this.logintype === 0) {
      this.ischeck = false
    } else {
      this.ischeck = true
    }
    // let Iid = this.$route.query.idc;
    // console.log(Iid)
    AWSC.use('nvc', function (state, module) {
      // 初始化 调用module.init进行初始化
      let that = this
      window.nvc = module.init({
        // 应用类型标识。它和使用场景标识（scene字段）一起决定了无痕验证的业务场景与后端对应使用的策略模型。您可以在人机验证控制台的配置管理页签找到对应的appkey字段值，请务必正确填写。
        appkey: 'FFFF0N0000000000913F',
        // 使用场景标识。它和应用类型标识（appkey字段）一起决定了无痕验证的业务场景与后端对应使用的策略模型。您可以在人机验证控制台的配置管理页签找到对应的scene值，请务必正确填写。
        scene: 'nvc_login',
        // 二次验证获取人机信息串，跟随业务请求一起上传至业务服务器，由业务服务器进行验签。
        success: function (data) {
          let params = {}
          params.mobile = that.login.loginName
          params.type = 1
          params.afs = {
            appKey: 'FFFF0N0000000000913F',
            scene: 'nvc_login'
          }
          that.$axios({
            method: 'post',
            url: apis.sendSmsAuthCodeOrEmail,
            data: params,
            headers: {
              'Content-Type': 'application/json'
            }
          })
            .then((res) => {
              if (res.data.bizCode === '200') {
                const TIME_COUNT = 60
                if (!that.timer) {
                  that.count = TIME_COUNT
                  that.show = false
                  that.timer = setInterval(() => {
                    if (
                      that.count > 0 &&
                                            that.count <= TIME_COUNT
                    ) {
                      that.count--
                    } else {
                      that.show = true
                      clearInterval(that.timer)
                      that.timer = null
                    }
                  }, 1000)
                }
              } else {
                var ncoption = {
                  // 声明滑动验证需要渲染的目标ID。
                  language: 'cn',
                  // 滑动验证长度配置
                  customWidth: 300,
                  renderTo: 'sc'
                }
                // 唤醒二次验证（滑动验证码）
                window.nvc.getNC(ncoption)
              }
            })
            .catch((err) => {
              if (err.response.status === 500) {
                that.$message.error({
                  content: this.$t('hint9'),
                  background: true,
                  duration: 5
                })
              } else {
                that.$message.error({
                  content: this.$t('hint125'),
                  background: true
                })
              }
            })
        },
        // 前端二次验证失败时触发该回调参数
        fail: function (failCode) {
          window.console && console.log(failCode)
        },
        // 前端二次验证加载异常时触发该回调参数。
        error: function (errorCode) {
          window.console && console.log(errorCode)
        }
      })
      // 绑定事件
    })
    if (this.languagetype === '1') {
      this.$message.error({
        content: this.$t('hint22'),
        background: true,
        duration: 5
      })
    } else {
      this.htmlWordData = this.$store.state.chineseData
      this.typeShow1 = false
      this.typeShow2 = true
    }
    this.login.wordName = this.htmlWordData.loginCodeSend
  },
  mounted () {
    this.getQrCode()
    EventBus.$on('params', msg => {
      // console.log('dangqian', this.bindphone)
      this.state = msg.state
      this.uuid = msg.uuid
      if ((this.state === '3' || this.state === '1') && this.state !== '') {
        this.bindphone = true
        // console.log('stateCode:', this.bindphone)
      } else if (this.state === '2') {
        this.$router.push('/home')
      }
    })
    console.log('dangqian', this.uuid)
  },
  methods: {
    submitForm2 () {
      let that = this
      window.nvc.getNVCValAsync(function (nvcVal) {
        if (that.losephonenum === '' || that.losephonenum.length !== 11) {
          that.$message.info({
            content: this.$t('hint65'),
            background: true,
            duration: 3
          })
          return
        }
        let params = {}
        params.mobile = that.losephonenum
        params.type = 1
        params.afs = {
          appKey: 'FFFF0N0000000000913F',
          scene: 'nvc_login'
        }
        if (that.cc === 1) {
          that.cc = 0
          that.$axios({
            method: 'post',
            url: apis.sendSmsAuthCodeOrEmail,
            data: params,
            headers: {
              'Content-Type': 'application/json'
            }
          })
            .then((res) => {
              if (res.data.bizCode === '200') {
                const TIME_COUNT = 60
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
                      that.cc = 1
                    }
                  }, 1000)
                }
              } else {
                var ncoption = {
                  // 声明滑动验证需要渲染的目标ID。
                  language: 'cn',
                  // 滑动验证长度配置
                  customWidth: 332,
                  renderTo: 'sc'
                }
                // 唤醒二次验证（滑动验证码）
                window.nvc.getNC(ncoption)
              }
            })
            .catch((err) => {
              if (err.response.status === 500) {
                that.$message.error({
                  content: this.$t('hint9'),
                  background: true,
                  duration: 5
                })
              } else {
                that.$message.error({
                  content: this.$t('hint118'),
                  background: true
                })
              }
            })
        } else {
          that.cc = 0
        }
      })
    },
    submitForm3 () {
      let that = this
      window.nvc.getNVCValAsync(function (nvcVal) {
        if (that.bind.loginName === '' || that.bind.loginName.length !== 11) {
          that.$message.info({
            content: this.$t('hint65'),
            background: true,
            duration: 3
          })
          return
        }
        let params = {}
        params.mobile = that.bind.loginName
        params.type = 1
        params.afs = {
          appKey: 'FFFF0N0000000000913F',
          scene: 'nvc_login'
        }
        if (that.dd === 1) {
          that.dd = 0
          that.$axios({
            method: 'post',
            url: apis.sendSmsAuthCodeOrEmail,
            data: params,
            headers: {
              'Content-Type': 'application/json'
            }
          })
            .then(res => {
              if (res.data.bizCode === '200') {
                const TIME_COUNT = 60
                console.log('当前状态1:', that.show3)
                if (!that.timer3) {
                  that.count3 = TIME_COUNT
                  that.show3 = false
                  console.log('当前状态2:', that.show3)
                  that.timer3 = setInterval(() => {
                    if (
                      that.count3 > 0 &&
                      that.count3 <= TIME_COUNT
                    ) {
                      that.count3--
                    } else {
                      that.show3 = true
                      clearInterval(that.timer3)
                      that.timer3 = null
                    }
                  }, 1000)
                }
              }
            })
            .catch((err) => {
              // if (err.response.status === 500) {
              //   that.$message.error({
              //     content: '服务器出错了，请稍后再试',
              //     background: true,
              //     duration: 5
              //   })
              // } else {
              //   that.$message.error({
              //     content: err.response.data,
              //     background: true
              //   })
              // }
              this.$message.error({
                content: this.$t('hint41'),
                duration: 5
              })
            })
        } else {
          that.dd = 0
        }
      })
    },
    sublosepasswoer () {
      let that = this
      var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/
      if (!reg.test(that.losepord)) {
        that.$message.info({
          content: that.$t('hint8'),
          background: true,
          duration: 3
        })
        return
      }
      if (that.phoneCode2 === '') {
        that.$message.info({
          content: that.$t('hint108'),
          background: true,
          duration: 3
        })
        return
      }

      let params = {}
      params.mobile = that.losephonenum
      params.login = that.losephonenum
      params.code = that.phoneCode2
      params.passWord = that.losepord
      params.confirmPassWord = that.losepord
      params.afs = {
        appKey: 'FFFF0N0000000000913F',
        scene: 'nvc_login'
      }
      that.$axios({
        method: 'post',
        url: apis.forgetPassWordApi,
        data: params,
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((res) => {
          console.log(res)
          that.$message.info({
            content: this.$t('modifySuc'),
            background: true,
            duration: 3
          })
          that.ischeck = false
          this.losepassword = false
        })
        .catch((e) => {
          console.log()
          that.$message.info({
            content: this.$t('hint125'),
            background: true,
            duration: 3
          })
        })
    },
    loseword () {
      this.losepassword = true
    },
    goQRcode () {
      this.QRcode = true
      // console.log('扫码登录')
    },
    refreshCode () {
      this.reload()
      // 移除组件
      this.newCode = false
      // 在组件移除后，重新渲染组件
      // this.$nextTick可实现在DOM 状态更新后，执行传入的方法。
      this.$nextTick(() => {
        this.newCode = true
      })
      // console.log('刷新二维码')
    },
    goWeixinPromise () {
      // window.open(this.QRcodeUrl)
      window.location.href = this.QRcodeUrl
      this.QRcode = false
      // console.log('微信授权页面')
    },
    // 获取二维码
    getQrCode () {
      let that = this
      let params = {}
      that.$axios({
        method: 'post',
        url: apis.getQrCodeApi,
        data: params,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        if (res.status === 200) {
          this.QRcodeUrl = res.data.qrcodeUrl
          this.states = res.data.reqUuid
          console.log('获取二维码地址：', res.data)
          EventBus.$emit('sendParams', { state: this.states, url: this.redirect_uri })
        }
      }).catch(err => {
        that.$message.error({
          content: this.$t('hint125'),
          background: true
        })
      })
    },
    closedialog () {
      this.$emit('closepop2')
      this.bindphone = false
    },
    loginandcheck () {
      let that = this
      if (this.login.loginName === null || this.login.loginName === '') {
        that.$message.error({
          content: that.$t('hint110'),
          background: true,
          duration: 5
        })
        return
      }
      if (this.phoneCode === null) {
        that.$message.error({
          content: that.$t('enterVer'),
          background: true,
          duration: 5
        })
        return
      }
      if (this.login.passWord === null || this.login.passWord === '') {
        that.$message.error({
          content: that.$t('hint109'),
          background: true,
          duration: 5
        })
        return
      }
      var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/
      if (!reg.test(this.login.passWord)) {
        that.$message.info({
          content: that.$t('hint8'),
          background: true,
          duration: 3
        })
        return
      }
      if (this.login.loginName === null || this.login.loginName === '') {
        that.$message.error({
          content: that.$t('hint110'),
          background: true,
          duration: 5
        })
        return
      }

      let params = {
        code: this.phoneCode,
        passWord: this.login.passWord,
        login: this.login.loginName,
        afs: {
          appKey: 'FFFF0N0000000000913F',
          scene: 'nvc_login'
        }
      }
      that.$axios({
        method: 'post',
        url: apis.registeredApi,
        data: params,
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((res) => {
          console.log(res)
          if (res.status === 200) {
            this.loginFun()
          }
        })
        .catch((err) => {
          console.log(err)
          this.$message.error({
            content: this.$t('hint143'),
            background: true,
            duration: 3
          })
        })
    },
    makeSure () {
      let that = this
      let params = {
        code: that.phoneCode3,
        mobile: that.bind.loginName,
        password: that.bind.passWord,
        reqUuid: that.states
      }
      if (!params.mobile) {
        that.$message.error({
          content: that.$t('hint110'),
          background: true,
          duration: 5
        })
      } else if (!params.code) {
        that.$message.error({
          content: that.$t('enterVerCode'),
          background: true,
          duration: 5
        })
      } else if (!params.password) {
        that.$message.error({
          content: that.$t('hint111'),
          background: true,
          duration: 5
        })
      } else if (params.mobile && params.code && params.password) {
        console.log('调接口')
        that.$axios({
          method: 'post',
          url: apis.mobileBindApi,
          data: params,
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(res => {
          if (res.status === 200) {
            console.log(res.data)
            localStorage.token = res.data.bearer
            localStorage.loginName = that.bind.loginName
            this.getMinioTokenFun(res.data.bearer)
            this.$emit('closepop')
          }
        }).catch(err => {
          // console.log(err)
          if (err.response.status === 500) {
            that.$message.error({
              content: this.$t('hint9'),
              background: true,
              duration: 5
            })
          } else {
            that.$message.error({
              content: this.$t('hint125'),
              background: true
            })
          }
        })
      }
    },
    submitForm () {
      let that = this
      window.nvc.getNVCValAsync(function (nvcVal) {
        if (
          that.login.loginName === '' ||
                    that.login.loginName.length !== 11 || that.login.loginName.length === null
        ) {
          that.$message({
            content: this.$t('hint65'),
            background: true,
            duration: 3
          })
          return
        }
        let params = {}
        params.mobile = that.login.loginName
        params.type = 1
        params.afs = {
          appKey: 'FFFF0N0000000000913F',
          scene: 'nvc_login'
        }
        if (that.cc === 1) {
          that.cc = 0
          that.$axios({
            method: 'post',
            url: apis.sendSmsAuthCodeOrEmail,
            data: params,
            headers: {
              'Content-Type': 'application/json'
            }
          })
            .then((res) => {
              if (res.status === 200) {
                const TIME_COUNT = 60
                if (!that.timer) {
                  that.count = TIME_COUNT
                  that.show = false
                  that.timer = setInterval(() => {
                    if (
                      that.count > 0 &&
                                            that.count <= TIME_COUNT
                    ) {
                      that.count--
                    } else {
                      that.show = true
                      clearInterval(that.timer)
                      that.timer = null
                      that.cc = 1
                    }
                  }, 1000)
                }
              }
              // else {
              //   var ncoption = {
              //     // 声明滑动验证需要渲染的目标ID。
              //     language: 'cn',
              //     // 滑动验证长度配置
              //     customWidth: 332,
              //     renderTo: 'sc'
              //   }
              //   // 唤醒二次验证（滑动验证码）
              //   window.nvc.getNC(ncoption)
              // }
            })
            .catch((err) => {
              if (err.response.status === 500) {
                that.$message.error({
                  content: this.$t('hint9'),
                  background: true,
                  duration: 5
                })
              } else {
                that.$message.error({
                  content: this.$t('hint118'),
                  background: true
                })
              }
            })
        } else {
          that.cc = 0
        }
      })
    },
    submit () {
      this.loginFun()
    },
    checkzc () {
      this.ischeck = !this.ischeck
      this.QRcode = false
      this.$emit('checkzc', this.ischeck)
    },
    changelanguagetype (type) {
      if (type === '1') {
        this.$message.info({
          content: this.$t('hint22'),
          background: true,
          duration: 5
        })
      } else {
        this.languagetype = '2'
        localStorage.languagetype = '2'
        this.htmlWordData = this.$store.state.chineseData
        this.typeShow1 = false
        this.typeShow2 = true
      }
      this.login.wordName = this.htmlWordData.loginCodeSend
    },
    loginFun (type) {
      let params = {}
      if (type === 2) {
        params.passWord = 'KAJX5030t434Ib19dYaD11D31wO7BBD8@'
        params.login = 'test'
      } else {
        if (!this.login.loginName) {
          this.$message.error({
            content: this.$t('enterUserName2'),
            background: true,
            duration: 5
          })
          return
        }
        if (!this.login.passWord) {
          this.$message.error({
            content: this.$t('enterPaw2'),
            background: true,
            duration: 5
          })
          return
        }
        params.passWord = this.login.passWord
        params.login = this.login.loginName
      }
      this.$axios({
        method: 'post',
        url: apis.userLoginApi,
        data: params,
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((res) => {
          if (type === 2) {
            localStorage.player = '1'
          }
          localStorage.token = res.data.bearer
          localStorage.loginName = this.login.loginName
          localStorage.passWord = this.login.passWord
          this.getUserInfo()
          this.$emit('closepop')
          this.getMinioTokenFun(res.data.bearer)
          if (this.checkcunzeng) {
            this.$router.push('/home')
          }
        })
        .catch((err) => {
          // console.log('2222',err)
          if (err.response.status === 500) {
            this.$message.error({
              content: this.$t('hint9'),
              background: true,
              duration: 5
            })
          } else {
            if (err.response.data === '该用户不存在！') {
              this.$message.error({
                content: this.$t('hint141'),
                background: true,
                duration: 5
              })
            }
            if (err.response.data === '密码校验失败') {
              this.$message.error({
                content: this.$t('hint142'),
                background: true,
                duration: 5
              })
            }
          }
        })
    },
    getMinioTokenFun (token) {
      this.$axios({
        method: 'post',
        url: apis.getminTokenApi,
        headers: {
          'Content-Type': 'application/json',
          Bearer: token
        }
      })
        .then((res) => {
          console.log(res.data)
          localStorage.minioToekn = res.data.bearer
        })
        .catch((err) => {
          if (err.response.status === 500) {
            this.$message.error({
              content: this.$t('hint9'),
              background: true,
              duration: 5
            })
          } else {
            this.$message.error({
              content: this.$t('getError'),
              background: true
            })
          }
        })
    },
    getUserInfo () {
      let token = localStorage.token
      this.$axios({
        method: 'post',
        url: apis.currentUserApi,
        headers: {
          'Content-Type': 'application/json',
          Bearer: token
        }
      }).then((r) => {
        localStorage.setItem('subject', r.data.subject)
        console.log('231231312313')
        // this.reload()
        this.showHead()
      })
    }
  }
}
</script>
