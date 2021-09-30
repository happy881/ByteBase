<template>
  <div class="overview">
    <div class="overviewHead">{{ $t('secondItem') }}</div>
    <div class="overviewBanner">
      <div class="overviewBannermid">

        <div class="overviewTitle">
          <div class="overviewTitleLine"></div>
          <span>{{ $t('encryptionRule') }}</span>
        </div>
        <div class="steps">
          <div class="stepsContent">
            <p class="fontStyle">{{ $t('itemContent1') }}</p>
            <p class="textHeight"><span class="setFont">X-Amz-Date :</span> 20210310T020132Z</p>
          </div>
          <div class="stepsContent">
            <p class="fontStyle">{{ $t('itemContent2') }}</p>
            <p class="textHeight"><span class="setFont">X-Amz-Security-Token :</span> sessionToken</p>
          </div>
          <div class="stepsContent">
            <p class="fontStyle">{{ $t('itemContent3') }} <span class="word" v-if="lang === 'zh-CN'">X-Amz-Content-Sha256</span></p>
            <p class="textHeight" style="margin-left: 28px">{{ $t('itemContentTips1') }} <span class="word">UNSIGNED-PAYLOAD</span></p>
            <div class="jianJie">
              <div class="jsonTable">
                <div class="jsonTableItem jsonTableItemHead">
                  <div class="jsonTableItem_2 setWidth">req</div>
                  <div class="jsonTableItem_4">GET https://bos.bytebase.cn/</div>
                </div>
                <div class="jsonTableItem setHeight">
                  <div class="jsonTableItem_2 setWidth">X-Amz-Content-Sha256</div>
                  <div class="jsonTableItem_4 longText">e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855</div>
                </div>
              </div>
            </div>
          </div>
          <div class="stepsContent">
            <p class="fontStyle">{{ $t('itemContent4') }} (<span class="word">ServiceTypeS3</span> = "s3" | <span class="word">ServiceTypeSTS</span> = "sts")</p>
            <p class="textHeight" style="margin-left: 28px">{{ $t('itemContentTips2') }} <span class="word">ServiceTypeSTS</span> {{ $t('itemContentTips3') }} <span class="word">X-Amz-Content-Sha256</span></p>
          </div>
          <div class="stepsContent">
            <p class="fontStyle">{{ $t('itemContent5') }}</p>
            <div class="jsonInfo">
              <div class="jianJie_5Title">{{ $t('itemContentTips4') }}</div>
              <div class="jsonInfoBox">
                <div>GET</div>
                <div>/image/</div>
                <div>delimiter=&encoding-type=url&fetch-owner=true&list-type=2&prefix= host:localhost:9000 x-amz-content- sha256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855</div>
                <div>x-amz-date:20210310T030333Z</div>
                <div>host;x-amz-content-sha256;x-amz-date e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855</div>
              </div>
            </div>
          </div>
          <div class="stepsContent">
            <p class="fontStyle">{{ $t('itemContent6') }} <span class="word">stringToSign</span></p>
<!--            <p class="textHeight" style="margin-left: 28px">为空则赋值<span class="word">UNSIGNED-PAYLOAD</span></p>-->
            <div class="jianJie">
              <div class="jsonInfoBox">
                <div>AWS4-HMAC-SHA256\n20210310T030938Z\n20210310/us-east- 1/s3/aws4_request\n33be5e0950a274192e1cd4ad52f9ac64cb191c7e2ce966015665b82a3 4bb42ee</div>
                <div>"AWS4-HMAC-SHA256" + "\n" + t.Format(iso8601DateFormat) + "\n" + time.Format(yyyymmdd) + "/" + location + serverType + "/aws4_request" + "\n" + sha256(canonicalRequest)</div>
              </div>
            </div>
          </div>
          <div class="stepsContent">
            <p class="fontStyle">{{ $t('itemContent7') }} (secretAccessKey, t, location, serviceType) <span class="word">signingKey</span></p>
<!--            <p class="textHeight" style="margin-left: 28px">为空则赋值<span class="word">UNSIGNED-PAYLOAD</span></p>-->
            <div class="jianJie">
              <div class="jsonInfoBox">
                <div>HmacSha256(HmacSha256(HmacSha256(HmacSha256("AWS4" + secretAccessKey, t.Format(yyyymmdd)), location), serviceType), "aws4_request")</div>
              </div>
            </div>
          </div>
          <div class="stepsContent">
            <p class="fontStyle">{{ $t('itemContent8') }} (accessKeyID, location, t, serviceType) <span class="word">credential</span></p>
<!--            <p class="textHeight" style="margin-left: 28px">为空则赋值<span class="word">UNSIGNED-PAYLOAD</span></p>-->
            <div class="jianJie">
              <div class="jsonInfoBox">
                <div>accessKeyID/t/location/serviceType/aws4_request</div>
              </div>
            </div>
          </div>
          <div class="stepsContent">
            <p class="fontStyle">{{ $t('itemContent9') }} <span class="word">signedHeaders</span></p>
<!--            <p class="textHeight" style="margin-left: 28px">为空则赋值<span class="word">UNSIGNED-PAYLOAD</span></p>-->
            <div class="jianJie">
              <div class="jsonInfoBox">
                <div>host;x-amz-content-sha256;x-amz-date</div>
              </div>
            </div>
          </div>
          <div class="stepsContent">
            <p class="fontStyle">{{ $t('itemContent10') }} <span class="word">signature</span></p>
<!--            <p class="textHeight" style="margin-left: 28px">为空则赋值<span class="word">UNSIGNED-PAYLOAD</span></p>-->
            <div class="jianJie">
              <div class="jsonInfoBox">
                <div>hex.EncodeToString(HmacSha256(signingKey, []byte(stringToSign)))</div>
              </div>
            </div>
          </div>
          <div class="stepsContent">
            <p class="fontStyle">{{ $t('itemContent11') }}</p>
<!--            <p class="textHeight" style="margin-left: 28px">为空则赋值<span class="word">UNSIGNED-PAYLOAD</span></p>-->
            <div class="jianJie">
              <div class="jsonInfoBox">
                <div>auth = "AWS4-HMAC-SHA256 " + "Credential=" + credential + "," + "SignedHeaders=" + signedHeaders + "," + "Signature=" + signature</div>
              </div>
            </div>
          </div>
          <div class="stepsContent">
            <p class="fontStyle">{{ $t('itemContent12') }}</p>
<!--            <p class="textHeight" style="margin-left: 28px">为空则赋值<span class="word">UNSIGNED-PAYLOAD</span></p>-->
            <div class="jianJie">
              <div class="jsonInfoBox">
                <div>Header.Set("Authorization", auth)</div>
              </div>
            </div>
          </div>
        </div>
        <div class="overviewFoot">
          <div class="overviewFootItem" @click="changeApiFunprew" @mouseover="preHoverFun()" @mouseout="preHoverOutFun()">
            <div class="overviewFootItemTop">
              <img src="../assets/apiImg/arrow／page_l_nor@2x.png" class="LeftImg" alt="" />
              <span>{{ $t('lastOne') }}</span>
            </div>
            <span class="overviewFootItemBottom" :class="{hoverUnderlineStyle:perHoverShow}">{{ $t('generalOverview') }}</span>
          </div>
          <div class="overviewFootItem overviewFootItemRight" @click="changeApiFunnext" @mouseover="nextHoverFun()" @mouseout="nextHoverOutFun()">
            <div class="overviewFootItemTop">
              <span>{{ $t('nextOne') }}</span>
              <img src="../assets/apiImg/arrow／page_r_nor@2x.png" class="RightImg" alt="" />
            </div>
            <span class="overviewFootItemBottom" :class="{hoverUnderlineStyle:nextHoverShow}">{{ $t('fileList') }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {EventBus} from '../../event-bus'

export default {
  name: 'encryptionRules',
  data () {
    return {
      nextHoverShow: false,
      perHoverShow: false,
      resultList: [
        {
          name: 'Status',
          type: 'String',
          info: '200 OK',
          remark: 'Y'
        },
        {
          name: 'StatusCode',
          type: 'Int',
          info: '200',
          remark: 'Y'
        },
        {
          name: 'Proto',
          type: 'String',
          info: 'HTTP/1.1',
          remark: 'Y'
        },
        {
          name: 'ProtoMajor',
          type: 'Int',
          info: '1',
          remark: 'Y'
        },
        {
          name: 'Proto',
          type: 'String',
          info: 'HTTP/1.1',
          remark: 'Y'
        },
        {
          name: 'Header',
          type: 'Header',
          info: 'map[\n' +
            'Accept-Ranges:[bytes] \n' +
            'Content-Length:[174714] \n' +
            'Content-Security-Policy:[block-all-mixed-content] \n' +
            'Date:[Wed, 24 Mar 2021 02:50:39 GMT]\n' +
            'Etag:["c1427a68c439a7f95a6addf53eeeede6"] \n' +
            'Server:[MinIO] \n' +
            'Vary:[Origin] \n' +
            'X-Amz-Request-Id:[166F2783FF0EBC28] \n' +
            'X-Xss-Protection:[1; mode=block]\n' +
            ']',
          remark: 'Y'
        }
      ],
      lang: sessionStorage.getItem('lang')
    }
  },
  methods: {
    changeApiFunprew () {
      EventBus.$emit('changeAPi', '3-1')
    },
    changeApiFunnext () {
      EventBus.$emit('changeAPi', '3-3')
    },
    changeApiFun (type) {
      this.$emit('onChange', type)
    },
    nextHoverFun () {
      this.nextHoverShow = true
    },
    nextHoverOutFun () {
      this.nextHoverShow = false
    },
    preHoverFun () {
      this.perHoverShow = true
    },
    preHoverOutFun () {
      this.perHoverShow = false
    }
  }
}
</script>

<style scoped>
  .stepsContent {
    margin: 10px;
  }
  .setHeight {
    height: 100%;
  }
  .longText {
    padding: 0 16px;
    word-break: break-word;
  }
  .setWidth {
    padding-right: 0px;
  }
  .fontStyle {
    font-size: 14px;
    font-weight: 400;
  }
  .setFont, .word {
    font-size: 14px;
    font-weight: 600;
  }
  .setFont::before {
    content: ' ';
    margin-left: 28px;
  }
  .textHeight {
    margin: 10px 0;
    font-size: 14px;
  }
  .jianJie {
    margin: 10px 0;
  }
</style>
