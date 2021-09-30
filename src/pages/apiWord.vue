<style scoped>
  .homeApp {
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    width: 100%;
    background: #f2f7f4;
  }

  .banner {
    display: flex;
    justify-content: center;
    margin-top: 61px;
  }

  .bannerLeft {
    width: 240px;
    height: 492px;
    background: #ffffff;
    padding: 16px 8px;
    position: fixed;
    top: 0;
    left: 0;
  }

  .bannerLeftKong {
    margin-right: 10px;
    width: 240px;
    height: 100%;
    transform: scale(1);
  }

  .bannerLeftItemApi {
    width: 100%;
    height: 46px;
    margin-bottom: 10px;
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 800;
    color: #333333;
    line-height: 46px;
    border-radius: 3px;
    padding-left: 16px;
  }

  .bannerLeftItem {
    width: 100%;
    height: 46px;
    margin-bottom: 10px;
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 400;
    color: #333333;
    line-height: 46px;
    border-radius: 3px;
    overflow: hidden;
    cursor: pointer;
    padding: 0 16px;
  }

  .bannerLeftItem:hover {
    color: #EF190F;
  }

  .bannerLeftItemSelect {
    background: #FFF3F2;
    border-right: 2px solid #EF190F;
  }

  .bannerRight {
    width: 950px;
    background: #ffffff;
  }

  .headPosition {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 99;
  }
</style>
<template>
  <div class="homeApp" ref="homeApp">
    <Head></Head>
    <div class="banner">
      <div class="bannerLeftKong">
        <div class="bannerLeft">
          <div class="bannerLeftItemApi">{{ $t('apiDoc') }}</div>
          <div class="bannerLeftItem" :class="{ bannerLeftItemSelect: item.select }" @click="changeAPITypeFun(item, index)" v-for="(item, index) in apiList" :key="index">
            <span>{{item.name}}</span>
          </div>
        </div>
      </div>
      <div class="bannerRight" :style="{ minHeight: screeHeight }">
        <Overview v-if="selectId === 1" @onChange="onChildFun"></Overview>
        <!-- <Signature v-if="selectId === 2" @onChange="onChildFun"></Signature>
        <FileStatus v-if="selectId === 3" @onChange="onChildFun"></FileStatus> -->
        <UpLoad v-if="selectId === 2" @onChange="onChildFun"></UpLoad>
        <CheckApiFile v-if="selectId === 3" @onChange="onChildFun"></CheckApiFile>
        <SearchApiFile v-if="selectId === 4" @onChange="onChildFun"></SearchApiFile>
        <CheckoutChange v-if="selectId === 5" @onChange="onChildFun"></CheckoutChange>
      </div>
    </div>
  </div>
</template>
<script>
import Head from '../funcomponents/head.vue'
import Overview from '../components/overview.vue'
import Signature from '../components/signature.vue'
import FileStatus from '../components/fileStatus.vue'
import UpLoad from '../components/upLoad.vue'
import CheckApiFile from '../components/checkApiFile.vue'
import SearchApiFile from '../components/searchApiFile.vue'
import CheckoutChange from '../components/checkoutChange.vue'
export default {
  components: {
    Head,
    Overview,
    Signature,
    FileStatus,
    UpLoad,
    CheckApiFile,
    SearchApiFile,
    CheckoutChange
  },
  data () {
    return {
      screeHeight: 1020,
      selectId: 1,
      apiList: [
        {
          name: '总览',
          select: true,
          id: 1
        },
        // {
        //   name: "用户注册",
        //   select: false,
        //   id: 2,
        // },
        // {
        //   name: "查询认证状态",
        //   select: false,
        //   id: 3,
        // },
        {
          name: '上传文件',
          select: false,
          id: 2
        },
        {
          name: '查询文件信息',
          select: false,
          id: 3
        },
        {
          name: '检索文件',
          select: false,
          id: 4
        },
        {
          name: '查询检索文件交易',
          select: false,
          id: 5
        } ]
    }
  },
  created () {
    this.screeHeight = document.documentElement.clientHeight - 60 + 'px'
    if (localStorage.selectId) {
      this.selectId = parseInt(localStorage.selectId)
      this.apiList.forEach((element) => {
        element.select = false
      })
      this.apiList[this.selectId - 1].select = true
    }
  },
  methods: {
    changeAPITypeFun (item, index) {
      this.apiList.forEach((element) => {
        element.select = false
      })
      this.apiList[index].select = true
      this.selectId = item.id
      localStorage.selectId = item.id
    },
    onChildFun (value) {
      this.apiList.forEach((element) => {
        element.select = false
      })
      localStorage.selectId = value
      this.selectId = value
      this.apiList[this.selectId - 1].select = true
      scrollTo(0, 0)
    }
  }
}
</script>
