<style scoped>
  .moveFileApp {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.2);
  }

  .moveFileBox {
    width: 520px;
    background: #FFFFFF;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.15);
    padding: 15px 20px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    margin: 0 auto;
    margin-top: 2.1rem;
    border-radius: 6px;
  }

  .folderBoxHead {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    color: #545767;
  }

  .folderBoxHead img {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }

  .moveFileActionTab {
    display: flex;
    align-items: center;
    width: 100%;
    font-size: 12px;
    color: #8F93A0;
    height: 30px;
    margin-top: 8px;
    margin-bottom: 8px;
  }

  .moveFileAction {
    width: 100%;
    height: 224px;
    background: #FFFFFF;
    border-radius: 4px;
    border: 1px solid #DBEEE6;
    overflow: hidden;
    overflow-y: scroll;
    position: relative;
  }

  .loading {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .moveFileAction::-webkit-scrollbar {
    width: 0px;
  }

  .moveFileAction::-webkit-scrollbar-thumb {
    width: 0px;
  }

  .moveFileActionItem {
    width: 100%;
    padding: 0 8px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .moveFileActionItem:hover {
    background: #fafafa;
  }

  .moveFileItemSelect {
    background: #eaeaea;
  }

  .moveFileItemRight {
    width: 16px;
    height: 16px;
  }

  .moveFileItemRight img {
    width: 16px;
    height: 16px;
  }

  .moveFileItemLeft {
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #333333;
  }

  .moveFileItemLeftDiv {
    width: 16px;
    height: 16px;
    background: #FFFFFF;
    border-radius: 2px;
    border: 1px solid #CCCCCC;
    margin-right: 8px;
  }

  .moveFileItemLeftDivAdd {
    border: 0px solid #CCCCCC;
  }

  .moveFileItemLeftDivImg {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }

  .moveFileItemLeftFolder {
    height: 20px;
    width: 20px;
    margin-right: 5px;
  }

  .moveFileFoot {
    margin: 0 auto;
    margin-top: 18px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .moveFileFootLeft {
    width: 90px;
    height: 34px;
    background: #f9f9f9;
    border-radius: 4px;
    font-size: 13px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: black;
    text-align: center;
    line-height: 34px;
    cursor: pointer;
  }

  .moveFileFootRight {
    display: flex;
  }

  .moveFileFootRightCome {
    width: 120px;
    height: 40px;
    border-radius: 4px;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
  }

  .moveFileFootCell {
    border: 1px solid black;
    color: black;
    margin-right: 10px;
  }

  .moveFileFootSure {
    background: #EF190F;
    color: #ffffff;
  }

  .selectTab {
    display: flex;
    align-items: center;
  }

  .selectTab img {
    width: 16px;
    height: 16px;
  }

  .selectTabItem {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .selectTabBack {
    width: 60px;
    height: 30px;
    background: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    line-height: 30px;
    font-size: 12px;
    color: black ;
    cursor: pointer;
    margin-right: 12px;
  }

  .addFileClassInput {
    width: 355px;
    height: 30px;
    border-radius: 2px;
    border: 1px solid black;
    padding: 6px 5px;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #333333;
  }

  .addFileAction {
    margin-left: 12px;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .addFileAction img {
    width: 16px;
    height: 16px;
    margin-right: 8px;
    cursor: pointer;
  }

  .addFolderClass {
    display: flex;
    align-items: center;
  }

  .wordCurpoint {
    cursor: default !important;
  }
</style>
<template>
  <div class="moveFileApp">
    <div class="moveFileBox">
      <div class="folderBoxHead">
        <span>移动到</span>
        <img src="../assets/zhezhao/close.png" alt="" @click="moveFileActionFun(1)" />
      </div>
      <div class="moveFileActionTab">
        <span v-if="selectList.length===1">全部文件</span>
        <div v-else>
          <div class="selectTab">
            <div class="selectTabBack" @click="selectTabBackFun">返回上级</div>
            <div v-for="(item,index) in selectList" :key="index" class="selectTabItem" @click="selectTabItemFun(item, index)">
              <img src="../assets/fileImg/arrow／bread_l@2x.png" alt="" v-if="index>0">
              <span v-if="selectList.length>3&&index<selectList.length-2&&index>0">...</span>
              <div v-else>
                <div v-if="item.toolTip">
                  <el-tooltip effect="dark" :content="item.name" placement="top">
                    <span>{{item.nameShow}}</span>
                  </el-tooltip>
                </div>
                <div v-else>
                  <span>{{item.nameShow}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="moveFileAction">
        <div class="moveFileActionItem" @click="selectRootFileFun" v-if="selectList.length===1">
          <div class="moveFileItemLeft">
            <div class="moveFileItemLeftDiv" v-if="!rootSelect"></div>
            <img src="../assets/fileImg/icon_sel@2x.png" v-else class="moveFileItemLeftDivImg">
            <img src="../assets/fileImg/icon／folder_30@2x.png" alt="" class="moveFileItemLeftFolder">
            <span class="wordCurpoint">/根目录：{{selectList[selectList.length-1].nameShow}}</span>
          </div>
        </div>
        <div class="moveFileActionItem" :class="{ moveFileItemSelect: item.select}" v-for="(item, index) in moveFileList" @click="selectMoveFileFun(item, index)" @dblclick="selectcengjiFun(item)" :key="index">
          <div class="moveFileItemLeft">
            <div class="moveFileItemLeftDiv" v-if="!item.select&&!item.add"></div>
            <img src="../assets/fileImg/icon_sel@2x.png" v-else-if="!item.add&&item.select" alt="" class="moveFileItemLeftDivImg">
            <div class="moveFileItemLeftDiv moveFileItemLeftDivAdd" v-else-if="!item.select&&item.add"></div>
            <div class="moveFileItemLeftDiv moveFileItemLeftDivAdd" v-else-if="item.select&&addFileName"></div>
            <img src="../assets/fileImg/icon／folder_30@2x.png" alt="" class="moveFileItemLeftFolder">
            <div v-if="!item.add">
              <div v-if="item.toolTip">
                <el-tooltip effect="dark" :content="item.name" placement="top">
                  <span class="wordCurpoint">{{item.nameShow}}</span>
                </el-tooltip>
              </div>
              <div v-else>
                <span class="wordCurpoint">{{item.nameShow}}</span>
              </div>
            </div>
            <div v-else class="addFolderClass">
              <input type="text" autofocus="autofocus" class="addFileClassInput" v-model="addFileName" placeholder="请输入文件名称">
              <div class="addFileAction" v-if="item.add">
                <img src="../assets/fileImg/conform@2x.png" alt="" @click.stop="setNewFileFun(2)" />
                <img src="../assets/fileImg/close@2x.png" alt="" @click.stop="setNewFileFun(1)" />
              </div>
            </div>
          </div>
          <div class="moveFileItemRight" v-if="!item.add" @click="selectcengjiFun(item)">
            <img src="../assets/fileImg/arrow／page_r_nor@2x.png" />
          </div>
        </div>
        <div class="loading" v-if="loading">
          <Loading width="32px" height="32px"></Loading>
        </div>
      </div>
      <div class="moveFileFoot">
        <div class="moveFileFootLeft" @click="moveFileAddFileFun">新建文件夹</div>
        <div class="moveFileFootRight">
          <div class="moveFileFootRightCome moveFileFootCell" @click="moveFileActionFun(1)">取消</div>
          <div class="moveFileFootRightCome moveFileFootSure" @click="moveFileActionFun(2)">确认</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import apis from '../common/apis.js'
import Loading from '../funcomponents/loading'
export default {
  data () {
    return {
      rootSelect: false,
      moveFileList: [],
      loading: false,
      apiFolderId: null,
      selectList: [
        {
          nameShow: '全部文件',
          id: 0
        }],
      clickControl: {
        selectListItem: true
      },
      addFileName: null,
      apiMoveFlderList: [],
      apiMoveFlderListFolder: []
    }
  },
  components: {
    Loading
  },
  props: {
    moveFlderList: {
      type: Array,
      default: []
    }
  },
  created () {
    this.moveFlderList.forEach((element) => {
      let id = element.id
      if (element.fileTypeId === 0) {
        this.apiMoveFlderListFolder.push(id)
      } else {
        this.apiMoveFlderList.push(id)
      }
    })
    this.moveFileListFun(1)
  },
  methods: {
    // 移动文件夹 列表
    moveFileListFun (page) {
      this.rootSelect = false
      this.loading = true
      let params = {}
      params.current = page
      params.size = 100
      params.folderId = this.apiFolderId
      let token = localStorage.token
      this.$axios({
        method: 'post',
        url: apis.getFolderByUserListApi,
        data: params,
        headers: {
          'Content-Type': 'application/json',
          Bearer: token
        }
      })
        .then((res) => {
          res.data.records[0].forEach((element) => {
            if (element.name.length > 30) {
              let stringStart = element.name.slice(0, 10)
              let srgingEnd = element.name.slice(element.name.length - 11)
              element.nameShow = stringStart + '...' + srgingEnd
              element.toolTip = true
            } else {
              element.nameShow = element.name
              element.toolTip = false
            }
            element.add = false
            element.select = false
            if (page > 1) {
              this.moveFileList.push(element)
            }
          })
          if (page === 1) {
            this.moveFileList = res.data.records[0]
          }
          this.loading = false
          this.apiFolderId = null
        })
        .catch((err) => {})
    },
    // 选择文件夹
    selectMoveFileFun (item, index) {
      this.rootSelect = false
      if (item.select) {
        this.apiFolderId = null
        item.select = false
        return
      }
      this.moveFileList.forEach((element) => {
        element.select = false
      })
      this.moveFileList[index].select = true
      this.apiFolderId = item.id
    },
    selectRootFileFun () {
      this.rootSelect = !this.rootSelect
      this.moveFileList.forEach((element) => {
        element.select = false
      })
      this.apiFolderId = this.selectList[this.selectList.length - 1].id
      console.log(this.apiFolderId)
    },
    // 移动文件夹里面 新增文件夹
    moveFileAddFileFun () {
      this.apiFolderId = this.selectList[this.selectList.length - 1].id
      let temp = {}
      temp.name = '新增文件夹'
      temp.id = this.selectList[this.selectList.length - 1].id
      temp.add = true
      this.moveFileList.unshift(temp)
    },
    // 移动文件夹 遮罩层
    moveFileActionFun (type) {
      if (type === 1) {
        this.$emit('onChange', 1)
      } else {
        this.mvFileBatchFun()
      }
    },
    // 双击 进入下一层
    selectcengjiFun (item) {
      this.apiFolderId = item.id
      this.selectList.push(item)
      this.moveFileListFun(1)
    },
    selectTabBackFun () {
      this.selectList = this.selectList.slice(0, this.selectList.length - 1)
      this.apiFolderId = this.selectList[this.selectList.length - 1].id
      this.moveFileListFun(1)
    },
    selectTabItemFun (item, index) {
      if (!this.clickControl.selectListItem) {
        return
      }
      this.clickControl.selectListtItem = false
      this.selectList = this.selectList.slice(0, index + 1)
      this.apiFolderId = item.id
      this.moveFileListFun(1)
    },
    // 是否 确认建立 新的文件夹
    setNewFileFun (type) {
      if (type === 1) {
        this.addFileName = null
        this.moveFileList = this.moveFileList.slice(1)
      } else {
        this.addMoveFolderFun()
      }
    },
    // 新建文件夹api
    addMoveFolderFun () {
      let token = localStorage.token
      let params = {}
      if (!this.addFileName) {
        this.$message.error({
          content: this.$t('hint33'),
          duration: 5
        })
        return
      }
      params.folderId = this.selectList[this.selectList.length - 1].id
      params.name = this.addFileName
      this.$axios({
        method: 'post',
        url: apis.addFolderApi,
        data: params,
        headers: {
          'Content-Type': 'application/json',
          Bearer: token
        }
      })
        .then((res) => {
          this.addFileName = null
          this.moveFileListFun(1)
        })
        .catch((err) => {
          this.$message.error({
            content: err.response.data
          })
        })
    },
    // mvFileBatchApi
    mvFileBatchFun () {
      let token = localStorage.token
      let params = {}
      if (this.apiFolderId != 0) {
        if (!this.apiFolderId) {
          this.$message.error({
            content: this.$t('hint34'),
            background: true,
            duration: 5
          })
          return
        }
      }
      let hasList = []
      console.log(this.selectList[0])
      hasList = this.apiMoveFlderListFolder.filter((item, ind, arr) => {
        if (this.selectList.length > 1) {
          return item === this.selectList[1].id || item === this.apiFolderId
        } else {
          return item === this.apiFolderId
        }
      })
      console.log('hasList', hasList)
      console.log('apiMoveFlderListFolder', this.apiMoveFlderListFolder)
      if (hasList.length > 0) {
        this.$message.error({
          content: this.$t('hint35'),
          background: true,
          duration: 5
        })
        return
      }
      params.folderId = this.apiFolderId
      params.fileList = this.apiMoveFlderList
      params.folderList = this.apiMoveFlderListFolder
      this.$axios({
        method: 'post',
        url: apis.mvFileBatchApi,
        data: params,
        headers: {
          'Content-Type': 'application/json',
          Bearer: token
        }
      })
        .then((res) => {
          if (res.status === 200) {
            this.$emit('onChange', 2)
            this.$message.success({
              content: this.$t('hint36'),
              duration: 5
            })
          }
        })
        .catch((err) => {
          console.log(err)
          this.$message.error({
            content: err.response.data
          })
        })
    }
  }
}
</script>
