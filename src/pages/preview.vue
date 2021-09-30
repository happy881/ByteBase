<template>
  <div class="pages">
<!--    <iframe :src="filePath" class="preview"></iframe>-->
    <div class="content">
      <div class="title">
        <h3>{{ $t('dataAPP') }}</h3>
        <i class="el-icon-close"></i>
      </div>
      <div class="content-bottom">
        <div class="picktitle">
          {{ $t('dataTips') }}
<!--          恭喜您成为冰塔认证数据伙伴，可以开始引入数据主体的愉快旅程了！-->
<!--          推广期内，每名数据伙伴申请的数据主体个数上限为150家，您可通过提交如下材料来完成每个（企业/机构）数据主体的申请。在资质满足的情况下，平台也支持数据伙伴复用自身的资质参与一家数据主体的申请和存储体验。-->
          <p>
            <span>
              {{ $t('hint100') }}
            </span>
            <span style="color: #EF190F;">{{ '*' }}</span>
            <span>
              {{ $t('hint101') }}
            </span>
          </p>
        </div>
        <div class="baseInfo">
          <div class="setnewModel">
            <span style="font-size: 16px;">{{ $t('requiredInfo') }}</span>
            <div class="modelDownLoad">
              <p>{{ $t('viewModel') }}</p>
              <i class="el-icon-view"></i>
            </div>
            <i class="setLines"></i>
          </div>
          <div class="certification">
            <div class="cell">
              <span class="setFontColor">*</span><span>{{ $t('regoinType') }}</span>
              <ul>
                <li  v-for="(item, index) in company" :key="index">
                  {{ item.label }}
                </li>
              </ul>
            </div>
            <div class="cell">
              <span class="setFontColor">*</span><span>{{ $t('companyName') }}</span>
              <el-input size="medium" type="text" v-model="companyName" class="input-text" :placeholder="$t('companyNamenotes')"></el-input>
            </div>
            <div class="cell">
              <span class="setFontColor">*</span><span>{{ $t('fullNametips') }}</span>
              <el-input size="medium" type="text" v-model="simpleName" class="input-text" :placeholder="$t('fullNamenotes')"></el-input>
            </div>
            <div class="cell">
              <span class="setFontColor">*</span><span>{{ $t('companyWeb') }}</span>
              <el-input size="medium" type="text" v-model="companyUrl" class="input-text" :placeholder="$t('companyWebnotes')"></el-input>
            </div>
            <div class="cell">
              <span class="setFontColor">*</span><span>{{ $t('companyLicense') }}</span>
              <div class="cell-content">
                <span class="setSpan">{{ $t('companyLicensenotes') }}</span>
                <el-button size="medium" class="btnAll">{{ $t('uploads') }}</el-button>
              </div>
              <div class="setBgd">
                <p>
                  <img
                    src="../assets/byteicon/zzimg.png"
                    alt=""/>
                  <span>{{ $t('businessLic') }}.jpeg</span>
                </p>
                <div style="cursor: pointer;">
                  {{ $t('delete') }}
                </div>
              </div>
            </div>
            <div class="cell">
              <span class="setFontColor">*</span><span>{{ $t('contactPerson') }}</span>
              <el-input size="medium" type="text" v-model="contextName" class="input-text" :placeholder="$t('contactPersonnotes')"></el-input>
            </div>
            <div class="cell">
              <span class="setFontColor">*</span><span>{{ $t('contactPhone') }}</span>
              <div class="haveBtn">
                <el-input size="medium" type="text" v-model="contextPhone" class="input-text setInputWidth" :placeholder="$t('contactPhonenotes')"></el-input>
                <el-button size="medium" class="btnAll">{{ $t('phoneVerification') }}</el-button>
              </div>
            </div>
            <div class="cell">
              <span class="setFontColor">*</span><span>{{ $t('contactMail') }}</span>
              <el-input size="medium" type="text" v-model="contextEmail" class="input-text" :placeholder="$t('contactMailnotes')"></el-input>
            </div>
          </div>
          <div class="cell">
            <span class="setFontColor">*</span><span>{{ $t('mediaUrl') }}</span>
            <div class="haveBtn">
              <el-input size="medium" type="text" v-model="mediaUrl" class="input-text setInputWidth" :placeholder="$t('mediaUrlnotes')"></el-input>
              <el-button size="medium" class="btnAll">{{ $t('add') }}</el-button>
            </div>
          </div>
          <div class="cell">
            <div class="setDown">
              <div>
                <span class="setFontColor">*</span><span>{{ $t('authorization') }}</span>
              </div>
              <div style="display: flex; align-items: center; cursor: pointer;">
                <p style="font-size: 13px;">{{ $t('downloadAuthorization') }}</p>
                <img src="../assets/byteicon/down.png" alt="">
              </div>
            </div>
            <div>
              <div class="cell-content">
                <span class="setSpan">{{ $t('authorizationnotes') }}</span>
                <el-button size="medium" class="btnAll">{{ $t('uploadAuthorization') }}</el-button>
              </div>
              <div class="setBgd">
                <p>
                  <img
                    src="../assets/byteicon/zzimg.png"
                    alt=""/>
                  <span>{{ $t('authorizate') }}.jpeg</span>
                </p>
                <div style="cursor: pointer;">
                  {{ $t('delete') }}
                </div>
              </div>
            </div>
          </div>
          <div class="cell">
            <span class="setFontColor">*</span><span>{{ $t('mainDescription') }}</span>
            <el-input size="medium" type="textarea" :placeholder="$t('mainDescriptionnotes')" :autosize="{ minRows: 4, maxRows: 4}" v-model="pattern" class="input-text"></el-input>
          </div>
          <div class="cell">
            <span class="setFontColor">*</span><span>{{ $t('distribution') }}</span>
            <el-input size="medium" type="textarea" :placeholder="$t('distributionnotes')" :autosize="{ minRows: 4, maxRows: 4}" v-model="scales" class="input-text"></el-input>
          </div>
          <div class="cell">
            <span class="setFontColor">*</span><span>{{ $t('contentSourse') }}</span>
            <el-input size="medium" type="textarea" :placeholder="$t('contentSoursenotes')" :autosize="{ minRows: 4, maxRows: 4}" v-model="situation" class="input-text"></el-input>
          </div>
          <div class="cell">
            <span class="setFontColor">*</span><span>{{ $t('sample') }}</span>
            <div class="setPadding">
              <span class="setSpan">{{ $t('samplenotes') }}</span>
              <el-button size="medium" class="btnAll">{{ $t('uploads') }}</el-button>
            </div>
            <div class="setBgd">
              <p>
                <img
                  src="../assets/byteicon/zzimg.png"
                  alt=""/>
                <span>{{ $t('sample') }}.jpeg</span>
              </p>
              <div style="cursor: pointer;">
                {{ $t('delete') }}
              </div>
            </div>
          </div>
          <div class="sizes">
            <div class="setSpace">
              <span class="setFontColor">*</span><span>{{ $t('applyStorage') }}</span>
              <ul>
                <li v-for="(item, index) in sizes" :key="index" class="setSize">
                  {{ item.label }}
                </li>
              </ul>
            </div>
          </div>
          <div class="sizes">
            <div class="setNotes">
              <span class="setFontColor">*</span><span>{{ $t('otherDocument') }}</span>
              <ul>
                <li v-for="(item, index) in note" :key="index" class="setSize">
                  {{ item.label }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div style="margin-top: 50px;"></div>
        <div class="baseInfo">
          <div class="setnewModel"><span style="font-size: 16px;">{{ $t('optionalItems') }}</span><i class="setLines"></i></div>
          <div class="certification">
            <div class="setSpace">
              <div class="cell">
                <span>{{ $t('charter') }}</span>
                <div class="cell-content">
                  <span class="setSpan">{{ $t('uploadCharter') }}</span>
                  <el-button size="medium" class="btnAll">{{ $t('uploads') }}</el-button>
                </div>
                <div class="setBgd">
                  <p>
                    <img
                      src="../assets/byteicon/zzimg.png"
                      alt=""/>
                    <span>{{ $t('Chart') }}.jpeg</span>
                  </p>
                  <div style="cursor: pointer;">
                    {{ $t('delete') }}
                  </div>
                </div>
              </div>
              <div class="cell">
                <span>{{ $t('shareHolder') }}</span>
                <div class="cell-content">
                  <span class="setSpan">{{ $t('screenshot') }}</span>
                  <el-button size="medium" class="btnAll">{{ $t('uploads') }}</el-button>
                </div>
                <div class="setBgd">
                  <p>
                    <img
                      src="../assets/byteicon/zzimg.png"
                      alt=""/>
                    <span>{{ $t('shareHolder') }}.jpeg</span>
                  </p>
                  <div style="cursor: pointer;">
                    {{ $t('delete') }}
                  </div>
                </div>
              </div>
              <div class="cell">
                <span>{{ $t('boardMembers') }}</span>
                <div class="cell-content">
                  <span class="setSpan">{{ $t('boardMembersnotes') }}</span>
                  <el-button size="medium" class="btnAll">{{ $t('uploads') }}</el-button>
                </div>
                <div class="setBgd">
                  <p>
                    <img
                      src="../assets/byteicon/zzimg.png"
                      alt=""/>
                    <span>{{ $t('boardMembers') }}.jpeg</span>
                  </p>
                  <div style="cursor: pointer;">
                    {{ $t('delete') }}
                  </div>
                </div>
              </div>
              <div class="cell">
               <span> {{ $t('naturalShareholder') }}</span>
                <div class="cell-content">
                  <span class="setSpan">{{ $t('naturalShareholdernotes') }}</span>
                  <el-button size="medium" class="btnAll">{{ $t('uploads') }}</el-button>
                </div>
                <div class="setBgd">
                  <p>
                    <img
                      src="../assets/byteicon/zzimg.png"
                      alt=""/>
                    <span>{{ $t('Identity') }}.jpeg</span>
                  </p>
                  <div style="cursor: pointer;">
                    {{ $t('delete') }}
                  </div>
                </div>
              </div>
              <div class="cell">
                <span>{{ $t('financialYear') }}</span>
                <div class="cell-content">
                  <span class="setSpan">{{ $t('financialYearnotes') }}</span>
                  <el-button size="medium" class="btnAll">{{ $t('uploads') }}</el-button>
                </div>
                <div class="setBgd">
                  <p>
                    <img
                      src="../assets/byteicon/zzimg.png"
                      alt=""/>
                    <span>{{ $t('financial') }}.jpeg</span>
                  </p>
                  <div style="cursor: pointer;">
                    {{ $t('delete') }}
                  </div>
                </div>
              </div>
              <div class="cell">
                <span>{{ $t('officeAddress') }}</span>
                <div class="cell-content">
                  <span class="setSpan">{{ $t('officeAddressnotes') }}</span>
                  <el-button size="medium" class="btnAll">{{ $t('uploads') }}</el-button>
                </div>
                <div class="setBgd">
                  <p>
                    <img
                      src="../assets/byteicon/zzimg.png"
                      alt=""/>
                    <span>{{ $t('addressCertificate') }}.jpeg</span>
                  </p>
                  <div style="cursor: pointer;">
                    {{ $t('delete') }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="protocol">
          <el-checkbox v-model="checkIt"><span class="protocol-content">{{ $t('aleady') }}</span><span class="href">{{ $t('btxy') }}</span></el-checkbox>
        </div>
      </div>
      <div class="content-btnGroup">
        <el-button class="setBtnStyle cancel" plain size="medium">{{ $t('cancel') }}</el-button>
        <el-button class="setBtnStyle" plain size="medium">{{ $t('Save') }}</el-button>
        <el-button class="makeSure" size="medium">{{ $t('confirms') }}</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import {EventBus} from '../../event-bus'

export default {
  name: 'preview',
  created () {
    EventBus.$emit('headhidden', false)
  },
  data () {
    return {
      filePath: `https://view.officeapps.live.com/op/view.aspx?src=https://bytebase-1304741688.cos.ap-shanghai.myqcloud.com/ByteBase%E6%95%B0%E6%8D%AE%E4%B8%BB%E4%BD%93%E7%94%B3%E8%AF%B7%E6%A8%A1%E7%89%88.docx`,
      sizes: [
        { label: '100GiB' },
        { label: '500GiB' },
        { label: '1.5TiB' },
        { label: '3TiB' },
        { label: '5TiB' },
        { label: this.$t('moreSize') }
      ],
      note: [
        { value: 2, label: this.$t('yes') },
        { value: 1, label: this.$t('no') }
      ],
      company: [
        { value: 1, label: this.$t('mainland') },
        { value: 2, label: this.$t('macauArea') },
        { value: 3, label: this.$t('overseas') }
      ],
      dataType: '',
      companyName: '上海冰塔信息科技有限公司',
      checkIt: true,
      mediaUrl: 'https://mp.weixin.qq.com/s?_biz=Mzg2MjU1OTU5Nw==&mid=2247484677&idx=1&sn=ce76264010236f4e02a21ee07dcbc924&chksm=ce074907f970c01111e9357eb8c66872af25c3f09545266003c4a5d7b5aba75106062f71ac8f&token=1682260407&lang=zhCN#rd',
      companyUrl: 'www.bytebase.cn',
      contextPhone: '13645678910',
      contextName: '李小明',
      contextEmail: 'partner@bytebase.cn',
      simpleName: 'bytebase',
      pattern: '冰塔的主营业务是打造一款Web2.0到Web3.0的去中心化隐私存储平台，是一款基于Filecoin区块链网络的存储入口型应用，让不愿意搭建Lotus节点，也不愿意做区块同步的客户，可以由冰塔来帮助实现，而客户则可方便地向Filecoin网络存储数据。',
      scales: '中心化分布式存储的特点  1．去中心化 所谓去中心化，是指由于区块链使用分布式核算和存储，不存在中心化的硬件或管理机构，任意节点的权利和义务都是均等的，系统中的数据块由整个系统中具有维护功能的节点来共同维护。  2．开放性 所谓开放性，是指区块链系统是开放的，除了对交易各方的私有信息进行加密，区块链数据对所有人公开，任何人都能通过公开的接口，对区块链数据进行查询，并能开发相关应用，整个系统的信息高度透明。',
      situation: '数据的初始来源为Web网站入口，由冰塔系统通过D-Rand去中心化随机加密处理过后形成数据包镜像，经封装后发送到分布全球的矿工节点，需要不断持续地承载存储空间。',
      contribution: '中心化分布式存储的特点\n' +
        ' 1．去中心化 所谓去中心化，是指由于区块链使用分布式核算和存储，不存在中心化的硬件或管理机构，任意节点的权利和义务都是均等的，系统中的数据块由整个系统中具有维护功能的节点来共同维护。 \n' +
        '2．开放性 所谓开放性，是指区块链系统是开放的，除了对交易各方的私有信息进行加密，区块链数据对所有人公开，任何人都能通过公开的接口，对区块链数据进行查询，并能开发相关应用，整个系统的信息高度透明。'
    }
  }
}
</script>

<style scoped>
  .preview{
  overflow: auto;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%
}
  .setFontColor {
    color: #EF190F
  }
  .pages {
    width: 100%;
    padding: 70px 0;
    background-color: #808080;
  }
  .content {
    width: 620px;
    /*height: 1800px;*/
    background-color: #ffffff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    margin: 0 auto;
    /*padding-bottom: 20px;*/
  }
  .title {
    height: 60px;
    /*line-height: 60px;*/
    font-size: 21px;
    color: #333333;
    font-weight: bold;
    padding: 0 22px;
    border-bottom: 1px solid #E8EAEC;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .el-icon-close {
    font-size: 21px;
    color: #333333;
    font-weight: bold;
    cursor: pointer;
  }
  .tabsName ul {
    display: flex;
    justify-content: space-between;
  }
  .tabsName ul>li{
    height: 60px;
    width: 206px;
    font-size: 16px;
    text-align: center;
    line-height: 60px;
    border-bottom: 4px solid #d9d9d9;
  }
  .tabsName ul>li:first-child {
    color: #EF190F;
    border-bottom-color: #EF190F;
  }
  .content-bottom {
    padding: 25px 28px;
  }
  .content-btnGroup {
    /*margin-top: 18px;*/
    text-align: right;
    padding: 20px 28px;
    border-top: 1px solid #e8eaec;
    position: sticky;
    bottom: 0;
    background-color: #FFFFFF;
    z-index: 100;
  }
  .picktitle {
    background-color: #fff3f2;
    padding: 13px 15px;
    word-wrap: break-word;
    word-break: normal;
  }
  .baseInfo {
    margin-top: 20px;
  }
  .baseInfo p {
    font-size: 16px;
  }
  .baseInfo span {
    font-size: 13px;
  }
  .sizes {
    margin-top: 17px;
  }
  .sizes ul {
    display: flex;
    justify-content: space-between;
  }
  .setSpace {
    margin-top: 20px;
  }
  .setNotes ul {
    display: flex;
    justify-content: flex-start;
  }
  .setNotes ul li {
    margin-right: 17px;
  }
  .setSize {
    cursor: pointer;
    width: 80px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    background-color: #f9f9f9;
    margin-top: 5px;
  }
  .setSize:first-child {
    color: #EF190F;
    border: 1px solid #EF190F;
  }
  .tabs {
    margin-top: 20px;
  }
  .tabs ul {
    display: flex;
    padding-left: 5px;
    margin-top: 10px;
    justify-content: flex-start;
  }
  .tabs ul>li {
    margin-right: 10px;
    padding: 5px;
    background-color: #f9f9f9;
    cursor: pointer;
  }
  .input-btn {
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
  }
  .input {
    width: 474px;
  }
  .btnAll {
    color: white;
    font-size: 12px;
    background-color: #333333;
    height: 36px;
  }
  .certification {
    margin-top: 20px;
  }
  .certification ul {
    margin-top: 5px;
    display: flex;
    justify-content: flex-start;
  }
  .certification ul>li {
    margin-right: 10px;
    padding: 5px;
    background-color: #f9f9f9;
    cursor: pointer;
  }
  .certification ul>li:first-child {
    color: #EF190F;
    border: 1px solid #EF190F;
  }
  .cell {
    margin-bottom: 20px;
  }
  .cell-content {
    margin-top: 8px;
    background-color: #f9f9f9;
    color: #a1a1a1;
    font-size: 12px;
    padding-left: 10px;
    display: flex;
    justify-content: space-between;
    /*height: 53px;*/
    align-items: center;
  }
  .setBgd {
    background-color: #f9f9f9;
    padding: 0 10px;
    height: 24px;
    line-height: 24px;
    display: flex;
    justify-content: space-between;
  }
  .setBgd img {
    /*margin-top: 5px;*/
  }
  .setPadding {
    margin-top: 8px;
    background-color: #f9f9f9;
    color: #a1a1a1;
    font-size: 12px;
    /*padding-left: 10px;*/
    display: flex;
    justify-content: space-between;
    /*height: 53px;*/
    align-items: center;
    padding: 10px 0 10px 10px;
  }
  .setSpan {
    width: 420px;
    /*margin-left: 10px;*/
    /*margin-right: 16px;*/
    /*height: 34px;*/
  }
  .haveBtn {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .input-text {
    margin-top: 5px;
  }
  .setInputWidth {
    width: 442px;
  }
  .protocol-content {
    color: #a1a1a1;
    font-size: 13px;
    /*margin-left: 14px;*/
    z-index: 1;
  }
  .href {
    color: #333333;
    font-size: 13px;
    text-decoration: underline;
    cursor: pointer;
    margin-left: 5px;
  }
  .makeSure {
    background-color: #ef190f;
    color: #ffffff;
    border-color: #ef190f;
  }
  .setBtnStyle {
    /*background-color: #ef190f;*/
    color: #ef190f;
    border-color: #ef190f;
  }
  .setBtnStyle:hover {
    color: #ef190f;
    border-color: #ef190f;
  }
  .setBtnStyle.is-plain:focus {
    color: #ef190f;
    border-color: #ef190f;
  }
  .cancel {
    color: #4f4f4f;
    border-color: #4f4f4f;
  }
  .cancel:hover {
    color: #4f4f4f;
    border-color: #4f4f4f;
  }
  .cancel.is-plain:focus {
    color: #4f4f4f;
    border-color: #4f4f4f;
  }
  .example {
    width: 536px;
    background-color: #f9f9f9;
    padding: 8px;
    margin-top: 8px;
  }
  .setTag {
    color: #333333;
    font-size: 12px;
    background-color: #d9d9d9;
    margin-left: 10px;
    margin-top: 5px;
  }
  .el-tag__close:hover {
    color: #333333;
  }
  .setDown {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .setDown img {
    width: 24px;
    height: 24px;
  }
  .modelDownLoad {
    height: 26px;
    display: flex;
    background: linear-gradient(270deg, #EF190F 0%, #F04D30 100%);
    box-shadow: 0px 2px 8px rgba(240, 77, 48, 0.5);
    opacity: 1;
    border-radius: 4px;
    color: #FFFFFF;
    font-weight: 400;
    padding: 0 5px;
    /*border-left: 4px solid #ef190f;*/
  }
  .modelDownLoad p {
    font-size: 12px;
    line-height: 26px;
    cursor: pointer;
  }
  .setnewModel {
    background-color: #F0F0F0;
    opacity: 1;
    border-radius: 2px;
    display: flex;
    justify-content: space-between;
    /*cursor: pointer;*/
    padding: 5px 20px;
    position: relative;
  }
  .setLines{
    width: 4px;
    height: 26px;
    background-color: #ef190f;
    position: absolute;
    left: 0;
    top: 5px;
  }
  .el-icon-view {
    font-size: 16px;
    line-height: 24px;
    margin-left: 5px;
  }
</style>
<style>
  .el-tag .el-tag__close {
    color: #333333;
  }
  .el-tag .el-tag__close:hover {
    color: #333333;
    background-color: #d9d9d9;
  }
  .el-button:active {
    border-color: #333333;
  }
  .el-checkbox__inner:hover {
    border-color: #cccccc;
    width: 14px;
    height: 14px;
  }
  .el-checkbox__input.is-focus .el-checkbox__inner {
    border-color: #cccccc;
  }
  .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #ef190f;
    border-color: #ef190f;
  }
</style>
