<template>
    <div class="allContent">
        <div class="Sutitle">{{ $t('overview') }}</div>
        <div class="Stiewarp">
            <img class="baicon" src="../assets/byteicon/ba.png" alt="" />
            <div>
                <div>{{ $t('tips') }}</div>
                <div style="line-height: 32px">
                  {{ $t('tipsContent') }}
<!--                    为鼓励数据伙伴和数据主体可以体验ByteBase隐私存储平台服务，我们推出了相应的激励政策，以扶持和推动更多数据主体或其委托的数据伙伴，将有效价值数据存入上链。目前数据伙伴方和数据主体方均暂只接受企业类客户申请，个人资质者后续酌情开放。-->
                </div>
                <div style="margin-top: 10px">
<!--                    方和数据主体方均暂只接受企业类客户申请，个人资质者后续酌情开放。-->
                </div>
            </div>
        </div>

        <div class="Stmidwarp">
            <div class="Stmidleft">
                <div class="Stmidtitle">{{ $t('capacitySummary') }}</div>
                <div class="StLeft-3">
                    <div class="Slef">
                        <div class="xtitle">{{ $t('totalCapacity') }}</div>
                        <div class="number">
                            <div class="number-weight">{{ totalCapacity }}<span class="danwei">{{setFormat(totalCapacitySize)}}</span></div>
<!--                            <div class="number-weight">{{ totalCapacity }}<span class="danwei">{{ signTotal }}</span></div>-->
<!--                            <div class="danwei">TiB</div>-->
                        </div>
                    </div>
                    <div class="Slef">
                        <div>{{ $t('usedCapacity') }}</div>
                        <div class="number">
                            <div class="number-weight">{{ useCapacity }}<span class="danwei">{{setFormat(useCapacitySize)}}</span></div>
<!--                            <div class="number-weight">{{ useCapacity }}<span class="danwei">{{ signUse }}</span></div>-->
<!--                            <div class="danwei">TiB</div>-->
                        </div>
                    </div>
                    <div class="Slef" style="border-right: 0">
                        <div>{{ $t('uploadedCapacity') }}</div>
                        <div class="number">
                            <div class="number-weight">{{ chainCapacity }}<span class="danwei">{{setFormat(chainCapacitySize)}}</span></div>
<!--                            <div class="number-weight">{{ chainCapacity }}<span class="danwei">{{ signChain }}</span></div>-->
<!--                            <div class="danwei">TiB</div>-->
                        </div>
                    </div>
                </div>
            </div>
            <div class="Stmidright">
                <div class="Stmidtitle">{{ $t('dataSubjects') }}</div>
                <div class="StLeft-3">
                    <div class="Slef-r">
                        <div class="xtitle">{{ $t('totalSubject') }}</div>
                        <div class="number">
                            <div class="number-weight">
                                {{ totalEntityBody }}
                            </div>
                            <div class="danwei" v-if="showSigns === 'zh-CN'">个</div>
                        </div>
                    </div>
                    <div class="Slef-r" style="border-right:0">
                        <div class="xtitle">{{ $t('certifiedSubject') }}</div>
                        <div class="number">
                            <div class="number-weight">{{ useEntityBody }}</div>
                            <div class="danwei" v-if="showSigns === 'zh-CN'">个</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="Slcwarp">
            <div class="Slctitle">{{ $t('applicationProcess') }}</div>
            <div class="Sccc">
                <div class="Scitem">
                    <img
                        class="smimg"
                        src="../assets/byteicon/shiming.png"
                        alt=""
                    />
                    <div style="margin-top: 10px">{{ $t('Authentication') }}</div>
                    <div v-if="real">{{ '(' + $t('verified') + ')' }}</div>
                    <div v-if="!real">{{ '(' + $t('notCertified') + ')' }}</div>
                </div>
                <div class="Scfgx"></div>
                <div class="Scitem">
                    <img
                        class="smimg"
                        src="../assets/byteicon/Sqicon.png"
                        alt=""
                    />
                    <div style="margin-top: 10px">{{ $t('applySubject') }}</div>
                </div>
                <div class="Scitem" style="margin-right: 20px">
                    <div class="Sqtitle">{{ $t('nolimition') }}</div>
                    <div class="Sxxitem">
                        <div style="color: #a1a1a1">①</div>
                        <div class="Sxx"></div>
                    </div>
                    <div class="Sxxitem">
                        <div style="color: #a1a1a1">②</div>
                        <div class="Sxx"></div>
                    </div>
                    <div class="Sxxitem">
                        <div style="color: #a1a1a1">Ⓝ</div>
                        <div class="Sxx"></div>
                    </div>
                </div>
                <div class="Scitem">
                    <img
                        class="smimg"
                        src="../assets/byteicon/Sqicon22.png"
                        alt=""
                    />
                    <div style="margin-top: 10px">{{ $t('review') }}</div>
                </div>
                <div class="Scitem" style="margin-left: 20px">
                    <div class="Sqtitle"></div>
                    <div class="Sxxitem">
                        <div style="color: white"></div>
                        <div class="Sxx"></div>
                    </div>
                    <div class="Sxxitem">
                        <div style="color: white"></div>
                        <div class="Sxx"></div>
                    </div>
                    <div class="Sxxitem">
                        <div style="color: white"></div>
                        <div class="Sxx"></div>
                    </div>
                </div>
                <div class="Scitem" style="margin-left: 20px">
                    <img
                        class="smimg"
                        src="../assets/byteicon/Sqicon33.png"
                        alt=""
                    />
                    <div style="margin-top: 10px">{{ $t('successfulAudit') }}</div>
                </div>
            </div>
            <div class="SCfgxc"></div>
            <div class="Scbtn" v-if="real" @click="SqZT">{{ $t('applySubject') }}</div>
            <div class="Scbtn" v-if="!real" @click="Smrz">{{ $t('Authentication') }}</div>
        </div>
    </div>
</template>

<script>
import { EventBus } from '../../event-bus.js'
import apis from '../common/apis.js'
export default {
  data () {
    return {
      real: false,
      mainBody: false,
      openSm: false,
      chainCapacity: 0,
      totalCapacity: 0,
      totalEntityBody: 0,
      useCapacity: 0,
      useEntityBody: 0,
      chainCapacitySize: '',
      useCapacitySize: '',
      totalCapacitySize: '',
      signChain: null,
      signTotal: null,
      signUse: null,
      accessKey: null,
      secretKey: null,
      visibleFirst: true,
      visibleSecond: true,
      showSigns: sessionStorage.getItem('lang')
    }
  },
  created () {
    let that = this
    this.$axios({
      method: 'post',
      url: apis.homeDataCountApi,

      headers: {
        'Content-Type': 'application/json',
        Bearer: localStorage.token
      }
    }).then((res) => {
      this.chainCapacity = res.data.chainCapacityFront.split(' ')[0]
      this.chainCapacitySize = res.data.chainCapacityFront.split(' ')[1]
      this.totalCapacity = res.data.totalCapacityFront.split(' ')[0]
      this.totalCapacitySize = res.data.totalCapacityFront.split(' ')[1]

      this.useCapacity = res.data.useCapacityFront.split(' ')[0]
      this.useCapacitySize = res.data.useCapacityFront.split(' ')[1]
      this.signChain = res.data.chainCapacityFront.split(' ')[1]
      this.totalCapacity = res.data.totalCapacityFront.split(' ')[0]
      this.signTotal = res.data.totalCapacityFront.split(' ')[1]
      this.totalEntityBody = res.data.totalEntityBody
      this.useCapacity = res.data.useCapacityFront.split(' ')[0]
      this.signUse = res.data.useCapacityFront.split(' ')[1]
      this.useEntityBody = res.data.useEntityBody
      this.totalEntityBody = res.data.totalEntityBody
    })

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
      that.real = r.data.real
      that.mainBody = r.data.mainBody
      that.secretKey = r.data.secretKey
      that.accessKey = r.data.accessKey
      sessionStorage.setItem('accessKey', r.data.accessKey)
      sessionStorage.setItem('secretKey', r.data.secretKey)
    })
  },
  mounted () {
    let that = this
    EventBus.$on('SmRz', (msg) => {
      // A发送来的消息
      this.openSm = true
    })
    EventBus.$on('rzsuccess', (msg) => {
      this.$axios({
        method: 'post',
        url: apis.homeDataCountApi,

        headers: {
          'Content-Type': 'application/json',
          Bearer: localStorage.token
        }
      }).then((res) => {
        this.chainCapacity = res.data.chainCapacityFront.split(' ')[0]
        this.signChain = res.data.chainCapacityFront.split(' ')[1]
        this.totalCapacity = res.data.totalCapacityFront.split(' ')[0]
        this.signTotal = res.data.totalCapacityFront.split(' ')[1]
        this.totalEntityBody = res.data.totalEntityBody
        this.useCapacity = res.data.useCapacityFront.split(' ')[0]
        this.signUse = res.data.useCapacityFront.split(' ')[1]
        this.useEntityBody = res.data.useEntityBody
      })

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
        that.real = r.data.real
        that.mainBody = r.data.mainBody
        that.secretKey = r.data.secretKey
        that.accessKey = r.data.accessKey
      })
    })
  },
  methods: {
    SqZT () {
      EventBus.$emit('RzZT')
    },
    Smrz () {
      EventBus.$emit('SmRz')
    },
    changePassFirst (value) {
      this.visibleFirst = !(value === 'show') // 切换密码框的显示
      this.$nextTick(function () { // 对焦密码框
        this.$refs['password'].focus()
      })
    },
    changePassSecond (value) {
      this.visibleSecond = !(value === 'show') // 切换密码框的显示
      this.$nextTick(function () { // 对焦密码框
        this.$refs['password'].focus()
      })
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

<style  scoped>
.smmidwarp {
    display: flex;
    height: 231px;
    width: 100%;
    border-bottom: 1px solid #e8eaec;
}
.warptitme {
    color: #333333;
    font-size: 18px;
    line-height: 25px;
    font-weight: bold;
}
.warptitme2 {
    color: #333333;
    font-size: 14px;
    line-height: 28px;
    margin-top: 20px;
}
.smrzfontwarp {
    width: 425px;
    margin-left: 20px;
    color: #333333;
    margin-top: 50px;
}
.Smidbottom {
    display: flex;
    align-items: center;
    height: 80px;
    width: 100%;
}
.smdialog >>> .el-checkbox__input.is-checked .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #ef190f;
    border-color: #ef190f;
}
.smdialog >>> .el-checkbox__inner:hover {
    border: 1px solid #ef190f;
}
.smdialog >>> .el-checkbox__input .el-checkbox__inner {
    border-color: #cccccc;
    width: 14px;
    height: 14px;
    margin-left: 32px;
}
.smdialog >>> .el-icon-close:before {
    content: "\E6DB";
    font-size: 20px;
    font-weight: bold;
    color: black;
}
.smdialog >>> .el-dialog--center {
    text-align: center;
    margin-top: 30vh !important;
}
.smdialog >>> .el-dialog__header {
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
.smdialog >>> .el-dialog__title {
    font-size: 21px;
    color: #333333;
    font-weight: bold;
}
.smdialog >>> .el-dialog__body {
    height: 312px;
    padding: 0 !important;
    display: block;
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
.allContent {
  padding-bottom: 46px;
}
.nosee {
    color: #333333;
    font-size: 14px;
    margin-left: 10px;
    font-weight: bold;
}
.gosm {
    border-radius: 4px;
    width: 100px;
    height: 40px;
    color: white;
    background-color: #ef190f;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 32px;
    margin-left: auto;
    cursor: pointer;
}
.SCfgxc {
    width: 100%;
    height: 1px;
    margin-top: 30px;
    background-color: #e8eaec;
}
.Scbtn {
    margin: 0 auto;
    width: 140px;
    height: 40px;
    background-color: #ef190f;
    border-radius: 4px;
    color: white;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    cursor: pointer;
}
.Sxxitem {
    display: flex;
    align-items: center;
    height: 22px;
}
.Sxx {
    width: 160px;
    border: 1px dashed #a1a1a1;
}
.Sqtitle {
    color: #a1a1a1;
    font-size: 14px;
    height: 20px;
    font-weight: 100 !important;
}
.smimg {
    width: 52px;
    height: 60px;
    margin-top: 20px;
}
.smimg2 {
    width: 52px;
    height: 60px;
    margin-top: 52px;
    margin-left: 60px;
}
.Scitem {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.Scfgx {
    width: 160px;
    height: 1px;
    background-color: #a1a1a1;
    margin-top: 52px;
    margin-left: 10px;
}
.baicon {
    width: 18px;
    height: 18px;
}
.Stiewarp {
    margin-left: 30px;
    margin-right: 30px;
    /* width: 1620px; */
    /* height: 120px; */
    background-color: #fff3f2;
    display: flex;
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 240px;
    border-radius: 4px;
    margin-top: 20px;
    padding-bottom: 20px;
    font-size: 14px;
     max-width: 1620px;
     min-width: 1100px;
    color: #333333;
}
.Stmidwarp {
    margin-left: 30px;
    margin-right: 30px;
    max-width: 1620px;
    min-width: 1080px;
    display: flex;
    align-items: center;

    margin-top: 20px;
}
.Stmidleft {
    /* width: 800px; */
    width: 100%;
    min-width: 560px;
    max-width: 800px;
    height: 160px;
    background-color: white;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
}
.Stmidright {
    width: 100%;
      min-width: 560px;
    max-width: 800px;
    /* width: 800px; */
    height: 160px;
    background-color: white;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    margin-left: 20px;
}
.Slcwarp {
    min-width: 1140px;
    height: 392px;
    margin-top: 20px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    margin-left: 30px;
    margin-right: 30px;
}
.keys {
  margin-top: 20px;
  margin-left: 30px;
  margin-right: 30px;
  display: flex;
  /*justify-content: space-between;*/
}
.accessKey, .keySecret {
  height: 140px;
  width: 800px;
  padding: 0 24px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 4px;
}
.accessKey {
  margin-right: 20px;
}
.keysTitle {
  margin-top: 24px;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  color: #333333;
  opacity: 1;
}
.fontsize {
  color: #333333;
  font-size: 19px;
  line-height: 36px;
}
.hiddenPassword {
  height: 16px;
  width: 18px;
  margin-top: 10px;
  /*vertical-align: middle;*/
}
.Stmidtitle {
    color: #333333;
    font-size: 16px;
    margin-left: 24px;
    margin-top: 24px;
    font-weight: bold;
    font-family: "Alibaba PuHuiTi";
}
.StLeft-3 {
    margin-top: 15px;
    display: flex;
    align-items: center;
    height: 70px;
}
.Slef {
    /* width: 267px; */
    width: 33.3%;
    border-right: 1px solid #e8eaec;
    padding-left: 40px;
}
.Slef-r {
    width: 50%;
    /* width: 400px; */
    border-right: 1px solid #e8eaec;
    padding-left: 40px;
}
.xtitle {
    color: #333333;
    font-size: 14px;
}
.number {
    width: 168px;
    height: 50px;
    margin-top: 4px;
    color: #333333;
    align-items: center;
    display: flex;
    font-size: 14px;
}
.number-weight {
    font-size: 36px;
    font-weight: bold;
}
.danwei {
    font-size: 14px;
    margin-left: 5px;
    margin-top: 15px;
    font-weight: normal;
}
.Slctitle {
    color: #333333;
    font-size: 24px;
    padding-top: 40px;
    display: flex;
    justify-content: center;
    font-weight: bold;
}
.Sccc {
    display: flex;
    justify-content: center;
    margin-top: 58px;
    height: 132px;
    font-weight: bold;
    font-size: 14px;
    color: #333333;
    min-width: 1080px;
}
</style>
