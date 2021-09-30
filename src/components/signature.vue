<style scoped>
</style>
<template>
  <div class="overview">
    <div class="overviewHead">API文档-用户注册</div>
    <div class="overviewBanner">
        <div class="overviewBannermid">

                  <div class="overviewTitle">
        <div class="overviewTitleLine"></div>
        <span>简介</span>
      </div>
      <div class="jianJie">
        <div class="jianJie_1">
          Authorization="ByteBase "+"平台id(从服务端获取)"+":signature"
        </div>
        <div class="jianJie_2">
          Signature&nbsp;是一个哈希值，具体为请求中特定元素的 HMAC-SHA1（RFC2104），因此
          Signature 会因请求不同而异。如果客户端请求中随附的Signature&nbsp;与服务端计算出的 Signature 相匹配，则证明请求者拥有 bytebaseCloud
          允许的访问权限
        </div>
        <div class="jianJie_4">
          <div class="jianJie_4_item">
            <div class="jianJie_4_item_l">访问地址</div>
            <div class="jianJie_4_item_r">
              https://server-cloud.bytebase.cn/cloudApi/v1/userRegister
            </div>
          </div>
          <div class="jianJie_4_item">
            <div class="jianJie_4_item_l">类型</div>
            <div class="jianJie_4_item_r">POST</div>
          </div>
          <div class="jianJie_4_item">
            <div class="jianJie_4_item_l">状态码</div>
            <div class="jianJie_4_item_r">200,-400204,-400208,-400300,-500100</div>
          </div>
        </div>
        <div class="jianJie_5">
          <div class="jianJie_5Title">具体生成规则</div>
          <div class="jianJie_5_info">
            <span>1：将请求参数按照Ascii降序排序</span>
            <span>2：将请求参数组转成json串</span>
            <span>3：对json串使用HMAC算法计算出hash值</span>
            <div class="jianJie_5_infoS">
              <span>4：将hash值</span>
              <span class="jianJie_5_infoSCom">hex.EncodeToString</span>
              <span>转成字符串作为</span>
              <span class="jianJie_5_infoSCom">signature</span>
            </div>
          </div>
        </div>
        <div class="jianJie_6">
          <div class="jianJie_5Title">响应码</div>
          <div class="jianJie_4">
            <div class="jianJie_4_item">
              <div class="jianJie_4_item_l">-400204</div>
              <div class="jianJie_4_item_r">注册失败</div>
            </div>
            <div class="jianJie_4_item">
              <div class="jianJie_4_item_l">-400208</div>
              <div class="jianJie_4_item_r">签名验证失败</div>
            </div>
            <div class="jianJie_4_item">
              <div class="jianJie_4_item_l">-400300</div>
              <div class="jianJie_4_item_r">参数校验失败</div>
            </div>
            <div class="jianJie_4_item">
              <div class="jianJie_4_item_l">200</div>
              <div class="jianJie_4_item_r">成功</div>
            </div>
            <div class="jianJie_4_item">
              <div class="jianJie_4_item_l">-500100</div>
              <div class="jianJie_4_item_r">服务器内部发生代码执行错误</div>
            </div>
          </div>
        </div>
      </div>
      <div class="overviewTitle">
        <div class="overviewTitleLine"></div>
        <span>请求接口格式：json</span>
      </div>
      <div class="jianJie_5Title">请求参数</div>
      <div class="jsonTable">
        <div class="jsonTableItem jsonTableItemHead">
          <div class="jsonTableItem_1">header</div>
          <div class="jsonTableItem_2">类型</div>
          <div class="jsonTableItem_3">描述</div>
          <div class="jsonTableItem_4">必填</div>
        </div>
        <div class="jsonTableItem">
          <div class="jsonTableItem_1">Content-Type</div>
          <div class="jsonTableItem_2">String</div>
          <div class="jsonTableItem_3">application/json</div>
          <div class="jsonTableItem_4">Y</div>
        </div>
        <div class="jsonTableItem">
          <div class="jsonTableItem_1">Authorization</div>
          <div class="jsonTableItem_2">String</div>
          <div class="jsonTableItem_3">-</div>
          <div class="jsonTableItem_4">Y</div>
        </div>
        <div class="jsonTableItem jsonTableItemHead">
          <div class="jsonTableItem_1">body</div>
          <div class="jsonTableItem_2">类型</div>
          <div class="jsonTableItem_3">描述</div>
          <div class="jsonTableItem_4">必填</div>
        </div>
        <div class="jsonTableItem" v-for="(item, index) in bodyList" :key="index">
          <div class="jsonTableItem_1">{{item.name}}</div>
          <div class="jsonTableItem_2">String</div>
          <div class="jsonTableItem_3">{{item.info}}</div>
          <div class="jsonTableItem_4">{{item.remark}}</div>
        </div>
      </div>
      <div class="jsonInfo">
        <div class="jianJie_5Title">请求示例</div>
        <div class="jsonInfoBox">
          <div>{</div>
          <div class="jsonInfoBoxContent">
            <div>"name": "test ",</div>
            <div>"mobile": "15199999999",</div>
            <div>"mainBody": "bytebaseIPFS",</div>
            <div>"officialWebsite": "http://www.bytebaseipfs.com/",</div>
            <div>"githupCodeUrl": "https://github.com/filecoin-project/lotus.git",</div>
            <div>"businessLicense": "https://iknow-pic.cdn.bcebos.com/8601a18b87d6277fa873d66c2 7381f30e924fc05",</div>
            <div>"socialUrl": "15099999999",</div>
            <div>"fileDemoUrl": "https://img.bytebaseipfs.com/Public/cloud_drive_pai/storage.zip",</div>
            <div>"remarks": ""</div>
          </div>
          <div>}</div>
        </div>
      </div>

      <div class="overviewTitle">
        <div class="overviewTitleLine"></div>
        <span>返回接口格式：json</span>
      </div>
      <div class="jianJie_5Title">返回参数</div>
      <div class="jsonTable">
        <div class="jsonTableItem jsonTableItemHead">
          <div class="jsonTableItem_1">参数名</div>
          <div class="jsonTableItem_2">类型</div>
          <div class="jsonTableItem_3">描述</div>
          <div class="jsonTableItem_4">必填</div>
        </div>
        <div class="jsonTableItem" v-for="(item, index) in resultList" :key="index">
          <div class="jsonTableItem_1">{{item.name}}</div>
          <div class="jsonTableItem_2">{{item.type}}</div>
          <div class="jsonTableItem_3">{{item.info}}</div>
          <div class="jsonTableItem_4">{{item.remark}}</div>
        </div>
      </div>
      <div class="jsonInfo">
        <div class="jianJie_5Title">返回示例</div>
        <div class="jsonInfoBox">
          <div>{</div>
          <div class="jsonInfoBoxContent">
            <div>"code": 200,</div>
            <div>"data": {</div>
            <div style="padding-left:20px">"userId": "c748bd41-90eb-2753-2dcf-f0678d238458"</div>
            <div>},</div>
            <div>"msg": "Success"</div>
          </div>
          <div>}</div>
        </div>
      </div>
    <div class="overviewFoot">
      <div class="overviewFootItem" @click="changeApiFunprew" @mouseover="preHoverFun()" @mouseout="preHoverOutFun()">
        <div class="overviewFootItemTop">
          <img src="../assets/apiImg/arrow／page_l_nor@2x.png" class="LeftImg" alt="" />
          <span>上一篇</span>
        </div>
        <span class="overviewFootItemBottom" :class="{hoverUnderlineStyle:perHoverShow}">总览</span>
      </div>
      <div class="overviewFootItem overviewFootItemRight" @click="changeApiFunnext" @mouseover="nextHoverFun()" @mouseout="nextHoverOutFun()">
        <div class="overviewFootItemTop">
          <span>下一篇</span>
          <img src="../assets/apiImg/arrow／page_r_nor@2x.png" class="RightImg" alt="" />
        </div>
        <span class="overviewFootItemBottom" :class="{hoverUnderlineStyle:nextHoverShow}">查询认证状态</span>
      </div>
    </div>
        </div>

    </div>

  </div>
</template>
<script>
import { EventBus } from '../../event-bus.js'
  export default {
    data() {
      return {
        nextHoverShow: false,
        perHoverShow: false,
        bodyList: [
        {
          name: "name",
          info: "姓名",
          type: "String",
          remark: "Y",
        },
        {
          name: "mainBody",
          info: "主体名称",
          type: "String",
          remark: "Y",
        },
        {
          name: "officialWebsite",
          info: "官网地址",
          type: "String",
          remark: "Y",
        },
        {
          name: "githupCodeUrl",
          info: "githup 代码地址",
          type: "String",
          remark: "Y",
        },
        {
          name: "businessLicense",
          info: "营业执照url",
          type: "String",
          remark: "Y",
        },
        {
          name: "socialUrl",
          info: "社交媒体url",
          type: "String",
          remark: "Y",
        },
        {
          name: "fileDemoUrl",
          info: "文件demourl",
          type: "String",
          remark: "Y",
        },
        {
          name: "remarks",
          info: "备注",
          type: "String",
          remark: "N",
        }, ],
        resultList: [
        {
          name: "code",
          type: "Number",
          info: "返回码",
          remark: "Y"
        },
        {
          name: "data",
          type: "Object",
          info: "数据结果集",
          remark: "Y"
        },
        {
          name: "userId",
          type: "String",
          info: "用户 id",
          remark: "Y"
        },
        {
          name: "msg",
          type: "String",
          info: "返回码描述",
          remark: "Y"
        }]
      };
    },
    created() {},
    methods: {
        changeApiFunprew(){
            EventBus.$emit("changeAPi","3-1")
        },
        changeApiFunnext(){
       EventBus.$emit("changeAPi","3-3")
        },
      changeApiFun(type) {
        this.$emit("onChange", type);
      },
      nextHoverFun() {
        this.nextHoverShow = true;
      },
      nextHoverOutFun() {
        this.nextHoverShow = false;
      },
      preHoverFun() {
        this.perHoverShow = true;
      },
      preHoverOutFun() {
        this.perHoverShow = false;
      }
    },
  };
</script>