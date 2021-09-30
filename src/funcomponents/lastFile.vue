<style scoped>
  .lastFileApp {
    width: 100%;
  }

  .upFileButton {
    width: 140px;
    height: 44px;
    background: rgba(16, 209, 119, 0.3);
    border-radius: 4px;
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    color: #ffffff;
    padding-left: 10px;
    white-space: nowrap;
  }

  .upFileButton img {
    width: 24px;
    height: 24px;
    margin-right: 18px;
  }

  .bannerRightInfo {
    margin-top: 8px;
    width: 100%;
    height: 40px;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #8f93a0;
    padding: 0 24px;
    display: flex;
    align-items: center;
  }

  .table {
    width: 100%;
    padding: 0 20px 0 24px;
  }

  .tableHead {
    width: 100%;
    font-size: 13px;
    font-weight: 400;
    color: #8f93a0;
    height: 56px;
    display: flex;
    line-height: 56px;
    margin-bottom: 1px;
  }

  .tableSelectDiv {
    width: 16px;
    height: 16px;
    background: #ffffff;
    border-radius: 2px;
  }

  .item1 {
    width: 0.4rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .item2 {
    width: 8.09rem;
    padding-left: 0.07rem;
    display: flex;
    align-items: center;
    color: #333333;
  }

  .item2 img {
    width: 0.3rem;
    height: 0.3rem;
    margin-right: 0.12rem;
  }

  .item3 {
    width: 1.55rem;
    padding-right: 0.2rem;
    text-align: right;
    line-height: 68px;
  }

  .item4 {
    width: 2rem;
    padding-right: 0.2rem;
    text-align: right;
    line-height: 68px;
  }

  .item5 {
    width: 2.5rem;
    padding-right: 0.2rem;
    text-align: right;
    line-height: 68px;
  }

  .item6 {
    width: 1.7rem;
    padding-right: 0.2rem;
    text-align: right;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .item6 img {
    width: 0.24rem;
    height: 0.24rem;
    cursor: pointer;
  }

  .tableItem {
    height: 68px;
    width: 100%;
    color: #8f93a0;
    display: flex;
    border-bottom: 1px solid #f7f8fa;
    border-radius: 4px;
    font-size: 14px;
  }

  .content {
    width: 100%;
  }

  .contentScroll {
    overflow-y: scroll;
  }

  .contentScroll::-webkit-scrollbar {
    width: 8px;
    height: 854px;
    background: white;
    border-radius: 5px;
  }

  .contentScroll::-webkit-scrollbar-thumb {
    background: #d8d8d8;
    border-radius: 5px;
  }

  .tableItem:hover {
    background: #f7faf8;
  }

  .zhezhao {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.2);
  }

  .nameBox {
    width: 400px;
    height: 203px;
    background: #ffffff;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
    border-radius: 6px;
    border: 1px solid #aad3c1;
    padding: 15px 20px;
    margin: 0 auto;
    margin-top: 210px;
    position: relative;
  }

  .nameHead {
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #545767;
  }

  .nameHead img {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }

  .nameTitle {
    font-size: 12px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #545767;
    margin-top: 20px;
  }

  .nameInput {
    width: 100%;
    height: 35px;
    border: 1px solid #F04D30;
    /*去除未选中状态边框*/
    outline: none;
    /* 去除选中状态边框*/
    background-color: #ffffff;
    /* 透明背景*/
    color: #333333;
    padding: 8px 10px;
    font-size: 14px;
    border-radius: 4px;
    margin-top: 6px;
  }

  .nameInput:focus {
    color: #333333;
    box-shadow: 0px 1px 8px 0px rgba(255, 112, 86, 0.15);
  }

  .nameInput::-webkit-input-placeholder {
    color: #8f93a0;
    font-size: 14px;
  }

  .nameFoot {
    position: absolute;
    bottom: 10px;
    right: 15px;
    display: flex;
  }

  .nameFootCom {
    width: 120px;
    height: 40px;
    border-radius: 6px;
    line-height: 40px;
    text-align: center;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    cursor: pointer;
  }

  .nameFootSure {
    color: #F04D30;
    background: white;
    border: 1px solid #F04D30;
    margin-right: 10px;
  }

  .nameFootCel {
    color: #ffffff;
    background: #F04D30;
  }

  .kongTable {
    font-size: 13px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #8f93a0;
    width: 200px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 40px;
    align-items: center;
  }

  .kongTable img {
    width: 100px;
    height: 100px;
  }

  .kongTable span {
    margin-top: 5px;
  }

  .yulanImgBox {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    overflow: hidden;
    overflow-y: scroll;
  }

  .yulanImg {
    margin: 0 auto;
    max-width: 1138px;
    margin-top: 50px;
  }

  .yulanImg img {
    max-width: 1138px;
  }

  .closeYulanButton {
    position: fixed;
    right: 60px;
    top: 70px;
    width: 44px;
    height: 44px;
    cursor: pointer;
  }

  .loadMore {
    width: 100%;
    font-size: 14px;
    height: 40px;
    border-radius: 4px;
    margin-top: 20px;
    margin-bottom: 20px;
    color: #808695;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .loadMore:hover {
    background: #F7FAF8;
  }

  .selectItemClass {
    background: #13c677;
  }

  .noCurPoint {
    cursor: not-allowed !important;
  }

  .video-js .vjs-icon-placeholder {
    width: 100%;
    height: 100%;
    display: block;
  }

  .vedio {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    background: rgba(0, 0, 0, 0.5);
  }

  .vedioBox {
    width: 11.8rem;
    height: 5rem;
    margin-top: 1rem;
  }

  .item2CurPoint {
    cursor: pointer;
  }

  .item2CurPoint:hover {
    text-decoration: underline;
  }
</style>
<template>
  <div class="lastFileApp">
    <div class="bannerRight">
      <div class="bannerRightInfo">
        <span v-show="arrangementList.length === 1">最近文件</span>
      </div>
      <div class="table">
        <div class="tableHead">
          <span class="item1">
            <div class="tableSelectDiv" :class="{ selectItemClass: selectList.length > 0 }"></div>
          </span>
          <span class="item2"></span>
          <span class="item3">状态</span>
          <span class="item4">大小</span>
          <span class="item5">时间</span>
          <span class="item6">操作</span>
        </div>
        <div class="content contentScroll" ref="contentScroll" :style="tableHeight" :class="{ contentScroll: table.list.length > 2 }">
          <div class="tableItem" v-for="(item, index) in table.list" :key="index">
            <span class="item1">
              <div class="tableSelectDiv" :class="{ selectItemClass: item.select }"></div>
            </span>
            <div class="item2">
              <img :src="item.coverUrl" alt="" />
              <div v-if="item.toolTip">
                <el-tooltip effect="dark" :content="item.name" placement="top">
                  <span v-if="item.fileTypeId === 10" class="item2CurPoint" @click.stop="openFileFun(item)">{{item.nameShow}}</span>
                  <span v-else-if="item.fileTypeId === 9" class="item2CurPoint" @click.stop="openFileFun(item)">{{item.nameShow}}</span>
                  <span v-else class="item2CurPoint" @click.stop="openFileFun(item)">{{item.nameShow}}</span>
                </el-tooltip>
              </div>
              <div v-else>
                <span v-if="item.fileTypeId === 10" class="item2CurPoint" @click.stop="openFileFun(item)">{{item.nameShow}}</span>
                <span v-else-if="item.fileTypeId === 9" class="item2CurPoint" @click.stop="openFileFun(item)">{{item.nameShow}}</span>
                <span v-else class="item2CurPoint" @click.stop="openFileFun(item)">{{item.nameShow}}</span>
              </div>
            </div>
            <span class="item3" v-if="item.fileRealType==='folder'">-</span>
            <span class="item3" v-else>{{item.statusName}}</span>
            <span class="item4">{{item.fileSize}}</span>
            <span class="item5">{{item.createTime}}</span>
            <div class="item6">
              <img src="../assets/home/edit@2x.png" style="margin-right: 0.12rem" v-if="!item.select" alt="" @click.stop="nameChangeBoxFun(item, index)" />
              <img src="../assets/home/icon／edie_sel@2x.png" style="margin-right: 0.12rem" v-else alt="" @click.stop="nameChangeBoxFun(item, index)" />
              <img src="../assets/home/download@2x.png" style="margin-right: 0.12rem" v-if="item.ipfsUrl&&item.fileTypeId!=0&&!item.select" @click.stop="downLoadDateFun(item)" />
              <img src="../assets/home/icon／download_sel@2x.png" style="margin-right: 0.12rem" v-else-if="item.ipfsUrl&&item.fileTypeId!=0&&item.select" />
              <img src="../assets/home/noDown.png" style="margin-right: 0.12rem" v-else-if="!item.ipfsUrl||item.fileTypeId===0" class="noCurPoint" />
              <img src="../assets/home/icon／detail_nor@2x.png" v-if="item.dealState===9&&!item.select" @click.stop="checkoutUpLineFun(item)" />
              <img src="../assets/home/icon／detail_sel@2x.png" v-else-if="item.dealState===9&&item.select" @click.stop="checkoutUpLineFun(item)" />
              <img src="../assets/home/icon／detail_dis@2x.png" v-else-if="item.dealState!= 9" class="noCurPoint" />
            </div>
          </div>
          <div class="loadMore" v-if="!table.loading&&table.list.length < table.total" @click="loadMoreFun">查看更多</div>
          <div class="loadMore" v-else-if="table.loading">
            <i class="el-icon-loading" style="font-size: 16px; color: #ff7056;margin-right:5px"></i>
            <p style="font-size:14px;color:#808695">加载中</p>
          </div>
          <div class="loadMore" v-if="this.table.list.length===this.table.total&&!table.loading">已加载完成，显示提示：仅显示近1000条文件</div>
          <div class="kongTable" v-if="table.list.total === 0 && !table.loading">
            <img src="../assets/home/kong.png" alt="" />
            <span>{{htmlWordData.noThing}}</span>
            <span v-if="!searchData.clickNum">{{htmlWordData.toUpFile}}</span>
            <div class="upFileButton" v-if="!searchData.clickNum" @click.stop="upBoxShowFun">
              {{htmlWordData.toChuang}}
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 重命名 -->
    <div class="zhezhao" v-if="openMaskControl.nameBoolean">
      <div class="nameBox">
        <div class="nameHead">
          <span>{{htmlWordData.editorTile}}</span>
          <img src="../assets/home/icon_close_small@2x.png" alt="" @click="nameChangeFun(1)" />
        </div>
        <div class="nameTitle">{{htmlWordData.editorName}}</div>
        <input type="text" :placeholder="htmlWordData.editorInputPlr" class="nameInput" v-model="changeData.fileRealName" />
        <div class="nameFoot">
          <div class="nameFootSure nameFootCom" @click="nameChangeFun(1)">{{htmlWordData.editorCell}}</div>
          <div class="nameFootCel nameFootCom" @click="nameChangeFun(2)">{{htmlWordData.selectSure}}</div>
        </div>
      </div>
    </div>
    <!-- 查看上链信息 -->
    <UpLineInfo @onChange="upLineActionFun" :fileName="upLineName" :upLineBoolean="openMaskControl.upLineBoolean" :fileId="upLineId"></UpLineInfo>
    <!-- 图片预览 -->
    <div class="yulanImgBox" v-if="openMaskControl.img" @click="closeYulanFun">
      <div class="yulanImg">
        <img :src="previewImg" alt="" />
      </div>
      <img src="../assets/home/yulanclose.png" alt="" @click="closeYulanFun" class="closeYulanButton" />
    </div>
    <!-- 视频预览 -->
    <div class="vedio" v-if="openMaskControl.video">
      <div class="vedioBox">
        <video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true" :options="playerOptions"></video-player>
        <img src="../assets/home/yulanclose.png" alt="" @click="closeYulanFun" class="closeYulanButton" />
      </div>
    </div>
  </div>
</template>

<script>
import apis from '../common/apis.js'
import Loading from '../funcomponents/loading.vue'
import Head from '../funcomponents/head.vue'
import UpLineInfo from '../funcomponents/upLineInfo'
export default {
  data () {
    return {
      upLineId: null,
      upLineName: null,
      arrangementList: [{
        name: '全部文件',
        id: 0
      } ],
      apiControlData: {
        type: 1
      },
      text: null,
      upLineData: {
        tableList: []
      },
      openMaskControl: {
        img: false,
        video: false,
        upLineBoolean: false,
        nameBoolean: false,
        upBoxBoolean: false,
        moveFile: false
      },
      previewImg: null,
      selectList: [],
      tarList: [{
        selectUrl: require('../assets/home/tarIcon_see_select.png'),
        noSelectUrl: require('../assets/home/tarIcon_see_no.png'),
        name: '最近文件',
        select: false
      },
      {
        selectUrl: require('../assets/home/tarIcon_all_select.png'),
        noSelectUrl: require('../assets/home/tarIcon_all_no.png'),
        name: '全部文件',
        select: true
      } ],
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度
        autoplay: false, // 如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type: 'video/mp4',
          src: '' // url地址
        } ],
        poster: '', // 你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true // 全屏按钮
        }
      },
      tableHeight: {
        height: '700px'
      },
      fileBoxHeight: {
        height: '475px'
      },
      selectListIndex: null,
      languagetype: '2',
      htmlWordData: {},
      typeShow1: false,
      typeShow2: true,
      yulanShow: false,
      vedieoShow: false,
      img_url: null,
      source: null,
      upFileList: [],
      mobile: null,
      xuanzhuan: 0,
      table: {
        list: [],
        loading: false,
        total: 0
      },
      // 单项操作
      changeData: {
        actionSelect_1: true,
        actionSelect_2: true,
        actionSelect_3: true,
        itemData: {},
        index: null,
        fileRealName: null
      },
      // 新增文件夹
      addFileData: {
        name: null
      },
      drogBoolean: false,
      searchData: {
        text: null,
        iconHas: false,
        ready: true,
        clickNum: false,
        searchInput: false
      },
      indexPage: 1,
      // 留u
      selectData: {
        selectBoolean: false,
        statusList: [{
          name: '全部',
          id: 99,
          isSelect: true
        },
        {
          name: '待上链',
          id: 1,
          isSelect: false
        },
        {
          name: '上链中',
          id: 2,
          isSelect: false
        },
        {
          name: '已上链',
          id: 9,
          isSelect: false
        } ],
        statusId: 99,
        time: [],
        startTime: null,
        endTime: null
      }
    }
  },
  watch: {
    searchFileValue (n, o) { // n为新值,o为旧值;
      this.text = n
      this.getFileListFun(1)
    }
  },
  props: ['searchFileValue'],
  created () {
    this.text = this.searchFileValue
    this.languagetype = localStorage.languagetype
    if (this.languagetype === '1') {
      this.htmlWordData = this.$store.state.englishData
      this.typeShow1 = true
      this.typeShow2 = false
      this.selectData.statusList = [{
        name: 'All',
        id: 99,
        isSelect: true
      },
      {
        name: 'Uploaded',
        id: 1,
        isSelect: false
      },
      {
        name: 'Pending',
        id: 2,
        isSelect: false
      },
      {
        name: 'In the chain',
        id: 4,
        isSelect: false
      },
      {
        name: 'On Chain',
        id: 9,
        isSelect: false
      } ]
    } else {
      this.htmlWordData = this.$store.state.chineseData
      this.typeShow1 = false
      this.typeShow2 = true
    }
    this.getFileListFun(1)
  },
  mounted () {
    let clientHeight = document.documentElement.clientHeight - 230
    this.tableHeight.height = clientHeight + 'px'
    this.fileBoxHeight.height = document.documentElement.clientHeight - 465 + 'px'
    this.mobile = localStorage.mobile
  },
  beforeDestroy () {
    window.removeEventListener('beforeunload', (e) => {
      this.beforeunloadHandler(e)
    })
  },
  components: {
    Loading,
    Head,
    UpLineInfo
  },
  methods: {
    toShowSelectFun () {
      this.selectData.selectBoolean = true
    },
    // 关闭上链信息
    closeUpLineMaskFun () {
      this.openMaskControl.upLineBoolean = false
    },
    // getFileListApi
    getFileListFun (page) {
      this.table.loading = true
      let params = {}
      params.current = page
      params.size = 15
      if (this.text) {
        params.name = this.text
      }
      if (this.selectData.statusId != 99) {
        params.state = this.selectData.statusId
      }
      if (this.selectData.time) {
        params.beginTime = this.selectData.time[0]
        params.endTime = this.selectData.time[1]
      }
      let token = localStorage.token
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
          res.data.records[0] = res.data.records[0].filter((item, ind, arr) => {
            return item.name
          })
          res.data.records[0].forEach((element) => {
            element.fileSize = this.bytesToSize(parseFloat(element.fileSize))
            element.hoverItem = false
            if (element.name.length > 30) {
              let stringStart = element.name.slice(0, 10)
              let srgingEnd = element.name.slice(element.name.length - 11)
              element.nameShow = stringStart + '...' + srgingEnd
              element.toolTip = true
            } else {
              element.nameShow = element.name
              element.toolTip = false
            }
            if (element.isDir === 1) {
              element.fileRealType = 'folder'
            } else {
              let dotIndex = element.name.lastIndexOf('.')
              element.fileRealType = element.name.slice(dotIndex + 1)
            }
            element.coverUrl = this.fileRealTypeFun(element.fileRealType)
            element.fileTypeId = this.fileTypeId
            if (element.dealState === 1) {
              element.statusName = '待上链'
              element.itemDSL = true
            } else if (element.dealState === 9) {
              element.statusName = '已上链'
              element.itemDSL = false
            } else if (element.dealState === 3) {
              element.statusName = '上链中'
            }
            if (page > 1) {
              this.table.list.push(element)
            }
          })
          if (page === 1) {
            this.table.list = res.data.records[0]
            this.$refs.contentScroll.srcollTop = 0
          }
          this.table.loading = false
          this.table.total = res.data.total
        })
        .catch((err) => {
          console.log(err)
          if (err.response.status === 401 || err.response.status === 500) {
            this.$router.push({
              name: 'login'
            })
          }
        })
    },
    loadMoreFun () {
      this.indexPage++
      this.getFileListFun(this.indexPage)
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
        return sizeStr.substring(0, index) + sizeStr.substr(index + 3, 2)
      }
      return size
    },
    // fileRealType 文件类型 转化
    fileRealTypeFun (type) {
      type = type.toLowerCase()
      if (type === 'doc' || type === 'docx') {
        this.fileTypeId = 1
        return require('../assets/fileImg/icon／word_30@2x.png')
      } else if (type === 'zip') {
        this.fileTypeId = 2
        return require('../assets/fileImg/icon／zip_30@2x.png')
      } else if (type === 'xlsx' || type === 'xls') {
        this.fileTypeId = 3
        return require('../assets/fileImg/icon／excle_30@2x.png')
      } else if (type === 'ppt' || type === 'pot') {
        this.fileTypeId = 4
        return require('../assets/fileImg/icon／ppt_30@2x.png')
      } else if (type === 'pdf') {
        this.fileTypeId = 5
        return require('../assets/fileImg/icon／pdf_30@2x.png')
      } else if (type === 'psd' || type === 'pdd') {
        this.fileTypeId = 6
        return require('../assets/fileImg/icon／ps_30@2x.png')
      } else if (type === 'ai') {
        this.fileTypeId = 7
        return require('../assets/fileImg/icon／ai_30@2x.png')
      } else if (
        type === 'mp3' ||
          type === 'wma' ||
          type === 'avi' ||
          type === 'rm' ||
          type === 'rmvb' ||
          type === 'flv' ||
          type === 'mpg' ||
          type === 'mov' ||
          type === 'mkv'
      ) {
        this.fileTypeId = 8
        return require('../assets/fileImg/icon／video_30@2x.png')
      } else if (
        type === 'avi' ||
          type === 'rmvb' ||
          type === 'rm' ||
          type === 'asf' ||
          type === 'divx' ||
          type === 'mpg' ||
          type === 'mpeg' ||
          type === 'mp4' ||
          type === 'mkv'
      ) {
        this.fileTypeId = 9
        return require('../assets/fileImg/icon／video_30@2x.png')
      } else if (
        type === 'BMP' ||
          type === 'jpg' ||
          type === 'jpeg' ||
          type === 'png' ||
          type === 'gif'
      ) {
        this.fileTypeId = 10
        return require('../assets/fileImg/icon／video_30@2x.png')
      } else if (type === 'html') {
        this.fileTypeId = 11
        return require('../assets/fileImg/icon／html_30@2x.png')
      } else if (type === 'css') {
        this.fileTypeId = 12
        return require('../assets/fileImg/icon／css_30@2x.png')
      } else if (type === 'folder') {
        this.fileTypeId = 0
        return require('../assets/fileImg/icon／folder_30@2x.png')
      } else {
        this.fileTypeId = 13
        return require('../assets/fileImg/icon／all_30@2x.png')
      }
    },
    // ------------------- 文件每一项的操作
    // 查看上链信息
    checkoutUpLineFun (item) {
      this.openMaskControl.upLineBoolean = true
      this.upLineId = item.id
      this.upLineName = item.name
    },
    upLineActionFun (value) {
      this.openMaskControl.upLineBoolean = false
    },
    downLoadDateFun (item) {
      if (item.fileTypeId != 10 || item.fileTypeId != 9) {
        let a = document.createElement('a')
        a.href = item.ipfsUrl
        a.click()
      } else {
        this.downloadIamge(item.ipfsUrl, item.name)
      }
    },
    nameChangeBoxFun (item, index) {
      this.openMaskControl.nameBoolean = true
      this.changeData.itemData = JSON.parse(JSON.stringify(item))
      this.changeData.fileRealName = this.changeData.itemData.name
      this.changeData.index = index
    },
    nameChangeFun (type) {
      if (type === 1) {
        this.openMaskControl.nameBoolean = false
      } else {
        this.renameFun(this.changeData.itemData)
      }
    },
    // 重命名
    renameFun (item) {
      let token = localStorage.token
      let params = {}
      if (item.fileTypeId === 0) {
        params.folderId = item.id
        params.state = 1
      } else {
        params.fileId = item.id
        params.state = 2
      }
      params.name = this.changeData.fileRealName
      this.$axios({
        method: 'post',
        url: apis.renameFolderOrFileApi,
        data: params,
        headers: {
          'Content-Type': 'application/json',
          Bearer: token
        }
      })
        .then((res) => {
          this.table.list[this.changeData.index].name = this.changeData.fileRealName
          this.changeData.index = null
          this.changeData.itemData = {}
          this.$message.success({
            content: this.$t('hint32'),
            background: true,
            duration: 5
          })
          this.openMaskControl.nameBoolean = false
        })
        .catch((err) => {
          console.log(err)
          this.$message.error({
            content: err.response.data,
            background: true
          })
        })
    },
    changeStatusFun (index) {
      this.selectData.statusList.forEach((element) => {
        element.isSelect = false
      })
      this.selectData.statusList[index].isSelect = true
      this.selectData.statusId = this.selectData.statusList[index].id
    },
    resetFun () {
      this.getFileListFun(1)
    },
    sureSelectFun () {
      this.searchData.clickNum = true
      this.selectData.selectBoolean = false
      if (this.selectData.time || this.selectData.statusId != 99) {
        this.searchData.iconHas = true
      }
      this.getFileListFun(1)
    },
    openFileFun (item) {
      if (item.fileTypeId === 10) {
        if (item.ipfsUrl) {
          this.openMaskControl.img = true
          this.previewImg = item.ipfsUrl
        }
      } else if (item.fileTypeId === 9) {
        if (item.ipfsUrl) {
          this.openMaskControl.video = true
          this.playerOptions['sources'][0]['src'] = item.ipfsUrl
        }
      } else {
        this.$message.info({
          content: this.$t('hint23'),
          background: true,
          duration: 5
        })
      }
    },
    closeYulanFun () {
      this.openMaskControl = {
        img: false,
        video: false
      }
    }
  }
}
</script>
