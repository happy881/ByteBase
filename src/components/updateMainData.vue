<template>
    <div>
        <el-dialog
            title="升级数据主体"
            :visible.sync="showUpd"
            :append-to-body="true"
            :center="true"
            v-if="showUpd"
        >
            <!--        申请步骤-->
            <ul class="stepsMenue">
                <li class="members">
                    <div :class="active === 0 ? 'order' : 'noActive'">1</div>
                    <span :class="active === 0 ? 'label' : 'changeLab'"
                        >升级数据主体</span
                    >
                </li>
                <span class="el-icon-arrow-right arrows"></span>
                <li class="members">
                    <div :class="active === 1 ? 'order' : 'noActive'">2</div>
                    <span :class="active === 1 ? 'label' : 'changeLab'"
                        >平台审核</span
                    >
                </li>
                <span class="el-icon-arrow-right arrows"></span>
                <li class="members">
                    <div :class="active === 2 ? 'order' : 'noActive'">3</div>
                    <span :class="active === 2 ? 'label' : 'changeLab'"
                        >审核通过</span
                    >
                </li>
            </ul>
            <!--        选择内容-->
            <div class="modelContent">
                <div v-if="active === 0">
                    <span><span class="starSign">*</span>选择数据主体</span>
                    <div class="chooseType">
                        <div
                            :class="sizeIndex === 0 ? 'checked' : 'type'"
                            v-if="level < 2"
                            @click="chooseB"
                        >
                            B类数据主体
                        </div>
                        <div
                            :class="sizeIndex === 1 ? 'checked' : 'type'"
                            v-if="level <= 3"
                            @click="chooseC"
                        >
                            C类数据主体
                        </div>
                    </div>
                    <div
                        class="updateMain"
                        v-if="
                            (changeIndex === 2 || changeIndex === 3) &&
                            level === 1
                        "
                    >
                        <div class="promission">
                            <span
                                ><span class="starSign">*</span
                                >数据主体对数据联系人的授权</span
                            >
                            <div @click="xzmb" class="modelDownLoad">
                                <p>授权书模板下载</p>
                                <img
                                    class="downLoad"
                                    src="../assets/byteicon/down.png"
                                    alt="downLoad"
                                />
                            </div>
                        </div>
                        <div class="upzzwarp">
                            <div class="uptitle">
                                请上传数据主体公司认可联系人提交数据行为的授权证明，支持
                                .jpg .jpeg .bmp .gif .png格式图片，大小不超过10M
                            </div>

                            <div class="file-upload">
                                <div class="upbtn">上传授权证明</div>
                                <input
                                    class="file-upload-input"
                                    name="upfile"
                                    @change="handleFileChange3"
                                    id="upfile3"
                                    type="file"
                                    accept="image/*"
                                    ref="inputer3"
                                />
                            </div>
                        </div>
                        <div>
                            <div
                                class="zzimgwarp"
                                v-if="
                                    upFileList3.name &&
                                    (changeIndex === 2 || changeIndex === 3)
                                "
                            >
                                <img
                                    style="margin-left: 5px"
                                    src="../assets/byteicon/zzimg.png"
                                    alt=""
                                />
                                <div style="margin-left: 5px; cursor: pointer">
                                    授权证明.{{
                                        upFileList3.name.split(".")[1]
                                    }}
                                </div>
                                <div class="zzdel" @click="delZTSQ">删除</div>
                            </div>
                            <el-progress
                                v-if="upFileList3.name"
                                :status="upFileList3.status"
                                :percentage="upFileList3.percentage"
                            ></el-progress>
                        </div>
                    </div>
                    <div
                        class="updateMain"
                        v-if="
                            (changeIndex === 2 || changeIndex === 3) &&
                            level === 1
                        "
                    >
                        <div class="promission">
                            <span
                                ><span class="starSign">*</span
                                >数据主体联系人的身份证明</span
                            >
                        </div>
                        <div
                            v-if="changeIndex === 2 || changeIndex === 3"
                            class="upzzwarp"
                        >
                            <div class="uptitle">
                                请上传数据主体联系人手持身份证或护照照片，支持
                                .jpg .jpeg .bmp .gif .png格式图片，大小不超过10M
                            </div>

                            <div class="file-upload">
                                <div class="upbtn">上传身份证明</div>
                                <input
                                    class="file-upload-input"
                                    name="upfile"
                                    @change="handleFileChange4"
                                    id="upfile4"
                                    type="file"
                                    accept="image/*"
                                    ref="inputer4"
                                />
                            </div>
                        </div>
                        <div>
                            <div
                                class="zzimgwarp"
                                v-if="
                                    upFileList4.name &&
                                    (changeIndex === 2 || changeIndex === 3)
                                "
                            >
                                <img
                                    style="margin-left: 5px"
                                    src="../assets/byteicon/zzimg.png"
                                    alt=""
                                />
                                <div style="margin-left: 5px; cursor: pointer">
                                    身份证明.{{
                                        upFileList4.name.split(".")[1]
                                    }}
                                </div>
                                <div class="zzdel" @click="delZTSF">删除</div>
                            </div>
                            <el-progress
                                v-if="upFileList4.name"
                                :status="upFileList4.status"
                                :percentage="upFileList4.percentage"
                            ></el-progress>
                        </div>
                    </div>
                    <div class="structure" v-if="changeIndex === 3">
                        <span
                            ><span class="starSign">*</span
                            >股东结构(20-200字)</span
                        >
                        <div>
                            <el-input
                                v-model="textarea"
                                type="textarea"
                                class="textarea"
                                :minlength="50"
                                :maxlength="300"
                                show-word-limit
                                placeholder="输入股东结构"
                            />
                        </div>
                    </div>
                    <div class="updateMain" v-if="changeIndex === 3">
                        <div class="promission">
                            <span
                                ><span class="starSign">*</span
                                >股东手持身份证明</span
                            >
                        </div>
                        <div class="upzzwarp">
                            <div class="uptitle">
                                请上传拥有公司25%股份以上的部分个人股东手持身份证或护照的照片
                                支持 .jpg .jepg .bmp .gif
                                .png格式图片，大小不超过10M
                            </div>

                            <div class="file-upload">
                                <div class="upbtn">上传身份证明</div>
                                <input
                                    class="file-upload-input"
                                    name="upfile"
                                    @change="handleFileChange5"
                                    id="upfile5"
                                    type="file"
                                    accept="image/*"
                                    ref="inputer5"
                                    :disabled="ZTGDfileUrl.length >= 5"
                                />
                            </div>
                        </div>
                        <div>
                            <div
                                class="zzimgwarp"
                                v-if="
                                    upFileList5.name &&
                                    (changeIndex === 2 || changeIndex === 3)
                                "
                                v-for="(item, index) in ZTGDfileUrl"
                                :key="index"
                            >
                                <img
                                    style="margin-left: 5px"
                                    src="../assets/byteicon/zzimg.png"
                                    alt=""
                                />
                                <div style="margin-left: 5px; cursor: pointer">
                                    身份证明.{{
                                        upFileList5.name.split(".")[1]
                                    }}
                                </div>
                                <div
                                    class="zzdel"
                                    @click="delZTGDfileUrl(index)"
                                >
                                    删除
                                </div>
                            </div>
                            <el-progress
                                v-if=" upFileList5.name != '' && upFileList5.percentage != undefined"
                                :status="upFileList5.status"
                                :percentage="upFileList5.percentage"
                            ></el-progress>
                        </div>
                    </div>
                    <div class="checkbox">
                        <el-checkbox
                            fill="#ef190f"
                            v-model="Sqcheckbox"
                        ></el-checkbox>
                        <div class="Sqydjs">我已阅读并接受</div>
                        <div class="Sqxy" @click="bindbytexy">
                            冰塔ByteBase数据存证中心服务协议
                        </div>
                    </div>
                </div>
                <!--          提示-->
                <div v-show="active !== 0">
                    <div>
                        <p
                            class="prompt review"
                            v-show="active === 1 && auditStatus === 1"
                        >
                            平台正在审核中，请耐心等待结果！
                        </p>
                        <p
                            class="prompt review"
                            v-show="active === 1 && auditStatus === 3"
                        >
                            很抱歉！您的数据主体升级未通过
                        </p>
                        <p class="prompt review" v-show="active === 2">
                            恭喜您！您的数据主体升级已通过
                        </p>
                    </div>
                    <div class="title">
                        <p>升级数据主体等级</p>
                        <p>
                            申请时间: <span>{{ nowTime }}</span>
                        </p>
                    </div>
                    <div
                        style="border: 1px solid #cccccc"
                        v-for="(temp, index) in allDatas"
                        :key="index"
                    >
                        <el-table
                            :data="temp"
                            stripe
                            :border="true"
                            style="width: 100%"
                        >
                            <el-table-column
                                prop="dataType"
                                label="数据主体等级"
                                width="110"
                            >
                            </el-table-column>
                            <el-table-column
                                prop="auditStatus"
                                label="审核状态"
                            >
                                <template slot-scope="scope">
                                    <span
                                        v-show="scope.row.auditStatus === 1"
                                        class="check"
                                        >审核中</span
                                    >
                                    <span v-show="scope.row.auditStatus === 2"
                                        >通过</span
                                    >
                                    <span v-show="scope.row.auditStatus === 3"
                                        >退回</span
                                    >
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                </div>
                <div class="sqfgx"></div>
                <div class="footerBtn">
                    <div class="button cancel" @click="SQcanle">取消</div>
                    <!--            <div class="button save" v-show="active === 0">保存</div>-->
                    <div
                        class="button sure"
                        @click="SQsubmit"
                        v-show="active === 0"
                    >
                        确认
                    </div>
                    <div
                        class="button sure"
                        v-show="active === 1 && auditStatus === 3"
                        @click="resetNew"
                    >
                        重新升级
                    </div>
                    <div
                        class="button sure"
                        v-show="active === 2 && level < 3"
                        @click="createNew"
                    >
                        升级主体
                    </div>
                </div>
            </div>
        </el-dialog>
        <bytexy :showbytexy="showbytexy" @closexy="closexy"></bytexy>
    </div>
</template>

<script>
import { EventBus } from '../../event-bus.js'
import bytexy from '../components/bytexy'
import apis from '../common/apis'
export default {
  name: 'updateMainData',
  components: { bytexy },
  data () {
    return {
      showbytexy: false,
      showUpd: false,
      active: 0,
      sizeIndex: null,
      changeIndex: null,
      ZTGDfileUrl: [],
      ZTGDsaveUrl: [],
      ZTSFfileUrl: '',
      ZTSFsaveUrl: '',
      ZTSQfileUrl: '',
      ZTSQsaveUrl: '',
      ZTYBfileUrl: '',
      ZTYBsaveUrl: '',
      textarea: '',
      Sqcheckbox: false,
      level: null,
      id: null,
      timer: null,
      nowTime:
                new Date().getFullYear() +
                '-' +
                (new Date().getMonth() + 1) +
                '-' +
                new Date().getDate(),
      auditStatus: null,
      allDatas: null,
      sign: null,
      upFileList3: {},
      upFileList4: {},
      upFileList5: {}
    }
  },
  mounted () {
    EventBus.$on('updateData', (msg) => {
      this.showUpd = true
      this.level = Number(msg.dataSubjectLevel)
      if (this.level === 1) {
        this.sizeIndex = 0
        this.changeIndex = 2
      } else if (this.level === 1) {
        this.sizeIndex = 1
        this.changeIndex = 3
      }
      this.id = msg.id
      console.log('msg', msg)
    })
    EventBus.$on('sendData', (data) => {
      console.log('getdata:', data)
      let t = data.records[data.records.length - 1]
      if (data.total > 0) {
        let auditStatus = t[0].auditStatus
        if (auditStatus === 1 || auditStatus === 3) {
          this.active = 1
          this.sign = t[0].dataType
          this.setTimer(this.id)
        } else if (auditStatus === 2) {
          this.active = 2
          this.setTimer(this.id)
        }
      }
    })
  },
  beforeDestroy () {
    clearTimeout(this.timer)
  },
  watch: {
    textarea (newVal, oldVal) {
      if (newVal.length < 50 && newVal > 0) {
        console.log('字数过短')
      } else if (newVal.length > 300) {
        console.log('字数过长')
      }
    },
    active (newVal, oldVal) {
      // if (newVal === 3) {
      //   this.showUpd = false
      //   this.active = 0
      // }
      if (newVal === 0) {
        this.Sqcheckbox = false
        this.ZTSQsaveUrl = ''
        this.ZTGDfileUrl = []
        this.ZTGDsaveUrl = []
        this.ZTSFfileUrl = ''
        this.ZTSFsaveUrl = ''
        this.ZTSQfileUrl = ''
        this.textarea = ''
      }
    },
    showUpd (newVal, oldVal) {
      if (newVal === false) {
        this.Sqcheckbox = false
        this.active = 0
        this.ZTSQsaveUrl = ''
        this.ZTGDfileUrl = []
        this.ZTGDsaveUrl = []
        this.ZTSFfileUrl = ''
        this.ZTSFsaveUrl = ''
        this.ZTSQfileUrl = ''
        this.textarea = ''
        this.changeIndex = null
        this.sizeIndex = null
        clearTimeout(this.timer)
      }
    }
    // sign(newVal, oldVal) {
    //     if (newVal === "C类主体") {
    //         this.level = 3;
    //     }
    // },
  },
  methods: {
    closexy () {
      this.showbytexy = false
    },
    bindbytexy () {
      this.showbytexy = true
    },
    chooseB () {
      this.sizeIndex = 0
      this.changeIndex = 2
    },
    chooseC () {
      this.sizeIndex = 1
      this.changeIndex = 3
    },
    next () {
      if (this.active++ > 2) {
        this.active = 0
      }
    },
    handleFileChange3 (e) {
      // 申请数据主体上传附件 授权证明
      let token = localStorage.token
      let inputDOM = this.$refs.inputer3
      this.file = inputDOM.files[0] // 通过DOM取文件数据
      this.formData = new FormData() // new一个formData事件
      this.formData.append('file', this.file) // 将file属性添加到formData里
      let time = this.$moment().format('YYYY-MM-DD HH:mm:ss')
      let item = {
        percentage: 0,
        name: this.file.name,
        loading: true,
        succese: false,
        cell: false,
        time: time,
        source: null
      }
      this.upFileList3 = item
      this.$axios({
        method: 'post',
        url: apis.uploadAccessoryApi,
        data: this.formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          Bearer: token
        },
        onUploadProgress: (progressEvent) => {
          // progressEvent.loaded:已上传文件大小
          // progressEvent.total:被上传文件的总大小
          let complete =
                        (progressEvent.loaded / progressEvent.total).toFixed(
                          2
                        ) * 100
          item.percentage = complete
          if (item.percentage >= 100) {
            item.status = 'success'
          } else {
            item.status = 'exception'
          }
        }
      })
        .then((r) => {
          console.log(r)
          if (r.status === 200) {
            document.getElementById('upfile3').value = null
            let fileName = r.data.saveUrl.lastIndexOf('.') // 取到文件名开始到最后一个点的长度
            let fileNameLength = r.data.saveUrl.length // 取到文件名长度
            let fileFormat = r.data.saveUrl.substring(
              fileName + 1,
              fileNameLength
            )
            this.ZTSQfileUrl = r.data.fileUrl
            this.ZTSQsaveUrl = r.data.saveUrl
            this.ZTSQfileFormat = fileFormat
          }
        })
        .catch((err) => {
          // item.percentage = 0
          item.status = 'exception'
          item.loading = false
          this.$message.error({
            content: this.$t('hint9'),
            duration: 5
          })
        })
    },
    handleFileChange4 (e) {
      // 申请数据主体上传附件 身份证明
      let token = localStorage.token
      let inputDOM = this.$refs.inputer4
      this.file = inputDOM.files[0] // 通过DOM取文件数据
      this.formData = new FormData() // new一个formData事件
      this.formData.append('file', this.file) // 将file属性添加到formData里
      let time = this.$moment().format('YYYY-MM-DD HH:mm:ss')
      let item = {
        percentage: 0,
        name: this.file.name,
        loading: true,
        succese: false,
        cell: false,
        time: time,
        source: null
      }
      this.upFileList4 = item
      this.$axios({
        method: 'post',
        url: apis.uploadAccessoryApi,
        data: this.formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          Bearer: token
        },
        onUploadProgress: (progressEvent) => {
          // progressEvent.loaded:已上传文件大小
          // progressEvent.total:被上传文件的总大小
          let complete =
                        (progressEvent.loaded / progressEvent.total).toFixed(
                          2
                        ) * 100
          item.percentage = complete
          if (item.percentage >= 100) {
            item.status = 'success'
          } else {
            item.status = 'exception'
          }
        }
      })
        .then((r) => {
          console.log(r)
          if (r.status === 200) {
            document.getElementById('upfile4').value = null
            let fileName = r.data.saveUrl.lastIndexOf('.') // 取到文件名开始到最后一个点的长度
            let fileNameLength = r.data.saveUrl.length // 取到文件名长度
            let fileFormat = r.data.saveUrl.substring(
              fileName + 1,
              fileNameLength
            )
            this.ZTSFfileUrl = r.data.fileUrl
            this.ZTSFsaveUrl = r.data.saveUrl
            this.ZTSFfileFormat = fileFormat
          }
        })
        .catch((err) => {
          // item.percentage = 0
          item.status = 'exception'
          item.loading = false
          this.$message.error({
            content: err.response.data,
            duration: 5
          })
        })
    },
    handleFileChange5 (e) {
      // 申请数据主体上传附件 股东证明
      if (this.ZTGDfileUrl.length >= 5) {
        return
      }
      let token = localStorage.token
      let inputDOM = this.$refs.inputer5
      this.file = inputDOM.files[0] // 通过DOM取文件数据
      this.formData = new FormData() // new一个formData事件
      this.formData.append('file', this.file) // 将file属性添加到formData里
      let time = this.$moment().format('YYYY-MM-DD HH:mm:ss')
      let item = {
        percentage: 0,
        name: this.file.name,
        loading: true,
        succese: false,
        cell: false,
        time: time,
        source: null
      }
      this.upFileList5 = item
      this.$axios({
        method: 'post',
        url: apis.uploadAccessoryApi,
        data: this.formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          Bearer: token
        },
        onUploadProgress: (progressEvent) => {
          // progressEvent.loaded:已上传文件大小
          // progressEvent.total:被上传文件的总大小
          let complete =
                        (progressEvent.loaded / progressEvent.total).toFixed(
                          2
                        ) * 100
          item.percentage = complete
          if (item.percentage >= 100) {
            item.status = 'success'
          } else {
            item.status = 'exception'
          }
        }
      })
        .then((r) => {
          console.log(r)
          if (r.status === 200) {
            document.getElementById('upfile5').value = null
            let fileName = r.data.saveUrl.lastIndexOf('.') // 取到文件名开始到最后一个点的长度
            let fileNameLength = r.data.saveUrl.length // 取到文件名长度
            let fileFormat = r.data.saveUrl.substring(
              fileName + 1,
              fileNameLength
            )
            this.ZTGDfileUrl.push(r.data.fileUrl)
            this.ZTGDsaveUrl.push(r.data.saveUrl)
            this.ZTGDfileFormat = fileFormat
          }
        })
        .catch((err) => {
          // item.percentage = 0
          item.status = 'exception'
          item.loading = false
          this.$message.error({
            content: err.response.data,
            duration: 5
          })
        })
    },
    xzmb () {
      window.location.href =
                'https://bytebase-1304741688.cos.ap-shanghai.myqcloud.com/%E6%95%B0%E6%8D%AE%E8%B4%9F%E8%B4%A3%E4%BA%BA%E6%8E%88%E6%9D%83%E4%B9%A6V1.0.docx'
    },
    delZTSQ () {
      this.ZTSQfileUrl = ''
      this.ZTSQsaveUrl = ''
      this.upFileList3 = {}
    },
    delZTSF () {
      this.ZTSFfileUrl = ''
      this.ZTSFsaveUrl = ''
      this.upFileList4 = {}
    },
    delZTGDfileUrl (val) {
      this.ZTGDfileUrl.splice(val, 1)
      this.ZTGDsaveUrl.splice(val, 1)
      this.upFileList5 = {}
    },
    SQsubmit: function () {
      if (!this.changeIndex) {
        this.$message.error({
          content: this.$t('hint15'),
          background: true,
          duration: 3
        })
      }
      if (this.changeIndex) {
        if (this.level === 1) {
          // 当前主体等级为A时
          if (this.changeIndex === 2) {
            // 选择B主题时
            if (this.ZTSQsaveUrl === '' && this.ZTSQfileUrl === '') {
              this.$message.error({
                content: this.$t('hint16'),
                background: true,
                duration: 3
              })
            } else if (
              this.ZTSFfileUrl === '' &&
                    this.ZTSFsaveUrl === ''
            ) {
              this.$message.error({
                content: this.$t('hint17'),
                background: true,
                duration: 3
              })
            } else if (this.Sqcheckbox === false) {
              // this.getAllData()
              this.$message.error({
                content: this.$t('hint18'),
                background: true,
                duration: 3
              })
            } else if (
              this.Sqcheckbox === true &&
                    this.ZTSQsaveUrl !== '' &&
                    this.ZTSQfileUrl !== '' &&
                    this.ZTSFfileUrl !== '' &&
                    this.ZTSFsaveUrl !== ''
            ) {
              this.submitApi()
            }
          } else if (this.changeIndex === 3) {
            // 选择C主题时
            if (this.ZTSQsaveUrl === '' && this.ZTSQfileUrl === '') {
              this.$message.error({
                content: this.$t('hint16'),
                background: true,
                duration: 3
              })
            } else if (
              this.ZTSFfileUrl === '' &&
                    this.ZTSFsaveUrl === ''
            ) {
              this.$message.error({
                content: this.$t('hint17'),
                background: true,
                duration: 3
              })
            } else if (this.textarea === '') {
              // this.getAllData()
              this.$message.error({
                content: this.$t('hint19'),
                background: true,
                duration: 3
              })
            } else if (this.textarea.length < 50) {
              this.$message.error({
                content: this.$t('hint20'),
                background: true,
                duration: 3
              })
            } else if (
              this.ZTGDfileUrl.length === 0 &&
                    this.ZTGDsaveUrl.length === 0
            ) {
              this.$message.error({
                content: this.$t('hint17'),
                background: true,
                duration: 3
              })
            } else if (this.Sqcheckbox === false) {
              // this.getAllData()
              this.$message.error({
                content: this.$t('hint18'),
                background: true,
                duration: 3
              })
            } else if (
              this.Sqcheckbox === true &&
                    this.textarea !== '' &&
                    this.ZTGDfileUrl !== '' &&
                    this.ZTGDsaveUrl.length !== 0 &&
                    this.ZTSQsaveUrl.length !== 0 &&
                    this.ZTSQfileUrl !== '' &&
                    this.ZTSFfileUrl !== '' &&
                    this.ZTSFsaveUrl !== ''
            ) {
              this.submitApi()
            }
          }
        } else if (this.level === 2) {
          // 当前主体等级为B时
          if (this.textarea === '') {
            // this.getAllData()
            this.$message.error({
              content: this.$t('hint19'),
              background: true,
              duration: 3
            })
          } else if (this.textarea.length < 50) {
            this.$message.error({
              content: this.$t('hint20'),
              background: true,
              duration: 3
            })
          } else if (
            this.ZTGDfileUrl.length === 0 &&
            this.ZTGDsaveUrl.length === 0
          ) {
            this.$message.error({
              content: this.$t('hint17'),
              background: true,
              duration: 3
            })
          } else if (this.Sqcheckbox === false) {
            // this.getAllData()
            this.$message.error({
              content: this.$t('hint18'),
              background: true,
              duration: 3
            })
          } else if (
            this.Sqcheckbox === true &&
                  this.textarea !== '' &&
                  this.ZTGDfileUrl !== '' &&
                  this.ZTGDsaveUrl !== ''
          ) {
            this.submitApi()
          }
        }
      }
    },
    submitApi () {
      if (this.changeIndex == 2) {
        var params = {
          authorizationSaveUrl: this.ZTSQsaveUrl,
          authorizationUrl: this.ZTSQfileUrl,
          dataType: this.changeIndex,
          id: this.id,
          identitySaveUrl: this.ZTSFsaveUrl,
          identityUrl: this.ZTSFfileUrl,
          shareholderStructure: this.textarea,
          // shareholdersHandheldIdentityFrontUrl: this.ZTGDfileUrl,
          // shareholdersHandheldIdentityUrl: this.ZTGDsaveUrl,
          dataSampleFrontUrl: '',
          dataSampleUrl: ''
        }
      }
      if (this.changeIndex == 3) {
        var params = {
          authorizationSaveUrl: this.ZTSQsaveUrl,
          authorizationUrl: this.ZTSQfileUrl,
          dataType: this.changeIndex,
          id: this.id,
          identitySaveUrl: this.ZTSFsaveUrl,
          identityUrl: this.ZTSFfileUrl,
          shareholderStructure: this.textarea,
          shareholdersHandheldIdentityFrontUrl: this.ZTGDfileUrl,
          shareholdersHandheldIdentityUrl: this.ZTGDsaveUrl,
          dataSampleFrontUrl: '',
          dataSampleUrl: ''
        }
      }

      let token = localStorage.token
      this.$axios({
        method: 'post',
        url: apis.dataMainBodyUpgradeApi,
        data: params,
        headers: {
          'Content-Type': 'application/json',
          Bearer: token
        }
      })
        .then((r) => {
          console.log(r)
          if (r.status === 200) {
            if (this.Sqcheckbox === true) {
              this.next()
              this.setTimer(params.id)
            }
          }
        })
        .catch((e) => {
          this.$message.info({
            content: e.response.data,
            background: true,
            duration: 3
          })
        })
    },
    setTimer (val) {
      this.timer = setInterval(() => {
        this.checkHistoryList(val)
      }, 1000)
    },
    checkHistoryList (id) {
      // 获取升级数据主体列表
      // console.log('iddd:', id)
      let that = this
      let token = localStorage.token
      let parms = {
        id: id,
        ids: []
      }
      this.$axios({
        method: 'post',
        url: apis.dataMainBodyUpgradeListApi,
        data: parms,
        headers: {
          'Content-Type': 'application/json',
          Bearer: token
        }
      })
        .then((r) => {
          console.log(r)
          if (r.status === 200) {
            let msg = r.data
            this.allDatas = msg.records
            let t = msg.records[msg.records.length - 1]
            this.auditStatus = t[0].auditStatus
            console.log('111:', this.auditStatus)
            this.nowTime = t[0].createTime.split(' ')[0]
            this.sign = t[0].dataType
            // this.level = t[0].dataSubjectLevel
            if (this.auditStatus === 2) {
              this.active = 2
            }
          }
        })
        .catch((e) => {
          this.$message.info({
            content: e.response.data,
            background: true,
            duration: 3
          })
        })
    },
    createNew () {
      console.log('dddd', this.sign)
      clearTimeout(this.timer)
      if (this.sign === 'B类主体') {
        this.resetData()
        this.active = 0
        this.changeIndex = null
        this.sizeIndex = null
        // console.log('zhaungtai', this.changeIndex)
        // console.log('zhaung', this.sizeIndex)
      } else if (this.sign === 'C类主体') {
        this.resetData()
        this.changeIndex = null
        this.sizeIndex = null
        this.showUpd = false
        this.$message.error({
          content: this.$t('hint21'),
          background: true,
          duration: 3
        })
        // console.log('该数据主体已是最高等级')
      }
    },
    resetNew () {
      this.resetData()
      this.active = 0
      console.log('aaa', this.sign)
      if (this.sign === 'B类主体') {
        this.changeIndex = 2
        this.sizeIndex = 0
        console.log('zhaungtai', this.changeIndex)
        console.log('zhaung', this.sizeIndex)
      } else if (this.sign === 'C类主体') {
        this.changeIndex = 3
        this.sizeIndex = 1
      }
      clearTimeout(this.timer)
    },
    resetData () {
      console.log('999')
      this.Sqcheckbox = false
      // this.active = 0
      this.upFileList3 = {}
      this.upFileList4 = {}
      this.upFileList5 = {}
      this.ZTSQsaveUrl = ''
      this.ZTGDfileUrl = []
      this.ZTGDsaveUrl = []
      this.ZTSFfileUrl = ''
      this.ZTSFsaveUrl = ''
      this.ZTSQfileUrl = ''
      this.textarea = ''
    },
    SQcanle () {
      this.textarea = ''
      this.upFileList3 = {}
      this.upFileList4 = {}
      this.upFileList5 = {}
      this.showUpd = false
      setTimeout(() => {
        this.active = 0
      }, 1000)
      clearTimeout(this.timer)
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
.modelContent {
    margin-top: 32px;
}
.chooseType {
    margin-top: 4px;
    display: flex;
}
.order,
.noActive {
    text-align: center;
    height: 32px;
    width: 32px;
    border-radius: 50%;
    font-size: 20px;
    margin-right: 10px;
}
.order {
    background-color: #ef190f;
    color: #ffffff;
}
.noActive {
    background: #ffffff;
    border: 1px solid #cccccc;
    border-radius: 50%;
    color: #cccccc;
}
.arrows {
    line-height: 32px;
    font-size: 16px;
    font-weight: 500;
    color: #a1a1a1;
    opacity: 1;
}
.type {
    margin-right: 10px;
    cursor: pointer;
    width: 100px;
    padding: 0;
    text-align: center;
    line-height: 32px;
    background: #f9f9f9;
    opacity: 1;
    border-radius: 2px;
    border: 1px solid #ffffff;
}
.type:hover {
    color: #ef190f;
    border: 1px solid #ef190f;
    box-sizing: border-box;
}
.type:focus {
    border-color: #ef190f;
    color: #ef190f;
}
.checked {
    margin-right: 10px;
    cursor: pointer;
    width: 100px;
    padding: 0;
    text-align: center;
    line-height: 32px;
    background: #f9f9f9;
    opacity: 1;
    border-radius: 2px;
    border: 1px solid #ef190f;
    color: #ef190f;
}
.checked:focus {
    border-color: #ef190f;
    color: #ef190f;
    line-height: 16px;
}
.promission {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;
}
.modelDownLoad {
    display: flex;
    cursor: pointer;
}
.downLoad {
    margin-left: 10px;
    width: 24px;
    height: 24px;
    opacity: 1;
}
.structure {
    margin-top: 24px;
}
.textarea {
    margin-top: 4px;
}
.checkbox {
    margin-top: 23px;
    display: flex;
    align-items: center;
    /*margin-left: 15px;*/
}
.Sqydjs {
    color: #a1a1a1;
    font-size: 13px;
    margin-left: 14px;
}
.Sqxy {
    color: #333333;
    font-size: 13px;
    text-decoration: underline;
    cursor: pointer;
}
.sqfgx {
    color: #e8eaec;
    width: 100%;
    height: 1px;
    background-color: #e8eaec;
    margin-top: 30px;
}
.footerBtn {
    margin: 20px 0;
    text-align: right;
    display: flex;
    justify-content: flex-end;
}
.button {
    width: 100px;
    height: 40px;
    border: 1px solid #4f4f4f;
    opacity: 1;
    border-radius: 4px;
    box-sizing: border-box;
    margin-left: 16px;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
    font-size: 16px;
    font-weight: 400;
}
.save {
    color: #ef190f;
    border-color: #ef190f;
}
.sure {
    color: #ffffff;
    background-color: #ef190f;
    border-color: #ffffff;
}
.prompt {
    height: 40px;
    background: #fff3f2;
    opacity: 1;
    border-radius: 2px;
    padding-left: 20px;
    margin-top: 34px;
}
.review {
    font-size: 14px;
    font-weight: 400;
    line-height: 40px;
    color: #ef190f;
    opacity: 1;
}
.title {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #a1a1a1;
    opacity: 1;
    margin-top: 20px;
    margin-bottom: 12px;
}
.check {
    font-size: 14px;
    font-weight: 400;
    color: #ff9f0e;
    opacity: 1;
}
.starSign {
    color: #ef190f;
}
</style>
<style>
.el-checkbox__input .el-checkbox__inner {
    margin-left: 0;
}
</style>
